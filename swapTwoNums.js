// swap two numbers
// func only for ease of testing 

function swap(a, b) {
    console.log("a = " + a + " b = " + b);

    a = a + b;
    b = a - b;
    a = a - b;

    console.log("a = " + a + " b = " + b);
    console.log("-----------------");
}

swap(-10, 0);
swap(0, 5);

swap(-10, -5);
swap(10, 5);

swap(-10, 5);
swap(10, -5);
swap(-3, -3);

// Time Complexity: O(1)
// Space Complexity: O(1)