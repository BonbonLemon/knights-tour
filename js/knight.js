const Queue = require('./queue.js');
const TourPolyTreeNode = require('./tour_poly_tree_node.js');

class Knight {
  constructor() {
    this.pos = [Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)];
    this.visited = {};
    this.visited[this.pos] = true;
  }

  // validMoves() {
  //   let moves = [
  //     [1, 2],
  //     [1, -2],
  //     [-1, 2],
  //     [-1, -2],
  //     [2, 1],
  //     [2, -1],
  //     [-2, 1],
  //     [-2, -1]
  //   ];
  //   let validMoves = [];
  //
  //   for (let move of moves) {
  //     const destination = [this.pos[0] + move[0], this.pos[1] + move[1]];
  //     if (destination[0] >= 0 && destination[0] <= 7 &&
  //         destination[1] >= 0 && destination[1] <= 7) {
  //       validMoves.push(destination);
  //     }
  //   }
  //
  //   return validMoves;
  // }

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
