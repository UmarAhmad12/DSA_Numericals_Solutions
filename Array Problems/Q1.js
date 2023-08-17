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

                // Solution 1 --> Using Sorting

/**
 *     Brute force Approach: 
 * 
Sort the array in ascending order.
Print the (size of the array -1)th index.

DryRun: 
Before sorting: arr[] = {2,5,1,3,0};

After sorting: arr[] = {0,1,2,3,5};

Hence answer : arr[sizeofthearray-1] = 5

Time Complexity: O(N*log(N))

Space Complexity: O(n)

 */

function sortArr(arr) {
    arr.sort((a,b) => a - b)
    return arr[arr.length - 1]; 
}
const arr1 = [2,5,1,3,0];
const arr2 = [8,10,5,7,9];

console.log(sortArr(arr1));     // OUT: 5
console.log(sortArr(arr2));     // OUT: 10


//                Solution 2 --> Using a max variable

/**
 *    Optimal Approach: 
 * 
Create a max variable and initialize it with arr[0].

Use a for loop and compare it with other elements of the array

If any element is greater than the max value, update max value with the element’s value
Print the max variable.

Time Complexity: O(N)

Space Complexity: O(1)

 */

function findLargestElement(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
      }
    }
    return max;
  }
  
  const arr3 = [2, 5, 1, 3, 0];
  let result = findLargestElement(arr3);
  console.log("The largest element in the array is: " + result);
  
  const arr4 = [8, 10, 5, 7, 9];
  let result1 = findLargestElement(arr4);
  console.log("The largest element in the array is: " + result1);