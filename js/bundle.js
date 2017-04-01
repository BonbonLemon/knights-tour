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
	      let x = this.knight.warnsdorff();
	      x.printPath();
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
	const TourPolyTreeNode = __webpack_require__(4);
	
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
	
	  isEmpty() {
	    return this.pushStack.length == 0 && this.popStack == 0;
	  }
	}
	
	module.exports = Queue;


/***/ },
/* 4 */
/***/ function(module, exports) {

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
	          destination[1] >= 0 && destination[1] <= 7 &&
	          !this.hasTraveled(destination)) {
	        validMoves.push(destination);
	      }
	    }
	
	    return validMoves;
	  }
	
	  hasTraveled(move) {
	    let currNode = this;
	    while (currNode != currNode.parent) {
	      if (currNode.parent.pos[0] == move[0] && currNode.parent.pos[1] == move[1]) {
	        return true
	      }
	      currNode = currNode.parent;
	    }
	
	    return false;
	  }
	
	  returnPath() {
	    let path = [this.pos];
	    let currNode = this;
	
	    while (currNode.parent != currNode) {
	      currNode = currNode.parent;
	
	      path.push(currNode.pos);
	    }
	
	    return path.reverse();
	  }
	}
	
	module.exports = TourPolyTreeNode;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map