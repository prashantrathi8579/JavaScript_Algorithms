const graphDS = require("./graph");
const dfs = require("./dfs");
const bfs = require("./bfs");

// Graph creation
const graphInstance = new graphDS.Graph(7);
graphInstance.addEdge(0, 1);
graphInstance.addEdge(0, 2);
graphInstance.addEdge(0, 6);
graphInstance.addEdge(0, 5);
graphInstance.addEdge(6, 4);
graphInstance.addEdge(4, 3);
graphInstance.addEdge(4, 5);
graphInstance.addEdge(5, 3);

// Graph helpers to check graph creation is correct
console.log("======vertices", graphInstance.V());
console.log("======adjancyList", graphInstance.adj(0));
console.log("======adjancyList", graphInstance.adj(5));

console.log("======selfLoops",graphDS.numberOfSelfLoops(graphInstance));
console.log("======degree",graphDS.degree(graphInstance, 0));
console.log("======maxdegree",graphDS.maxDegree(graphInstance,));

// DFS usage
const dfsInstance = new dfs.DFS(graphInstance, 6);
console.log("======hasPathTo 5:", dfsInstance.hasPathTo(5));
console.log("======pathTo 5:", dfsInstance.pathTo(5));

// BFS usage
const bfsInstance = new bfs.BFS();
bfsInstance.breadthFirstSearch(graphInstance, 0);
console.log("======ShortestPath", bfsInstance.shortestPath(5));