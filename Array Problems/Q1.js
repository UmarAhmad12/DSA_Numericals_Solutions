/**
 * Find the Largest element in an array
 * 
Problem Statement: Given an array, we have to find the largest element in the array.
Example 1:
Input: arr[] = {2,5,1,3,0};
Output: 5
Explanation: 5 is the largest element in the array. 

Example2: 
Input: arr[] = {8,10,5,7,9};
Output: 10
Explanation: 10 is the largest element in the array. 
 */

                // Solution 1 --> Sorting

/**
 * Brute force Approach: 
 * 
Sort the array in ascending order.
Print the (size of the array -1)th index.

DryRun: 
Before sorting: arr[] = {2,5,1,3,0};

After sorting: arr[] = {0,1,2,3,5};

Hence answer : arr[sizeofthearray-1] =5
 */

function sortArr(arr) {
    arr.sort((a,b) => a - b)
    return arr[arr.length - 1]; 
}
const arr1 = [2,5,1,3,0];
const arr2 = [8,10,5,7,9];

console.log(sortArr(arr1));     // OUT: 5
console.log(sortArr(arr2));     // OUT: 10