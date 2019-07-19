/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/babel-example.js":
/*!*********************************!*\
  !*** ./assets/babel-example.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Person = function () {\n  function Person(name) {\n    _classCallCheck(this, Person);\n\n    this.name = name;\n  }\n\n  _createClass(Person, [{\n    key: \"getName\",\n    value: function getName() {\n      console.log(this.name);\n      return this.name;\n    }\n  }]);\n\n  return Person;\n}();\n\nexports.default = Person;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdW5rbm93bj9kNGE3Il0sIm5hbWVzIjpbIlBlcnNvbiIsIm5hbWUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQXFCQSxNO0FBQ25CLGtCQUFhQyxJQUFiLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OzhCQUNVO0FBQ1RDLGNBQVFDLEdBQVIsQ0FBWSxLQUFLRixJQUFqQjtBQUNBLGFBQU8sS0FBS0EsSUFBWjtBQUNEOzs7Ozs7a0JBUGtCRCxNIiwiZmlsZSI6Ii4vYXNzZXRzL2JhYmVsLWV4YW1wbGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJzb24ge1xyXG4gIGNvbnN0cnVjdG9yIChuYW1lKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lXHJcbiAgfVxyXG4gIGdldE5hbWUgKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5uYW1lKVxyXG4gICAgcmV0dXJuIHRoaXMubmFtZVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/babel-example.js\n");

/***/ }),

/***/ "./assets/global.css":
/*!***************************!*\
  !*** ./assets/global.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content=__webpack_require__(/*! !../loaders/css-loader/css-loader.js!./global.css */ \"./loaders/css-loader/css-loader.js!./assets/global.css\");;var style = __webpack_require__(/*! ../loaders/style-loader/add-style.js */ \"./loaders/style-loader/add-style.js\")(content);;if (false) {};if(content.locals) module.exports = content.locals//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvZ2xvYmFsLmNzcz81OWU2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksbUJBQU8sQ0FBQyxpSEFBb0QsR0FBRyxZQUFZLG1CQUFPLENBQUMsaUZBQXVDLFlBQVksSUFBSSxLQUFVLEVBQUUsRUFBMlIsQ0FBQyIsImZpbGUiOiIuL2Fzc2V0cy9nbG9iYWwuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGNvbnRlbnQ9cmVxdWlyZShcIiEhLi4vbG9hZGVycy9jc3MtbG9hZGVyL2Nzcy1sb2FkZXIuanMhLi9nbG9iYWwuY3NzXCIpOzt2YXIgc3R5bGUgPSByZXF1aXJlKFwiIS4uL2xvYWRlcnMvc3R5bGUtbG9hZGVyL2FkZC1zdHlsZS5qc1wiKShjb250ZW50KTs7aWYgKG1vZHVsZS5ob3QpIHs7ICBpZiAoIWNvbnRlbnQubG9jYWxzKSB7O1x0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbG9hZGVycy9jc3MtbG9hZGVyL2Nzcy1sb2FkZXIuanMhLi9nbG9iYWwuY3NzXCIsIGZ1bmN0aW9uKCkgezsgICAgIHN0eWxlLmlubmVySFRNTCA9IHJlcXVpcmUoXCIhIS4uL2xvYWRlcnMvY3NzLWxvYWRlci9jc3MtbG9hZGVyLmpzIS4vZ2xvYmFsLmNzc1wiKTs7ICAgfSk7ICB9OyAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHsgY29uc29sZS5sb2coc3R5bGUpO3N0eWxlLnJlbW92ZSgpIH0pO307aWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/global.css\n");

/***/ }),

