class View {
  // constructor(game, $el) {
  constructor($el) {
    // this.game = game;
    this.$el = $el;

    this.setupBoard();
  }

  setupBoard() {
    const $ul = $("<ul>");
    $ul.addClass("group");

    for (let rowIdx = 0; rowIdx < 8; rowIdx++) {
      for (let colidx = 0; colidx < 8; colidx++) {
        let $li = $("<li>");
        $li.data("pos", [rowIdx, colidx]);

        $ul.append($li);
      }
    }

    this.$el.append($ul);
  }
}


module.exports = View;
