class AdjacencyList{
  constructor(){
    this.nodes = {}
  }
  addNode(node = ""){
    if(!node.trim().length) return;
    this.nodes[node] = {}
    return this;
  }

  addEdge(node1 = "", node2 = "", weight = 0){
    if(!this.nodes[node1]) this.addNode(node1);
    if(!this.nodes[node2]) this.addNode(node2);

    this.nodes[node1][node2] = weight;
    return this.nodes[node1];
  }
   addEdgeUndir(node1 = "", node2 = "", weight = 0){

     if(!this.nodes[node1]) this.addNode(node1);
     if(!this.nodes[node2]) this.addNode(node2);

    this.nodes[node1][node2] = weight;
    this.nodes[node2][node1] = weight;

    return {[node1]:weight, [node2]:weight}
  }

  exists(node){
    return Boolean(this.nodes.hasOwnProperty(node))
  }

  //does node2 exist in node1?
  pathExists(node1,node2){
    return Boolean(this.nodes[node1].hasOwnProperty(node2))
  }
  //does a path between the two exist?
  pathExistsUndir(node1,node2){
    return Boolean(this.nodes[node1].hasOwnProperty(node2)
      && this.nodes[node2].hasOwnProperty(node1)
    )
  }

}

