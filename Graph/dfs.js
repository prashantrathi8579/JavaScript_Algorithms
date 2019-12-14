// @flow

/* 
* DFS: Depth First Search
* Goal: Find all vertices connected to s(and corresponding path).
* Idea used for DFS: Mimic maze exploration (using ball of string) 
* Reference: Bob Sedgwick, professor of computer science at Princeton. Algorithm Part2
*/

const { Graph } = require("./graph");

 class DFS {
     /*::
        marked: Array<boolean>;
        edgeTo: Array<number>;
        s: number
     */
    constructor(G/*: Graph*/, s/*: number*/) {
        this.marked = [];
        this.edgeTo = [];
        this.s = s;

        this.dfs(G, s);
    }

    // Recursive function call uses stack implicit
    dfs(G/*: Graph*/, v/*: number*/) {
        this.marked[v] = true;
        const edges = G.adj(v);
        for (let i = 0; i < edges.length; ++i) {
            const edgeToProcess = edges[i];
            if (!this.marked[edgeToProcess]) {
                this.dfs(G, edgeToProcess);
                this.edgeTo[edgeToProcess] = v;
            }
        }
    }

    // Explicit stack used
    dfsNonRecursive(G/*: Graph*/, v/*: number*/) {
        // Array as stack. Push and pop operations
        let stack = [];
        stack.push(v);
        this.marked[v] = true;

        while(stack.length !== 0) {
            const vertex = stack.pop();
            const edges = G.adj(vertex);
            for (let i = 0; i < edges.length; ++i) {
                const edgeToProcess = edges[i];
                if (!this.marked[edgeToProcess]) {
                    this.marked[edgeToProcess] = true;
                    stack.push(edgeToProcess);
                    this.edgeTo[edgeToProcess] = vertex;
                }
            }
        }
    }

    hasPathTo(x/*: number*/) {
        return this.marked[x];
    }

    pathTo(x/*: number*/) {
        if (!this.hasPathTo(x)) return null;
        let path = [];
        for (let k = x; k !== this.s; k = this.edgeTo[k])
            path.push(k);
        path.push(this.s);

        return path
    }
}

module.exports = {
    DFS
}