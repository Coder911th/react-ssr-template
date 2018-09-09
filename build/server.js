/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"server": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"server/test":"server/test","server/test2":"server/test2"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/ServerCore.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages lazy recursive ^\\.\\/.*$":
/*!**********************************************!*\
  !*** ./pages lazy ^\.\/.*$ namespace object ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./test": [
		"./pages/test.js",
		"server/test"
	],
	"./test.js": [
		"./pages/test.js",
		"server/test"
	],
	"./test2": [
		"./pages/test2.js",
		"server/test2"
	],
	"./test2.js": [
		"./pages/test2.js",
		"server/test2"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./pages lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./server/ServerCore.js":
/*!******************************!*\
  !*** ./server/ServerCore.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(__webpack_require__(/*! express */ "express"));

var _path = _interopRequireDefault(__webpack_require__(/*! path */ "path"));

var _ServerSideRendering = __webpack_require__(/*! ./ServerSideRendering */ "./server/ServerSideRendering.js");

var PORT = 8080,
    APP_FOLDER = _path.default.resolve(__dirname, '..', 'build'),
    PUBLIC_FOLDER = _path.default.resolve(__dirname, '..', 'public'),
    pagesRoutes = ["test","test2"].map(function (pageName) {
  return "/".concat(pageName);
}),
    router = (0, _express.default)();

router
/* Выгрузка статики */
.get('/public/:fileName', function (req, res) {
  return res.sendFile(req.params.fileName, {
    root: PUBLIC_FOLDER
  });
})
/* Первая загрузка приложения */
.get(pagesRoutes, function (req, res) {
  return (0, _ServerSideRendering.sendPageTemplate)(res, req.path.slice(1));
})
/* Клиентский рендеринг */
.get('/client/:pageName', function (req, res) {
  return res.set('Content-Type', 'application/javascript').sendFile(req.params.pageName, {
    root: _path.default.resolve(APP_FOLDER, 'client')
  });
})
/* Серверный рендеринг */
.get('/server/:pageName', function (req, res) {
  return (0, _ServerSideRendering.serverSideRendering)(res, req.params.pageName);
})
/* Not Found 404 */
.get('*', function (req, res) {
  return res.end('Not Found 404');
}).listen(PORT, function (err) {
  return console.log(err ? "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0441\u0435\u0440\u0432\u0435\u0440! (\u041F\u043E\u0440\u0442: ".concat(PORT, ")") : "\u0421\u0435\u0440\u0432\u0435\u0440 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u043F\u0443\u0449\u0435\u043D! (\u041F\u043E\u0440\u0442: ".concat(PORT, ")"));
});
/* WEBPACK VAR INJECTION */}.call(this, "server"))

/***/ }),

