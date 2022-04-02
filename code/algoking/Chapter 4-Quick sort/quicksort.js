// Add up all the numbers from array and return the total 
function sum(arr) {
    let total = 0;
    for (i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total;
}
arr = [2, 5, 6]
console.log(sum(arr))

function count(array) {
    if (array.length === 0) return 0;
    return 1 + count(array.slice(1));
}

console.log(count([0, 1, 2, 3, 4, 5])); // 6

function sumRecursive(array) {
    if (array.length == 1) return array[0];
    return array[0] + sumRecursive(array.slice(1));
}

console.log(sumRecursive([1, 2, 3, 4])); // 10

"use strict";

/**
 * Calculate the largest number
 * This solution only works for arrays longer than one
 * @param {Array} array Array of numbers
 * @returns {number} The argest number
 */
function max(array) {
    if (array.length === 2) return array[0] > array[1] ? array[0] : array[1];
    let sub_max = max(array.slice(1));
    return array[0] > sub_max ? array[0] : sub_max;
}

/**
 * Calculate the largest number
 * This solution works for arrays of any length
 * @param {Array} array Array of numbers
 * @param {number} max Maximum value
 * @returns {number} The argest number
 */
function alternativeSolutionMax(array, max = 0) {
    return array.length === 0
        ? max
        : alternativeSolutionMax(array.slice(1), array[0] > max ? array[0] : max);
}

console.log(max([1, 5, 10, 25, 16, 1])); // 25
console.log(alternativeSolutionMax([1, 5, 10, 25, 16, 1])); // 25

function sumReduce(array) {
    return array.reduce(function (curr, prev) {
        return curr + prev;
    });
}

console.log(sumReduce([1, 2, 3, 4])); // 10

"use strict";

/**
 * Quick array sorting
 * @param {Array} array Source array
 * @returns {Array} Sorted array
 */
function quicksort(array) {
    // base case, arrays with 0 or 1 element are already "sorted"
    if (array.length < 2) return array;
    // recursive case
    let pivot = array[0];
    // sub-array of all the elements less than the pivot
    let less = array.slice(1).filter(function (el) {
        return el <= pivot;
    });
    // sub-array of all the elements greater than the pivot
    let greater = array.slice(1).filter(function (el) {
        return el > pivot;
    });
    return quicksort(less).concat([pivot], quicksort(greater));
}

console.log(quicksort([10, 5, 2, 3])); // [2, 3, 5, 10]

