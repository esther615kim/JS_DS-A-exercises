const {singleNumber,containDuplicate} = require('./index')
// 136
describe("#136-singleNumber",()=>{
    // test passed values
    test("should pass an array",()=>{
        const array =[1,2,3,1];
        expect(typeof array).toBe('object');
    })
    // :( fails
    test("should pass a non-empty array",()=>{
        expect(singleNumber([])).toThrow("empty array");
    })
    // test returned values
    test("should retun a number appeared only once",()=>{
        const array =[1,2,3,1,2]
        expect(singleNumber(array)).toBe(3);
    })
})
// 220 
describe("#220-containDuplcate",()=>{
    // test passed values
    test("should pass an array",()=>{
        const array =[1,2,3,1];
        expect(typeof array).toBe('object');
    })
    //test returned values
    test("should return true if any value appears at least twice",()=>{
        expect(containDuplicate([1,2,3,1])).toBeTruthy();
    })
    test("should return true if any value appears at least twice",()=>{
        expect(containDuplicate([1,2,3])).toBeFalsy();
    })
})
