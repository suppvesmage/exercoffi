let n = 10; // Let's assume n is 10 for this example

for (let i = 0, d0 = -Infinity; i < n; i++) {
    // Example operation: Find the maximum value in an array
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    if (array[i] > d0) {
        d0 = array[i];
    }
}

console.log(d0); // Output: 10 (the maximum value in the array)
