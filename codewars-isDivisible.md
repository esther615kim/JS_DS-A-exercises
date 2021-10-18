https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

It's the academic year's end, fateful moment of your school report.
The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

```
학년말, 성적표의 운명적인 순간입니다. 평균을 계산해야 합니다. 모든 학생들이 당신에게 와서 그들의 평균을 계산하도록 간청합니다. 
쉬운 ! 스크립트를 작성하기만 하면 됩니다.

주어진 배열의 평균을 가장 가까운 정수로 내림하여 반환합니다.

배열은 절대 비어 있지 않습니다.
```


my answer//not working on codewars but working on codesandbox

```js
function getAverage(marks) {

  return marks.reduce((a,b)=>a+b)/marks.length;
}
```
