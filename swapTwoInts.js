// swap two integers
// no returns, just console.log
// func only for ease of testing 
// Time Complexity: O(1)
// Space Complexity: O(1)

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
