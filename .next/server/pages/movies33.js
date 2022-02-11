(function() {
var exports = {};
exports.id = "pages/movies33";
exports.ids = ["pages/movies33"];
exports.modules = {

/***/ "./pages/movies33.js":
/*!***************************!*\
  !*** ./pages/movies33.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Movies33; },
/* harmony export */   "TheMovies": function() { return /* binding */ TheMovies; },
/* harmony export */   "TheForm": function() { return /* binding */ TheForm; },
/* harmony export */   "TheLink": function() { return /* binding */ TheLink; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\HP\\receita6\\pages\\movies33.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


function Movies33() {
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    url: '',
    titleSearchString: ''
  });
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_1___default()(state.url, async u => {
    if (!state.url || !state.titleSearchString) return {
      Search: ''
    };
    if (state.url === '' || state.titleSearchString === '') return {
      Search: ''
    };
    const res = await fetch(`${state.url}/?apiKey=5c658291&s=${state.titleSearchString}`);
    const json = await res.json();
    return json;
  });

  const onClickHandler = e => {
    e.preventDefault();
    let s = document.getElementById('titleSearchString').value;

    if (state.url === '') {
      setState({
        url: 'http://www.omdbapi.com',
        titleSearchString: s
      });
    } else setState({
      url: '',
      titleSearchString: state.titleSearchString
    });
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(TheForm, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }), __jsx(TheLink, {
    url: state.url,
    handler: onClickHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }), __jsx(TheMovies, {
    data: data ? data : {
      Search: ''
    },
    show: state.url !== '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }));
}
function TheMovies({
  data,
  show
}) {
  if (!show) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 24
    }
  });
  if (!data) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 24
    }
  });
  if (data.error) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 29
    }
  }, "falha na pesquisa");
  if (data.Search === '') return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 38
    }
  }, "carregando...");
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, data.Search.map(m => __jsx("div", {
    key: m.imdbID,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 39
    }
  }, m.Title, " --- ", m.Year)));
}
function TheForm() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx("form", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: "titleSearchString",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, "Filtro de T\xEDtulo"), __jsx("input", {
    id: "titleSearchString",
    name: "titleSearchString",
    type: "text",
    autoComplete: "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  })));
}
function TheLink({
  url,
  handler
}) {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "/movies3.js",
    onClick: handler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, " ", url === '' ? 'Mostrar' : 'Ocultar', " "));
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = require("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/movies33.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9tb3ZpZXMzMy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3clwiIl0sIm5hbWVzIjpbIk1vdmllczMzIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwidXJsIiwidGl0bGVTZWFyY2hTdHJpbmciLCJkYXRhIiwiZXJyb3IiLCJ1c2VTV1IiLCJ1IiwiU2VhcmNoIiwicmVzIiwiZmV0Y2giLCJqc29uIiwib25DbGlja0hhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiVGhlTW92aWVzIiwic2hvdyIsIm1hcCIsIm0iLCJpbWRiSUQiLCJUaXRsZSIsIlllYXIiLCJUaGVGb3JtIiwiVGhlTGluayIsImhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULEdBQW1CO0FBRTlCLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsK0NBQVEsQ0FBQztBQUFDQyxPQUFHLEVBQUMsRUFBTDtBQUFTQyxxQkFBaUIsRUFBQztBQUEzQixHQUFELENBQWxDO0FBRUEsUUFBTTtBQUFDQyxRQUFEO0FBQU9DO0FBQVAsTUFBZ0JDLDBDQUFNLENBQUNQLEtBQUssQ0FBQ0csR0FBUCxFQUFZLE1BQU9LLENBQVAsSUFBYTtBQUVqRCxRQUFJLENBQUNSLEtBQUssQ0FBQ0csR0FBUCxJQUFjLENBQUNILEtBQUssQ0FBQ0ksaUJBQXpCLEVBQTRDLE9BQU87QUFBQ0ssWUFBTSxFQUFDO0FBQVIsS0FBUDtBQUU1QyxRQUFJVCxLQUFLLENBQUNHLEdBQU4sS0FBYyxFQUFkLElBQW9CSCxLQUFLLENBQUNJLGlCQUFOLEtBQTJCLEVBQW5ELEVBQXVELE9BQU87QUFBQ0ssWUFBTSxFQUFDO0FBQVIsS0FB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosQ0FGSixDQUZKO0FBZ0JIO0FBQ00sU0FBU0MsT0FBVCxDQUFpQjtBQUFDekIsS0FBRDtBQUFNMEI7QUFBTixDQUFqQixFQUFnQztBQUVuQyxTQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSTtBQUFHLFFBQUksRUFBQyxhQUFSO0FBQXNCLFdBQU8sRUFBRUEsT0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUEwQzFCLEdBQUcsS0FBSyxFQUFSLEdBQWEsU0FBYixHQUF5QixTQUFuRSxNQUZKLENBRko7QUFVSCxDOzs7Ozs7Ozs7OztBQzlHRCxtQzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJwYWdlcy9tb3ZpZXMzMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllczMzKCl7XHJcblxyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7dXJsOicnLCB0aXRsZVNlYXJjaFN0cmluZzonJ30pXHJcblxyXG4gICAgY29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUihzdGF0ZS51cmwsIGFzeW5jICh1KSA9PiB7XHJcblxyXG4gICAgICAgIGlmICghc3RhdGUudXJsIHx8ICFzdGF0ZS50aXRsZVNlYXJjaFN0cmluZykgcmV0dXJuIHtTZWFyY2g6Jyd9XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZS51cmwgPT09ICcnIHx8IHN0YXRlLnRpdGxlU2VhcmNoU3RyaW5nID09PScnKSByZXR1cm4ge1NlYXJjaDonJ31cclxuXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7c3RhdGUudXJsfS8/YXBpS2V5PTVjNjU4MjkxJnM9JHtzdGF0ZS50aXRsZVNlYXJjaFN0cmluZ31gKVxyXG5cclxuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGpzb247XHJcblxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBvbkNsaWNrSGFuZGxlciA9IGUgPT4ge1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgbGV0IHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVTZWFyY2hTdHJpbmcnKS52YWx1ZVxyXG5cclxuICAgICAgICBpZiAoc3RhdGUudXJsID09PSAnJykge1xyXG5cclxuICAgICAgICAgICAgc2V0U3RhdGUoe3VybDonaHR0cDovL3d3dy5vbWRiYXBpLmNvbScsdGl0bGVTZWFyY2hTdHJpbmc6c30pXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSBzZXRTdGF0ZSh7dXJsOicnLHRpdGxlU2VhcmNoU3RyaW5nOiBzdGF0ZS50aXRsZVNlYXJjaFN0cmluZ30pXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgIDxUaGVGb3JtLz5cclxuXHJcbiAgICAgICAgICAgIDxUaGVMaW5rIHVybD17c3RhdGUudXJsfSBoYW5kbGVyPXtvbkNsaWNrSGFuZGxlcn0gLz5cclxuXHJcbiAgICAgICAgICAgIDxUaGVNb3ZpZXMgZGF0YT17ZGF0YSA/IGRhdGE6IHtTZWFyY2g6Jyd9IH0gc2hvdz17c3RhdGUudXJsICE9PSAnJ30gLz5cclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGhlTW92aWVzKHtkYXRhLHNob3d9KXtcclxuXHJcbiAgICBpZiAoIXNob3cpIHJldHVybiAoPGRpdj48L2Rpdj4pXHJcblxyXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gKDxkaXY+PC9kaXY+KVxyXG5cclxuICAgIGlmIChkYXRhLmVycm9yKSByZXR1cm4gKDxkaXY+ZmFsaGEgbmEgcGVzcXVpc2E8L2Rpdj4pXHJcblxyXG4gICAgaWYgKGRhdGEuU2VhcmNoID09PSAnJyApIHJldHVybiAoPGRpdj5jYXJyZWdhbmRvLi4uPC9kaXY+KVxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICB7IGRhdGEuU2VhcmNoLm1hcCggKG0pID0+IDxkaXYga2V5PXttLmltZGJJRH0+e20uVGl0bGV9IC0tLSB7bS5ZZWFyfTwvZGl2PiAgKSB9ICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxuXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFRoZUZvcm0oKXtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgPGZvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVNlYXJjaFN0cmluZ1wiPkZpbHRybyBkZSBUw610dWxvPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0aXRsZVNlYXJjaFN0cmluZ1wiIG5hbWU9XCJ0aXRsZVNlYXJjaFN0cmluZ1wiIHR5cGU9XCJ0ZXh0XCIgYXV0b0NvbXBsZXRlPVwidHJ1ZVwiLz5cclxuXHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG5cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gVGhlTGluayh7dXJsLCBoYW5kbGVyfSl7XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvbW92aWVzMy5qc1wiIG9uQ2xpY2s9e2hhbmRsZXJ9PiB7dXJsID09PSAnJyA/ICdNb3N0cmFyJyA6ICdPY3VsdGFyJ30gPC9hPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcblxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==