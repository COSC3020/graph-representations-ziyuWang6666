function convertToAdjMatrix(adjList) {
    var V = adjList.length;
    var matrix = Array.from(Array(V), ()=>Array(V).fill(0));
    for (var i = 0; i < V; i++) {
        for (var j of adjList[i])
            matrix[i][j] = 1;
    }
    return matrix;
}
// var adjList1 = [[1,2,3],[0,1],[1,3],[0,1,2]]
// console.log("convertToAdjMatrix1",convertToAdjMatrix(adjList1))

function convertToAdjList(adjMatrix) {
    return adjMatrix.map(a => a.map((v, i) => v ? i : -1).filter(v => v !== -1))
}
// var adjMatrix1 = [ [ 0, 1, 1, 1 ], [ 1, 1, 0, 0 ], [ 0, 1, 0, 1 ], [ 1, 1, 1, 0 ] ]
// console.log(convertToAdjList(adjMatrix1))

//get reference from below websites and get help from TA
//https://stackoverflow.com/questions/55111120/how-to-convert-adjacency-matrix-to-adjacency-list-in-javascript
//https://www.geeksforgeeks.org/convert-adjacency-list-to-adjacency-matrix-representation-of-a-graph/
