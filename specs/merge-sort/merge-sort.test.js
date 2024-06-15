/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  if (nums.length === 1 || nums.length === 0) return nums;

  const mid = Math.floor(nums.length / 2);

  return merge(mergeSort(nums.slice(0, mid)), mergeSort(nums.slice(mid)));
};

const merge = (nums1, nums2) => {
  let orderedNums = [];

  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      orderedNums.push(nums1[i]);
      i++;
    } else {
      orderedNums.push(nums2[j]);
      j++;
    }
  }

  if (i === nums1.length) orderedNums = orderedNums.concat(nums2.slice(j));
  else orderedNums = orderedNums.concat(nums1.slice(i));

  return orderedNums;
};

// unit tests
// do not modify the below code
test.skip("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  console.log(ans);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
