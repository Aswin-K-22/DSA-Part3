class Graph{
    constructor(){
        this.adjecencyList ={}
    }
    addEdges(vertices1, vertices2){
        if(!this.adjecencyList[vertices1]){
            this.addVertices(vertices1)
        }
        if(!this.adjecencyList[vertices2]){
            this.addVertices(vertices2)
        }
        this.adjecencyList[vertices1].add(vertices2)
        this.adjecencyList[vertices2].add(vertices1)
    }
    addVertices(vartices){
        if(!this.adjecencyList[vartices]){
            this.adjecencyList[vartices] = new Set();
        }
    }
    hasEdge(vertex1,vertex2){
        return ( this.adjecencyList[vertex1].has(vertex2) && this.adjecencyList[vertex2].has(vertex1))
    }
    display(){
        for(const vertex in this.adjecencyList ){
            console.log(`${vertex} > ${[...this.adjecencyList[vertex]]}` );
        }
    }

    removeEdge(vertex1,vertex2){
        if(!this.adjecencyList[vertex1] || !this.adjecencyList[vertex2]){
            return;
        }
        this.adjecencyList[vertex1].delete(vertex2);
        this.adjecencyList[vertex2].delete(vertex1);
    }
    removeVertex(vertex){
        if(!this.adjecencyList[vertex]) return ;
        for(const edgVertex of this.adjecencyList[vertex]){
            this.removeEdge(edgVertex,vertex);
        }
        delete this.adjecencyList[vertex];
    }
}

const graph = new Graph();
graph.addVertices('A')
graph.addVertices('B')
graph.addVertices('C')

graph.addEdges('A' ,'B')
graph.addEdges('A' ,'C')

graph.display();
console.log(graph.hasEdge('B','C'));
console.log(graph.hasEdge('A','C'));
graph.removeEdge('A' ,'B')
graph.display();
graph.removeVertex('C');
graph.display();