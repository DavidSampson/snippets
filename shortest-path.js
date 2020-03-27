function unweightedGraph(adj, srcs, dests) 
{ 
    // a queue to maintain queue of vertices whose 
    // adjacency list is to be scanned as per normal 
    // DFS algorithm 
    const queue = [];
  
    // boolean array visited[] which stores the 
    // information whether ith vertex is reached 
    // at least once in the Breadth first search 
    
    const visited = Array(adj.length).fill(false);
    const dist = Array(adj.length).fill(Infinity);
    const pred = Array(adj.length).fill(-1);
    
  
    // now source is first to be visited and 
    // distance from source to itself should be 0 
    srcs.forEach(src => {
      visited[src] = true; 
      dist[src] = 0; 
      queue.push(src);
    });
  
    // standard BFS algorithm 
    while (queue.length > 0) { 
        let u = queue.shift(); 
        for (let i = 0; i < adj[u].length; i++) { 
            if (visited[adj[u][i]] == false) { 
                visited[adj[u][i]] = true; 
                dist[adj[u][i]] = dist[u] + 1; 
                pred[adj[u][i]] = u; 
                queue.push(adj[u][i]); 
  
                // We stop BFS when we find 
                // destination. 
                if (dests.includes(adj[u][i])) 
                   return { dist, pred }; 
            } 
        } 
    } 
  
    return false; 
} 
