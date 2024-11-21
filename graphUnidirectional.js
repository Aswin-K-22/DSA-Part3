class UniGraph{
    constructor(){
        this.adjecencyList = {}
    }
    addVertex(vertex){
        if(!this.adjecencyList[vertex]){
            this.adjecencyList[vertex] = new Set();
        }
    }
    addEdge(fromVertex,toVertex){
        if(!this.adjecencyList[fromVertex]){
            this.addVertex(fromVertex);
        }
        if(!this.adjecencyList[toVertex]){
            this.addVertex(toVertex);
        }
        this.adjecencyList[fromVertex].add(toVertex);
    }
    hasEdge(fV,tV){
        return this.adjecencyList[fV]?.has(tV) || false;
    }
    display(){
        for(const vertex in this.adjecencyList){
            console.log(`${vertex} [${[...this.adjecencyList[vertex]]}]`);
            
        }
    }
    removeEdge(fV,tV){
        this.adjecencyList[fV]?.delete(tV);
    }
    removeVertex(vertex){
        if(!this.adjecencyList[vertex]) return false;
        for(const ver in this.adjecencyList){
            this.removeEdge(ver, vertex);
        }
        delete this.adjecencyList[vertex];
    }
}

const graph = new UniGraph();

// Adding vertices
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

// Adding unidirectional edges
graph.addEdge('A', 'B'); // A -> B
graph.addEdge('A', 'C'); // A -> C

// Displaying the graph
graph.display();

// Checking for edges
console.log(graph.hasEdge('A', 'B')); // true
console.log(graph.hasEdge('B', 'A')); // false

// Removing an edge
graph.removeEdge('A', 'B');
graph.display();

// Removing a vertex
graph.removeVertex('C');
graph.display();