/***/ "./assets/style.css":
/*!**************************!*\
  !*** ./assets/style.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content=__webpack_require__(/*! !../loaders/css-loader/css-loader.js!./style.css */ \"./loaders/css-loader/css-loader.js!./assets/style.css\");;var style = __webpack_require__(/*! ../loaders/style-loader/add-style.js */ \"./loaders/style-loader/add-style.js\")(content);;if (false) {};if(content.locals) module.exports = content.locals//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGUuY3NzPzA2NzciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxtQkFBTyxDQUFDLCtHQUFtRCxHQUFHLFlBQVksbUJBQU8sQ0FBQyxpRkFBdUMsWUFBWSxJQUFJLEtBQVUsRUFBRSxFQUF5UixDQUFDIiwiZmlsZSI6Ii4vYXNzZXRzL3N0eWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBjb250ZW50PXJlcXVpcmUoXCIhIS4uL2xvYWRlcnMvY3NzLWxvYWRlci9jc3MtbG9hZGVyLmpzIS4vc3R5bGUuY3NzXCIpOzt2YXIgc3R5bGUgPSByZXF1aXJlKFwiIS4uL2xvYWRlcnMvc3R5bGUtbG9hZGVyL2FkZC1zdHlsZS5qc1wiKShjb250ZW50KTs7aWYgKG1vZHVsZS5ob3QpIHs7ICBpZiAoIWNvbnRlbnQubG9jYWxzKSB7O1x0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbG9hZGVycy9jc3MtbG9hZGVyL2Nzcy1sb2FkZXIuanMhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7OyAgICAgc3R5bGUuaW5uZXJIVE1MID0gcmVxdWlyZShcIiEhLi4vbG9hZGVycy9jc3MtbG9hZGVyL2Nzcy1sb2FkZXIuanMhLi9zdHlsZS5jc3NcIik7OyAgIH0pOyAgfTsgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7IGNvbnNvbGUubG9nKHN0eWxlKTtzdHlsZS5yZW1vdmUoKSB9KTt9O2lmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/style.css\n");

/***/ }),

/***/ "./assets/test-img.png":
/*!*****************************!*\
  !*** ./assets/test-img.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"[hash].png\"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvdGVzdC1pbWcucG5nP2QxYmYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCLHFCQUF1QiIsImZpbGUiOiIuL2Fzc2V0cy90ZXN0LWltZy5wbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJbaGFzaF0ucG5nXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/test-img.png\n");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _babelExample = __webpack_require__(/*! ./assets/babel-example.js */ \"./assets/babel-example.js\");\n\nvar _babelExample2 = _interopRequireDefault(_babelExample);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n__webpack_require__(/*! ./assets/global.css */ \"./assets/global.css\");\n__webpack_require__(/*! ./assets/style.css */ \"./assets/style.css\");\n__webpack_require__(/*! ./assets/test-img.png */ \"./assets/test-img.png\");\n\nvar personInstance = new _babelExample2.default('Oliver');\nvar name = personInstance.getName();\nconsole.log(name);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdW5rbm93bj9kNGE3Il0sIm5hbWVzIjpbInJlcXVpcmUiLCJwZXJzb25JbnN0YW5jZSIsIlBlcnNvbiIsIm5hbWUiLCJnZXROYW1lIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBQ0FBLG1CQUFPQSxDQUFDLGdEQUFSO0FBQ0FBLG1CQUFPQSxDQUFDLDhDQUFSO0FBQ0FBLG1CQUFPQSxDQUFDLG9EQUFSOztBQUVBLElBQU1DLGlCQUFpQixJQUFJQyxzQkFBSixDQUFXLFFBQVgsQ0FBdkI7QUFDQSxJQUFJQyxPQUFPRixlQUFlRyxPQUFmLEVBQVg7QUFDQUMsUUFBUUMsR0FBUixDQUFZSCxJQUFaIiwiZmlsZSI6Ii4vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGVyc29uIGZyb20gJy4vYXNzZXRzL2JhYmVsLWV4YW1wbGUuanMnXHJcbnJlcXVpcmUoJy4vYXNzZXRzL2dsb2JhbC5jc3MnKVxyXG5yZXF1aXJlKCcuL2Fzc2V0cy9zdHlsZS5jc3MnKVxyXG5yZXF1aXJlKCcuL2Fzc2V0cy90ZXN0LWltZy5wbmcnKVxyXG5cclxuY29uc3QgcGVyc29uSW5zdGFuY2UgPSBuZXcgUGVyc29uKCdPbGl2ZXInKVxyXG52YXIgbmFtZSA9IHBlcnNvbkluc3RhbmNlLmdldE5hbWUoKVxyXG5jb25zb2xlLmxvZyhuYW1lKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./loaders/css-loader/css-base.js":
