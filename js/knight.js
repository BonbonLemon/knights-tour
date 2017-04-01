const Queue = require('./queue.js');
const TourPolyTreeNode = require('./tour_poly_tree_node.js');

class Knight {
  constructor() {
    this.pos = [Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)];
    this.visited = {};
    this.visited[this.pos] = true;
  }

  warnsdorff(currNode = new TourPolyTreeNode(this.pos)) {
    let leastAccessibleNode;

    for (let move of currNode.validMoves()) {
      let childNode = new TourPolyTreeNode(move);
      currNode.addChild(childNode);

      if (!leastAccessibleNode) {
        leastAccessibleNode = childNode;
        continue;
      }

      if (childNode.validMoves().length < leastAccessibleNode.validMoves().length) {
        leastAccessibleNode = childNode;
      }
    }

    if (leastAccessibleNode.depth == 64) {
      return leastAccessibleNode;
    } else {
      return this.warnsdorff(leastAccessibleNode);
    }
  }

  bfs() {
    let queue = new Queue;
    queue.enqueue(this.pos);

    while (!queue.isEmpty()) {
      const currSquare = queue.dequeue();

      for (let move of this.validMoves()) {

      }
    }
  }

  dfs(currNode = new TourPolyTreeNode(this.pos)) {
    for (let move of currNode.validMoves()) {
      if (currNode.hasTraveled(move)) {
        continue;
      }
      const childNode = new TourPolyTreeNode(move);
      currNode.addChild(childNode);

      console.log(currNode.pos);
      console.log(currNode.depth);

      if (currNode.depth == 52) {
        debugger;
        return;
      }

      const bottomNode = this.dfs(childNode);
      if (!bottomNode) { continue; }
      if (bottomNode.depth == 50) {
        debugger;
        return bottomNode;
      }
    }
  }
}

module.exports = Knight;
