169. Majority Element

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 
```js
Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 
```
Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 

`Follow-up: Could you solve the problem in linear time and in O(1) space?`

`AK in JS`

```js
var majorityElement = function(nums) {
    // early return
    if (nums.length ===1) {
        return nums[0];
    }
    
    const hashtable = {};
    let half = nums.length/2;
    let ht = {}
    
    // create a hashtable 
    for (const num of nums) {
        hashtable[num] = hashtable[num] + 1 || 1;
    }
    // check for manority elem
    for (const key in hashtable) {
        if (hashtable[key] > half) return key;
    }
};
```
