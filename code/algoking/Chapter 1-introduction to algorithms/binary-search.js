/*
Binary search only works when your list is in sorted order. For example,
the names in a phone book are sorted in alphabetical order, so you can
use binary search to look for a name. 
*/

'use strict';
function binary_search(list, target) {
    let low = 0;
    let high = list.length - 1 // low and high keep track which part of the list you will search in.

    while (low <= high) {
        let mid = Math.floor((low + high) / 2); // check the middle element 
        let guess = list[mid]
        if (guess === target) {
            return mid  // found the mid item
        }
        if (guess > target) {
            high = mid - 1 // the guess was too high decrease it 
        } else {
            low = mid + 1 // the guess was too low increase the  guess no 
        }
    }
    return null;
}

const binary_list = [1, 3, 5, 6, 8, 9]
console.log(binary_search(binary_list, 8))
console.log(binary_search(binary_list, -10))

