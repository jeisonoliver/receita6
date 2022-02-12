(function() {
var exports = {};
exports.id = "pages/Q3/movies33";
exports.ids = ["pages/Q3/movies33"];
exports.modules = {

/***/ "./pages/Q3/movies33.js":
/*!******************************!*\
  !*** ./pages/Q3/movies33.js ***!
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
var _jsxFileName = "C:\\Users\\HP\\receita6\\pages\\Q3\\movies33.js";

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
    className: "form-search-movie",
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
    placeholder: "T\xEDtulo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  })), errors.titleSearchString && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 46
    }
  }, "Insira no m\xEDnimo tr\xEAs caracteres   "), __jsx("input", _extends({
    id: "yearSearchNumber"
  }, register("yearSearchNumber", {
    required: true,
    minLength: 4,
    maxLength: 4
  }), {
    type: "text",
    autoComplete: "true",
    placeholder: "Ano",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  })), errors.yearSearchNumber && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 45
    }
  }, " Insira um ano v\xE1lido "), __jsx("button", {
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, url === '' ? 'Mostrar' : 'Ocultar')));
}
function TheLink({
  url,
  handler
}) {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "/movies3.js",
    onClick: handler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
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
var __webpack_exports__ = (__webpack_exec__("./pages/Q3/movies33.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9RMy9tb3ZpZXMzMy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWhvb2stZm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3clwiIl0sIm5hbWVzIjpbIk1vdmllczMzIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwidXJsIiwidGl0bGVTZWFyY2hTdHJpbmciLCJkYXRhIiwiZXJyb3IiLCJ1c2VTV1IiLCJ1IiwiU2VhcmNoIiwicmVzIiwiZmV0Y2giLCJqc29uIiwib25DbGlja0hhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiVGhlTW92aWVzIiwic2hvdyIsIlJlc3BvbnNlIiwibWFwIiwibSIsImltZGJJRCIsIlRpdGxlIiwiWWVhciIsIlRoZUZvcm0iLCJmaWx0cm8iLCJhY2FvIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJ3YXRjaCIsImZvcm1TdGF0ZSIsImVycm9ycyIsInVzZUZvcm0iLCJyZXF1aXJlZCIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsInllYXJTZWFyY2hOdW1iZXIiLCJUaGVMaW5rIiwiaGFuZGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULEdBQW1CO0FBRTlCLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsK0NBQVEsQ0FBQztBQUFDQyxPQUFHLEVBQUMsRUFBTDtBQUFTQyxxQkFBaUIsRUFBQztBQUEzQixHQUFELENBQWxDO0FBRUEsUUFBTTtBQUFDQyxRQUFEO0FBQU9DO0FBQVAsTUFBZ0JDLDBDQUFNLENBQUNQLEtBQUssQ0FBQ0csR0FBUCxFQUFZLE1BQU9LLENBQVAsSUFBYTtBQUVqRCxR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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBYkosRUFxQktKLE1BQU0sQ0FBQ0ssZ0JBQVAsSUFBMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FyQmhDLEVBc0JJO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1QnJDLEdBQUcsS0FBSyxFQUFSLEdBQWEsU0FBYixHQUF5QixTQUFoRCxDQXRCSixDQUZKLENBREo7QUE4Qkg7QUFDTSxTQUFTc0MsT0FBVCxDQUFpQjtBQUFDdEMsS0FBRDtBQUFNdUM7QUFBTixDQUFqQixFQUFnQztBQUVuQyxTQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSTtBQUFHLFFBQUksRUFBQyxhQUFSO0FBQXNCLFdBQU8sRUFBRUEsT0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUEwQ3ZDLEdBQUcsS0FBSyxFQUFSLEdBQWEsU0FBYixHQUF5QixTQUFuRSxNQUZKLENBRko7QUFVSCxDOzs7Ozs7Ozs7OztBQ2pJRCxtQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJwYWdlcy9RMy9tb3ZpZXMzMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllczMzKCl7XHJcblxyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7dXJsOicnLCB0aXRsZVNlYXJjaFN0cmluZzonJ30pXHJcblxyXG4gICAgY29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUihzdGF0ZS51cmwsIGFzeW5jICh1KSA9PiB7XHJcblxyXG4gICAgICAgIGlmICghc3RhdGUudXJsIHx8ICFzdGF0ZS50aXRsZVNlYXJjaFN0cmluZykgcmV0dXJuIHtTZWFyY2g6Jyd9XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZS51cmwgPT09ICcnIHx8IHN0YXRlLnRpdGxlU2VhcmNoU3RyaW5nID09PScnKSByZXR1cm4ge1NlYXJjaDonJ31cclxuXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7c3RhdGUudXJsfS8/YXBpS2V5PTVjNjU4MjkxJnM9JHtzdGF0ZS50aXRsZVNlYXJjaFN0cmluZ31gKVxyXG5cclxuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGpzb247XHJcblxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBvbkNsaWNrSGFuZGxlciA9IGUgPT4ge1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgbGV0IHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVTZWFyY2hTdHJpbmcnKS52YWx1ZVxyXG5cclxuICAgICAgICBpZiAoc3RhdGUudXJsID09PSAnJykge1xyXG5cclxuICAgICAgICAgICAgc2V0U3RhdGUoe3VybDonaHR0cDovL3d3dy5vbWRiYXBpLmNvbScsdGl0bGVTZWFyY2hTdHJpbmc6c30pXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSBzZXRTdGF0ZSh7dXJsOicnLHRpdGxlU2VhcmNoU3RyaW5nOiBzdGF0ZS50aXRsZVNlYXJjaFN0cmluZ30pXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgIDxUaGVGb3JtLz5cclxuXHJcbiAgICAgICAgICAgIDxUaGVMaW5rIHVybD17c3RhdGUudXJsfSBoYW5kbGVyPXtvbkNsaWNrSGFuZGxlcn0gLz5cclxuXHJcbiAgICAgICAgICAgIDxUaGVNb3ZpZXMgZGF0YT17ZGF0YSA/IGRhdGE6IHtTZWFyY2g6Jyd9IH0gc2hvdz17c3RhdGUudXJsICE9PSAnJ30gLz5cclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGhlTW92aWVzKHtkYXRhLHNob3d9KXtcclxuXHJcbiAgICBpZiAoIXNob3cpIHJldHVybiAoPGRpdj48L2Rpdj4pXHJcblxyXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gKDxkaXY+PC9kaXY+KVxyXG5cclxuICAgIGlmIChkYXRhLmVycm9yKSByZXR1cm4gKDxkaXY+ZmFsaGEgbmEgcGVzcXVpc2E8L2Rpdj4pXHJcblxyXG4gICAgaWYgKGRhdGEuU2VhcmNoID09PSAnJyApIHJldHVybiAoPGRpdj5jYXJyZWdhbmRvLi4uPC9kaXY+KVxyXG5cclxuICAgIGlmKGRhdGEuUmVzcG9uc2UgPT0gJ0ZhbHNlJykgcmV0dXJuICg8ZGl2PlBlc3F1aXNhIE7Do28gZW5jb250cmFkYSwgdGVudGUgbm92YW1lbnRlLjwvZGl2PilcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgeyBkYXRhLlNlYXJjaC5tYXAoIChtKSA9PiA8ZGl2IGtleT17bS5pbWRiSUR9PnttLlRpdGxlfSAtLS0ge20uWWVhcn08L2Rpdj4gICkgfSAgICAgICAgICAgIFxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcblxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBUaGVGb3JtKHtmaWx0cm8sIHVybCwgYWNhb30pe1xyXG5cclxuICAgIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgd2F0Y2gsIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSB9ID0gdXNlRm9ybSgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nZm9ybS1zZWFyY2gtbW92aWUnIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoYWNhbyl9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVNlYXJjaFN0cmluZ1wiPntmaWx0cm99PC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0aXRsZVNlYXJjaFN0cmluZ1wiIFxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcInRpdGxlU2VhcmNoU3RyaW5nXCIsIHsgcmVxdWlyZWQ6IHRydWUsIG1pbkxlbmd0aDogM30pfSBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdUw610dWxvJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLnRpdGxlU2VhcmNoU3RyaW5nICYmIDxzcGFuPkluc2lyYSBubyBtw61uaW1vIHRyw6pzIGNhcmFjdGVyZXMgICA8L3NwYW4+fVxyXG5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInllYXJTZWFyY2hOdW1iZXJcIiBcclxuICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJ5ZWFyU2VhcmNoTnVtYmVyXCIsIHsgcmVxdWlyZWQ6IHRydWUsIG1pbkxlbmd0aDogNCwgbWF4TGVuZ3RoOiA0IH0pfSBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdBbm8nXHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMueWVhclNlYXJjaE51bWJlciAmJiA8c3Bhbj4gSW5zaXJhIHVtIGFubyB2w6FsaWRvIDwvc3Bhbj4gfVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPnt1cmwgPT09ICcnID8gJ01vc3RyYXInIDogJ09jdWx0YXInfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gVGhlTGluayh7dXJsLCBoYW5kbGVyfSl7XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvbW92aWVzMy5qc1wiIG9uQ2xpY2s9e2hhbmRsZXJ9PiB7dXJsID09PSAnJyA/ICdNb3N0cmFyJyA6ICdPY3VsdGFyJ30gPC9hPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcblxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhvb2stZm9ybVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dyXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9