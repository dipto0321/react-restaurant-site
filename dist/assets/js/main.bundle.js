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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/images sync recursive \\.(png|svg|jpg|gif)$":
/*!*****************************************************!*\
  !*** ./src/assets/images sync \.(png|svg|jpg|gif)$ ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./about.jpg\": \"./src/assets/images/about.jpg\",\n\t\"./home.jpg\": \"./src/assets/images/home.jpg\",\n\t\"./map.png\": \"./src/assets/images/map.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/assets/images sync recursive \\\\.(png|svg|jpg|gif)$\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2ltYWdlcyBzeW5jIHJlY3Vyc2l2ZSBcXC4ocG5nfHN2Z3xqcGd8Z2lmKSQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcyBzeW5jIFxcLihwbmd8c3ZnfGpwZ3xnaWYpJD8wMDE4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hYm91dC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Fib3V0LmpwZ1wiLFxuXHRcIi4vaG9tZS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2hvbWUuanBnXCIsXG5cdFwiLi9tYXAucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9tYXAucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMgc3luYyByZWN1cnNpdmUgXFxcXC4ocG5nfHN2Z3xqcGd8Z2lmKSRcIjsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/images sync recursive \\.(png|svg|jpg|gif)$\n");

/***/ }),

/***/ "./src/assets/images/about.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/about.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/about.jpg\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2ltYWdlcy9hYm91dC5qcGcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9hYm91dC5qcGc/M2Y5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL2Fib3V0LmpwZ1wiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/images/about.jpg\n");

/***/ }),

/***/ "./src/assets/images/home.jpg":
/*!************************************!*\
  !*** ./src/assets/images/home.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/home.jpg\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2ltYWdlcy9ob21lLmpwZy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2hvbWUuanBnPzEyMGQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9ob21lLmpwZ1wiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/images/home.jpg\n");

/***/ }),

/***/ "./src/assets/images/map.png":
/*!***********************************!*\
  !*** ./src/assets/images/map.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/map.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2ltYWdlcy9tYXAucG5nLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbWFwLnBuZz8zZjYwIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvbWFwLnBuZ1wiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/images/map.png\n");

/***/ }),

/***/ "./src/assets/js/about.js":
/*!********************************!*\
  !*** ./src/assets/js/about.js ***!
  \********************************/
