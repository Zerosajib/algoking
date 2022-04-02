// Selection Sort - O(n^2)
function findSmallest(arr) {
    let smallest = arr[0]; // Stores the smallest value
    let smallestIndex = 0; // Stores the index of the smallest value
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
            smallestIndex = i;
        }
    }
    return smallestIndex;
}
const selectionSort = (arr) => { // Sorts an array
    let newArray = []
    let arrLength = arr.length
    for (i = 0; i < arrLength; i++) {
        let smallestIndex = findSmallest(arr); // find the smallest  Element  in the  arr adds to the newArray . 
        newArray.push(arr.splice(smallestIndex, 1)[0]);

    }
    return newArray;
}

myArray = [2, 4, 5, 6, 7, 11, 15, 14, 16]
console.log(selectionSort(myArray))

// sorting list 
function findsmalled(arr) {
    let smallest = arr[0];
    let smallestIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
            smallestIndex = i
        }
    }
    return smallestIndex
}
function sortarry(arr) {
    let newsortArrary = []
    let lengtht = arr.length;
    for (i = 0; i < lengtht; i++) {
        let smallestlist = findsmalled(arr);
        newsortArrary.push(arr.splice(smallestlist, 1)[0])

    }
    return newsortArrary
}

myArray = [5, 3, 6, 2, 10]
console.log(sortarry(myArray))
  // console.log(sortarry(myArray))