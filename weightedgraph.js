<script>
// Javascript program to represent undirected and weighted graph
// using STL. The program basically prints adjacency list
// representation of graph

	// To add an edge
	function addEdge(adj,u,v,wt)
	{
		adj[u].push([v,wt]);
		adj[v].push([u,wt]);
		return adj;
	
	}
	
	//Print adjacency list representation of graph
	function printGraph(adj, V)
	{
		let v=0,w=0;
		for(let u=0;u<V;u++)
		{
			document.write("Node "+u+ " makes an edge with<br>");
			for(let it=0;it<adj[u].length;it++)
			{
				v=adj[u][it][0];
				w=adj[u][it][1];
				document.write("    Node "+ v+ " with edge weight ="+ w+"<br>")
			}
		}
	}
	
	
	// Driver code
	let V = 5;
	
	// The below line may not work on all
	// compilers. If it does not work on
	// your compiler, please replace it with
	// following
	// vector<int> *adj = new vector<int>[V];
	let adj=new Array(V);
	for(let i=0;i<V;i++)
	{
		adj[i]=[];
	}
	
	// Vertex numbers should be from 0 to 4.
	adj = addEdge(adj, 0, 1, 10)
	adj = addEdge(adj, 0, 4, 20)
	adj = addEdge(adj, 1, 2, 30)
	adj = addEdge(adj, 1, 3, 40)
	adj = addEdge(adj, 1, 4, 50)
	adj = addEdge(adj, 2, 3, 60)
	adj = addEdge(adj, 3, 4, 70)
	printGraph(adj, V);
	
	
	
	// This code is contributed by unknown2108
</script>
