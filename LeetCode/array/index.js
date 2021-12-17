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

// #122
removeDuplicates([0, 0, 1, 2, 4, 3, 2, 3, 1, 1, 0]);
// [0,0,1,2,3,4,2,3,1,1,0]
// returns the new length of array! [0,1,2,3,4]
}


function maxProfit(array) {
  let profit = 0;
  let stockPrice = 0; //
  let hasStock = false;

  for (let i = 0; i < array.length; i++) {
    // buying condition
    if (!hasStock && array[i] < array[i + 1]) {
      stockPrice = array[i];
      hasStock = true;
    }
    // selling condition
    if (hasStock && array[i - 1] < array[i]) {
      profit = profit + (array[i] - stockPrice);
      stockPrice = 0;
      hasStock = false;
      console.log("profit", array[i], stockPrice, profit);
      // DRY!
      if (!hasStock && array[i] < array[i + 1]) {
        stockPrice = array[i];
        hasStock = true;
      }
    }
  }
  return profit;
}
console.log(maxProfit([2, 1, 2, 0, 2]));
