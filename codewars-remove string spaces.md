
// Remove String Spaces 
https://www.codewars.com/kata/57eae20f5500ad98e50002c5/solutions/javascript

```js
function noSpace(x) {
  return x.split("").filter((element, i) => element != " ").join('');
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));
```