/*!****************************************!*\
  !*** ./loaders/css-loader/css-base.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\r\n * 这里比较简单，直接复制了官方的代码，并删除了部分不重要的代码\r\n/*\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Tobias Koppers @sokra\r\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\treturn item[1];\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function (modules, mediaQuery) {\n\t\tif (typeof modules === \"string\") modules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor (var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif (typeof id === \"number\") alreadyImportedModules[id] = true;\n\t\t}\n\t\tfor (i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif (typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif (mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if (mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdW5rbm93bj9kNGE3Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJ1c2VTb3VyY2VNYXAiLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWFRdWVyeSIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJsZW5ndGgiLCJpZCIsInB1c2giXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7OztBQU1BO0FBQ0FBLE9BQU9DLE9BQVAsR0FBaUIsVUFBU0MsWUFBVCxFQUF1QjtBQUN2QyxLQUFJQyxPQUFPLEVBQVg7O0FBRUE7QUFDQUEsTUFBS0MsUUFBTCxHQUFnQixTQUFTQSxRQUFULEdBQW9CO0FBQ25DLFNBQU8sS0FBS0MsR0FBTCxDQUFTLFVBQVVDLElBQVYsRUFBZ0I7QUFDNUIsVUFBT0EsS0FBSyxDQUFMLENBQVA7QUFDSCxHQUZNLEVBRUpDLElBRkksQ0FFQyxFQUZELENBQVA7QUFHQSxFQUpEOztBQU1BO0FBQ0FKLE1BQUtLLENBQUwsR0FBUyxVQUFTQyxPQUFULEVBQWtCQyxVQUFsQixFQUE4QjtBQUN0QyxNQUFHLE9BQU9ELE9BQVAsS0FBbUIsUUFBdEIsRUFDQ0EsVUFBVSxDQUFDLENBQUMsSUFBRCxFQUFPQSxPQUFQLEVBQWdCLEVBQWhCLENBQUQsQ0FBVjtBQUNELE1BQUlFLHlCQUF5QixFQUE3QjtBQUNBLE9BQUksSUFBSUgsSUFBSSxDQUFaLEVBQWVBLElBQUksS0FBS0ksTUFBeEIsRUFBZ0NKLEdBQWhDLEVBQXFDO0FBQ3BDLE9BQUlLLEtBQUssS0FBS0wsQ0FBTCxFQUFRLENBQVIsQ0FBVDtBQUNBLE9BQUcsT0FBT0ssRUFBUCxLQUFjLFFBQWpCLEVBQ0NGLHVCQUF1QkUsRUFBdkIsSUFBNkIsSUFBN0I7QUFDRDtBQUNELE9BQUlMLElBQUksQ0FBUixFQUFXQSxJQUFJQyxRQUFRRyxNQUF2QixFQUErQkosR0FBL0IsRUFBb0M7QUFDbkMsT0FBSUYsT0FBT0csUUFBUUQsQ0FBUixDQUFYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFHLE9BQU9GLEtBQUssQ0FBTCxDQUFQLEtBQW1CLFFBQW5CLElBQStCLENBQUNLLHVCQUF1QkwsS0FBSyxDQUFMLENBQXZCLENBQW5DLEVBQW9FO0FBQ25FLFFBQUdJLGNBQWMsQ0FBQ0osS0FBSyxDQUFMLENBQWxCLEVBQTJCO0FBQzFCQSxVQUFLLENBQUwsSUFBVUksVUFBVjtBQUNBLEtBRkQsTUFFTyxJQUFHQSxVQUFILEVBQWU7QUFDckJKLFVBQUssQ0FBTCxJQUFVLE1BQU1BLEtBQUssQ0FBTCxDQUFOLEdBQWdCLFNBQWhCLEdBQTRCSSxVQUE1QixHQUF5QyxHQUFuRDtBQUNBO0FBQ0RQLFNBQUtXLElBQUwsQ0FBVVIsSUFBVjtBQUNBO0FBQ0Q7QUFDRCxFQXhCRDtBQXlCQSxRQUFPSCxJQUFQO0FBQ0EsQ0FyQ0QiLCJmaWxlIjoiLi9sb2FkZXJzL2Nzcy1sb2FkZXIvY3NzLWJhc2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog6L+Z6YeM5q+U6L6D566A5Y2V77yM55u05o6l5aSN5Yi25LqG5a6Y5pa555qE5Luj56CB77yM5bm25Yig6Zmk5LqG6YOo5YiG5LiN6YeN6KaB55qE5Luj56CBXHJcbi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICByZXR1cm4gaXRlbVsxXVxyXG5cdFx0fSkuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./loaders/css-loader/css-base.js\n");

/***/ }),

