
https://www.codewars.com/kata/58999425006ee3f97c00011f/train/javascript
`
Every month, a random number of students take the driving test at Fast & Furious (F&F) Driving School. 
To pass the test, a student cannot accumulate more than 18 demerit points.

At the end of the month, F&F wants to calculate the average demerit points accumulated by ONLY the students who have passed, 
rounded to the nearest integer.

Write a function which would allow them to do so. 
If no students passed the test that month, return 'No pass scores registered.'.
`

my answer
```js
function passed(list) {
  //edge case
  if(list.filter((item) => item < 18) //return "No pass scores registered.";
  
  //filter => reduce sum => /list.length => round
  let passed = list.filter((item) => item <= 18);
  return Math.round(
    passed.reduce((acc, cur) => {
      return acc + cur;
    }, 0) / passed.length
  );
}

console.log(passed([16, 18, 20, 20]));
```
