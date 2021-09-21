function compressBoxes(fullBoxes: Array<string>, emptyBoxes: Array<string>) {
    fullBoxes.forEach((box) => { // O(j)
        console.log(box);
    });

    emptyBoxes.forEach((box) => { // O(k)
        console.log(box);
    });
}

// Time Complexity: O(j+k)