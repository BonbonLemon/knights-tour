const Queue = require('./queue.js');

class Knight {
  constructor() {
    this.pos = [Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)];
    this.travels = [this.pos];
  }

  moves() {
    return [
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2],
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1]
    ];
  }

  dfs() {
    let queue = new Queue;
    debugger;
    this.travels.push(this.pos);

    for (let move of this.moves()) {
      const destination = [this.pos[0] + move[0], this.pos[1] + move[1]];
      if (destination[0] >= 0 && destination[0] <= 7 &&
          destination[1] >= 0 && destination[1] <= 7 &&
          !this.travels.indexOf(destination)) {
        this.pos = destination;
        return this.dfs();
      } else {

      }
    }
  }
}

module.exports = Knight;
