https://www.codewars.com/kata/58279e13c983ca4a2a00002a

> You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an array where each object will have a new property 'greeting' with the following string value:

Hi < firstName here >, what do you like the most about < language here >?

For example, given the following input array:
```js
var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
your function should return the following array:

[
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    greeting: 'Hi Sofia, what do you like the most about Java?'
  },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
    greeting: 'Hi Lukas, what do you like the most about Python?'
  },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
    greeting: 'Hi Madison, what do you like the most about Ruby?'
  } 
];
```
Notes:

The order of the properties in the objects does not matter.
The input array will always be valid and formatted as in the example above.



### my code
```Js
function countDevelopers(list) {
  // your awesome code here :)

  list.forEach((item) => {
    item.greeting = `Hi ${item.firstName}, what do you like the most about ${item.language}?`;
    console.log(item);
  });
  return list;
}

// test
console.log(
  countDevelopers([
    {
      firstName: "Noah",
      lastName: "M.",
      country: "Switzerland",
      continent: "Europe",
      age: 19,
      language: "JavaScript"
    },
    {
      firstName: "Maia",
      lastName: "S.",
      country: "Tahiti",
      continent: "Oceania",
      age: 28,
      language: "JavaScript"
    },
    {
      firstName: "Shufen",
      lastName: "L.",
      country: "Taiwan",
      continent: "Asia",
      age: 35,
      language: "HTML"
    },
    {
      firstName: "Sumayah",
      lastName: "M.",
      country: "Tajikistan",
      continent: "Asia",
      age: 30,
      language: "CSS"
    }
  ])
);
``
