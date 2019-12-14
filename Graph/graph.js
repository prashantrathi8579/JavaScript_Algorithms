// @flow

/* 
* Graph representation in JavaScript using adjacancy list
* Named vertices are mapped to integers starting from 0.
*
* Some graph processing problems:
*
* Path: is there a path between s and t
* Shortest Path: what is the shortest path between s and t
* Cycle: is there a cycle in the graph
*/

// Helper functions
const degree = (G/*: Graph*/, v/*: number */) => {
    return G.adj(v).length;
}

const maxDegree = (G/*: Graph*/) => {
    let maxDegree = 0;
    Object.keys(G.E()).forEach(val => {
        const vertex = Number(val);
        let degree = G.adj(vertex).length;
        if (degree > maxDegree) {
            maxDegree = degree;
        }
    });
    return maxDegree;
}

const numberOfSelfLoops = (G/*: Graph*/) => {
    let count = 0;
    for (let i = 0; i < G.V(); ++i) {
        const edges = G.adj(i);
        edges.forEach(val => {
            if (val === i) count++;
        });
    }
    return count/2; //each edge counted twice
}

class Graph {
    /*:: 
        vertices: number;
        adjList: Object;
    */

    constructor(V/*: number*/) {
        this.vertices = V;
        this.adjList = {};
            
        for(let i = 0; i < this.vertices; ++i) {
            this.adjList[i] = [];
        }
    }

    addEdge(v/*: number*/, w/*: number*/) {
        this.adjList[v].push(w);
        this.adjList[w].push(v);
    }

    V() {
        return this.vertices;
    }

    adj(v/*: number*/) {
        return this.adjList[v];
    }

    E() {
        return this.adjList;
    }
}

module.exports = {
    Graph,
    numberOfSelfLoops,
    maxDegree,
    degree
}