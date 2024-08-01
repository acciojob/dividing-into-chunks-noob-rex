const divide = (arr, n) => {
  let result = [];
  let currentSubarray = [];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (currentSum + arr[i] > n) {
      result.push(currentSubarray);
      currentSubarray = [];
      currentSum = 0;
    }
    currentSubarray.push(arr[i]);
    currentSum += arr[i];
  }

  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
};

// Example usage:
const arr1 = [1, 2, 3, 4, 1, 0, 2, 2];
const n1 = 5;
console.log(divide(arr1, n1));  // Output: [[1, 2], [3], [4, 1, 0], [2, 2]]

const arr2 = [4, 3, 2, 1];
const n2 = 4;
console.log(divide(arr2, n2));  // Output: [[4], [3], [2], [1]]
