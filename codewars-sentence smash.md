
### Sentence Smash
Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, 
there shouldn't be a space at the beginning or the end of the sentence!


`in Korean
문장 스매시
단어 배열을 가져와서 하나의 문장으로 부수고 문장을 반환하는 함수를 작성하세요.
단어를 삭제하거나 구두점을 추가할 필요는 무시할 수 있지만 각 단어 사이에 공백을 추가해야 합니다. 조심하세요,
문장의 시작이나 끝에 공백이 있어서는 안됩니다!
`

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'


https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript

first thought => didn't work
```js
words.join(' ') 
```

2nd try
```js
function smash (words) {
    for (i = 0; i > words.length; i++) {
    words.splice(" ");}
    return words.join(" ");
}
```