/*! exports provided: aboutContentGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"aboutContentGenerator\", function() { return aboutContentGenerator; });\nconst aboutPageContent = {\r\n  heading: 'About page',\r\n  body: `<p>Urna condimentum mattis pellentesque id nibh tortor id aliquet. Nisl nisi scelerisque eu ultrices vitae auctor eu. Turpis egestas integer eget aliquet nibh. Eget mi proin sed libero. Mi sit amet mauris commodo quis imperdiet massa. Curabitur vitae nunc sed velit dignissim. Elementum eu facilisis sed odio morbi quis commodo odio. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Elementum nisi quis eleifend quam adipiscing vitae. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Amet luctus venenatis lectus magna fringilla urna. Morbi tincidunt augue interdum velit euismod.</p>\r\n  <p> Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget.In nisl nisi scelerisque eu.Auctor neque vitae tempus quam.Amet consectetur adipiscing elit ut.Nulla facilisi etiam dignissim diam.Nulla pharetra diam sit amet nisl suscipit.Pellentesque habitant morbi tristique senectus et netus et.Eleifend quam adipiscing vitae proin.Pharetra pharetra massa massa ultricies mi quis hendrerit.Et tortor consequat id porta nibh venenatis cras.Pellentesque elit eget gravida cum sociis natoque.A lacus vestibulum sed arcu non odio.Varius sit amet mattis vulputate enim nulla aliquet porttitor lacus.Risus in hendrerit gravida rutrum.Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. </p>\r\n`,\r\n\r\n  image: 'about.jpg',\r\n};\r\n\r\nfunction aboutContentGenerator() {\r\n  // For every tab content have a main content div\r\n  const contentDiv = document.createElement('div');\r\n  contentDiv.setAttribute('id', 'tabContentDiv');\r\n\r\n  // Each tab content should have a main text\r\n  const contentBody = document.createElement('div');\r\n  contentBody.setAttribute('class', 'content');\r\n  contentBody.innerHTML = aboutPageContent.body;\r\n  // Each tab content should have an image\r\n  const image = document.createElement('img');\r\n  image.setAttribute('class', 'content-img');\r\n  image.setAttribute('src', `./assets/images/${aboutPageContent.image}`);\r\n  return {\r\n    contentDiv,\r\n    contentBody,\r\n    image,\r\n  };\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2pzL2Fib3V0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hYm91dC5qcz85NjZiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFib3V0UGFnZUNvbnRlbnQgPSB7XHJcbiAgaGVhZGluZzogJ0Fib3V0IHBhZ2UnLFxyXG4gIGJvZHk6IGA8cD5Vcm5hIGNvbmRpbWVudHVtIG1hdHRpcyBwZWxsZW50ZXNxdWUgaWQgbmliaCB0b3J0b3IgaWQgYWxpcXVldC4gTmlzbCBuaXNpIHNjZWxlcmlzcXVlIGV1IHVsdHJpY2VzIHZpdGFlIGF1Y3RvciBldS4gVHVycGlzIGVnZXN0YXMgaW50ZWdlciBlZ2V0IGFsaXF1ZXQgbmliaC4gRWdldCBtaSBwcm9pbiBzZWQgbGliZXJvLiBNaSBzaXQgYW1ldCBtYXVyaXMgY29tbW9kbyBxdWlzIGltcGVyZGlldCBtYXNzYS4gQ3VyYWJpdHVyIHZpdGFlIG51bmMgc2VkIHZlbGl0IGRpZ25pc3NpbS4gRWxlbWVudHVtIGV1IGZhY2lsaXNpcyBzZWQgb2RpbyBtb3JiaSBxdWlzIGNvbW1vZG8gb2Rpby4gTGlndWxhIHVsbGFtY29ycGVyIG1hbGVzdWFkYSBwcm9pbiBsaWJlcm8gbnVuYyBjb25zZXF1YXQgaW50ZXJkdW0gdmFyaXVzLiBGYXVjaWJ1cyB2aXRhZSBhbGlxdWV0IG5lYyB1bGxhbWNvcnBlciBzaXQgYW1ldCByaXN1cyBudWxsYW0uIEVsZW1lbnR1bSBuaXNpIHF1aXMgZWxlaWZlbmQgcXVhbSBhZGlwaXNjaW5nIHZpdGFlLiBQb3N1ZXJlIHNvbGxpY2l0dWRpbiBhbGlxdWFtIHVsdHJpY2VzIHNhZ2l0dGlzIG9yY2kgYSBzY2VsZXJpc3F1ZSBwdXJ1cyBzZW1wZXIuIEFtZXQgbHVjdHVzIHZlbmVuYXRpcyBsZWN0dXMgbWFnbmEgZnJpbmdpbGxhIHVybmEuIE1vcmJpIHRpbmNpZHVudCBhdWd1ZSBpbnRlcmR1bSB2ZWxpdCBldWlzbW9kLjwvcD5cclxuICA8cD4gTGFvcmVldCBzdXNwZW5kaXNzZSBpbnRlcmR1bSBjb25zZWN0ZXR1ciBsaWJlcm8gaWQgZmF1Y2lidXMgbmlzbCB0aW5jaWR1bnQgZWdldC5JbiBuaXNsIG5pc2kgc2NlbGVyaXNxdWUgZXUuQXVjdG9yIG5lcXVlIHZpdGFlIHRlbXB1cyBxdWFtLkFtZXQgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0IHV0Lk51bGxhIGZhY2lsaXNpIGV0aWFtIGRpZ25pc3NpbSBkaWFtLk51bGxhIHBoYXJldHJhIGRpYW0gc2l0IGFtZXQgbmlzbCBzdXNjaXBpdC5QZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0LkVsZWlmZW5kIHF1YW0gYWRpcGlzY2luZyB2aXRhZSBwcm9pbi5QaGFyZXRyYSBwaGFyZXRyYSBtYXNzYSBtYXNzYSB1bHRyaWNpZXMgbWkgcXVpcyBoZW5kcmVyaXQuRXQgdG9ydG9yIGNvbnNlcXVhdCBpZCBwb3J0YSBuaWJoIHZlbmVuYXRpcyBjcmFzLlBlbGxlbnRlc3F1ZSBlbGl0IGVnZXQgZ3JhdmlkYSBjdW0gc29jaWlzIG5hdG9xdWUuQSBsYWN1cyB2ZXN0aWJ1bHVtIHNlZCBhcmN1IG5vbiBvZGlvLlZhcml1cyBzaXQgYW1ldCBtYXR0aXMgdnVscHV0YXRlIGVuaW0gbnVsbGEgYWxpcXVldCBwb3J0dGl0b3IgbGFjdXMuUmlzdXMgaW4gaGVuZHJlcml0IGdyYXZpZGEgcnV0cnVtLlRpbmNpZHVudCBhdWd1ZSBpbnRlcmR1bSB2ZWxpdCBldWlzbW9kIGluIHBlbGxlbnRlc3F1ZSBtYXNzYSBwbGFjZXJhdCBkdWlzLiA8L3A+XHJcbmAsXHJcblxyXG4gIGltYWdlOiAnYWJvdXQuanBnJyxcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhYm91dENvbnRlbnRHZW5lcmF0b3IoKSB7XHJcbiAgLy8gRm9yIGV2ZXJ5IHRhYiBjb250ZW50IGhhdmUgYSBtYWluIGNvbnRlbnQgZGl2XHJcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRlbnREaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0YWJDb250ZW50RGl2Jyk7XHJcblxyXG4gIC8vIEVhY2ggdGFiIGNvbnRlbnQgc2hvdWxkIGhhdmUgYSBtYWluIHRleHRcclxuICBjb25zdCBjb250ZW50Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRlbnRCb2R5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGVudCcpO1xyXG4gIGNvbnRlbnRCb2R5LmlubmVySFRNTCA9IGFib3V0UGFnZUNvbnRlbnQuYm9keTtcclxuICAvLyBFYWNoIHRhYiBjb250ZW50IHNob3VsZCBoYXZlIGFuIGltYWdlXHJcbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbnRlbnQtaW1nJyk7XHJcbiAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBgLi9hc3NldHMvaW1hZ2VzLyR7YWJvdXRQYWdlQ29udGVudC5pbWFnZX1gKTtcclxuICByZXR1cm4ge1xyXG4gICAgY29udGVudERpdixcclxuICAgIGNvbnRlbnRCb2R5LFxyXG4gICAgaW1hZ2UsXHJcbiAgfTtcclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/js/about.js\n");

/***/ }),

