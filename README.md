[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12338791&assignment_repo_type=AssignmentRepo)
# Graph Representations

Implement a function that converts an adjacency list to an adjacency matrix for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Answer
A function that converts an adjacency list to an adjacency matrix's time complexity is $O(V*E)$:

1. var V = adjList.length; $O(1)$

2. var matrix = Array.from(Array(V), ()=>Array(V).fill(0)); $O(v^2)$,because this creates 2D matrix depend on number of vertices

3. for (var i = 0; i < V; i++) {// two for loops, first for loop depend on vertices, $O(V)$

4. for (var j of adjList[i])//This for of depend on edges, $O(E)$

5. matrix[i][j] = 1;//constant time $O(1)$
   
The initial matrix that creates a 2D matrix takes $O(v^2)$ time and is not dominated because it just creates a 2D matrix with each item being 0.
So, the total time complexity is $O(V*E)$.

## Bonus

Implement a function to convert an adjacency matrix to an adjacency list and
analyze it as above.

## Answer
A function that converts an adjacency matrix to an adjacency list's time complexity is $O(V^2)$:

adjMatrix.map(a => a.map((v, i) => v ? i : -1).filter(v => v !== -1))

1. The outer map goes through each row of the 2D matrix, depends on vertex, for each row is, $O(v)$
   
2. The inner map iterates each element in one row whether the vertex is 0 or not. if it is 0, put -1, else put index: i. if else: constant time $O(1)$
   
3. The filter extracts the element value not equal to -1. Because the inner map connects with the filter, it goes through each element in one row, which is V times. So, this part's time complexity is $O(v)$
   
4. So, two maps together's time complexity is $O(v^2)$
