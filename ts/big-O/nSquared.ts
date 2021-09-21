const boxes = ["a", "b", "c", "d", "e"];

function logAllPairs(array: Array<any>): void {
    for (let i = 0; i < array.length; i++) {             // O(n)
        for(let j = 0; j < array.length; j++) {          // O(n)
            console.log(array[i], array[j]);             // O(n)
        }
    }
}

const printNumbersThenPairSums = (numbers: Array<number>): void => {
    console.log("these are the numbers: ");
    numbers.map((number) => {                            //O(n)
        console.log(number);
    });

    console.log("these are their sums: " );
    numbers.map((firstNumber) => {                       // O(n)
        numbers.map((secondNumber) => {                  // O(n)
            console.log(firstNumber + secondNumber);     // O(n)
        });
    });
}

logAllPairs(boxes);                                      // O(n * 2n) => O(n^2)
printNumbersThenPairSums([1, 2, 3, 4, 5]);               // O(n + n*2n) => O(n^2)