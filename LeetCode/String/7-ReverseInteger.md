```js
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1
```

`AK in JS`
var reverse = function(x) {
    const limit = 2147483648;
    const negativeTest = x<0? -1:1;
    
    x = x.toString();
    let result ="";
    for(let i of x){
        result = i + result;
        result = parseInt(result);
        return result > limit? 0: result * negativeTest
    }  
};
