# Algorithm Time-Complexity Analysis
-----------------------------------------------------------------------------------------------------
Goal: Understand how the runtime of an algorithm is affected by an increasing number of elements

## 5 Rules
-----------------------------------------------------------------------------------------------------
1. Analyze the worst case performance of the algorithm, i.e. Big O
2. Add steps in order (+); multiply nested steps(*)
3. Different inputs should have different variables, e.b. O(a+b)
4. Remove constants
5. Drop non-dominants

3 Types
----------------------------------------------------------------------------------------------------
1. Big O - Worst Case
ideal
O(1)           - Constant
O(log n)       - Logarithmic
O(n)           - Linear

Acceptable
O(n * logn)    - Log Linear

Avoid 
O(n^2)         - Quadratic
O(2^n)         - Exponential
O(n!)          - Factorial

2. Big Θ – Average/Tight Case

3. Big Ω – Best Case

Resources
------------------------------------------------------------------------------------------------------------
- Big-O Algorithm Complexity Cheat Sheet (Know Thy Complexities!) @ericdrowell - https://www.bigocheatsheet.com/
- Practical Java Examples of the Big O Notation - https://www.baeldung.com/java-algorithm-complexity

# Algorithms
## Core
- Recursion
- Dynamic Programming
- Comparison Sorting
    - Merge Sort
    - Quicksort
    - Bubble Sort
    - Selection Sort
    - Insertion Sort
- Searching
    - Linear Search
    - Binary Search
    - Breadth First Search (BFS)
    - Depth First Search (DFS)

## Resources
- Visualizin gData Structures & Algorithms: https://visualgo.net/en
- Unicode Characters | RapidTables: https://www.rapidtables.com/code/text/unicode-characters.html
- The Big-O Algorithm Complexity Cheat Sheet: https://www.bigocheatsheet.com/

## Dynamic Programming
- Closures | JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

## Recursion
- Recursion | Brilliant.org: https://brilliant.org/wiki/recursion-problem-solving/
- Tail Call Optimization in ES6: https://2ality.com/2015/06/tail-call-optimization.html

## Searching
- Graph Traversals | VisuAlgo: https://visualgo.net/en/dfsbfs
- Tree Traversals: Preorder, Inorder, & Postorder: https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
- Space Complexity: BFS vs DFS: https://stackoverflow.com/questions/9844193/what-is-the-time-and-space-complexity-of-a-breadth-first-and-depth-first-tree-tr

## Sorting
- Array.prototype.sort(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
- Animated Sorting | Toptal: https://www.toptal.com/developers/sorting-algorithms
- Dancing Algorithms | AlgoRythmics: https://www.youtube.com/user/AlgoRythmics/videos
- Quicksort vs Heapsort: https://stackoverflow.com/questions/2467751/quicksort-vs-heapsort
- Importance of Stability in Sorting: https://stackoverflow.com/questions/1517793/what-is-stability-in-sorting-algorithms-and-why-is-it-important

## Most Common Sorts
- Merge Sort | Brilliant.org: https://brilliant.org/wiki/merge/
- Quicksort | Brilliant.org: https://brilliant.org/wiki/quick-sort/
- Heap Sort | Brilliant.org: https://brilliant.org/wiki/heap-sort/
- Radix Sort | Brilliant.org: https://brilliant.org/wiki/radix-sort/
- Radix Sort Visualization: https://www.cs.usfca.edu/~galles/visualization/RadixSort.html
- Counting Sort | Brilliant.org: https://brilliant.org/wiki/counting-sort/
- Counting Sort Visualization: https://www.cs.usfca.edu/~galles/visualization/CountingSort.html
