class View {
  constructor(knight, $el) {
    this.knight = knight;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", ( event => {
      const $square = $(event.currentTarget);
      this.knight.pos = $square.data("pos");
      $("#knight").appendTo($square);
    })).bind(this);

    $("#start").click( event => {
      const bottomNode = this.knight.warnsdorff();

      let i = 0;
      for (let square of bottomNode.returnPath()) {
        i++;
        setTimeout( () => {
          const liNum = square[0] * 8 + square[1];
          const $square = $('li:eq(' + liNum + ')');
          $("#knight").appendTo($square);
          $square.addClass("visited");
        }, 500 * i);
      }
    }).bind(this);
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

    const $knight = $("<img>", {
      id: "knight",
      src: "./images/knight.png"
    });

    const liNum = this.knight.pos[0] * 8 + this.knight.pos[1];
    $('li:eq(' + liNum + ')').append($knight)
  }
}


module.exports = View;
