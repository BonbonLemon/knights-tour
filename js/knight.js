class Knight {
  constructor() {
    this.travels = [];
    this.pos = [Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)];
    console.log(this.pos);
  }
}

module.exports = Knight;
