/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const View = __webpack_require__(1);
	const Knight = __webpack_require__(2);
	
	$( () => {
	  const rootEl = $('.kt');
	  const knight = new Knight();
	  new View(knight, rootEl);
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

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
	      this.knight.dfs();
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


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	const Queue = __webpack_require__(3);
	
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


/***/ },
/* 3 */
/***/ function(module, exports) {

	class Queue {
	  constructor() {
	    this.pushStack = [];
	    this.popStack = [];
	  }
	
	  enqueue(data) {
	    this.pushStack.push(data);
	    return data;
	  }
	
	  dequeue() {
	    const data = this.popStack.pop();
	    if (!data) {
	      while (this.pushStack.length > 0) {
	        this.popStack.push(this.pushStack.pop());
	      }
	
	      return this.popStack.pop();
	    } else {
	      return data;
	    }
	  }
	}
	
	module.exports = Queue;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map