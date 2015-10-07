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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************************!*\
  !*** ./app/assets/frontend/main.jsx ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _componentsTweetBox = __webpack_require__(/*! ./components/TweetBox */ 1);
	
	var _componentsTweetBox2 = _interopRequireDefault(_componentsTweetBox);
	
	var _componentsTweetList = __webpack_require__(/*! ./components/TweetList */ 2);
	
	var _componentsTweetList2 = _interopRequireDefault(_componentsTweetList);
	
	var Main = (function (_React$Component) {
	  _inherits(Main, _React$Component);
	
	  function Main() {
	    _classCallCheck(this, Main);
	
	    _get(Object.getPrototypeOf(Main.prototype), "constructor", this).apply(this, arguments);
	  }
	
	  _createClass(Main, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        { className: "container" },
	        React.createElement(_componentsTweetBox2["default"], null),
	        React.createElement(_componentsTweetList2["default"], null)
	      );
	    }
	  }]);
	
	  return Main;
	})(React.Component);
	
	var documentReady = function documentReady() {
	  React.render(React.createElement(Main, null), document.getElementById('react'));
	};
	
	$(documentReady);

/***/ },
/* 1 */
/*!*****************************************************!*\
  !*** ./app/assets/frontend/components/TweetBox.jsx ***!
  \*****************************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TweetBox = (function (_React$Component) {
	  _inherits(TweetBox, _React$Component);
	
	  function TweetBox() {
	    _classCallCheck(this, TweetBox);
	
	    _get(Object.getPrototypeOf(TweetBox.prototype), "constructor", this).apply(this, arguments);
	  }
	
	  _createClass(TweetBox, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        { className: "row" },
	        React.createElement(
	          "form",
	          null,
	          React.createElement(
	            "div",
	            { className: "input-field" },
	            React.createElement("textarea", { className: "materialize-textarea" }),
	            React.createElement(
	              "label",
	              null,
	              "What's happening?"
	            ),
	            React.createElement(
	              "button",
	              { className: "btn right" },
	              "Tweet"
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return TweetBox;
	})(React.Component);
	
	exports["default"] = TweetBox;
	module.exports = exports["default"];

/***/ },
/* 2 */
/*!******************************************************!*\
  !*** ./app/assets/frontend/components/TweetList.jsx ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _Tweet = __webpack_require__(/*! ./Tweet */ 3);
	
	var _Tweet2 = _interopRequireDefault(_Tweet);
	
	var TweetList = (function (_React$Component) {
	  _inherits(TweetList, _React$Component);
	
	  function TweetList() {
	    _classCallCheck(this, TweetList);
	
	    _get(Object.getPrototypeOf(TweetList.prototype), "constructor", this).apply(this, arguments);
	  }
	
	  _createClass(TweetList, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          "ul",
	          { className: "collection" },
	          React.createElement(_Tweet2["default"], null),
	          React.createElement(_Tweet2["default"], null),
	          React.createElement(_Tweet2["default"], null)
	        )
	      );
	    }
	  }]);
	
	  return TweetList;
	})(React.Component);
	
	exports["default"] = TweetList;
	module.exports = exports["default"];

/***/ },
/* 3 */
/*!**************************************************!*\
  !*** ./app/assets/frontend/components/Tweet.jsx ***!
  \**************************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Tweet = (function (_React$Component) {
	  _inherits(Tweet, _React$Component);
	
	  function Tweet() {
	    _classCallCheck(this, Tweet);
	
	    _get(Object.getPrototypeOf(Tweet.prototype), "constructor", this).apply(this, arguments);
	  }
	
	  _createClass(Tweet, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "li",
	        { className: "collection-item avatar" },
	        React.createElement(
	          "i",
	          { className: "material-icons circle" },
	          "person_pin"
	        ),
	        React.createElement(
	          "span",
	          { className: "title" },
	          "John Tran"
	        ),
	        React.createElement(
	          "p",
	          null,
	          "My #FirstTweet"
	        )
	      );
	    }
	  }]);
	
	  return Tweet;
	})(React.Component);
	
	exports["default"] = Tweet;
	module.exports = exports["default"];

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map