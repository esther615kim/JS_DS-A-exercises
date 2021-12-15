// #26
function removeDuplicates(arr) {
  // edgecase
  if (!arr) return 0;
  // #1 Set
  return [...new Set(arr)].length;

  // #2 higher-order method map
    let arrayLength = 0;
    const uniqueArray = [];

    arr.map((item) => {
      if (uniqueArray.indexOf(item) < 0) {
        arrayLength++;
        uniqueArray.push(item);
      }
      return arrayLength;
    });
  }

  // #3 for-loop
  let arrayLength = 0;
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) < 0) {
      arrayLength++;
      uniqueArray.push(arr[i]);
    }
  }
  console.log(arrayLength);
  return arrayLength;
}

removeDuplicates([0, 0, 1, 2, 4, 3, 2, 3, 1, 1, 0]);
// [0,0,1,2,3,4,2,3,1,1,0]
// returns the new length of array! [0,1,2,3,4]
}
