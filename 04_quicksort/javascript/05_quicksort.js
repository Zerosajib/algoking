"use strict";

/**
 * Quick array sorting
 * @param {Array} array Source array
 * @returns {Array} Sorted array
 */
 var sortArray = function(nums) {
  if (nums.length<1) return nums;
  let pivot = nums[0]
  let left = nums.slice(1).filter(function(a1){
      return a1<= pivot;
  })
  let right = nums.slice(1).filter(function(b1){
      return b1>pivot;
  })
  return sortArray(left).concat([pivot],sortArray(right));
  
};

console.log(quicksort([10, 5, 2, 3])); // [2, 3, 5, 10]
