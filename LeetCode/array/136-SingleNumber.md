```js
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
 
```

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.

`AK1 in JS`
```js
var singleNumber = function(nums) {
    // create hashmap of an array
    let obj = {} 
    // count of all nums
    for(let i of nums){ // i => element in nums
        if(!obj[i]) obj[i] =1;
        else obj[i]++
    }
    // check for single count num
    for(let i in obj){
        if(obj[i]===1) return i;
    }
};
```
