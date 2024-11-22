class Graph{
    constructor(){
        this.adjecency = {}
    }
    addVertex(vertex){
        if(!this.adjecency[vertex]){
            this.adjecency[vertex] = new Set();
        }
    }
    addEdge(vertex1,vertex2, isBidirection = false){
        if(!this.adjecency[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjecency[vertex2]){
            this.addVertex(vertex2)
        }
       
            this.adjecency[vertex1].add(vertex2)
        if(isBidirection){
            this.adjecency[vertex2].add(vertex1)
        }
    }
    hasEdge(vertex1, vertex2) {
        return this.adjecency[vertex1]?.has(vertex2) || false;
    }
    display(){
        for(const vertex in this.adjecency){
            console.log(`${vertex} =  [ ${[...this.adjecency[vertex]]} ]`);
            
        }
    }
    removeEdge(vertex1, vertex2, isBidirectional = false) {
        if(!this.adjecency[vertex1] ) return ;
        this.adjecency[vertex1].delete(vertex2);

        if(isBidirectional && this.adjecency[vertex2]){
            this.adjecency[vertex2].delete(vertex1);
        }
    }
    removeVertex(vertex){
        if(!this.adjecency[vertex]) return ;
        for(const vert in this.adjecency){
            this.adjecency[vert].delete(vertex);
    }
    delete this.adjecency[vertex];
    }
    bfs(){
        let visited = new Set();
        let result = [];
        for(let vertex in this.adjecency){
            if(!visited.has(vertex)){
                this.bfsHelper(vertex , visited , result);
            }
        }
        console.log(result);
        
    }
    bfsHelper(start , visited , result){
        let queue = [start];
        visited.add(start);
        while(queue.length >0){
            let vertex = queue.shift();
            result.push(vertex);
            for(let adjecentVertex of this.adjecency[vertex]){
                if(!visited.has(adjecentVertex)){
                    visited.add(adjecentVertex);
                    queue.push(adjecentVertex);
                }
            }
        }
    }
}

const graph = new Graph();

// // Adding vertices
// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');

// // Adding unidirectional edges
// graph.addEdge('A', 'B'); // A -> B
// graph.addEdge('B', 'C'); // B -> C

// // Adding bidirectional edges
// graph.addEdge('C', 'D', true); // C <-> D
// graph.addEdge('A', 'D', true); // A <-> D

// // Display the graph
// console.log("Graph:");
// graph.display();

// // Check for edges
// console.log("Has Edge A -> B:", graph.hasEdge('A', 'B')); // true
// console.log("Has Edge B -> A:", graph.hasEdge('B', 'A')); // false (unidirectional)
// console.log("Has Edge C -> D:", graph.hasEdge('C', 'D')); // true
// console.log("Has Edge D -> C:", graph.hasEdge('D', 'C')); // true (bidirectional)

// // Remove a unidirectional edge
// graph.removeEdge('A', 'B');
// console.log("\nAfter removing edge A -> B:");
// graph.display();

// // Remove a bidirectional edge
// graph.removeEdge('C', 'D', true);
// console.log("\nAfter removing bidirectional edge C <-> D:");
// graph.display();

// // Remove a vertex
// graph.removeVertex('A');
// console.log("\nAfter removing vertex A:");
// graph.display();


graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "E", true);
graph.addEdge("A", "D", true);
graph.display();
console.log("BFS with Disconnected Vertices:");
graph.bfs();