/***/ "./loaders/css-loader/css-loader.js!./assets/global.css":
/*!**************************************************************!*\
  !*** ./loaders/css-loader/css-loader.js!./assets/global.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ./loaders/css-loader/css-base.js */ \"./loaders/css-loader/css-base.js\")();\n;;exports.push([module.i, \"body {\\r\\n  background-color: #f1f1f1;\\r\\n}\", \"\"]);;exports.locals ={}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvZ2xvYmFsLmNzcz8zZDIzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUEyQixtQkFBTyxDQUFDLDBFQUErRTtBQUNsSCxFQUFFLGNBQWMsUUFBUyxTQUFTLGdDQUFnQyxLQUFLLFNBQVMiLCJmaWxlIjoiLi9sb2FkZXJzL2Nzcy1sb2FkZXIvY3NzLWxvYWRlci5qcyEuL2Fzc2V0cy9nbG9iYWwuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkY6L015LXByb2plY3Qvd2VicGFja1ByYWN0aWNlL215LWxvYWRlci1wbHVnaW4vbG9hZGVycy9jc3MtbG9hZGVyL2Nzcy1iYXNlLmpzXCIpKCk7XG47O2V4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXHJcXG59XCIsIFwiXCJdKTs7ZXhwb3J0cy5sb2NhbHMgPXt9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./loaders/css-loader/css-loader.js!./assets/global.css\n");

/***/ }),

/***/ "./loaders/css-loader/css-loader.js!./assets/style.css":
/*!*************************************************************!*\
  !*** ./loaders/css-loader/css-loader.js!./assets/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ./loaders/css-loader/css-base.js */ \"./loaders/css-loader/css-base.js\")();\n;exports.i(__webpack_require__(/*! ./global.css */ \"./assets/global.css\"));exports.push([module.i, \"@import './global.css';\\r\\nh1 {\\r\\n  color: #f00;\\r\\n}\\r\\n\\r\\n._input_css_2__avatar {\\r\\n  width: 100px;\\r\\n  height: 100px;\\r\\n  background-image: url('\" + __webpack_require__(/*! ./test-img.png */ \"./assets/test-img.png\") + \"');\\r\\n  background-size: cover;\\r\\n}\", \"\"]);;exports.locals ={\"avatar\":\"_input_css_2__avatar\"}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGUuY3NzP2Q3NmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkJBQTJCLG1CQUFPLENBQUMsMEVBQStFO0FBQ2xILENBQUMsVUFBVSxtQkFBTyxDQUFDLHlDQUFjLEdBQUcsY0FBYyxRQUFTLDBCQUEwQixRQUFRLGtCQUFrQixLQUFLLCtCQUErQixtQkFBbUIsb0JBQW9CLGlDQUFpQyxtQkFBTyxDQUFDLDZDQUFnQixRQUFRLDZCQUE2QixLQUFLLFNBQVMsaUJBQWlCIiwiZmlsZSI6Ii4vbG9hZGVycy9jc3MtbG9hZGVyL2Nzcy1sb2FkZXIuanMhLi9hc3NldHMvc3R5bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkY6L015LXByb2plY3Qvd2VicGFja1ByYWN0aWNlL215LWxvYWRlci1wbHVnaW4vbG9hZGVycy9jc3MtbG9hZGVyL2Nzcy1iYXNlLmpzXCIpKCk7XG47ZXhwb3J0cy5pKHJlcXVpcmUoXCIuL2dsb2JhbC5jc3NcIikpO2V4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgJy4vZ2xvYmFsLmNzcyc7XFxyXFxuaDEge1xcclxcbiAgY29sb3I6ICNmMDA7XFxyXFxufVxcclxcblxcclxcbi5faW5wdXRfY3NzXzJfX2F2YXRhciB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdcIiArIHJlcXVpcmUoXCIuL3Rlc3QtaW1nLnBuZ1wiKSArIFwiJyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cIiwgXCJcIl0pOztleHBvcnRzLmxvY2FscyA9e1wiYXZhdGFyXCI6XCJfaW5wdXRfY3NzXzJfX2F2YXRhclwifSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./loaders/css-loader/css-loader.js!./assets/style.css\n");

/***/ }),

/***/ "./loaders/style-loader/add-style.js":
/*!*******************************************!*\
  !*** ./loaders/style-loader/add-style.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const addStyle = function (content) {\r\n  var style = document.createElement('style')\r\n  style.innerHTML = content\r\n  document.head.appendChild(style)\r\n}\r\n\r\nmodule.exports = addStyle//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sb2FkZXJzL3N0eWxlLWxvYWRlci9hZGQtc3R5bGUuanM/NmQwNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbG9hZGVycy9zdHlsZS1sb2FkZXIvYWRkLXN0eWxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWRkU3R5bGUgPSBmdW5jdGlvbiAoY29udGVudCkge1xyXG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcclxuICBzdHlsZS5pbm5lckhUTUwgPSBjb250ZW50XHJcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSlcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBhZGRTdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./loaders/style-loader/add-style.js\n");

/***/ })

/******/ });