/***/ "./src/assets/js/contact.js":
/*!**********************************!*\
  !*** ./src/assets/js/contact.js ***!
  \**********************************/
/*! exports provided: contactContentGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contactContentGenerator\", function() { return contactContentGenerator; });\nconst contactPageContent = {\r\n  heading: 'Contact Image',\r\n  body: `\r\n  <form>\r\n    Telephone: <br>\r\n    <input type = \"text\" name = \"telephone\" value = \"\" >\r\n    <br>\r\n    Email: <br>\r\n    <input type = \"text\" name = \"email\" value = \"\" >\r\n    <br><br>\r\n    <input type = \"submit\" value = \"Submit\" >\r\n    </form>\r\n  `,\r\n  image: 'map.png',\r\n};\r\n\r\nfunction contactContentGenerator() {\r\n  // For every tab content have a main content div\r\n  const contentDiv = document.createElement('div');\r\n  contentDiv.setAttribute('id', 'tabContentDiv');\r\n\r\n  // Each tab content should have a main text\r\n  const contentBody = document.createElement('div');\r\n  contentBody.setAttribute('class', 'content');\r\n  contentBody.innerHTML = contactPageContent.body;\r\n  // Each tab content should have an image\r\n  const image = document.createElement('img');\r\n  image.setAttribute('class', 'content-img');\r\n  image.setAttribute('src', `./assets/images/${contactPageContent.image}`);\r\n  return {\r\n    contentDiv,\r\n    contentBody,\r\n    image,\r\n  };\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2pzL2NvbnRhY3QuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbnRhY3QuanM/OWFiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250YWN0UGFnZUNvbnRlbnQgPSB7XHJcbiAgaGVhZGluZzogJ0NvbnRhY3QgSW1hZ2UnLFxyXG4gIGJvZHk6IGBcclxuICA8Zm9ybT5cclxuICAgIFRlbGVwaG9uZTogPGJyPlxyXG4gICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJ0ZWxlcGhvbmVcIiB2YWx1ZSA9IFwiXCIgPlxyXG4gICAgPGJyPlxyXG4gICAgRW1haWw6IDxicj5cclxuICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9IFwiZW1haWxcIiB2YWx1ZSA9IFwiXCIgPlxyXG4gICAgPGJyPjxicj5cclxuICAgIDxpbnB1dCB0eXBlID0gXCJzdWJtaXRcIiB2YWx1ZSA9IFwiU3VibWl0XCIgPlxyXG4gICAgPC9mb3JtPlxyXG4gIGAsXHJcbiAgaW1hZ2U6ICdtYXAucG5nJyxcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb250YWN0Q29udGVudEdlbmVyYXRvcigpIHtcclxuICAvLyBGb3IgZXZlcnkgdGFiIGNvbnRlbnQgaGF2ZSBhIG1haW4gY29udGVudCBkaXZcclxuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGVudERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RhYkNvbnRlbnREaXYnKTtcclxuXHJcbiAgLy8gRWFjaCB0YWIgY29udGVudCBzaG91bGQgaGF2ZSBhIG1haW4gdGV4dFxyXG4gIGNvbnN0IGNvbnRlbnRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGVudEJvZHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250ZW50Jyk7XHJcbiAgY29udGVudEJvZHkuaW5uZXJIVE1MID0gY29udGFjdFBhZ2VDb250ZW50LmJvZHk7XHJcbiAgLy8gRWFjaCB0YWIgY29udGVudCBzaG91bGQgaGF2ZSBhbiBpbWFnZVxyXG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250ZW50LWltZycpO1xyXG4gIGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgYC4vYXNzZXRzL2ltYWdlcy8ke2NvbnRhY3RQYWdlQ29udGVudC5pbWFnZX1gKTtcclxuICByZXR1cm4ge1xyXG4gICAgY29udGVudERpdixcclxuICAgIGNvbnRlbnRCb2R5LFxyXG4gICAgaW1hZ2UsXHJcbiAgfTtcclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/js/contact.js\n");

/***/ }),

