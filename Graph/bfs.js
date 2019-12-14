// @flow

/* 
* BFS: Breadth First Search
* Goal: shortest path.
* Shortest Path:  Shortest path from the starting vertex(fewer number of edges).
* BFS computes shortest path from s to all vertices in time proportional to E+V 
* Reference: Bob Sedgwick, professor of computer science at Princeton. Algorithm Part2
*/

const { Graph } = require("./graph");

class BFS {
    /*::
        marked: Array<boolean>
        edgeTo: Array<number>
    */
    constructor() {
        this.marked = [];
        this.edgeTo = [];
    }

    breadthFirstSearch(G/*: Graph*/, s/*: number*/) {
        // push as enqueue
        // shift as dequeue
        const queue = [];
        queue.push(s);
        this.marked[s] = true;
        
        while(queue.length !== 0) {
            const v = queue.shift(),
                edges = G.adj(v);
                edges.forEach(element => {
                    if(!this.marked[element]) {
                        queue.push(element);
                        this.marked[element] = true;
                        this.edgeTo[element] = v;
                    }
                });
        }
    }

    shortestPath(v/*: number*/) {
        const path = [];
        for(let k = v; k !== 0; k = this.edgeTo[k]) {
            path.push(k);
        }
        path.push(0);
        return path;
    }
}

module.exports = {
    BFS
}