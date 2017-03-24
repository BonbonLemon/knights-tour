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
	
	$( () => {
	  const rootEl = $('.kt');
	  // new View(game, rootEl);
	  new View(rootEl);
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map