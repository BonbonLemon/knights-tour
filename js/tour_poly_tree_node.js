class TourPolyTreeNode {
  constructor(pos, depth = 1) {
    this.parent = this;
    this.pos = pos;
    this.depth = depth;
  }

  addChild(child) {
    child.parent = this;
    child.depth = this.depth + 1;
  }

  validMoves() {
    let moves = [
      [-2, 1],
      [-1, 2],
      [1, 2],
      [2, 1],
      [2, -1],
      [1, -2],
      [-1, -2],
      [-2, -1],
    ];
    let validMoves = [];

    for (let move of moves) {
      const destination = [this.pos[0] + move[0], this.pos[1] + move[1]];
      if (destination[0] >= 0 && destination[0] <= 7 &&
          destination[1] >= 0 && destination[1] <= 7) {
        validMoves.push(destination);
      }
    }

    return validMoves;
  }

  hasTraveled(move) {
    let currNode = this;
    while (currNode != currNode.parent) {
      if (currNode.pos[0] == move[0] && currNode.pos[1] == move[1]) {
        return true
      }
      currNode = currNode.parent;
    }

    return false;
  }

  printPath() {
    let path = [this.pos];
    let currNode = this;

    while (currNode.parent != currNode) {
      currNode = currNode.parent;

      path.push(currNode.pos);
    }

    for (let i = path.length; i >= 0; i--) {
      console.log(path[i]);
    }
  }
}

module.exports = TourPolyTreeNode;
