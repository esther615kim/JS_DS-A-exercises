```js
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1
 

Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.
```

`AK1 in JS`

```js
var firstUniqChar = function(s) {
    // edge case
    if(s.length ===1) return 0;
    const characterCount = {} // hello -> {h:1, e:1,l:2,o:1}
    // add character count obj
    for(let i=0; i<s.length;i++){
        const char = s[i];
        characterCount[char] = characterCount[char] +1 || 1;
    }
    // find the first unique char
    for(let i =0; i<s.length;i++){
        const char = s[i];
        if(characterCount[char] ===1) return i;
    }
    // not existing
    return -1;
};
```
