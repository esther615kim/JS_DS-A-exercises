
https://www.codewars.com/kata/58999425006ee3f97c00011f/train/javascript

`
Every month, a random number of students take the driving test at Fast & Furious (F&F) Driving School. 
To pass the test, a student cannot accumulate more than 18 demerit points.

At the end of the month, F&F wants to calculate the average demerit points accumulated by ONLY the students who have passed, 
rounded to the nearest integer.

Write a function which would allow them to do so. 
If no students passed the test that month, return 'No pass scores registered.'.

매월 무작위의 학생들이 F&F(분노의 질주) 운전 학교에서 운전 시험을 봅니다.
시험에 통과하기 위해 학생은 벌점을 18점 이상 누적할 수 없습니다.

에프앤에프는 월말에 합격자만 누적 벌점 평균을 계산하고,
가장 가까운 정수로 반올림됩니다.

그렇게 할 수 있는 함수를 작성하십시오.
해당 달에 시험에 합격한 학생이 없으면 '등록된 합격 점수가 없습니다.'를 반환합니다.
`

my answer
```js
function passed(list) {
    //fail case
  let passed = list.filter((item) => item <= 18);
  if (!passed.length) return "No pass scores registered.";

  //filter => reduce sum => /list.length => round
  return Math.round(
    passed.reduce((acc, cur) => {
      return acc + cur;
    }, 0) / passed.length
  );

console.log(passed([16, 18, 20, 20]));
```
