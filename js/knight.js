class Knight {
  constructor() {
    this.travels = [];
    this.pos = [Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)];
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
    for (let move of this.moves()) {
      console.log(move);
    }
  }
}

module.exports = Knight;
