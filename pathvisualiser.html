<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Pathfinding Visualizer</title>
  <style>
    body {
      margin: 0;
      font-family: sans-serif;
      background: #222;
      color: #eee;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    h1 {
      margin-top: 20px;
    }
    #controls {
      margin: 20px;
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: center;
    }
    button, select {
      padding: 10px 15px;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      background: #555;
      color: #eee;
      transition: background 0.3s;
    }
    button:hover, select:hover {
      background: #777;
    }
    #timeDisplay {
      margin-left: 10px;
      font-size: 1rem;
      align-self: center;
    }
    /* Grid styling */
    #grid {
      display: grid;
      /* adjust these values to change grid size */
      grid-template-columns: repeat(35, 25px);
      grid-template-rows: repeat(20, 25px);
      gap: 1px;
      background: #333;
    }
    .node {
      width: 25px;
      height: 25px;
      background: #fff;
      transition: background 0.2s;
      cursor: pointer;
    }
    .node-wall {
      background: #444;
    }
    .node-start {
      background: #2ecc71 !important;
    }
    .node-end {
      background: #e74c3c !important;
    }
    .node-visited {
      background: #3498db;
    }
    .node-shortest {
      background: #f1c40f;
    }
  </style>
</head>
<body>
  <h1>Pathfinding Visualizer</h1>
  <div id="controls">
    <select id="algorithm">
      <option value="bfs">BFS</option>
      <option value="dfs">DFS</option>
      <option value="dijkstra">Dijkstra</option>
      <option value="astar">A*</option>
    </select>
    <button id="startBtn">Start</button>
    <button id="mazeBtn">Generate Maze</button>
    <button id="clearBtn">Clear</button>
    <span id="timeDisplay"></span>
  </div>
  <div id="grid"></div>

  <script>
    // ====== Global Variables & Settings ======
    const ROWS = 20;
    const COLS = 35;
    const gridElement = document.getElementById("grid");
    const algorithmSelect = document.getElementById("algorithm");
    const startBtn = document.getElementById("startBtn");
    const mazeBtn = document.getElementById("mazeBtn");
    const clearBtn = document.getElementById("clearBtn");
    const timeDisplay = document.getElementById("timeDisplay");

    let grid = [];
    let isMouseDown = false;
    let isAnimating = false;

    // Define start and end positions
    const START_ROW = Math.floor(ROWS / 2);
    const START_COL = Math.floor(COLS / 8);
    const END_ROW = Math.floor(ROWS / 2);
    const END_COL = Math.floor((COLS * 7) / 8);

    // ====== Node Factory ======
    function createNode(row, col) {
      return {
        row,
        col,
        isStart: row === START_ROW && col === START_COL,
        isEnd: row === END_ROW && col === END_COL,
        isWall: false,
        isVisited: false,
        distance: Infinity,
        previousNode: null,
        // For A*
        f: Infinity,
        g: Infinity,
      };
    }

    // ====== Create Grid ======
    function createGrid() {
      grid = [];
      gridElement.innerHTML = "";
      for (let row = 0; row < ROWS; row++) {
        const currentRow = [];
        for (let col = 0; col < COLS; col++) {
          const node = createNode(row, col);
          currentRow.push(node);

          // Create the div element for each node
          const nodeDiv = document.createElement("div");
          nodeDiv.id = `node-${row}-${col}`;
          nodeDiv.classList.add("node");
          if (node.isStart) nodeDiv.classList.add("node-start");
          else if (node.isEnd) nodeDiv.classList.add("node-end");

          // Allow user to click (or drag) to add/remove walls
          nodeDiv.addEventListener("mousedown", () => {
            if (node.isStart || node.isEnd || isAnimating) return;
            node.isWall = !node.isWall;
            nodeDiv.classList.toggle("node-wall", node.isWall);
          });
          nodeDiv.addEventListener("mouseenter", (e) => {
            if (!isMouseDown || isAnimating) return;
            if (node.isStart || node.isEnd) return;
            node.isWall = true;
            nodeDiv.classList.add("node-wall");
          });
          gridElement.appendChild(nodeDiv);
        }
        grid.push(currentRow);
      }
    }

    // ====== Utility Functions ======
    function getNodeElement(node) {
      return document.getElementById(`node-${node.row}-${node.col}`);
    }

    function resetGridStates() {
      for (let row of grid) {
        for (let node of row) {
          node.isVisited = false;
          node.distance = Infinity;
          node.previousNode = null;
          node.f = Infinity;
          node.g = Infinity;
          // Remove visited & path classes
          const nodeEl = getNodeElement(node);
          nodeEl.classList.remove("node-visited", "node-shortest");
        }
      }
    }

    function getNeighbors(node) {
      const neighbors = [];
      const { row, col } = node;
      if (row > 0) neighbors.push(grid[row - 1][col]);
      if (row < ROWS - 1) neighbors.push(grid[row + 1][col]);
      if (col > 0) neighbors.push(grid[row][col - 1]);
      if (col < COLS - 1) neighbors.push(grid[row][col + 1]);
      return neighbors;
    }

    function getAllNodes() {
      const nodes = [];
      for (let row of grid) {
        for (let node of row) {
          nodes.push(node);
        }
      }
      return nodes;
    }

    function heuristic(a, b) {
      // Manhattan distance
      return Math.abs(a.row - b.row) + Math.abs(a.col - b.col);
    }

    function getShortestPath(endNode) {
      const path = [];
      let current = endNode;
      while (current !== null) {
        path.unshift(current);
        current = current.previousNode;
      }
      return path;
    }

    // ====== Algorithms ======
    function bfs(startNode, endNode) {
      const visitedNodesInOrder = [];
      const queue = [];
      startNode.isVisited = true;
      queue.push(startNode);
      while (queue.length) {
        const current = queue.shift();
        visitedNodesInOrder.push(current);
        if (current === endNode) return visitedNodesInOrder;
        for (let neighbor of getNeighbors(current)) {
          if (!neighbor.isVisited && !neighbor.isWall) {
            neighbor.isVisited = true;
            neighbor.previousNode = current;
            queue.push(neighbor);
          }
        }
      }
      return visitedNodesInOrder;
    }

    function dfs(startNode, endNode) {
      const visitedNodesInOrder = [];
      const stack = [];
      startNode.isVisited = true;
      stack.push(startNode);
      while (stack.length) {
        const current = stack.pop();
        visitedNodesInOrder.push(current);
        if (current === endNode) return visitedNodesInOrder;
        // To maintain a “proper” DFS order, reverse the neighbors
        const neighbors = getNeighbors(current).reverse();
        for (let neighbor of neighbors) {
          if (!neighbor.isVisited && !neighbor.isWall) {
            neighbor.isVisited = true;
            neighbor.previousNode = current;
            stack.push(neighbor);
          }
        }
      }
      return visitedNodesInOrder;
    }

    function dijkstra(startNode, endNode) {
      const visitedNodesInOrder = [];
      startNode.distance = 0;
      const unvisitedNodes = getAllNodes();
      while (unvisitedNodes.length) {
        // Sort nodes by current distance
        unvisitedNodes.sort((a, b) => a.distance - b.distance);
        const closest = unvisitedNodes.shift();
        if (closest.isWall) continue;
        // If we have an infinite distance, we're trapped.
        if (closest.distance === Infinity) return visitedNodesInOrder;
        closest.isVisited = true;
        visitedNodesInOrder.push(closest);
        if (closest === endNode) return visitedNodesInOrder;
        for (let neighbor of getNeighbors(closest)) {
          if (!neighbor.isVisited && !neighbor.isWall) {
            const tempDistance = closest.distance + 1;
            if (tempDistance < neighbor.distance) {
              neighbor.distance = tempDistance;
              neighbor.previousNode = closest;
            }
          }
        }
      }
      return visitedNodesInOrder;
    }

    function astar(startNode, endNode) {
      const visitedNodesInOrder = [];
      startNode.g = 0;
      startNode.f = heuristic(startNode, endNode);
      const openSet = [startNode];
      while (openSet.length) {
        // Sort openSet by f value
        openSet.sort((a, b) => a.f - b.f);
        const current = openSet.shift();
        if (current.isWall) continue;
        current.isVisited = true;
        visitedNodesInOrder.push(current);
        if (current === endNode) return visitedNodesInOrder;
        for (let neighbor of getNeighbors(current)) {
          if (neighbor.isWall) continue;
          const tentativeG = current.g + 1;
          if (tentativeG < neighbor.g) {
            neighbor.previousNode = current;
            neighbor.g = tentativeG;
            neighbor.f = neighbor.g + heuristic(neighbor, endNode);
            if (!openSet.includes(neighbor)) {
              openSet.push(neighbor);
            }
          }
        }
      }
      return visitedNodesInOrder;
    }

    // ====== Animation ======
    function animate(visitedNodes, shortestPath, travelTime) {
      isAnimating = true;
      // Animate visited nodes
      for (let i = 0; i < visitedNodes.length; i++) {
        setTimeout(() => {
          const node = visitedNodes[i];
          const nodeEl = getNodeElement(node);
          // Do not override start/end colors
          if (!node.isStart && !node.isEnd) {
            nodeEl.classList.add("node-visited");
          }
          // After the last visited node, animate the shortest path
          if (i === visitedNodes.length - 1) {
            animateShortest(shortestPath, travelTime);
          }
        }, 10 * i);
      }
    }

    function animateShortest(shortestPath, travelTime) {
      for (let i = 0; i < shortestPath.length; i++) {
        setTimeout(() => {
          const node = shortestPath[i];
          const nodeEl = getNodeElement(node);
          if (!node.isStart && !node.isEnd) {
            nodeEl.classList.add("node-shortest");
          }
          if (i === shortestPath.length - 1) {
            // Display travel time (for demonstration, we use the number of steps)
            timeDisplay.textContent = `Travel Time: ${travelTime}ms | Path Length: ${shortestPath.length}`;
            isAnimating = false;
          }
        }, 50 * i);
      }
    }

    // ====== Maze Generation ======
    function generateMaze() {
      if (isAnimating) return;
      resetGridStates();
      for (let row of grid) {
        for (let node of row) {
          // Skip start and end nodes
          if (node.isStart || node.isEnd) continue;
          // Randomly assign walls (30% probability)
          if (Math.random() < 0.3) {
            node.isWall = true;
            getNodeElement(node).classList.add("node-wall");
          } else {
            node.isWall = false;
            getNodeElement(node).classList.remove("node-wall");
          }
        }
      }
    }

    // ====== Clear Grid ======
    function clearGrid() {
      if (isAnimating) return;
      resetGridStates();
      for (let row of grid) {
        for (let node of row) {
          // Remove wall classes if any (but keep start/end as they are)
          if (!node.isStart && !node.isEnd) {
            node.isWall = false;
            getNodeElement(node).classList.remove("node-wall");
          }
        }
      }
      timeDisplay.textContent = "";
    }

    // ====== Run Selected Algorithm ======
    function visualize() {
      if (isAnimating) return;
      resetGridStates();
      const startNode = grid[START_ROW][START_COL];
      const endNode = grid[END_ROW][END_COL];
      const algo = algorithmSelect.value;
      let visitedNodes;
      const startTime = performance.now();
      if (algo === "bfs") {
        visitedNodes = bfs(startNode, endNode);
      } else if (algo === "dfs") {
        visitedNodes = dfs(startNode, endNode);
      } else if (algo === "dijkstra") {
        visitedNodes = dijkstra(startNode, endNode);
      } else if (algo === "astar") {
        visitedNodes = astar(startNode, endNode);
      }
      const endTime = performance.now();
      const travelTime = Math.floor(endTime - startTime);
      const shortestPath = getShortestPath(endNode);
      animate(visitedNodes, shortestPath, travelTime);
    }

    // ====== Event Listeners ======
    startBtn.addEventListener("click", visualize);
    mazeBtn.addEventListener("click", generateMaze);
    clearBtn.addEventListener("click", clearGrid);

    document.addEventListener("mousedown", () => isMouseDown = true);
    document.addEventListener("mouseup", () => isMouseDown = false);

    // ====== Initialization ======
    createGrid();
  </script>
</body>
</html>
