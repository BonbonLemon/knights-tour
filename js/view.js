class View {
  // constructor(game, $el) {
  constructor($el) {
    // this.game = game;
    this.$el = $el;

    this.setupBoard();
  }

  setupBoard() {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const $ul = $("<ul>");
    $ul.addClass("group");

    for (let rowIdx = 0; rowIdx < 8; rowIdx++) {
      let $rowNum = $('<span>', {
        class: 'row-number',
        text: 8 - rowIdx
      });
      $ul.append($rowNum);

      for (let colidx = 0; colidx < 8; colidx++) {
        let $li = $("<li>");
        $li.data("pos", [rowIdx, colidx]);

        $ul.append($li);
      }
    }

    $ul.append($('<div>', {id: 'bl-spacer'}));

    for (let colIdx = 0; colIdx < 8; colIdx++) {
      let $colLet = $('<span>', {
        class: 'col-letter',
        text: letters[colIdx]
      });

      $ul.append($colLet);
    }

    this.$el.append($ul);
  }
}


module.exports = View;