/***/ "./server/ServerSideRendering.js":
/*!***************************************!*\
  !*** ./server/ServerSideRendering.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendPageTemplate = sendPageTemplate;
exports.serverSideRendering = serverSideRendering;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

function getPage(_x) {
  return _getPage.apply(this, arguments);
}

function _getPage() {
  _getPage = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(pageName) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __webpack_require__("./pages lazy recursive ^\\.\\/.*$")("./".concat(pageName));

          case 2:
            return _context.abrupt("return", _context.sent.default);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _getPage.apply(this, arguments);
}

var firstChunk = '<!DOCTYPE html>' + '<html>' + '<head>' + '<meta charset="UTF-8">' + '<meta name="viewport" content="width=device-width, initial-scale=1.0">' + '<meta http-equiv="X-UA-Compatible" content="ie=edge">' + '<title>';
var secordChunk = '</title>' + '</head>' + '<body>' + '<div id="content">';
var thirdChunk = '</div>' + '<script src="/public/page-base.js" defer></script>' + '<script src="/public/page-core.js" defer></script>' + '</body>' + '</html>';

function sendPageTemplate(_x2, _x3) {
  return _sendPageTemplate.apply(this, arguments);
}

function _sendPageTemplate() {
  _sendPageTemplate = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(res, pageName) {
    var Page, stream;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getPage(pageName);

          case 2:
            Page = _context2.sent;
            res.set('Content-Type', 'text/html');
            res.write(firstChunk);
            res.write(Page.title);
            res.write(secordChunk);
            stream = (0, _server.renderToNodeStream)(_react.default.createElement(Page, null));
            stream.pipe(res, {
              end: false
            });
            stream.on('end', function () {
              return res.end(thirdChunk);
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _sendPageTemplate.apply(this, arguments);
}

function serverSideRendering(_x4, _x5) {
  return _serverSideRendering.apply(this, arguments);
}

function _serverSideRendering() {
  _serverSideRendering = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3(res, pageName) {
    var Page;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return getPage(pageName);

          case 2:
            Page = _context3.sent;
            res.set('Content-Type', 'application/javascript');
            (0, _server.renderToNodeStream)(_react.default.createElement(Page, null)).pipe(res, {
              end: true
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _serverSideRendering.apply(this, arguments);
}

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),

/***/ "@babel/runtime/helpers/interopRequireDefault":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/interopRequireDefault" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMgbGF6eSBeXFwuXFwvLiokIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL1NlcnZlckNvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL1NlcnZlclNpZGVSZW5kZXJpbmcuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiJdLCJuYW1lcyI6WyJQT1JUIiwiQVBQX0ZPTERFUiIsInBhdGgiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiUFVCTElDX0ZPTERFUiIsInBhZ2VzUm91dGVzIiwiUEFHRVMiLCJtYXAiLCJwYWdlTmFtZSIsInJvdXRlciIsImdldCIsInJlcSIsInJlcyIsInNlbmRGaWxlIiwicGFyYW1zIiwiZmlsZU5hbWUiLCJyb290Iiwic2xpY2UiLCJzZXQiLCJlbmQiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZ2V0UGFnZSIsImRlZmF1bHQiLCJmaXJzdENodW5rIiwic2Vjb3JkQ2h1bmsiLCJ0aGlyZENodW5rIiwic2VuZFBhZ2VUZW1wbGF0ZSIsIlBhZ2UiLCJ3cml0ZSIsInRpdGxlIiwic3RyZWFtIiwicGlwZSIsIm9uIiwic2VydmVyU2lkZVJlbmRlcmluZyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBaUMsMERBQTBEO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtB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SEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7Ozs7Ozs7Ozs7OztBQzNDUCxvRTs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSw2RTs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInNlcnZlclwiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gcmVxdWlyZSgpIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHQvLyBcIjBcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSAwKSB7XG4gXHRcdFx0dmFyIGNodW5rID0gcmVxdWlyZShcIi4vXCIgKyAoe1wic2VydmVyL3Rlc3RcIjpcInNlcnZlci90ZXN0XCIsXCJzZXJ2ZXIvdGVzdDJcIjpcInNlcnZlci90ZXN0MlwifVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zZXJ2ZXIvU2VydmVyQ29yZS5qc1wiKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi90ZXN0XCI6IFtcblx0XHRcIi4vcGFnZXMvdGVzdC5qc1wiLFxuXHRcdFwic2VydmVyL3Rlc3RcIlxuXHRdLFxuXHRcIi4vdGVzdC5qc1wiOiBbXG5cdFx0XCIuL3BhZ2VzL3Rlc3QuanNcIixcblx0XHRcInNlcnZlci90ZXN0XCJcblx0XSxcblx0XCIuL3Rlc3QyXCI6IFtcblx0XHRcIi4vcGFnZXMvdGVzdDIuanNcIixcblx0XHRcInNlcnZlci90ZXN0MlwiXG5cdF0sXG5cdFwiLi90ZXN0Mi5qc1wiOiBbXG5cdFx0XCIuL3BhZ2VzL3Rlc3QyLmpzXCIsXG5cdFx0XCJzZXJ2ZXIvdGVzdDJcIlxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0dmFyIGlkcyA9IG1hcFtyZXFdO1xuXHRpZighaWRzKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoaWRzWzFdKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBpZCA9IGlkc1swXTtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KGlkLCA3KTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9wYWdlcyBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcbmltcG9ydCB7c2VydmVyU2lkZVJlbmRlcmluZywgc2VuZFBhZ2VUZW1wbGF0ZX0gZnJvbSAnLi9TZXJ2ZXJTaWRlUmVuZGVyaW5nJ1xyXG5cclxuY29uc3RcclxuICAgIFBPUlQgPSA4MDgwLFxyXG4gICAgQVBQX0ZPTERFUiA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLicsICdidWlsZCcpLFxyXG4gICAgUFVCTElDX0ZPTERFUiA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLicsICdwdWJsaWMnKSxcclxuICAgIHBhZ2VzUm91dGVzID0gUEFHRVMubWFwKHBhZ2VOYW1lID0+IGAvJHtwYWdlTmFtZX1gKSxcclxuICAgIHJvdXRlciA9IGV4cHJlc3MoKVxyXG5cclxucm91dGVyXHJcbiAgICAvKiDQktGL0LPRgNGD0LfQutCwINGB0YLQsNGC0LjQutC4ICovXHJcbiAgICAuZ2V0KCcvcHVibGljLzpmaWxlTmFtZScsIChyZXEsIHJlcykgPT5cclxuICAgICAgICByZXMuc2VuZEZpbGUocmVxLnBhcmFtcy5maWxlTmFtZSwge3Jvb3Q6IFBVQkxJQ19GT0xERVJ9KSlcclxuICAgIC8qINCf0LXRgNCy0LDRjyDQt9Cw0LPRgNGD0LfQutCwINC/0YDQuNC70L7QttC10L3QuNGPICovXHJcbiAgICAuZ2V0KHBhZ2VzUm91dGVzLCAocmVxLCByZXMpID0+XHJcbiAgICAgICAgc2VuZFBhZ2VUZW1wbGF0ZShyZXMsIHJlcS5wYXRoLnNsaWNlKDEpKSlcclxuICAgIC8qINCa0LvQuNC10L3RgtGB0LrQuNC5INGA0LXQvdC00LXRgNC40L3QsyAqL1xyXG4gICAgLmdldCgnL2NsaWVudC86cGFnZU5hbWUnLCAocmVxLCByZXMpID0+XHJcbiAgICAgICAgcmVzXHJcbiAgICAgICAgICAgIC5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JylcclxuICAgICAgICAgICAgLnNlbmRGaWxlKHJlcS5wYXJhbXMucGFnZU5hbWUsIHtcclxuICAgICAgICAgICAgICAgIHJvb3Q6IHBhdGgucmVzb2x2ZShBUFBfRk9MREVSLCAnY2xpZW50Jyl9KSlcclxuICAgIC8qINCh0LXRgNCy0LXRgNC90YvQuSDRgNC10L3QtNC10YDQuNC90LMgKi9cclxuICAgIC5nZXQoJy9zZXJ2ZXIvOnBhZ2VOYW1lJywgKHJlcSwgcmVzKSA9PlxyXG4gICAgICAgIHNlcnZlclNpZGVSZW5kZXJpbmcocmVzLCByZXEucGFyYW1zLnBhZ2VOYW1lKSlcclxuICAgIC8qIE5vdCBGb3VuZCA0MDQgKi9cclxuICAgIC5nZXQoJyonLCAocmVxLCAgcmVzKSA9PiByZXMuZW5kKCdOb3QgRm91bmQgNDA0JykpXHJcbiAgICAubGlzdGVuKFBPUlQsIGVyciA9PiBjb25zb2xlLmxvZyhlcnJcclxuICAgICAgICA/IGDQndC1INGD0LTQsNC70L7RgdGMINC30LDQv9GD0YHRgtC40YLRjCDRgdC10YDQstC10YAhICjQn9C+0YDRgjogJHtQT1JUfSlgXHJcbiAgICAgICAgOiBg0KHQtdGA0LLQtdGAINGD0YHQv9C10YjQvdC+INC30LDQv9GD0YnQtdC9ISAo0J/QvtGA0YI6ICR7UE9SVH0pYCkpIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge3JlbmRlclRvTm9kZVN0cmVhbX0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcidcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFBhZ2UocGFnZU5hbWUpIHtcclxuICAgIHJldHVybiAoYXdhaXQgaW1wb3J0KFxyXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwic2VydmVyL1tyZXF1ZXN0XVwiICovIGAuLi9wYWdlcy8ke3BhZ2VOYW1lfWApKS5kZWZhdWx0XHJcbn1cclxuXHJcbmNvbnN0IGZpcnN0Q2h1bmsgPSAoXHJcbiAgICAnPCFET0NUWVBFIGh0bWw+JyArXHJcbiAgICAnPGh0bWw+JyArXHJcbiAgICAnPGhlYWQ+JyArXHJcbiAgICAgICAgJzxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPicgK1xyXG4gICAgICAgICc8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiPicgK1xyXG4gICAgICAgICc8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cImllPWVkZ2VcIj4nICtcclxuICAgICAgICAnPHRpdGxlPidcclxuKVxyXG5jb25zdCBzZWNvcmRDaHVuayA9IChcclxuICAgICAgICAnPC90aXRsZT4nICtcclxuICAgICc8L2hlYWQ+JyArXHJcbiAgICAnPGJvZHk+JyArXHJcbiAgICAgICAgJzxkaXYgaWQ9XCJjb250ZW50XCI+J1xyXG4pXHJcbmNvbnN0IHRoaXJkQ2h1bmsgPSAoXHJcbiAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPHNjcmlwdCBzcmM9XCIvcHVibGljL3BhZ2UtYmFzZS5qc1wiIGRlZmVyPjwvc2NyaXB0PicgK1xyXG4gICAgICAgICAgICAnPHNjcmlwdCBzcmM9XCIvcHVibGljL3BhZ2UtY29yZS5qc1wiIGRlZmVyPjwvc2NyaXB0PicgK1xyXG4gICAgICAgICc8L2JvZHk+JyArXHJcbiAgICAnPC9odG1sPidcclxuKVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRQYWdlVGVtcGxhdGUocmVzLCBwYWdlTmFtZSkge1xyXG4gICAgY29uc3QgUGFnZSA9IGF3YWl0IGdldFBhZ2UocGFnZU5hbWUpO1xyXG4gICAgcmVzLnNldCgnQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpXHJcbiAgICByZXMud3JpdGUoZmlyc3RDaHVuaylcclxuICAgIHJlcy53cml0ZShQYWdlLnRpdGxlKVxyXG4gICAgcmVzLndyaXRlKHNlY29yZENodW5rKVxyXG4gICAgY29uc3Qgc3RyZWFtID0gcmVuZGVyVG9Ob2RlU3RyZWFtKDxQYWdlLz4pXHJcbiAgICBzdHJlYW0ucGlwZShyZXMsIHtlbmQ6IGZhbHNlfSlcclxuICAgIHN0cmVhbS5vbignZW5kJywgKCkgPT5cclxuICAgICAgICByZXMuZW5kKHRoaXJkQ2h1bmspKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VydmVyU2lkZVJlbmRlcmluZyhyZXMsIHBhZ2VOYW1lKSB7XHJcbiAgICBjb25zdCBQYWdlID0gYXdhaXQgZ2V0UGFnZShwYWdlTmFtZSk7XHJcbiAgICByZXMuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vamF2YXNjcmlwdCcpXHJcbiAgICByZW5kZXJUb05vZGVTdHJlYW0oPFBhZ2UvPikucGlwZShyZXMsIHtlbmQ6IHRydWV9KVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2ZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==