/***/ "./src/assets/js/home.js":
/*!*******************************!*\
  !*** ./src/assets/js/home.js ***!
  \*******************************/
/*! exports provided: homeContentGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"homeContentGenerator\", function() { return homeContentGenerator; });\nconst homePageContent = {\r\n  heading: 'Home Page',\r\n  body:\r\n    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis vel eros donec ac odio tempor orci dapibus ultrices. Convallis tellus id interdum velit laoreet. Vulputate mi sit amet mauris. Habitant morbi tristique senectus et. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Rutrum quisque non tellus orci ac auctor. Eros donec ac odio tempor. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Fringilla ut morbi tincidunt augue. Leo duis ut diam quam. Pharetra et ultrices neque ornare. Non pulvinar neque laoreet suspendisse interdum consectetur libero. Morbi blandit cursus risus at ultrices mi tempus imperdiet.</p>',\r\n  image: 'home.jpg',\r\n};\r\n\r\nfunction homeContentGenerator() {\r\n  // For every tab content have a main content div\r\n  const contentDiv = document.createElement('div');\r\n  contentDiv.setAttribute('id', 'tabContentDiv');\r\n\r\n  // Each tab content should have a main text\r\n  const contentBody = document.createElement('div');\r\n  contentBody.setAttribute('class', 'content');\r\n  contentBody.innerHTML = homePageContent.body;\r\n  // Each tab content should have an image\r\n  const image = document.createElement('img');\r\n  image.setAttribute('class', 'content-img');\r\n  image.setAttribute('src', `./assets/images/${homePageContent.image}`);\r\n  return {\r\n    contentDiv,\r\n    contentBody,\r\n    image,\r\n  };\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2pzL2hvbWUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2hvbWUuanM/NGRjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBob21lUGFnZUNvbnRlbnQgPSB7XHJcbiAgaGVhZGluZzogJ0hvbWUgUGFnZScsXHJcbiAgYm9keTpcclxuICAgICc8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gUXVpcyB2ZWwgZXJvcyBkb25lYyBhYyBvZGlvIHRlbXBvciBvcmNpIGRhcGlidXMgdWx0cmljZXMuIENvbnZhbGxpcyB0ZWxsdXMgaWQgaW50ZXJkdW0gdmVsaXQgbGFvcmVldC4gVnVscHV0YXRlIG1pIHNpdCBhbWV0IG1hdXJpcy4gSGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0LiBNYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMgbWFlY2VuYXMgcGhhcmV0cmEgY29udmFsbGlzIHBvc3VlcmUuIFJ1dHJ1bSBxdWlzcXVlIG5vbiB0ZWxsdXMgb3JjaSBhYyBhdWN0b3IuIEVyb3MgZG9uZWMgYWMgb2RpbyB0ZW1wb3IuIEFsaXF1YW0gdWx0cmljZXMgc2FnaXR0aXMgb3JjaSBhIHNjZWxlcmlzcXVlIHB1cnVzIHNlbXBlciBlZ2V0IGR1aXMuIEZyaW5naWxsYSB1dCBtb3JiaSB0aW5jaWR1bnQgYXVndWUuIExlbyBkdWlzIHV0IGRpYW0gcXVhbS4gUGhhcmV0cmEgZXQgdWx0cmljZXMgbmVxdWUgb3JuYXJlLiBOb24gcHVsdmluYXIgbmVxdWUgbGFvcmVldCBzdXNwZW5kaXNzZSBpbnRlcmR1bSBjb25zZWN0ZXR1ciBsaWJlcm8uIE1vcmJpIGJsYW5kaXQgY3Vyc3VzIHJpc3VzIGF0IHVsdHJpY2VzIG1pIHRlbXB1cyBpbXBlcmRpZXQuPC9wPicsXHJcbiAgaW1hZ2U6ICdob21lLmpwZycsXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaG9tZUNvbnRlbnRHZW5lcmF0b3IoKSB7XHJcbiAgLy8gRm9yIGV2ZXJ5IHRhYiBjb250ZW50IGhhdmUgYSBtYWluIGNvbnRlbnQgZGl2XHJcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRlbnREaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0YWJDb250ZW50RGl2Jyk7XHJcblxyXG4gIC8vIEVhY2ggdGFiIGNvbnRlbnQgc2hvdWxkIGhhdmUgYSBtYWluIHRleHRcclxuICBjb25zdCBjb250ZW50Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRlbnRCb2R5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGVudCcpO1xyXG4gIGNvbnRlbnRCb2R5LmlubmVySFRNTCA9IGhvbWVQYWdlQ29udGVudC5ib2R5O1xyXG4gIC8vIEVhY2ggdGFiIGNvbnRlbnQgc2hvdWxkIGhhdmUgYW4gaW1hZ2VcclxuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGltYWdlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGVudC1pbWcnKTtcclxuICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAuL2Fzc2V0cy9pbWFnZXMvJHtob21lUGFnZUNvbnRlbnQuaW1hZ2V9YCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNvbnRlbnREaXYsXHJcbiAgICBjb250ZW50Qm9keSxcclxuICAgIGltYWdlLFxyXG4gIH07XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/js/home.js\n");

/***/ }),

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/assets/js/home.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/assets/js/about.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/assets/js/contact.js\");\n\r\n\r\n\r\n\r\n__webpack_require__(/*! ../scss/main.scss */ \"./src/assets/scss/main.scss\");\r\n\r\n__webpack_require__(\"./src/assets/images sync recursive \\\\.(png|svg|jpg|gif)$\");\r\n\r\nfunction generateMainHeader() {\r\n  const header = document.createElement('h1');\r\n  header.setAttribute('id', 'mainHeader');\r\n  header.innerText = \"Ryto's Authentic Cuisine\";\r\n  return header;\r\n}\r\n\r\nfunction generateNav(tabArr) {\r\n  // create a ul element\r\n  const ul = document.createElement('ul');\r\n  ul.setAttribute('id', 'tabNav');\r\n  tabArr.forEach((tab) => {\r\n    generateTab(ul, tab);\r\n  });\r\n  return ul;\r\n}\r\n// Function to generate top nav during page load\r\nfunction generateTab(ul, tabName) {\r\n  // create li element\r\n  const li = document.createElement('li');\r\n  li.setAttribute('class', 'tabLi');\r\n  li.setAttribute('id', `${tabName.toLowerCase()}-tab`);\r\n  li.innerText = tabName;\r\n  // append li element into a ul\r\n  ul.appendChild(li);\r\n}\r\nfunction generateContent(content, mainDiv) {\r\n  // Before appending remove any existing div inside main div (previous content)\r\n  const previousContent = document.getElementById('tabContentDiv');\r\n  const currentContent = content;\r\n  if (previousContent !== null) mainDiv.removeChild(previousContent);\r\n  // Append all elements into content's div\r\n  appendCurrentContent(currentContent, mainDiv);\r\n}\r\n\r\n// Appending contents function\r\nfunction appendCurrentContent(currentContent, mainDiv) {\r\n  currentContent.contentDiv.appendChild(currentContent.image);\r\n  currentContent.contentDiv.appendChild(currentContent.contentBody);\r\n  // Append content div into main div\r\n  mainDiv.appendChild(currentContent.contentDiv);\r\n}\r\n\r\nfunction generateInitialContent(contentDiv, tabs, homeContent) {\r\n  contentDiv.appendChild(generateMainHeader());\r\n  contentDiv.appendChild(generateNav(tabs));\r\n  // Let home content appear during page load\r\n  generateContent(homeContent, contentDiv);\r\n  // Home tab should appear active\r\n  changeTabAppearance(document.getElementById('home-tab'));\r\n  // Add event listeners to all content divs and tabs\r\n  addListenersToDivsAndTabs();\r\n}\r\n\r\nfunction changeTabAppearance(tab) {\r\n  const previousTab = document.getElementsByClassName('active')[0];\r\n  if (previousTab !== undefined) {\r\n    previousTab.setAttribute('class', 'tabLi');\r\n  }\r\n  tab.setAttribute('class', 'tabLi active');\r\n}\r\n\r\n// function to add click event listeners to all content divs and tabs\r\nfunction addListenersToDivsAndTabs() {\r\n  addContentListener('home-tab', Object(_home__WEBPACK_IMPORTED_MODULE_0__[\"homeContentGenerator\"])());\r\n  addContentListener('about-tab', Object(_about__WEBPACK_IMPORTED_MODULE_1__[\"aboutContentGenerator\"])());\r\n  addContentListener('contact-tab', Object(_contact__WEBPACK_IMPORTED_MODULE_2__[\"contactContentGenerator\"])());\r\n}\r\n\r\nfunction addContentListener(id, content) {\r\n  const tab = document.getElementById(id);\r\n  tab.addEventListener('click', () => {\r\n    generateContent(content, document.getElementById('content'));\r\n    changeTabAppearance(tab);\r\n  });\r\n}\r\n\r\ngenerateInitialContent(\r\n  document.getElementById('content'),\r\n  ['Home', 'About', 'Contact'],\r\n  Object(_home__WEBPACK_IMPORTED_MODULE_0__[\"homeContentGenerator\"])(),\r\n);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2pzL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9pbmRleC5qcz9lNGI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvbWVDb250ZW50R2VuZXJhdG9yIH0gZnJvbSAnLi9ob21lJztcclxuaW1wb3J0IHsgYWJvdXRDb250ZW50R2VuZXJhdG9yIH0gZnJvbSAnLi9hYm91dCc7XHJcbmltcG9ydCB7IGNvbnRhY3RDb250ZW50R2VuZXJhdG9yIH0gZnJvbSAnLi9jb250YWN0JztcclxuXHJcbnJlcXVpcmUoJy4uL3Njc3MvbWFpbi5zY3NzJyk7XHJcblxyXG5yZXF1aXJlLmNvbnRleHQoJy4uL2ltYWdlcycsIHRydWUsIC9cXC4ocG5nfHN2Z3xqcGd8Z2lmKSQvKTtcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlTWFpbkhlYWRlcigpIHtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW5IZWFkZXInKTtcclxuICBoZWFkZXIuaW5uZXJUZXh0ID0gXCJSeXRvJ3MgQXV0aGVudGljIEN1aXNpbmVcIjtcclxuICByZXR1cm4gaGVhZGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZU5hdih0YWJBcnIpIHtcclxuICAvLyBjcmVhdGUgYSB1bCBlbGVtZW50XHJcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gIHVsLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFiTmF2Jyk7XHJcbiAgdGFiQXJyLmZvckVhY2goKHRhYikgPT4ge1xyXG4gICAgZ2VuZXJhdGVUYWIodWwsIHRhYik7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHVsO1xyXG59XHJcbi8vIEZ1bmN0aW9uIHRvIGdlbmVyYXRlIHRvcCBuYXYgZHVyaW5nIHBhZ2UgbG9hZFxyXG5mdW5jdGlvbiBnZW5lcmF0ZVRhYih1bCwgdGFiTmFtZSkge1xyXG4gIC8vIGNyZWF0ZSBsaSBlbGVtZW50XHJcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIGxpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFiTGknKTtcclxuICBsaS5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGFiTmFtZS50b0xvd2VyQ2FzZSgpfS10YWJgKTtcclxuICBsaS5pbm5lclRleHQgPSB0YWJOYW1lO1xyXG4gIC8vIGFwcGVuZCBsaSBlbGVtZW50IGludG8gYSB1bFxyXG4gIHVsLmFwcGVuZENoaWxkKGxpKTtcclxufVxyXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnQoY29udGVudCwgbWFpbkRpdikge1xyXG4gIC8vIEJlZm9yZSBhcHBlbmRpbmcgcmVtb3ZlIGFueSBleGlzdGluZyBkaXYgaW5zaWRlIG1haW4gZGl2IChwcmV2aW91cyBjb250ZW50KVxyXG4gIGNvbnN0IHByZXZpb3VzQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJDb250ZW50RGl2Jyk7XHJcbiAgY29uc3QgY3VycmVudENvbnRlbnQgPSBjb250ZW50O1xyXG4gIGlmIChwcmV2aW91c0NvbnRlbnQgIT09IG51bGwpIG1haW5EaXYucmVtb3ZlQ2hpbGQocHJldmlvdXNDb250ZW50KTtcclxuICAvLyBBcHBlbmQgYWxsIGVsZW1lbnRzIGludG8gY29udGVudCdzIGRpdlxyXG4gIGFwcGVuZEN1cnJlbnRDb250ZW50KGN1cnJlbnRDb250ZW50LCBtYWluRGl2KTtcclxufVxyXG5cclxuLy8gQXBwZW5kaW5nIGNvbnRlbnRzIGZ1bmN0aW9uXHJcbmZ1bmN0aW9uIGFwcGVuZEN1cnJlbnRDb250ZW50KGN1cnJlbnRDb250ZW50LCBtYWluRGl2KSB7XHJcbiAgY3VycmVudENvbnRlbnQuY29udGVudERpdi5hcHBlbmRDaGlsZChjdXJyZW50Q29udGVudC5pbWFnZSk7XHJcbiAgY3VycmVudENvbnRlbnQuY29udGVudERpdi5hcHBlbmRDaGlsZChjdXJyZW50Q29udGVudC5jb250ZW50Qm9keSk7XHJcbiAgLy8gQXBwZW5kIGNvbnRlbnQgZGl2IGludG8gbWFpbiBkaXZcclxuICBtYWluRGl2LmFwcGVuZENoaWxkKGN1cnJlbnRDb250ZW50LmNvbnRlbnREaXYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUluaXRpYWxDb250ZW50KGNvbnRlbnREaXYsIHRhYnMsIGhvbWVDb250ZW50KSB7XHJcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChnZW5lcmF0ZU1haW5IZWFkZXIoKSk7XHJcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChnZW5lcmF0ZU5hdih0YWJzKSk7XHJcbiAgLy8gTGV0IGhvbWUgY29udGVudCBhcHBlYXIgZHVyaW5nIHBhZ2UgbG9hZFxyXG4gIGdlbmVyYXRlQ29udGVudChob21lQ29udGVudCwgY29udGVudERpdik7XHJcbiAgLy8gSG9tZSB0YWIgc2hvdWxkIGFwcGVhciBhY3RpdmVcclxuICBjaGFuZ2VUYWJBcHBlYXJhbmNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLXRhYicpKTtcclxuICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIGFsbCBjb250ZW50IGRpdnMgYW5kIHRhYnNcclxuICBhZGRMaXN0ZW5lcnNUb0RpdnNBbmRUYWJzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVRhYkFwcGVhcmFuY2UodGFiKSB7XHJcbiAgY29uc3QgcHJldmlvdXNUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUnKVswXTtcclxuICBpZiAocHJldmlvdXNUYWIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgcHJldmlvdXNUYWIuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YWJMaScpO1xyXG4gIH1cclxuICB0YWIuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YWJMaSBhY3RpdmUnKTtcclxufVxyXG5cclxuLy8gZnVuY3Rpb24gdG8gYWRkIGNsaWNrIGV2ZW50IGxpc3RlbmVycyB0byBhbGwgY29udGVudCBkaXZzIGFuZCB0YWJzXHJcbmZ1bmN0aW9uIGFkZExpc3RlbmVyc1RvRGl2c0FuZFRhYnMoKSB7XHJcbiAgYWRkQ29udGVudExpc3RlbmVyKCdob21lLXRhYicsIGhvbWVDb250ZW50R2VuZXJhdG9yKCkpO1xyXG4gIGFkZENvbnRlbnRMaXN0ZW5lcignYWJvdXQtdGFiJywgYWJvdXRDb250ZW50R2VuZXJhdG9yKCkpO1xyXG4gIGFkZENvbnRlbnRMaXN0ZW5lcignY29udGFjdC10YWInLCBjb250YWN0Q29udGVudEdlbmVyYXRvcigpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29udGVudExpc3RlbmVyKGlkLCBjb250ZW50KSB7XHJcbiAgY29uc3QgdGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGdlbmVyYXRlQ29udGVudChjb250ZW50LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpKTtcclxuICAgIGNoYW5nZVRhYkFwcGVhcmFuY2UodGFiKTtcclxuICB9KTtcclxufVxyXG5cclxuZ2VuZXJhdGVJbml0aWFsQ29udGVudChcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLFxyXG4gIFsnSG9tZScsICdBYm91dCcsICdDb250YWN0J10sXHJcbiAgaG9tZUNvbnRlbnRHZW5lcmF0b3IoKSxcclxuKTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/js/index.js\n");

/***/ }),

/***/ "./src/assets/scss/main.scss":
/*!***********************************!*\
  !*** ./src/assets/scss/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3Njc3MvbWFpbi5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3NzL21haW4uc2Nzcz8yZGQxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scss/main.scss\n");

/***/ })

/******/ });