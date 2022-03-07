```js
Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
```

`#1 runtime error`
```js
var reverseList = function(head) {
      // result empty array;
  // for loop => length-1 =>pop => push
  const result = [];
  const length = head.length;
  for (let i = length - 1; i >= 0; i--) {
    let added = head.pop();
    result.push(added);
  }
  return result;
};

`#2 possible answer`
```js
 */
var reverseList = function(head) {
    let prev = null;
    while(head !== null){
        let nextNode = head.next;
        head.next = prev;
        prev = head;
        head = nextNode;
    }
    return prev;
};
```

```
