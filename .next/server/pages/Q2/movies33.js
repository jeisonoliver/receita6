(function() {
var exports = {};
exports.id = "pages/Q2/movies33";
exports.ids = ["pages/Q2/movies33"];
exports.modules = {

/***/ "./pages/Q2/movies33.js":
/*!******************************!*\
  !*** ./pages/Q2/movies33.js ***!
  \******************************/
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
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\HP\\receita6\\pages\\Q2\\movies33.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




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
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(TheForm, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }), __jsx(TheLink, {
    url: state.url,
    handler: onClickHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
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
      lineNumber: 49,
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
      lineNumber: 62,
      columnNumber: 24
    }
  });
  if (!data) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 24
    }
  });
  if (data.error) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 29
    }
  }, "falha na pesquisa");
  if (data.Search === '') return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 38
    }
  }, "carregando...");
  if (data.Response == 'False') return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 42
    }
  }, "Pesquisa N\xE3o encontrada, tente novamente.");
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, data.Search.map(m => __jsx("div", {
    key: m.imdbID,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 39
    }
  }, m.Title, " --- ", m.Year)));
}
function TheForm({
  filtro,
  url,
  acao
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)();
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx("form", {
    onSubmit: handleSubmit(acao),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: "titleSearchString",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, filtro), __jsx("input", _extends({
    id: "titleSearchString"
  }, register("titleSearchString", {
    required: true,
    minLength: 3
  }), {
    type: "text",
    autoComplete: "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  })), __jsx("button", {
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, url === '' ? 'Mostrar' : 'Ocultar'), errors.titleSearchString && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 46
    }
  }, "Insira no m\xEDnimo tr\xEAs caracteres   ")));
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

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-hook-form");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/Q2/movies33.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9RMi9tb3ZpZXMzMy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWhvb2stZm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3clwiIl0sIm5hbWVzIjpbIk1vdmllczMzIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwidXJsIiwidGl0bGVTZWFyY2hTdHJpbmciLCJkYXRhIiwiZXJyb3IiLCJ1c2VTV1IiLCJ1IiwiU2VhcmNoIiwicmVzIiwiZmV0Y2giLCJqc29uIiwib25DbGlja0hhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiVGhlTW92aWVzIiwic2hvdyIsIlJlc3BvbnNlIiwibWFwIiwibSIsImltZGJJRCIsIlRpdGxlIiwiWWVhciIsIlRoZUZvcm0iLCJmaWx0cm8iLCJhY2FvIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJ3YXRjaCIsImZvcm1TdGF0ZSIsImVycm9ycyIsInVzZUZvcm0iLCJyZXF1aXJlZCIsIm1pbkxlbmd0aCIsIlRoZUxpbmsiLCJoYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsR0FBbUI7QUFFOUIsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQywrQ0FBUSxDQUFDO0FBQUNDLE9BQUcsRUFBQyxFQUFMO0FBQVNDLHFCQUFpQixFQUFDO0FBQTNCLEdBQUQsQ0FBbEM7QUFFQSxRQUFNO0FBQUNDLFFBQUQ7QUFBT0M7QUFBUCxNQUFnQkMsMENBQU0sQ0FBQ1AsS0FBSyxDQUFDRyxHQUFQLEVBQVksTUFBT0ssQ0FBUCxJQUFhO0FBRWpELFFBQUksQ0FBQ1IsS0FBSyxDQUFDRyxHQUFQLElBQWMs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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQTBDckMsR0FBRyxLQUFLLEVBQVIsR0FBYSxTQUFiLEdBQXlCLFNBQW5FLE1BRkosQ0FGSjtBQVVILEM7Ozs7Ozs7Ozs7O0FDOUdELG1DOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InBhZ2VzL1EyL21vdmllczMzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzMzMoKXtcclxuXHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHt1cmw6JycsIHRpdGxlU2VhcmNoU3RyaW5nOicnfSlcclxuXHJcbiAgICBjb25zdCB7ZGF0YSwgZXJyb3J9ID0gdXNlU1dSKHN0YXRlLnVybCwgYXN5bmMgKHUpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFzdGF0ZS51cmwgfHwgIXN0YXRlLnRpdGxlU2VhcmNoU3RyaW5nKSByZXR1cm4ge1NlYXJjaDonJ31cclxuXHJcbiAgICAgICAgaWYgKHN0YXRlLnVybCA9PT0gJycgfHwgc3RhdGUudGl0bGVTZWFyY2hTdHJpbmcgPT09JycpIHJldHVybiB7U2VhcmNoOicnfVxyXG5cclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtzdGF0ZS51cmx9Lz9hcGlLZXk9NWM2NTgyOTEmcz0ke3N0YXRlLnRpdGxlU2VhcmNoU3RyaW5nfWApXHJcblxyXG4gICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgICByZXR1cm4ganNvbjtcclxuXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tIYW5kbGVyID0gZSA9PiB7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICBsZXQgcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZVNlYXJjaFN0cmluZycpLnZhbHVlXHJcblxyXG4gICAgICAgIGlmIChzdGF0ZS51cmwgPT09ICcnKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRTdGF0ZSh7dXJsOidodHRwOi8vd3d3Lm9tZGJhcGkuY29tJyx0aXRsZVNlYXJjaFN0cmluZzpzfSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIHNldFN0YXRlKHt1cmw6JycsdGl0bGVTZWFyY2hTdHJpbmc6IHN0YXRlLnRpdGxlU2VhcmNoU3RyaW5nfSlcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgPFRoZUZvcm0vPlxyXG5cclxuICAgICAgICAgICAgPFRoZUxpbmsgdXJsPXtzdGF0ZS51cmx9IGhhbmRsZXI9e29uQ2xpY2tIYW5kbGVyfSAvPlxyXG5cclxuICAgICAgICAgICAgPFRoZU1vdmllcyBkYXRhPXtkYXRhID8gZGF0YToge1NlYXJjaDonJ30gfSBzaG93PXtzdGF0ZS51cmwgIT09ICcnfSAvPlxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUaGVNb3ZpZXMoe2RhdGEsc2hvd30pe1xyXG5cclxuICAgIGlmICghc2hvdykgcmV0dXJuICg8ZGl2PjwvZGl2PilcclxuXHJcbiAgICBpZiAoIWRhdGEpIHJldHVybiAoPGRpdj48L2Rpdj4pXHJcblxyXG4gICAgaWYgKGRhdGEuZXJyb3IpIHJldHVybiAoPGRpdj5mYWxoYSBuYSBwZXNxdWlzYTwvZGl2PilcclxuXHJcbiAgICBpZiAoZGF0YS5TZWFyY2ggPT09ICcnICkgcmV0dXJuICg8ZGl2PmNhcnJlZ2FuZG8uLi48L2Rpdj4pXHJcblxyXG4gICAgaWYoZGF0YS5SZXNwb25zZSA9PSAnRmFsc2UnKSByZXR1cm4gKDxkaXY+UGVzcXVpc2EgTsOjbyBlbmNvbnRyYWRhLCB0ZW50ZSBub3ZhbWVudGUuPC9kaXY+KVxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICB7IGRhdGEuU2VhcmNoLm1hcCggKG0pID0+IDxkaXYga2V5PXttLmltZGJJRH0+e20uVGl0bGV9IC0tLSB7bS5ZZWFyfTwvZGl2PiAgKSB9ICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxuXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFRoZUZvcm0oe2ZpbHRybywgdXJsLCBhY2FvfSl7XHJcblxyXG4gICAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCB3YXRjaCwgZm9ybVN0YXRlOiB7IGVycm9ycyB9IH0gPSB1c2VGb3JtKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGZvcm0gIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoYWNhbyl9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVNlYXJjaFN0cmluZ1wiPntmaWx0cm99PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInRpdGxlU2VhcmNoU3RyaW5nXCIgey4uLnJlZ2lzdGVyKFwidGl0bGVTZWFyY2hTdHJpbmdcIiwgeyByZXF1aXJlZDogdHJ1ZSwgbWluTGVuZ3RoOiAzfSl9IHR5cGU9XCJ0ZXh0XCIgYXV0b0NvbXBsZXRlPVwidHJ1ZVwiLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz57dXJsID09PSAnJyA/ICdNb3N0cmFyJyA6ICdPY3VsdGFyJ308L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMudGl0bGVTZWFyY2hTdHJpbmcgJiYgPHNwYW4+SW5zaXJhIG5vIG3DrW5pbW8gdHLDqnMgY2FyYWN0ZXJlcyAgIDwvc3Bhbj59XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gVGhlTGluayh7dXJsLCBoYW5kbGVyfSl7XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvbW92aWVzMy5qc1wiIG9uQ2xpY2s9e2hhbmRsZXJ9PiB7dXJsID09PSAnJyA/ICdNb3N0cmFyJyA6ICdPY3VsdGFyJ30gPC9hPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcblxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhvb2stZm9ybVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dyXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9