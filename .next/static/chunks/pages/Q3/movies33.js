(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/Q3/movies33"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./pages/Q3/movies33.js":
/*!******************************!*\
  !*** ./pages/Q3/movies33.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Movies33; },
/* harmony export */   "TheMovies": function() { return /* binding */ TheMovies; },
/* harmony export */   "TheForm": function() { return /* binding */ TheForm; },
/* harmony export */   "TheLink": function() { return /* binding */ TheLink; }
/* harmony export */ });
/* harmony import */ var C_Users_HP_receita6_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var C_Users_HP_receita6_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_HP_receita6_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_HP_receita6_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_HP_receita6_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ "./node_modules/swr/dist/index.mjs");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\HP\\receita6\\pages\\Q3\\movies33.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();


var __jsx = (react__WEBPACK_IMPORTED_MODULE_3___default().createElement);



function Movies33() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    url: '',
    titleSearchString: ''
  }),
      state = _useState[0],
      setState = _useState[1];

  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_4__.default)(state.url, /*#__PURE__*/function () {
    var _ref = (0,C_Users_HP_receita6_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_HP_receita6_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(u) {
      var res, json;
      return C_Users_HP_receita6_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!state.url || !state.titleSearchString)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", {
                Search: ''
              });

            case 2:
              if (!(state.url === '' || state.titleSearchString === '')) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", {
                Search: ''
              });

            case 4:
              _context.next = 6;
              return fetch("".concat(state.url, "/?apiKey=5c658291&s=").concat(state.titleSearchString));

            case 6:
              res = _context.sent;
              _context.next = 9;
              return res.json();

            case 9:
              json = _context.sent;
              return _context.abrupt("return", json);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }()),
      data = _useSWR.data,
      error = _useSWR.error;

  var onClickHandler = function onClickHandler(e) {
    e.preventDefault();
    var s = document.getElementById('titleSearchString').value;

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

_s(Movies33, "P5xu9tIXAXGd1K4bXMaWrLHh4lM=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_4__.default];
});

_c = Movies33;
function TheMovies(_ref2) {
  var _this = this;

  var data = _ref2.data,
      show = _ref2.show;
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
  }, data.Search.map(function (m) {
    return __jsx("div", {
      key: m.imdbID,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 39
      }
    }, m.Title, " --- ", m.Year);
  }));
}
_c2 = TheMovies;
function TheForm(_ref3) {
  _s2();

  var filtro = _ref3.filtro,
      url = _ref3.url,
      acao = _ref3.acao;

  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      watch = _useForm.watch,
      errors = _useForm.formState.errors;

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
  }, filtro), __jsx("input", (0,C_Users_HP_receita6_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
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
  }, "Insira no m\xEDnimo tr\xEAs caracteres   "), __jsx("input", (0,C_Users_HP_receita6_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
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

_s2(TheForm, "77WzwRY2adCYNFA0cLnNubMUW6o=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm];
});

_c3 = TheForm;
function TheLink(_ref4) {
  var url = _ref4.url,
      handler = _ref4.handler;
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
_c4 = TheLink;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Movies33");
$RefreshReg$(_c2, "TheMovies");
$RefreshReg$(_c3, "TheForm");
$RefreshReg$(_c4, "TheLink");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FQ3%2Fmovies33&absolutePagePath=C%3A%5CUsers%5CHP%5Creceita6%5Cpages%5CQ3%5Cmovies33.js!":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FQ3%2Fmovies33&absolutePagePath=C%3A%5CUsers%5CHP%5Creceita6%5Cpages%5CQ3%5Cmovies33.js! ***!
  \**********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/Q3/movies33",
      function () {
        return __webpack_require__(/*! ./pages/Q3/movies33.js */ "./pages/Q3/movies33.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/react-hook-form/dist/index.esm.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/react-hook-form/dist/index.esm.mjs ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controller": function() { return /* binding */ Controller; },
/* harmony export */   "FormProvider": function() { return /* binding */ FormProvider; },
/* harmony export */   "appendErrors": function() { return /* binding */ appendErrors; },
/* harmony export */   "get": function() { return /* binding */ get; },
/* harmony export */   "set": function() { return /* binding */ set; },
/* harmony export */   "useController": function() { return /* binding */ useController; },
/* harmony export */   "useFieldArray": function() { return /* binding */ useFieldArray; },
/* harmony export */   "useForm": function() { return /* binding */ useForm; },
/* harmony export */   "useFormContext": function() { return /* binding */ useFormContext; },
/* harmony export */   "useFormState": function() { return /* binding */ useFormState; },
/* harmony export */   "useWatch": function() { return /* binding */ useWatch; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var isCheckBoxInput = (element) => element.type === 'checkbox';

var isDateObject = (value) => value instanceof Date;

var isNullOrUndefined = (value) => value == null;

const isObjectType = (value) => typeof value === 'object';
var isObject = (value) => !isNullOrUndefined(value) &&
    !Array.isArray(value) &&
    isObjectType(value) &&
    !isDateObject(value);

var getEventValue = (event) => isObject(event) && event.target
    ? isCheckBoxInput(event.target)
        ? event.target.checked
        : event.target.value
    : event;

var getNodeParentName = (name) => name.substring(0, name.search(/.\d/)) || name;

var isNameInFieldArray = (names, name) => [...names].some((current) => getNodeParentName(name) === current);

var compact = (value) => value.filter(Boolean);

var isUndefined = (val) => val === undefined;

var get = (obj, path, defaultValue) => {
    if (!path || !isObject(obj)) {
        return defaultValue;
    }
    const result = compact(path.split(/[,[\].]+?/)).reduce((result, key) => isNullOrUndefined(result) ? result : result[key], obj);
    return isUndefined(result) || result === obj
        ? isUndefined(obj[path])
            ? defaultValue
            : obj[path]
        : result;
};

const EVENTS = {
    BLUR: 'blur',
    FOCUS_OUT: 'focusout',
    CHANGE: 'change',
};
const VALIDATION_MODE = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
};
const INPUT_VALIDATION_RULES = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
};

var omit = (source, key) => {
    const copy = Object.assign({}, source);
    delete copy[key];
    return copy;
};

const HookFormContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
/**
 * This custom hook allows you to access the form context. useFormContext is intended to be used in deeply nested structures, where it would become inconvenient to pass the context as a prop. To be used with {@link FormProvider}.
 *
 * @remarks
 * [API](https://react-hook-form.com/api/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @returns return all useForm methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */
const useFormContext = () => react__WEBPACK_IMPORTED_MODULE_0__.useContext(HookFormContext);
/**
 * A provider component that propagates the `useForm` methods to all children components via [React Context](https://reactjs.org/docs/context.html) API. To be used with {@link useFormContext}.
 *
 * @remarks
 * [API](https://react-hook-form.com/api/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @param props - all useFrom methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */
const FormProvider = (props) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(HookFormContext.Provider, { value: omit(props, 'children') }, props.children));

var getProxyFormState = (formState, _proxyFormState, localProxyFormState, isRoot = true) => {
    const result = {};
    for (const key in formState) {
        Object.defineProperty(result, key, {
            get: () => {
                const _key = key;
                if (_proxyFormState[_key] !== VALIDATION_MODE.all) {
                    _proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
                }
                localProxyFormState && (localProxyFormState[_key] = true);
                return formState[_key];
            },
        });
    }
    return result;
};

var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;

var shouldRenderFormState = (formStateData, _proxyFormState, isRoot) => {
    const formState = omit(formStateData, 'name');
    return (isEmptyObject(formState) ||
        Object.keys(formState).length >= Object.keys(_proxyFormState).length ||
        Object.keys(formState).find((key) => _proxyFormState[key] ===
            (!isRoot || VALIDATION_MODE.all)));
};

var convertToArrayPayload = (value) => (Array.isArray(value) ? value : [value]);

var shouldSubscribeByName = (name, signalName, exact) => exact && signalName
    ? name === signalName
    : !name ||
        !signalName ||
        name === signalName ||
        convertToArrayPayload(name).some((currentName) => currentName &&
            (currentName.startsWith(signalName) ||
                signalName.startsWith(currentName)));

function useSubscribe(props) {
    const _props = react__WEBPACK_IMPORTED_MODULE_0__.useRef(props);
    _props.current = props;
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        const tearDown = (subscription) => {
            if (subscription) {
                subscription.unsubscribe();
            }
        };
        const subscription = !props.disabled &&
            _props.current.subject.subscribe({
                next: _props.current.callback,
            });
        return () => tearDown(subscription);
    }, [props.disabled]);
}

/**
 * This custom hook allows you to subscribe to each form state, and isolate the re-render at the custom hook level. It has its scope in terms of form state subscription, so it would not affect other useFormState and useForm. Using this hook can reduce the re-render impact on large and complex form application.
 *
 * @remarks
 * [API](https://react-hook-form.com/api/useformstate) • [Demo](https://codesandbox.io/s/useformstate-75xly)
 *
 * @param props - include options on specify fields to subscribe. {@link UseFormStateReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, control } = useForm({
 *     defaultValues: {
 *     firstName: "firstName"
 *   }});
 *   const { dirtyFields } = useFormState({
 *     control
 *   });
 *   const onSubmit = (data) => console.log(data);
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input {...register("firstName")} placeholder="First Name" />
 *       {dirtyFields.firstName && <p>Field is dirty.</p>}
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */
function useFormState(props) {
    const methods = useFormContext();
    const { control = methods.control, disabled, name, exact } = props || {};
    const [formState, updateFormState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(control._formState);
    const _localProxyFormState = react__WEBPACK_IMPORTED_MODULE_0__.useRef({
        isDirty: false,
        dirtyFields: false,
        touchedFields: false,
        isValidating: false,
        isValid: false,
        errors: false,
    });
    const _name = react__WEBPACK_IMPORTED_MODULE_0__.useRef(name);
    const _mounted = react__WEBPACK_IMPORTED_MODULE_0__.useRef(true);
    _name.current = name;
    const callback = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((value) => _mounted.current &&
        shouldSubscribeByName(_name.current, value.name, exact) &&
        shouldRenderFormState(value, _localProxyFormState.current) &&
        updateFormState(Object.assign(Object.assign({}, control._formState), value)), [control, exact]);
    useSubscribe({
        disabled,
        callback,
        subject: control._subjects.state,
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => () => {
        _mounted.current = false;
    }, []);
    return getProxyFormState(formState, control._proxyFormState, _localProxyFormState.current, false);
}

var isString = (value) => typeof value === 'string';

var generateWatchOutput = (names, _names, formValues, isGlobal) => {
    const isArray = Array.isArray(names);
    if (isString(names)) {
        isGlobal && _names.watch.add(names);
        return get(formValues, names);
    }
    if (isArray) {
        return names.map((fieldName) => (isGlobal && _names.watch.add(fieldName),
            get(formValues, fieldName)));
    }
    isGlobal && (_names.watchAll = true);
    return formValues;
};

var isFunction = (value) => typeof value === 'function';

var objectHasFunction = (data) => {
    for (const key in data) {
        if (isFunction(data[key])) {
            return true;
        }
    }
    return false;
};

/**
 * Custom hook to subscribe to field change and isolate re-rendering at the component level.
 *
 * @remarks
 *
 * [API](https://react-hook-form.com/api/usewatch) • [Demo](https://codesandbox.io/s/react-hook-form-v7-ts-usewatch-h9i5e)
 *
 * @example
 * ```tsx
 * const { watch } = useForm();
 * const values = useWatch({
 *   name: "fieldName"
 *   control,
 * })
 * ```
 */
function useWatch(props) {
    const methods = useFormContext();
    const { control = methods.control, name, defaultValue, disabled, exact, } = props || {};
    const _name = react__WEBPACK_IMPORTED_MODULE_0__.useRef(name);
    _name.current = name;
    const callback = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((formState) => {
        if (shouldSubscribeByName(_name.current, formState.name, exact)) {
            const fieldValues = generateWatchOutput(_name.current, control._names, formState.values || control._formValues);
            updateValue(isUndefined(_name.current) ||
                (isObject(fieldValues) && !objectHasFunction(fieldValues))
                ? Object.assign({}, fieldValues) : Array.isArray(fieldValues)
                ? [...fieldValues]
                : isUndefined(fieldValues)
                    ? defaultValue
                    : fieldValues);
        }
    }, [control, exact, defaultValue]);
    useSubscribe({
        disabled,
        subject: control._subjects.watch,
        callback,
    });
    const [value, updateValue] = react__WEBPACK_IMPORTED_MODULE_0__.useState(isUndefined(defaultValue)
        ? control._getWatch(name)
        : defaultValue);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        control._removeUnmounted();
    });
    return value;
}

/**
 * Custom hook to work with controlled component, this function provide you with both form and field level state. Re-render is isolated at the hook level.
 *
 * @remarks
 * [API](https://react-hook-form.com/api/usecontroller) • [Demo](https://codesandbox.io/s/usecontroller-0o8px)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns field properties, field and form state. {@link UseControllerReturn}
 *
 * @example
 * ```tsx
 * function Input(props) {
 *   const { field, fieldState, formState } = useController(props);
 *   return (
 *     <div>
 *       <input {...field} placeholder={props.name} />
 *       <p>{fieldState.isTouched && "Touched"}</p>
 *       <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *     </div>
 *   );
 * }
 * ```
 */
function useController(props) {
    const methods = useFormContext();
    const { name, control = methods.control, shouldUnregister } = props;
    const isArrayField = isNameInFieldArray(control._names.array, name);
    const value = useWatch({
        control,
        name,
        defaultValue: get(control._formValues, name, get(control._defaultValues, name, props.defaultValue)),
        exact: true,
    });
    const formState = useFormState({
        control,
        name,
    });
    const _registerProps = react__WEBPACK_IMPORTED_MODULE_0__.useRef(control.register(name, Object.assign(Object.assign({}, props.rules), { value })));
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        const updateMounted = (name, value) => {
            const field = get(control._fields, name);
            if (field) {
                field._f.mount = value;
            }
        };
        updateMounted(name, true);
        return () => {
            const _shouldUnregisterField = control._options.shouldUnregister || shouldUnregister;
            (isArrayField
                ? _shouldUnregisterField && !control._stateFlags.action
                : _shouldUnregisterField)
                ? control.unregister(name)
                : updateMounted(name, false);
        };
    }, [name, control, isArrayField, shouldUnregister]);
    return {
        field: {
            name,
            value,
            onChange: react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
                _registerProps.current.onChange({
                    target: {
                        value: getEventValue(event),
                        name: name,
                    },
                    type: EVENTS.CHANGE,
                });
            }, [name]),
            onBlur: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
                _registerProps.current.onBlur({
                    target: {
                        value: get(control._formValues, name),
                        name: name,
                    },
                    type: EVENTS.BLUR,
                });
            }, [name, control]),
            ref: react__WEBPACK_IMPORTED_MODULE_0__.useCallback((elm) => {
                const field = get(control._fields, name);
                if (elm && field && elm.focus) {
                    field._f.ref = {
                        focus: () => elm.focus(),
                        setCustomValidity: (message) => elm.setCustomValidity(message),
                        reportValidity: () => elm.reportValidity(),
                    };
                }
            }, [name, control._fields]),
        },
        formState,
        fieldState: control.getFieldState(name, formState),
    };
}

/**
 * Component based on `useController` hook to work with controlled component.
 *
 * @remarks
 * [API](https://react-hook-form.com/api/usecontroller/controller) • [Demo](https://codesandbox.io/s/react-hook-form-v6-controller-ts-jwyzw) • [Video](https://www.youtube.com/watch?v=N2UNk_UCVyA)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns provide field handler functions, field and form state.
 *
 * @example
 * ```tsx
 * function App() {
 *   const { control } = useForm<FormValues>({
 *     defaultValues: {
 *       test: ""
 *     }
 *   });
 *
 *   return (
 *     <form>
 *       <Controller
 *         control={control}
 *         name="test"
 *         render={({ field: { onChange, onBlur, value, ref }, formState, fieldState }) => (
 *           <>
 *             <input
 *               onChange={onChange} // send value to hook form
 *               onBlur={onBlur} // notify when input is touched
 *               value={value} // return updated value
 *               ref={ref} // set ref for focus management
 *             />
 *             <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *             <p>{fieldState.isTouched ? "touched" : ""}</p>
 *           </>
 *         )}
 *       />
 *     </form>
 *   );
 * }
 * ```
 */
const Controller = (props) => props.render(useController(props));

var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria
    ? Object.assign(Object.assign({}, errors[name]), { types: Object.assign(Object.assign({}, (errors[name] && errors[name].types ? errors[name].types : {})), { [type]: message || true }) }) : {};

var isKey = (value) => /^\w*$/.test(value);

var stringToPath = (input) => compact(input.replace(/["|']|\]/g, '').split(/\.|\[/));

function set(object, path, value) {
    let index = -1;
    const tempPath = isKey(path) ? [path] : stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while (++index < length) {
        const key = tempPath[index];
        let newValue = value;
        if (index !== lastIndex) {
            const objValue = object[key];
            newValue =
                isObject(objValue) || Array.isArray(objValue)
                    ? objValue
                    : !isNaN(+tempPath[index + 1])
                        ? []
                        : {};
        }
        object[key] = newValue;
        object = object[key];
    }
    return object;
}

const focusFieldBy = (fields, callback, fieldsNames) => {
    for (const key of fieldsNames || Object.keys(fields)) {
        const field = get(fields, key);
        if (field) {
            const _f = field._f;
            const current = omit(field, '_f');
            if (_f && callback(_f.name)) {
                if (_f.ref.focus && isUndefined(_f.ref.focus())) {
                    break;
                }
                else if (_f.refs) {
                    _f.refs[0].focus();
                    break;
                }
            }
            else if (isObject(current)) {
                focusFieldBy(current, callback);
            }
        }
    }
};

var generateId = () => {
    const d = typeof performance === 'undefined' ? Date.now() : performance.now() * 1000;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16 + d) % 16 | 0;
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
};

var getFocusFieldName = (name, index, options = {}) => options.shouldFocus || isUndefined(options.shouldFocus)
    ? options.focusName ||
        `${name}.${isUndefined(options.focusIndex) ? index : options.focusIndex}.`
    : '';

var isWatched = (name, _names, isBlurEvent) => !isBlurEvent &&
    (_names.watchAll ||
        _names.watch.has(name) ||
        [..._names.watch].some((watchName) => name.startsWith(watchName) &&
            /^\.\w+/.test(name.slice(watchName.length))));

function append(data, value) {
    return [...data, ...convertToArrayPayload(value)];
}

function cloneObject(data) {
    let copy;
    const isArray = Array.isArray(data);
    if (data instanceof Date) {
        copy = new Date(data);
    }
    else if (data instanceof Set) {
        copy = new Set(data);
    }
    else if (isArray || isObject(data)) {
        copy = isArray ? [] : {};
        for (const key in data) {
            if (isFunction(data[key])) {
                copy = data;
                break;
            }
            copy[key] = cloneObject(data[key]);
        }
    }
    else {
        return data;
    }
    return copy;
}

var fillEmptyArray = (value) => Array.isArray(value) ? value.map(() => undefined) : undefined;

function insert(data, index, value) {
    return [
        ...data.slice(0, index),
        ...convertToArrayPayload(value),
        ...data.slice(index),
    ];
}

var moveArrayAt = (data, from, to) => {
    if (!Array.isArray(data)) {
        return [];
    }
    if (isUndefined(data[to])) {
        data[to] = undefined;
    }
    data.splice(to, 0, data.splice(from, 1)[0]);
    return data;
};

function prepend(data, value) {
    return [...convertToArrayPayload(value), ...convertToArrayPayload(data)];
}

function removeAtIndexes(data, indexes) {
    let i = 0;
    const temp = [...data];
    for (const index of indexes) {
        temp.splice(index - i, 1);
        i++;
    }
    return compact(temp).length ? temp : [];
}
var removeArrayAt = (data, index) => isUndefined(index)
    ? []
    : removeAtIndexes(data, convertToArrayPayload(index).sort((a, b) => a - b));

var swapArrayAt = (data, indexA, indexB) => {
    data[indexA] = [data[indexB], (data[indexB] = data[indexA])][0];
};

var updateAt = (fieldValues, index, value) => {
    fieldValues[index] = value;
    return fieldValues;
};

/**
 * A custom hook that exposes convenient methods to perform operations with a list of dynamic inputs that need to be appended, updated, removed etc.
 *
 * @remarks
 * [API](https://react-hook-form.com/api/usefieldarray) • [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn)
 *
 * @param props - useFieldArray props
 *
 * @returns methods - functions to manipulate with the Field Arrays (dynamic inputs) {@link UseFieldArrayReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, control, handleSubmit, reset, trigger, setError } = useForm({
 *     defaultValues: {
 *       test: []
 *     }
 *   });
 *   const { fields, append } = useFieldArray({
 *     control,
 *     name: "test"
 *   });
 *
 *   return (
 *     <form onSubmit={handleSubmit(data => console.log(data))}>
 *       {fields.map((item, index) => (
 *          <input key={item.id} {...register(`test.${index}.firstName`)}  />
 *       ))}
 *       <button type="button" onClick={() => append({ firstName: "bill" })}>
 *         append
 *       </button>
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */
function useFieldArray(props) {
    const methods = useFormContext();
    const { control = methods.control, name, keyName = 'id', shouldUnregister, } = props;
    const [fields, setFields] = react__WEBPACK_IMPORTED_MODULE_0__.useState(control._getFieldArray(name));
    const ids = react__WEBPACK_IMPORTED_MODULE_0__.useRef(control._getFieldArray(name).map(generateId));
    const _fieldIds = react__WEBPACK_IMPORTED_MODULE_0__.useRef(fields);
    const _name = react__WEBPACK_IMPORTED_MODULE_0__.useRef(name);
    const _actioned = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    _name.current = name;
    _fieldIds.current = fields;
    control._names.array.add(name);
    const callback = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(({ values, name: fieldArrayName }) => {
        if (fieldArrayName === _name.current || !fieldArrayName) {
            const fieldValues = get(values, _name.current, []);
            setFields(fieldValues);
            ids.current = fieldValues.map(generateId);
        }
    }, []);
    useSubscribe({
        callback,
        subject: control._subjects.array,
    });
    const updateValues = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((updatedFieldArrayValues) => {
        _actioned.current = true;
        control._updateFieldArray(name, updatedFieldArrayValues);
    }, [control, name]);
    const append$1 = (value, options) => {
        const appendValue = convertToArrayPayload(cloneObject(value));
        const updatedFieldArrayValues = append(control._getFieldArray(name), appendValue);
        control._names.focus = getFocusFieldName(name, updatedFieldArrayValues.length - 1, options);
        ids.current = append(ids.current, appendValue.map(generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, append, {
            argA: fillEmptyArray(value),
        });
    };
    const prepend$1 = (value, options) => {
        const prependValue = convertToArrayPayload(cloneObject(value));
        const updatedFieldArrayValues = prepend(control._getFieldArray(name), prependValue);
        control._names.focus = getFocusFieldName(name, 0, options);
        ids.current = prepend(ids.current, prependValue.map(generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, prepend, {
            argA: fillEmptyArray(value),
        });
    };
    const remove = (index) => {
        const updatedFieldArrayValues = removeArrayAt(control._getFieldArray(name), index);
        ids.current = removeArrayAt(ids.current, index);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, removeArrayAt, {
            argA: index,
        });
    };
    const insert$1 = (index, value, options) => {
        const insertValue = convertToArrayPayload(cloneObject(value));
        const updatedFieldArrayValues = insert(control._getFieldArray(name), index, insertValue);
        control._names.focus = getFocusFieldName(name, index, options);
        ids.current = insert(ids.current, index, insertValue.map(generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, insert, {
            argA: index,
            argB: fillEmptyArray(value),
        });
    };
    const swap = (indexA, indexB) => {
        const updatedFieldArrayValues = control._getFieldArray(name);
        swapArrayAt(updatedFieldArrayValues, indexA, indexB);
        swapArrayAt(ids.current, indexA, indexB);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, swapArrayAt, {
            argA: indexA,
            argB: indexB,
        }, false);
    };
    const move = (from, to) => {
        const updatedFieldArrayValues = control._getFieldArray(name);
        moveArrayAt(updatedFieldArrayValues, from, to);
        moveArrayAt(ids.current, from, to);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, moveArrayAt, {
            argA: from,
            argB: to,
        }, false);
    };
    const update = (index, value) => {
        const updatedFieldArrayValues = updateAt(control._getFieldArray(name), index, value);
        ids.current = [...updatedFieldArrayValues].map((item, i) => !item || i === index ? generateId() : ids.current[i]);
        updateValues(updatedFieldArrayValues);
        setFields([...updatedFieldArrayValues]);
        control._updateFieldArray(name, updatedFieldArrayValues, updateAt, {
            argA: index,
            argB: value,
        }, true, false);
    };
    const replace = (value) => {
        const updatedFieldArrayValues = convertToArrayPayload(cloneObject(value));
        ids.current = updatedFieldArrayValues.map(generateId);
        updateValues([...updatedFieldArrayValues]);
        setFields([...updatedFieldArrayValues]);
        control._updateFieldArray(name, [...updatedFieldArrayValues], (data) => data, {}, true, false);
    };
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        control._stateFlags.action = false;
        isWatched(name, control._names) && control._subjects.state.next({});
        if (_actioned.current) {
            control._executeSchema([name]).then((result) => {
                const error = get(result.errors, name);
                if (error && error.type && !get(control._formState.errors, name)) {
                    set(control._formState.errors, name, error);
                    control._subjects.state.next({
                        errors: control._formState.errors,
                    });
                }
            });
        }
        control._subjects.watch.next({
            name,
            values: control._formValues,
        });
        control._names.focus &&
            focusFieldBy(control._fields, (key) => key.startsWith(control._names.focus));
        control._names.focus = '';
        control._proxyFormState.isValid && control._updateValid();
    }, [fields, name, control]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        !get(control._formValues, name) && control._updateFieldArray(name);
        return () => {
            (control._options.shouldUnregister || shouldUnregister) &&
                control.unregister(name);
        };
    }, [name, control, keyName, shouldUnregister]);
    return {
        swap: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(swap, [updateValues, name, control]),
        move: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(move, [updateValues, name, control]),
        prepend: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(prepend$1, [updateValues, name, control]),
        append: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(append$1, [updateValues, name, control]),
        remove: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(remove, [updateValues, name, control]),
        insert: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(insert$1, [updateValues, name, control]),
        update: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(update, [updateValues, name, control]),
        replace: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(replace, [updateValues, name, control]),
        fields: react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => fields.map((field, index) => (Object.assign(Object.assign({}, field), { [keyName]: ids.current[index] || generateId() }))), [fields, keyName]),
    };
}

function createSubject() {
    let _observers = [];
    const next = (value) => {
        for (const observer of _observers) {
            observer.next(value);
        }
    };
    const subscribe = (observer) => {
        _observers.push(observer);
        return {
            unsubscribe: () => {
                _observers = _observers.filter((o) => o !== observer);
            },
        };
    };
    const unsubscribe = () => {
        _observers = [];
    };
    return {
        get observers() {
            return _observers;
        },
        next,
        subscribe,
        unsubscribe,
    };
}

var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);

function deepEqual(object1, object2) {
    if (isPrimitive(object1) || isPrimitive(object2)) {
        return object1 === object2;
    }
    if (isDateObject(object1) && isDateObject(object2)) {
        return object1.getTime() === object2.getTime();
    }
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (const key of keys1) {
        const val1 = object1[key];
        if (!keys2.includes(key)) {
            return false;
        }
        if (key !== 'ref') {
            const val2 = object2[key];
            if ((isDateObject(val1) && isDateObject(val2)) ||
                (isObject(val1) && isObject(val2)) ||
                (Array.isArray(val1) && Array.isArray(val2))
                ? !deepEqual(val1, val2)
                : val1 !== val2) {
                return false;
            }
        }
    }
    return true;
}

var getValidationModes = (mode) => ({
    isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
    isOnBlur: mode === VALIDATION_MODE.onBlur,
    isOnChange: mode === VALIDATION_MODE.onChange,
    isOnAll: mode === VALIDATION_MODE.all,
    isOnTouch: mode === VALIDATION_MODE.onTouched,
});

var isBoolean = (value) => typeof value === 'boolean';

var isFileInput = (element) => element.type === 'file';

var isHTMLElement = (value) => value instanceof HTMLElement;

var isMultipleSelect = (element) => element.type === `select-multiple`;

var isRadioInput = (element) => element.type === 'radio';

var isRadioOrCheckbox = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);

var isWeb = typeof window !== 'undefined' &&
    typeof window.HTMLElement !== 'undefined' &&
    typeof document !== 'undefined';

var live = (ref) => isHTMLElement(ref) && ref.isConnected;

function baseGet(object, updatePath) {
    const length = updatePath.slice(0, -1).length;
    let index = 0;
    while (index < length) {
        object = isUndefined(object) ? index++ : object[updatePath[index++]];
    }
    return object;
}
function unset(object, path) {
    const updatePath = isKey(path) ? [path] : stringToPath(path);
    const childObject = updatePath.length == 1 ? object : baseGet(object, updatePath);
    const key = updatePath[updatePath.length - 1];
    let previousObjRef;
    if (childObject) {
        delete childObject[key];
    }
    for (let k = 0; k < updatePath.slice(0, -1).length; k++) {
        let index = -1;
        let objectRef;
        const currentPaths = updatePath.slice(0, -(k + 1));
        const currentPathsLength = currentPaths.length - 1;
        if (k > 0) {
            previousObjRef = object;
        }
        while (++index < currentPaths.length) {
            const item = currentPaths[index];
            objectRef = objectRef ? objectRef[item] : object[item];
            if (currentPathsLength === index &&
                ((isObject(objectRef) && isEmptyObject(objectRef)) ||
                    (Array.isArray(objectRef) &&
                        !objectRef.filter((data) => (isObject(data) && !isEmptyObject(data)) || isBoolean(data)).length))) {
                previousObjRef ? delete previousObjRef[item] : delete object[item];
            }
            previousObjRef = objectRef;
        }
    }
    return object;
}

function markFieldsDirty(data, fields = {}) {
    const isParentNodeArray = Array.isArray(data);
    if (isObject(data) || isParentNodeArray) {
        for (const key in data) {
            if (Array.isArray(data[key]) ||
                (isObject(data[key]) && !objectHasFunction(data[key]))) {
                fields[key] = Array.isArray(data[key]) ? [] : {};
                markFieldsDirty(data[key], fields[key]);
            }
            else if (!isNullOrUndefined(data[key])) {
                fields[key] = true;
            }
        }
    }
    return fields;
}
function getDirtyFieldsFromDefaultValues(data, formValues, dirtyFieldsFromValues) {
    const isParentNodeArray = Array.isArray(data);
    if (isObject(data) || isParentNodeArray) {
        for (const key in data) {
            if (Array.isArray(data[key]) ||
                (isObject(data[key]) && !objectHasFunction(data[key]))) {
                if (isUndefined(formValues) ||
                    isPrimitive(dirtyFieldsFromValues[key])) {
                    dirtyFieldsFromValues[key] = Array.isArray(data[key])
                        ? markFieldsDirty(data[key], [])
                        : Object.assign({}, markFieldsDirty(data[key]));
                }
                else {
                    getDirtyFieldsFromDefaultValues(data[key], isNullOrUndefined(formValues) ? {} : formValues[key], dirtyFieldsFromValues[key]);
                }
            }
            else {
                dirtyFieldsFromValues[key] = !deepEqual(data[key], formValues[key]);
            }
        }
    }
    return dirtyFieldsFromValues;
}
var getDirtyFields = (defaultValues, formValues) => getDirtyFieldsFromDefaultValues(defaultValues, formValues, markFieldsDirty(formValues));

const defaultResult = {
    value: false,
    isValid: false,
};
const validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
    if (Array.isArray(options)) {
        if (options.length > 1) {
            const values = options
                .filter((option) => option && option.checked && !option.disabled)
                .map((option) => option.value);
            return { value: values, isValid: !!values.length };
        }
        return options[0].checked && !options[0].disabled
            ? // @ts-expect-error expected to work in the browser
                options[0].attributes && !isUndefined(options[0].attributes.value)
                    ? isUndefined(options[0].value) || options[0].value === ''
                        ? validResult
                        : { value: options[0].value, isValid: true }
                    : validResult
            : defaultResult;
    }
    return defaultResult;
};

var getFieldValueAs = (value, { valueAsNumber, valueAsDate, setValueAs }) => isUndefined(value)
    ? value
    : valueAsNumber
        ? value === ''
            ? NaN
            : +value
        : valueAsDate && isString(value)
            ? new Date(value)
            : setValueAs
                ? setValueAs(value)
                : value;

const defaultReturn = {
    isValid: false,
    value: null,
};
var getRadioValue = (options) => Array.isArray(options)
    ? options.reduce((previous, option) => option && option.checked && !option.disabled
        ? {
            isValid: true,
            value: option.value,
        }
        : previous, defaultReturn)
    : defaultReturn;

function getFieldValue(_f) {
    const ref = _f.ref;
    if (_f.refs ? _f.refs.every((ref) => ref.disabled) : ref.disabled) {
        return;
    }
    if (isFileInput(ref)) {
        return ref.files;
    }
    if (isRadioInput(ref)) {
        return getRadioValue(_f.refs).value;
    }
    if (isMultipleSelect(ref)) {
        return [...ref.selectedOptions].map(({ value }) => value);
    }
    if (isCheckBoxInput(ref)) {
        return getCheckboxValue(_f.refs).value;
    }
    return getFieldValueAs(isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
}

var getResolverOptions = (fieldsNames, _fields, criteriaMode, shouldUseNativeValidation) => {
    const fields = {};
    for (const name of fieldsNames) {
        const field = get(_fields, name);
        field && set(fields, name, field._f);
    }
    return {
        criteriaMode,
        names: [...fieldsNames],
        fields,
        shouldUseNativeValidation,
    };
};

var isRegex = (value) => value instanceof RegExp;

var getRuleValue = (rule) => isUndefined(rule)
    ? undefined
    : isRegex(rule)
        ? rule.source
        : isObject(rule)
            ? isRegex(rule.value)
                ? rule.value.source
                : rule.value
            : rule;

var hasValidation = (options) => options.mount &&
    (options.required ||
        options.min ||
        options.max ||
        options.maxLength ||
        options.minLength ||
        options.pattern ||
        options.validate);

function schemaErrorLookup(errors, _fields, name) {
    const error = get(errors, name);
    if (error || isKey(name)) {
        return {
            error,
            name,
        };
    }
    const names = name.split('.');
    while (names.length) {
        const fieldName = names.join('.');
        const field = get(_fields, fieldName);
        const foundError = get(errors, fieldName);
        if (field && !Array.isArray(field) && name !== fieldName) {
            return { name };
        }
        if (foundError && foundError.type) {
            return {
                name: fieldName,
                error: foundError,
            };
        }
        names.pop();
    }
    return {
        name,
    };
}

var skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode) => {
    if (mode.isOnAll) {
        return false;
    }
    else if (!isSubmitted && mode.isOnTouch) {
        return !(isTouched || isBlurEvent);
    }
    else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) {
        return !isBlurEvent;
    }
    else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) {
        return isBlurEvent;
    }
    return true;
};

var unsetEmptyArray = (ref, name) => !compact(get(ref, name)).length && unset(ref, name);

var isMessage = (value) => isString(value) || react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(value);

function getValidateError(result, ref, type = 'validate') {
    if (isMessage(result) ||
        (Array.isArray(result) && result.every(isMessage)) ||
        (isBoolean(result) && !result)) {
        return {
            type,
            message: isMessage(result) ? result : '',
            ref,
        };
    }
}

var getValueAndMessage = (validationData) => isObject(validationData) && !isRegex(validationData)
    ? validationData
    : {
        value: validationData,
        message: '',
    };

var validateField = async (field, inputValue, validateAllFieldCriteria, shouldUseNativeValidation) => {
    const { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, valueAsNumber, mount, disabled, } = field._f;
    if (!mount || disabled) {
        return {};
    }
    const inputRef = refs ? refs[0] : ref;
    const setCustomValidity = (message) => {
        if (shouldUseNativeValidation && inputRef.reportValidity) {
            inputRef.setCustomValidity(isBoolean(message) ? '' : message || ' ');
            inputRef.reportValidity();
        }
    };
    const error = {};
    const isRadio = isRadioInput(ref);
    const isCheckBox = isCheckBoxInput(ref);
    const isRadioOrCheckbox = isRadio || isCheckBox;
    const isEmpty = ((valueAsNumber || isFileInput(ref)) && !ref.value) ||
        inputValue === '' ||
        (Array.isArray(inputValue) && !inputValue.length);
    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
        const message = exceedMax ? maxLengthMessage : minLengthMessage;
        error[name] = Object.assign({ type: exceedMax ? maxType : minType, message,
            ref }, appendErrorsCurry(exceedMax ? maxType : minType, message));
    };
    if (required &&
        ((!isRadioOrCheckbox && (isEmpty || isNullOrUndefined(inputValue))) ||
            (isBoolean(inputValue) && !inputValue) ||
            (isCheckBox && !getCheckboxValue(refs).isValid) ||
            (isRadio && !getRadioValue(refs).isValid))) {
        const { value, message } = isMessage(required)
            ? { value: !!required, message: required }
            : getValueAndMessage(required);
        if (value) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.required, message, ref: inputRef }, appendErrorsCurry(INPUT_VALIDATION_RULES.required, message));
            if (!validateAllFieldCriteria) {
                setCustomValidity(message);
                return error;
            }
        }
    }
    if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
        let exceedMax;
        let exceedMin;
        const maxOutput = getValueAndMessage(max);
        const minOutput = getValueAndMessage(min);
        if (!isNaN(inputValue)) {
            const valueNumber = ref.valueAsNumber || +inputValue;
            if (!isNullOrUndefined(maxOutput.value)) {
                exceedMax = valueNumber > maxOutput.value;
            }
            if (!isNullOrUndefined(minOutput.value)) {
                exceedMin = valueNumber < minOutput.value;
            }
        }
        else {
            const valueDate = ref.valueAsDate || new Date(inputValue);
            if (isString(maxOutput.value)) {
                exceedMax = valueDate > new Date(maxOutput.value);
            }
            if (isString(minOutput.value)) {
                exceedMin = valueDate < new Date(minOutput.value);
            }
        }
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
            if (!validateAllFieldCriteria) {
                setCustomValidity(error[name].message);
                return error;
            }
        }
    }
    if ((maxLength || minLength) && !isEmpty && isString(inputValue)) {
        const maxLengthOutput = getValueAndMessage(maxLength);
        const minLengthOutput = getValueAndMessage(minLength);
        const exceedMax = !isNullOrUndefined(maxLengthOutput.value) &&
            inputValue.length > maxLengthOutput.value;
        const exceedMin = !isNullOrUndefined(minLengthOutput.value) &&
            inputValue.length < minLengthOutput.value;
        if (exceedMax || exceedMin) {
            getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
            if (!validateAllFieldCriteria) {
                setCustomValidity(error[name].message);
                return error;
            }
        }
    }
    if (pattern && !isEmpty && isString(inputValue)) {
        const { value: patternValue, message } = getValueAndMessage(pattern);
        if (isRegex(patternValue) && !inputValue.match(patternValue)) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.pattern, message,
                ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message));
            if (!validateAllFieldCriteria) {
                setCustomValidity(message);
                return error;
            }
        }
    }
    if (validate) {
        if (isFunction(validate)) {
            const result = await validate(inputValue);
            const validateError = getValidateError(result, inputRef);
            if (validateError) {
                error[name] = Object.assign(Object.assign({}, validateError), appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message));
                if (!validateAllFieldCriteria) {
                    setCustomValidity(validateError.message);
                    return error;
                }
            }
        }
        else if (isObject(validate)) {
            let validationResult = {};
            for (const key in validate) {
                if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
                    break;
                }
                const validateError = getValidateError(await validate[key](inputValue), inputRef, key);
                if (validateError) {
                    validationResult = Object.assign(Object.assign({}, validateError), appendErrorsCurry(key, validateError.message));
                    setCustomValidity(validateError.message);
                    if (validateAllFieldCriteria) {
                        error[name] = validationResult;
                    }
                }
            }
            if (!isEmptyObject(validationResult)) {
                error[name] = Object.assign({ ref: inputRef }, validationResult);
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
    }
    setCustomValidity(true);
    return error;
};

const defaultOptions = {
    mode: VALIDATION_MODE.onSubmit,
    reValidateMode: VALIDATION_MODE.onChange,
    shouldFocusError: true,
};
function createFormControl(props = {}) {
    let _options = Object.assign(Object.assign({}, defaultOptions), props);
    let _formState = {
        isDirty: false,
        isValidating: false,
        dirtyFields: {},
        isSubmitted: false,
        submitCount: 0,
        touchedFields: {},
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        errors: {},
    };
    let _fields = {};
    let _defaultValues = _options.defaultValues || {};
    let _formValues = _options.shouldUnregister
        ? {}
        : cloneObject(_defaultValues);
    let _stateFlags = {
        action: false,
        mount: false,
        watch: false,
    };
    let _names = {
        mount: new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
    };
    let delayErrorCallback;
    let timer = 0;
    let validateFields = {};
    const _proxyFormState = {
        isDirty: false,
        dirtyFields: false,
        touchedFields: false,
        isValidating: false,
        isValid: false,
        errors: false,
    };
    const _subjects = {
        watch: createSubject(),
        array: createSubject(),
        state: createSubject(),
    };
    const validationModeBeforeSubmit = getValidationModes(_options.mode);
    const validationModeAfterSubmit = getValidationModes(_options.reValidateMode);
    const shouldDisplayAllAssociatedErrors = _options.criteriaMode === VALIDATION_MODE.all;
    const debounce = (callback, wait) => (...args) => {
        clearTimeout(timer);
        timer = window.setTimeout(() => callback(...args), wait);
    };
    const _updateValid = async (shouldSkipRender) => {
        let isValid = false;
        if (_proxyFormState.isValid) {
            isValid = _options.resolver
                ? isEmptyObject((await _executeSchema()).errors)
                : await executeBuildInValidation(_fields, true);
            if (!shouldSkipRender && isValid !== _formState.isValid) {
                _formState.isValid = isValid;
                _subjects.state.next({
                    isValid,
                });
            }
        }
        return isValid;
    };
    const _updateFieldArray = (name, values = [], method, args, shouldSetValues = true, shouldUpdateFieldsAndErrors = true) => {
        if (args && method) {
            _stateFlags.action = true;
            if (shouldUpdateFieldsAndErrors && Array.isArray(get(_fields, name))) {
                const fieldValues = method(get(_fields, name), args.argA, args.argB);
                shouldSetValues && set(_fields, name, fieldValues);
            }
            if (_proxyFormState.errors &&
                shouldUpdateFieldsAndErrors &&
                Array.isArray(get(_formState.errors, name))) {
                const errors = method(get(_formState.errors, name), args.argA, args.argB);
                shouldSetValues && set(_formState.errors, name, errors);
                unsetEmptyArray(_formState.errors, name);
            }
            if (_proxyFormState.touchedFields &&
                Array.isArray(get(_formState.touchedFields, name))) {
                const touchedFields = method(get(_formState.touchedFields, name), args.argA, args.argB);
                shouldSetValues && set(_formState.touchedFields, name, touchedFields);
            }
            if (_proxyFormState.dirtyFields) {
                _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
            }
            _subjects.state.next({
                isDirty: _getDirty(name, values),
                dirtyFields: _formState.dirtyFields,
                errors: _formState.errors,
                isValid: _formState.isValid,
            });
        }
        else {
            set(_formValues, name, values);
        }
    };
    const updateErrors = (name, error) => (set(_formState.errors, name, error),
        _subjects.state.next({
            errors: _formState.errors,
        }));
    const updateValidAndValue = (name, shouldSkipSetValueAs, value, ref) => {
        const field = get(_fields, name);
        if (field) {
            const defaultValue = get(_formValues, name, isUndefined(value) ? get(_defaultValues, name) : value);
            isUndefined(defaultValue) ||
                (ref && ref.defaultChecked) ||
                shouldSkipSetValueAs
                ? set(_formValues, name, shouldSkipSetValueAs ? defaultValue : getFieldValue(field._f))
                : setFieldValue(name, defaultValue);
            _stateFlags.mount && _updateValid();
        }
    };
    const updateTouchAndDirty = (name, fieldValue, isBlurEvent, shouldDirty, shouldRender) => {
        let isFieldDirty = false;
        const output = {
            name,
        };
        const isPreviousFieldTouched = get(_formState.touchedFields, name);
        if (_proxyFormState.isDirty) {
            const isPreviousFormDirty = _formState.isDirty;
            _formState.isDirty = output.isDirty = _getDirty();
            isFieldDirty = isPreviousFormDirty !== output.isDirty;
        }
        if (_proxyFormState.dirtyFields && (!isBlurEvent || shouldDirty)) {
            const isPreviousFieldDirty = get(_formState.dirtyFields, name);
            const isCurrentFieldPristine = deepEqual(get(_defaultValues, name), fieldValue);
            isCurrentFieldPristine
                ? unset(_formState.dirtyFields, name)
                : set(_formState.dirtyFields, name, true);
            output.dirtyFields = _formState.dirtyFields;
            isFieldDirty =
                isFieldDirty ||
                    isPreviousFieldDirty !== get(_formState.dirtyFields, name);
        }
        if (isBlurEvent && !isPreviousFieldTouched) {
            set(_formState.touchedFields, name, isBlurEvent);
            output.touchedFields = _formState.touchedFields;
            isFieldDirty =
                isFieldDirty ||
                    (_proxyFormState.touchedFields &&
                        isPreviousFieldTouched !== isBlurEvent);
        }
        isFieldDirty && shouldRender && _subjects.state.next(output);
        return isFieldDirty ? output : {};
    };
    const shouldRenderByError = async (shouldSkipRender, name, isValid, error, fieldState) => {
        const previousFieldError = get(_formState.errors, name);
        const shouldUpdateValid = _proxyFormState.isValid && _formState.isValid !== isValid;
        if (props.delayError && error) {
            delayErrorCallback =
                delayErrorCallback || debounce(updateErrors, props.delayError);
            delayErrorCallback(name, error);
        }
        else {
            clearTimeout(timer);
            error
                ? set(_formState.errors, name, error)
                : unset(_formState.errors, name);
        }
        if (((error ? !deepEqual(previousFieldError, error) : previousFieldError) ||
            !isEmptyObject(fieldState) ||
            shouldUpdateValid) &&
            !shouldSkipRender) {
            const updatedFormState = Object.assign(Object.assign(Object.assign({}, fieldState), (shouldUpdateValid ? { isValid } : {})), { errors: _formState.errors, name });
            _formState = Object.assign(Object.assign({}, _formState), updatedFormState);
            _subjects.state.next(updatedFormState);
        }
        validateFields[name]--;
        if (_proxyFormState.isValidating &&
            !Object.values(validateFields).some((v) => v)) {
            _subjects.state.next({
                isValidating: false,
            });
            validateFields = {};
        }
    };
    const _executeSchema = async (name) => _options.resolver
        ? await _options.resolver(Object.assign({}, _formValues), _options.context, getResolverOptions(name || _names.mount, _fields, _options.criteriaMode, _options.shouldUseNativeValidation))
        : {};
    const executeSchemaAndUpdateState = async (names) => {
        const { errors } = await _executeSchema();
        if (names) {
            for (const name of names) {
                const error = get(errors, name);
                error
                    ? set(_formState.errors, name, error)
                    : unset(_formState.errors, name);
            }
        }
        else {
            _formState.errors = errors;
        }
        return errors;
    };
    const executeBuildInValidation = async (fields, shouldOnlyCheckValid, context = {
        valid: true,
    }) => {
        for (const name in fields) {
            const field = fields[name];
            if (field) {
                const fieldReference = field._f;
                const fieldValue = omit(field, '_f');
                if (fieldReference) {
                    const fieldError = await validateField(field, get(_formValues, fieldReference.name), shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation);
                    if (fieldError[fieldReference.name]) {
                        context.valid = false;
                        if (shouldOnlyCheckValid) {
                            break;
                        }
                    }
                    if (!shouldOnlyCheckValid) {
                        fieldError[fieldReference.name]
                            ? set(_formState.errors, fieldReference.name, fieldError[fieldReference.name])
                            : unset(_formState.errors, fieldReference.name);
                    }
                }
                fieldValue &&
                    (await executeBuildInValidation(fieldValue, shouldOnlyCheckValid, context));
            }
        }
        return context.valid;
    };
    const _removeUnmounted = () => {
        for (const name of _names.unMount) {
            const field = get(_fields, name);
            field &&
                (field._f.refs
                    ? field._f.refs.every((ref) => !live(ref))
                    : !live(field._f.ref)) &&
                unregister(name);
        }
        _names.unMount = new Set();
    };
    const _getDirty = (name, data) => (name && data && set(_formValues, name, data),
        !deepEqual(getValues(), _defaultValues));
    const _getWatch = (names, defaultValue, isGlobal) => {
        const fieldValues = Object.assign({}, (_stateFlags.mount
            ? _formValues
            : isUndefined(defaultValue)
                ? _defaultValues
                : isString(names)
                    ? { [names]: defaultValue }
                    : defaultValue));
        return generateWatchOutput(names, _names, fieldValues, isGlobal);
    };
    const _getFieldArray = (name) => compact(get(_stateFlags.mount ? _formValues : _defaultValues, name, props.shouldUnregister ? get(_defaultValues, name, []) : []));
    const setFieldValue = (name, value, options = {}) => {
        const field = get(_fields, name);
        let fieldValue = value;
        if (field) {
            const fieldReference = field._f;
            if (fieldReference) {
                !fieldReference.disabled &&
                    set(_formValues, name, getFieldValueAs(value, fieldReference));
                fieldValue =
                    isWeb && isHTMLElement(fieldReference.ref) && isNullOrUndefined(value)
                        ? ''
                        : value;
                if (isMultipleSelect(fieldReference.ref)) {
                    [...fieldReference.ref.options].forEach((selectRef) => (selectRef.selected = fieldValue.includes(selectRef.value)));
                }
                else if (fieldReference.refs) {
                    if (isCheckBoxInput(fieldReference.ref)) {
                        fieldReference.refs.length > 1
                            ? fieldReference.refs.forEach((checkboxRef) => (checkboxRef.checked = Array.isArray(fieldValue)
                                ? !!fieldValue.find((data) => data === checkboxRef.value)
                                : fieldValue === checkboxRef.value))
                            : fieldReference.refs[0] &&
                                (fieldReference.refs[0].checked = !!fieldValue);
                    }
                    else {
                        fieldReference.refs.forEach((radioRef) => (radioRef.checked = radioRef.value === fieldValue));
                    }
                }
                else if (isFileInput(fieldReference.ref)) {
                    fieldReference.ref.value = '';
                }
                else {
                    fieldReference.ref.value = fieldValue;
                    if (!fieldReference.ref.type) {
                        _subjects.watch.next({
                            name,
                        });
                    }
                }
            }
        }
        (options.shouldDirty || options.shouldTouch) &&
            updateTouchAndDirty(name, fieldValue, options.shouldTouch, options.shouldDirty, true);
        options.shouldValidate && trigger(name);
    };
    const setValues = (name, value, options) => {
        for (const fieldKey in value) {
            const fieldValue = value[fieldKey];
            const fieldName = `${name}.${fieldKey}`;
            const field = get(_fields, fieldName);
            (_names.array.has(name) ||
                !isPrimitive(fieldValue) ||
                (field && !field._f)) &&
                !isDateObject(fieldValue)
                ? setValues(fieldName, fieldValue, options)
                : setFieldValue(fieldName, fieldValue, options);
        }
    };
    const setValue = (name, value, options = {}) => {
        const field = get(_fields, name);
        const isFieldArray = _names.array.has(name);
        const cloneValue = cloneObject(value);
        set(_formValues, name, cloneValue);
        if (isFieldArray) {
            _subjects.array.next({
                name,
                values: _formValues,
            });
            if ((_proxyFormState.isDirty || _proxyFormState.dirtyFields) &&
                options.shouldDirty) {
                _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
                _subjects.state.next({
                    name,
                    dirtyFields: _formState.dirtyFields,
                    isDirty: _getDirty(name, cloneValue),
                });
            }
        }
        else {
            field && !field._f && !isNullOrUndefined(cloneValue)
                ? setValues(name, cloneValue, options)
                : setFieldValue(name, cloneValue, options);
        }
        isWatched(name, _names) && _subjects.state.next({});
        _subjects.watch.next({
            name,
        });
    };
    const onChange = async (event) => {
        const target = event.target;
        let name = target.name;
        const field = get(_fields, name);
        if (field) {
            let error;
            let isValid;
            const fieldValue = target.type
                ? getFieldValue(field._f)
                : getEventValue(event);
            const isBlurEvent = event.type === EVENTS.BLUR || event.type === EVENTS.FOCUS_OUT;
            const shouldSkipValidation = (!hasValidation(field._f) &&
                !_options.resolver &&
                !get(_formState.errors, name) &&
                !field._f.deps) ||
                skipValidation(isBlurEvent, get(_formState.touchedFields, name), _formState.isSubmitted, validationModeAfterSubmit, validationModeBeforeSubmit);
            const watched = isWatched(name, _names, isBlurEvent);
            set(_formValues, name, fieldValue);
            if (isBlurEvent) {
                field._f.onBlur && field._f.onBlur(event);
            }
            else if (field._f.onChange) {
                field._f.onChange(event);
            }
            const fieldState = updateTouchAndDirty(name, fieldValue, isBlurEvent, false);
            const shouldRender = !isEmptyObject(fieldState) || watched;
            !isBlurEvent &&
                _subjects.watch.next({
                    name,
                    type: event.type,
                });
            if (shouldSkipValidation) {
                return (shouldRender &&
                    _subjects.state.next(Object.assign({ name }, (watched ? {} : fieldState))));
            }
            !isBlurEvent && watched && _subjects.state.next({});
            validateFields[name] = validateFields[name] ? +1 : 1;
            _subjects.state.next({
                isValidating: true,
            });
            if (_options.resolver) {
                const { errors } = await _executeSchema([name]);
                const previousErrorLookupResult = schemaErrorLookup(_formState.errors, _fields, name);
                const errorLookupResult = schemaErrorLookup(errors, _fields, previousErrorLookupResult.name || name);
                error = errorLookupResult.error;
                name = errorLookupResult.name;
                isValid = isEmptyObject(errors);
            }
            else {
                error = (await validateField(field, get(_formValues, name), shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation))[name];
                isValid = await _updateValid(true);
            }
            field._f.deps && trigger(field._f.deps);
            shouldRenderByError(false, name, isValid, error, fieldState);
        }
    };
    const trigger = async (name, options = {}) => {
        let isValid;
        let validationResult;
        const fieldNames = convertToArrayPayload(name);
        _subjects.state.next({
            isValidating: true,
        });
        if (_options.resolver) {
            const errors = await executeSchemaAndUpdateState(isUndefined(name) ? name : fieldNames);
            isValid = isEmptyObject(errors);
            validationResult = name
                ? !fieldNames.some((name) => get(errors, name))
                : isValid;
        }
        else if (name) {
            validationResult = (await Promise.all(fieldNames.map(async (fieldName) => {
                const field = get(_fields, fieldName);
                return await executeBuildInValidation(field && field._f ? { [fieldName]: field } : field);
            }))).every(Boolean);
            !(!validationResult && !_formState.isValid) && _updateValid();
        }
        else {
            validationResult = isValid = await executeBuildInValidation(_fields);
        }
        _subjects.state.next(Object.assign(Object.assign(Object.assign({}, (!isString(name) ||
            (_proxyFormState.isValid && isValid !== _formState.isValid)
            ? {}
            : { name })), (_options.resolver ? { isValid } : {})), { errors: _formState.errors, isValidating: false }));
        options.shouldFocus &&
            !validationResult &&
            focusFieldBy(_fields, (key) => get(_formState.errors, key), name ? fieldNames : _names.mount);
        return validationResult;
    };
    const getValues = (fieldNames) => {
        const values = Object.assign(Object.assign({}, _defaultValues), (_stateFlags.mount ? _formValues : {}));
        return isUndefined(fieldNames)
            ? values
            : isString(fieldNames)
                ? get(values, fieldNames)
                : fieldNames.map((name) => get(values, name));
    };
    const getFieldState = (name, formState) => ({
        invalid: !!get((formState || _formState).errors, name),
        isDirty: !!get((formState || _formState).dirtyFields, name),
        isTouched: !!get((formState || _formState).touchedFields, name),
        error: get((formState || _formState).errors, name),
    });
    const clearErrors = (name) => {
        name
            ? convertToArrayPayload(name).forEach((inputName) => unset(_formState.errors, inputName))
            : (_formState.errors = {});
        _subjects.state.next({
            errors: _formState.errors,
        });
    };
    const setError = (name, error, options) => {
        const ref = (get(_fields, name, { _f: {} })._f || {}).ref;
        set(_formState.errors, name, Object.assign(Object.assign({}, error), { ref }));
        _subjects.state.next({
            name,
            errors: _formState.errors,
            isValid: false,
        });
        options && options.shouldFocus && ref && ref.focus && ref.focus();
    };
    const watch = (name, defaultValue) => isFunction(name)
        ? _subjects.watch.subscribe({
            next: (info) => name(_getWatch(undefined, defaultValue), info),
        })
        : _getWatch(name, defaultValue, true);
    const unregister = (name, options = {}) => {
        for (const fieldName of name ? convertToArrayPayload(name) : _names.mount) {
            _names.mount.delete(fieldName);
            _names.array.delete(fieldName);
            if (get(_fields, fieldName)) {
                if (!options.keepValue) {
                    unset(_fields, fieldName);
                    unset(_formValues, fieldName);
                }
                !options.keepError && unset(_formState.errors, fieldName);
                !options.keepDirty && unset(_formState.dirtyFields, fieldName);
                !options.keepTouched && unset(_formState.touchedFields, fieldName);
                !_options.shouldUnregister &&
                    !options.keepDefaultValue &&
                    unset(_defaultValues, fieldName);
            }
        }
        _subjects.watch.next({});
        _subjects.state.next(Object.assign(Object.assign({}, _formState), (!options.keepDirty ? {} : { isDirty: _getDirty() })));
        !options.keepIsValid && _updateValid();
    };
    const register = (name, options = {}) => {
        let field = get(_fields, name);
        const disabledIsDefined = isBoolean(options.disabled);
        set(_fields, name, {
            _f: Object.assign(Object.assign(Object.assign({}, (field && field._f ? field._f : { ref: { name } })), { name, mount: true }), options),
        });
        _names.mount.add(name);
        field
            ? disabledIsDefined &&
                set(_formValues, name, options.disabled
                    ? undefined
                    : get(_formValues, name, getFieldValue(field._f)))
            : updateValidAndValue(name, true, options.value);
        return Object.assign(Object.assign(Object.assign({}, (disabledIsDefined ? { disabled: options.disabled } : {})), (_options.shouldUseNativeValidation
            ? {
                required: !!options.required,
                min: getRuleValue(options.min),
                max: getRuleValue(options.max),
                minLength: getRuleValue(options.minLength),
                maxLength: getRuleValue(options.maxLength),
                pattern: getRuleValue(options.pattern),
            }
            : {})), { name,
            onChange, onBlur: onChange, ref: (ref) => {
                if (ref) {
                    register(name, options);
                    field = get(_fields, name);
                    const fieldRef = isUndefined(ref.value)
                        ? ref.querySelectorAll
                            ? ref.querySelectorAll('input,select,textarea')[0] || ref
                            : ref
                        : ref;
                    const radioOrCheckbox = isRadioOrCheckbox(fieldRef);
                    const refs = field._f.refs || [];
                    if (radioOrCheckbox
                        ? refs.find((option) => option === fieldRef)
                        : fieldRef === field._f.ref) {
                        return;
                    }
                    set(_fields, name, {
                        _f: Object.assign(Object.assign({}, field._f), (radioOrCheckbox
                            ? {
                                refs: refs.concat(fieldRef).filter(live),
                                ref: { type: fieldRef.type, name },
                            }
                            : { ref: fieldRef })),
                    });
                    updateValidAndValue(name, false, undefined, fieldRef);
                }
                else {
                    field = get(_fields, name, {});
                    if (field._f) {
                        field._f.mount = false;
                    }
                    (_options.shouldUnregister || options.shouldUnregister) &&
                        !(isNameInFieldArray(_names.array, name) && _stateFlags.action) &&
                        _names.unMount.add(name);
                }
            } });
    };
    const handleSubmit = (onValid, onInvalid) => async (e) => {
        if (e) {
            e.preventDefault && e.preventDefault();
            e.persist && e.persist();
        }
        let hasNoPromiseError = true;
        let fieldValues = cloneObject(_formValues);
        _subjects.state.next({
            isSubmitting: true,
        });
        try {
            if (_options.resolver) {
                const { errors, values } = await _executeSchema();
                _formState.errors = errors;
                fieldValues = values;
            }
            else {
                await executeBuildInValidation(_fields);
            }
            if (isEmptyObject(_formState.errors) &&
                Object.keys(_formState.errors).every((name) => get(fieldValues, name))) {
                _subjects.state.next({
                    errors: {},
                    isSubmitting: true,
                });
                await onValid(fieldValues, e);
            }
            else {
                if (onInvalid) {
                    await onInvalid(Object.assign({}, _formState.errors), e);
                }
                _options.shouldFocusError &&
                    focusFieldBy(_fields, (key) => get(_formState.errors, key), _names.mount);
            }
        }
        catch (err) {
            hasNoPromiseError = false;
            throw err;
        }
        finally {
            _formState.isSubmitted = true;
            _subjects.state.next({
                isSubmitted: true,
                isSubmitting: false,
                isSubmitSuccessful: isEmptyObject(_formState.errors) && hasNoPromiseError,
                submitCount: _formState.submitCount + 1,
                errors: _formState.errors,
            });
        }
    };
    const resetField = (name, options = {}) => {
        if (get(_fields, name)) {
            if (isUndefined(options.defaultValue)) {
                setValue(name, get(_defaultValues, name));
            }
            else {
                setValue(name, options.defaultValue);
                set(_defaultValues, name, options.defaultValue);
            }
            if (!options.keepTouched) {
                unset(_formState.touchedFields, name);
            }
            if (!options.keepDirty) {
                unset(_formState.dirtyFields, name);
                _formState.isDirty = options.defaultValue
                    ? _getDirty(name, get(_defaultValues, name))
                    : _getDirty();
            }
            if (!options.keepError) {
                unset(_formState.errors, name);
                _proxyFormState.isValid && _updateValid();
            }
            _subjects.state.next(Object.assign({}, _formState));
        }
    };
    const reset = (formValues, keepStateOptions = {}) => {
        const updatedValues = formValues || _defaultValues;
        const cloneUpdatedValues = cloneObject(updatedValues);
        const values = formValues && !isEmptyObject(formValues)
            ? cloneUpdatedValues
            : _defaultValues;
        if (!keepStateOptions.keepDefaultValues) {
            _defaultValues = updatedValues;
        }
        if (!keepStateOptions.keepValues) {
            if (isWeb && isUndefined(formValues)) {
                for (const name of _names.mount) {
                    const field = get(_fields, name);
                    if (field && field._f) {
                        const fieldReference = Array.isArray(field._f.refs)
                            ? field._f.refs[0]
                            : field._f.ref;
                        try {
                            isHTMLElement(fieldReference) &&
                                fieldReference.closest('form').reset();
                            break;
                        }
                        catch (_a) { }
                    }
                }
            }
            _formValues = props.shouldUnregister
                ? keepStateOptions.keepDefaultValues
                    ? cloneObject(_defaultValues)
                    : {}
                : cloneUpdatedValues;
            _fields = {};
            _subjects.array.next({
                values,
            });
            _subjects.watch.next({
                values,
            });
        }
        _names = {
            mount: new Set(),
            unMount: new Set(),
            array: new Set(),
            watch: new Set(),
            watchAll: false,
            focus: '',
        };
        _stateFlags.mount =
            !_proxyFormState.isValid || !!keepStateOptions.keepIsValid;
        _stateFlags.watch = !!props.shouldUnregister;
        _subjects.state.next({
            submitCount: keepStateOptions.keepSubmitCount
                ? _formState.submitCount
                : 0,
            isDirty: keepStateOptions.keepDirty
                ? _formState.isDirty
                : keepStateOptions.keepDefaultValues
                    ? !deepEqual(formValues, _defaultValues)
                    : false,
            isSubmitted: keepStateOptions.keepIsSubmitted
                ? _formState.isSubmitted
                : false,
            dirtyFields: keepStateOptions.keepDirty
                ? _formState.dirtyFields
                : (keepStateOptions.keepDefaultValues && formValues
                    ? Object.entries(formValues).reduce((previous, [key, value]) => (Object.assign(Object.assign({}, previous), { [key]: value !== get(_defaultValues, key) })), {})
                    : {}),
            touchedFields: keepStateOptions.keepTouched
                ? _formState.touchedFields
                : {},
            errors: keepStateOptions.keepErrors
                ? _formState.errors
                : {},
            isSubmitting: false,
            isSubmitSuccessful: false,
        });
    };
    const setFocus = (name, options = {}) => {
        const field = get(_fields, name)._f;
        const fieldRef = field.refs ? field.refs[0] : field.ref;
        options.shouldSelect ? fieldRef.select() : fieldRef.focus();
    };
    return {
        control: {
            register,
            unregister,
            getFieldState,
            _executeSchema,
            _getWatch,
            _getDirty,
            _updateValid,
            _removeUnmounted,
            _updateFieldArray,
            _getFieldArray,
            _subjects,
            _proxyFormState,
            get _fields() {
                return _fields;
            },
            get _formValues() {
                return _formValues;
            },
            get _stateFlags() {
                return _stateFlags;
            },
            set _stateFlags(value) {
                _stateFlags = value;
            },
            get _defaultValues() {
                return _defaultValues;
            },
            get _names() {
                return _names;
            },
            set _names(value) {
                _names = value;
            },
            get _formState() {
                return _formState;
            },
            set _formState(value) {
                _formState = value;
            },
            get _options() {
                return _options;
            },
            set _options(value) {
                _options = Object.assign(Object.assign({}, _options), value);
            },
        },
        trigger,
        register,
        handleSubmit,
        watch,
        setValue,
        getValues,
        reset,
        resetField,
        clearErrors,
        unregister,
        setError,
        setFocus,
        getFieldState,
    };
}

/**
 * Custom hook to mange the entire form.
 *
 * @remarks
 * [API](https://react-hook-form.com/api/useform) • [Demo](https://codesandbox.io/s/react-hook-form-get-started-ts-5ksmm) • [Video](https://www.youtube.com/watch?v=RkXv4AXXC_4)
 *
 * @param props - form configuration and validation parameters.
 *
 * @returns methods - individual functions to manage the form state. {@link UseFormReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, watch, formState: { errors } } = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   console.log(watch("example"));
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input defaultValue="test" {...register("example")} />
 *       <input {...register("exampleRequired", { required: true })} />
 *       {errors.exampleRequired && <span>This field is required</span>}
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */
function useForm(props = {}) {
    const _formControl = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const [formState, updateFormState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
        isDirty: false,
        isValidating: false,
        dirtyFields: {},
        isSubmitted: false,
        submitCount: 0,
        touchedFields: {},
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        errors: {},
    });
    if (_formControl.current) {
        _formControl.current.control._options = props;
    }
    else {
        _formControl.current = Object.assign(Object.assign({}, createFormControl(props)), { formState });
    }
    const control = _formControl.current.control;
    const callback = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((value) => {
        if (shouldRenderFormState(value, control._proxyFormState, true)) {
            control._formState = Object.assign(Object.assign({}, control._formState), value);
            updateFormState(Object.assign({}, control._formState));
        }
    }, [control]);
    useSubscribe({
        subject: control._subjects.state,
        callback,
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (!control._stateFlags.mount) {
            control._proxyFormState.isValid && control._updateValid();
            control._stateFlags.mount = true;
        }
        if (control._stateFlags.watch) {
            control._stateFlags.watch = false;
            control._subjects.state.next({});
        }
        control._removeUnmounted();
    });
    _formControl.current.formState = getProxyFormState(formState, control._proxyFormState);
    return _formControl.current;
}


//# sourceMappingURL=index.esm.mjs.map


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.2';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
exports.StrictMode = 0xeacc;
exports.Profiler = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
exports.Suspense = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  exports.StrictMode = symbolFor('react.strict_mode');
  exports.Profiler = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  exports.Suspense = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: 0
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case exports.Profiler:
      return 'Profiler';

    case exports.StrictMode:
      return 'StrictMode';

    case exports.Suspense:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (Array.isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead." );
        }
      }
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.

    var pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then(function (moduleObject) {
      if (payload._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
          }
        } // Transition to the next state.


        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = defaultExport;
      }
    }, function (error) {
      if (payload._status === Pending) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });
  }

  if (payload._status === Resolved) {
    return payload._result;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: -1,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (render.displayName == null) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (type.displayName == null) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case exports.Suspense:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === exports.Fragment) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    /* eslint-disable no-new */

    new Map([[frozenObject, null]]);
    new Set([frozenObject]);
    /* eslint-enable no-new */
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/swr/dist/index.mjs":
/*!*****************************************!*\
  !*** ./node_modules/swr/dist/index.mjs ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SWRConfig": function() { return /* binding */ SWRConfig; },
/* harmony export */   "default": function() { return /* binding */ useSWR; },
/* harmony export */   "mutate": function() { return /* binding */ mutate; },
/* harmony export */   "unstable_serialize": function() { return /* binding */ unstable_serialize; },
/* harmony export */   "useSWRConfig": function() { return /* binding */ useSWRConfig; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var noop = function () { };
// Using noop() as the undefined value as undefined can possibly be replaced
// by something else.  Prettier ignore and extra parentheses are necessary here
// to ensure that tsc doesn't remove the __NOINLINE__ comment.
// prettier-ignore
var UNDEFINED = ( /*#__NOINLINE__*/noop());
var OBJECT = Object;
var isUndefined = function (v) { return v === UNDEFINED; };
var isFunction = function (v) { return typeof v == 'function'; };
var mergeObjects = function (a, b) { return OBJECT.assign({}, a, b); };
var STR_UNDEFINED = 'undefined';
// NOTE: Use function to guarantee it's re-evaluated between jsdom and node runtime for tests.
var hasWindow = function () { return typeof window != STR_UNDEFINED; };
var hasDocument = function () { return typeof document != STR_UNDEFINED; };
var hasRequestAnimationFrame = function () {
    return hasWindow() && typeof window['requestAnimationFrame'] != STR_UNDEFINED;
};

// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
var table = new WeakMap();
// counter of the key
var counter = 0;
// A stable hash implementation that supports:
// - Fast and ensures unique hash properties
// - Handles unserializable values
// - Handles object key ordering
// - Generates short results
//
// This is not a serialization function, and the result is not guaranteed to be
// parsible.
var stableHash = function (arg) {
    var type = typeof arg;
    var constructor = arg && arg.constructor;
    var isDate = constructor == Date;
    var result;
    var index;
    if (OBJECT(arg) === arg && !isDate && constructor != RegExp) {
        // Object/function, not null/date/regexp. Use WeakMap to store the id first.
        // If it's already hashed, directly return the result.
        result = table.get(arg);
        if (result)
            return result;
        // Store the hash first for circular reference detection before entering the
        // recursive `stableHash` calls.
        // For other objects like set and map, we use this id directly as the hash.
        result = ++counter + '~';
        table.set(arg, result);
        if (constructor == Array) {
            // Array.
            result = '@';
            for (index = 0; index < arg.length; index++) {
                result += stableHash(arg[index]) + ',';
            }
            table.set(arg, result);
        }
        if (constructor == OBJECT) {
            // Object, sort keys.
            result = '#';
            var keys = OBJECT.keys(arg).sort();
            while (!isUndefined((index = keys.pop()))) {
                if (!isUndefined(arg[index])) {
                    result += index + ':' + stableHash(arg[index]) + ',';
                }
            }
            table.set(arg, result);
        }
    }
    else {
        result = isDate
            ? arg.toJSON()
            : type == 'symbol'
                ? arg.toString()
                : type == 'string'
                    ? JSON.stringify(arg)
                    : '' + arg;
    }
    return result;
};

/**
 * Due to bug https://bugs.chromium.org/p/chromium/issues/detail?id=678075,
 * it's not reliable to detect if the browser is currently online or offline
 * based on `navigator.onLine`.
 * As a work around, we always assume it's online on first load, and change
 * the status upon `online` or `offline` events.
 */
var online = true;
var isOnline = function () { return online; };
var hasWin = hasWindow();
var hasDoc = hasDocument();
// For node and React Native, `add/removeEventListener` doesn't exist on window.
var onWindowEvent = hasWin && window.addEventListener
    ? window.addEventListener.bind(window)
    : noop;
var onDocumentEvent = hasDoc ? document.addEventListener.bind(document) : noop;
var offWindowEvent = hasWin && window.removeEventListener
    ? window.removeEventListener.bind(window)
    : noop;
var offDocumentEvent = hasDoc
    ? document.removeEventListener.bind(document)
    : noop;
var isVisible = function () {
    var visibilityState = hasDoc && document.visibilityState;
    return isUndefined(visibilityState) || visibilityState !== 'hidden';
};
var initFocus = function (callback) {
    // focus revalidate
    onDocumentEvent('visibilitychange', callback);
    onWindowEvent('focus', callback);
    return function () {
        offDocumentEvent('visibilitychange', callback);
        offWindowEvent('focus', callback);
    };
};
var initReconnect = function (callback) {
    // revalidate on reconnected
    var onOnline = function () {
        online = true;
        callback();
    };
    // nothing to revalidate, just update the status
    var onOffline = function () {
        online = false;
    };
    onWindowEvent('online', onOnline);
    onWindowEvent('offline', onOffline);
    return function () {
        offWindowEvent('online', onOnline);
        offWindowEvent('offline', onOffline);
    };
};
var preset = {
    isOnline: isOnline,
    isVisible: isVisible
};
var defaultConfigOptions = {
    initFocus: initFocus,
    initReconnect: initReconnect
};

var IS_SERVER = !hasWindow() || 'Deno' in window;
// Polyfill requestAnimationFrame
var rAF = function (f) {
    return hasRequestAnimationFrame() ? window['requestAnimationFrame'](f) : setTimeout(f, 1);
};
// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
var useIsomorphicLayoutEffect = IS_SERVER ? react__WEBPACK_IMPORTED_MODULE_0__.useEffect : react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;
// This assignment is to extend the Navigator type to use effectiveType.
var navigatorConnection = typeof navigator !== 'undefined' &&
    navigator.connection;
// Adjust the config based on slow connection status (<= 70Kbps).
var slowConnection = !IS_SERVER &&
    navigatorConnection &&
    (['slow-2g', '2g'].includes(navigatorConnection.effectiveType) ||
        navigatorConnection.saveData);

var serialize = function (key) {
    if (isFunction(key)) {
        try {
            key = key();
        }
        catch (err) {
            // dependencies not ready
            key = '';
        }
    }
    var args = [].concat(key);
    // If key is not falsy, or not an empty array, hash it.
    key =
        typeof key == 'string'
            ? key
            : (Array.isArray(key) ? key.length : key)
                ? stableHash(key)
                : '';
    var infoKey = key ? '$swr$' + key : '';
    return [key, args, infoKey];
};

// Global state used to deduplicate requests and store listeners
var SWRGlobalState = new WeakMap();

var FOCUS_EVENT = 0;
var RECONNECT_EVENT = 1;
var MUTATE_EVENT = 2;

var broadcastState = function (cache, key, data, error, isValidating, revalidate, broadcast) {
    if (broadcast === void 0) { broadcast = true; }
    var _a = SWRGlobalState.get(cache), EVENT_REVALIDATORS = _a[0], STATE_UPDATERS = _a[1], FETCH = _a[3];
    var revalidators = EVENT_REVALIDATORS[key];
    var updaters = STATE_UPDATERS[key];
    // Cache was populated, update states of all hooks.
    if (broadcast && updaters) {
        for (var i = 0; i < updaters.length; ++i) {
            updaters[i](data, error, isValidating);
        }
    }
    // If we also need to revalidate, only do it for the first hook.
    if (revalidate) {
        // Invalidate the key by deleting the concurrent request markers so new
        // requests will not be deduped.
        delete FETCH[key];
        if (revalidators && revalidators[0]) {
            return revalidators[0](MUTATE_EVENT).then(function () {
                return cache.get(key);
            });
        }
    }
    return cache.get(key);
};

// Global timestamp.
var __timestamp = 0;
var getTimestamp = function () { return ++__timestamp; };

var internalMutate = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var cache, _key, _data, _opts, options, populateCache, revalidate, rollbackOnError, optimisticData, _a, key, keyInfo, _b, MUTATION, data, error, beforeMutationTs, hasOptimisticData, rollbackData, res;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    cache = args[0], _key = args[1], _data = args[2], _opts = args[3];
                    options = typeof _opts === 'boolean' ? { revalidate: _opts } : _opts || {};
                    populateCache = options.populateCache !== false;
                    revalidate = options.revalidate !== false;
                    rollbackOnError = options.rollbackOnError !== false;
                    optimisticData = options.optimisticData;
                    _a = serialize(_key), key = _a[0], keyInfo = _a[2];
                    if (!key)
                        return [2 /*return*/];
                    _b = SWRGlobalState.get(cache), MUTATION = _b[2];
                    // If there is no new data provided, revalidate the key with current state.
                    if (args.length < 3) {
                        // Revalidate and broadcast state.
                        return [2 /*return*/, broadcastState(cache, key, cache.get(key), UNDEFINED, UNDEFINED, revalidate, populateCache)];
                    }
                    data = _data;
                    beforeMutationTs = getTimestamp();
                    MUTATION[key] = [beforeMutationTs, 0];
                    hasOptimisticData = !isUndefined(optimisticData);
                    rollbackData = cache.get(key);
                    // Do optimistic data update.
                    if (hasOptimisticData) {
                        cache.set(key, optimisticData);
                        broadcastState(cache, key, optimisticData);
                    }
                    if (isFunction(data)) {
                        // `data` is a function, call it passing current cache value.
                        try {
                            data = data(cache.get(key));
                        }
                        catch (err) {
                            // If it throws an error synchronously, we shouldn't update the cache.
                            error = err;
                        }
                    }
                    if (!(data && isFunction(data.then))) return [3 /*break*/, 2];
                    return [4 /*yield*/, data.catch(function (err) {
                            error = err;
                        })
                        // Check if other mutations have occurred since we've started this mutation.
                        // If there's a race we don't update cache or broadcast the change,
                        // just return the data.
                    ];
                case 1:
                    // This means that the mutation is async, we need to check timestamps to
                    // avoid race conditions.
                    data = _c.sent();
                    // Check if other mutations have occurred since we've started this mutation.
                    // If there's a race we don't update cache or broadcast the change,
                    // just return the data.
                    if (beforeMutationTs !== MUTATION[key][0]) {
                        if (error)
                            throw error;
                        return [2 /*return*/, data];
                    }
                    else if (error && hasOptimisticData && rollbackOnError) {
                        // Rollback. Always populate the cache in this case.
                        populateCache = true;
                        data = rollbackData;
                        cache.set(key, rollbackData);
                    }
                    _c.label = 2;
                case 2:
                    if (populateCache) {
                        if (!error) {
                            // Only update cached data if there's no error. Data can be `undefined` here.
                            cache.set(key, data);
                        }
                        // Always update or reset the error.
                        cache.set(keyInfo, mergeObjects(cache.get(keyInfo), { error: error }));
                    }
                    // Reset the timestamp to mark the mutation has ended.
                    MUTATION[key][1] = getTimestamp();
                    return [4 /*yield*/, broadcastState(cache, key, data, error, UNDEFINED, revalidate, populateCache)
                        // Throw error or return data
                    ];
                case 3:
                    res = _c.sent();
                    // Throw error or return data
                    if (error)
                        throw error;
                    return [2 /*return*/, populateCache ? res : data];
            }
        });
    });
};

var revalidateAllKeys = function (revalidators, type) {
    for (var key in revalidators) {
        if (revalidators[key][0])
            revalidators[key][0](type);
    }
};
var initCache = function (provider, options) {
    // The global state for a specific provider will be used to deduplicate
    // requests and store listeners. As well as a mutate function that bound to
    // the cache.
    // Provider's global state might be already initialized. Let's try to get the
    // global state associated with the provider first.
    if (!SWRGlobalState.has(provider)) {
        var opts = mergeObjects(defaultConfigOptions, options);
        // If there's no global state bound to the provider, create a new one with the
        // new mutate function.
        var EVENT_REVALIDATORS = {};
        var mutate = internalMutate.bind(UNDEFINED, provider);
        var unmount = noop;
        // Update the state if it's new, or the provider has been extended.
        SWRGlobalState.set(provider, [EVENT_REVALIDATORS, {}, {}, {}, mutate]);
        // This is a new provider, we need to initialize it and setup DOM events
        // listeners for `focus` and `reconnect` actions.
        if (!IS_SERVER) {
            // When listening to the native events for auto revalidations,
            // we intentionally put a delay (setTimeout) here to make sure they are
            // fired after immediate JavaScript executions, which can possibly be
            // React's state updates.
            // This avoids some unnecessary revalidations such as
            // https://github.com/vercel/swr/issues/1680.
            var releaseFocus_1 = opts.initFocus(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, FOCUS_EVENT)));
            var releaseReconnect_1 = opts.initReconnect(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, RECONNECT_EVENT)));
            unmount = function () {
                releaseFocus_1 && releaseFocus_1();
                releaseReconnect_1 && releaseReconnect_1();
                // When un-mounting, we need to remove the cache provider from the state
                // storage too because it's a side-effect. Otherwise when re-mounting we
                // will not re-register those event listeners.
                SWRGlobalState.delete(provider);
            };
        }
        // We might want to inject an extra layer on top of `provider` in the future,
        // such as key serialization, auto GC, etc.
        // For now, it's just a `Map` interface without any modifications.
        return [provider, mutate, unmount];
    }
    return [provider, SWRGlobalState.get(provider)[4]];
};

// error retry
var onErrorRetry = function (_, __, config, revalidate, opts) {
    var maxRetryCount = config.errorRetryCount;
    var currentRetryCount = opts.retryCount;
    // Exponential backoff
    var timeout = ~~((Math.random() + 0.5) *
        (1 << (currentRetryCount < 8 ? currentRetryCount : 8))) * config.errorRetryInterval;
    if (!isUndefined(maxRetryCount) && currentRetryCount > maxRetryCount) {
        return;
    }
    setTimeout(revalidate, timeout, opts);
};
// Default cache provider
var _a = initCache(new Map()), cache = _a[0], mutate = _a[1];
// Default config
var defaultConfig = mergeObjects({
    // events
    onLoadingSlow: noop,
    onSuccess: noop,
    onError: noop,
    onErrorRetry: onErrorRetry,
    onDiscarded: noop,
    // switches
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateIfStale: true,
    shouldRetryOnError: true,
    // timeouts
    errorRetryInterval: slowConnection ? 10000 : 5000,
    focusThrottleInterval: 5 * 1000,
    dedupingInterval: 2 * 1000,
    loadingTimeout: slowConnection ? 5000 : 3000,
    // providers
    compare: function (currentData, newData) {
        return stableHash(currentData) == stableHash(newData);
    },
    isPaused: function () { return false; },
    cache: cache,
    mutate: mutate,
    fallback: {}
}, 
// use web preset by default
preset);

var mergeConfigs = function (a, b) {
    // Need to create a new object to avoid mutating the original here.
    var v = mergeObjects(a, b);
    // If two configs are provided, merge their `use` and `fallback` options.
    if (b) {
        var u1 = a.use, f1 = a.fallback;
        var u2 = b.use, f2 = b.fallback;
        if (u1 && u2) {
            v.use = u1.concat(u2);
        }
        if (f1 && f2) {
            v.fallback = mergeObjects(f1, f2);
        }
    }
    return v;
};

var SWRConfigContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
var SWRConfig$1 = function (props) {
    var value = props.value;
    // Extend parent context values and middleware.
    var extendedConfig = mergeConfigs((0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SWRConfigContext), value);
    // Should not use the inherited provider.
    var provider = value && value.provider;
    // Use a lazy initialized state to create the cache on first access.
    var cacheContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
        return provider
            ? initCache(provider(extendedConfig.cache || cache), value)
            : UNDEFINED;
    })[0];
    // Override the cache if a new provider is given.
    if (cacheContext) {
        extendedConfig.cache = cacheContext[0];
        extendedConfig.mutate = cacheContext[1];
    }
    // Unsubscribe events.
    useIsomorphicLayoutEffect(function () { return (cacheContext ? cacheContext[2] : UNDEFINED); }, []);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SWRConfigContext.Provider, mergeObjects(props, {
        value: extendedConfig
    }));
};

/**
 * An implementation of state with dependency-tracking.
 */
var useStateWithDeps = function (state, unmountedRef) {
    var rerender = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({})[1];
    var stateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(state);
    // If a state property (data, error or isValidating) is accessed by the render
    // function, we mark the property as a dependency so if it is updated again
    // in the future, we trigger a rerender.
    // This is also known as dependency-tracking.
    var stateDependenciesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        data: false,
        error: false,
        isValidating: false
    });
    /**
     * @param payload To change stateRef, pass the values explicitly to setState:
     * @example
     * ```js
     * setState({
     *   isValidating: false
     *   data: newData // set data to newData
     *   error: undefined // set error to undefined
     * })
     *
     * setState({
     *   isValidating: false
     *   data: undefined // set data to undefined
     *   error: err // set error to err
     * })
     * ```
     */
    var setState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (payload) {
        var shouldRerender = false;
        var currentState = stateRef.current;
        for (var _ in payload) {
            var k = _;
            // If the property has changed, update the state and mark rerender as
            // needed.
            if (currentState[k] !== payload[k]) {
                currentState[k] = payload[k];
                // If the property is accessed by the component, a rerender should be
                // triggered.
                if (stateDependenciesRef.current[k]) {
                    shouldRerender = true;
                }
            }
        }
        if (shouldRerender && !unmountedRef.current) {
            rerender({});
        }
    }, 
    // config.suspense isn't allowed to change during the lifecycle
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    // Always update the state reference.
    useIsomorphicLayoutEffect(function () {
        stateRef.current = state;
    });
    return [stateRef, stateDependenciesRef.current, setState];
};

var normalize = function (args) {
    return isFunction(args[1])
        ? [args[0], args[1], args[2] || {}]
        : [args[0], null, (args[1] === null ? args[2] : args[1]) || {}];
};

var useSWRConfig = function () {
    return mergeObjects(defaultConfig, (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SWRConfigContext));
};

// It's tricky to pass generic types as parameters, so we just directly override
// the types here.
var withArgs = function (hook) {
    return function useSWRArgs() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // Get the default and inherited configuration.
        var fallbackConfig = useSWRConfig();
        // Normalize arguments.
        var _a = normalize(args), key = _a[0], fn = _a[1], _config = _a[2];
        // Merge configurations.
        var config = mergeConfigs(fallbackConfig, _config);
        // Apply middleware
        var next = hook;
        var use = config.use;
        if (use) {
            for (var i = use.length; i-- > 0;) {
                next = use[i](next);
            }
        }
        return next(key, fn || config.fetcher, config);
    };
};

// Add a callback function to a list of keyed callback functions and return
// the unsubscribe function.
var subscribeCallback = function (key, callbacks, callback) {
    var keyedRevalidators = callbacks[key] || (callbacks[key] = []);
    keyedRevalidators.push(callback);
    return function () {
        var index = keyedRevalidators.indexOf(callback);
        if (index >= 0) {
            // O(1): faster than splice
            keyedRevalidators[index] = keyedRevalidators[keyedRevalidators.length - 1];
            keyedRevalidators.pop();
        }
    };
};

var WITH_DEDUPE = { dedupe: true };
var useSWRHandler = function (_key, fetcher, config) {
    var cache = config.cache, compare = config.compare, fallbackData = config.fallbackData, suspense = config.suspense, revalidateOnMount = config.revalidateOnMount, refreshInterval = config.refreshInterval, refreshWhenHidden = config.refreshWhenHidden, refreshWhenOffline = config.refreshWhenOffline;
    var _a = SWRGlobalState.get(cache), EVENT_REVALIDATORS = _a[0], STATE_UPDATERS = _a[1], MUTATION = _a[2], FETCH = _a[3];
    // `key` is the identifier of the SWR `data` state, `keyInfo` holds extra
    // states such as `error` and `isValidating` inside,
    // all of them are derived from `_key`.
    // `fnArgs` is an array of arguments parsed from the key, which will be passed
    // to the fetcher.
    var _b = serialize(_key), key = _b[0], fnArgs = _b[1], keyInfo = _b[2];
    // If it's the initial render of this hook.
    var initialMountedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    // If the hook is unmounted already. This will be used to prevent some effects
    // to be called after unmounting.
    var unmountedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    // Refs to keep the key and config.
    var keyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(key);
    var fetcherRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(fetcher);
    var configRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(config);
    var getConfig = function () { return configRef.current; };
    var isActive = function () { return getConfig().isVisible() && getConfig().isOnline(); };
    var patchFetchInfo = function (info) {
        return cache.set(keyInfo, mergeObjects(cache.get(keyInfo), info));
    };
    // Get the current state that SWR should return.
    var cached = cache.get(key);
    var fallback = isUndefined(fallbackData)
        ? config.fallback[key]
        : fallbackData;
    var data = isUndefined(cached) ? fallback : cached;
    var info = cache.get(keyInfo) || {};
    var error = info.error;
    // - Suspense mode and there's stale data for the initial render.
    // - Not suspense mode and there is no fallback data and `revalidateIfStale` is enabled.
    // - `revalidateIfStale` is enabled but `data` is not defined.
    var shouldRevalidateOnMount = function () {
        // If `revalidateOnMount` is set, we take the value directly.
        if (!isUndefined(revalidateOnMount))
            return revalidateOnMount;
        // If it's paused, we skip revalidation.
        if (getConfig().isPaused())
            return false;
        return suspense
            ? // Under suspense mode, it will always fetch on render if there is no
                // stale data so no need to revalidate immediately on mount again.
                !isUndefined(data)
            : // If there is no stale data, we need to revalidate on mount;
                // If `revalidateIfStale` is set to true, we will always revalidate.
                isUndefined(data) || config.revalidateIfStale;
    };
    // Resolve the current validating state.
    var resolveValidating = function () {
        if (!key || !fetcher)
            return false;
        if (info.isValidating)
            return true;
        // If it's not mounted yet and it should revalidate on mount, revalidate.
        return !initialMountedRef.current && shouldRevalidateOnMount();
    };
    var isValidating = resolveValidating();
    var _c = useStateWithDeps({
        data: data,
        error: error,
        isValidating: isValidating
    }, unmountedRef), stateRef = _c[0], stateDependencies = _c[1], setState = _c[2];
    // The revalidation function is a carefully crafted wrapper of the original
    // `fetcher`, to correctly handle the many edge cases.
    var revalidate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (revalidateOpts) { return __awaiter(void 0, void 0, void 0, function () {
        var currentFetcher, newData, startAt, loading, opts, shouldStartNewRequest, isCurrentKeyMounted, cleanupState, newState, finishRequestAndUpdateState, mutationInfo, err_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    currentFetcher = fetcherRef.current;
                    if (!key ||
                        !currentFetcher ||
                        unmountedRef.current ||
                        getConfig().isPaused()) {
                        return [2 /*return*/, false];
                    }
                    loading = true;
                    opts = revalidateOpts || {};
                    shouldStartNewRequest = !FETCH[key] || !opts.dedupe;
                    isCurrentKeyMounted = function () {
                        return !unmountedRef.current &&
                            key === keyRef.current &&
                            initialMountedRef.current;
                    };
                    cleanupState = function () {
                        // Check if it's still the same request before deleting.
                        var requestInfo = FETCH[key];
                        if (requestInfo && requestInfo[1] === startAt) {
                            delete FETCH[key];
                        }
                    };
                    newState = { isValidating: false };
                    finishRequestAndUpdateState = function () {
                        patchFetchInfo({ isValidating: false });
                        // We can only set state if it's safe (still mounted with the same key).
                        if (isCurrentKeyMounted()) {
                            setState(newState);
                        }
                    };
                    // Start fetching. Change the `isValidating` state, update the cache.
                    patchFetchInfo({
                        isValidating: true
                    });
                    setState({ isValidating: true });
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    if (shouldStartNewRequest) {
                        // Tell all other hooks to change the `isValidating` state.
                        broadcastState(cache, key, stateRef.current.data, stateRef.current.error, true);
                        // If no cache being rendered currently (it shows a blank page),
                        // we trigger the loading slow event.
                        if (config.loadingTimeout && !cache.get(key)) {
                            setTimeout(function () {
                                if (loading && isCurrentKeyMounted()) {
                                    getConfig().onLoadingSlow(key, config);
                                }
                            }, config.loadingTimeout);
                        }
                        // Start the request and save the timestamp.
                        FETCH[key] = [currentFetcher.apply(void 0, fnArgs), getTimestamp()];
                    }
                    _a = FETCH[key], newData = _a[0], startAt = _a[1];
                    return [4 /*yield*/, newData];
                case 2:
                    newData = _b.sent();
                    if (shouldStartNewRequest) {
                        // If the request isn't interrupted, clean it up after the
                        // deduplication interval.
                        setTimeout(cleanupState, config.dedupingInterval);
                    }
                    // If there're other ongoing request(s), started after the current one,
                    // we need to ignore the current one to avoid possible race conditions:
                    //   req1------------------>res1        (current one)
                    //        req2---------------->res2
                    // the request that fired later will always be kept.
                    // The timestamp maybe be `undefined` or a number
                    if (!FETCH[key] || FETCH[key][1] !== startAt) {
                        if (shouldStartNewRequest) {
                            if (isCurrentKeyMounted()) {
                                getConfig().onDiscarded(key);
                            }
                        }
                        return [2 /*return*/, false];
                    }
                    // Clear error.
                    patchFetchInfo({
                        error: UNDEFINED
                    });
                    newState.error = UNDEFINED;
                    mutationInfo = MUTATION[key];
                    if (!isUndefined(mutationInfo) &&
                        // case 1
                        (startAt <= mutationInfo[0] ||
                            // case 2
                            startAt <= mutationInfo[1] ||
                            // case 3
                            mutationInfo[1] === 0)) {
                        finishRequestAndUpdateState();
                        if (shouldStartNewRequest) {
                            if (isCurrentKeyMounted()) {
                                getConfig().onDiscarded(key);
                            }
                        }
                        return [2 /*return*/, false];
                    }
                    // Deep compare with latest state to avoid extra re-renders.
                    // For local state, compare and assign.
                    if (!compare(stateRef.current.data, newData)) {
                        newState.data = newData;
                    }
                    else {
                        // data and newData are deeply equal
                        // it should be safe to broadcast the stale data
                        newState.data = stateRef.current.data;
                        // At the end of this function, `brocastState` invokes the `onStateUpdate` function,
                        // which takes care of avoiding the re-render
                    }
                    // For global state, it's possible that the key has changed.
                    // https://github.com/vercel/swr/pull/1058
                    if (!compare(cache.get(key), newData)) {
                        cache.set(key, newData);
                    }
                    // Trigger the successful callback if it's the original request.
                    if (shouldStartNewRequest) {
                        if (isCurrentKeyMounted()) {
                            getConfig().onSuccess(newData, key, config);
                        }
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _b.sent();
                    cleanupState();
                    // Not paused, we continue handling the error. Otherwise discard it.
                    if (!getConfig().isPaused()) {
                        // Get a new error, don't use deep comparison for errors.
                        patchFetchInfo({ error: err_1 });
                        newState.error = err_1;
                        // Error event and retry logic. Only for the actual request, not
                        // deduped ones.
                        if (shouldStartNewRequest && isCurrentKeyMounted()) {
                            getConfig().onError(err_1, key, config);
                            if ((typeof config.shouldRetryOnError === 'boolean' &&
                                config.shouldRetryOnError) ||
                                (isFunction(config.shouldRetryOnError) &&
                                    config.shouldRetryOnError(err_1))) {
                                // When retrying, dedupe is always enabled
                                if (isActive()) {
                                    // If it's active, stop. It will auto revalidate when refocusing
                                    // or reconnecting.
                                    getConfig().onErrorRetry(err_1, key, config, revalidate, {
                                        retryCount: (opts.retryCount || 0) + 1,
                                        dedupe: true
                                    });
                                }
                            }
                        }
                    }
                    return [3 /*break*/, 4];
                case 4:
                    // Mark loading as stopped.
                    loading = false;
                    // Update the current hook's state.
                    finishRequestAndUpdateState();
                    // Here is the source of the request, need to tell all other hooks to
                    // update their states.
                    if (isCurrentKeyMounted() && shouldStartNewRequest) {
                        broadcastState(cache, key, newState.data, newState.error, false);
                    }
                    return [2 /*return*/, true];
            }
        });
    }); }, 
    // `setState` is immutable, and `eventsCallback`, `fnArgs`, `keyInfo`,
    // and `keyValidating` are depending on `key`, so we can exclude them from
    // the deps array.
    //
    // FIXME:
    // `fn` and `config` might be changed during the lifecycle,
    // but they might be changed every render like this.
    // `useSWR('key', () => fetch('/api/'), { suspense: true })`
    // So we omit the values from the deps array
    // even though it might cause unexpected behaviors.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key]);
    // Similar to the global mutate, but bound to the current cache and key.
    // `cache` isn't allowed to change during the lifecycle.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    var boundMutate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    // By using `bind` we don't need to modify the size of the rest arguments.
    internalMutate.bind(UNDEFINED, cache, function () { return keyRef.current; }), 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    // Always update fetcher and config refs.
    useIsomorphicLayoutEffect(function () {
        fetcherRef.current = fetcher;
        configRef.current = config;
    });
    // After mounted or key changed.
    useIsomorphicLayoutEffect(function () {
        if (!key)
            return;
        // Not the initial render.
        var keyChanged = initialMountedRef.current;
        var softRevalidate = revalidate.bind(UNDEFINED, WITH_DEDUPE);
        // Expose state updater to global event listeners. So we can update hook's
        // internal state from the outside.
        var onStateUpdate = function (updatedData, updatedError, updatedIsValidating) {
            setState(mergeObjects({
                error: updatedError,
                isValidating: updatedIsValidating
            }, 
            // Since `setState` only shallowly compares states, we do a deep
            // comparison here.
            compare(stateRef.current.data, updatedData)
                ? UNDEFINED
                : {
                    data: updatedData
                }));
        };
        // Expose revalidators to global event listeners. So we can trigger
        // revalidation from the outside.
        var nextFocusRevalidatedAt = 0;
        var onRevalidate = function (type) {
            if (type == FOCUS_EVENT) {
                var now = Date.now();
                if (getConfig().revalidateOnFocus &&
                    now > nextFocusRevalidatedAt &&
                    isActive()) {
                    nextFocusRevalidatedAt = now + getConfig().focusThrottleInterval;
                    softRevalidate();
                }
            }
            else if (type == RECONNECT_EVENT) {
                if (getConfig().revalidateOnReconnect && isActive()) {
                    softRevalidate();
                }
            }
            else if (type == MUTATE_EVENT) {
                return revalidate();
            }
            return;
        };
        var unsubUpdate = subscribeCallback(key, STATE_UPDATERS, onStateUpdate);
        var unsubEvents = subscribeCallback(key, EVENT_REVALIDATORS, onRevalidate);
        // Mark the component as mounted and update corresponding refs.
        unmountedRef.current = false;
        keyRef.current = key;
        initialMountedRef.current = true;
        // When `key` updates, reset the state to the initial value
        // and trigger a rerender if necessary.
        if (keyChanged) {
            setState({
                data: data,
                error: error,
                isValidating: isValidating
            });
        }
        // Trigger a revalidation.
        if (shouldRevalidateOnMount()) {
            if (isUndefined(data) || IS_SERVER) {
                // Revalidate immediately.
                softRevalidate();
            }
            else {
                // Delay the revalidate if we have data to return so we won't block
                // rendering.
                rAF(softRevalidate);
            }
        }
        return function () {
            // Mark it as unmounted.
            unmountedRef.current = true;
            unsubUpdate();
            unsubEvents();
        };
    }, [key, revalidate]);
    // Polling
    useIsomorphicLayoutEffect(function () {
        var timer;
        function next() {
            // Use the passed interval
            // ...or invoke the function with the updated data to get the interval
            var interval = isFunction(refreshInterval)
                ? refreshInterval(data)
                : refreshInterval;
            // We only start next interval if `refreshInterval` is not 0, and:
            // - `force` is true, which is the start of polling
            // - or `timer` is not 0, which means the effect wasn't canceled
            if (interval && timer !== -1) {
                timer = setTimeout(execute, interval);
            }
        }
        function execute() {
            // Check if it's OK to execute:
            // Only revalidate when the page is visible, online and not errored.
            if (!stateRef.current.error &&
                (refreshWhenHidden || getConfig().isVisible()) &&
                (refreshWhenOffline || getConfig().isOnline())) {
                revalidate(WITH_DEDUPE).then(next);
            }
            else {
                // Schedule next interval to check again.
                next();
            }
        }
        next();
        return function () {
            if (timer) {
                clearTimeout(timer);
                timer = -1;
            }
        };
    }, [refreshInterval, refreshWhenHidden, refreshWhenOffline, revalidate]);
    // Display debug info in React DevTools.
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(data);
    // In Suspense mode, we can't return the empty `data` state.
    // If there is `error`, the `error` needs to be thrown to the error boundary.
    // If there is no `error`, the `revalidation` promise needs to be thrown to
    // the suspense boundary.
    if (suspense && isUndefined(data) && key) {
        // Always update fetcher and config refs even with the Suspense mode.
        fetcherRef.current = fetcher;
        configRef.current = config;
        throw isUndefined(error) ? revalidate(WITH_DEDUPE) : error;
    }
    return {
        mutate: boundMutate,
        get data() {
            stateDependencies.data = true;
            return data;
        },
        get error() {
            stateDependencies.error = true;
            return error;
        },
        get isValidating() {
            stateDependencies.isValidating = true;
            return isValidating;
        }
    };
};
var SWRConfig = OBJECT.defineProperty(SWRConfig$1, 'default', {
    value: defaultConfig
});
var unstable_serialize = function (key) { return serialize(key)[0]; };
var useSWR = withArgs(useSWRHandler);

// useSWR




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FQ3%2Fmovies33&absolutePagePath=C%3A%5CUsers%5CHP%5Creceita6%5Cpages%5CQ3%5Cmovies33.js!"));
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1EzL21vdmllczMzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy9vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovL19OX0UvIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtaG9vay1mb3JtL2Rpc3QvaW5kZXguZXNtLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3dyL2Rpc3QvaW5kZXgubWpzIl0sIm5hbWVzIjpbIk1vdmllczMzIiwidXNlU3RhdGUiLCJ1cmwiLCJ0aXRsZVNlYXJjaFN0cmluZyIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VTV1IiLCJ1IiwiU2VhcmNoIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSIsImVycm9yIiwib25DbGlja0hhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiVGhlTW92aWVzIiwic2hvdyIsIlJlc3BvbnNlIiwibWFwIiwibSIsImltZGJJRCIsIlRpdGxlIiwiWWVhciIsIlRoZUZvcm0iLCJmaWx0cm8iLCJhY2FvIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwid2F0Y2giLCJlcnJvcnMiLCJmb3JtU3RhdGUiLCJyZXF1aXJlZCIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsInllYXJTZWFyY2hOdW1iZXIiLCJUaGVMaW5rIiwiaGFuZGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ2xDZTtBQUNmO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7QUNoQkEsZ0hBQStDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0EvQztBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULEdBQW1CO0FBQUE7O0FBQUEsa0JBRUpDLCtDQUFRLENBQUM7QUFBQ0MsT0FBRyxFQUFDLEVBQUw7QUFBU0MscUJBQWlCLEVBQUM7QUFBM0IsR0FBRCxDQUZKO0FBQUEsTUFFdkJDLEtBRnVCO0FBQUEsTUFFaEJDLFFBRmdCOztBQUFBLGdCQUlSQyw0Q0FBTSxDQUFDRixLQUFLLENBQUNGLEdBQVA7QUFBQSx5UEFBWSxpQkFBT0ssQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFFaEMsQ0FBQ0gsS0FBSyxDQUFDRixHQUFQLElBQWMsQ0FBQ0UsS0FBSyxDQUFDRCxpQkFGVztBQUFBO0FBQUE7QUFBQTs7QUFBQSwr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O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRixxQ0FBcUMsVUFBVSxLQUFLLEtBQUssa0NBQWtDO0FBQzVLLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbURBQW1EOztBQUVuRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBLHlDQUF5QztBQUN6Qzs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCO0FBQ0EsU0FBUztBQUNULHdCQUF3QjtBQUN4QjtBQUNBLFNBQVM7QUFDVCx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1QseUJBQXlCO0FBQ3pCO0FBQ0EsU0FBUztBQUNULGtDQUFrQztBQUNsQztBQUNBLFNBQVM7QUFDVCw0QkFBNEI7QUFDNUI7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwREFBMEQ7O0FBRTFEO0FBQ0E7O0FBRUE7QUFDQSwwREFBMEQ7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7OztBQUdSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksa0JBQWtCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOzs7QUFHakI7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSEFBMEg7QUFDMUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtRUFBbUU7O0FBRW5FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsRUFBRTtBQUNiOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwREFBMEQ7QUFDMUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixXQUFXLEVBQUU7QUFDYjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4Qjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDJDQUEyQzs7QUFFM0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4Qjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1Q0FBdUM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCO0FBQ2hCLGlCQUFpQjtBQUNqQixxQkFBcUI7QUFDckIsMERBQTBEO0FBQzFELG9CQUFvQjtBQUNwQixxQkFBcUI7QUFDckIscUJBQXFCO0FBQ3JCLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLHNCQUFzQjtBQUN0QixZQUFZO0FBQ1osWUFBWTtBQUNaLG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEIscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQiwyQkFBMkI7QUFDM0IsdUJBQXVCO0FBQ3ZCLGVBQWU7QUFDZixrQkFBa0I7QUFDbEIsY0FBYztBQUNkLGdCQUFnQjtBQUNoQixlQUFlO0FBQ2YsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUM1eEVhOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQztBQUNELEVBQUUsdUhBQXNEO0FBQ3hEOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSUFBSSxvREFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QseUNBQXlDLDBCQUEwQjtBQUNuRTs7QUFFQTs7QUFFa0YiLCJmaWxlIjoic3RhdGljL2NodW5rcy9wYWdlcy9RMy9tb3ZpZXMzMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllczMzKCl7XHJcblxyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7dXJsOicnLCB0aXRsZVNlYXJjaFN0cmluZzonJ30pXHJcblxyXG4gICAgY29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUihzdGF0ZS51cmwsIGFzeW5jICh1KSA9PiB7XHJcblxyXG4gICAgICAgIGlmICghc3RhdGUudXJsIHx8ICFzdGF0ZS50aXRsZVNlYXJjaFN0cmluZykgcmV0dXJuIHtTZWFyY2g6Jyd9XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZS51cmwgPT09ICcnIHx8IHN0YXRlLnRpdGxlU2VhcmNoU3RyaW5nID09PScnKSByZXR1cm4ge1NlYXJjaDonJ31cclxuXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7c3RhdGUudXJsfS8/YXBpS2V5PTVjNjU4MjkxJnM9JHtzdGF0ZS50aXRsZVNlYXJjaFN0cmluZ31gKVxyXG5cclxuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGpzb247XHJcblxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBvbkNsaWNrSGFuZGxlciA9IGUgPT4ge1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgbGV0IHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVTZWFyY2hTdHJpbmcnKS52YWx1ZVxyXG5cclxuICAgICAgICBpZiAoc3RhdGUudXJsID09PSAnJykge1xyXG5cclxuICAgICAgICAgICAgc2V0U3RhdGUoe3VybDonaHR0cDovL3d3dy5vbWRiYXBpLmNvbScsdGl0bGVTZWFyY2hTdHJpbmc6c30pXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSBzZXRTdGF0ZSh7dXJsOicnLHRpdGxlU2VhcmNoU3RyaW5nOiBzdGF0ZS50aXRsZVNlYXJjaFN0cmluZ30pXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgIDxUaGVGb3JtLz5cclxuXHJcbiAgICAgICAgICAgIDxUaGVMaW5rIHVybD17c3RhdGUudXJsfSBoYW5kbGVyPXtvbkNsaWNrSGFuZGxlcn0gLz5cclxuXHJcbiAgICAgICAgICAgIDxUaGVNb3ZpZXMgZGF0YT17ZGF0YSA/IGRhdGE6IHtTZWFyY2g6Jyd9IH0gc2hvdz17c3RhdGUudXJsICE9PSAnJ30gLz5cclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGhlTW92aWVzKHtkYXRhLHNob3d9KXtcclxuXHJcbiAgICBpZiAoIXNob3cpIHJldHVybiAoPGRpdj48L2Rpdj4pXHJcblxyXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gKDxkaXY+PC9kaXY+KVxyXG5cclxuICAgIGlmIChkYXRhLmVycm9yKSByZXR1cm4gKDxkaXY+ZmFsaGEgbmEgcGVzcXVpc2E8L2Rpdj4pXHJcblxyXG4gICAgaWYgKGRhdGEuU2VhcmNoID09PSAnJyApIHJldHVybiAoPGRpdj5jYXJyZWdhbmRvLi4uPC9kaXY+KVxyXG5cclxuICAgIGlmKGRhdGEuUmVzcG9uc2UgPT0gJ0ZhbHNlJykgcmV0dXJuICg8ZGl2PlBlc3F1aXNhIE7Do28gZW5jb250cmFkYSwgdGVudGUgbm92YW1lbnRlLjwvZGl2PilcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgeyBkYXRhLlNlYXJjaC5tYXAoIChtKSA9PiA8ZGl2IGtleT17bS5pbWRiSUR9PnttLlRpdGxlfSAtLS0ge20uWWVhcn08L2Rpdj4gICkgfSAgICAgICAgICAgIFxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcblxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBUaGVGb3JtKHtmaWx0cm8sIHVybCwgYWNhb30pe1xyXG5cclxuICAgIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgd2F0Y2gsIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSB9ID0gdXNlRm9ybSgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nZm9ybS1zZWFyY2gtbW92aWUnIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoYWNhbyl9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVNlYXJjaFN0cmluZ1wiPntmaWx0cm99PC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0aXRsZVNlYXJjaFN0cmluZ1wiIFxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcInRpdGxlU2VhcmNoU3RyaW5nXCIsIHsgcmVxdWlyZWQ6IHRydWUsIG1pbkxlbmd0aDogM30pfSBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdUw610dWxvJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLnRpdGxlU2VhcmNoU3RyaW5nICYmIDxzcGFuPkluc2lyYSBubyBtw61uaW1vIHRyw6pzIGNhcmFjdGVyZXMgICA8L3NwYW4+fVxyXG5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInllYXJTZWFyY2hOdW1iZXJcIiBcclxuICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJ5ZWFyU2VhcmNoTnVtYmVyXCIsIHsgcmVxdWlyZWQ6IHRydWUsIG1pbkxlbmd0aDogNCwgbWF4TGVuZ3RoOiA0IH0pfSBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdBbm8nXHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMueWVhclNlYXJjaE51bWJlciAmJiA8c3Bhbj4gSW5zaXJhIHVtIGFubyB2w6FsaWRvIDwvc3Bhbj4gfVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPnt1cmwgPT09ICcnID8gJ01vc3RyYXInIDogJ09jdWx0YXInfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gVGhlTGluayh7dXJsLCBoYW5kbGVyfSl7XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvbW92aWVzMy5qc1wiIG9uQ2xpY2s9e2hhbmRsZXJ9PiB7dXJsID09PSAnJyA/ICdNb3N0cmFyJyA6ICdPY3VsdGFyJ30gPC9hPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcblxyXG59IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIGFzc2lnbj1PYmplY3QuYXNzaWduLmJpbmQoT2JqZWN0KTttb2R1bGUuZXhwb3J0cz1hc3NpZ247bW9kdWxlLmV4cG9ydHMuZGVmYXVsdD1tb2R1bGUuZXhwb3J0cztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9iamVjdC1hc3NpZ24uanMubWFwIiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9RMy9tb3ZpZXMzM1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEhQXFxcXHJlY2VpdGE2XFxcXHBhZ2VzXFxcXFEzXFxcXG1vdmllczMzLmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG52YXIgaXNDaGVja0JveElucHV0ID0gKGVsZW1lbnQpID0+IGVsZW1lbnQudHlwZSA9PT0gJ2NoZWNrYm94JztcblxudmFyIGlzRGF0ZU9iamVjdCA9ICh2YWx1ZSkgPT4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlO1xuXG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSAodmFsdWUpID0+IHZhbHVlID09IG51bGw7XG5cbmNvbnN0IGlzT2JqZWN0VHlwZSA9ICh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JztcclxudmFyIGlzT2JqZWN0ID0gKHZhbHVlKSA9PiAhaXNOdWxsT3JVbmRlZmluZWQodmFsdWUpICYmXHJcbiAgICAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiZcclxuICAgIGlzT2JqZWN0VHlwZSh2YWx1ZSkgJiZcclxuICAgICFpc0RhdGVPYmplY3QodmFsdWUpO1xuXG52YXIgZ2V0RXZlbnRWYWx1ZSA9IChldmVudCkgPT4gaXNPYmplY3QoZXZlbnQpICYmIGV2ZW50LnRhcmdldFxyXG4gICAgPyBpc0NoZWNrQm94SW5wdXQoZXZlbnQudGFyZ2V0KVxyXG4gICAgICAgID8gZXZlbnQudGFyZ2V0LmNoZWNrZWRcclxuICAgICAgICA6IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgOiBldmVudDtcblxudmFyIGdldE5vZGVQYXJlbnROYW1lID0gKG5hbWUpID0+IG5hbWUuc3Vic3RyaW5nKDAsIG5hbWUuc2VhcmNoKC8uXFxkLykpIHx8IG5hbWU7XG5cbnZhciBpc05hbWVJbkZpZWxkQXJyYXkgPSAobmFtZXMsIG5hbWUpID0+IFsuLi5uYW1lc10uc29tZSgoY3VycmVudCkgPT4gZ2V0Tm9kZVBhcmVudE5hbWUobmFtZSkgPT09IGN1cnJlbnQpO1xuXG52YXIgY29tcGFjdCA9ICh2YWx1ZSkgPT4gdmFsdWUuZmlsdGVyKEJvb2xlYW4pO1xuXG52YXIgaXNVbmRlZmluZWQgPSAodmFsKSA9PiB2YWwgPT09IHVuZGVmaW5lZDtcblxudmFyIGdldCA9IChvYmosIHBhdGgsIGRlZmF1bHRWYWx1ZSkgPT4ge1xyXG4gICAgaWYgKCFwYXRoIHx8ICFpc09iamVjdChvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdCA9IGNvbXBhY3QocGF0aC5zcGxpdCgvWyxbXFxdLl0rPy8pKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiBpc051bGxPclVuZGVmaW5lZChyZXN1bHQpID8gcmVzdWx0IDogcmVzdWx0W2tleV0sIG9iaik7XHJcbiAgICByZXR1cm4gaXNVbmRlZmluZWQocmVzdWx0KSB8fCByZXN1bHQgPT09IG9ialxyXG4gICAgICAgID8gaXNVbmRlZmluZWQob2JqW3BhdGhdKVxyXG4gICAgICAgICAgICA/IGRlZmF1bHRWYWx1ZVxyXG4gICAgICAgICAgICA6IG9ialtwYXRoXVxyXG4gICAgICAgIDogcmVzdWx0O1xyXG59O1xuXG5jb25zdCBFVkVOVFMgPSB7XHJcbiAgICBCTFVSOiAnYmx1cicsXHJcbiAgICBGT0NVU19PVVQ6ICdmb2N1c291dCcsXHJcbiAgICBDSEFOR0U6ICdjaGFuZ2UnLFxyXG59O1xyXG5jb25zdCBWQUxJREFUSU9OX01PREUgPSB7XHJcbiAgICBvbkJsdXI6ICdvbkJsdXInLFxyXG4gICAgb25DaGFuZ2U6ICdvbkNoYW5nZScsXHJcbiAgICBvblN1Ym1pdDogJ29uU3VibWl0JyxcclxuICAgIG9uVG91Y2hlZDogJ29uVG91Y2hlZCcsXHJcbiAgICBhbGw6ICdhbGwnLFxyXG59O1xyXG5jb25zdCBJTlBVVF9WQUxJREFUSU9OX1JVTEVTID0ge1xyXG4gICAgbWF4OiAnbWF4JyxcclxuICAgIG1pbjogJ21pbicsXHJcbiAgICBtYXhMZW5ndGg6ICdtYXhMZW5ndGgnLFxyXG4gICAgbWluTGVuZ3RoOiAnbWluTGVuZ3RoJyxcclxuICAgIHBhdHRlcm46ICdwYXR0ZXJuJyxcclxuICAgIHJlcXVpcmVkOiAncmVxdWlyZWQnLFxyXG4gICAgdmFsaWRhdGU6ICd2YWxpZGF0ZScsXHJcbn07XG5cbnZhciBvbWl0ID0gKHNvdXJjZSwga2V5KSA9PiB7XHJcbiAgICBjb25zdCBjb3B5ID0gT2JqZWN0LmFzc2lnbih7fSwgc291cmNlKTtcclxuICAgIGRlbGV0ZSBjb3B5W2tleV07XHJcbiAgICByZXR1cm4gY29weTtcclxufTtcblxuY29uc3QgSG9va0Zvcm1Db250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcclxuLyoqXHJcbiAqIFRoaXMgY3VzdG9tIGhvb2sgYWxsb3dzIHlvdSB0byBhY2Nlc3MgdGhlIGZvcm0gY29udGV4dC4gdXNlRm9ybUNvbnRleHQgaXMgaW50ZW5kZWQgdG8gYmUgdXNlZCBpbiBkZWVwbHkgbmVzdGVkIHN0cnVjdHVyZXMsIHdoZXJlIGl0IHdvdWxkIGJlY29tZSBpbmNvbnZlbmllbnQgdG8gcGFzcyB0aGUgY29udGV4dCBhcyBhIHByb3AuIFRvIGJlIHVzZWQgd2l0aCB7QGxpbmsgRm9ybVByb3ZpZGVyfS5cclxuICpcclxuICogQHJlbWFya3NcclxuICogW0FQSV0oaHR0cHM6Ly9yZWFjdC1ob29rLWZvcm0uY29tL2FwaS91c2Vmb3JtY29udGV4dCkg4oCiIFtEZW1vXShodHRwczovL2NvZGVzYW5kYm94LmlvL3MvcmVhY3QtaG9vay1mb3JtLXY3LWZvcm0tY29udGV4dC15dHVkaSlcclxuICpcclxuICogQHJldHVybnMgcmV0dXJuIGFsbCB1c2VGb3JtIG1ldGhvZHNcclxuICpcclxuICogQGV4YW1wbGVcclxuICogYGBgdHN4XHJcbiAqIGZ1bmN0aW9uIEFwcCgpIHtcclxuICogICBjb25zdCBtZXRob2RzID0gdXNlRm9ybSgpO1xyXG4gKiAgIGNvbnN0IG9uU3VibWl0ID0gZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKTtcclxuICpcclxuICogICByZXR1cm4gKFxyXG4gKiAgICAgPEZvcm1Qcm92aWRlciB7Li4ubWV0aG9kc30gPlxyXG4gKiAgICAgICA8Zm9ybSBvblN1Ym1pdD17bWV0aG9kcy5oYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuICogICAgICAgICA8TmVzdGVkSW5wdXQgLz5cclxuICogICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIC8+XHJcbiAqICAgICAgIDwvZm9ybT5cclxuICogICAgIDwvRm9ybVByb3ZpZGVyPlxyXG4gKiAgICk7XHJcbiAqIH1cclxuICpcclxuICogIGZ1bmN0aW9uIE5lc3RlZElucHV0KCkge1xyXG4gKiAgIGNvbnN0IHsgcmVnaXN0ZXIgfSA9IHVzZUZvcm1Db250ZXh0KCk7IC8vIHJldHJpZXZlIGFsbCBob29rIG1ldGhvZHNcclxuICogICByZXR1cm4gPGlucHV0IHsuLi5yZWdpc3RlcihcInRlc3RcIil9IC8+O1xyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKi9cclxuY29uc3QgdXNlRm9ybUNvbnRleHQgPSAoKSA9PiBSZWFjdC51c2VDb250ZXh0KEhvb2tGb3JtQ29udGV4dCk7XHJcbi8qKlxyXG4gKiBBIHByb3ZpZGVyIGNvbXBvbmVudCB0aGF0IHByb3BhZ2F0ZXMgdGhlIGB1c2VGb3JtYCBtZXRob2RzIHRvIGFsbCBjaGlsZHJlbiBjb21wb25lbnRzIHZpYSBbUmVhY3QgQ29udGV4dF0oaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2NvbnRleHQuaHRtbCkgQVBJLiBUbyBiZSB1c2VkIHdpdGgge0BsaW5rIHVzZUZvcm1Db250ZXh0fS5cclxuICpcclxuICogQHJlbWFya3NcclxuICogW0FQSV0oaHR0cHM6Ly9yZWFjdC1ob29rLWZvcm0uY29tL2FwaS91c2Vmb3JtY29udGV4dCkg4oCiIFtEZW1vXShodHRwczovL2NvZGVzYW5kYm94LmlvL3MvcmVhY3QtaG9vay1mb3JtLXY3LWZvcm0tY29udGV4dC15dHVkaSlcclxuICpcclxuICogQHBhcmFtIHByb3BzIC0gYWxsIHVzZUZyb20gbWV0aG9kc1xyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBgYGB0c3hcclxuICogZnVuY3Rpb24gQXBwKCkge1xyXG4gKiAgIGNvbnN0IG1ldGhvZHMgPSB1c2VGb3JtKCk7XHJcbiAqICAgY29uc3Qgb25TdWJtaXQgPSBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gKlxyXG4gKiAgIHJldHVybiAoXHJcbiAqICAgICA8Rm9ybVByb3ZpZGVyIHsuLi5tZXRob2RzfSA+XHJcbiAqICAgICAgIDxmb3JtIG9uU3VibWl0PXttZXRob2RzLmhhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG4gKiAgICAgICAgIDxOZXN0ZWRJbnB1dCAvPlxyXG4gKiAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgLz5cclxuICogICAgICAgPC9mb3JtPlxyXG4gKiAgICAgPC9Gb3JtUHJvdmlkZXI+XHJcbiAqICAgKTtcclxuICogfVxyXG4gKlxyXG4gKiAgZnVuY3Rpb24gTmVzdGVkSW5wdXQoKSB7XHJcbiAqICAgY29uc3QgeyByZWdpc3RlciB9ID0gdXNlRm9ybUNvbnRleHQoKTsgLy8gcmV0cmlldmUgYWxsIGhvb2sgbWV0aG9kc1xyXG4gKiAgIHJldHVybiA8aW5wdXQgey4uLnJlZ2lzdGVyKFwidGVzdFwiKX0gLz47XHJcbiAqIH1cclxuICogYGBgXHJcbiAqL1xyXG5jb25zdCBGb3JtUHJvdmlkZXIgPSAocHJvcHMpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KEhvb2tGb3JtQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogb21pdChwcm9wcywgJ2NoaWxkcmVuJykgfSwgcHJvcHMuY2hpbGRyZW4pKTtcblxudmFyIGdldFByb3h5Rm9ybVN0YXRlID0gKGZvcm1TdGF0ZSwgX3Byb3h5Rm9ybVN0YXRlLCBsb2NhbFByb3h5Rm9ybVN0YXRlLCBpc1Jvb3QgPSB0cnVlKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGZvcm1TdGF0ZSkge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXN1bHQsIGtleSwge1xyXG4gICAgICAgICAgICBnZXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IF9rZXkgPSBrZXk7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3Byb3h5Rm9ybVN0YXRlW19rZXldICE9PSBWQUxJREFUSU9OX01PREUuYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3Byb3h5Rm9ybVN0YXRlW19rZXldID0gIWlzUm9vdCB8fCBWQUxJREFUSU9OX01PREUuYWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbG9jYWxQcm94eUZvcm1TdGF0ZSAmJiAobG9jYWxQcm94eUZvcm1TdGF0ZVtfa2V5XSA9IHRydWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1TdGF0ZVtfa2V5XTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XG5cbnZhciBpc0VtcHR5T2JqZWN0ID0gKHZhbHVlKSA9PiBpc09iamVjdCh2YWx1ZSkgJiYgIU9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGg7XG5cbnZhciBzaG91bGRSZW5kZXJGb3JtU3RhdGUgPSAoZm9ybVN0YXRlRGF0YSwgX3Byb3h5Rm9ybVN0YXRlLCBpc1Jvb3QpID0+IHtcclxuICAgIGNvbnN0IGZvcm1TdGF0ZSA9IG9taXQoZm9ybVN0YXRlRGF0YSwgJ25hbWUnKTtcclxuICAgIHJldHVybiAoaXNFbXB0eU9iamVjdChmb3JtU3RhdGUpIHx8XHJcbiAgICAgICAgT2JqZWN0LmtleXMoZm9ybVN0YXRlKS5sZW5ndGggPj0gT2JqZWN0LmtleXMoX3Byb3h5Rm9ybVN0YXRlKS5sZW5ndGggfHxcclxuICAgICAgICBPYmplY3Qua2V5cyhmb3JtU3RhdGUpLmZpbmQoKGtleSkgPT4gX3Byb3h5Rm9ybVN0YXRlW2tleV0gPT09XHJcbiAgICAgICAgICAgICghaXNSb290IHx8IFZBTElEQVRJT05fTU9ERS5hbGwpKSk7XHJcbn07XG5cbnZhciBjb252ZXJ0VG9BcnJheVBheWxvYWQgPSAodmFsdWUpID0+IChBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXSk7XG5cbnZhciBzaG91bGRTdWJzY3JpYmVCeU5hbWUgPSAobmFtZSwgc2lnbmFsTmFtZSwgZXhhY3QpID0+IGV4YWN0ICYmIHNpZ25hbE5hbWVcclxuICAgID8gbmFtZSA9PT0gc2lnbmFsTmFtZVxyXG4gICAgOiAhbmFtZSB8fFxyXG4gICAgICAgICFzaWduYWxOYW1lIHx8XHJcbiAgICAgICAgbmFtZSA9PT0gc2lnbmFsTmFtZSB8fFxyXG4gICAgICAgIGNvbnZlcnRUb0FycmF5UGF5bG9hZChuYW1lKS5zb21lKChjdXJyZW50TmFtZSkgPT4gY3VycmVudE5hbWUgJiZcclxuICAgICAgICAgICAgKGN1cnJlbnROYW1lLnN0YXJ0c1dpdGgoc2lnbmFsTmFtZSkgfHxcclxuICAgICAgICAgICAgICAgIHNpZ25hbE5hbWUuc3RhcnRzV2l0aChjdXJyZW50TmFtZSkpKTtcblxuZnVuY3Rpb24gdXNlU3Vic2NyaWJlKHByb3BzKSB7XHJcbiAgICBjb25zdCBfcHJvcHMgPSBSZWFjdC51c2VSZWYocHJvcHMpO1xyXG4gICAgX3Byb3BzLmN1cnJlbnQgPSBwcm9wcztcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGVhckRvd24gPSAoc3Vic2NyaXB0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSAhcHJvcHMuZGlzYWJsZWQgJiZcclxuICAgICAgICAgICAgX3Byb3BzLmN1cnJlbnQuc3ViamVjdC5zdWJzY3JpYmUoe1xyXG4gICAgICAgICAgICAgICAgbmV4dDogX3Byb3BzLmN1cnJlbnQuY2FsbGJhY2ssXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB0ZWFyRG93bihzdWJzY3JpcHRpb24pO1xyXG4gICAgfSwgW3Byb3BzLmRpc2FibGVkXSk7XHJcbn1cblxuLyoqXHJcbiAqIFRoaXMgY3VzdG9tIGhvb2sgYWxsb3dzIHlvdSB0byBzdWJzY3JpYmUgdG8gZWFjaCBmb3JtIHN0YXRlLCBhbmQgaXNvbGF0ZSB0aGUgcmUtcmVuZGVyIGF0IHRoZSBjdXN0b20gaG9vayBsZXZlbC4gSXQgaGFzIGl0cyBzY29wZSBpbiB0ZXJtcyBvZiBmb3JtIHN0YXRlIHN1YnNjcmlwdGlvbiwgc28gaXQgd291bGQgbm90IGFmZmVjdCBvdGhlciB1c2VGb3JtU3RhdGUgYW5kIHVzZUZvcm0uIFVzaW5nIHRoaXMgaG9vayBjYW4gcmVkdWNlIHRoZSByZS1yZW5kZXIgaW1wYWN0IG9uIGxhcmdlIGFuZCBjb21wbGV4IGZvcm0gYXBwbGljYXRpb24uXHJcbiAqXHJcbiAqIEByZW1hcmtzXHJcbiAqIFtBUEldKGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkvdXNlZm9ybXN0YXRlKSDigKIgW0RlbW9dKGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy91c2Vmb3Jtc3RhdGUtNzV4bHkpXHJcbiAqXHJcbiAqIEBwYXJhbSBwcm9wcyAtIGluY2x1ZGUgb3B0aW9ucyBvbiBzcGVjaWZ5IGZpZWxkcyB0byBzdWJzY3JpYmUuIHtAbGluayBVc2VGb3JtU3RhdGVSZXR1cm59XHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIGBgYHRzeFxyXG4gKiBmdW5jdGlvbiBBcHAoKSB7XHJcbiAqICAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBjb250cm9sIH0gPSB1c2VGb3JtKHtcclxuICogICAgIGRlZmF1bHRWYWx1ZXM6IHtcclxuICogICAgIGZpcnN0TmFtZTogXCJmaXJzdE5hbWVcIlxyXG4gKiAgIH19KTtcclxuICogICBjb25zdCB7IGRpcnR5RmllbGRzIH0gPSB1c2VGb3JtU3RhdGUoe1xyXG4gKiAgICAgY29udHJvbFxyXG4gKiAgIH0pO1xyXG4gKiAgIGNvbnN0IG9uU3VibWl0ID0gKGRhdGEpID0+IGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gKlxyXG4gKiAgIHJldHVybiAoXHJcbiAqICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcbiAqICAgICAgIDxpbnB1dCB7Li4ucmVnaXN0ZXIoXCJmaXJzdE5hbWVcIil9IHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiIC8+XHJcbiAqICAgICAgIHtkaXJ0eUZpZWxkcy5maXJzdE5hbWUgJiYgPHA+RmllbGQgaXMgZGlydHkuPC9wPn1cclxuICogICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiAvPlxyXG4gKiAgICAgPC9mb3JtPlxyXG4gKiAgICk7XHJcbiAqIH1cclxuICogYGBgXHJcbiAqL1xyXG5mdW5jdGlvbiB1c2VGb3JtU3RhdGUocHJvcHMpIHtcclxuICAgIGNvbnN0IG1ldGhvZHMgPSB1c2VGb3JtQ29udGV4dCgpO1xyXG4gICAgY29uc3QgeyBjb250cm9sID0gbWV0aG9kcy5jb250cm9sLCBkaXNhYmxlZCwgbmFtZSwgZXhhY3QgfSA9IHByb3BzIHx8IHt9O1xyXG4gICAgY29uc3QgW2Zvcm1TdGF0ZSwgdXBkYXRlRm9ybVN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKGNvbnRyb2wuX2Zvcm1TdGF0ZSk7XHJcbiAgICBjb25zdCBfbG9jYWxQcm94eUZvcm1TdGF0ZSA9IFJlYWN0LnVzZVJlZih7XHJcbiAgICAgICAgaXNEaXJ0eTogZmFsc2UsXHJcbiAgICAgICAgZGlydHlGaWVsZHM6IGZhbHNlLFxyXG4gICAgICAgIHRvdWNoZWRGaWVsZHM6IGZhbHNlLFxyXG4gICAgICAgIGlzVmFsaWRhdGluZzogZmFsc2UsXHJcbiAgICAgICAgaXNWYWxpZDogZmFsc2UsXHJcbiAgICAgICAgZXJyb3JzOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgX25hbWUgPSBSZWFjdC51c2VSZWYobmFtZSk7XHJcbiAgICBjb25zdCBfbW91bnRlZCA9IFJlYWN0LnVzZVJlZih0cnVlKTtcclxuICAgIF9uYW1lLmN1cnJlbnQgPSBuYW1lO1xyXG4gICAgY29uc3QgY2FsbGJhY2sgPSBSZWFjdC51c2VDYWxsYmFjaygodmFsdWUpID0+IF9tb3VudGVkLmN1cnJlbnQgJiZcclxuICAgICAgICBzaG91bGRTdWJzY3JpYmVCeU5hbWUoX25hbWUuY3VycmVudCwgdmFsdWUubmFtZSwgZXhhY3QpICYmXHJcbiAgICAgICAgc2hvdWxkUmVuZGVyRm9ybVN0YXRlKHZhbHVlLCBfbG9jYWxQcm94eUZvcm1TdGF0ZS5jdXJyZW50KSAmJlxyXG4gICAgICAgIHVwZGF0ZUZvcm1TdGF0ZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNvbnRyb2wuX2Zvcm1TdGF0ZSksIHZhbHVlKSksIFtjb250cm9sLCBleGFjdF0pO1xyXG4gICAgdXNlU3Vic2NyaWJlKHtcclxuICAgICAgICBkaXNhYmxlZCxcclxuICAgICAgICBjYWxsYmFjayxcclxuICAgICAgICBzdWJqZWN0OiBjb250cm9sLl9zdWJqZWN0cy5zdGF0ZSxcclxuICAgIH0pO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+ICgpID0+IHtcclxuICAgICAgICBfbW91bnRlZC5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gZ2V0UHJveHlGb3JtU3RhdGUoZm9ybVN0YXRlLCBjb250cm9sLl9wcm94eUZvcm1TdGF0ZSwgX2xvY2FsUHJveHlGb3JtU3RhdGUuY3VycmVudCwgZmFsc2UpO1xyXG59XG5cbnZhciBpc1N0cmluZyA9ICh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcblxudmFyIGdlbmVyYXRlV2F0Y2hPdXRwdXQgPSAobmFtZXMsIF9uYW1lcywgZm9ybVZhbHVlcywgaXNHbG9iYWwpID0+IHtcclxuICAgIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KG5hbWVzKTtcclxuICAgIGlmIChpc1N0cmluZyhuYW1lcykpIHtcclxuICAgICAgICBpc0dsb2JhbCAmJiBfbmFtZXMud2F0Y2guYWRkKG5hbWVzKTtcclxuICAgICAgICByZXR1cm4gZ2V0KGZvcm1WYWx1ZXMsIG5hbWVzKTtcclxuICAgIH1cclxuICAgIGlmIChpc0FycmF5KSB7XHJcbiAgICAgICAgcmV0dXJuIG5hbWVzLm1hcCgoZmllbGROYW1lKSA9PiAoaXNHbG9iYWwgJiYgX25hbWVzLndhdGNoLmFkZChmaWVsZE5hbWUpLFxyXG4gICAgICAgICAgICBnZXQoZm9ybVZhbHVlcywgZmllbGROYW1lKSkpO1xyXG4gICAgfVxyXG4gICAgaXNHbG9iYWwgJiYgKF9uYW1lcy53YXRjaEFsbCA9IHRydWUpO1xyXG4gICAgcmV0dXJuIGZvcm1WYWx1ZXM7XHJcbn07XG5cbnZhciBpc0Z1bmN0aW9uID0gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG5cbnZhciBvYmplY3RIYXNGdW5jdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XHJcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24oZGF0YVtrZXldKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XG5cbi8qKlxyXG4gKiBDdXN0b20gaG9vayB0byBzdWJzY3JpYmUgdG8gZmllbGQgY2hhbmdlIGFuZCBpc29sYXRlIHJlLXJlbmRlcmluZyBhdCB0aGUgY29tcG9uZW50IGxldmVsLlxyXG4gKlxyXG4gKiBAcmVtYXJrc1xyXG4gKlxyXG4gKiBbQVBJXShodHRwczovL3JlYWN0LWhvb2stZm9ybS5jb20vYXBpL3VzZXdhdGNoKSDigKIgW0RlbW9dKGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9yZWFjdC1ob29rLWZvcm0tdjctdHMtdXNld2F0Y2gtaDlpNWUpXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIGBgYHRzeFxyXG4gKiBjb25zdCB7IHdhdGNoIH0gPSB1c2VGb3JtKCk7XHJcbiAqIGNvbnN0IHZhbHVlcyA9IHVzZVdhdGNoKHtcclxuICogICBuYW1lOiBcImZpZWxkTmFtZVwiXHJcbiAqICAgY29udHJvbCxcclxuICogfSlcclxuICogYGBgXHJcbiAqL1xyXG5mdW5jdGlvbiB1c2VXYXRjaChwcm9wcykge1xyXG4gICAgY29uc3QgbWV0aG9kcyA9IHVzZUZvcm1Db250ZXh0KCk7XHJcbiAgICBjb25zdCB7IGNvbnRyb2wgPSBtZXRob2RzLmNvbnRyb2wsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgZGlzYWJsZWQsIGV4YWN0LCB9ID0gcHJvcHMgfHwge307XHJcbiAgICBjb25zdCBfbmFtZSA9IFJlYWN0LnVzZVJlZihuYW1lKTtcclxuICAgIF9uYW1lLmN1cnJlbnQgPSBuYW1lO1xyXG4gICAgY29uc3QgY2FsbGJhY2sgPSBSZWFjdC51c2VDYWxsYmFjaygoZm9ybVN0YXRlKSA9PiB7XHJcbiAgICAgICAgaWYgKHNob3VsZFN1YnNjcmliZUJ5TmFtZShfbmFtZS5jdXJyZW50LCBmb3JtU3RhdGUubmFtZSwgZXhhY3QpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkVmFsdWVzID0gZ2VuZXJhdGVXYXRjaE91dHB1dChfbmFtZS5jdXJyZW50LCBjb250cm9sLl9uYW1lcywgZm9ybVN0YXRlLnZhbHVlcyB8fCBjb250cm9sLl9mb3JtVmFsdWVzKTtcclxuICAgICAgICAgICAgdXBkYXRlVmFsdWUoaXNVbmRlZmluZWQoX25hbWUuY3VycmVudCkgfHxcclxuICAgICAgICAgICAgICAgIChpc09iamVjdChmaWVsZFZhbHVlcykgJiYgIW9iamVjdEhhc0Z1bmN0aW9uKGZpZWxkVmFsdWVzKSlcclxuICAgICAgICAgICAgICAgID8gT2JqZWN0LmFzc2lnbih7fSwgZmllbGRWYWx1ZXMpIDogQXJyYXkuaXNBcnJheShmaWVsZFZhbHVlcylcclxuICAgICAgICAgICAgICAgID8gWy4uLmZpZWxkVmFsdWVzXVxyXG4gICAgICAgICAgICAgICAgOiBpc1VuZGVmaW5lZChmaWVsZFZhbHVlcylcclxuICAgICAgICAgICAgICAgICAgICA/IGRlZmF1bHRWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogZmllbGRWYWx1ZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtjb250cm9sLCBleGFjdCwgZGVmYXVsdFZhbHVlXSk7XHJcbiAgICB1c2VTdWJzY3JpYmUoe1xyXG4gICAgICAgIGRpc2FibGVkLFxyXG4gICAgICAgIHN1YmplY3Q6IGNvbnRyb2wuX3N1YmplY3RzLndhdGNoLFxyXG4gICAgICAgIGNhbGxiYWNrLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbdmFsdWUsIHVwZGF0ZVZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKGlzVW5kZWZpbmVkKGRlZmF1bHRWYWx1ZSlcclxuICAgICAgICA/IGNvbnRyb2wuX2dldFdhdGNoKG5hbWUpXHJcbiAgICAgICAgOiBkZWZhdWx0VmFsdWUpO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb250cm9sLl9yZW1vdmVVbm1vdW50ZWQoKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XG5cbi8qKlxyXG4gKiBDdXN0b20gaG9vayB0byB3b3JrIHdpdGggY29udHJvbGxlZCBjb21wb25lbnQsIHRoaXMgZnVuY3Rpb24gcHJvdmlkZSB5b3Ugd2l0aCBib3RoIGZvcm0gYW5kIGZpZWxkIGxldmVsIHN0YXRlLiBSZS1yZW5kZXIgaXMgaXNvbGF0ZWQgYXQgdGhlIGhvb2sgbGV2ZWwuXHJcbiAqXHJcbiAqIEByZW1hcmtzXHJcbiAqIFtBUEldKGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkvdXNlY29udHJvbGxlcikg4oCiIFtEZW1vXShodHRwczovL2NvZGVzYW5kYm94LmlvL3MvdXNlY29udHJvbGxlci0wbzhweClcclxuICpcclxuICogQHBhcmFtIHByb3BzIC0gdGhlIHBhdGggbmFtZSB0byB0aGUgZm9ybSBmaWVsZCB2YWx1ZSwgYW5kIHZhbGlkYXRpb24gcnVsZXMuXHJcbiAqXHJcbiAqIEByZXR1cm5zIGZpZWxkIHByb3BlcnRpZXMsIGZpZWxkIGFuZCBmb3JtIHN0YXRlLiB7QGxpbmsgVXNlQ29udHJvbGxlclJldHVybn1cclxuICpcclxuICogQGV4YW1wbGVcclxuICogYGBgdHN4XHJcbiAqIGZ1bmN0aW9uIElucHV0KHByb3BzKSB7XHJcbiAqICAgY29uc3QgeyBmaWVsZCwgZmllbGRTdGF0ZSwgZm9ybVN0YXRlIH0gPSB1c2VDb250cm9sbGVyKHByb3BzKTtcclxuICogICByZXR1cm4gKFxyXG4gKiAgICAgPGRpdj5cclxuICogICAgICAgPGlucHV0IHsuLi5maWVsZH0gcGxhY2Vob2xkZXI9e3Byb3BzLm5hbWV9IC8+XHJcbiAqICAgICAgIDxwPntmaWVsZFN0YXRlLmlzVG91Y2hlZCAmJiBcIlRvdWNoZWRcIn08L3A+XHJcbiAqICAgICAgIDxwPntmb3JtU3RhdGUuaXNTdWJtaXR0ZWQgPyBcInN1Ym1pdHRlZFwiIDogXCJcIn08L3A+XHJcbiAqICAgICA8L2Rpdj5cclxuICogICApO1xyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKi9cclxuZnVuY3Rpb24gdXNlQ29udHJvbGxlcihwcm9wcykge1xyXG4gICAgY29uc3QgbWV0aG9kcyA9IHVzZUZvcm1Db250ZXh0KCk7XHJcbiAgICBjb25zdCB7IG5hbWUsIGNvbnRyb2wgPSBtZXRob2RzLmNvbnRyb2wsIHNob3VsZFVucmVnaXN0ZXIgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgaXNBcnJheUZpZWxkID0gaXNOYW1lSW5GaWVsZEFycmF5KGNvbnRyb2wuX25hbWVzLmFycmF5LCBuYW1lKTtcclxuICAgIGNvbnN0IHZhbHVlID0gdXNlV2F0Y2goe1xyXG4gICAgICAgIGNvbnRyb2wsXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IGdldChjb250cm9sLl9mb3JtVmFsdWVzLCBuYW1lLCBnZXQoY29udHJvbC5fZGVmYXVsdFZhbHVlcywgbmFtZSwgcHJvcHMuZGVmYXVsdFZhbHVlKSksXHJcbiAgICAgICAgZXhhY3Q6IHRydWUsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGZvcm1TdGF0ZSA9IHVzZUZvcm1TdGF0ZSh7XHJcbiAgICAgICAgY29udHJvbCxcclxuICAgICAgICBuYW1lLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBfcmVnaXN0ZXJQcm9wcyA9IFJlYWN0LnVzZVJlZihjb250cm9sLnJlZ2lzdGVyKG5hbWUsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMucnVsZXMpLCB7IHZhbHVlIH0pKSk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZU1vdW50ZWQgPSAobmFtZSwgdmFsdWUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBnZXQoY29udHJvbC5fZmllbGRzLCBuYW1lKTtcclxuICAgICAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZC5fZi5tb3VudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB1cGRhdGVNb3VudGVkKG5hbWUsIHRydWUpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IF9zaG91bGRVbnJlZ2lzdGVyRmllbGQgPSBjb250cm9sLl9vcHRpb25zLnNob3VsZFVucmVnaXN0ZXIgfHwgc2hvdWxkVW5yZWdpc3RlcjtcclxuICAgICAgICAgICAgKGlzQXJyYXlGaWVsZFxyXG4gICAgICAgICAgICAgICAgPyBfc2hvdWxkVW5yZWdpc3RlckZpZWxkICYmICFjb250cm9sLl9zdGF0ZUZsYWdzLmFjdGlvblxyXG4gICAgICAgICAgICAgICAgOiBfc2hvdWxkVW5yZWdpc3RlckZpZWxkKVxyXG4gICAgICAgICAgICAgICAgPyBjb250cm9sLnVucmVnaXN0ZXIobmFtZSlcclxuICAgICAgICAgICAgICAgIDogdXBkYXRlTW91bnRlZChuYW1lLCBmYWxzZSk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtuYW1lLCBjb250cm9sLCBpc0FycmF5RmllbGQsIHNob3VsZFVucmVnaXN0ZXJdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmllbGQ6IHtcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBSZWFjdC51c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIF9yZWdpc3RlclByb3BzLmN1cnJlbnQub25DaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZ2V0RXZlbnRWYWx1ZShldmVudCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBFVkVOVFMuQ0hBTkdFLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIFtuYW1lXSksXHJcbiAgICAgICAgICAgIG9uQmx1cjogUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgX3JlZ2lzdGVyUHJvcHMuY3VycmVudC5vbkJsdXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZ2V0KGNvbnRyb2wuX2Zvcm1WYWx1ZXMsIG5hbWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogRVZFTlRTLkJMVVIsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgW25hbWUsIGNvbnRyb2xdKSxcclxuICAgICAgICAgICAgcmVmOiBSZWFjdC51c2VDYWxsYmFjaygoZWxtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZCA9IGdldChjb250cm9sLl9maWVsZHMsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsbSAmJiBmaWVsZCAmJiBlbG0uZm9jdXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5fZi5yZWYgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOiAoKSA9PiBlbG0uZm9jdXMoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VzdG9tVmFsaWRpdHk6IChtZXNzYWdlKSA9PiBlbG0uc2V0Q3VzdG9tVmFsaWRpdHkobWVzc2FnZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcG9ydFZhbGlkaXR5OiAoKSA9PiBlbG0ucmVwb3J0VmFsaWRpdHkoKSxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBbbmFtZSwgY29udHJvbC5fZmllbGRzXSksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb3JtU3RhdGUsXHJcbiAgICAgICAgZmllbGRTdGF0ZTogY29udHJvbC5nZXRGaWVsZFN0YXRlKG5hbWUsIGZvcm1TdGF0ZSksXHJcbiAgICB9O1xyXG59XG5cbi8qKlxyXG4gKiBDb21wb25lbnQgYmFzZWQgb24gYHVzZUNvbnRyb2xsZXJgIGhvb2sgdG8gd29yayB3aXRoIGNvbnRyb2xsZWQgY29tcG9uZW50LlxyXG4gKlxyXG4gKiBAcmVtYXJrc1xyXG4gKiBbQVBJXShodHRwczovL3JlYWN0LWhvb2stZm9ybS5jb20vYXBpL3VzZWNvbnRyb2xsZXIvY29udHJvbGxlcikg4oCiIFtEZW1vXShodHRwczovL2NvZGVzYW5kYm94LmlvL3MvcmVhY3QtaG9vay1mb3JtLXY2LWNvbnRyb2xsZXItdHMtand5encpIOKAoiBbVmlkZW9dKGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9TjJVTmtfVUNWeUEpXHJcbiAqXHJcbiAqIEBwYXJhbSBwcm9wcyAtIHRoZSBwYXRoIG5hbWUgdG8gdGhlIGZvcm0gZmllbGQgdmFsdWUsIGFuZCB2YWxpZGF0aW9uIHJ1bGVzLlxyXG4gKlxyXG4gKiBAcmV0dXJucyBwcm92aWRlIGZpZWxkIGhhbmRsZXIgZnVuY3Rpb25zLCBmaWVsZCBhbmQgZm9ybSBzdGF0ZS5cclxuICpcclxuICogQGV4YW1wbGVcclxuICogYGBgdHN4XHJcbiAqIGZ1bmN0aW9uIEFwcCgpIHtcclxuICogICBjb25zdCB7IGNvbnRyb2wgfSA9IHVzZUZvcm08Rm9ybVZhbHVlcz4oe1xyXG4gKiAgICAgZGVmYXVsdFZhbHVlczoge1xyXG4gKiAgICAgICB0ZXN0OiBcIlwiXHJcbiAqICAgICB9XHJcbiAqICAgfSk7XHJcbiAqXHJcbiAqICAgcmV0dXJuIChcclxuICogICAgIDxmb3JtPlxyXG4gKiAgICAgICA8Q29udHJvbGxlclxyXG4gKiAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XHJcbiAqICAgICAgICAgbmFtZT1cInRlc3RcIlxyXG4gKiAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgb25DaGFuZ2UsIG9uQmx1ciwgdmFsdWUsIHJlZiB9LCBmb3JtU3RhdGUsIGZpZWxkU3RhdGUgfSkgPT4gKFxyXG4gKiAgICAgICAgICAgPD5cclxuICogICAgICAgICAgICAgPGlucHV0XHJcbiAqICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfSAvLyBzZW5kIHZhbHVlIHRvIGhvb2sgZm9ybVxyXG4gKiAgICAgICAgICAgICAgIG9uQmx1cj17b25CbHVyfSAvLyBub3RpZnkgd2hlbiBpbnB1dCBpcyB0b3VjaGVkXHJcbiAqICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfSAvLyByZXR1cm4gdXBkYXRlZCB2YWx1ZVxyXG4gKiAgICAgICAgICAgICAgIHJlZj17cmVmfSAvLyBzZXQgcmVmIGZvciBmb2N1cyBtYW5hZ2VtZW50XHJcbiAqICAgICAgICAgICAgIC8+XHJcbiAqICAgICAgICAgICAgIDxwPntmb3JtU3RhdGUuaXNTdWJtaXR0ZWQgPyBcInN1Ym1pdHRlZFwiIDogXCJcIn08L3A+XHJcbiAqICAgICAgICAgICAgIDxwPntmaWVsZFN0YXRlLmlzVG91Y2hlZCA/IFwidG91Y2hlZFwiIDogXCJcIn08L3A+XHJcbiAqICAgICAgICAgICA8Lz5cclxuICogICAgICAgICApfVxyXG4gKiAgICAgICAvPlxyXG4gKiAgICAgPC9mb3JtPlxyXG4gKiAgICk7XHJcbiAqIH1cclxuICogYGBgXHJcbiAqL1xyXG5jb25zdCBDb250cm9sbGVyID0gKHByb3BzKSA9PiBwcm9wcy5yZW5kZXIodXNlQ29udHJvbGxlcihwcm9wcykpO1xuXG52YXIgYXBwZW5kRXJyb3JzID0gKG5hbWUsIHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSwgZXJyb3JzLCB0eXBlLCBtZXNzYWdlKSA9PiB2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWFcclxuICAgID8gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBlcnJvcnNbbmFtZV0pLCB7IHR5cGVzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIChlcnJvcnNbbmFtZV0gJiYgZXJyb3JzW25hbWVdLnR5cGVzID8gZXJyb3JzW25hbWVdLnR5cGVzIDoge30pKSwgeyBbdHlwZV06IG1lc3NhZ2UgfHwgdHJ1ZSB9KSB9KSA6IHt9O1xuXG52YXIgaXNLZXkgPSAodmFsdWUpID0+IC9eXFx3KiQvLnRlc3QodmFsdWUpO1xuXG52YXIgc3RyaW5nVG9QYXRoID0gKGlucHV0KSA9PiBjb21wYWN0KGlucHV0LnJlcGxhY2UoL1tcInwnXXxcXF0vZywgJycpLnNwbGl0KC9cXC58XFxbLykpO1xuXG5mdW5jdGlvbiBzZXQob2JqZWN0LCBwYXRoLCB2YWx1ZSkge1xyXG4gICAgbGV0IGluZGV4ID0gLTE7XHJcbiAgICBjb25zdCB0ZW1wUGF0aCA9IGlzS2V5KHBhdGgpID8gW3BhdGhdIDogc3RyaW5nVG9QYXRoKHBhdGgpO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gdGVtcFBhdGgubGVuZ3RoO1xyXG4gICAgY29uc3QgbGFzdEluZGV4ID0gbGVuZ3RoIC0gMTtcclxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gdGVtcFBhdGhbaW5kZXhdO1xyXG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gbGFzdEluZGV4KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9ialZhbHVlID0gb2JqZWN0W2tleV07XHJcbiAgICAgICAgICAgIG5ld1ZhbHVlID1cclxuICAgICAgICAgICAgICAgIGlzT2JqZWN0KG9ialZhbHVlKSB8fCBBcnJheS5pc0FycmF5KG9ialZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgID8gb2JqVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICA6ICFpc05hTigrdGVtcFBhdGhbaW5kZXggKyAxXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYmplY3Rba2V5XSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIG9iamVjdCA9IG9iamVjdFtrZXldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iamVjdDtcclxufVxuXG5jb25zdCBmb2N1c0ZpZWxkQnkgPSAoZmllbGRzLCBjYWxsYmFjaywgZmllbGRzTmFtZXMpID0+IHtcclxuICAgIGZvciAoY29uc3Qga2V5IG9mIGZpZWxkc05hbWVzIHx8IE9iamVjdC5rZXlzKGZpZWxkcykpIHtcclxuICAgICAgICBjb25zdCBmaWVsZCA9IGdldChmaWVsZHMsIGtleSk7XHJcbiAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IF9mID0gZmllbGQuX2Y7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBvbWl0KGZpZWxkLCAnX2YnKTtcclxuICAgICAgICAgICAgaWYgKF9mICYmIGNhbGxiYWNrKF9mLm5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2YucmVmLmZvY3VzICYmIGlzVW5kZWZpbmVkKF9mLnJlZi5mb2N1cygpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoX2YucmVmcykge1xyXG4gICAgICAgICAgICAgICAgICAgIF9mLnJlZnNbMF0uZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpc09iamVjdChjdXJyZW50KSkge1xyXG4gICAgICAgICAgICAgICAgZm9jdXNGaWVsZEJ5KGN1cnJlbnQsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcblxudmFyIGdlbmVyYXRlSWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkID0gdHlwZW9mIHBlcmZvcm1hbmNlID09PSAndW5kZWZpbmVkJyA/IERhdGUubm93KCkgOiBwZXJmb3JtYW5jZS5ub3coKSAqIDEwMDA7XHJcbiAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCAoYykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHIgPSAoTWF0aC5yYW5kb20oKSAqIDE2ICsgZCkgJSAxNiB8IDA7XHJcbiAgICAgICAgcmV0dXJuIChjID09ICd4JyA/IHIgOiAociAmIDB4MykgfCAweDgpLnRvU3RyaW5nKDE2KTtcclxuICAgIH0pO1xyXG59O1xuXG52YXIgZ2V0Rm9jdXNGaWVsZE5hbWUgPSAobmFtZSwgaW5kZXgsIG9wdGlvbnMgPSB7fSkgPT4gb3B0aW9ucy5zaG91bGRGb2N1cyB8fCBpc1VuZGVmaW5lZChvcHRpb25zLnNob3VsZEZvY3VzKVxyXG4gICAgPyBvcHRpb25zLmZvY3VzTmFtZSB8fFxyXG4gICAgICAgIGAke25hbWV9LiR7aXNVbmRlZmluZWQob3B0aW9ucy5mb2N1c0luZGV4KSA/IGluZGV4IDogb3B0aW9ucy5mb2N1c0luZGV4fS5gXHJcbiAgICA6ICcnO1xuXG52YXIgaXNXYXRjaGVkID0gKG5hbWUsIF9uYW1lcywgaXNCbHVyRXZlbnQpID0+ICFpc0JsdXJFdmVudCAmJlxyXG4gICAgKF9uYW1lcy53YXRjaEFsbCB8fFxyXG4gICAgICAgIF9uYW1lcy53YXRjaC5oYXMobmFtZSkgfHxcclxuICAgICAgICBbLi4uX25hbWVzLndhdGNoXS5zb21lKCh3YXRjaE5hbWUpID0+IG5hbWUuc3RhcnRzV2l0aCh3YXRjaE5hbWUpICYmXHJcbiAgICAgICAgICAgIC9eXFwuXFx3Ky8udGVzdChuYW1lLnNsaWNlKHdhdGNoTmFtZS5sZW5ndGgpKSkpO1xuXG5mdW5jdGlvbiBhcHBlbmQoZGF0YSwgdmFsdWUpIHtcclxuICAgIHJldHVybiBbLi4uZGF0YSwgLi4uY29udmVydFRvQXJyYXlQYXlsb2FkKHZhbHVlKV07XHJcbn1cblxuZnVuY3Rpb24gY2xvbmVPYmplY3QoZGF0YSkge1xyXG4gICAgbGV0IGNvcHk7XHJcbiAgICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShkYXRhKTtcclxuICAgIGlmIChkYXRhIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgIGNvcHkgPSBuZXcgRGF0ZShkYXRhKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGRhdGEgaW5zdGFuY2VvZiBTZXQpIHtcclxuICAgICAgICBjb3B5ID0gbmV3IFNldChkYXRhKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzQXJyYXkgfHwgaXNPYmplY3QoZGF0YSkpIHtcclxuICAgICAgICBjb3B5ID0gaXNBcnJheSA/IFtdIDoge307XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihkYXRhW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICBjb3B5ID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvcHlba2V5XSA9IGNsb25lT2JqZWN0KGRhdGFba2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29weTtcclxufVxuXG52YXIgZmlsbEVtcHR5QXJyYXkgPSAodmFsdWUpID0+IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUubWFwKCgpID0+IHVuZGVmaW5lZCkgOiB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGluc2VydChkYXRhLCBpbmRleCwgdmFsdWUpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgLi4uZGF0YS5zbGljZSgwLCBpbmRleCksXHJcbiAgICAgICAgLi4uY29udmVydFRvQXJyYXlQYXlsb2FkKHZhbHVlKSxcclxuICAgICAgICAuLi5kYXRhLnNsaWNlKGluZGV4KSxcclxuICAgIF07XHJcbn1cblxudmFyIG1vdmVBcnJheUF0ID0gKGRhdGEsIGZyb20sIHRvKSA9PiB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkpIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICBpZiAoaXNVbmRlZmluZWQoZGF0YVt0b10pKSB7XHJcbiAgICAgICAgZGF0YVt0b10gPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBkYXRhLnNwbGljZSh0bywgMCwgZGF0YS5zcGxpY2UoZnJvbSwgMSlbMF0pO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn07XG5cbmZ1bmN0aW9uIHByZXBlbmQoZGF0YSwgdmFsdWUpIHtcclxuICAgIHJldHVybiBbLi4uY29udmVydFRvQXJyYXlQYXlsb2FkKHZhbHVlKSwgLi4uY29udmVydFRvQXJyYXlQYXlsb2FkKGRhdGEpXTtcclxufVxuXG5mdW5jdGlvbiByZW1vdmVBdEluZGV4ZXMoZGF0YSwgaW5kZXhlcykge1xyXG4gICAgbGV0IGkgPSAwO1xyXG4gICAgY29uc3QgdGVtcCA9IFsuLi5kYXRhXTtcclxuICAgIGZvciAoY29uc3QgaW5kZXggb2YgaW5kZXhlcykge1xyXG4gICAgICAgIHRlbXAuc3BsaWNlKGluZGV4IC0gaSwgMSk7XHJcbiAgICAgICAgaSsrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbXBhY3QodGVtcCkubGVuZ3RoID8gdGVtcCA6IFtdO1xyXG59XHJcbnZhciByZW1vdmVBcnJheUF0ID0gKGRhdGEsIGluZGV4KSA9PiBpc1VuZGVmaW5lZChpbmRleClcclxuICAgID8gW11cclxuICAgIDogcmVtb3ZlQXRJbmRleGVzKGRhdGEsIGNvbnZlcnRUb0FycmF5UGF5bG9hZChpbmRleCkuc29ydCgoYSwgYikgPT4gYSAtIGIpKTtcblxudmFyIHN3YXBBcnJheUF0ID0gKGRhdGEsIGluZGV4QSwgaW5kZXhCKSA9PiB7XHJcbiAgICBkYXRhW2luZGV4QV0gPSBbZGF0YVtpbmRleEJdLCAoZGF0YVtpbmRleEJdID0gZGF0YVtpbmRleEFdKV1bMF07XHJcbn07XG5cbnZhciB1cGRhdGVBdCA9IChmaWVsZFZhbHVlcywgaW5kZXgsIHZhbHVlKSA9PiB7XHJcbiAgICBmaWVsZFZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcclxuICAgIHJldHVybiBmaWVsZFZhbHVlcztcclxufTtcblxuLyoqXHJcbiAqIEEgY3VzdG9tIGhvb2sgdGhhdCBleHBvc2VzIGNvbnZlbmllbnQgbWV0aG9kcyB0byBwZXJmb3JtIG9wZXJhdGlvbnMgd2l0aCBhIGxpc3Qgb2YgZHluYW1pYyBpbnB1dHMgdGhhdCBuZWVkIHRvIGJlIGFwcGVuZGVkLCB1cGRhdGVkLCByZW1vdmVkIGV0Yy5cclxuICpcclxuICogQHJlbWFya3NcclxuICogW0FQSV0oaHR0cHM6Ly9yZWFjdC1ob29rLWZvcm0uY29tL2FwaS91c2VmaWVsZGFycmF5KSDigKIgW0RlbW9dKGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9yZWFjdC1ob29rLWZvcm0tdXNlZmllbGRhcnJheS1zc3VnbilcclxuICpcclxuICogQHBhcmFtIHByb3BzIC0gdXNlRmllbGRBcnJheSBwcm9wc1xyXG4gKlxyXG4gKiBAcmV0dXJucyBtZXRob2RzIC0gZnVuY3Rpb25zIHRvIG1hbmlwdWxhdGUgd2l0aCB0aGUgRmllbGQgQXJyYXlzIChkeW5hbWljIGlucHV0cykge0BsaW5rIFVzZUZpZWxkQXJyYXlSZXR1cm59XHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIGBgYHRzeFxyXG4gKiBmdW5jdGlvbiBBcHAoKSB7XHJcbiAqICAgY29uc3QgeyByZWdpc3RlciwgY29udHJvbCwgaGFuZGxlU3VibWl0LCByZXNldCwgdHJpZ2dlciwgc2V0RXJyb3IgfSA9IHVzZUZvcm0oe1xyXG4gKiAgICAgZGVmYXVsdFZhbHVlczoge1xyXG4gKiAgICAgICB0ZXN0OiBbXVxyXG4gKiAgICAgfVxyXG4gKiAgIH0pO1xyXG4gKiAgIGNvbnN0IHsgZmllbGRzLCBhcHBlbmQgfSA9IHVzZUZpZWxkQXJyYXkoe1xyXG4gKiAgICAgY29udHJvbCxcclxuICogICAgIG5hbWU6IFwidGVzdFwiXHJcbiAqICAgfSk7XHJcbiAqXHJcbiAqICAgcmV0dXJuIChcclxuICogICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSl9PlxyXG4gKiAgICAgICB7ZmllbGRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICogICAgICAgICAgPGlucHV0IGtleT17aXRlbS5pZH0gey4uLnJlZ2lzdGVyKGB0ZXN0LiR7aW5kZXh9LmZpcnN0TmFtZWApfSAgLz5cclxuICogICAgICAgKSl9XHJcbiAqICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGFwcGVuZCh7IGZpcnN0TmFtZTogXCJiaWxsXCIgfSl9PlxyXG4gKiAgICAgICAgIGFwcGVuZFxyXG4gKiAgICAgICA8L2J1dHRvbj5cclxuICogICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiAvPlxyXG4gKiAgICAgPC9mb3JtPlxyXG4gKiAgICk7XHJcbiAqIH1cclxuICogYGBgXHJcbiAqL1xyXG5mdW5jdGlvbiB1c2VGaWVsZEFycmF5KHByb3BzKSB7XHJcbiAgICBjb25zdCBtZXRob2RzID0gdXNlRm9ybUNvbnRleHQoKTtcclxuICAgIGNvbnN0IHsgY29udHJvbCA9IG1ldGhvZHMuY29udHJvbCwgbmFtZSwga2V5TmFtZSA9ICdpZCcsIHNob3VsZFVucmVnaXN0ZXIsIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IFtmaWVsZHMsIHNldEZpZWxkc10gPSBSZWFjdC51c2VTdGF0ZShjb250cm9sLl9nZXRGaWVsZEFycmF5KG5hbWUpKTtcclxuICAgIGNvbnN0IGlkcyA9IFJlYWN0LnVzZVJlZihjb250cm9sLl9nZXRGaWVsZEFycmF5KG5hbWUpLm1hcChnZW5lcmF0ZUlkKSk7XHJcbiAgICBjb25zdCBfZmllbGRJZHMgPSBSZWFjdC51c2VSZWYoZmllbGRzKTtcclxuICAgIGNvbnN0IF9uYW1lID0gUmVhY3QudXNlUmVmKG5hbWUpO1xyXG4gICAgY29uc3QgX2FjdGlvbmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcclxuICAgIF9uYW1lLmN1cnJlbnQgPSBuYW1lO1xyXG4gICAgX2ZpZWxkSWRzLmN1cnJlbnQgPSBmaWVsZHM7XHJcbiAgICBjb250cm9sLl9uYW1lcy5hcnJheS5hZGQobmFtZSk7XHJcbiAgICBjb25zdCBjYWxsYmFjayA9IFJlYWN0LnVzZUNhbGxiYWNrKCh7IHZhbHVlcywgbmFtZTogZmllbGRBcnJheU5hbWUgfSkgPT4ge1xyXG4gICAgICAgIGlmIChmaWVsZEFycmF5TmFtZSA9PT0gX25hbWUuY3VycmVudCB8fCAhZmllbGRBcnJheU5hbWUpIHtcclxuICAgICAgICAgICAgY29uc3QgZmllbGRWYWx1ZXMgPSBnZXQodmFsdWVzLCBfbmFtZS5jdXJyZW50LCBbXSk7XHJcbiAgICAgICAgICAgIHNldEZpZWxkcyhmaWVsZFZhbHVlcyk7XHJcbiAgICAgICAgICAgIGlkcy5jdXJyZW50ID0gZmllbGRWYWx1ZXMubWFwKGdlbmVyYXRlSWQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIHVzZVN1YnNjcmliZSh7XHJcbiAgICAgICAgY2FsbGJhY2ssXHJcbiAgICAgICAgc3ViamVjdDogY29udHJvbC5fc3ViamVjdHMuYXJyYXksXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHVwZGF0ZVZhbHVlcyA9IFJlYWN0LnVzZUNhbGxiYWNrKCh1cGRhdGVkRmllbGRBcnJheVZhbHVlcykgPT4ge1xyXG4gICAgICAgIF9hY3Rpb25lZC5jdXJyZW50ID0gdHJ1ZTtcclxuICAgICAgICBjb250cm9sLl91cGRhdGVGaWVsZEFycmF5KG5hbWUsIHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzKTtcclxuICAgIH0sIFtjb250cm9sLCBuYW1lXSk7XHJcbiAgICBjb25zdCBhcHBlbmQkMSA9ICh2YWx1ZSwgb3B0aW9ucykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFwcGVuZFZhbHVlID0gY29udmVydFRvQXJyYXlQYXlsb2FkKGNsb25lT2JqZWN0KHZhbHVlKSk7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMgPSBhcHBlbmQoY29udHJvbC5fZ2V0RmllbGRBcnJheShuYW1lKSwgYXBwZW5kVmFsdWUpO1xyXG4gICAgICAgIGNvbnRyb2wuX25hbWVzLmZvY3VzID0gZ2V0Rm9jdXNGaWVsZE5hbWUobmFtZSwgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMubGVuZ3RoIC0gMSwgb3B0aW9ucyk7XHJcbiAgICAgICAgaWRzLmN1cnJlbnQgPSBhcHBlbmQoaWRzLmN1cnJlbnQsIGFwcGVuZFZhbHVlLm1hcChnZW5lcmF0ZUlkKSk7XHJcbiAgICAgICAgdXBkYXRlVmFsdWVzKHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzKTtcclxuICAgICAgICBzZXRGaWVsZHModXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMpO1xyXG4gICAgICAgIGNvbnRyb2wuX3VwZGF0ZUZpZWxkQXJyYXkobmFtZSwgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMsIGFwcGVuZCwge1xyXG4gICAgICAgICAgICBhcmdBOiBmaWxsRW1wdHlBcnJheSh2YWx1ZSksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcHJlcGVuZCQxID0gKHZhbHVlLCBvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJlcGVuZFZhbHVlID0gY29udmVydFRvQXJyYXlQYXlsb2FkKGNsb25lT2JqZWN0KHZhbHVlKSk7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMgPSBwcmVwZW5kKGNvbnRyb2wuX2dldEZpZWxkQXJyYXkobmFtZSksIHByZXBlbmRWYWx1ZSk7XHJcbiAgICAgICAgY29udHJvbC5fbmFtZXMuZm9jdXMgPSBnZXRGb2N1c0ZpZWxkTmFtZShuYW1lLCAwLCBvcHRpb25zKTtcclxuICAgICAgICBpZHMuY3VycmVudCA9IHByZXBlbmQoaWRzLmN1cnJlbnQsIHByZXBlbmRWYWx1ZS5tYXAoZ2VuZXJhdGVJZCkpO1xyXG4gICAgICAgIHVwZGF0ZVZhbHVlcyh1cGRhdGVkRmllbGRBcnJheVZhbHVlcyk7XHJcbiAgICAgICAgc2V0RmllbGRzKHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzKTtcclxuICAgICAgICBjb250cm9sLl91cGRhdGVGaWVsZEFycmF5KG5hbWUsIHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzLCBwcmVwZW5kLCB7XHJcbiAgICAgICAgICAgIGFyZ0E6IGZpbGxFbXB0eUFycmF5KHZhbHVlKSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCByZW1vdmUgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkRmllbGRBcnJheVZhbHVlcyA9IHJlbW92ZUFycmF5QXQoY29udHJvbC5fZ2V0RmllbGRBcnJheShuYW1lKSwgaW5kZXgpO1xyXG4gICAgICAgIGlkcy5jdXJyZW50ID0gcmVtb3ZlQXJyYXlBdChpZHMuY3VycmVudCwgaW5kZXgpO1xyXG4gICAgICAgIHVwZGF0ZVZhbHVlcyh1cGRhdGVkRmllbGRBcnJheVZhbHVlcyk7XHJcbiAgICAgICAgc2V0RmllbGRzKHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzKTtcclxuICAgICAgICBjb250cm9sLl91cGRhdGVGaWVsZEFycmF5KG5hbWUsIHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzLCByZW1vdmVBcnJheUF0LCB7XHJcbiAgICAgICAgICAgIGFyZ0E6IGluZGV4LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGluc2VydCQxID0gKGluZGV4LCB2YWx1ZSwgb3B0aW9ucykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluc2VydFZhbHVlID0gY29udmVydFRvQXJyYXlQYXlsb2FkKGNsb25lT2JqZWN0KHZhbHVlKSk7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMgPSBpbnNlcnQoY29udHJvbC5fZ2V0RmllbGRBcnJheShuYW1lKSwgaW5kZXgsIGluc2VydFZhbHVlKTtcclxuICAgICAgICBjb250cm9sLl9uYW1lcy5mb2N1cyA9IGdldEZvY3VzRmllbGROYW1lKG5hbWUsIGluZGV4LCBvcHRpb25zKTtcclxuICAgICAgICBpZHMuY3VycmVudCA9IGluc2VydChpZHMuY3VycmVudCwgaW5kZXgsIGluc2VydFZhbHVlLm1hcChnZW5lcmF0ZUlkKSk7XHJcbiAgICAgICAgdXBkYXRlVmFsdWVzKHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzKTtcclxuICAgICAgICBzZXRGaWVsZHModXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMpO1xyXG4gICAgICAgIGNvbnRyb2wuX3VwZGF0ZUZpZWxkQXJyYXkobmFtZSwgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMsIGluc2VydCwge1xyXG4gICAgICAgICAgICBhcmdBOiBpbmRleCxcclxuICAgICAgICAgICAgYXJnQjogZmlsbEVtcHR5QXJyYXkodmFsdWUpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHN3YXAgPSAoaW5kZXhBLCBpbmRleEIpID0+IHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkRmllbGRBcnJheVZhbHVlcyA9IGNvbnRyb2wuX2dldEZpZWxkQXJyYXkobmFtZSk7XHJcbiAgICAgICAgc3dhcEFycmF5QXQodXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMsIGluZGV4QSwgaW5kZXhCKTtcclxuICAgICAgICBzd2FwQXJyYXlBdChpZHMuY3VycmVudCwgaW5kZXhBLCBpbmRleEIpO1xyXG4gICAgICAgIHVwZGF0ZVZhbHVlcyh1cGRhdGVkRmllbGRBcnJheVZhbHVlcyk7XHJcbiAgICAgICAgc2V0RmllbGRzKHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzKTtcclxuICAgICAgICBjb250cm9sLl91cGRhdGVGaWVsZEFycmF5KG5hbWUsIHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzLCBzd2FwQXJyYXlBdCwge1xyXG4gICAgICAgICAgICBhcmdBOiBpbmRleEEsXHJcbiAgICAgICAgICAgIGFyZ0I6IGluZGV4QixcclxuICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbW92ZSA9IChmcm9tLCB0bykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzID0gY29udHJvbC5fZ2V0RmllbGRBcnJheShuYW1lKTtcclxuICAgICAgICBtb3ZlQXJyYXlBdCh1cGRhdGVkRmllbGRBcnJheVZhbHVlcywgZnJvbSwgdG8pO1xyXG4gICAgICAgIG1vdmVBcnJheUF0KGlkcy5jdXJyZW50LCBmcm9tLCB0byk7XHJcbiAgICAgICAgdXBkYXRlVmFsdWVzKHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzKTtcclxuICAgICAgICBzZXRGaWVsZHModXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMpO1xyXG4gICAgICAgIGNvbnRyb2wuX3VwZGF0ZUZpZWxkQXJyYXkobmFtZSwgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMsIG1vdmVBcnJheUF0LCB7XHJcbiAgICAgICAgICAgIGFyZ0E6IGZyb20sXHJcbiAgICAgICAgICAgIGFyZ0I6IHRvLFxyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCB1cGRhdGUgPSAoaW5kZXgsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMgPSB1cGRhdGVBdChjb250cm9sLl9nZXRGaWVsZEFycmF5KG5hbWUpLCBpbmRleCwgdmFsdWUpO1xyXG4gICAgICAgIGlkcy5jdXJyZW50ID0gWy4uLnVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzXS5tYXAoKGl0ZW0sIGkpID0+ICFpdGVtIHx8IGkgPT09IGluZGV4ID8gZ2VuZXJhdGVJZCgpIDogaWRzLmN1cnJlbnRbaV0pO1xyXG4gICAgICAgIHVwZGF0ZVZhbHVlcyh1cGRhdGVkRmllbGRBcnJheVZhbHVlcyk7XHJcbiAgICAgICAgc2V0RmllbGRzKFsuLi51cGRhdGVkRmllbGRBcnJheVZhbHVlc10pO1xyXG4gICAgICAgIGNvbnRyb2wuX3VwZGF0ZUZpZWxkQXJyYXkobmFtZSwgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMsIHVwZGF0ZUF0LCB7XHJcbiAgICAgICAgICAgIGFyZ0E6IGluZGV4LFxyXG4gICAgICAgICAgICBhcmdCOiB2YWx1ZSxcclxuICAgICAgICB9LCB0cnVlLCBmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVwbGFjZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzID0gY29udmVydFRvQXJyYXlQYXlsb2FkKGNsb25lT2JqZWN0KHZhbHVlKSk7XHJcbiAgICAgICAgaWRzLmN1cnJlbnQgPSB1cGRhdGVkRmllbGRBcnJheVZhbHVlcy5tYXAoZ2VuZXJhdGVJZCk7XHJcbiAgICAgICAgdXBkYXRlVmFsdWVzKFsuLi51cGRhdGVkRmllbGRBcnJheVZhbHVlc10pO1xyXG4gICAgICAgIHNldEZpZWxkcyhbLi4udXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXNdKTtcclxuICAgICAgICBjb250cm9sLl91cGRhdGVGaWVsZEFycmF5KG5hbWUsIFsuLi51cGRhdGVkRmllbGRBcnJheVZhbHVlc10sIChkYXRhKSA9PiBkYXRhLCB7fSwgdHJ1ZSwgZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29udHJvbC5fc3RhdGVGbGFncy5hY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICBpc1dhdGNoZWQobmFtZSwgY29udHJvbC5fbmFtZXMpICYmIGNvbnRyb2wuX3N1YmplY3RzLnN0YXRlLm5leHQoe30pO1xyXG4gICAgICAgIGlmIChfYWN0aW9uZWQuY3VycmVudCkge1xyXG4gICAgICAgICAgICBjb250cm9sLl9leGVjdXRlU2NoZW1hKFtuYW1lXSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IGdldChyZXN1bHQuZXJyb3JzLCBuYW1lKTtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci50eXBlICYmICFnZXQoY29udHJvbC5fZm9ybVN0YXRlLmVycm9ycywgbmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXQoY29udHJvbC5fZm9ybVN0YXRlLmVycm9ycywgbmFtZSwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2wuX3N1YmplY3RzLnN0YXRlLm5leHQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM6IGNvbnRyb2wuX2Zvcm1TdGF0ZS5lcnJvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250cm9sLl9zdWJqZWN0cy53YXRjaC5uZXh0KHtcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgdmFsdWVzOiBjb250cm9sLl9mb3JtVmFsdWVzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnRyb2wuX25hbWVzLmZvY3VzICYmXHJcbiAgICAgICAgICAgIGZvY3VzRmllbGRCeShjb250cm9sLl9maWVsZHMsIChrZXkpID0+IGtleS5zdGFydHNXaXRoKGNvbnRyb2wuX25hbWVzLmZvY3VzKSk7XHJcbiAgICAgICAgY29udHJvbC5fbmFtZXMuZm9jdXMgPSAnJztcclxuICAgICAgICBjb250cm9sLl9wcm94eUZvcm1TdGF0ZS5pc1ZhbGlkICYmIGNvbnRyb2wuX3VwZGF0ZVZhbGlkKCk7XHJcbiAgICB9LCBbZmllbGRzLCBuYW1lLCBjb250cm9sXSk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICFnZXQoY29udHJvbC5fZm9ybVZhbHVlcywgbmFtZSkgJiYgY29udHJvbC5fdXBkYXRlRmllbGRBcnJheShuYW1lKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAoY29udHJvbC5fb3B0aW9ucy5zaG91bGRVbnJlZ2lzdGVyIHx8IHNob3VsZFVucmVnaXN0ZXIpICYmXHJcbiAgICAgICAgICAgICAgICBjb250cm9sLnVucmVnaXN0ZXIobmFtZSk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtuYW1lLCBjb250cm9sLCBrZXlOYW1lLCBzaG91bGRVbnJlZ2lzdGVyXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHN3YXA6IFJlYWN0LnVzZUNhbGxiYWNrKHN3YXAsIFt1cGRhdGVWYWx1ZXMsIG5hbWUsIGNvbnRyb2xdKSxcclxuICAgICAgICBtb3ZlOiBSZWFjdC51c2VDYWxsYmFjayhtb3ZlLCBbdXBkYXRlVmFsdWVzLCBuYW1lLCBjb250cm9sXSksXHJcbiAgICAgICAgcHJlcGVuZDogUmVhY3QudXNlQ2FsbGJhY2socHJlcGVuZCQxLCBbdXBkYXRlVmFsdWVzLCBuYW1lLCBjb250cm9sXSksXHJcbiAgICAgICAgYXBwZW5kOiBSZWFjdC51c2VDYWxsYmFjayhhcHBlbmQkMSwgW3VwZGF0ZVZhbHVlcywgbmFtZSwgY29udHJvbF0pLFxyXG4gICAgICAgIHJlbW92ZTogUmVhY3QudXNlQ2FsbGJhY2socmVtb3ZlLCBbdXBkYXRlVmFsdWVzLCBuYW1lLCBjb250cm9sXSksXHJcbiAgICAgICAgaW5zZXJ0OiBSZWFjdC51c2VDYWxsYmFjayhpbnNlcnQkMSwgW3VwZGF0ZVZhbHVlcywgbmFtZSwgY29udHJvbF0pLFxyXG4gICAgICAgIHVwZGF0ZTogUmVhY3QudXNlQ2FsbGJhY2sodXBkYXRlLCBbdXBkYXRlVmFsdWVzLCBuYW1lLCBjb250cm9sXSksXHJcbiAgICAgICAgcmVwbGFjZTogUmVhY3QudXNlQ2FsbGJhY2socmVwbGFjZSwgW3VwZGF0ZVZhbHVlcywgbmFtZSwgY29udHJvbF0pLFxyXG4gICAgICAgIGZpZWxkczogUmVhY3QudXNlTWVtbygoKSA9PiBmaWVsZHMubWFwKChmaWVsZCwgaW5kZXgpID0+IChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZpZWxkKSwgeyBba2V5TmFtZV06IGlkcy5jdXJyZW50W2luZGV4XSB8fCBnZW5lcmF0ZUlkKCkgfSkpKSwgW2ZpZWxkcywga2V5TmFtZV0pLFxyXG4gICAgfTtcclxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdWJqZWN0KCkge1xyXG4gICAgbGV0IF9vYnNlcnZlcnMgPSBbXTtcclxuICAgIGNvbnN0IG5leHQgPSAodmFsdWUpID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IG9ic2VydmVyIG9mIF9vYnNlcnZlcnMpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHN1YnNjcmliZSA9IChvYnNlcnZlcikgPT4ge1xyXG4gICAgICAgIF9vYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdW5zdWJzY3JpYmU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIF9vYnNlcnZlcnMgPSBfb2JzZXJ2ZXJzLmZpbHRlcigobykgPT4gbyAhPT0gb2JzZXJ2ZXIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSAoKSA9PiB7XHJcbiAgICAgICAgX29ic2VydmVycyA9IFtdO1xyXG4gICAgfTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0IG9ic2VydmVycygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9vYnNlcnZlcnM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBuZXh0LFxyXG4gICAgICAgIHN1YnNjcmliZSxcclxuICAgICAgICB1bnN1YnNjcmliZSxcclxuICAgIH07XHJcbn1cblxudmFyIGlzUHJpbWl0aXZlID0gKHZhbHVlKSA9PiBpc051bGxPclVuZGVmaW5lZCh2YWx1ZSkgfHwgIWlzT2JqZWN0VHlwZSh2YWx1ZSk7XG5cbmZ1bmN0aW9uIGRlZXBFcXVhbChvYmplY3QxLCBvYmplY3QyKSB7XHJcbiAgICBpZiAoaXNQcmltaXRpdmUob2JqZWN0MSkgfHwgaXNQcmltaXRpdmUob2JqZWN0MikpIHtcclxuICAgICAgICByZXR1cm4gb2JqZWN0MSA9PT0gb2JqZWN0MjtcclxuICAgIH1cclxuICAgIGlmIChpc0RhdGVPYmplY3Qob2JqZWN0MSkgJiYgaXNEYXRlT2JqZWN0KG9iamVjdDIpKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iamVjdDEuZ2V0VGltZSgpID09PSBvYmplY3QyLmdldFRpbWUoKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGtleXMxID0gT2JqZWN0LmtleXMob2JqZWN0MSk7XHJcbiAgICBjb25zdCBrZXlzMiA9IE9iamVjdC5rZXlzKG9iamVjdDIpO1xyXG4gICAgaWYgKGtleXMxLmxlbmd0aCAhPT0ga2V5czIubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBrZXkgb2Yga2V5czEpIHtcclxuICAgICAgICBjb25zdCB2YWwxID0gb2JqZWN0MVtrZXldO1xyXG4gICAgICAgIGlmICgha2V5czIuaW5jbHVkZXMoa2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrZXkgIT09ICdyZWYnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbDIgPSBvYmplY3QyW2tleV07XHJcbiAgICAgICAgICAgIGlmICgoaXNEYXRlT2JqZWN0KHZhbDEpICYmIGlzRGF0ZU9iamVjdCh2YWwyKSkgfHxcclxuICAgICAgICAgICAgICAgIChpc09iamVjdCh2YWwxKSAmJiBpc09iamVjdCh2YWwyKSkgfHxcclxuICAgICAgICAgICAgICAgIChBcnJheS5pc0FycmF5KHZhbDEpICYmIEFycmF5LmlzQXJyYXkodmFsMikpXHJcbiAgICAgICAgICAgICAgICA/ICFkZWVwRXF1YWwodmFsMSwgdmFsMilcclxuICAgICAgICAgICAgICAgIDogdmFsMSAhPT0gdmFsMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cblxudmFyIGdldFZhbGlkYXRpb25Nb2RlcyA9IChtb2RlKSA9PiAoe1xyXG4gICAgaXNPblN1Ym1pdDogIW1vZGUgfHwgbW9kZSA9PT0gVkFMSURBVElPTl9NT0RFLm9uU3VibWl0LFxyXG4gICAgaXNPbkJsdXI6IG1vZGUgPT09IFZBTElEQVRJT05fTU9ERS5vbkJsdXIsXHJcbiAgICBpc09uQ2hhbmdlOiBtb2RlID09PSBWQUxJREFUSU9OX01PREUub25DaGFuZ2UsXHJcbiAgICBpc09uQWxsOiBtb2RlID09PSBWQUxJREFUSU9OX01PREUuYWxsLFxyXG4gICAgaXNPblRvdWNoOiBtb2RlID09PSBWQUxJREFUSU9OX01PREUub25Ub3VjaGVkLFxyXG59KTtcblxudmFyIGlzQm9vbGVhbiA9ICh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbic7XG5cbnZhciBpc0ZpbGVJbnB1dCA9IChlbGVtZW50KSA9PiBlbGVtZW50LnR5cGUgPT09ICdmaWxlJztcblxudmFyIGlzSFRNTEVsZW1lbnQgPSAodmFsdWUpID0+IHZhbHVlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG5cbnZhciBpc011bHRpcGxlU2VsZWN0ID0gKGVsZW1lbnQpID0+IGVsZW1lbnQudHlwZSA9PT0gYHNlbGVjdC1tdWx0aXBsZWA7XG5cbnZhciBpc1JhZGlvSW5wdXQgPSAoZWxlbWVudCkgPT4gZWxlbWVudC50eXBlID09PSAncmFkaW8nO1xuXG52YXIgaXNSYWRpb09yQ2hlY2tib3ggPSAocmVmKSA9PiBpc1JhZGlvSW5wdXQocmVmKSB8fCBpc0NoZWNrQm94SW5wdXQocmVmKTtcblxudmFyIGlzV2ViID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgIHR5cGVvZiB3aW5kb3cuSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmXHJcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xuXG52YXIgbGl2ZSA9IChyZWYpID0+IGlzSFRNTEVsZW1lbnQocmVmKSAmJiByZWYuaXNDb25uZWN0ZWQ7XG5cbmZ1bmN0aW9uIGJhc2VHZXQob2JqZWN0LCB1cGRhdGVQYXRoKSB7XHJcbiAgICBjb25zdCBsZW5ndGggPSB1cGRhdGVQYXRoLnNsaWNlKDAsIC0xKS5sZW5ndGg7XHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgb2JqZWN0ID0gaXNVbmRlZmluZWQob2JqZWN0KSA/IGluZGV4KysgOiBvYmplY3RbdXBkYXRlUGF0aFtpbmRleCsrXV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2JqZWN0O1xyXG59XHJcbmZ1bmN0aW9uIHVuc2V0KG9iamVjdCwgcGF0aCkge1xyXG4gICAgY29uc3QgdXBkYXRlUGF0aCA9IGlzS2V5KHBhdGgpID8gW3BhdGhdIDogc3RyaW5nVG9QYXRoKHBhdGgpO1xyXG4gICAgY29uc3QgY2hpbGRPYmplY3QgPSB1cGRhdGVQYXRoLmxlbmd0aCA9PSAxID8gb2JqZWN0IDogYmFzZUdldChvYmplY3QsIHVwZGF0ZVBhdGgpO1xyXG4gICAgY29uc3Qga2V5ID0gdXBkYXRlUGF0aFt1cGRhdGVQYXRoLmxlbmd0aCAtIDFdO1xyXG4gICAgbGV0IHByZXZpb3VzT2JqUmVmO1xyXG4gICAgaWYgKGNoaWxkT2JqZWN0KSB7XHJcbiAgICAgICAgZGVsZXRlIGNoaWxkT2JqZWN0W2tleV07XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IHVwZGF0ZVBhdGguc2xpY2UoMCwgLTEpLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XHJcbiAgICAgICAgbGV0IG9iamVjdFJlZjtcclxuICAgICAgICBjb25zdCBjdXJyZW50UGF0aHMgPSB1cGRhdGVQYXRoLnNsaWNlKDAsIC0oayArIDEpKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50UGF0aHNMZW5ndGggPSBjdXJyZW50UGF0aHMubGVuZ3RoIC0gMTtcclxuICAgICAgICBpZiAoayA+IDApIHtcclxuICAgICAgICAgICAgcHJldmlvdXNPYmpSZWYgPSBvYmplY3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlICgrK2luZGV4IDwgY3VycmVudFBhdGhzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gY3VycmVudFBhdGhzW2luZGV4XTtcclxuICAgICAgICAgICAgb2JqZWN0UmVmID0gb2JqZWN0UmVmID8gb2JqZWN0UmVmW2l0ZW1dIDogb2JqZWN0W2l0ZW1dO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFBhdGhzTGVuZ3RoID09PSBpbmRleCAmJlxyXG4gICAgICAgICAgICAgICAgKChpc09iamVjdChvYmplY3RSZWYpICYmIGlzRW1wdHlPYmplY3Qob2JqZWN0UmVmKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAoQXJyYXkuaXNBcnJheShvYmplY3RSZWYpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICFvYmplY3RSZWYuZmlsdGVyKChkYXRhKSA9PiAoaXNPYmplY3QoZGF0YSkgJiYgIWlzRW1wdHlPYmplY3QoZGF0YSkpIHx8IGlzQm9vbGVhbihkYXRhKSkubGVuZ3RoKSkpIHtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzT2JqUmVmID8gZGVsZXRlIHByZXZpb3VzT2JqUmVmW2l0ZW1dIDogZGVsZXRlIG9iamVjdFtpdGVtXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcmV2aW91c09ialJlZiA9IG9iamVjdFJlZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2JqZWN0O1xyXG59XG5cbmZ1bmN0aW9uIG1hcmtGaWVsZHNEaXJ0eShkYXRhLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgY29uc3QgaXNQYXJlbnROb2RlQXJyYXkgPSBBcnJheS5pc0FycmF5KGRhdGEpO1xyXG4gICAgaWYgKGlzT2JqZWN0KGRhdGEpIHx8IGlzUGFyZW50Tm9kZUFycmF5KSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhW2tleV0pIHx8XHJcbiAgICAgICAgICAgICAgICAoaXNPYmplY3QoZGF0YVtrZXldKSAmJiAhb2JqZWN0SGFzRnVuY3Rpb24oZGF0YVtrZXldKSkpIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkc1trZXldID0gQXJyYXkuaXNBcnJheShkYXRhW2tleV0pID8gW10gOiB7fTtcclxuICAgICAgICAgICAgICAgIG1hcmtGaWVsZHNEaXJ0eShkYXRhW2tleV0sIGZpZWxkc1trZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICghaXNOdWxsT3JVbmRlZmluZWQoZGF0YVtrZXldKSkge1xyXG4gICAgICAgICAgICAgICAgZmllbGRzW2tleV0gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZpZWxkcztcclxufVxyXG5mdW5jdGlvbiBnZXREaXJ0eUZpZWxkc0Zyb21EZWZhdWx0VmFsdWVzKGRhdGEsIGZvcm1WYWx1ZXMsIGRpcnR5RmllbGRzRnJvbVZhbHVlcykge1xyXG4gICAgY29uc3QgaXNQYXJlbnROb2RlQXJyYXkgPSBBcnJheS5pc0FycmF5KGRhdGEpO1xyXG4gICAgaWYgKGlzT2JqZWN0KGRhdGEpIHx8IGlzUGFyZW50Tm9kZUFycmF5KSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhW2tleV0pIHx8XHJcbiAgICAgICAgICAgICAgICAoaXNPYmplY3QoZGF0YVtrZXldKSAmJiAhb2JqZWN0SGFzRnVuY3Rpb24oZGF0YVtrZXldKSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc1VuZGVmaW5lZChmb3JtVmFsdWVzKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGlzUHJpbWl0aXZlKGRpcnR5RmllbGRzRnJvbVZhbHVlc1trZXldKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpcnR5RmllbGRzRnJvbVZhbHVlc1trZXldID0gQXJyYXkuaXNBcnJheShkYXRhW2tleV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gbWFya0ZpZWxkc0RpcnR5KGRhdGFba2V5XSwgW10pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogT2JqZWN0LmFzc2lnbih7fSwgbWFya0ZpZWxkc0RpcnR5KGRhdGFba2V5XSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0RGlydHlGaWVsZHNGcm9tRGVmYXVsdFZhbHVlcyhkYXRhW2tleV0sIGlzTnVsbE9yVW5kZWZpbmVkKGZvcm1WYWx1ZXMpID8ge30gOiBmb3JtVmFsdWVzW2tleV0sIGRpcnR5RmllbGRzRnJvbVZhbHVlc1trZXldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRpcnR5RmllbGRzRnJvbVZhbHVlc1trZXldID0gIWRlZXBFcXVhbChkYXRhW2tleV0sIGZvcm1WYWx1ZXNba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGlydHlGaWVsZHNGcm9tVmFsdWVzO1xyXG59XHJcbnZhciBnZXREaXJ0eUZpZWxkcyA9IChkZWZhdWx0VmFsdWVzLCBmb3JtVmFsdWVzKSA9PiBnZXREaXJ0eUZpZWxkc0Zyb21EZWZhdWx0VmFsdWVzKGRlZmF1bHRWYWx1ZXMsIGZvcm1WYWx1ZXMsIG1hcmtGaWVsZHNEaXJ0eShmb3JtVmFsdWVzKSk7XG5cbmNvbnN0IGRlZmF1bHRSZXN1bHQgPSB7XHJcbiAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICBpc1ZhbGlkOiBmYWxzZSxcclxufTtcclxuY29uc3QgdmFsaWRSZXN1bHQgPSB7IHZhbHVlOiB0cnVlLCBpc1ZhbGlkOiB0cnVlIH07XHJcbnZhciBnZXRDaGVja2JveFZhbHVlID0gKG9wdGlvbnMpID0+IHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMpKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBvcHRpb25zXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbiAmJiBvcHRpb24uY2hlY2tlZCAmJiAhb3B0aW9uLmRpc2FibGVkKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgob3B0aW9uKSA9PiBvcHRpb24udmFsdWUpO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogdmFsdWVzLCBpc1ZhbGlkOiAhIXZhbHVlcy5sZW5ndGggfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnNbMF0uY2hlY2tlZCAmJiAhb3B0aW9uc1swXS5kaXNhYmxlZFxyXG4gICAgICAgICAgICA/IC8vIEB0cy1leHBlY3QtZXJyb3IgZXhwZWN0ZWQgdG8gd29yayBpbiB0aGUgYnJvd3NlclxyXG4gICAgICAgICAgICAgICAgb3B0aW9uc1swXS5hdHRyaWJ1dGVzICYmICFpc1VuZGVmaW5lZChvcHRpb25zWzBdLmF0dHJpYnV0ZXMudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBpc1VuZGVmaW5lZChvcHRpb25zWzBdLnZhbHVlKSB8fCBvcHRpb25zWzBdLnZhbHVlID09PSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHZhbGlkUmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogeyB2YWx1ZTogb3B0aW9uc1swXS52YWx1ZSwgaXNWYWxpZDogdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgOiB2YWxpZFJlc3VsdFxyXG4gICAgICAgICAgICA6IGRlZmF1bHRSZXN1bHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGVmYXVsdFJlc3VsdDtcclxufTtcblxudmFyIGdldEZpZWxkVmFsdWVBcyA9ICh2YWx1ZSwgeyB2YWx1ZUFzTnVtYmVyLCB2YWx1ZUFzRGF0ZSwgc2V0VmFsdWVBcyB9KSA9PiBpc1VuZGVmaW5lZCh2YWx1ZSlcclxuICAgID8gdmFsdWVcclxuICAgIDogdmFsdWVBc051bWJlclxyXG4gICAgICAgID8gdmFsdWUgPT09ICcnXHJcbiAgICAgICAgICAgID8gTmFOXHJcbiAgICAgICAgICAgIDogK3ZhbHVlXHJcbiAgICAgICAgOiB2YWx1ZUFzRGF0ZSAmJiBpc1N0cmluZyh2YWx1ZSlcclxuICAgICAgICAgICAgPyBuZXcgRGF0ZSh2YWx1ZSlcclxuICAgICAgICAgICAgOiBzZXRWYWx1ZUFzXHJcbiAgICAgICAgICAgICAgICA/IHNldFZhbHVlQXModmFsdWUpXHJcbiAgICAgICAgICAgICAgICA6IHZhbHVlO1xuXG5jb25zdCBkZWZhdWx0UmV0dXJuID0ge1xyXG4gICAgaXNWYWxpZDogZmFsc2UsXHJcbiAgICB2YWx1ZTogbnVsbCxcclxufTtcclxudmFyIGdldFJhZGlvVmFsdWUgPSAob3B0aW9ucykgPT4gQXJyYXkuaXNBcnJheShvcHRpb25zKVxyXG4gICAgPyBvcHRpb25zLnJlZHVjZSgocHJldmlvdXMsIG9wdGlvbikgPT4gb3B0aW9uICYmIG9wdGlvbi5jaGVja2VkICYmICFvcHRpb24uZGlzYWJsZWRcclxuICAgICAgICA/IHtcclxuICAgICAgICAgICAgaXNWYWxpZDogdHJ1ZSxcclxuICAgICAgICAgICAgdmFsdWU6IG9wdGlvbi52YWx1ZSxcclxuICAgICAgICB9XHJcbiAgICAgICAgOiBwcmV2aW91cywgZGVmYXVsdFJldHVybilcclxuICAgIDogZGVmYXVsdFJldHVybjtcblxuZnVuY3Rpb24gZ2V0RmllbGRWYWx1ZShfZikge1xyXG4gICAgY29uc3QgcmVmID0gX2YucmVmO1xyXG4gICAgaWYgKF9mLnJlZnMgPyBfZi5yZWZzLmV2ZXJ5KChyZWYpID0+IHJlZi5kaXNhYmxlZCkgOiByZWYuZGlzYWJsZWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoaXNGaWxlSW5wdXQocmVmKSkge1xyXG4gICAgICAgIHJldHVybiByZWYuZmlsZXM7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNSYWRpb0lucHV0KHJlZikpIHtcclxuICAgICAgICByZXR1cm4gZ2V0UmFkaW9WYWx1ZShfZi5yZWZzKS52YWx1ZTtcclxuICAgIH1cclxuICAgIGlmIChpc011bHRpcGxlU2VsZWN0KHJlZikpIHtcclxuICAgICAgICByZXR1cm4gWy4uLnJlZi5zZWxlY3RlZE9wdGlvbnNdLm1hcCgoeyB2YWx1ZSB9KSA9PiB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNDaGVja0JveElucHV0KHJlZikpIHtcclxuICAgICAgICByZXR1cm4gZ2V0Q2hlY2tib3hWYWx1ZShfZi5yZWZzKS52YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBnZXRGaWVsZFZhbHVlQXMoaXNVbmRlZmluZWQocmVmLnZhbHVlKSA/IF9mLnJlZi52YWx1ZSA6IHJlZi52YWx1ZSwgX2YpO1xyXG59XG5cbnZhciBnZXRSZXNvbHZlck9wdGlvbnMgPSAoZmllbGRzTmFtZXMsIF9maWVsZHMsIGNyaXRlcmlhTW9kZSwgc2hvdWxkVXNlTmF0aXZlVmFsaWRhdGlvbikgPT4ge1xyXG4gICAgY29uc3QgZmllbGRzID0ge307XHJcbiAgICBmb3IgKGNvbnN0IG5hbWUgb2YgZmllbGRzTmFtZXMpIHtcclxuICAgICAgICBjb25zdCBmaWVsZCA9IGdldChfZmllbGRzLCBuYW1lKTtcclxuICAgICAgICBmaWVsZCAmJiBzZXQoZmllbGRzLCBuYW1lLCBmaWVsZC5fZik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNyaXRlcmlhTW9kZSxcclxuICAgICAgICBuYW1lczogWy4uLmZpZWxkc05hbWVzXSxcclxuICAgICAgICBmaWVsZHMsXHJcbiAgICAgICAgc2hvdWxkVXNlTmF0aXZlVmFsaWRhdGlvbixcclxuICAgIH07XHJcbn07XG5cbnZhciBpc1JlZ2V4ID0gKHZhbHVlKSA9PiB2YWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cDtcblxudmFyIGdldFJ1bGVWYWx1ZSA9IChydWxlKSA9PiBpc1VuZGVmaW5lZChydWxlKVxyXG4gICAgPyB1bmRlZmluZWRcclxuICAgIDogaXNSZWdleChydWxlKVxyXG4gICAgICAgID8gcnVsZS5zb3VyY2VcclxuICAgICAgICA6IGlzT2JqZWN0KHJ1bGUpXHJcbiAgICAgICAgICAgID8gaXNSZWdleChydWxlLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgPyBydWxlLnZhbHVlLnNvdXJjZVxyXG4gICAgICAgICAgICAgICAgOiBydWxlLnZhbHVlXHJcbiAgICAgICAgICAgIDogcnVsZTtcblxudmFyIGhhc1ZhbGlkYXRpb24gPSAob3B0aW9ucykgPT4gb3B0aW9ucy5tb3VudCAmJlxyXG4gICAgKG9wdGlvbnMucmVxdWlyZWQgfHxcclxuICAgICAgICBvcHRpb25zLm1pbiB8fFxyXG4gICAgICAgIG9wdGlvbnMubWF4IHx8XHJcbiAgICAgICAgb3B0aW9ucy5tYXhMZW5ndGggfHxcclxuICAgICAgICBvcHRpb25zLm1pbkxlbmd0aCB8fFxyXG4gICAgICAgIG9wdGlvbnMucGF0dGVybiB8fFxyXG4gICAgICAgIG9wdGlvbnMudmFsaWRhdGUpO1xuXG5mdW5jdGlvbiBzY2hlbWFFcnJvckxvb2t1cChlcnJvcnMsIF9maWVsZHMsIG5hbWUpIHtcclxuICAgIGNvbnN0IGVycm9yID0gZ2V0KGVycm9ycywgbmFtZSk7XHJcbiAgICBpZiAoZXJyb3IgfHwgaXNLZXkobmFtZSkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlcnJvcixcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29uc3QgbmFtZXMgPSBuYW1lLnNwbGl0KCcuJyk7XHJcbiAgICB3aGlsZSAobmFtZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgZmllbGROYW1lID0gbmFtZXMuam9pbignLicpO1xyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gZ2V0KF9maWVsZHMsIGZpZWxkTmFtZSk7XHJcbiAgICAgICAgY29uc3QgZm91bmRFcnJvciA9IGdldChlcnJvcnMsIGZpZWxkTmFtZSk7XHJcbiAgICAgICAgaWYgKGZpZWxkICYmICFBcnJheS5pc0FycmF5KGZpZWxkKSAmJiBuYW1lICE9PSBmaWVsZE5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgbmFtZSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZm91bmRFcnJvciAmJiBmb3VuZEVycm9yLnR5cGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IGZpZWxkTmFtZSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmb3VuZEVycm9yLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBuYW1lcy5wb3AoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZSxcclxuICAgIH07XHJcbn1cblxudmFyIHNraXBWYWxpZGF0aW9uID0gKGlzQmx1ckV2ZW50LCBpc1RvdWNoZWQsIGlzU3VibWl0dGVkLCByZVZhbGlkYXRlTW9kZSwgbW9kZSkgPT4ge1xyXG4gICAgaWYgKG1vZGUuaXNPbkFsbCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCFpc1N1Ym1pdHRlZCAmJiBtb2RlLmlzT25Ub3VjaCkge1xyXG4gICAgICAgIHJldHVybiAhKGlzVG91Y2hlZCB8fCBpc0JsdXJFdmVudCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpc1N1Ym1pdHRlZCA/IHJlVmFsaWRhdGVNb2RlLmlzT25CbHVyIDogbW9kZS5pc09uQmx1cikge1xyXG4gICAgICAgIHJldHVybiAhaXNCbHVyRXZlbnQ7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpc1N1Ym1pdHRlZCA/IHJlVmFsaWRhdGVNb2RlLmlzT25DaGFuZ2UgOiBtb2RlLmlzT25DaGFuZ2UpIHtcclxuICAgICAgICByZXR1cm4gaXNCbHVyRXZlbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufTtcblxudmFyIHVuc2V0RW1wdHlBcnJheSA9IChyZWYsIG5hbWUpID0+ICFjb21wYWN0KGdldChyZWYsIG5hbWUpKS5sZW5ndGggJiYgdW5zZXQocmVmLCBuYW1lKTtcblxudmFyIGlzTWVzc2FnZSA9ICh2YWx1ZSkgPT4gaXNTdHJpbmcodmFsdWUpIHx8IFJlYWN0LmlzVmFsaWRFbGVtZW50KHZhbHVlKTtcblxuZnVuY3Rpb24gZ2V0VmFsaWRhdGVFcnJvcihyZXN1bHQsIHJlZiwgdHlwZSA9ICd2YWxpZGF0ZScpIHtcclxuICAgIGlmIChpc01lc3NhZ2UocmVzdWx0KSB8fFxyXG4gICAgICAgIChBcnJheS5pc0FycmF5KHJlc3VsdCkgJiYgcmVzdWx0LmV2ZXJ5KGlzTWVzc2FnZSkpIHx8XHJcbiAgICAgICAgKGlzQm9vbGVhbihyZXN1bHQpICYmICFyZXN1bHQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogaXNNZXNzYWdlKHJlc3VsdCkgPyByZXN1bHQgOiAnJyxcclxuICAgICAgICAgICAgcmVmLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cblxudmFyIGdldFZhbHVlQW5kTWVzc2FnZSA9ICh2YWxpZGF0aW9uRGF0YSkgPT4gaXNPYmplY3QodmFsaWRhdGlvbkRhdGEpICYmICFpc1JlZ2V4KHZhbGlkYXRpb25EYXRhKVxyXG4gICAgPyB2YWxpZGF0aW9uRGF0YVxyXG4gICAgOiB7XHJcbiAgICAgICAgdmFsdWU6IHZhbGlkYXRpb25EYXRhLFxyXG4gICAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgfTtcblxudmFyIHZhbGlkYXRlRmllbGQgPSBhc3luYyAoZmllbGQsIGlucHV0VmFsdWUsIHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSwgc2hvdWxkVXNlTmF0aXZlVmFsaWRhdGlvbikgPT4ge1xyXG4gICAgY29uc3QgeyByZWYsIHJlZnMsIHJlcXVpcmVkLCBtYXhMZW5ndGgsIG1pbkxlbmd0aCwgbWluLCBtYXgsIHBhdHRlcm4sIHZhbGlkYXRlLCBuYW1lLCB2YWx1ZUFzTnVtYmVyLCBtb3VudCwgZGlzYWJsZWQsIH0gPSBmaWVsZC5fZjtcclxuICAgIGlmICghbW91bnQgfHwgZGlzYWJsZWQpIHtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcbiAgICBjb25zdCBpbnB1dFJlZiA9IHJlZnMgPyByZWZzWzBdIDogcmVmO1xyXG4gICAgY29uc3Qgc2V0Q3VzdG9tVmFsaWRpdHkgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIGlmIChzaG91bGRVc2VOYXRpdmVWYWxpZGF0aW9uICYmIGlucHV0UmVmLnJlcG9ydFZhbGlkaXR5KSB7XHJcbiAgICAgICAgICAgIGlucHV0UmVmLnNldEN1c3RvbVZhbGlkaXR5KGlzQm9vbGVhbihtZXNzYWdlKSA/ICcnIDogbWVzc2FnZSB8fCAnICcpO1xyXG4gICAgICAgICAgICBpbnB1dFJlZi5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBlcnJvciA9IHt9O1xyXG4gICAgY29uc3QgaXNSYWRpbyA9IGlzUmFkaW9JbnB1dChyZWYpO1xyXG4gICAgY29uc3QgaXNDaGVja0JveCA9IGlzQ2hlY2tCb3hJbnB1dChyZWYpO1xyXG4gICAgY29uc3QgaXNSYWRpb09yQ2hlY2tib3ggPSBpc1JhZGlvIHx8IGlzQ2hlY2tCb3g7XHJcbiAgICBjb25zdCBpc0VtcHR5ID0gKCh2YWx1ZUFzTnVtYmVyIHx8IGlzRmlsZUlucHV0KHJlZikpICYmICFyZWYudmFsdWUpIHx8XHJcbiAgICAgICAgaW5wdXRWYWx1ZSA9PT0gJycgfHxcclxuICAgICAgICAoQXJyYXkuaXNBcnJheShpbnB1dFZhbHVlKSAmJiAhaW5wdXRWYWx1ZS5sZW5ndGgpO1xyXG4gICAgY29uc3QgYXBwZW5kRXJyb3JzQ3VycnkgPSBhcHBlbmRFcnJvcnMuYmluZChudWxsLCBuYW1lLCB2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEsIGVycm9yKTtcclxuICAgIGNvbnN0IGdldE1pbk1heE1lc3NhZ2UgPSAoZXhjZWVkTWF4LCBtYXhMZW5ndGhNZXNzYWdlLCBtaW5MZW5ndGhNZXNzYWdlLCBtYXhUeXBlID0gSU5QVVRfVkFMSURBVElPTl9SVUxFUy5tYXhMZW5ndGgsIG1pblR5cGUgPSBJTlBVVF9WQUxJREFUSU9OX1JVTEVTLm1pbkxlbmd0aCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBleGNlZWRNYXggPyBtYXhMZW5ndGhNZXNzYWdlIDogbWluTGVuZ3RoTWVzc2FnZTtcclxuICAgICAgICBlcnJvcltuYW1lXSA9IE9iamVjdC5hc3NpZ24oeyB0eXBlOiBleGNlZWRNYXggPyBtYXhUeXBlIDogbWluVHlwZSwgbWVzc2FnZSxcclxuICAgICAgICAgICAgcmVmIH0sIGFwcGVuZEVycm9yc0N1cnJ5KGV4Y2VlZE1heCA/IG1heFR5cGUgOiBtaW5UeXBlLCBtZXNzYWdlKSk7XHJcbiAgICB9O1xyXG4gICAgaWYgKHJlcXVpcmVkICYmXHJcbiAgICAgICAgKCghaXNSYWRpb09yQ2hlY2tib3ggJiYgKGlzRW1wdHkgfHwgaXNOdWxsT3JVbmRlZmluZWQoaW5wdXRWYWx1ZSkpKSB8fFxyXG4gICAgICAgICAgICAoaXNCb29sZWFuKGlucHV0VmFsdWUpICYmICFpbnB1dFZhbHVlKSB8fFxyXG4gICAgICAgICAgICAoaXNDaGVja0JveCAmJiAhZ2V0Q2hlY2tib3hWYWx1ZShyZWZzKS5pc1ZhbGlkKSB8fFxyXG4gICAgICAgICAgICAoaXNSYWRpbyAmJiAhZ2V0UmFkaW9WYWx1ZShyZWZzKS5pc1ZhbGlkKSkpIHtcclxuICAgICAgICBjb25zdCB7IHZhbHVlLCBtZXNzYWdlIH0gPSBpc01lc3NhZ2UocmVxdWlyZWQpXHJcbiAgICAgICAgICAgID8geyB2YWx1ZTogISFyZXF1aXJlZCwgbWVzc2FnZTogcmVxdWlyZWQgfVxyXG4gICAgICAgICAgICA6IGdldFZhbHVlQW5kTWVzc2FnZShyZXF1aXJlZCk7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGVycm9yW25hbWVdID0gT2JqZWN0LmFzc2lnbih7IHR5cGU6IElOUFVUX1ZBTElEQVRJT05fUlVMRVMucmVxdWlyZWQsIG1lc3NhZ2UsIHJlZjogaW5wdXRSZWYgfSwgYXBwZW5kRXJyb3JzQ3VycnkoSU5QVVRfVkFMSURBVElPTl9SVUxFUy5yZXF1aXJlZCwgbWVzc2FnZSkpO1xyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VzdG9tVmFsaWRpdHkobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzRW1wdHkgJiYgKCFpc051bGxPclVuZGVmaW5lZChtaW4pIHx8ICFpc051bGxPclVuZGVmaW5lZChtYXgpKSkge1xyXG4gICAgICAgIGxldCBleGNlZWRNYXg7XHJcbiAgICAgICAgbGV0IGV4Y2VlZE1pbjtcclxuICAgICAgICBjb25zdCBtYXhPdXRwdXQgPSBnZXRWYWx1ZUFuZE1lc3NhZ2UobWF4KTtcclxuICAgICAgICBjb25zdCBtaW5PdXRwdXQgPSBnZXRWYWx1ZUFuZE1lc3NhZ2UobWluKTtcclxuICAgICAgICBpZiAoIWlzTmFOKGlucHV0VmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlTnVtYmVyID0gcmVmLnZhbHVlQXNOdW1iZXIgfHwgK2lucHV0VmFsdWU7XHJcbiAgICAgICAgICAgIGlmICghaXNOdWxsT3JVbmRlZmluZWQobWF4T3V0cHV0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgZXhjZWVkTWF4ID0gdmFsdWVOdW1iZXIgPiBtYXhPdXRwdXQudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFpc051bGxPclVuZGVmaW5lZChtaW5PdXRwdXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBleGNlZWRNaW4gPSB2YWx1ZU51bWJlciA8IG1pbk91dHB1dC52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVEYXRlID0gcmVmLnZhbHVlQXNEYXRlIHx8IG5ldyBEYXRlKGlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoaXNTdHJpbmcobWF4T3V0cHV0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgZXhjZWVkTWF4ID0gdmFsdWVEYXRlID4gbmV3IERhdGUobWF4T3V0cHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNTdHJpbmcobWluT3V0cHV0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgZXhjZWVkTWluID0gdmFsdWVEYXRlIDwgbmV3IERhdGUobWluT3V0cHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXhjZWVkTWF4IHx8IGV4Y2VlZE1pbikge1xyXG4gICAgICAgICAgICBnZXRNaW5NYXhNZXNzYWdlKCEhZXhjZWVkTWF4LCBtYXhPdXRwdXQubWVzc2FnZSwgbWluT3V0cHV0Lm1lc3NhZ2UsIElOUFVUX1ZBTElEQVRJT05fUlVMRVMubWF4LCBJTlBVVF9WQUxJREFUSU9OX1JVTEVTLm1pbik7XHJcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXN0b21WYWxpZGl0eShlcnJvcltuYW1lXS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICgobWF4TGVuZ3RoIHx8IG1pbkxlbmd0aCkgJiYgIWlzRW1wdHkgJiYgaXNTdHJpbmcoaW5wdXRWYWx1ZSkpIHtcclxuICAgICAgICBjb25zdCBtYXhMZW5ndGhPdXRwdXQgPSBnZXRWYWx1ZUFuZE1lc3NhZ2UobWF4TGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBtaW5MZW5ndGhPdXRwdXQgPSBnZXRWYWx1ZUFuZE1lc3NhZ2UobWluTGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBleGNlZWRNYXggPSAhaXNOdWxsT3JVbmRlZmluZWQobWF4TGVuZ3RoT3V0cHV0LnZhbHVlKSAmJlxyXG4gICAgICAgICAgICBpbnB1dFZhbHVlLmxlbmd0aCA+IG1heExlbmd0aE91dHB1dC52YWx1ZTtcclxuICAgICAgICBjb25zdCBleGNlZWRNaW4gPSAhaXNOdWxsT3JVbmRlZmluZWQobWluTGVuZ3RoT3V0cHV0LnZhbHVlKSAmJlxyXG4gICAgICAgICAgICBpbnB1dFZhbHVlLmxlbmd0aCA8IG1pbkxlbmd0aE91dHB1dC52YWx1ZTtcclxuICAgICAgICBpZiAoZXhjZWVkTWF4IHx8IGV4Y2VlZE1pbikge1xyXG4gICAgICAgICAgICBnZXRNaW5NYXhNZXNzYWdlKGV4Y2VlZE1heCwgbWF4TGVuZ3RoT3V0cHV0Lm1lc3NhZ2UsIG1pbkxlbmd0aE91dHB1dC5tZXNzYWdlKTtcclxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEpIHtcclxuICAgICAgICAgICAgICAgIHNldEN1c3RvbVZhbGlkaXR5KGVycm9yW25hbWVdLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHBhdHRlcm4gJiYgIWlzRW1wdHkgJiYgaXNTdHJpbmcoaW5wdXRWYWx1ZSkpIHtcclxuICAgICAgICBjb25zdCB7IHZhbHVlOiBwYXR0ZXJuVmFsdWUsIG1lc3NhZ2UgfSA9IGdldFZhbHVlQW5kTWVzc2FnZShwYXR0ZXJuKTtcclxuICAgICAgICBpZiAoaXNSZWdleChwYXR0ZXJuVmFsdWUpICYmICFpbnB1dFZhbHVlLm1hdGNoKHBhdHRlcm5WYWx1ZSkpIHtcclxuICAgICAgICAgICAgZXJyb3JbbmFtZV0gPSBPYmplY3QuYXNzaWduKHsgdHlwZTogSU5QVVRfVkFMSURBVElPTl9SVUxFUy5wYXR0ZXJuLCBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgcmVmIH0sIGFwcGVuZEVycm9yc0N1cnJ5KElOUFVUX1ZBTElEQVRJT05fUlVMRVMucGF0dGVybiwgbWVzc2FnZSkpO1xyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VzdG9tVmFsaWRpdHkobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodmFsaWRhdGUpIHtcclxuICAgICAgICBpZiAoaXNGdW5jdGlvbih2YWxpZGF0ZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdmFsaWRhdGUoaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRlRXJyb3IgPSBnZXRWYWxpZGF0ZUVycm9yKHJlc3VsdCwgaW5wdXRSZWYpO1xyXG4gICAgICAgICAgICBpZiAodmFsaWRhdGVFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgZXJyb3JbbmFtZV0gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHZhbGlkYXRlRXJyb3IpLCBhcHBlbmRFcnJvcnNDdXJyeShJTlBVVF9WQUxJREFUSU9OX1JVTEVTLnZhbGlkYXRlLCB2YWxpZGF0ZUVycm9yLm1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VzdG9tVmFsaWRpdHkodmFsaWRhdGVFcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNPYmplY3QodmFsaWRhdGUpKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWxpZGF0aW9uUmVzdWx0ID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHZhbGlkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzRW1wdHlPYmplY3QodmFsaWRhdGlvblJlc3VsdCkgJiYgIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsaWRhdGVFcnJvciA9IGdldFZhbGlkYXRlRXJyb3IoYXdhaXQgdmFsaWRhdGVba2V5XShpbnB1dFZhbHVlKSwgaW5wdXRSZWYsIGtleSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGVFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHZhbGlkYXRlRXJyb3IpLCBhcHBlbmRFcnJvcnNDdXJyeShrZXksIHZhbGlkYXRlRXJyb3IubWVzc2FnZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1c3RvbVZhbGlkaXR5KHZhbGlkYXRlRXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcltuYW1lXSA9IHZhbGlkYXRpb25SZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaXNFbXB0eU9iamVjdCh2YWxpZGF0aW9uUmVzdWx0KSkge1xyXG4gICAgICAgICAgICAgICAgZXJyb3JbbmFtZV0gPSBPYmplY3QuYXNzaWduKHsgcmVmOiBpbnB1dFJlZiB9LCB2YWxpZGF0aW9uUmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0Q3VzdG9tVmFsaWRpdHkodHJ1ZSk7XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbn07XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgbW9kZTogVkFMSURBVElPTl9NT0RFLm9uU3VibWl0LFxyXG4gICAgcmVWYWxpZGF0ZU1vZGU6IFZBTElEQVRJT05fTU9ERS5vbkNoYW5nZSxcclxuICAgIHNob3VsZEZvY3VzRXJyb3I6IHRydWUsXHJcbn07XHJcbmZ1bmN0aW9uIGNyZWF0ZUZvcm1Db250cm9sKHByb3BzID0ge30pIHtcclxuICAgIGxldCBfb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMpLCBwcm9wcyk7XHJcbiAgICBsZXQgX2Zvcm1TdGF0ZSA9IHtcclxuICAgICAgICBpc0RpcnR5OiBmYWxzZSxcclxuICAgICAgICBpc1ZhbGlkYXRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGRpcnR5RmllbGRzOiB7fSxcclxuICAgICAgICBpc1N1Ym1pdHRlZDogZmFsc2UsXHJcbiAgICAgICAgc3VibWl0Q291bnQ6IDAsXHJcbiAgICAgICAgdG91Y2hlZEZpZWxkczoge30sXHJcbiAgICAgICAgaXNTdWJtaXR0aW5nOiBmYWxzZSxcclxuICAgICAgICBpc1N1Ym1pdFN1Y2Nlc3NmdWw6IGZhbHNlLFxyXG4gICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yczoge30sXHJcbiAgICB9O1xyXG4gICAgbGV0IF9maWVsZHMgPSB7fTtcclxuICAgIGxldCBfZGVmYXVsdFZhbHVlcyA9IF9vcHRpb25zLmRlZmF1bHRWYWx1ZXMgfHwge307XHJcbiAgICBsZXQgX2Zvcm1WYWx1ZXMgPSBfb3B0aW9ucy5zaG91bGRVbnJlZ2lzdGVyXHJcbiAgICAgICAgPyB7fVxyXG4gICAgICAgIDogY2xvbmVPYmplY3QoX2RlZmF1bHRWYWx1ZXMpO1xyXG4gICAgbGV0IF9zdGF0ZUZsYWdzID0ge1xyXG4gICAgICAgIGFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgbW91bnQ6IGZhbHNlLFxyXG4gICAgICAgIHdhdGNoOiBmYWxzZSxcclxuICAgIH07XHJcbiAgICBsZXQgX25hbWVzID0ge1xyXG4gICAgICAgIG1vdW50OiBuZXcgU2V0KCksXHJcbiAgICAgICAgdW5Nb3VudDogbmV3IFNldCgpLFxyXG4gICAgICAgIGFycmF5OiBuZXcgU2V0KCksXHJcbiAgICAgICAgd2F0Y2g6IG5ldyBTZXQoKSxcclxuICAgIH07XHJcbiAgICBsZXQgZGVsYXlFcnJvckNhbGxiYWNrO1xyXG4gICAgbGV0IHRpbWVyID0gMDtcclxuICAgIGxldCB2YWxpZGF0ZUZpZWxkcyA9IHt9O1xyXG4gICAgY29uc3QgX3Byb3h5Rm9ybVN0YXRlID0ge1xyXG4gICAgICAgIGlzRGlydHk6IGZhbHNlLFxyXG4gICAgICAgIGRpcnR5RmllbGRzOiBmYWxzZSxcclxuICAgICAgICB0b3VjaGVkRmllbGRzOiBmYWxzZSxcclxuICAgICAgICBpc1ZhbGlkYXRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yczogZmFsc2UsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgX3N1YmplY3RzID0ge1xyXG4gICAgICAgIHdhdGNoOiBjcmVhdGVTdWJqZWN0KCksXHJcbiAgICAgICAgYXJyYXk6IGNyZWF0ZVN1YmplY3QoKSxcclxuICAgICAgICBzdGF0ZTogY3JlYXRlU3ViamVjdCgpLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHZhbGlkYXRpb25Nb2RlQmVmb3JlU3VibWl0ID0gZ2V0VmFsaWRhdGlvbk1vZGVzKF9vcHRpb25zLm1vZGUpO1xyXG4gICAgY29uc3QgdmFsaWRhdGlvbk1vZGVBZnRlclN1Ym1pdCA9IGdldFZhbGlkYXRpb25Nb2Rlcyhfb3B0aW9ucy5yZVZhbGlkYXRlTW9kZSk7XHJcbiAgICBjb25zdCBzaG91bGREaXNwbGF5QWxsQXNzb2NpYXRlZEVycm9ycyA9IF9vcHRpb25zLmNyaXRlcmlhTW9kZSA9PT0gVkFMSURBVElPTl9NT0RFLmFsbDtcclxuICAgIGNvbnN0IGRlYm91bmNlID0gKGNhbGxiYWNrLCB3YWl0KSA9PiAoLi4uYXJncykgPT4ge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgdGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBjYWxsYmFjayguLi5hcmdzKSwgd2FpdCk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgX3VwZGF0ZVZhbGlkID0gYXN5bmMgKHNob3VsZFNraXBSZW5kZXIpID0+IHtcclxuICAgICAgICBsZXQgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChfcHJveHlGb3JtU3RhdGUuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICBpc1ZhbGlkID0gX29wdGlvbnMucmVzb2x2ZXJcclxuICAgICAgICAgICAgICAgID8gaXNFbXB0eU9iamVjdCgoYXdhaXQgX2V4ZWN1dGVTY2hlbWEoKSkuZXJyb3JzKVxyXG4gICAgICAgICAgICAgICAgOiBhd2FpdCBleGVjdXRlQnVpbGRJblZhbGlkYXRpb24oX2ZpZWxkcywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmICghc2hvdWxkU2tpcFJlbmRlciAmJiBpc1ZhbGlkICE9PSBfZm9ybVN0YXRlLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIF9mb3JtU3RhdGUuaXNWYWxpZCA9IGlzVmFsaWQ7XHJcbiAgICAgICAgICAgICAgICBfc3ViamVjdHMuc3RhdGUubmV4dCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc1ZhbGlkO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IF91cGRhdGVGaWVsZEFycmF5ID0gKG5hbWUsIHZhbHVlcyA9IFtdLCBtZXRob2QsIGFyZ3MsIHNob3VsZFNldFZhbHVlcyA9IHRydWUsIHNob3VsZFVwZGF0ZUZpZWxkc0FuZEVycm9ycyA9IHRydWUpID0+IHtcclxuICAgICAgICBpZiAoYXJncyAmJiBtZXRob2QpIHtcclxuICAgICAgICAgICAgX3N0YXRlRmxhZ3MuYWN0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHNob3VsZFVwZGF0ZUZpZWxkc0FuZEVycm9ycyAmJiBBcnJheS5pc0FycmF5KGdldChfZmllbGRzLCBuYW1lKSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkVmFsdWVzID0gbWV0aG9kKGdldChfZmllbGRzLCBuYW1lKSwgYXJncy5hcmdBLCBhcmdzLmFyZ0IpO1xyXG4gICAgICAgICAgICAgICAgc2hvdWxkU2V0VmFsdWVzICYmIHNldChfZmllbGRzLCBuYW1lLCBmaWVsZFZhbHVlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF9wcm94eUZvcm1TdGF0ZS5lcnJvcnMgJiZcclxuICAgICAgICAgICAgICAgIHNob3VsZFVwZGF0ZUZpZWxkc0FuZEVycm9ycyAmJlxyXG4gICAgICAgICAgICAgICAgQXJyYXkuaXNBcnJheShnZXQoX2Zvcm1TdGF0ZS5lcnJvcnMsIG5hbWUpKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JzID0gbWV0aG9kKGdldChfZm9ybVN0YXRlLmVycm9ycywgbmFtZSksIGFyZ3MuYXJnQSwgYXJncy5hcmdCKTtcclxuICAgICAgICAgICAgICAgIHNob3VsZFNldFZhbHVlcyAmJiBzZXQoX2Zvcm1TdGF0ZS5lcnJvcnMsIG5hbWUsIGVycm9ycyk7XHJcbiAgICAgICAgICAgICAgICB1bnNldEVtcHR5QXJyYXkoX2Zvcm1TdGF0ZS5lcnJvcnMsIG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfcHJveHlGb3JtU3RhdGUudG91Y2hlZEZpZWxkcyAmJlxyXG4gICAgICAgICAgICAgICAgQXJyYXkuaXNBcnJheShnZXQoX2Zvcm1TdGF0ZS50b3VjaGVkRmllbGRzLCBuYW1lKSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdWNoZWRGaWVsZHMgPSBtZXRob2QoZ2V0KF9mb3JtU3RhdGUudG91Y2hlZEZpZWxkcywgbmFtZSksIGFyZ3MuYXJnQSwgYXJncy5hcmdCKTtcclxuICAgICAgICAgICAgICAgIHNob3VsZFNldFZhbHVlcyAmJiBzZXQoX2Zvcm1TdGF0ZS50b3VjaGVkRmllbGRzLCBuYW1lLCB0b3VjaGVkRmllbGRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX3Byb3h5Rm9ybVN0YXRlLmRpcnR5RmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgICBfZm9ybVN0YXRlLmRpcnR5RmllbGRzID0gZ2V0RGlydHlGaWVsZHMoX2RlZmF1bHRWYWx1ZXMsIF9mb3JtVmFsdWVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfc3ViamVjdHMuc3RhdGUubmV4dCh7XHJcbiAgICAgICAgICAgICAgICBpc0RpcnR5OiBfZ2V0RGlydHkobmFtZSwgdmFsdWVzKSxcclxuICAgICAgICAgICAgICAgIGRpcnR5RmllbGRzOiBfZm9ybVN0YXRlLmRpcnR5RmllbGRzLFxyXG4gICAgICAgICAgICAgICAgZXJyb3JzOiBfZm9ybVN0YXRlLmVycm9ycyxcclxuICAgICAgICAgICAgICAgIGlzVmFsaWQ6IF9mb3JtU3RhdGUuaXNWYWxpZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXQoX2Zvcm1WYWx1ZXMsIG5hbWUsIHZhbHVlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHVwZGF0ZUVycm9ycyA9IChuYW1lLCBlcnJvcikgPT4gKHNldChfZm9ybVN0YXRlLmVycm9ycywgbmFtZSwgZXJyb3IpLFxyXG4gICAgICAgIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KHtcclxuICAgICAgICAgICAgZXJyb3JzOiBfZm9ybVN0YXRlLmVycm9ycyxcclxuICAgICAgICB9KSk7XHJcbiAgICBjb25zdCB1cGRhdGVWYWxpZEFuZFZhbHVlID0gKG5hbWUsIHNob3VsZFNraXBTZXRWYWx1ZUFzLCB2YWx1ZSwgcmVmKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSBnZXQoX2ZpZWxkcywgbmFtZSk7XHJcbiAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IGdldChfZm9ybVZhbHVlcywgbmFtZSwgaXNVbmRlZmluZWQodmFsdWUpID8gZ2V0KF9kZWZhdWx0VmFsdWVzLCBuYW1lKSA6IHZhbHVlKTtcclxuICAgICAgICAgICAgaXNVbmRlZmluZWQoZGVmYXVsdFZhbHVlKSB8fFxyXG4gICAgICAgICAgICAgICAgKHJlZiAmJiByZWYuZGVmYXVsdENoZWNrZWQpIHx8XHJcbiAgICAgICAgICAgICAgICBzaG91bGRTa2lwU2V0VmFsdWVBc1xyXG4gICAgICAgICAgICAgICAgPyBzZXQoX2Zvcm1WYWx1ZXMsIG5hbWUsIHNob3VsZFNraXBTZXRWYWx1ZUFzID8gZGVmYXVsdFZhbHVlIDogZ2V0RmllbGRWYWx1ZShmaWVsZC5fZikpXHJcbiAgICAgICAgICAgICAgICA6IHNldEZpZWxkVmFsdWUobmFtZSwgZGVmYXVsdFZhbHVlKTtcclxuICAgICAgICAgICAgX3N0YXRlRmxhZ3MubW91bnQgJiYgX3VwZGF0ZVZhbGlkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHVwZGF0ZVRvdWNoQW5kRGlydHkgPSAobmFtZSwgZmllbGRWYWx1ZSwgaXNCbHVyRXZlbnQsIHNob3VsZERpcnR5LCBzaG91bGRSZW5kZXIpID0+IHtcclxuICAgICAgICBsZXQgaXNGaWVsZERpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3Qgb3V0cHV0ID0ge1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgaXNQcmV2aW91c0ZpZWxkVG91Y2hlZCA9IGdldChfZm9ybVN0YXRlLnRvdWNoZWRGaWVsZHMsIG5hbWUpO1xyXG4gICAgICAgIGlmIChfcHJveHlGb3JtU3RhdGUuaXNEaXJ0eSkge1xyXG4gICAgICAgICAgICBjb25zdCBpc1ByZXZpb3VzRm9ybURpcnR5ID0gX2Zvcm1TdGF0ZS5pc0RpcnR5O1xyXG4gICAgICAgICAgICBfZm9ybVN0YXRlLmlzRGlydHkgPSBvdXRwdXQuaXNEaXJ0eSA9IF9nZXREaXJ0eSgpO1xyXG4gICAgICAgICAgICBpc0ZpZWxkRGlydHkgPSBpc1ByZXZpb3VzRm9ybURpcnR5ICE9PSBvdXRwdXQuaXNEaXJ0eTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF9wcm94eUZvcm1TdGF0ZS5kaXJ0eUZpZWxkcyAmJiAoIWlzQmx1ckV2ZW50IHx8IHNob3VsZERpcnR5KSkge1xyXG4gICAgICAgICAgICBjb25zdCBpc1ByZXZpb3VzRmllbGREaXJ0eSA9IGdldChfZm9ybVN0YXRlLmRpcnR5RmllbGRzLCBuYW1lKTtcclxuICAgICAgICAgICAgY29uc3QgaXNDdXJyZW50RmllbGRQcmlzdGluZSA9IGRlZXBFcXVhbChnZXQoX2RlZmF1bHRWYWx1ZXMsIG5hbWUpLCBmaWVsZFZhbHVlKTtcclxuICAgICAgICAgICAgaXNDdXJyZW50RmllbGRQcmlzdGluZVxyXG4gICAgICAgICAgICAgICAgPyB1bnNldChfZm9ybVN0YXRlLmRpcnR5RmllbGRzLCBuYW1lKVxyXG4gICAgICAgICAgICAgICAgOiBzZXQoX2Zvcm1TdGF0ZS5kaXJ0eUZpZWxkcywgbmFtZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIG91dHB1dC5kaXJ0eUZpZWxkcyA9IF9mb3JtU3RhdGUuZGlydHlGaWVsZHM7XHJcbiAgICAgICAgICAgIGlzRmllbGREaXJ0eSA9XHJcbiAgICAgICAgICAgICAgICBpc0ZpZWxkRGlydHkgfHxcclxuICAgICAgICAgICAgICAgICAgICBpc1ByZXZpb3VzRmllbGREaXJ0eSAhPT0gZ2V0KF9mb3JtU3RhdGUuZGlydHlGaWVsZHMsIG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNCbHVyRXZlbnQgJiYgIWlzUHJldmlvdXNGaWVsZFRvdWNoZWQpIHtcclxuICAgICAgICAgICAgc2V0KF9mb3JtU3RhdGUudG91Y2hlZEZpZWxkcywgbmFtZSwgaXNCbHVyRXZlbnQpO1xyXG4gICAgICAgICAgICBvdXRwdXQudG91Y2hlZEZpZWxkcyA9IF9mb3JtU3RhdGUudG91Y2hlZEZpZWxkcztcclxuICAgICAgICAgICAgaXNGaWVsZERpcnR5ID1cclxuICAgICAgICAgICAgICAgIGlzRmllbGREaXJ0eSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIChfcHJveHlGb3JtU3RhdGUudG91Y2hlZEZpZWxkcyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ByZXZpb3VzRmllbGRUb3VjaGVkICE9PSBpc0JsdXJFdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlzRmllbGREaXJ0eSAmJiBzaG91bGRSZW5kZXIgJiYgX3N1YmplY3RzLnN0YXRlLm5leHQob3V0cHV0KTtcclxuICAgICAgICByZXR1cm4gaXNGaWVsZERpcnR5ID8gb3V0cHV0IDoge307XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc2hvdWxkUmVuZGVyQnlFcnJvciA9IGFzeW5jIChzaG91bGRTa2lwUmVuZGVyLCBuYW1lLCBpc1ZhbGlkLCBlcnJvciwgZmllbGRTdGF0ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByZXZpb3VzRmllbGRFcnJvciA9IGdldChfZm9ybVN0YXRlLmVycm9ycywgbmFtZSk7XHJcbiAgICAgICAgY29uc3Qgc2hvdWxkVXBkYXRlVmFsaWQgPSBfcHJveHlGb3JtU3RhdGUuaXNWYWxpZCAmJiBfZm9ybVN0YXRlLmlzVmFsaWQgIT09IGlzVmFsaWQ7XHJcbiAgICAgICAgaWYgKHByb3BzLmRlbGF5RXJyb3IgJiYgZXJyb3IpIHtcclxuICAgICAgICAgICAgZGVsYXlFcnJvckNhbGxiYWNrID1cclxuICAgICAgICAgICAgICAgIGRlbGF5RXJyb3JDYWxsYmFjayB8fCBkZWJvdW5jZSh1cGRhdGVFcnJvcnMsIHByb3BzLmRlbGF5RXJyb3IpO1xyXG4gICAgICAgICAgICBkZWxheUVycm9yQ2FsbGJhY2sobmFtZSwgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICAgICAgZXJyb3JcclxuICAgICAgICAgICAgICAgID8gc2V0KF9mb3JtU3RhdGUuZXJyb3JzLCBuYW1lLCBlcnJvcilcclxuICAgICAgICAgICAgICAgIDogdW5zZXQoX2Zvcm1TdGF0ZS5lcnJvcnMsIG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKChlcnJvciA/ICFkZWVwRXF1YWwocHJldmlvdXNGaWVsZEVycm9yLCBlcnJvcikgOiBwcmV2aW91c0ZpZWxkRXJyb3IpIHx8XHJcbiAgICAgICAgICAgICFpc0VtcHR5T2JqZWN0KGZpZWxkU3RhdGUpIHx8XHJcbiAgICAgICAgICAgIHNob3VsZFVwZGF0ZVZhbGlkKSAmJlxyXG4gICAgICAgICAgICAhc2hvdWxkU2tpcFJlbmRlcikge1xyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkRm9ybVN0YXRlID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZpZWxkU3RhdGUpLCAoc2hvdWxkVXBkYXRlVmFsaWQgPyB7IGlzVmFsaWQgfSA6IHt9KSksIHsgZXJyb3JzOiBfZm9ybVN0YXRlLmVycm9ycywgbmFtZSB9KTtcclxuICAgICAgICAgICAgX2Zvcm1TdGF0ZSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgX2Zvcm1TdGF0ZSksIHVwZGF0ZWRGb3JtU3RhdGUpO1xyXG4gICAgICAgICAgICBfc3ViamVjdHMuc3RhdGUubmV4dCh1cGRhdGVkRm9ybVN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFsaWRhdGVGaWVsZHNbbmFtZV0tLTtcclxuICAgICAgICBpZiAoX3Byb3h5Rm9ybVN0YXRlLmlzVmFsaWRhdGluZyAmJlxyXG4gICAgICAgICAgICAhT2JqZWN0LnZhbHVlcyh2YWxpZGF0ZUZpZWxkcykuc29tZSgodikgPT4gdikpIHtcclxuICAgICAgICAgICAgX3N1YmplY3RzLnN0YXRlLm5leHQoe1xyXG4gICAgICAgICAgICAgICAgaXNWYWxpZGF0aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhbGlkYXRlRmllbGRzID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IF9leGVjdXRlU2NoZW1hID0gYXN5bmMgKG5hbWUpID0+IF9vcHRpb25zLnJlc29sdmVyXHJcbiAgICAgICAgPyBhd2FpdCBfb3B0aW9ucy5yZXNvbHZlcihPYmplY3QuYXNzaWduKHt9LCBfZm9ybVZhbHVlcyksIF9vcHRpb25zLmNvbnRleHQsIGdldFJlc29sdmVyT3B0aW9ucyhuYW1lIHx8IF9uYW1lcy5tb3VudCwgX2ZpZWxkcywgX29wdGlvbnMuY3JpdGVyaWFNb2RlLCBfb3B0aW9ucy5zaG91bGRVc2VOYXRpdmVWYWxpZGF0aW9uKSlcclxuICAgICAgICA6IHt9O1xyXG4gICAgY29uc3QgZXhlY3V0ZVNjaGVtYUFuZFVwZGF0ZVN0YXRlID0gYXN5bmMgKG5hbWVzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBlcnJvcnMgfSA9IGF3YWl0IF9leGVjdXRlU2NoZW1hKCk7XHJcbiAgICAgICAgaWYgKG5hbWVzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBuYW1lcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBnZXQoZXJyb3JzLCBuYW1lKTtcclxuICAgICAgICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgPyBzZXQoX2Zvcm1TdGF0ZS5lcnJvcnMsIG5hbWUsIGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgIDogdW5zZXQoX2Zvcm1TdGF0ZS5lcnJvcnMsIG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBfZm9ybVN0YXRlLmVycm9ycyA9IGVycm9ycztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVycm9ycztcclxuICAgIH07XHJcbiAgICBjb25zdCBleGVjdXRlQnVpbGRJblZhbGlkYXRpb24gPSBhc3luYyAoZmllbGRzLCBzaG91bGRPbmx5Q2hlY2tWYWxpZCwgY29udGV4dCA9IHtcclxuICAgICAgICB2YWxpZDogdHJ1ZSxcclxuICAgIH0pID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gZmllbGRzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZmllbGRzW25hbWVdO1xyXG4gICAgICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkUmVmZXJlbmNlID0gZmllbGQuX2Y7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZFZhbHVlID0gb21pdChmaWVsZCwgJ19mJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmllbGRSZWZlcmVuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZEVycm9yID0gYXdhaXQgdmFsaWRhdGVGaWVsZChmaWVsZCwgZ2V0KF9mb3JtVmFsdWVzLCBmaWVsZFJlZmVyZW5jZS5uYW1lKSwgc2hvdWxkRGlzcGxheUFsbEFzc29jaWF0ZWRFcnJvcnMsIF9vcHRpb25zLnNob3VsZFVzZU5hdGl2ZVZhbGlkYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZEVycm9yW2ZpZWxkUmVmZXJlbmNlLm5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQudmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZE9ubHlDaGVja1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXNob3VsZE9ubHlDaGVja1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkRXJyb3JbZmllbGRSZWZlcmVuY2UubmFtZV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc2V0KF9mb3JtU3RhdGUuZXJyb3JzLCBmaWVsZFJlZmVyZW5jZS5uYW1lLCBmaWVsZEVycm9yW2ZpZWxkUmVmZXJlbmNlLm5hbWVdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bnNldChfZm9ybVN0YXRlLmVycm9ycywgZmllbGRSZWZlcmVuY2UubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZmllbGRWYWx1ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIChhd2FpdCBleGVjdXRlQnVpbGRJblZhbGlkYXRpb24oZmllbGRWYWx1ZSwgc2hvdWxkT25seUNoZWNrVmFsaWQsIGNvbnRleHQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29udGV4dC52YWxpZDtcclxuICAgIH07XHJcbiAgICBjb25zdCBfcmVtb3ZlVW5tb3VudGVkID0gKCkgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBfbmFtZXMudW5Nb3VudCkge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IGdldChfZmllbGRzLCBuYW1lKTtcclxuICAgICAgICAgICAgZmllbGQgJiZcclxuICAgICAgICAgICAgICAgIChmaWVsZC5fZi5yZWZzXHJcbiAgICAgICAgICAgICAgICAgICAgPyBmaWVsZC5fZi5yZWZzLmV2ZXJ5KChyZWYpID0+ICFsaXZlKHJlZikpXHJcbiAgICAgICAgICAgICAgICAgICAgOiAhbGl2ZShmaWVsZC5fZi5yZWYpKSAmJlxyXG4gICAgICAgICAgICAgICAgdW5yZWdpc3RlcihuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgX25hbWVzLnVuTW91bnQgPSBuZXcgU2V0KCk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgX2dldERpcnR5ID0gKG5hbWUsIGRhdGEpID0+IChuYW1lICYmIGRhdGEgJiYgc2V0KF9mb3JtVmFsdWVzLCBuYW1lLCBkYXRhKSxcclxuICAgICAgICAhZGVlcEVxdWFsKGdldFZhbHVlcygpLCBfZGVmYXVsdFZhbHVlcykpO1xyXG4gICAgY29uc3QgX2dldFdhdGNoID0gKG5hbWVzLCBkZWZhdWx0VmFsdWUsIGlzR2xvYmFsKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGRWYWx1ZXMgPSBPYmplY3QuYXNzaWduKHt9LCAoX3N0YXRlRmxhZ3MubW91bnRcclxuICAgICAgICAgICAgPyBfZm9ybVZhbHVlc1xyXG4gICAgICAgICAgICA6IGlzVW5kZWZpbmVkKGRlZmF1bHRWYWx1ZSlcclxuICAgICAgICAgICAgICAgID8gX2RlZmF1bHRWYWx1ZXNcclxuICAgICAgICAgICAgICAgIDogaXNTdHJpbmcobmFtZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgPyB7IFtuYW1lc106IGRlZmF1bHRWYWx1ZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgOiBkZWZhdWx0VmFsdWUpKTtcclxuICAgICAgICByZXR1cm4gZ2VuZXJhdGVXYXRjaE91dHB1dChuYW1lcywgX25hbWVzLCBmaWVsZFZhbHVlcywgaXNHbG9iYWwpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IF9nZXRGaWVsZEFycmF5ID0gKG5hbWUpID0+IGNvbXBhY3QoZ2V0KF9zdGF0ZUZsYWdzLm1vdW50ID8gX2Zvcm1WYWx1ZXMgOiBfZGVmYXVsdFZhbHVlcywgbmFtZSwgcHJvcHMuc2hvdWxkVW5yZWdpc3RlciA/IGdldChfZGVmYXVsdFZhbHVlcywgbmFtZSwgW10pIDogW10pKTtcclxuICAgIGNvbnN0IHNldEZpZWxkVmFsdWUgPSAobmFtZSwgdmFsdWUsIG9wdGlvbnMgPSB7fSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gZ2V0KF9maWVsZHMsIG5hbWUpO1xyXG4gICAgICAgIGxldCBmaWVsZFZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkUmVmZXJlbmNlID0gZmllbGQuX2Y7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZFJlZmVyZW5jZSkge1xyXG4gICAgICAgICAgICAgICAgIWZpZWxkUmVmZXJlbmNlLmRpc2FibGVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0KF9mb3JtVmFsdWVzLCBuYW1lLCBnZXRGaWVsZFZhbHVlQXModmFsdWUsIGZpZWxkUmVmZXJlbmNlKSk7XHJcbiAgICAgICAgICAgICAgICBmaWVsZFZhbHVlID1cclxuICAgICAgICAgICAgICAgICAgICBpc1dlYiAmJiBpc0hUTUxFbGVtZW50KGZpZWxkUmVmZXJlbmNlLnJlZikgJiYgaXNOdWxsT3JVbmRlZmluZWQodmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChpc011bHRpcGxlU2VsZWN0KGZpZWxkUmVmZXJlbmNlLnJlZikpIHtcclxuICAgICAgICAgICAgICAgICAgICBbLi4uZmllbGRSZWZlcmVuY2UucmVmLm9wdGlvbnNdLmZvckVhY2goKHNlbGVjdFJlZikgPT4gKHNlbGVjdFJlZi5zZWxlY3RlZCA9IGZpZWxkVmFsdWUuaW5jbHVkZXMoc2VsZWN0UmVmLnZhbHVlKSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZmllbGRSZWZlcmVuY2UucmVmcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0NoZWNrQm94SW5wdXQoZmllbGRSZWZlcmVuY2UucmVmKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFJlZmVyZW5jZS5yZWZzLmxlbmd0aCA+IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZmllbGRSZWZlcmVuY2UucmVmcy5mb3JFYWNoKChjaGVja2JveFJlZikgPT4gKGNoZWNrYm94UmVmLmNoZWNrZWQgPSBBcnJheS5pc0FycmF5KGZpZWxkVmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAhIWZpZWxkVmFsdWUuZmluZCgoZGF0YSkgPT4gZGF0YSA9PT0gY2hlY2tib3hSZWYudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmaWVsZFZhbHVlID09PSBjaGVja2JveFJlZi52YWx1ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZpZWxkUmVmZXJlbmNlLnJlZnNbMF0gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZmllbGRSZWZlcmVuY2UucmVmc1swXS5jaGVja2VkID0gISFmaWVsZFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVmZXJlbmNlLnJlZnMuZm9yRWFjaCgocmFkaW9SZWYpID0+IChyYWRpb1JlZi5jaGVja2VkID0gcmFkaW9SZWYudmFsdWUgPT09IGZpZWxkVmFsdWUpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc0ZpbGVJbnB1dChmaWVsZFJlZmVyZW5jZS5yZWYpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRSZWZlcmVuY2UucmVmLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZFJlZmVyZW5jZS5yZWYudmFsdWUgPSBmaWVsZFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZmllbGRSZWZlcmVuY2UucmVmLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3N1YmplY3RzLndhdGNoLm5leHQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIChvcHRpb25zLnNob3VsZERpcnR5IHx8IG9wdGlvbnMuc2hvdWxkVG91Y2gpICYmXHJcbiAgICAgICAgICAgIHVwZGF0ZVRvdWNoQW5kRGlydHkobmFtZSwgZmllbGRWYWx1ZSwgb3B0aW9ucy5zaG91bGRUb3VjaCwgb3B0aW9ucy5zaG91bGREaXJ0eSwgdHJ1ZSk7XHJcbiAgICAgICAgb3B0aW9ucy5zaG91bGRWYWxpZGF0ZSAmJiB0cmlnZ2VyKG5hbWUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHNldFZhbHVlcyA9IChuYW1lLCB2YWx1ZSwgb3B0aW9ucykgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgZmllbGRLZXkgaW4gdmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc3QgZmllbGRWYWx1ZSA9IHZhbHVlW2ZpZWxkS2V5XTtcclxuICAgICAgICAgICAgY29uc3QgZmllbGROYW1lID0gYCR7bmFtZX0uJHtmaWVsZEtleX1gO1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IGdldChfZmllbGRzLCBmaWVsZE5hbWUpO1xyXG4gICAgICAgICAgICAoX25hbWVzLmFycmF5LmhhcyhuYW1lKSB8fFxyXG4gICAgICAgICAgICAgICAgIWlzUHJpbWl0aXZlKGZpZWxkVmFsdWUpIHx8XHJcbiAgICAgICAgICAgICAgICAoZmllbGQgJiYgIWZpZWxkLl9mKSkgJiZcclxuICAgICAgICAgICAgICAgICFpc0RhdGVPYmplY3QoZmllbGRWYWx1ZSlcclxuICAgICAgICAgICAgICAgID8gc2V0VmFsdWVzKGZpZWxkTmFtZSwgZmllbGRWYWx1ZSwgb3B0aW9ucylcclxuICAgICAgICAgICAgICAgIDogc2V0RmllbGRWYWx1ZShmaWVsZE5hbWUsIGZpZWxkVmFsdWUsIG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBzZXRWYWx1ZSA9IChuYW1lLCB2YWx1ZSwgb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSBnZXQoX2ZpZWxkcywgbmFtZSk7XHJcbiAgICAgICAgY29uc3QgaXNGaWVsZEFycmF5ID0gX25hbWVzLmFycmF5LmhhcyhuYW1lKTtcclxuICAgICAgICBjb25zdCBjbG9uZVZhbHVlID0gY2xvbmVPYmplY3QodmFsdWUpO1xyXG4gICAgICAgIHNldChfZm9ybVZhbHVlcywgbmFtZSwgY2xvbmVWYWx1ZSk7XHJcbiAgICAgICAgaWYgKGlzRmllbGRBcnJheSkge1xyXG4gICAgICAgICAgICBfc3ViamVjdHMuYXJyYXkubmV4dCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBfZm9ybVZhbHVlcyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICgoX3Byb3h5Rm9ybVN0YXRlLmlzRGlydHkgfHwgX3Byb3h5Rm9ybVN0YXRlLmRpcnR5RmllbGRzKSAmJlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5zaG91bGREaXJ0eSkge1xyXG4gICAgICAgICAgICAgICAgX2Zvcm1TdGF0ZS5kaXJ0eUZpZWxkcyA9IGdldERpcnR5RmllbGRzKF9kZWZhdWx0VmFsdWVzLCBfZm9ybVZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgICBfc3ViamVjdHMuc3RhdGUubmV4dCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBkaXJ0eUZpZWxkczogX2Zvcm1TdGF0ZS5kaXJ0eUZpZWxkcyxcclxuICAgICAgICAgICAgICAgICAgICBpc0RpcnR5OiBfZ2V0RGlydHkobmFtZSwgY2xvbmVWYWx1ZSksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZmllbGQgJiYgIWZpZWxkLl9mICYmICFpc051bGxPclVuZGVmaW5lZChjbG9uZVZhbHVlKVxyXG4gICAgICAgICAgICAgICAgPyBzZXRWYWx1ZXMobmFtZSwgY2xvbmVWYWx1ZSwgb3B0aW9ucylcclxuICAgICAgICAgICAgICAgIDogc2V0RmllbGRWYWx1ZShuYW1lLCBjbG9uZVZhbHVlLCBvcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXNXYXRjaGVkKG5hbWUsIF9uYW1lcykgJiYgX3N1YmplY3RzLnN0YXRlLm5leHQoe30pO1xyXG4gICAgICAgIF9zdWJqZWN0cy53YXRjaC5uZXh0KHtcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBvbkNoYW5nZSA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBsZXQgbmFtZSA9IHRhcmdldC5uYW1lO1xyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gZ2V0KF9maWVsZHMsIG5hbWUpO1xyXG4gICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICBsZXQgZXJyb3I7XHJcbiAgICAgICAgICAgIGxldCBpc1ZhbGlkO1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZFZhbHVlID0gdGFyZ2V0LnR5cGVcclxuICAgICAgICAgICAgICAgID8gZ2V0RmllbGRWYWx1ZShmaWVsZC5fZilcclxuICAgICAgICAgICAgICAgIDogZ2V0RXZlbnRWYWx1ZShldmVudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQmx1ckV2ZW50ID0gZXZlbnQudHlwZSA9PT0gRVZFTlRTLkJMVVIgfHwgZXZlbnQudHlwZSA9PT0gRVZFTlRTLkZPQ1VTX09VVDtcclxuICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2tpcFZhbGlkYXRpb24gPSAoIWhhc1ZhbGlkYXRpb24oZmllbGQuX2YpICYmXHJcbiAgICAgICAgICAgICAgICAhX29wdGlvbnMucmVzb2x2ZXIgJiZcclxuICAgICAgICAgICAgICAgICFnZXQoX2Zvcm1TdGF0ZS5lcnJvcnMsIG5hbWUpICYmXHJcbiAgICAgICAgICAgICAgICAhZmllbGQuX2YuZGVwcykgfHxcclxuICAgICAgICAgICAgICAgIHNraXBWYWxpZGF0aW9uKGlzQmx1ckV2ZW50LCBnZXQoX2Zvcm1TdGF0ZS50b3VjaGVkRmllbGRzLCBuYW1lKSwgX2Zvcm1TdGF0ZS5pc1N1Ym1pdHRlZCwgdmFsaWRhdGlvbk1vZGVBZnRlclN1Ym1pdCwgdmFsaWRhdGlvbk1vZGVCZWZvcmVTdWJtaXQpO1xyXG4gICAgICAgICAgICBjb25zdCB3YXRjaGVkID0gaXNXYXRjaGVkKG5hbWUsIF9uYW1lcywgaXNCbHVyRXZlbnQpO1xyXG4gICAgICAgICAgICBzZXQoX2Zvcm1WYWx1ZXMsIG5hbWUsIGZpZWxkVmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoaXNCbHVyRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkLl9mLm9uQmx1ciAmJiBmaWVsZC5fZi5vbkJsdXIoZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGZpZWxkLl9mLm9uQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZC5fZi5vbkNoYW5nZShldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZmllbGRTdGF0ZSA9IHVwZGF0ZVRvdWNoQW5kRGlydHkobmFtZSwgZmllbGRWYWx1ZSwgaXNCbHVyRXZlbnQsIGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc3Qgc2hvdWxkUmVuZGVyID0gIWlzRW1wdHlPYmplY3QoZmllbGRTdGF0ZSkgfHwgd2F0Y2hlZDtcclxuICAgICAgICAgICAgIWlzQmx1ckV2ZW50ICYmXHJcbiAgICAgICAgICAgICAgICBfc3ViamVjdHMud2F0Y2gubmV4dCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBldmVudC50eXBlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRTa2lwVmFsaWRhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChzaG91bGRSZW5kZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICBfc3ViamVjdHMuc3RhdGUubmV4dChPYmplY3QuYXNzaWduKHsgbmFtZSB9LCAod2F0Y2hlZCA/IHt9IDogZmllbGRTdGF0ZSkpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIWlzQmx1ckV2ZW50ICYmIHdhdGNoZWQgJiYgX3N1YmplY3RzLnN0YXRlLm5leHQoe30pO1xyXG4gICAgICAgICAgICB2YWxpZGF0ZUZpZWxkc1tuYW1lXSA9IHZhbGlkYXRlRmllbGRzW25hbWVdID8gKzEgOiAxO1xyXG4gICAgICAgICAgICBfc3ViamVjdHMuc3RhdGUubmV4dCh7XHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkYXRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoX29wdGlvbnMucmVzb2x2ZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3JzIH0gPSBhd2FpdCBfZXhlY3V0ZVNjaGVtYShbbmFtZV0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNFcnJvckxvb2t1cFJlc3VsdCA9IHNjaGVtYUVycm9yTG9va3VwKF9mb3JtU3RhdGUuZXJyb3JzLCBfZmllbGRzLCBuYW1lKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTG9va3VwUmVzdWx0ID0gc2NoZW1hRXJyb3JMb29rdXAoZXJyb3JzLCBfZmllbGRzLCBwcmV2aW91c0Vycm9yTG9va3VwUmVzdWx0Lm5hbWUgfHwgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICBlcnJvciA9IGVycm9yTG9va3VwUmVzdWx0LmVycm9yO1xyXG4gICAgICAgICAgICAgICAgbmFtZSA9IGVycm9yTG9va3VwUmVzdWx0Lm5hbWU7XHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaXNFbXB0eU9iamVjdChlcnJvcnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZXJyb3IgPSAoYXdhaXQgdmFsaWRhdGVGaWVsZChmaWVsZCwgZ2V0KF9mb3JtVmFsdWVzLCBuYW1lKSwgc2hvdWxkRGlzcGxheUFsbEFzc29jaWF0ZWRFcnJvcnMsIF9vcHRpb25zLnNob3VsZFVzZU5hdGl2ZVZhbGlkYXRpb24pKVtuYW1lXTtcclxuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBhd2FpdCBfdXBkYXRlVmFsaWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmllbGQuX2YuZGVwcyAmJiB0cmlnZ2VyKGZpZWxkLl9mLmRlcHMpO1xyXG4gICAgICAgICAgICBzaG91bGRSZW5kZXJCeUVycm9yKGZhbHNlLCBuYW1lLCBpc1ZhbGlkLCBlcnJvciwgZmllbGRTdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHRyaWdnZXIgPSBhc3luYyAobmFtZSwgb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICAgICAgbGV0IGlzVmFsaWQ7XHJcbiAgICAgICAgbGV0IHZhbGlkYXRpb25SZXN1bHQ7XHJcbiAgICAgICAgY29uc3QgZmllbGROYW1lcyA9IGNvbnZlcnRUb0FycmF5UGF5bG9hZChuYW1lKTtcclxuICAgICAgICBfc3ViamVjdHMuc3RhdGUubmV4dCh7XHJcbiAgICAgICAgICAgIGlzVmFsaWRhdGluZzogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoX29wdGlvbnMucmVzb2x2ZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3JzID0gYXdhaXQgZXhlY3V0ZVNjaGVtYUFuZFVwZGF0ZVN0YXRlKGlzVW5kZWZpbmVkKG5hbWUpID8gbmFtZSA6IGZpZWxkTmFtZXMpO1xyXG4gICAgICAgICAgICBpc1ZhbGlkID0gaXNFbXB0eU9iamVjdChlcnJvcnMpO1xyXG4gICAgICAgICAgICB2YWxpZGF0aW9uUmVzdWx0ID0gbmFtZVxyXG4gICAgICAgICAgICAgICAgPyAhZmllbGROYW1lcy5zb21lKChuYW1lKSA9PiBnZXQoZXJyb3JzLCBuYW1lKSlcclxuICAgICAgICAgICAgICAgIDogaXNWYWxpZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobmFtZSkge1xyXG4gICAgICAgICAgICB2YWxpZGF0aW9uUmVzdWx0ID0gKGF3YWl0IFByb21pc2UuYWxsKGZpZWxkTmFtZXMubWFwKGFzeW5jIChmaWVsZE5hbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZ2V0KF9maWVsZHMsIGZpZWxkTmFtZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgZXhlY3V0ZUJ1aWxkSW5WYWxpZGF0aW9uKGZpZWxkICYmIGZpZWxkLl9mID8geyBbZmllbGROYW1lXTogZmllbGQgfSA6IGZpZWxkKTtcclxuICAgICAgICAgICAgfSkpKS5ldmVyeShCb29sZWFuKTtcclxuICAgICAgICAgICAgISghdmFsaWRhdGlvblJlc3VsdCAmJiAhX2Zvcm1TdGF0ZS5pc1ZhbGlkKSAmJiBfdXBkYXRlVmFsaWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQgPSBpc1ZhbGlkID0gYXdhaXQgZXhlY3V0ZUJ1aWxkSW5WYWxpZGF0aW9uKF9maWVsZHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfc3ViamVjdHMuc3RhdGUubmV4dChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgKCFpc1N0cmluZyhuYW1lKSB8fFxyXG4gICAgICAgICAgICAoX3Byb3h5Rm9ybVN0YXRlLmlzVmFsaWQgJiYgaXNWYWxpZCAhPT0gX2Zvcm1TdGF0ZS5pc1ZhbGlkKVxyXG4gICAgICAgICAgICA/IHt9XHJcbiAgICAgICAgICAgIDogeyBuYW1lIH0pKSwgKF9vcHRpb25zLnJlc29sdmVyID8geyBpc1ZhbGlkIH0gOiB7fSkpLCB7IGVycm9yczogX2Zvcm1TdGF0ZS5lcnJvcnMsIGlzVmFsaWRhdGluZzogZmFsc2UgfSkpO1xyXG4gICAgICAgIG9wdGlvbnMuc2hvdWxkRm9jdXMgJiZcclxuICAgICAgICAgICAgIXZhbGlkYXRpb25SZXN1bHQgJiZcclxuICAgICAgICAgICAgZm9jdXNGaWVsZEJ5KF9maWVsZHMsIChrZXkpID0+IGdldChfZm9ybVN0YXRlLmVycm9ycywga2V5KSwgbmFtZSA/IGZpZWxkTmFtZXMgOiBfbmFtZXMubW91bnQpO1xyXG4gICAgICAgIHJldHVybiB2YWxpZGF0aW9uUmVzdWx0O1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGdldFZhbHVlcyA9IChmaWVsZE5hbWVzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBfZGVmYXVsdFZhbHVlcyksIChfc3RhdGVGbGFncy5tb3VudCA/IF9mb3JtVmFsdWVzIDoge30pKTtcclxuICAgICAgICByZXR1cm4gaXNVbmRlZmluZWQoZmllbGROYW1lcylcclxuICAgICAgICAgICAgPyB2YWx1ZXNcclxuICAgICAgICAgICAgOiBpc1N0cmluZyhmaWVsZE5hbWVzKVxyXG4gICAgICAgICAgICAgICAgPyBnZXQodmFsdWVzLCBmaWVsZE5hbWVzKVxyXG4gICAgICAgICAgICAgICAgOiBmaWVsZE5hbWVzLm1hcCgobmFtZSkgPT4gZ2V0KHZhbHVlcywgbmFtZSkpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGdldEZpZWxkU3RhdGUgPSAobmFtZSwgZm9ybVN0YXRlKSA9PiAoe1xyXG4gICAgICAgIGludmFsaWQ6ICEhZ2V0KChmb3JtU3RhdGUgfHwgX2Zvcm1TdGF0ZSkuZXJyb3JzLCBuYW1lKSxcclxuICAgICAgICBpc0RpcnR5OiAhIWdldCgoZm9ybVN0YXRlIHx8IF9mb3JtU3RhdGUpLmRpcnR5RmllbGRzLCBuYW1lKSxcclxuICAgICAgICBpc1RvdWNoZWQ6ICEhZ2V0KChmb3JtU3RhdGUgfHwgX2Zvcm1TdGF0ZSkudG91Y2hlZEZpZWxkcywgbmFtZSksXHJcbiAgICAgICAgZXJyb3I6IGdldCgoZm9ybVN0YXRlIHx8IF9mb3JtU3RhdGUpLmVycm9ycywgbmFtZSksXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNsZWFyRXJyb3JzID0gKG5hbWUpID0+IHtcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgID8gY29udmVydFRvQXJyYXlQYXlsb2FkKG5hbWUpLmZvckVhY2goKGlucHV0TmFtZSkgPT4gdW5zZXQoX2Zvcm1TdGF0ZS5lcnJvcnMsIGlucHV0TmFtZSkpXHJcbiAgICAgICAgICAgIDogKF9mb3JtU3RhdGUuZXJyb3JzID0ge30pO1xyXG4gICAgICAgIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KHtcclxuICAgICAgICAgICAgZXJyb3JzOiBfZm9ybVN0YXRlLmVycm9ycyxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBzZXRFcnJvciA9IChuYW1lLCBlcnJvciwgb3B0aW9ucykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlZiA9IChnZXQoX2ZpZWxkcywgbmFtZSwgeyBfZjoge30gfSkuX2YgfHwge30pLnJlZjtcclxuICAgICAgICBzZXQoX2Zvcm1TdGF0ZS5lcnJvcnMsIG5hbWUsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZXJyb3IpLCB7IHJlZiB9KSk7XHJcbiAgICAgICAgX3N1YmplY3RzLnN0YXRlLm5leHQoe1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBlcnJvcnM6IF9mb3JtU3RhdGUuZXJyb3JzLFxyXG4gICAgICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBvcHRpb25zICYmIG9wdGlvbnMuc2hvdWxkRm9jdXMgJiYgcmVmICYmIHJlZi5mb2N1cyAmJiByZWYuZm9jdXMoKTtcclxuICAgIH07XHJcbiAgICBjb25zdCB3YXRjaCA9IChuYW1lLCBkZWZhdWx0VmFsdWUpID0+IGlzRnVuY3Rpb24obmFtZSlcclxuICAgICAgICA/IF9zdWJqZWN0cy53YXRjaC5zdWJzY3JpYmUoe1xyXG4gICAgICAgICAgICBuZXh0OiAoaW5mbykgPT4gbmFtZShfZ2V0V2F0Y2godW5kZWZpbmVkLCBkZWZhdWx0VmFsdWUpLCBpbmZvKSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIDogX2dldFdhdGNoKG5hbWUsIGRlZmF1bHRWYWx1ZSwgdHJ1ZSk7XHJcbiAgICBjb25zdCB1bnJlZ2lzdGVyID0gKG5hbWUsIG9wdGlvbnMgPSB7fSkgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgZmllbGROYW1lIG9mIG5hbWUgPyBjb252ZXJ0VG9BcnJheVBheWxvYWQobmFtZSkgOiBfbmFtZXMubW91bnQpIHtcclxuICAgICAgICAgICAgX25hbWVzLm1vdW50LmRlbGV0ZShmaWVsZE5hbWUpO1xyXG4gICAgICAgICAgICBfbmFtZXMuYXJyYXkuZGVsZXRlKGZpZWxkTmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChnZXQoX2ZpZWxkcywgZmllbGROYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zLmtlZXBWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuc2V0KF9maWVsZHMsIGZpZWxkTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5zZXQoX2Zvcm1WYWx1ZXMsIGZpZWxkTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAhb3B0aW9ucy5rZWVwRXJyb3IgJiYgdW5zZXQoX2Zvcm1TdGF0ZS5lcnJvcnMsIGZpZWxkTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAhb3B0aW9ucy5rZWVwRGlydHkgJiYgdW5zZXQoX2Zvcm1TdGF0ZS5kaXJ0eUZpZWxkcywgZmllbGROYW1lKTtcclxuICAgICAgICAgICAgICAgICFvcHRpb25zLmtlZXBUb3VjaGVkICYmIHVuc2V0KF9mb3JtU3RhdGUudG91Y2hlZEZpZWxkcywgZmllbGROYW1lKTtcclxuICAgICAgICAgICAgICAgICFfb3B0aW9ucy5zaG91bGRVbnJlZ2lzdGVyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIW9wdGlvbnMua2VlcERlZmF1bHRWYWx1ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHVuc2V0KF9kZWZhdWx0VmFsdWVzLCBmaWVsZE5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9zdWJqZWN0cy53YXRjaC5uZXh0KHt9KTtcclxuICAgICAgICBfc3ViamVjdHMuc3RhdGUubmV4dChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIF9mb3JtU3RhdGUpLCAoIW9wdGlvbnMua2VlcERpcnR5ID8ge30gOiB7IGlzRGlydHk6IF9nZXREaXJ0eSgpIH0pKSk7XHJcbiAgICAgICAgIW9wdGlvbnMua2VlcElzVmFsaWQgJiYgX3VwZGF0ZVZhbGlkKCk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVnaXN0ZXIgPSAobmFtZSwgb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICAgICAgbGV0IGZpZWxkID0gZ2V0KF9maWVsZHMsIG5hbWUpO1xyXG4gICAgICAgIGNvbnN0IGRpc2FibGVkSXNEZWZpbmVkID0gaXNCb29sZWFuKG9wdGlvbnMuZGlzYWJsZWQpO1xyXG4gICAgICAgIHNldChfZmllbGRzLCBuYW1lLCB7XHJcbiAgICAgICAgICAgIF9mOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgKGZpZWxkICYmIGZpZWxkLl9mID8gZmllbGQuX2YgOiB7IHJlZjogeyBuYW1lIH0gfSkpLCB7IG5hbWUsIG1vdW50OiB0cnVlIH0pLCBvcHRpb25zKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBfbmFtZXMubW91bnQuYWRkKG5hbWUpO1xyXG4gICAgICAgIGZpZWxkXHJcbiAgICAgICAgICAgID8gZGlzYWJsZWRJc0RlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgIHNldChfZm9ybVZhbHVlcywgbmFtZSwgb3B0aW9ucy5kaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgID8gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgOiBnZXQoX2Zvcm1WYWx1ZXMsIG5hbWUsIGdldEZpZWxkVmFsdWUoZmllbGQuX2YpKSlcclxuICAgICAgICAgICAgOiB1cGRhdGVWYWxpZEFuZFZhbHVlKG5hbWUsIHRydWUsIG9wdGlvbnMudmFsdWUpO1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgKGRpc2FibGVkSXNEZWZpbmVkID8geyBkaXNhYmxlZDogb3B0aW9ucy5kaXNhYmxlZCB9IDoge30pKSwgKF9vcHRpb25zLnNob3VsZFVzZU5hdGl2ZVZhbGlkYXRpb25cclxuICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogISFvcHRpb25zLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgICAgbWluOiBnZXRSdWxlVmFsdWUob3B0aW9ucy5taW4pLFxyXG4gICAgICAgICAgICAgICAgbWF4OiBnZXRSdWxlVmFsdWUob3B0aW9ucy5tYXgpLFxyXG4gICAgICAgICAgICAgICAgbWluTGVuZ3RoOiBnZXRSdWxlVmFsdWUob3B0aW9ucy5taW5MZW5ndGgpLFxyXG4gICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiBnZXRSdWxlVmFsdWUob3B0aW9ucy5tYXhMZW5ndGgpLFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybjogZ2V0UnVsZVZhbHVlKG9wdGlvbnMucGF0dGVybiksXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOiB7fSkpLCB7IG5hbWUsXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlLCBvbkJsdXI6IG9uQ2hhbmdlLCByZWY6IChyZWYpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZWYpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWdpc3RlcihuYW1lLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZCA9IGdldChfZmllbGRzLCBuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZFJlZiA9IGlzVW5kZWZpbmVkKHJlZi52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyByZWYucXVlcnlTZWxlY3RvckFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyByZWYucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsc2VsZWN0LHRleHRhcmVhJylbMF0gfHwgcmVmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHJlZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHJlZjtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByYWRpb09yQ2hlY2tib3ggPSBpc1JhZGlvT3JDaGVja2JveChmaWVsZFJlZik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVmcyA9IGZpZWxkLl9mLnJlZnMgfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJhZGlvT3JDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHJlZnMuZmluZCgob3B0aW9uKSA9PiBvcHRpb24gPT09IGZpZWxkUmVmKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGZpZWxkUmVmID09PSBmaWVsZC5fZi5yZWYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzZXQoX2ZpZWxkcywgbmFtZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZjogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBmaWVsZC5fZiksIChyYWRpb09yQ2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnM6IHJlZnMuY29uY2F0KGZpZWxkUmVmKS5maWx0ZXIobGl2ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiB7IHR5cGU6IGZpZWxkUmVmLnR5cGUsIG5hbWUgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogeyByZWY6IGZpZWxkUmVmIH0pKSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVWYWxpZEFuZFZhbHVlKG5hbWUsIGZhbHNlLCB1bmRlZmluZWQsIGZpZWxkUmVmKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkID0gZ2V0KF9maWVsZHMsIG5hbWUsIHt9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQuX2YpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuX2YubW91bnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKF9vcHRpb25zLnNob3VsZFVucmVnaXN0ZXIgfHwgb3B0aW9ucy5zaG91bGRVbnJlZ2lzdGVyKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhKGlzTmFtZUluRmllbGRBcnJheShfbmFtZXMuYXJyYXksIG5hbWUpICYmIF9zdGF0ZUZsYWdzLmFjdGlvbikgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgX25hbWVzLnVuTW91bnQuYWRkKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChvblZhbGlkLCBvbkludmFsaWQpID0+IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCAmJiBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUucGVyc2lzdCAmJiBlLnBlcnNpc3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGhhc05vUHJvbWlzZUVycm9yID0gdHJ1ZTtcclxuICAgICAgICBsZXQgZmllbGRWYWx1ZXMgPSBjbG9uZU9iamVjdChfZm9ybVZhbHVlcyk7XHJcbiAgICAgICAgX3N1YmplY3RzLnN0YXRlLm5leHQoe1xyXG4gICAgICAgICAgICBpc1N1Ym1pdHRpbmc6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKF9vcHRpb25zLnJlc29sdmVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9ycywgdmFsdWVzIH0gPSBhd2FpdCBfZXhlY3V0ZVNjaGVtYSgpO1xyXG4gICAgICAgICAgICAgICAgX2Zvcm1TdGF0ZS5lcnJvcnMgPSBlcnJvcnM7XHJcbiAgICAgICAgICAgICAgICBmaWVsZFZhbHVlcyA9IHZhbHVlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGV4ZWN1dGVCdWlsZEluVmFsaWRhdGlvbihfZmllbGRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNFbXB0eU9iamVjdChfZm9ybVN0YXRlLmVycm9ycykgJiZcclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKF9mb3JtU3RhdGUuZXJyb3JzKS5ldmVyeSgobmFtZSkgPT4gZ2V0KGZpZWxkVmFsdWVzLCBuYW1lKSkpIHtcclxuICAgICAgICAgICAgICAgIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcnM6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIGlzU3VibWl0dGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgb25WYWxpZChmaWVsZFZhbHVlcywgZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob25JbnZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgb25JbnZhbGlkKE9iamVjdC5hc3NpZ24oe30sIF9mb3JtU3RhdGUuZXJyb3JzKSwgZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBfb3B0aW9ucy5zaG91bGRGb2N1c0Vycm9yICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZm9jdXNGaWVsZEJ5KF9maWVsZHMsIChrZXkpID0+IGdldChfZm9ybVN0YXRlLmVycm9ycywga2V5KSwgX25hbWVzLm1vdW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGhhc05vUHJvbWlzZUVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRocm93IGVycjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIF9mb3JtU3RhdGUuaXNTdWJtaXR0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBfc3ViamVjdHMuc3RhdGUubmV4dCh7XHJcbiAgICAgICAgICAgICAgICBpc1N1Ym1pdHRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlzU3VibWl0dGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc1N1Ym1pdFN1Y2Nlc3NmdWw6IGlzRW1wdHlPYmplY3QoX2Zvcm1TdGF0ZS5lcnJvcnMpICYmIGhhc05vUHJvbWlzZUVycm9yLFxyXG4gICAgICAgICAgICAgICAgc3VibWl0Q291bnQ6IF9mb3JtU3RhdGUuc3VibWl0Q291bnQgKyAxLFxyXG4gICAgICAgICAgICAgICAgZXJyb3JzOiBfZm9ybVN0YXRlLmVycm9ycyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlc2V0RmllbGQgPSAobmFtZSwgb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICAgICAgaWYgKGdldChfZmllbGRzLCBuYW1lKSkge1xyXG4gICAgICAgICAgICBpZiAoaXNVbmRlZmluZWQob3B0aW9ucy5kZWZhdWx0VmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZShuYW1lLCBnZXQoX2RlZmF1bHRWYWx1ZXMsIG5hbWUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKG5hbWUsIG9wdGlvbnMuZGVmYXVsdFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHNldChfZGVmYXVsdFZhbHVlcywgbmFtZSwgb3B0aW9ucy5kZWZhdWx0VmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5rZWVwVG91Y2hlZCkge1xyXG4gICAgICAgICAgICAgICAgdW5zZXQoX2Zvcm1TdGF0ZS50b3VjaGVkRmllbGRzLCBuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMua2VlcERpcnR5KSB7XHJcbiAgICAgICAgICAgICAgICB1bnNldChfZm9ybVN0YXRlLmRpcnR5RmllbGRzLCBuYW1lKTtcclxuICAgICAgICAgICAgICAgIF9mb3JtU3RhdGUuaXNEaXJ0eSA9IG9wdGlvbnMuZGVmYXVsdFZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgPyBfZ2V0RGlydHkobmFtZSwgZ2V0KF9kZWZhdWx0VmFsdWVzLCBuYW1lKSlcclxuICAgICAgICAgICAgICAgICAgICA6IF9nZXREaXJ0eSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5rZWVwRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHVuc2V0KF9mb3JtU3RhdGUuZXJyb3JzLCBuYW1lKTtcclxuICAgICAgICAgICAgICAgIF9wcm94eUZvcm1TdGF0ZS5pc1ZhbGlkICYmIF91cGRhdGVWYWxpZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KE9iamVjdC5hc3NpZ24oe30sIF9mb3JtU3RhdGUpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVzZXQgPSAoZm9ybVZhbHVlcywga2VlcFN0YXRlT3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZFZhbHVlcyA9IGZvcm1WYWx1ZXMgfHwgX2RlZmF1bHRWYWx1ZXM7XHJcbiAgICAgICAgY29uc3QgY2xvbmVVcGRhdGVkVmFsdWVzID0gY2xvbmVPYmplY3QodXBkYXRlZFZhbHVlcyk7XHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0gZm9ybVZhbHVlcyAmJiAhaXNFbXB0eU9iamVjdChmb3JtVmFsdWVzKVxyXG4gICAgICAgICAgICA/IGNsb25lVXBkYXRlZFZhbHVlc1xyXG4gICAgICAgICAgICA6IF9kZWZhdWx0VmFsdWVzO1xyXG4gICAgICAgIGlmICgha2VlcFN0YXRlT3B0aW9ucy5rZWVwRGVmYXVsdFZhbHVlcykge1xyXG4gICAgICAgICAgICBfZGVmYXVsdFZhbHVlcyA9IHVwZGF0ZWRWYWx1ZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgha2VlcFN0YXRlT3B0aW9ucy5rZWVwVmFsdWVzKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1dlYiAmJiBpc1VuZGVmaW5lZChmb3JtVmFsdWVzKSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIF9uYW1lcy5tb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZ2V0KF9maWVsZHMsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZCAmJiBmaWVsZC5fZikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZFJlZmVyZW5jZSA9IEFycmF5LmlzQXJyYXkoZmllbGQuX2YucmVmcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZmllbGQuX2YucmVmc1swXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmaWVsZC5fZi5yZWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0hUTUxFbGVtZW50KGZpZWxkUmVmZXJlbmNlKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVmZXJlbmNlLmNsb3Nlc3QoJ2Zvcm0nKS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKF9hKSB7IH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX2Zvcm1WYWx1ZXMgPSBwcm9wcy5zaG91bGRVbnJlZ2lzdGVyXHJcbiAgICAgICAgICAgICAgICA/IGtlZXBTdGF0ZU9wdGlvbnMua2VlcERlZmF1bHRWYWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICA/IGNsb25lT2JqZWN0KF9kZWZhdWx0VmFsdWVzKVxyXG4gICAgICAgICAgICAgICAgICAgIDoge31cclxuICAgICAgICAgICAgICAgIDogY2xvbmVVcGRhdGVkVmFsdWVzO1xyXG4gICAgICAgICAgICBfZmllbGRzID0ge307XHJcbiAgICAgICAgICAgIF9zdWJqZWN0cy5hcnJheS5uZXh0KHtcclxuICAgICAgICAgICAgICAgIHZhbHVlcyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIF9zdWJqZWN0cy53YXRjaC5uZXh0KHtcclxuICAgICAgICAgICAgICAgIHZhbHVlcyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9uYW1lcyA9IHtcclxuICAgICAgICAgICAgbW91bnQ6IG5ldyBTZXQoKSxcclxuICAgICAgICAgICAgdW5Nb3VudDogbmV3IFNldCgpLFxyXG4gICAgICAgICAgICBhcnJheTogbmV3IFNldCgpLFxyXG4gICAgICAgICAgICB3YXRjaDogbmV3IFNldCgpLFxyXG4gICAgICAgICAgICB3YXRjaEFsbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvY3VzOiAnJyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIF9zdGF0ZUZsYWdzLm1vdW50ID1cclxuICAgICAgICAgICAgIV9wcm94eUZvcm1TdGF0ZS5pc1ZhbGlkIHx8ICEha2VlcFN0YXRlT3B0aW9ucy5rZWVwSXNWYWxpZDtcclxuICAgICAgICBfc3RhdGVGbGFncy53YXRjaCA9ICEhcHJvcHMuc2hvdWxkVW5yZWdpc3RlcjtcclxuICAgICAgICBfc3ViamVjdHMuc3RhdGUubmV4dCh7XHJcbiAgICAgICAgICAgIHN1Ym1pdENvdW50OiBrZWVwU3RhdGVPcHRpb25zLmtlZXBTdWJtaXRDb3VudFxyXG4gICAgICAgICAgICAgICAgPyBfZm9ybVN0YXRlLnN1Ym1pdENvdW50XHJcbiAgICAgICAgICAgICAgICA6IDAsXHJcbiAgICAgICAgICAgIGlzRGlydHk6IGtlZXBTdGF0ZU9wdGlvbnMua2VlcERpcnR5XHJcbiAgICAgICAgICAgICAgICA/IF9mb3JtU3RhdGUuaXNEaXJ0eVxyXG4gICAgICAgICAgICAgICAgOiBrZWVwU3RhdGVPcHRpb25zLmtlZXBEZWZhdWx0VmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgPyAhZGVlcEVxdWFsKGZvcm1WYWx1ZXMsIF9kZWZhdWx0VmFsdWVzKVxyXG4gICAgICAgICAgICAgICAgICAgIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzU3VibWl0dGVkOiBrZWVwU3RhdGVPcHRpb25zLmtlZXBJc1N1Ym1pdHRlZFxyXG4gICAgICAgICAgICAgICAgPyBfZm9ybVN0YXRlLmlzU3VibWl0dGVkXHJcbiAgICAgICAgICAgICAgICA6IGZhbHNlLFxyXG4gICAgICAgICAgICBkaXJ0eUZpZWxkczoga2VlcFN0YXRlT3B0aW9ucy5rZWVwRGlydHlcclxuICAgICAgICAgICAgICAgID8gX2Zvcm1TdGF0ZS5kaXJ0eUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgOiAoa2VlcFN0YXRlT3B0aW9ucy5rZWVwRGVmYXVsdFZhbHVlcyAmJiBmb3JtVmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgPyBPYmplY3QuZW50cmllcyhmb3JtVmFsdWVzKS5yZWR1Y2UoKHByZXZpb3VzLCBba2V5LCB2YWx1ZV0pID0+IChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHByZXZpb3VzKSwgeyBba2V5XTogdmFsdWUgIT09IGdldChfZGVmYXVsdFZhbHVlcywga2V5KSB9KSksIHt9KVxyXG4gICAgICAgICAgICAgICAgICAgIDoge30pLFxyXG4gICAgICAgICAgICB0b3VjaGVkRmllbGRzOiBrZWVwU3RhdGVPcHRpb25zLmtlZXBUb3VjaGVkXHJcbiAgICAgICAgICAgICAgICA/IF9mb3JtU3RhdGUudG91Y2hlZEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgOiB7fSxcclxuICAgICAgICAgICAgZXJyb3JzOiBrZWVwU3RhdGVPcHRpb25zLmtlZXBFcnJvcnNcclxuICAgICAgICAgICAgICAgID8gX2Zvcm1TdGF0ZS5lcnJvcnNcclxuICAgICAgICAgICAgICAgIDoge30sXHJcbiAgICAgICAgICAgIGlzU3VibWl0dGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzU3VibWl0U3VjY2Vzc2Z1bDogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc2V0Rm9jdXMgPSAobmFtZSwgb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSBnZXQoX2ZpZWxkcywgbmFtZSkuX2Y7XHJcbiAgICAgICAgY29uc3QgZmllbGRSZWYgPSBmaWVsZC5yZWZzID8gZmllbGQucmVmc1swXSA6IGZpZWxkLnJlZjtcclxuICAgICAgICBvcHRpb25zLnNob3VsZFNlbGVjdCA/IGZpZWxkUmVmLnNlbGVjdCgpIDogZmllbGRSZWYuZm9jdXMoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbnRyb2w6IHtcclxuICAgICAgICAgICAgcmVnaXN0ZXIsXHJcbiAgICAgICAgICAgIHVucmVnaXN0ZXIsXHJcbiAgICAgICAgICAgIGdldEZpZWxkU3RhdGUsXHJcbiAgICAgICAgICAgIF9leGVjdXRlU2NoZW1hLFxyXG4gICAgICAgICAgICBfZ2V0V2F0Y2gsXHJcbiAgICAgICAgICAgIF9nZXREaXJ0eSxcclxuICAgICAgICAgICAgX3VwZGF0ZVZhbGlkLFxyXG4gICAgICAgICAgICBfcmVtb3ZlVW5tb3VudGVkLFxyXG4gICAgICAgICAgICBfdXBkYXRlRmllbGRBcnJheSxcclxuICAgICAgICAgICAgX2dldEZpZWxkQXJyYXksXHJcbiAgICAgICAgICAgIF9zdWJqZWN0cyxcclxuICAgICAgICAgICAgX3Byb3h5Rm9ybVN0YXRlLFxyXG4gICAgICAgICAgICBnZXQgX2ZpZWxkcygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfZmllbGRzO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXQgX2Zvcm1WYWx1ZXMoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX2Zvcm1WYWx1ZXM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldCBfc3RhdGVGbGFncygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfc3RhdGVGbGFncztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0IF9zdGF0ZUZsYWdzKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBfc3RhdGVGbGFncyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXQgX2RlZmF1bHRWYWx1ZXMoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX2RlZmF1bHRWYWx1ZXM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldCBfbmFtZXMoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX25hbWVzO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQgX25hbWVzKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBfbmFtZXMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0IF9mb3JtU3RhdGUoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX2Zvcm1TdGF0ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0IF9mb3JtU3RhdGUodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIF9mb3JtU3RhdGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0IF9vcHRpb25zKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9vcHRpb25zO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQgX29wdGlvbnModmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIF9vcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBfb3B0aW9ucyksIHZhbHVlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRyaWdnZXIsXHJcbiAgICAgICAgcmVnaXN0ZXIsXHJcbiAgICAgICAgaGFuZGxlU3VibWl0LFxyXG4gICAgICAgIHdhdGNoLFxyXG4gICAgICAgIHNldFZhbHVlLFxyXG4gICAgICAgIGdldFZhbHVlcyxcclxuICAgICAgICByZXNldCxcclxuICAgICAgICByZXNldEZpZWxkLFxyXG4gICAgICAgIGNsZWFyRXJyb3JzLFxyXG4gICAgICAgIHVucmVnaXN0ZXIsXHJcbiAgICAgICAgc2V0RXJyb3IsXHJcbiAgICAgICAgc2V0Rm9jdXMsXHJcbiAgICAgICAgZ2V0RmllbGRTdGF0ZSxcclxuICAgIH07XHJcbn1cblxuLyoqXHJcbiAqIEN1c3RvbSBob29rIHRvIG1hbmdlIHRoZSBlbnRpcmUgZm9ybS5cclxuICpcclxuICogQHJlbWFya3NcclxuICogW0FQSV0oaHR0cHM6Ly9yZWFjdC1ob29rLWZvcm0uY29tL2FwaS91c2Vmb3JtKSDigKIgW0RlbW9dKGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9yZWFjdC1ob29rLWZvcm0tZ2V0LXN0YXJ0ZWQtdHMtNWtzbW0pIOKAoiBbVmlkZW9dKGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9UmtYdjRBWFhDXzQpXHJcbiAqXHJcbiAqIEBwYXJhbSBwcm9wcyAtIGZvcm0gY29uZmlndXJhdGlvbiBhbmQgdmFsaWRhdGlvbiBwYXJhbWV0ZXJzLlxyXG4gKlxyXG4gKiBAcmV0dXJucyBtZXRob2RzIC0gaW5kaXZpZHVhbCBmdW5jdGlvbnMgdG8gbWFuYWdlIHRoZSBmb3JtIHN0YXRlLiB7QGxpbmsgVXNlRm9ybVJldHVybn1cclxuICpcclxuICogQGV4YW1wbGVcclxuICogYGBgdHN4XHJcbiAqIGZ1bmN0aW9uIEFwcCgpIHtcclxuICogICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIHdhdGNoLCBmb3JtU3RhdGU6IHsgZXJyb3JzIH0gfSA9IHVzZUZvcm0oKTtcclxuICogICBjb25zdCBvblN1Ym1pdCA9IGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSk7XHJcbiAqXHJcbiAqICAgY29uc29sZS5sb2cod2F0Y2goXCJleGFtcGxlXCIpKTtcclxuICpcclxuICogICByZXR1cm4gKFxyXG4gKiAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG4gKiAgICAgICA8aW5wdXQgZGVmYXVsdFZhbHVlPVwidGVzdFwiIHsuLi5yZWdpc3RlcihcImV4YW1wbGVcIil9IC8+XHJcbiAqICAgICAgIDxpbnB1dCB7Li4ucmVnaXN0ZXIoXCJleGFtcGxlUmVxdWlyZWRcIiwgeyByZXF1aXJlZDogdHJ1ZSB9KX0gLz5cclxuICogICAgICAge2Vycm9ycy5leGFtcGxlUmVxdWlyZWQgJiYgPHNwYW4+VGhpcyBmaWVsZCBpcyByZXF1aXJlZDwvc3Bhbj59XHJcbiAqICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgLz5cclxuICogICAgIDwvZm9ybT5cclxuICogICApO1xyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKi9cclxuZnVuY3Rpb24gdXNlRm9ybShwcm9wcyA9IHt9KSB7XHJcbiAgICBjb25zdCBfZm9ybUNvbnRyb2wgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgIGNvbnN0IFtmb3JtU3RhdGUsIHVwZGF0ZUZvcm1TdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICAgICAgaXNEaXJ0eTogZmFsc2UsXHJcbiAgICAgICAgaXNWYWxpZGF0aW5nOiBmYWxzZSxcclxuICAgICAgICBkaXJ0eUZpZWxkczoge30sXHJcbiAgICAgICAgaXNTdWJtaXR0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIHN1Ym1pdENvdW50OiAwLFxyXG4gICAgICAgIHRvdWNoZWRGaWVsZHM6IHt9LFxyXG4gICAgICAgIGlzU3VibWl0dGluZzogZmFsc2UsXHJcbiAgICAgICAgaXNTdWJtaXRTdWNjZXNzZnVsOiBmYWxzZSxcclxuICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgICAgICBlcnJvcnM6IHt9LFxyXG4gICAgfSk7XHJcbiAgICBpZiAoX2Zvcm1Db250cm9sLmN1cnJlbnQpIHtcclxuICAgICAgICBfZm9ybUNvbnRyb2wuY3VycmVudC5jb250cm9sLl9vcHRpb25zID0gcHJvcHM7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBfZm9ybUNvbnRyb2wuY3VycmVudCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3JlYXRlRm9ybUNvbnRyb2wocHJvcHMpKSwgeyBmb3JtU3RhdGUgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb250cm9sID0gX2Zvcm1Db250cm9sLmN1cnJlbnQuY29udHJvbDtcclxuICAgIGNvbnN0IGNhbGxiYWNrID0gUmVhY3QudXNlQ2FsbGJhY2soKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKHNob3VsZFJlbmRlckZvcm1TdGF0ZSh2YWx1ZSwgY29udHJvbC5fcHJveHlGb3JtU3RhdGUsIHRydWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnRyb2wuX2Zvcm1TdGF0ZSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29udHJvbC5fZm9ybVN0YXRlKSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB1cGRhdGVGb3JtU3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgY29udHJvbC5fZm9ybVN0YXRlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2NvbnRyb2xdKTtcclxuICAgIHVzZVN1YnNjcmliZSh7XHJcbiAgICAgICAgc3ViamVjdDogY29udHJvbC5fc3ViamVjdHMuc3RhdGUsXHJcbiAgICAgICAgY2FsbGJhY2ssXHJcbiAgICB9KTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjb250cm9sLl9zdGF0ZUZsYWdzLm1vdW50KSB7XHJcbiAgICAgICAgICAgIGNvbnRyb2wuX3Byb3h5Rm9ybVN0YXRlLmlzVmFsaWQgJiYgY29udHJvbC5fdXBkYXRlVmFsaWQoKTtcclxuICAgICAgICAgICAgY29udHJvbC5fc3RhdGVGbGFncy5tb3VudCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb250cm9sLl9zdGF0ZUZsYWdzLndhdGNoKSB7XHJcbiAgICAgICAgICAgIGNvbnRyb2wuX3N0YXRlRmxhZ3Mud2F0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgY29udHJvbC5fc3ViamVjdHMuc3RhdGUubmV4dCh7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRyb2wuX3JlbW92ZVVubW91bnRlZCgpO1xyXG4gICAgfSk7XHJcbiAgICBfZm9ybUNvbnRyb2wuY3VycmVudC5mb3JtU3RhdGUgPSBnZXRQcm94eUZvcm1TdGF0ZShmb3JtU3RhdGUsIGNvbnRyb2wuX3Byb3h5Rm9ybVN0YXRlKTtcclxuICAgIHJldHVybiBfZm9ybUNvbnRyb2wuY3VycmVudDtcclxufVxuXG5leHBvcnQgeyBDb250cm9sbGVyLCBGb3JtUHJvdmlkZXIsIGFwcGVuZEVycm9ycywgZ2V0LCBzZXQsIHVzZUNvbnRyb2xsZXIsIHVzZUZpZWxkQXJyYXksIHVzZUZvcm0sIHVzZUZvcm1Db250ZXh0LCB1c2VGb3JtU3RhdGUsIHVzZVdhdGNoIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20ubWpzLm1hcFxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbi8vIFRPRE86IHRoaXMgaXMgc3BlY2lhbCBiZWNhdXNlIGl0IGdldHMgaW1wb3J0ZWQgZHVyaW5nIGJ1aWxkLlxudmFyIFJlYWN0VmVyc2lvbiA9ICcxNy4wLjInO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xuZXhwb3J0cy5GcmFnbWVudCA9IDB4ZWFjYjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IDB4ZWFjYztcbmV4cG9ydHMuUHJvZmlsZXIgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbmV4cG9ydHMuU3VzcGVuc2UgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBleHBvcnRzLkZyYWdtZW50ID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBleHBvcnRzLlN0cmljdE1vZGUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIGV4cG9ydHMuUHJvZmlsZXIgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBleHBvcnRzLlN1c3BlbnNlID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgZGlzcGF0Y2hlci5cbiAqL1xudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBiYXRjaCdzIGNvbmZpZ3VyYXRpb24gc3VjaCBhcyBob3cgbG9uZyBhbiB1cGRhdGVcbiAqIHNob3VsZCBzdXNwZW5kIGZvciBpZiBpdCBuZWVkcyB0by5cbiAqL1xudmFyIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnID0ge1xuICB0cmFuc2l0aW9uOiAwXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IG93bmVyLlxuICpcbiAqIFRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBjb21wb25lbnQgd2hvIHNob3VsZCBvd24gYW55IGNvbXBvbmVudHMgdGhhdCBhcmVcbiAqIGN1cnJlbnRseSBiZWluZyBjb25zdHJ1Y3RlZC5cbiAqL1xudmFyIFJlYWN0Q3VycmVudE93bmVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0ge307XG52YXIgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IG51bGw7XG5mdW5jdGlvbiBzZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spIHtcbiAge1xuICAgIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBzdGFjaztcbiAgfVxufVxuXG57XG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lID0gZnVuY3Rpb24gKHN0YWNrKSB7XG4gICAge1xuICAgICAgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IHN0YWNrO1xuICAgIH1cbiAgfTsgLy8gU3RhY2sgaW1wbGVtZW50YXRpb24gaW5qZWN0ZWQgYnkgdGhlIGN1cnJlbnQgcmVuZGVyZXIuXG5cblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjayA9IG51bGw7XG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGFjayA9ICcnOyAvLyBBZGQgYW4gZXh0cmEgdG9wIGZyYW1lIHdoaWxlIGFuIGVsZW1lbnQgaXMgYmVpbmcgdmFsaWRhdGVkXG5cbiAgICBpZiAoY3VycmVudEV4dHJhU3RhY2tGcmFtZSkge1xuICAgICAgc3RhY2sgKz0gY3VycmVudEV4dHJhU3RhY2tGcmFtZTtcbiAgICB9IC8vIERlbGVnYXRlIHRvIHRoZSBpbmplY3RlZCByZW5kZXJlci1zcGVjaWZpYyBpbXBsZW1lbnRhdGlvblxuXG5cbiAgICB2YXIgaW1wbCA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrO1xuXG4gICAgaWYgKGltcGwpIHtcbiAgICAgIHN0YWNrICs9IGltcGwoKSB8fCAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhY2s7XG4gIH07XG59XG5cbi8qKlxuICogVXNlZCBieSBhY3QoKSB0byB0cmFjayB3aGV0aGVyIHlvdSdyZSBpbnNpZGUgYW4gYWN0KCkgc2NvcGUuXG4gKi9cbnZhciBJc1NvbWVSZW5kZXJlckFjdGluZyA9IHtcbiAgY3VycmVudDogZmFsc2Vcbn07XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IHtcbiAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjogUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixcbiAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWc6IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLFxuICBSZWFjdEN1cnJlbnRPd25lcjogUmVhY3RDdXJyZW50T3duZXIsXG4gIElzU29tZVJlbmRlcmVyQWN0aW5nOiBJc1NvbWVSZW5kZXJlckFjdGluZyxcbiAgLy8gVXNlZCBieSByZW5kZXJlcnMgdG8gYXZvaWQgYnVuZGxpbmcgb2JqZWN0LWFzc2lnbiB0d2ljZSBpbiBVTUQgYnVuZGxlczpcbiAgYXNzaWduOiBfYXNzaWduXG59O1xuXG57XG4gIFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lO1xufVxuXG4vLyBieSBjYWxscyB0byB0aGVzZSBtZXRob2RzIGJ5IGEgQmFiZWwgcGx1Z2luLlxuLy9cbi8vIEluIFBST0QgKG9yIGluIHBhY2thZ2VzIHdpdGhvdXQgYWNjZXNzIHRvIFJlYWN0IGludGVybmFscyksXG4vLyB0aGV5IGFyZSBsZWZ0IGFzIHRoZXkgYXJlIGluc3RlYWQuXG5cbmZ1bmN0aW9uIHdhcm4oZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ3dhcm4nLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH1cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxudmFyIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudCA9IHt9O1xuXG5mdW5jdGlvbiB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgY2FsbGVyTmFtZSkge1xuICB7XG4gICAgdmFyIF9jb25zdHJ1Y3RvciA9IHB1YmxpY0luc3RhbmNlLmNvbnN0cnVjdG9yO1xuICAgIHZhciBjb21wb25lbnROYW1lID0gX2NvbnN0cnVjdG9yICYmIChfY29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgX2NvbnN0cnVjdG9yLm5hbWUpIHx8ICdSZWFjdENsYXNzJztcbiAgICB2YXIgd2FybmluZ0tleSA9IGNvbXBvbmVudE5hbWUgKyBcIi5cIiArIGNhbGxlck5hbWU7XG5cbiAgICBpZiAoZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXJyb3IoXCJDYW4ndCBjYWxsICVzIG9uIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IHlldCBtb3VudGVkLiBcIiArICdUaGlzIGlzIGEgbm8tb3AsIGJ1dCBpdCBtaWdodCBpbmRpY2F0ZSBhIGJ1ZyBpbiB5b3VyIGFwcGxpY2F0aW9uLiAnICsgJ0luc3RlYWQsIGFzc2lnbiB0byBgdGhpcy5zdGF0ZWAgZGlyZWN0bHkgb3IgZGVmaW5lIGEgYHN0YXRlID0ge307YCAnICsgJ2NsYXNzIHByb3BlcnR5IHdpdGggdGhlIGRlc2lyZWQgc3RhdGUgaW4gdGhlICVzIGNvbXBvbmVudC4nLCBjYWxsZXJOYW1lLCBjb21wb25lbnROYW1lKTtcblxuICAgIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSA9IHRydWU7XG4gIH1cbn1cbi8qKlxuICogVGhpcyBpcyB0aGUgYWJzdHJhY3QgQVBJIGZvciBhbiB1cGRhdGUgcXVldWUuXG4gKi9cblxuXG52YXIgUmVhY3ROb29wVXBkYXRlUXVldWUgPSB7XG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3QgdGhpcyBjb21wb3NpdGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHdlIHdhbnQgdG8gdGVzdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtb3VudGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQGZpbmFsXG4gICAqL1xuICBpc01vdW50ZWQ6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICAgKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAgICpcbiAgICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICAgKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAgICpcbiAgICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICAgKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZUZvcmNlVXBkYXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdmb3JjZVVwZGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyBhbGwgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgb3IgYHNldFN0YXRlYCB0byBtdXRhdGUgc3RhdGUuXG4gICAqIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAgICpcbiAgICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAgICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb21wbGV0ZVN0YXRlIE5leHQgc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY29tcGxldGVTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3JlcGxhY2VTdGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gVGhpcyBvbmx5IGV4aXN0cyBiZWNhdXNlIF9wZW5kaW5nU3RhdGUgaXNcbiAgICogaW50ZXJuYWwuIFRoaXMgcHJvdmlkZXMgYSBtZXJnaW5nIHN0cmF0ZWd5IHRoYXQgaXMgbm90IGF2YWlsYWJsZSB0byBkZWVwXG4gICAqIHByb3BlcnRpZXMgd2hpY2ggaXMgY29uZnVzaW5nLiBUT0RPOiBFeHBvc2UgcGVuZGluZ1N0YXRlIG9yIGRvbid0IHVzZSBpdFxuICAgKiBkdXJpbmcgdGhlIG1lcmdlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gTmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlU2V0U3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnc2V0U3RhdGUnKTtcbiAgfVxufTtcblxudmFyIGVtcHR5T2JqZWN0ID0ge307XG5cbntcbiAgT2JqZWN0LmZyZWV6ZShlbXB0eU9iamVjdCk7XG59XG4vKipcbiAqIEJhc2UgY2xhc3MgaGVscGVycyBmb3IgdGhlIHVwZGF0aW5nIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICovXG5cblxuZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7IC8vIFdlIGluaXRpYWxpemUgdGhlIGRlZmF1bHQgdXBkYXRlciBidXQgdGhlIHJlYWwgb25lIGdldHMgaW5qZWN0ZWQgYnkgdGhlXG4gIC8vIHJlbmRlcmVyLlxuXG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbkNvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IHt9O1xuLyoqXG4gKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIHRvIG11dGF0ZVxuICogc3RhdGUuIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBjYWxscyB0byBgc2V0U3RhdGVgIHdpbGwgcnVuIHN5bmNocm9ub3VzbHksXG4gKiBhcyB0aGV5IG1heSBldmVudHVhbGx5IGJlIGJhdGNoZWQgdG9nZXRoZXIuICBZb3UgY2FuIHByb3ZpZGUgYW4gb3B0aW9uYWxcbiAqIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aGVuIHRoZSBjYWxsIHRvIHNldFN0YXRlIGlzIGFjdHVhbGx5XG4gKiBjb21wbGV0ZWQuXG4gKlxuICogV2hlbiBhIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHRvIHNldFN0YXRlLCBpdCB3aWxsIGJlIGNhbGxlZCBhdCBzb21lIHBvaW50IGluXG4gKiB0aGUgZnV0dXJlIChub3Qgc3luY2hyb25vdXNseSkuIEl0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIHVwIHRvIGRhdGVcbiAqIGNvbXBvbmVudCBhcmd1bWVudHMgKHN0YXRlLCBwcm9wcywgY29udGV4dCkuIFRoZXNlIHZhbHVlcyBjYW4gYmUgZGlmZmVyZW50XG4gKiBmcm9tIHRoaXMuKiBiZWNhdXNlIHlvdXIgZnVuY3Rpb24gbWF5IGJlIGNhbGxlZCBhZnRlciByZWNlaXZlUHJvcHMgYnV0IGJlZm9yZVxuICogc2hvdWxkQ29tcG9uZW50VXBkYXRlLCBhbmQgdGhpcyBuZXcgc3RhdGUsIHByb3BzLCBhbmQgY29udGV4dCB3aWxsIG5vdCB5ZXQgYmVcbiAqIGFzc2lnbmVkIHRvIHRoaXMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgb3IgZnVuY3Rpb24gdG9cbiAqICAgICAgICBwcm9kdWNlIG5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBjdXJyZW50IHN0YXRlLlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBzdGF0ZSBpcyB1cGRhdGVkLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrKSB7XG4gIGlmICghKHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdmdW5jdGlvbicgfHwgcGFydGlhbFN0YXRlID09IG51bGwpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwic2V0U3RhdGUoLi4uKTogdGFrZXMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcyB0byB1cGRhdGUgb3IgYSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMuXCIgKTtcbiAgICB9XG4gIH1cblxuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssICdzZXRTdGF0ZScpO1xufTtcbi8qKlxuICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gKlxuICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gKlxuICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAqXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHVwZGF0ZSBpcyBjb21wbGV0ZS5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cblxuQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsIGNhbGxiYWNrLCAnZm9yY2VVcGRhdGUnKTtcbn07XG4vKipcbiAqIERlcHJlY2F0ZWQgQVBJcy4gVGhlc2UgQVBJcyB1c2VkIHRvIGV4aXN0IG9uIGNsYXNzaWMgUmVhY3QgY2xhc3NlcyBidXQgc2luY2VcbiAqIHdlIHdvdWxkIGxpa2UgdG8gZGVwcmVjYXRlIHRoZW0sIHdlJ3JlIG5vdCBnb2luZyB0byBtb3ZlIHRoZW0gb3ZlciB0byB0aGlzXG4gKiBtb2Rlcm4gYmFzZSBjbGFzcy4gSW5zdGVhZCwgd2UgZGVmaW5lIGEgZ2V0dGVyIHRoYXQgd2FybnMgaWYgaXQncyBhY2Nlc3NlZC5cbiAqL1xuXG5cbntcbiAgdmFyIGRlcHJlY2F0ZWRBUElzID0ge1xuICAgIGlzTW91bnRlZDogWydpc01vdW50ZWQnLCAnSW5zdGVhZCwgbWFrZSBzdXJlIHRvIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIHBlbmRpbmcgcmVxdWVzdHMgaW4gJyArICdjb21wb25lbnRXaWxsVW5tb3VudCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcy4nXSxcbiAgICByZXBsYWNlU3RhdGU6IFsncmVwbGFjZVN0YXRlJywgJ1JlZmFjdG9yIHlvdXIgY29kZSB0byB1c2Ugc2V0U3RhdGUgaW5zdGVhZCAoc2VlICcgKyAnaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8zMjM2KS4nXVxuICB9O1xuXG4gIHZhciBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSwgaW5mbykge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQucHJvdG90eXBlLCBtZXRob2ROYW1lLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2FybignJXMoLi4uKSBpcyBkZXByZWNhdGVkIGluIHBsYWluIEphdmFTY3JpcHQgUmVhY3QgY2xhc3Nlcy4gJXMnLCBpbmZvWzBdLCBpbmZvWzFdKTtcblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIGZuTmFtZSBpbiBkZXByZWNhdGVkQVBJcykge1xuICAgIGlmIChkZXByZWNhdGVkQVBJcy5oYXNPd25Qcm9wZXJ0eShmbk5hbWUpKSB7XG4gICAgICBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcoZm5OYW1lLCBkZXByZWNhdGVkQVBJc1tmbk5hbWVdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gQ29tcG9uZW50RHVtbXkoKSB7fVxuXG5Db21wb25lbnREdW1teS5wcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuLyoqXG4gKiBDb252ZW5pZW5jZSBjb21wb25lbnQgd2l0aCBkZWZhdWx0IHNoYWxsb3cgZXF1YWxpdHkgY2hlY2sgZm9yIHNDVS5cbiAqL1xuXG5mdW5jdGlvbiBQdXJlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbnZhciBwdXJlQ29tcG9uZW50UHJvdG90eXBlID0gUHVyZUNvbXBvbmVudC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50RHVtbXkoKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuY29uc3RydWN0b3IgPSBQdXJlQ29tcG9uZW50OyAvLyBBdm9pZCBhbiBleHRyYSBwcm90b3R5cGUganVtcCBmb3IgdGhlc2UgbWV0aG9kcy5cblxuX2Fzc2lnbihwdXJlQ29tcG9uZW50UHJvdG90eXBlLCBDb21wb25lbnQucHJvdG90eXBlKTtcblxucHVyZUNvbXBvbmVudFByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudCA9IHRydWU7XG5cbi8vIGFuIGltbXV0YWJsZSBvYmplY3Qgd2l0aCBhIHNpbmdsZSBtdXRhYmxlIHZhbHVlXG5mdW5jdGlvbiBjcmVhdGVSZWYoKSB7XG4gIHZhciByZWZPYmplY3QgPSB7XG4gICAgY3VycmVudDogbnVsbFxuICB9O1xuXG4gIHtcbiAgICBPYmplY3Quc2VhbChyZWZPYmplY3QpO1xuICB9XG5cbiAgcmV0dXJuIHJlZk9iamVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgZXhwb3J0cy5GcmFnbWVudDpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgZXhwb3J0cy5Qcm9maWxlcjpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBleHBvcnRzLlN0cmljdE1vZGU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBleHBvcnRzLlN1c3BlbnNlOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duLCBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biwgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgY29uZmlnLl9fc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gY29uZmlnLl9fc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBjb21wb25lbnROYW1lLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciByZWYgPSBudWxsO1xuICB2YXIgc2VsZiA9IG51bGw7XG4gIHZhciBzb3VyY2UgPSBudWxsO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuXG4gICAgICB7XG4gICAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgc2VsZiA9IGNvbmZpZy5fX3NlbGYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zZWxmO1xuICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTsgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAge1xuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xufVxuZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICB2YXIgbmV3RWxlbWVudCA9IFJlYWN0RWxlbWVudChvbGRFbGVtZW50LnR5cGUsIG5ld0tleSwgb2xkRWxlbWVudC5yZWYsIG9sZEVsZW1lbnQuX3NlbGYsIG9sZEVsZW1lbnQuX3NvdXJjZSwgb2xkRWxlbWVudC5fb3duZXIsIG9sZEVsZW1lbnQucHJvcHMpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIGlmICghIShlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHVuZGVmaW5lZCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJSZWFjdC5jbG9uZUVsZW1lbnQoLi4uKTogVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBSZWFjdCBlbGVtZW50LCBidXQgeW91IHBhc3NlZCBcIiArIGVsZW1lbnQgKyBcIi5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwcm9wTmFtZTsgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuXG4gIHZhciBwcm9wcyA9IF9hc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cblxuICB2YXIga2V5ID0gZWxlbWVudC5rZXk7XG4gIHZhciByZWYgPSBlbGVtZW50LnJlZjsgLy8gU2VsZiBpcyBwcmVzZXJ2ZWQgc2luY2UgdGhlIG93bmVyIGlzIHByZXNlcnZlZC5cblxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7IC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAvLyB0cnVlIG93bmVyLlxuXG4gIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7IC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cblxuICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgLy8gU2lsZW50bHkgc3RlYWwgdGhlIHJlZiBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBvdmVycmlkZSBleGlzdGluZyBwcm9wc1xuXG5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuXG4gICAgaWYgKGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICBkZWZhdWx0UHJvcHMgPSBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzO1xuICAgIH1cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIGlmIChjb25maWdbcHJvcE5hbWVdID09PSB1bmRlZmluZWQgJiYgZGVmYXVsdFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQoZWxlbWVudC50eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cblxudmFyIFNFUEFSQVRPUiA9ICcuJztcbnZhciBTVUJTRVBBUkFUT1IgPSAnOic7XG4vKipcbiAqIEVzY2FwZSBhbmQgd3JhcCBrZXkgc28gaXQgaXMgc2FmZSB0byB1c2UgYXMgYSByZWFjdGlkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSB0byBiZSBlc2NhcGVkLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgZXNjYXBlZCBrZXkuXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlKGtleSkge1xuICB2YXIgZXNjYXBlUmVnZXggPSAvWz06XS9nO1xuICB2YXIgZXNjYXBlckxvb2t1cCA9IHtcbiAgICAnPSc6ICc9MCcsXG4gICAgJzonOiAnPTInXG4gIH07XG4gIHZhciBlc2NhcGVkU3RyaW5nID0ga2V5LnJlcGxhY2UoZXNjYXBlUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiBlc2NhcGVyTG9va3VwW21hdGNoXTtcbiAgfSk7XG4gIHJldHVybiAnJCcgKyBlc2NhcGVkU3RyaW5nO1xufVxuLyoqXG4gKiBUT0RPOiBUZXN0IHRoYXQgYSBzaW5nbGUgY2hpbGQgYW5kIGFuIGFycmF5IHdpdGggb25lIGl0ZW0gaGF2ZSB0aGUgc2FtZSBrZXlcbiAqIHBhdHRlcm4uXG4gKi9cblxuXG52YXIgZGlkV2FybkFib3V0TWFwcyA9IGZhbHNlO1xudmFyIHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4ID0gL1xcLysvZztcblxuZnVuY3Rpb24gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHRleHQpIHtcbiAgcmV0dXJuIHRleHQucmVwbGFjZSh1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCwgJyQmLycpO1xufVxuLyoqXG4gKiBHZW5lcmF0ZSBhIGtleSBzdHJpbmcgdGhhdCBpZGVudGlmaWVzIGEgZWxlbWVudCB3aXRoaW4gYSBzZXQuXG4gKlxuICogQHBhcmFtIHsqfSBlbGVtZW50IEEgZWxlbWVudCB0aGF0IGNvdWxkIGNvbnRhaW4gYSBtYW51YWwga2V5LlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IEluZGV4IHRoYXQgaXMgdXNlZCBpZiBhIG1hbnVhbCBrZXkgaXMgbm90IHByb3ZpZGVkLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5cblxuZnVuY3Rpb24gZ2V0RWxlbWVudEtleShlbGVtZW50LCBpbmRleCkge1xuICAvLyBEbyBzb21lIHR5cGVjaGVja2luZyBoZXJlIHNpbmNlIHdlIGNhbGwgdGhpcyBibGluZGx5LiBXZSB3YW50IHRvIGVuc3VyZVxuICAvLyB0aGF0IHdlIGRvbid0IGJsb2NrIHBvdGVudGlhbCBmdXR1cmUgRVMgQVBJcy5cbiAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnb2JqZWN0JyAmJiBlbGVtZW50ICE9PSBudWxsICYmIGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAvLyBFeHBsaWNpdCBrZXlcbiAgICByZXR1cm4gZXNjYXBlKCcnICsgZWxlbWVudC5rZXkpO1xuICB9IC8vIEltcGxpY2l0IGtleSBkZXRlcm1pbmVkIGJ5IHRoZSBpbmRleCBpbiB0aGUgc2V0XG5cblxuICByZXR1cm4gaW5kZXgudG9TdHJpbmcoMzYpO1xufVxuXG5mdW5jdGlvbiBtYXBJbnRvQXJyYXkoY2hpbGRyZW4sIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuYW1lU29GYXIsIGNhbGxiYWNrKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGNoaWxkcmVuO1xuXG4gIGlmICh0eXBlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAvLyBBbGwgb2YgdGhlIGFib3ZlIGFyZSBwZXJjZWl2ZWQgYXMgbnVsbC5cbiAgICBjaGlsZHJlbiA9IG51bGw7XG4gIH1cblxuICB2YXIgaW52b2tlQ2FsbGJhY2sgPSBmYWxzZTtcblxuICBpZiAoY2hpbGRyZW4gPT09IG51bGwpIHtcbiAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgc3dpdGNoIChjaGlsZHJlbi4kJHR5cGVvZikge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIGlmIChpbnZva2VDYWxsYmFjaykge1xuICAgIHZhciBfY2hpbGQgPSBjaGlsZHJlbjtcbiAgICB2YXIgbWFwcGVkQ2hpbGQgPSBjYWxsYmFjayhfY2hpbGQpOyAvLyBJZiBpdCdzIHRoZSBvbmx5IGNoaWxkLCB0cmVhdCB0aGUgbmFtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBhbiBhcnJheVxuICAgIC8vIHNvIHRoYXQgaXQncyBjb25zaXN0ZW50IGlmIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gZ3Jvd3M6XG5cbiAgICB2YXIgY2hpbGRLZXkgPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SICsgZ2V0RWxlbWVudEtleShfY2hpbGQsIDApIDogbmFtZVNvRmFyO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobWFwcGVkQ2hpbGQpKSB7XG4gICAgICB2YXIgZXNjYXBlZENoaWxkS2V5ID0gJyc7XG5cbiAgICAgIGlmIChjaGlsZEtleSAhPSBudWxsKSB7XG4gICAgICAgIGVzY2FwZWRDaGlsZEtleSA9IGVzY2FwZVVzZXJQcm92aWRlZEtleShjaGlsZEtleSkgKyAnLyc7XG4gICAgICB9XG5cbiAgICAgIG1hcEludG9BcnJheShtYXBwZWRDaGlsZCwgYXJyYXksIGVzY2FwZWRDaGlsZEtleSwgJycsIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHJldHVybiBjO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChtYXBwZWRDaGlsZCAhPSBudWxsKSB7XG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQobWFwcGVkQ2hpbGQpKSB7XG4gICAgICAgIG1hcHBlZENoaWxkID0gY2xvbmVBbmRSZXBsYWNlS2V5KG1hcHBlZENoaWxkLCAvLyBLZWVwIGJvdGggdGhlIChtYXBwZWQpIGFuZCBvbGQga2V5cyBpZiB0aGV5IGRpZmZlciwganVzdCBhc1xuICAgICAgICAvLyB0cmF2ZXJzZUFsbENoaWxkcmVuIHVzZWQgdG8gZG8gZm9yIG9iamVjdHMgYXMgY2hpbGRyZW5cbiAgICAgICAgZXNjYXBlZFByZWZpeCArICggLy8gJEZsb3dGaXhNZSBGbG93IGluY29ycmVjdGx5IHRoaW5rcyBSZWFjdC5Qb3J0YWwgZG9lc24ndCBoYXZlIGEga2V5XG4gICAgICAgIG1hcHBlZENoaWxkLmtleSAmJiAoIV9jaGlsZCB8fCBfY2hpbGQua2V5ICE9PSBtYXBwZWRDaGlsZC5rZXkpID8gLy8gJEZsb3dGaXhNZSBGbG93IGluY29ycmVjdGx5IHRoaW5rcyBleGlzdGluZyBlbGVtZW50J3Mga2V5IGNhbiBiZSBhIG51bWJlclxuICAgICAgICBlc2NhcGVVc2VyUHJvdmlkZWRLZXkoJycgKyBtYXBwZWRDaGlsZC5rZXkpICsgJy8nIDogJycpICsgY2hpbGRLZXkpO1xuICAgICAgfVxuXG4gICAgICBhcnJheS5wdXNoKG1hcHBlZENoaWxkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHZhciBjaGlsZDtcbiAgdmFyIG5leHROYW1lO1xuICB2YXIgc3VidHJlZUNvdW50ID0gMDsgLy8gQ291bnQgb2YgY2hpbGRyZW4gZm91bmQgaW4gdGhlIGN1cnJlbnQgc3VidHJlZS5cblxuICB2YXIgbmV4dE5hbWVQcmVmaXggPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SIDogbmFtZVNvRmFyICsgU1VCU0VQQVJBVE9SO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0RWxlbWVudEtleShjaGlsZCwgaSk7XG4gICAgICBzdWJ0cmVlQ291bnQgKz0gbWFwSW50b0FycmF5KGNoaWxkLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmV4dE5hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKGNoaWxkcmVuKTtcblxuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIGl0ZXJhYmxlQ2hpbGRyZW4gPSBjaGlsZHJlbjtcblxuICAgICAge1xuICAgICAgICAvLyBXYXJuIGFib3V0IHVzaW5nIE1hcHMgYXMgY2hpbGRyZW5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gPT09IGl0ZXJhYmxlQ2hpbGRyZW4uZW50cmllcykge1xuICAgICAgICAgIGlmICghZGlkV2FybkFib3V0TWFwcykge1xuICAgICAgICAgICAgd2FybignVXNpbmcgTWFwcyBhcyBjaGlsZHJlbiBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ1VzZSBhbiBhcnJheSBvZiBrZXllZCBSZWFjdEVsZW1lbnRzIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlkV2FybkFib3V0TWFwcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKGl0ZXJhYmxlQ2hpbGRyZW4pO1xuICAgICAgdmFyIHN0ZXA7XG4gICAgICB2YXIgaWkgPSAwO1xuXG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGNoaWxkID0gc3RlcC52YWx1ZTtcbiAgICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldEVsZW1lbnRLZXkoY2hpbGQsIGlpKyspO1xuICAgICAgICBzdWJ0cmVlQ291bnQgKz0gbWFwSW50b0FycmF5KGNoaWxkLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmV4dE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgY2hpbGRyZW5TdHJpbmcgPSAnJyArIGNoaWxkcmVuO1xuXG4gICAgICB7XG4gICAgICAgIHtcbiAgICAgICAgICB0aHJvdyBFcnJvciggXCJPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBSZWFjdCBjaGlsZCAoZm91bmQ6IFwiICsgKGNoaWxkcmVuU3RyaW5nID09PSAnW29iamVjdCBPYmplY3RdJyA/ICdvYmplY3Qgd2l0aCBrZXlzIHsnICsgT2JqZWN0LmtleXMoY2hpbGRyZW4pLmpvaW4oJywgJykgKyAnfScgOiBjaGlsZHJlblN0cmluZykgKyBcIikuIElmIHlvdSBtZWFudCB0byByZW5kZXIgYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCB1c2UgYW4gYXJyYXkgaW5zdGVhZC5cIiApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YnRyZWVDb3VudDtcbn1cblxuLyoqXG4gKiBNYXBzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5tYXBcbiAqXG4gKiBUaGUgcHJvdmlkZWQgbWFwRnVuY3Rpb24oY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYyBUaGUgbWFwIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBjb3VudCA9IDA7XG4gIG1hcEludG9BcnJheShjaGlsZHJlbiwgcmVzdWx0LCAnJywgJycsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGNvdW50KyspO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzXG4gKiBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmNvdW50XG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4uXG4gKi9cblxuXG5mdW5jdGlvbiBjb3VudENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHZhciBuID0gMDtcbiAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICBuKys7IC8vIERvbid0IHJldHVybiBhbnl0aGluZ1xuICB9KTtcbiAgcmV0dXJuIG47XG59XG5cbi8qKlxuICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuZm9yZWFjaFxuICpcbiAqIFRoZSBwcm92aWRlZCBmb3JFYWNoRnVuYyhjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmb3JFYWNoRnVuY1xuICogQHBhcmFtIHsqfSBmb3JFYWNoQ29udGV4dCBDb250ZXh0IGZvciBmb3JFYWNoQ29udGV4dC5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICBmb3JFYWNoRnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBEb24ndCByZXR1cm4gYW55dGhpbmcuXG4gIH0sIGZvckVhY2hDb250ZXh0KTtcbn1cbi8qKlxuICogRmxhdHRlbiBhIGNoaWxkcmVuIG9iamVjdCAodHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gKSBhbmRcbiAqIHJldHVybiBhbiBhcnJheSB3aXRoIGFwcHJvcHJpYXRlbHkgcmUta2V5ZWQgY2hpbGRyZW4uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVudG9hcnJheVxuICovXG5cblxuZnVuY3Rpb24gdG9BcnJheShjaGlsZHJlbikge1xuICByZXR1cm4gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfSkgfHwgW107XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVub25seVxuICpcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcbiAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXG4gKiBhYnN0cmFjdCBhd2F5IHRoZSBwYXJ0aWN1bGFyIHN0cnVjdHVyZSBvZiBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBUaGUgZmlyc3QgYW5kIG9ubHkgYFJlYWN0RWxlbWVudGAgY29udGFpbmVkIGluIHRoZVxuICogc3RydWN0dXJlLlxuICovXG5cblxuZnVuY3Rpb24gb25seUNoaWxkKGNoaWxkcmVuKSB7XG4gIGlmICghaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuXCIgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlLCBjYWxjdWxhdGVDaGFuZ2VkQml0cykge1xuICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB7XG4gICAgICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgIT09IG51bGwgJiYgdHlwZW9mIGNhbGN1bGF0ZUNoYW5nZWRCaXRzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVycm9yKCdjcmVhdGVDb250ZXh0OiBFeHBlY3RlZCB0aGUgb3B0aW9uYWwgc2Vjb25kIGFyZ3VtZW50IHRvIGJlIGEgJyArICdmdW5jdGlvbi4gSW5zdGVhZCByZWNlaXZlZDogJXMnLCBjYWxjdWxhdGVDaGFuZ2VkQml0cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRleHQgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNhbGN1bGF0ZUNoYW5nZWRCaXRzLFxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCB0byBzdXBwb3J0IG11bHRpcGxlIGNvbmN1cnJlbnQgcmVuZGVyZXJzLCB3ZSBjYXRlZ29yaXplXG4gICAgLy8gc29tZSByZW5kZXJlcnMgYXMgcHJpbWFyeSBhbmQgb3RoZXJzIGFzIHNlY29uZGFyeS4gV2Ugb25seSBleHBlY3RcbiAgICAvLyB0aGVyZSB0byBiZSB0d28gY29uY3VycmVudCByZW5kZXJlcnMgYXQgbW9zdDogUmVhY3QgTmF0aXZlIChwcmltYXJ5KSBhbmRcbiAgICAvLyBGYWJyaWMgKHNlY29uZGFyeSk7IFJlYWN0IERPTSAocHJpbWFyeSkgYW5kIFJlYWN0IEFSVCAoc2Vjb25kYXJ5KS5cbiAgICAvLyBTZWNvbmRhcnkgcmVuZGVyZXJzIHN0b3JlIHRoZWlyIGNvbnRleHQgdmFsdWVzIG9uIHNlcGFyYXRlIGZpZWxkcy5cbiAgICBfY3VycmVudFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgX2N1cnJlbnRWYWx1ZTI6IGRlZmF1bHRWYWx1ZSxcbiAgICAvLyBVc2VkIHRvIHRyYWNrIGhvdyBtYW55IGNvbmN1cnJlbnQgcmVuZGVyZXJzIHRoaXMgY29udGV4dCBjdXJyZW50bHlcbiAgICAvLyBzdXBwb3J0cyB3aXRoaW4gaW4gYSBzaW5nbGUgcmVuZGVyZXIuIFN1Y2ggYXMgcGFyYWxsZWwgc2VydmVyIHJlbmRlcmluZy5cbiAgICBfdGhyZWFkQ291bnQ6IDAsXG4gICAgLy8gVGhlc2UgYXJlIGNpcmN1bGFyXG4gICAgUHJvdmlkZXI6IG51bGwsXG4gICAgQ29uc3VtZXI6IG51bGxcbiAgfTtcbiAgY29udGV4dC5Qcm92aWRlciA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfUFJPVklERVJfVFlQRSxcbiAgICBfY29udGV4dDogY29udGV4dFxuICB9O1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lciA9IGZhbHNlO1xuXG4gIHtcbiAgICAvLyBBIHNlcGFyYXRlIG9iamVjdCwgYnV0IHByb3hpZXMgYmFjayB0byB0aGUgb3JpZ2luYWwgY29udGV4dCBvYmplY3QgZm9yXG4gICAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuIEl0IGhhcyBhIGRpZmZlcmVudCAkJHR5cGVvZiwgc28gd2UgY2FuIHByb3Blcmx5XG4gICAgLy8gd2FybiBmb3IgdGhlIGluY29ycmVjdCB1c2FnZSBvZiBDb250ZXh0IGFzIGEgQ29uc3VtZXIuXG4gICAgdmFyIENvbnN1bWVyID0ge1xuICAgICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICAgIF9jb250ZXh0OiBjb250ZXh0LFxuICAgICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjb250ZXh0Ll9jYWxjdWxhdGVDaGFuZ2VkQml0c1xuICAgIH07IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG5vdCBzZXR0aW5nIGEgdmFsdWUsIHdoaWNoIGlzIGludGVudGlvbmFsIGhlcmVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENvbnN1bWVyLCB7XG4gICAgICBQcm92aWRlcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IHRydWU7XG5cbiAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuUHJvdmlkZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuUHJvdmlkZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuUHJvdmlkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9Qcm92aWRlcikge1xuICAgICAgICAgIGNvbnRleHQuUHJvdmlkZXIgPSBfUHJvdmlkZXI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUgPSBfY3VycmVudFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZTI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUyKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlMiA9IF9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX3RocmVhZENvdW50OiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll90aHJlYWRDb3VudDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX3RocmVhZENvdW50KSB7XG4gICAgICAgICAgY29udGV4dC5fdGhyZWFkQ291bnQgPSBfdGhyZWFkQ291bnQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBDb25zdW1lcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IHRydWU7XG5cbiAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuQ29uc3VtZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuQ29uc3VtZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuQ29uc3VtZXI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkaXNwbGF5TmFtZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5kaXNwbGF5TmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoZGlzcGxheU5hbWUpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyKSB7XG4gICAgICAgICAgICB3YXJuKCdTZXR0aW5nIGBkaXNwbGF5TmFtZWAgb24gQ29udGV4dC5Db25zdW1lciBoYXMgbm8gZWZmZWN0LiAnICsgXCJZb3Ugc2hvdWxkIHNldCBpdCBkaXJlY3RseSBvbiB0aGUgY29udGV4dCB3aXRoIENvbnRleHQuZGlzcGxheU5hbWUgPSAnJXMnLlwiLCBkaXNwbGF5TmFtZSk7XG5cbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbWlzc2luZyBwcm9wZXJ0aWVzIGJlY2F1c2UgaXQgZG9lc24ndCB1bmRlcnN0YW5kIGRlZmluZVByb3BlcnR5XG5cbiAgICBjb250ZXh0LkNvbnN1bWVyID0gQ29uc3VtZXI7XG4gIH1cblxuICB7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyID0gbnVsbDtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIyID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG52YXIgVW5pbml0aWFsaXplZCA9IC0xO1xudmFyIFBlbmRpbmcgPSAwO1xudmFyIFJlc29sdmVkID0gMTtcbnZhciBSZWplY3RlZCA9IDI7XG5cbmZ1bmN0aW9uIGxhenlJbml0aWFsaXplcihwYXlsb2FkKSB7XG4gIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICB2YXIgY3RvciA9IHBheWxvYWQuX3Jlc3VsdDtcbiAgICB2YXIgdGhlbmFibGUgPSBjdG9yKCk7IC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG5cbiAgICB2YXIgcGVuZGluZyA9IHBheWxvYWQ7XG4gICAgcGVuZGluZy5fc3RhdHVzID0gUGVuZGluZztcbiAgICBwZW5kaW5nLl9yZXN1bHQgPSB0aGVuYWJsZTtcbiAgICB0aGVuYWJsZS50aGVuKGZ1bmN0aW9uIChtb2R1bGVPYmplY3QpIHtcbiAgICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFBlbmRpbmcpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRFeHBvcnQgPSBtb2R1bGVPYmplY3QuZGVmYXVsdDtcblxuICAgICAgICB7XG4gICAgICAgICAgaWYgKGRlZmF1bHRFeHBvcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZXJyb3IoJ2xhenk6IEV4cGVjdGVkIHRoZSByZXN1bHQgb2YgYSBkeW5hbWljIGltcG9ydCgpIGNhbGwuICcgKyAnSW5zdGVhZCByZWNlaXZlZDogJXNcXG5cXG5Zb3VyIGNvZGUgc2hvdWxkIGxvb2sgbGlrZTogXFxuICAnICsgLy8gQnJlYWsgdXAgaW1wb3J0cyB0byBhdm9pZCBhY2NpZGVudGFsbHkgcGFyc2luZyB0aGVtIGFzIGRlcGVuZGVuY2llcy5cbiAgICAgICAgICAgICdjb25zdCBNeUNvbXBvbmVudCA9IGxhenkoKCkgPT4gaW1wJyArIFwib3J0KCcuL015Q29tcG9uZW50JykpXCIsIG1vZHVsZU9iamVjdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG5cblxuICAgICAgICB2YXIgcmVzb2x2ZWQgPSBwYXlsb2FkO1xuICAgICAgICByZXNvbHZlZC5fc3RhdHVzID0gUmVzb2x2ZWQ7XG4gICAgICAgIHJlc29sdmVkLl9yZXN1bHQgPSBkZWZhdWx0RXhwb3J0O1xuICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUGVuZGluZykge1xuICAgICAgICAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuICAgICAgICB2YXIgcmVqZWN0ZWQgPSBwYXlsb2FkO1xuICAgICAgICByZWplY3RlZC5fc3RhdHVzID0gUmVqZWN0ZWQ7XG4gICAgICAgIHJlamVjdGVkLl9yZXN1bHQgPSBlcnJvcjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFJlc29sdmVkKSB7XG4gICAgcmV0dXJuIHBheWxvYWQuX3Jlc3VsdDtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBwYXlsb2FkLl9yZXN1bHQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gbGF6eShjdG9yKSB7XG4gIHZhciBwYXlsb2FkID0ge1xuICAgIC8vIFdlIHVzZSB0aGVzZSBmaWVsZHMgdG8gc3RvcmUgdGhlIHJlc3VsdC5cbiAgICBfc3RhdHVzOiAtMSxcbiAgICBfcmVzdWx0OiBjdG9yXG4gIH07XG4gIHZhciBsYXp5VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTEFaWV9UWVBFLFxuICAgIF9wYXlsb2FkOiBwYXlsb2FkLFxuICAgIF9pbml0OiBsYXp5SW5pdGlhbGl6ZXJcbiAgfTtcblxuICB7XG4gICAgLy8gSW4gcHJvZHVjdGlvbiwgdGhpcyB3b3VsZCBqdXN0IHNldCBpdCBvbiB0aGUgb2JqZWN0LlxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG4gICAgdmFyIHByb3BUeXBlczsgLy8gJEZsb3dGaXhNZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobGF6eVR5cGUsIHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBkZWZhdWx0UHJvcHM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld0RlZmF1bHRQcm9wcykge1xuICAgICAgICAgIGVycm9yKCdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBkZWZhdWx0UHJvcHNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG5cbiAgICAgICAgICBkZWZhdWx0UHJvcHMgPSBuZXdEZWZhdWx0UHJvcHM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuICAgICAgICAgIC8vICRGbG93Rml4TWVcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ2RlZmF1bHRQcm9wcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByb3BUeXBlczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBwcm9wVHlwZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld1Byb3BUeXBlcykge1xuICAgICAgICAgIGVycm9yKCdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBwcm9wVHlwZXNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG5cbiAgICAgICAgICBwcm9wVHlwZXMgPSBuZXdQcm9wVHlwZXM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuICAgICAgICAgIC8vICRGbG93Rml4TWVcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ3Byb3BUeXBlcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxhenlUeXBlO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkUmVmKHJlbmRlcikge1xuICB7XG4gICAgaWYgKHJlbmRlciAhPSBudWxsICYmIHJlbmRlci4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgJyArICdjb21wb25lbnQuIEluc3RlYWQgb2YgZm9yd2FyZFJlZihtZW1vKC4uLikpLCB1c2UgJyArICdtZW1vKGZvcndhcmRSZWYoLi4uKSkuJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLicsIHJlbmRlciA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVuZGVyLmxlbmd0aCAhPT0gMCAmJiByZW5kZXIubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgYWNjZXB0IGV4YWN0bHkgdHdvIHBhcmFtZXRlcnM6IHByb3BzIGFuZCByZWYuICVzJywgcmVuZGVyLmxlbmd0aCA9PT0gMSA/ICdEaWQgeW91IGZvcmdldCB0byB1c2UgdGhlIHJlZiBwYXJhbWV0ZXI/JyA6ICdBbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlciAhPSBudWxsKSB7XG4gICAgICBpZiAocmVuZGVyLmRlZmF1bHRQcm9wcyAhPSBudWxsIHx8IHJlbmRlci5wcm9wVHlwZXMgIT0gbnVsbCkge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IHByb3BUeXBlcyBvciBkZWZhdWx0UHJvcHMuICcgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyBhIFJlYWN0IGNvbXBvbmVudD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudFR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUsXG4gICAgcmVuZGVyOiByZW5kZXJcbiAgfTtcblxuICB7XG4gICAgdmFyIG93bk5hbWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnRUeXBlLCAnZGlzcGxheU5hbWUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb3duTmFtZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG93bk5hbWUgPSBuYW1lO1xuXG4gICAgICAgIGlmIChyZW5kZXIuZGlzcGxheU5hbWUgPT0gbnVsbCkge1xuICAgICAgICAgIHJlbmRlci5kaXNwbGF5TmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50VHlwZTtcbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQgfHwgdHlwZSA9PT0gZXhwb3J0cy5Qcm9maWxlciB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBleHBvcnRzLlN0cmljdE1vZGUgfHwgdHlwZSA9PT0gZXhwb3J0cy5TdXNwZW5zZSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbWVtbyh0eXBlLCBjb21wYXJlKSB7XG4gIHtcbiAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSkge1xuICAgICAgZXJyb3IoJ21lbW86IFRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgY29tcG9uZW50LiBJbnN0ZWFkICcgKyAncmVjZWl2ZWQ6ICVzJywgdHlwZSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiB0eXBlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudFR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX01FTU9fVFlQRSxcbiAgICB0eXBlOiB0eXBlLFxuICAgIGNvbXBhcmU6IGNvbXBhcmUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb21wYXJlXG4gIH07XG5cbiAge1xuICAgIHZhciBvd25OYW1lO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgJ2Rpc3BsYXlOYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBvd25OYW1lID0gbmFtZTtcblxuICAgICAgICBpZiAodHlwZS5kaXNwbGF5TmFtZSA9PSBudWxsKSB7XG4gICAgICAgICAgdHlwZS5kaXNwbGF5TmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50VHlwZTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZURpc3BhdGNoZXIoKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50O1xuXG4gIGlmICghKGRpc3BhdGNoZXIgIT09IG51bGwpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiSW52YWxpZCBob29rIGNhbGwuIEhvb2tzIGNhbiBvbmx5IGJlIGNhbGxlZCBpbnNpZGUgb2YgdGhlIGJvZHkgb2YgYSBmdW5jdGlvbiBjb21wb25lbnQuIFRoaXMgY291bGQgaGFwcGVuIGZvciBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOlxcbjEuIFlvdSBtaWdodCBoYXZlIG1pc21hdGNoaW5nIHZlcnNpb25zIG9mIFJlYWN0IGFuZCB0aGUgcmVuZGVyZXIgKHN1Y2ggYXMgUmVhY3QgRE9NKVxcbjIuIFlvdSBtaWdodCBiZSBicmVha2luZyB0aGUgUnVsZXMgb2YgSG9va3NcXG4zLiBZb3UgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGNvcHkgb2YgUmVhY3QgaW4gdGhlIHNhbWUgYXBwXFxuU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9pbnZhbGlkLWhvb2stY2FsbCBmb3IgdGlwcyBhYm91dCBob3cgdG8gZGVidWcgYW5kIGZpeCB0aGlzIHByb2JsZW0uXCIgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlzcGF0Y2hlcjtcbn1cblxuZnVuY3Rpb24gdXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuXG4gIHtcbiAgICBpZiAodW5zdGFibGVfb2JzZXJ2ZWRCaXRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yKCd1c2VDb250ZXh0KCkgc2Vjb25kIGFyZ3VtZW50IGlzIHJlc2VydmVkIGZvciBmdXR1cmUgJyArICd1c2UgaW4gUmVhY3QuIFBhc3NpbmcgaXQgaXMgbm90IHN1cHBvcnRlZC4gJyArICdZb3UgcGFzc2VkOiAlcy4lcycsIHVuc3RhYmxlX29ic2VydmVkQml0cywgdHlwZW9mIHVuc3RhYmxlX29ic2VydmVkQml0cyA9PT0gJ251bWJlcicgJiYgQXJyYXkuaXNBcnJheShhcmd1bWVudHNbMl0pID8gJ1xcblxcbkRpZCB5b3UgY2FsbCBhcnJheS5tYXAodXNlQ29udGV4dCk/ICcgKyAnQ2FsbGluZyBIb29rcyBpbnNpZGUgYSBsb29wIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnTGVhcm4gbW9yZSBhdCBodHRwczovL3JlYWN0anMub3JnL2xpbmsvcnVsZXMtb2YtaG9va3MnIDogJycpO1xuICAgIH0gLy8gVE9ETzogYWRkIGEgbW9yZSBnZW5lcmljIHdhcm5pbmcgZm9yIGludmFsaWQgdmFsdWVzLlxuXG5cbiAgICBpZiAoQ29udGV4dC5fY29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgcmVhbENvbnRleHQgPSBDb250ZXh0Ll9jb250ZXh0OyAvLyBEb24ndCBkZWR1cGxpY2F0ZSBiZWNhdXNlIHRoaXMgbGVnaXRpbWF0ZWx5IGNhdXNlcyBidWdzXG4gICAgICAvLyBhbmQgbm9ib2R5IHNob3VsZCBiZSB1c2luZyB0aGlzIGluIGV4aXN0aW5nIGNvZGUuXG5cbiAgICAgIGlmIChyZWFsQ29udGV4dC5Db25zdW1lciA9PT0gQ29udGV4dCkge1xuICAgICAgICBlcnJvcignQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuQ29uc3VtZXIpIGlzIG5vdCBzdXBwb3J0ZWQsIG1heSBjYXVzZSBidWdzLCBhbmQgd2lsbCBiZSAnICsgJ3JlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfSBlbHNlIGlmIChyZWFsQ29udGV4dC5Qcm92aWRlciA9PT0gQ29udGV4dCkge1xuICAgICAgICBlcnJvcignQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuUHJvdmlkZXIpIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKTtcbn1cbmZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG59XG5mdW5jdGlvbiB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpO1xufVxuZnVuY3Rpb24gdXNlUmVmKGluaXRpYWxWYWx1ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZihpbml0aWFsVmFsdWUpO1xufVxuZnVuY3Rpb24gdXNlRWZmZWN0KGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUVmZmVjdChjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VNZW1vKGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZU1lbW8oY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKSB7XG4gIHtcbiAgICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gICAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pO1xuICB9XG59XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTtcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgZXhwb3J0cy5TdXNwZW5zZTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBzZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIGlmIChSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKGVsZW1lbnRQcm9wcykge1xuICBpZiAoZWxlbWVudFByb3BzICE9PSBudWxsICYmIGVsZW1lbnRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKGVsZW1lbnRQcm9wcy5fX3NvdXJjZSk7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgaWYgKCFpbmZvKSB7XG4gICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbmZvO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICB9XG5cbiAge1xuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgfVxuICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gIGlmICghdmFsaWRUeXBlKSB7XG4gICAgdmFyIGluZm8gPSAnJztcblxuICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhwcm9wcyk7XG5cbiAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgIH1cblxuICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBlcnJvcignUmVhY3QuY3JlYXRlRWxlbWVudDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgaWYgKHZhbGlkVHlwZSkge1xuICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50KSB7XG4gICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG52YXIgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSBmYWxzZTtcbmZ1bmN0aW9uIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbih0eXBlKSB7XG4gIHZhciB2YWxpZGF0ZWRGYWN0b3J5ID0gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uLmJpbmQobnVsbCwgdHlwZSk7XG4gIHZhbGlkYXRlZEZhY3RvcnkudHlwZSA9IHR5cGU7XG5cbiAge1xuICAgIGlmICghZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkpIHtcbiAgICAgIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gdHJ1ZTtcblxuICAgICAgd2FybignUmVhY3QuY3JlYXRlRmFjdG9yeSgpIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIENvbnNpZGVyIHVzaW5nIEpTWCAnICsgJ29yIHVzZSBSZWFjdC5jcmVhdGVFbGVtZW50KCkgZGlyZWN0bHkgaW5zdGVhZC4nKTtcbiAgICB9IC8vIExlZ2FjeSBob29rOiByZW1vdmUgaXRcblxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbGlkYXRlZEZhY3RvcnksICd0eXBlJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2FybignRmFjdG9yeS50eXBlIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB0aGUgY2xhc3MgZGlyZWN0bHkgJyArICdiZWZvcmUgcGFzc2luZyBpdCB0byBjcmVhdGVGYWN0b3J5LicpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndHlwZScsIHtcbiAgICAgICAgICB2YWx1ZTogdHlwZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsaWRhdGVkRmFjdG9yeTtcbn1cbmZ1bmN0aW9uIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uKGVsZW1lbnQsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgbmV3RWxlbWVudCA9IGNsb25lRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCBuZXdFbGVtZW50LnR5cGUpO1xuICB9XG5cbiAgdmFsaWRhdGVQcm9wVHlwZXMobmV3RWxlbWVudCk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG57XG5cbiAgdHJ5IHtcbiAgICB2YXIgZnJvemVuT2JqZWN0ID0gT2JqZWN0LmZyZWV6ZSh7fSk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tbmV3ICovXG5cbiAgICBuZXcgTWFwKFtbZnJvemVuT2JqZWN0LCBudWxsXV0pO1xuICAgIG5ldyBTZXQoW2Zyb3plbk9iamVjdF0pO1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tbmV3ICovXG4gIH0gY2F0Y2ggKGUpIHtcbiAgfVxufVxuXG52YXIgY3JlYXRlRWxlbWVudCQxID0gIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XG52YXIgY2xvbmVFbGVtZW50JDEgPSAgY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNyZWF0ZUZhY3RvcnkgPSAgY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uIDtcbnZhciBDaGlsZHJlbiA9IHtcbiAgbWFwOiBtYXBDaGlsZHJlbixcbiAgZm9yRWFjaDogZm9yRWFjaENoaWxkcmVuLFxuICBjb3VudDogY291bnRDaGlsZHJlbixcbiAgdG9BcnJheTogdG9BcnJheSxcbiAgb25seTogb25seUNoaWxkXG59O1xuXG5leHBvcnRzLkNoaWxkcmVuID0gQ2hpbGRyZW47XG5leHBvcnRzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbmV4cG9ydHMuUHVyZUNvbXBvbmVudCA9IFB1cmVDb21wb25lbnQ7XG5leHBvcnRzLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEID0gUmVhY3RTaGFyZWRJbnRlcm5hbHM7XG5leHBvcnRzLmNsb25lRWxlbWVudCA9IGNsb25lRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDtcbmV4cG9ydHMuY3JlYXRlRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQkMTtcbmV4cG9ydHMuY3JlYXRlRmFjdG9yeSA9IGNyZWF0ZUZhY3Rvcnk7XG5leHBvcnRzLmNyZWF0ZVJlZiA9IGNyZWF0ZVJlZjtcbmV4cG9ydHMuZm9yd2FyZFJlZiA9IGZvcndhcmRSZWY7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50ID0gaXNWYWxpZEVsZW1lbnQ7XG5leHBvcnRzLmxhenkgPSBsYXp5O1xuZXhwb3J0cy5tZW1vID0gbWVtbztcbmV4cG9ydHMudXNlQ2FsbGJhY2sgPSB1c2VDYWxsYmFjaztcbmV4cG9ydHMudXNlQ29udGV4dCA9IHVzZUNvbnRleHQ7XG5leHBvcnRzLnVzZURlYnVnVmFsdWUgPSB1c2VEZWJ1Z1ZhbHVlO1xuZXhwb3J0cy51c2VFZmZlY3QgPSB1c2VFZmZlY3Q7XG5leHBvcnRzLnVzZUltcGVyYXRpdmVIYW5kbGUgPSB1c2VJbXBlcmF0aXZlSGFuZGxlO1xuZXhwb3J0cy51c2VMYXlvdXRFZmZlY3QgPSB1c2VMYXlvdXRFZmZlY3Q7XG5leHBvcnRzLnVzZU1lbW8gPSB1c2VNZW1vO1xuZXhwb3J0cy51c2VSZWR1Y2VyID0gdXNlUmVkdWNlcjtcbmV4cG9ydHMudXNlUmVmID0gdXNlUmVmO1xuZXhwb3J0cy51c2VTdGF0ZSA9IHVzZVN0YXRlO1xuZXhwb3J0cy52ZXJzaW9uID0gUmVhY3RWZXJzaW9uO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIGRlZmluZShHcCwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gIGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvbik7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIGluIG1vZGVybiBlbmdpbmVzXG4gIC8vIHdlIGNhbiBleHBsaWNpdGx5IGFjY2VzcyBnbG9iYWxUaGlzLiBJbiBvbGRlciBlbmdpbmVzIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIGNyZWF0ZUVsZW1lbnQsIHVzZVJlZiwgdXNlQ2FsbGJhY2ssIHVzZURlYnVnVmFsdWUgfSBmcm9tICdyZWFjdCc7XG5cbi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG5mdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxuXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHsgfTtcbi8vIFVzaW5nIG5vb3AoKSBhcyB0aGUgdW5kZWZpbmVkIHZhbHVlIGFzIHVuZGVmaW5lZCBjYW4gcG9zc2libHkgYmUgcmVwbGFjZWRcbi8vIGJ5IHNvbWV0aGluZyBlbHNlLiAgUHJldHRpZXIgaWdub3JlIGFuZCBleHRyYSBwYXJlbnRoZXNlcyBhcmUgbmVjZXNzYXJ5IGhlcmVcbi8vIHRvIGVuc3VyZSB0aGF0IHRzYyBkb2Vzbid0IHJlbW92ZSB0aGUgX19OT0lOTElORV9fIGNvbW1lbnQuXG4vLyBwcmV0dGllci1pZ25vcmVcbnZhciBVTkRFRklORUQgPSAoIC8qI19fTk9JTkxJTkVfXyovbm9vcCgpKTtcbnZhciBPQkpFQ1QgPSBPYmplY3Q7XG52YXIgaXNVbmRlZmluZWQgPSBmdW5jdGlvbiAodikgeyByZXR1cm4gdiA9PT0gVU5ERUZJTkVEOyB9O1xudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gdHlwZW9mIHYgPT0gJ2Z1bmN0aW9uJzsgfTtcbnZhciBtZXJnZU9iamVjdHMgPSBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gT0JKRUNULmFzc2lnbih7fSwgYSwgYik7IH07XG52YXIgU1RSX1VOREVGSU5FRCA9ICd1bmRlZmluZWQnO1xuLy8gTk9URTogVXNlIGZ1bmN0aW9uIHRvIGd1YXJhbnRlZSBpdCdzIHJlLWV2YWx1YXRlZCBiZXR3ZWVuIGpzZG9tIGFuZCBub2RlIHJ1bnRpbWUgZm9yIHRlc3RzLlxudmFyIGhhc1dpbmRvdyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT0gU1RSX1VOREVGSU5FRDsgfTtcbnZhciBoYXNEb2N1bWVudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHR5cGVvZiBkb2N1bWVudCAhPSBTVFJfVU5ERUZJTkVEOyB9O1xudmFyIGhhc1JlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gaGFzV2luZG93KCkgJiYgdHlwZW9mIHdpbmRvd1sncmVxdWVzdEFuaW1hdGlvbkZyYW1lJ10gIT0gU1RSX1VOREVGSU5FRDtcbn07XG5cbi8vIHVzZSBXZWFrTWFwIHRvIHN0b3JlIHRoZSBvYmplY3QtPmtleSBtYXBwaW5nXG4vLyBzbyB0aGUgb2JqZWN0cyBjYW4gYmUgZ2FyYmFnZSBjb2xsZWN0ZWQuXG4vLyBXZWFrTWFwIHVzZXMgYSBoYXNodGFibGUgdW5kZXIgdGhlIGhvb2QsIHNvIHRoZSBsb29rdXBcbi8vIGNvbXBsZXhpdHkgaXMgYWxtb3N0IE8oMSkuXG52YXIgdGFibGUgPSBuZXcgV2Vha01hcCgpO1xuLy8gY291bnRlciBvZiB0aGUga2V5XG52YXIgY291bnRlciA9IDA7XG4vLyBBIHN0YWJsZSBoYXNoIGltcGxlbWVudGF0aW9uIHRoYXQgc3VwcG9ydHM6XG4vLyAtIEZhc3QgYW5kIGVuc3VyZXMgdW5pcXVlIGhhc2ggcHJvcGVydGllc1xuLy8gLSBIYW5kbGVzIHVuc2VyaWFsaXphYmxlIHZhbHVlc1xuLy8gLSBIYW5kbGVzIG9iamVjdCBrZXkgb3JkZXJpbmdcbi8vIC0gR2VuZXJhdGVzIHNob3J0IHJlc3VsdHNcbi8vXG4vLyBUaGlzIGlzIG5vdCBhIHNlcmlhbGl6YXRpb24gZnVuY3Rpb24sIGFuZCB0aGUgcmVzdWx0IGlzIG5vdCBndWFyYW50ZWVkIHRvIGJlXG4vLyBwYXJzaWJsZS5cbnZhciBzdGFibGVIYXNoID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHZhciB0eXBlID0gdHlwZW9mIGFyZztcbiAgICB2YXIgY29uc3RydWN0b3IgPSBhcmcgJiYgYXJnLmNvbnN0cnVjdG9yO1xuICAgIHZhciBpc0RhdGUgPSBjb25zdHJ1Y3RvciA9PSBEYXRlO1xuICAgIHZhciByZXN1bHQ7XG4gICAgdmFyIGluZGV4O1xuICAgIGlmIChPQkpFQ1QoYXJnKSA9PT0gYXJnICYmICFpc0RhdGUgJiYgY29uc3RydWN0b3IgIT0gUmVnRXhwKSB7XG4gICAgICAgIC8vIE9iamVjdC9mdW5jdGlvbiwgbm90IG51bGwvZGF0ZS9yZWdleHAuIFVzZSBXZWFrTWFwIHRvIHN0b3JlIHRoZSBpZCBmaXJzdC5cbiAgICAgICAgLy8gSWYgaXQncyBhbHJlYWR5IGhhc2hlZCwgZGlyZWN0bHkgcmV0dXJuIHRoZSByZXN1bHQuXG4gICAgICAgIHJlc3VsdCA9IHRhYmxlLmdldChhcmcpO1xuICAgICAgICBpZiAocmVzdWx0KVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgLy8gU3RvcmUgdGhlIGhhc2ggZmlyc3QgZm9yIGNpcmN1bGFyIHJlZmVyZW5jZSBkZXRlY3Rpb24gYmVmb3JlIGVudGVyaW5nIHRoZVxuICAgICAgICAvLyByZWN1cnNpdmUgYHN0YWJsZUhhc2hgIGNhbGxzLlxuICAgICAgICAvLyBGb3Igb3RoZXIgb2JqZWN0cyBsaWtlIHNldCBhbmQgbWFwLCB3ZSB1c2UgdGhpcyBpZCBkaXJlY3RseSBhcyB0aGUgaGFzaC5cbiAgICAgICAgcmVzdWx0ID0gKytjb3VudGVyICsgJ34nO1xuICAgICAgICB0YWJsZS5zZXQoYXJnLCByZXN1bHQpO1xuICAgICAgICBpZiAoY29uc3RydWN0b3IgPT0gQXJyYXkpIHtcbiAgICAgICAgICAgIC8vIEFycmF5LlxuICAgICAgICAgICAgcmVzdWx0ID0gJ0AnO1xuICAgICAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgYXJnLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBzdGFibGVIYXNoKGFyZ1tpbmRleF0pICsgJywnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFibGUuc2V0KGFyZywgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uc3RydWN0b3IgPT0gT0JKRUNUKSB7XG4gICAgICAgICAgICAvLyBPYmplY3QsIHNvcnQga2V5cy5cbiAgICAgICAgICAgIHJlc3VsdCA9ICcjJztcbiAgICAgICAgICAgIHZhciBrZXlzID0gT0JKRUNULmtleXMoYXJnKS5zb3J0KCk7XG4gICAgICAgICAgICB3aGlsZSAoIWlzVW5kZWZpbmVkKChpbmRleCA9IGtleXMucG9wKCkpKSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQoYXJnW2luZGV4XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IGluZGV4ICsgJzonICsgc3RhYmxlSGFzaChhcmdbaW5kZXhdKSArICcsJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YWJsZS5zZXQoYXJnLCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBpc0RhdGVcbiAgICAgICAgICAgID8gYXJnLnRvSlNPTigpXG4gICAgICAgICAgICA6IHR5cGUgPT0gJ3N5bWJvbCdcbiAgICAgICAgICAgICAgICA/IGFyZy50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgOiB0eXBlID09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgID8gSlNPTi5zdHJpbmdpZnkoYXJnKVxuICAgICAgICAgICAgICAgICAgICA6ICcnICsgYXJnO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBEdWUgdG8gYnVnIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTY3ODA3NSxcbiAqIGl0J3Mgbm90IHJlbGlhYmxlIHRvIGRldGVjdCBpZiB0aGUgYnJvd3NlciBpcyBjdXJyZW50bHkgb25saW5lIG9yIG9mZmxpbmVcbiAqIGJhc2VkIG9uIGBuYXZpZ2F0b3Iub25MaW5lYC5cbiAqIEFzIGEgd29yayBhcm91bmQsIHdlIGFsd2F5cyBhc3N1bWUgaXQncyBvbmxpbmUgb24gZmlyc3QgbG9hZCwgYW5kIGNoYW5nZVxuICogdGhlIHN0YXR1cyB1cG9uIGBvbmxpbmVgIG9yIGBvZmZsaW5lYCBldmVudHMuXG4gKi9cbnZhciBvbmxpbmUgPSB0cnVlO1xudmFyIGlzT25saW5lID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gb25saW5lOyB9O1xudmFyIGhhc1dpbiA9IGhhc1dpbmRvdygpO1xudmFyIGhhc0RvYyA9IGhhc0RvY3VtZW50KCk7XG4vLyBGb3Igbm9kZSBhbmQgUmVhY3QgTmF0aXZlLCBgYWRkL3JlbW92ZUV2ZW50TGlzdGVuZXJgIGRvZXNuJ3QgZXhpc3Qgb24gd2luZG93LlxudmFyIG9uV2luZG93RXZlbnQgPSBoYXNXaW4gJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXJcbiAgICA/IHdpbmRvdy5hZGRFdmVudExpc3RlbmVyLmJpbmQod2luZG93KVxuICAgIDogbm9vcDtcbnZhciBvbkRvY3VtZW50RXZlbnQgPSBoYXNEb2MgPyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyLmJpbmQoZG9jdW1lbnQpIDogbm9vcDtcbnZhciBvZmZXaW5kb3dFdmVudCA9IGhhc1dpbiAmJiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lclxuICAgID8gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIuYmluZCh3aW5kb3cpXG4gICAgOiBub29wO1xudmFyIG9mZkRvY3VtZW50RXZlbnQgPSBoYXNEb2NcbiAgICA/IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIuYmluZChkb2N1bWVudClcbiAgICA6IG5vb3A7XG52YXIgaXNWaXNpYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB2aXNpYmlsaXR5U3RhdGUgPSBoYXNEb2MgJiYgZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlO1xuICAgIHJldHVybiBpc1VuZGVmaW5lZCh2aXNpYmlsaXR5U3RhdGUpIHx8IHZpc2liaWxpdHlTdGF0ZSAhPT0gJ2hpZGRlbic7XG59O1xudmFyIGluaXRGb2N1cyA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIC8vIGZvY3VzIHJldmFsaWRhdGVcbiAgICBvbkRvY3VtZW50RXZlbnQoJ3Zpc2liaWxpdHljaGFuZ2UnLCBjYWxsYmFjayk7XG4gICAgb25XaW5kb3dFdmVudCgnZm9jdXMnLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb2ZmRG9jdW1lbnRFdmVudCgndmlzaWJpbGl0eWNoYW5nZScsIGNhbGxiYWNrKTtcbiAgICAgICAgb2ZmV2luZG93RXZlbnQoJ2ZvY3VzJywgY2FsbGJhY2spO1xuICAgIH07XG59O1xudmFyIGluaXRSZWNvbm5lY3QgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAvLyByZXZhbGlkYXRlIG9uIHJlY29ubmVjdGVkXG4gICAgdmFyIG9uT25saW5lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBvbmxpbmUgPSB0cnVlO1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgIH07XG4gICAgLy8gbm90aGluZyB0byByZXZhbGlkYXRlLCBqdXN0IHVwZGF0ZSB0aGUgc3RhdHVzXG4gICAgdmFyIG9uT2ZmbGluZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb25saW5lID0gZmFsc2U7XG4gICAgfTtcbiAgICBvbldpbmRvd0V2ZW50KCdvbmxpbmUnLCBvbk9ubGluZSk7XG4gICAgb25XaW5kb3dFdmVudCgnb2ZmbGluZScsIG9uT2ZmbGluZSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb2ZmV2luZG93RXZlbnQoJ29ubGluZScsIG9uT25saW5lKTtcbiAgICAgICAgb2ZmV2luZG93RXZlbnQoJ29mZmxpbmUnLCBvbk9mZmxpbmUpO1xuICAgIH07XG59O1xudmFyIHByZXNldCA9IHtcbiAgICBpc09ubGluZTogaXNPbmxpbmUsXG4gICAgaXNWaXNpYmxlOiBpc1Zpc2libGVcbn07XG52YXIgZGVmYXVsdENvbmZpZ09wdGlvbnMgPSB7XG4gICAgaW5pdEZvY3VzOiBpbml0Rm9jdXMsXG4gICAgaW5pdFJlY29ubmVjdDogaW5pdFJlY29ubmVjdFxufTtcblxudmFyIElTX1NFUlZFUiA9ICFoYXNXaW5kb3coKSB8fCAnRGVubycgaW4gd2luZG93O1xuLy8gUG9seWZpbGwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG52YXIgckFGID0gZnVuY3Rpb24gKGYpIHtcbiAgICByZXR1cm4gaGFzUmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkgPyB3aW5kb3dbJ3JlcXVlc3RBbmltYXRpb25GcmFtZSddKGYpIDogc2V0VGltZW91dChmLCAxKTtcbn07XG4vLyBSZWFjdCBjdXJyZW50bHkgdGhyb3dzIGEgd2FybmluZyB3aGVuIHVzaW5nIHVzZUxheW91dEVmZmVjdCBvbiB0aGUgc2VydmVyLlxuLy8gVG8gZ2V0IGFyb3VuZCBpdCwgd2UgY2FuIGNvbmRpdGlvbmFsbHkgdXNlRWZmZWN0IG9uIHRoZSBzZXJ2ZXIgKG5vLW9wKSBhbmRcbi8vIHVzZUxheW91dEVmZmVjdCBpbiB0aGUgYnJvd3Nlci5cbnZhciB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0ID0gSVNfU0VSVkVSID8gdXNlRWZmZWN0IDogdXNlTGF5b3V0RWZmZWN0O1xuLy8gVGhpcyBhc3NpZ25tZW50IGlzIHRvIGV4dGVuZCB0aGUgTmF2aWdhdG9yIHR5cGUgdG8gdXNlIGVmZmVjdGl2ZVR5cGUuXG52YXIgbmF2aWdhdG9yQ29ubmVjdGlvbiA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmXG4gICAgbmF2aWdhdG9yLmNvbm5lY3Rpb247XG4vLyBBZGp1c3QgdGhlIGNvbmZpZyBiYXNlZCBvbiBzbG93IGNvbm5lY3Rpb24gc3RhdHVzICg8PSA3MEticHMpLlxudmFyIHNsb3dDb25uZWN0aW9uID0gIUlTX1NFUlZFUiAmJlxuICAgIG5hdmlnYXRvckNvbm5lY3Rpb24gJiZcbiAgICAoWydzbG93LTJnJywgJzJnJ10uaW5jbHVkZXMobmF2aWdhdG9yQ29ubmVjdGlvbi5lZmZlY3RpdmVUeXBlKSB8fFxuICAgICAgICBuYXZpZ2F0b3JDb25uZWN0aW9uLnNhdmVEYXRhKTtcblxudmFyIHNlcmlhbGl6ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoaXNGdW5jdGlvbihrZXkpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBrZXkgPSBrZXkoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAvLyBkZXBlbmRlbmNpZXMgbm90IHJlYWR5XG4gICAgICAgICAgICBrZXkgPSAnJztcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgYXJncyA9IFtdLmNvbmNhdChrZXkpO1xuICAgIC8vIElmIGtleSBpcyBub3QgZmFsc3ksIG9yIG5vdCBhbiBlbXB0eSBhcnJheSwgaGFzaCBpdC5cbiAgICBrZXkgPVxuICAgICAgICB0eXBlb2Yga2V5ID09ICdzdHJpbmcnXG4gICAgICAgICAgICA/IGtleVxuICAgICAgICAgICAgOiAoQXJyYXkuaXNBcnJheShrZXkpID8ga2V5Lmxlbmd0aCA6IGtleSlcbiAgICAgICAgICAgICAgICA/IHN0YWJsZUhhc2goa2V5KVxuICAgICAgICAgICAgICAgIDogJyc7XG4gICAgdmFyIGluZm9LZXkgPSBrZXkgPyAnJHN3ciQnICsga2V5IDogJyc7XG4gICAgcmV0dXJuIFtrZXksIGFyZ3MsIGluZm9LZXldO1xufTtcblxuLy8gR2xvYmFsIHN0YXRlIHVzZWQgdG8gZGVkdXBsaWNhdGUgcmVxdWVzdHMgYW5kIHN0b3JlIGxpc3RlbmVyc1xudmFyIFNXUkdsb2JhbFN0YXRlID0gbmV3IFdlYWtNYXAoKTtcblxudmFyIEZPQ1VTX0VWRU5UID0gMDtcbnZhciBSRUNPTk5FQ1RfRVZFTlQgPSAxO1xudmFyIE1VVEFURV9FVkVOVCA9IDI7XG5cbnZhciBicm9hZGNhc3RTdGF0ZSA9IGZ1bmN0aW9uIChjYWNoZSwga2V5LCBkYXRhLCBlcnJvciwgaXNWYWxpZGF0aW5nLCByZXZhbGlkYXRlLCBicm9hZGNhc3QpIHtcbiAgICBpZiAoYnJvYWRjYXN0ID09PSB2b2lkIDApIHsgYnJvYWRjYXN0ID0gdHJ1ZTsgfVxuICAgIHZhciBfYSA9IFNXUkdsb2JhbFN0YXRlLmdldChjYWNoZSksIEVWRU5UX1JFVkFMSURBVE9SUyA9IF9hWzBdLCBTVEFURV9VUERBVEVSUyA9IF9hWzFdLCBGRVRDSCA9IF9hWzNdO1xuICAgIHZhciByZXZhbGlkYXRvcnMgPSBFVkVOVF9SRVZBTElEQVRPUlNba2V5XTtcbiAgICB2YXIgdXBkYXRlcnMgPSBTVEFURV9VUERBVEVSU1trZXldO1xuICAgIC8vIENhY2hlIHdhcyBwb3B1bGF0ZWQsIHVwZGF0ZSBzdGF0ZXMgb2YgYWxsIGhvb2tzLlxuICAgIGlmIChicm9hZGNhc3QgJiYgdXBkYXRlcnMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB1cGRhdGVycy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdXBkYXRlcnNbaV0oZGF0YSwgZXJyb3IsIGlzVmFsaWRhdGluZyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSWYgd2UgYWxzbyBuZWVkIHRvIHJldmFsaWRhdGUsIG9ubHkgZG8gaXQgZm9yIHRoZSBmaXJzdCBob29rLlxuICAgIGlmIChyZXZhbGlkYXRlKSB7XG4gICAgICAgIC8vIEludmFsaWRhdGUgdGhlIGtleSBieSBkZWxldGluZyB0aGUgY29uY3VycmVudCByZXF1ZXN0IG1hcmtlcnMgc28gbmV3XG4gICAgICAgIC8vIHJlcXVlc3RzIHdpbGwgbm90IGJlIGRlZHVwZWQuXG4gICAgICAgIGRlbGV0ZSBGRVRDSFtrZXldO1xuICAgICAgICBpZiAocmV2YWxpZGF0b3JzICYmIHJldmFsaWRhdG9yc1swXSkge1xuICAgICAgICAgICAgcmV0dXJuIHJldmFsaWRhdG9yc1swXShNVVRBVEVfRVZFTlQpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbn07XG5cbi8vIEdsb2JhbCB0aW1lc3RhbXAuXG52YXIgX190aW1lc3RhbXAgPSAwO1xudmFyIGdldFRpbWVzdGFtcCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICsrX190aW1lc3RhbXA7IH07XG5cbnZhciBpbnRlcm5hbE11dGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjYWNoZSwgX2tleSwgX2RhdGEsIF9vcHRzLCBvcHRpb25zLCBwb3B1bGF0ZUNhY2hlLCByZXZhbGlkYXRlLCByb2xsYmFja09uRXJyb3IsIG9wdGltaXN0aWNEYXRhLCBfYSwga2V5LCBrZXlJbmZvLCBfYiwgTVVUQVRJT04sIGRhdGEsIGVycm9yLCBiZWZvcmVNdXRhdGlvblRzLCBoYXNPcHRpbWlzdGljRGF0YSwgcm9sbGJhY2tEYXRhLCByZXM7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGNhY2hlID0gYXJnc1swXSwgX2tleSA9IGFyZ3NbMV0sIF9kYXRhID0gYXJnc1syXSwgX29wdHMgPSBhcmdzWzNdO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0gdHlwZW9mIF9vcHRzID09PSAnYm9vbGVhbicgPyB7IHJldmFsaWRhdGU6IF9vcHRzIH0gOiBfb3B0cyB8fCB7fTtcbiAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGVDYWNoZSA9IG9wdGlvbnMucG9wdWxhdGVDYWNoZSAhPT0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldmFsaWRhdGUgPSBvcHRpb25zLnJldmFsaWRhdGUgIT09IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByb2xsYmFja09uRXJyb3IgPSBvcHRpb25zLnJvbGxiYWNrT25FcnJvciAhPT0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIG9wdGltaXN0aWNEYXRhID0gb3B0aW9ucy5vcHRpbWlzdGljRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgX2EgPSBzZXJpYWxpemUoX2tleSksIGtleSA9IF9hWzBdLCBrZXlJbmZvID0gX2FbMl07XG4gICAgICAgICAgICAgICAgICAgIGlmICgha2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICBfYiA9IFNXUkdsb2JhbFN0YXRlLmdldChjYWNoZSksIE1VVEFUSU9OID0gX2JbMl07XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIG5ldyBkYXRhIHByb3ZpZGVkLCByZXZhbGlkYXRlIHRoZSBrZXkgd2l0aCBjdXJyZW50IHN0YXRlLlxuICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXZhbGlkYXRlIGFuZCBicm9hZGNhc3Qgc3RhdGUuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgYnJvYWRjYXN0U3RhdGUoY2FjaGUsIGtleSwgY2FjaGUuZ2V0KGtleSksIFVOREVGSU5FRCwgVU5ERUZJTkVELCByZXZhbGlkYXRlLCBwb3B1bGF0ZUNhY2hlKV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IF9kYXRhO1xuICAgICAgICAgICAgICAgICAgICBiZWZvcmVNdXRhdGlvblRzID0gZ2V0VGltZXN0YW1wKCk7XG4gICAgICAgICAgICAgICAgICAgIE1VVEFUSU9OW2tleV0gPSBbYmVmb3JlTXV0YXRpb25UcywgMF07XG4gICAgICAgICAgICAgICAgICAgIGhhc09wdGltaXN0aWNEYXRhID0gIWlzVW5kZWZpbmVkKG9wdGltaXN0aWNEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgcm9sbGJhY2tEYXRhID0gY2FjaGUuZ2V0KGtleSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIERvIG9wdGltaXN0aWMgZGF0YSB1cGRhdGUuXG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXNPcHRpbWlzdGljRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGUuc2V0KGtleSwgb3B0aW1pc3RpY0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJvYWRjYXN0U3RhdGUoY2FjaGUsIGtleSwgb3B0aW1pc3RpY0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBgZGF0YWAgaXMgYSBmdW5jdGlvbiwgY2FsbCBpdCBwYXNzaW5nIGN1cnJlbnQgY2FjaGUgdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBkYXRhKGNhY2hlLmdldChrZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCB0aHJvd3MgYW4gZXJyb3Igc3luY2hyb25vdXNseSwgd2Ugc2hvdWxkbid0IHVwZGF0ZSB0aGUgY2FjaGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoZGF0YSAmJiBpc0Z1bmN0aW9uKGRhdGEudGhlbikpKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZGF0YS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgb3RoZXIgbXV0YXRpb25zIGhhdmUgb2NjdXJyZWQgc2luY2Ugd2UndmUgc3RhcnRlZCB0aGlzIG11dGF0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhIHJhY2Ugd2UgZG9uJ3QgdXBkYXRlIGNhY2hlIG9yIGJyb2FkY2FzdCB0aGUgY2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ganVzdCByZXR1cm4gdGhlIGRhdGEuXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIG1lYW5zIHRoYXQgdGhlIG11dGF0aW9uIGlzIGFzeW5jLCB3ZSBuZWVkIHRvIGNoZWNrIHRpbWVzdGFtcHMgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gYXZvaWQgcmFjZSBjb25kaXRpb25zLlxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBvdGhlciBtdXRhdGlvbnMgaGF2ZSBvY2N1cnJlZCBzaW5jZSB3ZSd2ZSBzdGFydGVkIHRoaXMgbXV0YXRpb24uXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSByYWNlIHdlIGRvbid0IHVwZGF0ZSBjYWNoZSBvciBicm9hZGNhc3QgdGhlIGNoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgLy8ganVzdCByZXR1cm4gdGhlIGRhdGEuXG4gICAgICAgICAgICAgICAgICAgIGlmIChiZWZvcmVNdXRhdGlvblRzICE9PSBNVVRBVElPTltrZXldWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZGF0YV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZXJyb3IgJiYgaGFzT3B0aW1pc3RpY0RhdGEgJiYgcm9sbGJhY2tPbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSb2xsYmFjay4gQWx3YXlzIHBvcHVsYXRlIHRoZSBjYWNoZSBpbiB0aGlzIGNhc2UuXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZUNhY2hlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSByb2xsYmFja0RhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZS5zZXQoa2V5LCByb2xsYmFja0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3B1bGF0ZUNhY2hlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT25seSB1cGRhdGUgY2FjaGVkIGRhdGEgaWYgdGhlcmUncyBubyBlcnJvci4gRGF0YSBjYW4gYmUgYHVuZGVmaW5lZGAgaGVyZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZS5zZXQoa2V5LCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFsd2F5cyB1cGRhdGUgb3IgcmVzZXQgdGhlIGVycm9yLlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGUuc2V0KGtleUluZm8sIG1lcmdlT2JqZWN0cyhjYWNoZS5nZXQoa2V5SW5mbyksIHsgZXJyb3I6IGVycm9yIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBSZXNldCB0aGUgdGltZXN0YW1wIHRvIG1hcmsgdGhlIG11dGF0aW9uIGhhcyBlbmRlZC5cbiAgICAgICAgICAgICAgICAgICAgTVVUQVRJT05ba2V5XVsxXSA9IGdldFRpbWVzdGFtcCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBicm9hZGNhc3RTdGF0ZShjYWNoZSwga2V5LCBkYXRhLCBlcnJvciwgVU5ERUZJTkVELCByZXZhbGlkYXRlLCBwb3B1bGF0ZUNhY2hlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhyb3cgZXJyb3Igb3IgcmV0dXJuIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhyb3cgZXJyb3Igb3IgcmV0dXJuIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBwb3B1bGF0ZUNhY2hlID8gcmVzIDogZGF0YV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxudmFyIHJldmFsaWRhdGVBbGxLZXlzID0gZnVuY3Rpb24gKHJldmFsaWRhdG9ycywgdHlwZSkge1xuICAgIGZvciAodmFyIGtleSBpbiByZXZhbGlkYXRvcnMpIHtcbiAgICAgICAgaWYgKHJldmFsaWRhdG9yc1trZXldWzBdKVxuICAgICAgICAgICAgcmV2YWxpZGF0b3JzW2tleV1bMF0odHlwZSk7XG4gICAgfVxufTtcbnZhciBpbml0Q2FjaGUgPSBmdW5jdGlvbiAocHJvdmlkZXIsIG9wdGlvbnMpIHtcbiAgICAvLyBUaGUgZ2xvYmFsIHN0YXRlIGZvciBhIHNwZWNpZmljIHByb3ZpZGVyIHdpbGwgYmUgdXNlZCB0byBkZWR1cGxpY2F0ZVxuICAgIC8vIHJlcXVlc3RzIGFuZCBzdG9yZSBsaXN0ZW5lcnMuIEFzIHdlbGwgYXMgYSBtdXRhdGUgZnVuY3Rpb24gdGhhdCBib3VuZCB0b1xuICAgIC8vIHRoZSBjYWNoZS5cbiAgICAvLyBQcm92aWRlcidzIGdsb2JhbCBzdGF0ZSBtaWdodCBiZSBhbHJlYWR5IGluaXRpYWxpemVkLiBMZXQncyB0cnkgdG8gZ2V0IHRoZVxuICAgIC8vIGdsb2JhbCBzdGF0ZSBhc3NvY2lhdGVkIHdpdGggdGhlIHByb3ZpZGVyIGZpcnN0LlxuICAgIGlmICghU1dSR2xvYmFsU3RhdGUuaGFzKHByb3ZpZGVyKSkge1xuICAgICAgICB2YXIgb3B0cyA9IG1lcmdlT2JqZWN0cyhkZWZhdWx0Q29uZmlnT3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZ2xvYmFsIHN0YXRlIGJvdW5kIHRvIHRoZSBwcm92aWRlciwgY3JlYXRlIGEgbmV3IG9uZSB3aXRoIHRoZVxuICAgICAgICAvLyBuZXcgbXV0YXRlIGZ1bmN0aW9uLlxuICAgICAgICB2YXIgRVZFTlRfUkVWQUxJREFUT1JTID0ge307XG4gICAgICAgIHZhciBtdXRhdGUgPSBpbnRlcm5hbE11dGF0ZS5iaW5kKFVOREVGSU5FRCwgcHJvdmlkZXIpO1xuICAgICAgICB2YXIgdW5tb3VudCA9IG5vb3A7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgc3RhdGUgaWYgaXQncyBuZXcsIG9yIHRoZSBwcm92aWRlciBoYXMgYmVlbiBleHRlbmRlZC5cbiAgICAgICAgU1dSR2xvYmFsU3RhdGUuc2V0KHByb3ZpZGVyLCBbRVZFTlRfUkVWQUxJREFUT1JTLCB7fSwge30sIHt9LCBtdXRhdGVdKTtcbiAgICAgICAgLy8gVGhpcyBpcyBhIG5ldyBwcm92aWRlciwgd2UgbmVlZCB0byBpbml0aWFsaXplIGl0IGFuZCBzZXR1cCBET00gZXZlbnRzXG4gICAgICAgIC8vIGxpc3RlbmVycyBmb3IgYGZvY3VzYCBhbmQgYHJlY29ubmVjdGAgYWN0aW9ucy5cbiAgICAgICAgaWYgKCFJU19TRVJWRVIpIHtcbiAgICAgICAgICAgIC8vIFdoZW4gbGlzdGVuaW5nIHRvIHRoZSBuYXRpdmUgZXZlbnRzIGZvciBhdXRvIHJldmFsaWRhdGlvbnMsXG4gICAgICAgICAgICAvLyB3ZSBpbnRlbnRpb25hbGx5IHB1dCBhIGRlbGF5IChzZXRUaW1lb3V0KSBoZXJlIHRvIG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgICAgICAgICAgLy8gZmlyZWQgYWZ0ZXIgaW1tZWRpYXRlIEphdmFTY3JpcHQgZXhlY3V0aW9ucywgd2hpY2ggY2FuIHBvc3NpYmx5IGJlXG4gICAgICAgICAgICAvLyBSZWFjdCdzIHN0YXRlIHVwZGF0ZXMuXG4gICAgICAgICAgICAvLyBUaGlzIGF2b2lkcyBzb21lIHVubmVjZXNzYXJ5IHJldmFsaWRhdGlvbnMgc3VjaCBhc1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9zd3IvaXNzdWVzLzE2ODAuXG4gICAgICAgICAgICB2YXIgcmVsZWFzZUZvY3VzXzEgPSBvcHRzLmluaXRGb2N1cyhzZXRUaW1lb3V0LmJpbmQoVU5ERUZJTkVELCByZXZhbGlkYXRlQWxsS2V5cy5iaW5kKFVOREVGSU5FRCwgRVZFTlRfUkVWQUxJREFUT1JTLCBGT0NVU19FVkVOVCkpKTtcbiAgICAgICAgICAgIHZhciByZWxlYXNlUmVjb25uZWN0XzEgPSBvcHRzLmluaXRSZWNvbm5lY3Qoc2V0VGltZW91dC5iaW5kKFVOREVGSU5FRCwgcmV2YWxpZGF0ZUFsbEtleXMuYmluZChVTkRFRklORUQsIEVWRU5UX1JFVkFMSURBVE9SUywgUkVDT05ORUNUX0VWRU5UKSkpO1xuICAgICAgICAgICAgdW5tb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZWxlYXNlRm9jdXNfMSAmJiByZWxlYXNlRm9jdXNfMSgpO1xuICAgICAgICAgICAgICAgIHJlbGVhc2VSZWNvbm5lY3RfMSAmJiByZWxlYXNlUmVjb25uZWN0XzEoKTtcbiAgICAgICAgICAgICAgICAvLyBXaGVuIHVuLW1vdW50aW5nLCB3ZSBuZWVkIHRvIHJlbW92ZSB0aGUgY2FjaGUgcHJvdmlkZXIgZnJvbSB0aGUgc3RhdGVcbiAgICAgICAgICAgICAgICAvLyBzdG9yYWdlIHRvbyBiZWNhdXNlIGl0J3MgYSBzaWRlLWVmZmVjdC4gT3RoZXJ3aXNlIHdoZW4gcmUtbW91bnRpbmcgd2VcbiAgICAgICAgICAgICAgICAvLyB3aWxsIG5vdCByZS1yZWdpc3RlciB0aG9zZSBldmVudCBsaXN0ZW5lcnMuXG4gICAgICAgICAgICAgICAgU1dSR2xvYmFsU3RhdGUuZGVsZXRlKHByb3ZpZGVyKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2UgbWlnaHQgd2FudCB0byBpbmplY3QgYW4gZXh0cmEgbGF5ZXIgb24gdG9wIG9mIGBwcm92aWRlcmAgaW4gdGhlIGZ1dHVyZSxcbiAgICAgICAgLy8gc3VjaCBhcyBrZXkgc2VyaWFsaXphdGlvbiwgYXV0byBHQywgZXRjLlxuICAgICAgICAvLyBGb3Igbm93LCBpdCdzIGp1c3QgYSBgTWFwYCBpbnRlcmZhY2Ugd2l0aG91dCBhbnkgbW9kaWZpY2F0aW9ucy5cbiAgICAgICAgcmV0dXJuIFtwcm92aWRlciwgbXV0YXRlLCB1bm1vdW50XTtcbiAgICB9XG4gICAgcmV0dXJuIFtwcm92aWRlciwgU1dSR2xvYmFsU3RhdGUuZ2V0KHByb3ZpZGVyKVs0XV07XG59O1xuXG4vLyBlcnJvciByZXRyeVxudmFyIG9uRXJyb3JSZXRyeSA9IGZ1bmN0aW9uIChfLCBfXywgY29uZmlnLCByZXZhbGlkYXRlLCBvcHRzKSB7XG4gICAgdmFyIG1heFJldHJ5Q291bnQgPSBjb25maWcuZXJyb3JSZXRyeUNvdW50O1xuICAgIHZhciBjdXJyZW50UmV0cnlDb3VudCA9IG9wdHMucmV0cnlDb3VudDtcbiAgICAvLyBFeHBvbmVudGlhbCBiYWNrb2ZmXG4gICAgdmFyIHRpbWVvdXQgPSB+figoTWF0aC5yYW5kb20oKSArIDAuNSkgKlxuICAgICAgICAoMSA8PCAoY3VycmVudFJldHJ5Q291bnQgPCA4ID8gY3VycmVudFJldHJ5Q291bnQgOiA4KSkpICogY29uZmlnLmVycm9yUmV0cnlJbnRlcnZhbDtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKG1heFJldHJ5Q291bnQpICYmIGN1cnJlbnRSZXRyeUNvdW50ID4gbWF4UmV0cnlDb3VudCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldFRpbWVvdXQocmV2YWxpZGF0ZSwgdGltZW91dCwgb3B0cyk7XG59O1xuLy8gRGVmYXVsdCBjYWNoZSBwcm92aWRlclxudmFyIF9hID0gaW5pdENhY2hlKG5ldyBNYXAoKSksIGNhY2hlID0gX2FbMF0sIG11dGF0ZSA9IF9hWzFdO1xuLy8gRGVmYXVsdCBjb25maWdcbnZhciBkZWZhdWx0Q29uZmlnID0gbWVyZ2VPYmplY3RzKHtcbiAgICAvLyBldmVudHNcbiAgICBvbkxvYWRpbmdTbG93OiBub29wLFxuICAgIG9uU3VjY2Vzczogbm9vcCxcbiAgICBvbkVycm9yOiBub29wLFxuICAgIG9uRXJyb3JSZXRyeTogb25FcnJvclJldHJ5LFxuICAgIG9uRGlzY2FyZGVkOiBub29wLFxuICAgIC8vIHN3aXRjaGVzXG4gICAgcmV2YWxpZGF0ZU9uRm9jdXM6IHRydWUsXG4gICAgcmV2YWxpZGF0ZU9uUmVjb25uZWN0OiB0cnVlLFxuICAgIHJldmFsaWRhdGVJZlN0YWxlOiB0cnVlLFxuICAgIHNob3VsZFJldHJ5T25FcnJvcjogdHJ1ZSxcbiAgICAvLyB0aW1lb3V0c1xuICAgIGVycm9yUmV0cnlJbnRlcnZhbDogc2xvd0Nvbm5lY3Rpb24gPyAxMDAwMCA6IDUwMDAsXG4gICAgZm9jdXNUaHJvdHRsZUludGVydmFsOiA1ICogMTAwMCxcbiAgICBkZWR1cGluZ0ludGVydmFsOiAyICogMTAwMCxcbiAgICBsb2FkaW5nVGltZW91dDogc2xvd0Nvbm5lY3Rpb24gPyA1MDAwIDogMzAwMCxcbiAgICAvLyBwcm92aWRlcnNcbiAgICBjb21wYXJlOiBmdW5jdGlvbiAoY3VycmVudERhdGEsIG5ld0RhdGEpIHtcbiAgICAgICAgcmV0dXJuIHN0YWJsZUhhc2goY3VycmVudERhdGEpID09IHN0YWJsZUhhc2gobmV3RGF0YSk7XG4gICAgfSxcbiAgICBpc1BhdXNlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgY2FjaGU6IGNhY2hlLFxuICAgIG11dGF0ZTogbXV0YXRlLFxuICAgIGZhbGxiYWNrOiB7fVxufSwgXG4vLyB1c2Ugd2ViIHByZXNldCBieSBkZWZhdWx0XG5wcmVzZXQpO1xuXG52YXIgbWVyZ2VDb25maWdzID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAvLyBOZWVkIHRvIGNyZWF0ZSBhIG5ldyBvYmplY3QgdG8gYXZvaWQgbXV0YXRpbmcgdGhlIG9yaWdpbmFsIGhlcmUuXG4gICAgdmFyIHYgPSBtZXJnZU9iamVjdHMoYSwgYik7XG4gICAgLy8gSWYgdHdvIGNvbmZpZ3MgYXJlIHByb3ZpZGVkLCBtZXJnZSB0aGVpciBgdXNlYCBhbmQgYGZhbGxiYWNrYCBvcHRpb25zLlxuICAgIGlmIChiKSB7XG4gICAgICAgIHZhciB1MSA9IGEudXNlLCBmMSA9IGEuZmFsbGJhY2s7XG4gICAgICAgIHZhciB1MiA9IGIudXNlLCBmMiA9IGIuZmFsbGJhY2s7XG4gICAgICAgIGlmICh1MSAmJiB1Mikge1xuICAgICAgICAgICAgdi51c2UgPSB1MS5jb25jYXQodTIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmMSAmJiBmMikge1xuICAgICAgICAgICAgdi5mYWxsYmFjayA9IG1lcmdlT2JqZWN0cyhmMSwgZjIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2O1xufTtcblxudmFyIFNXUkNvbmZpZ0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcbnZhciBTV1JDb25maWckMSA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciB2YWx1ZSA9IHByb3BzLnZhbHVlO1xuICAgIC8vIEV4dGVuZCBwYXJlbnQgY29udGV4dCB2YWx1ZXMgYW5kIG1pZGRsZXdhcmUuXG4gICAgdmFyIGV4dGVuZGVkQ29uZmlnID0gbWVyZ2VDb25maWdzKHVzZUNvbnRleHQoU1dSQ29uZmlnQ29udGV4dCksIHZhbHVlKTtcbiAgICAvLyBTaG91bGQgbm90IHVzZSB0aGUgaW5oZXJpdGVkIHByb3ZpZGVyLlxuICAgIHZhciBwcm92aWRlciA9IHZhbHVlICYmIHZhbHVlLnByb3ZpZGVyO1xuICAgIC8vIFVzZSBhIGxhenkgaW5pdGlhbGl6ZWQgc3RhdGUgdG8gY3JlYXRlIHRoZSBjYWNoZSBvbiBmaXJzdCBhY2Nlc3MuXG4gICAgdmFyIGNhY2hlQ29udGV4dCA9IHVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHByb3ZpZGVyXG4gICAgICAgICAgICA/IGluaXRDYWNoZShwcm92aWRlcihleHRlbmRlZENvbmZpZy5jYWNoZSB8fCBjYWNoZSksIHZhbHVlKVxuICAgICAgICAgICAgOiBVTkRFRklORUQ7XG4gICAgfSlbMF07XG4gICAgLy8gT3ZlcnJpZGUgdGhlIGNhY2hlIGlmIGEgbmV3IHByb3ZpZGVyIGlzIGdpdmVuLlxuICAgIGlmIChjYWNoZUNvbnRleHQpIHtcbiAgICAgICAgZXh0ZW5kZWRDb25maWcuY2FjaGUgPSBjYWNoZUNvbnRleHRbMF07XG4gICAgICAgIGV4dGVuZGVkQ29uZmlnLm11dGF0ZSA9IGNhY2hlQ29udGV4dFsxXTtcbiAgICB9XG4gICAgLy8gVW5zdWJzY3JpYmUgZXZlbnRzLlxuICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkgeyByZXR1cm4gKGNhY2hlQ29udGV4dCA/IGNhY2hlQ29udGV4dFsyXSA6IFVOREVGSU5FRCk7IH0sIFtdKTtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChTV1JDb25maWdDb250ZXh0LlByb3ZpZGVyLCBtZXJnZU9iamVjdHMocHJvcHMsIHtcbiAgICAgICAgdmFsdWU6IGV4dGVuZGVkQ29uZmlnXG4gICAgfSkpO1xufTtcblxuLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiBzdGF0ZSB3aXRoIGRlcGVuZGVuY3ktdHJhY2tpbmcuXG4gKi9cbnZhciB1c2VTdGF0ZVdpdGhEZXBzID0gZnVuY3Rpb24gKHN0YXRlLCB1bm1vdW50ZWRSZWYpIHtcbiAgICB2YXIgcmVyZW5kZXIgPSB1c2VTdGF0ZSh7fSlbMV07XG4gICAgdmFyIHN0YXRlUmVmID0gdXNlUmVmKHN0YXRlKTtcbiAgICAvLyBJZiBhIHN0YXRlIHByb3BlcnR5IChkYXRhLCBlcnJvciBvciBpc1ZhbGlkYXRpbmcpIGlzIGFjY2Vzc2VkIGJ5IHRoZSByZW5kZXJcbiAgICAvLyBmdW5jdGlvbiwgd2UgbWFyayB0aGUgcHJvcGVydHkgYXMgYSBkZXBlbmRlbmN5IHNvIGlmIGl0IGlzIHVwZGF0ZWQgYWdhaW5cbiAgICAvLyBpbiB0aGUgZnV0dXJlLCB3ZSB0cmlnZ2VyIGEgcmVyZW5kZXIuXG4gICAgLy8gVGhpcyBpcyBhbHNvIGtub3duIGFzIGRlcGVuZGVuY3ktdHJhY2tpbmcuXG4gICAgdmFyIHN0YXRlRGVwZW5kZW5jaWVzUmVmID0gdXNlUmVmKHtcbiAgICAgICAgZGF0YTogZmFsc2UsXG4gICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgaXNWYWxpZGF0aW5nOiBmYWxzZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBwYXlsb2FkIFRvIGNoYW5nZSBzdGF0ZVJlZiwgcGFzcyB0aGUgdmFsdWVzIGV4cGxpY2l0bHkgdG8gc2V0U3RhdGU6XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBgYGBqc1xuICAgICAqIHNldFN0YXRlKHtcbiAgICAgKiAgIGlzVmFsaWRhdGluZzogZmFsc2VcbiAgICAgKiAgIGRhdGE6IG5ld0RhdGEgLy8gc2V0IGRhdGEgdG8gbmV3RGF0YVxuICAgICAqICAgZXJyb3I6IHVuZGVmaW5lZCAvLyBzZXQgZXJyb3IgdG8gdW5kZWZpbmVkXG4gICAgICogfSlcbiAgICAgKlxuICAgICAqIHNldFN0YXRlKHtcbiAgICAgKiAgIGlzVmFsaWRhdGluZzogZmFsc2VcbiAgICAgKiAgIGRhdGE6IHVuZGVmaW5lZCAvLyBzZXQgZGF0YSB0byB1bmRlZmluZWRcbiAgICAgKiAgIGVycm9yOiBlcnIgLy8gc2V0IGVycm9yIHRvIGVyclxuICAgICAqIH0pXG4gICAgICogYGBgXG4gICAgICovXG4gICAgdmFyIHNldFN0YXRlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHBheWxvYWQpIHtcbiAgICAgICAgdmFyIHNob3VsZFJlcmVuZGVyID0gZmFsc2U7XG4gICAgICAgIHZhciBjdXJyZW50U3RhdGUgPSBzdGF0ZVJlZi5jdXJyZW50O1xuICAgICAgICBmb3IgKHZhciBfIGluIHBheWxvYWQpIHtcbiAgICAgICAgICAgIHZhciBrID0gXztcbiAgICAgICAgICAgIC8vIElmIHRoZSBwcm9wZXJ0eSBoYXMgY2hhbmdlZCwgdXBkYXRlIHRoZSBzdGF0ZSBhbmQgbWFyayByZXJlbmRlciBhc1xuICAgICAgICAgICAgLy8gbmVlZGVkLlxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZVtrXSAhPT0gcGF5bG9hZFtrXSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZVtrXSA9IHBheWxvYWRba107XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHByb3BlcnR5IGlzIGFjY2Vzc2VkIGJ5IHRoZSBjb21wb25lbnQsIGEgcmVyZW5kZXIgc2hvdWxkIGJlXG4gICAgICAgICAgICAgICAgLy8gdHJpZ2dlcmVkLlxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZURlcGVuZGVuY2llc1JlZi5jdXJyZW50W2tdKSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3VsZFJlcmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3VsZFJlcmVuZGVyICYmICF1bm1vdW50ZWRSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgcmVyZW5kZXIoe30pO1xuICAgICAgICB9XG4gICAgfSwgXG4gICAgLy8gY29uZmlnLnN1c3BlbnNlIGlzbid0IGFsbG93ZWQgdG8gY2hhbmdlIGR1cmluZyB0aGUgbGlmZWN5Y2xlXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIFtdKTtcbiAgICAvLyBBbHdheXMgdXBkYXRlIHRoZSBzdGF0ZSByZWZlcmVuY2UuXG4gICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN0YXRlUmVmLmN1cnJlbnQgPSBzdGF0ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gW3N0YXRlUmVmLCBzdGF0ZURlcGVuZGVuY2llc1JlZi5jdXJyZW50LCBzZXRTdGF0ZV07XG59O1xuXG52YXIgbm9ybWFsaXplID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICByZXR1cm4gaXNGdW5jdGlvbihhcmdzWzFdKVxuICAgICAgICA/IFthcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdIHx8IHt9XVxuICAgICAgICA6IFthcmdzWzBdLCBudWxsLCAoYXJnc1sxXSA9PT0gbnVsbCA/IGFyZ3NbMl0gOiBhcmdzWzFdKSB8fCB7fV07XG59O1xuXG52YXIgdXNlU1dSQ29uZmlnID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBtZXJnZU9iamVjdHMoZGVmYXVsdENvbmZpZywgdXNlQ29udGV4dChTV1JDb25maWdDb250ZXh0KSk7XG59O1xuXG4vLyBJdCdzIHRyaWNreSB0byBwYXNzIGdlbmVyaWMgdHlwZXMgYXMgcGFyYW1ldGVycywgc28gd2UganVzdCBkaXJlY3RseSBvdmVycmlkZVxuLy8gdGhlIHR5cGVzIGhlcmUuXG52YXIgd2l0aEFyZ3MgPSBmdW5jdGlvbiAoaG9vaykge1xuICAgIHJldHVybiBmdW5jdGlvbiB1c2VTV1JBcmdzKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIC8vIEdldCB0aGUgZGVmYXVsdCBhbmQgaW5oZXJpdGVkIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgIHZhciBmYWxsYmFja0NvbmZpZyA9IHVzZVNXUkNvbmZpZygpO1xuICAgICAgICAvLyBOb3JtYWxpemUgYXJndW1lbnRzLlxuICAgICAgICB2YXIgX2EgPSBub3JtYWxpemUoYXJncyksIGtleSA9IF9hWzBdLCBmbiA9IF9hWzFdLCBfY29uZmlnID0gX2FbMl07XG4gICAgICAgIC8vIE1lcmdlIGNvbmZpZ3VyYXRpb25zLlxuICAgICAgICB2YXIgY29uZmlnID0gbWVyZ2VDb25maWdzKGZhbGxiYWNrQ29uZmlnLCBfY29uZmlnKTtcbiAgICAgICAgLy8gQXBwbHkgbWlkZGxld2FyZVxuICAgICAgICB2YXIgbmV4dCA9IGhvb2s7XG4gICAgICAgIHZhciB1c2UgPSBjb25maWcudXNlO1xuICAgICAgICBpZiAodXNlKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gdXNlLmxlbmd0aDsgaS0tID4gMDspIHtcbiAgICAgICAgICAgICAgICBuZXh0ID0gdXNlW2ldKG5leHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXh0KGtleSwgZm4gfHwgY29uZmlnLmZldGNoZXIsIGNvbmZpZyk7XG4gICAgfTtcbn07XG5cbi8vIEFkZCBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGEgbGlzdCBvZiBrZXllZCBjYWxsYmFjayBmdW5jdGlvbnMgYW5kIHJldHVyblxuLy8gdGhlIHVuc3Vic2NyaWJlIGZ1bmN0aW9uLlxudmFyIHN1YnNjcmliZUNhbGxiYWNrID0gZnVuY3Rpb24gKGtleSwgY2FsbGJhY2tzLCBjYWxsYmFjaykge1xuICAgIHZhciBrZXllZFJldmFsaWRhdG9ycyA9IGNhbGxiYWNrc1trZXldIHx8IChjYWxsYmFja3Nba2V5XSA9IFtdKTtcbiAgICBrZXllZFJldmFsaWRhdG9ycy5wdXNoKGNhbGxiYWNrKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW5kZXggPSBrZXllZFJldmFsaWRhdG9ycy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgIC8vIE8oMSk6IGZhc3RlciB0aGFuIHNwbGljZVxuICAgICAgICAgICAga2V5ZWRSZXZhbGlkYXRvcnNbaW5kZXhdID0ga2V5ZWRSZXZhbGlkYXRvcnNba2V5ZWRSZXZhbGlkYXRvcnMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBrZXllZFJldmFsaWRhdG9ycy5wb3AoKTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuXG52YXIgV0lUSF9ERURVUEUgPSB7IGRlZHVwZTogdHJ1ZSB9O1xudmFyIHVzZVNXUkhhbmRsZXIgPSBmdW5jdGlvbiAoX2tleSwgZmV0Y2hlciwgY29uZmlnKSB7XG4gICAgdmFyIGNhY2hlID0gY29uZmlnLmNhY2hlLCBjb21wYXJlID0gY29uZmlnLmNvbXBhcmUsIGZhbGxiYWNrRGF0YSA9IGNvbmZpZy5mYWxsYmFja0RhdGEsIHN1c3BlbnNlID0gY29uZmlnLnN1c3BlbnNlLCByZXZhbGlkYXRlT25Nb3VudCA9IGNvbmZpZy5yZXZhbGlkYXRlT25Nb3VudCwgcmVmcmVzaEludGVydmFsID0gY29uZmlnLnJlZnJlc2hJbnRlcnZhbCwgcmVmcmVzaFdoZW5IaWRkZW4gPSBjb25maWcucmVmcmVzaFdoZW5IaWRkZW4sIHJlZnJlc2hXaGVuT2ZmbGluZSA9IGNvbmZpZy5yZWZyZXNoV2hlbk9mZmxpbmU7XG4gICAgdmFyIF9hID0gU1dSR2xvYmFsU3RhdGUuZ2V0KGNhY2hlKSwgRVZFTlRfUkVWQUxJREFUT1JTID0gX2FbMF0sIFNUQVRFX1VQREFURVJTID0gX2FbMV0sIE1VVEFUSU9OID0gX2FbMl0sIEZFVENIID0gX2FbM107XG4gICAgLy8gYGtleWAgaXMgdGhlIGlkZW50aWZpZXIgb2YgdGhlIFNXUiBgZGF0YWAgc3RhdGUsIGBrZXlJbmZvYCBob2xkcyBleHRyYVxuICAgIC8vIHN0YXRlcyBzdWNoIGFzIGBlcnJvcmAgYW5kIGBpc1ZhbGlkYXRpbmdgIGluc2lkZSxcbiAgICAvLyBhbGwgb2YgdGhlbSBhcmUgZGVyaXZlZCBmcm9tIGBfa2V5YC5cbiAgICAvLyBgZm5BcmdzYCBpcyBhbiBhcnJheSBvZiBhcmd1bWVudHMgcGFyc2VkIGZyb20gdGhlIGtleSwgd2hpY2ggd2lsbCBiZSBwYXNzZWRcbiAgICAvLyB0byB0aGUgZmV0Y2hlci5cbiAgICB2YXIgX2IgPSBzZXJpYWxpemUoX2tleSksIGtleSA9IF9iWzBdLCBmbkFyZ3MgPSBfYlsxXSwga2V5SW5mbyA9IF9iWzJdO1xuICAgIC8vIElmIGl0J3MgdGhlIGluaXRpYWwgcmVuZGVyIG9mIHRoaXMgaG9vay5cbiAgICB2YXIgaW5pdGlhbE1vdW50ZWRSZWYgPSB1c2VSZWYoZmFsc2UpO1xuICAgIC8vIElmIHRoZSBob29rIGlzIHVubW91bnRlZCBhbHJlYWR5LiBUaGlzIHdpbGwgYmUgdXNlZCB0byBwcmV2ZW50IHNvbWUgZWZmZWN0c1xuICAgIC8vIHRvIGJlIGNhbGxlZCBhZnRlciB1bm1vdW50aW5nLlxuICAgIHZhciB1bm1vdW50ZWRSZWYgPSB1c2VSZWYoZmFsc2UpO1xuICAgIC8vIFJlZnMgdG8ga2VlcCB0aGUga2V5IGFuZCBjb25maWcuXG4gICAgdmFyIGtleVJlZiA9IHVzZVJlZihrZXkpO1xuICAgIHZhciBmZXRjaGVyUmVmID0gdXNlUmVmKGZldGNoZXIpO1xuICAgIHZhciBjb25maWdSZWYgPSB1c2VSZWYoY29uZmlnKTtcbiAgICB2YXIgZ2V0Q29uZmlnID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gY29uZmlnUmVmLmN1cnJlbnQ7IH07XG4gICAgdmFyIGlzQWN0aXZlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0Q29uZmlnKCkuaXNWaXNpYmxlKCkgJiYgZ2V0Q29uZmlnKCkuaXNPbmxpbmUoKTsgfTtcbiAgICB2YXIgcGF0Y2hGZXRjaEluZm8gPSBmdW5jdGlvbiAoaW5mbykge1xuICAgICAgICByZXR1cm4gY2FjaGUuc2V0KGtleUluZm8sIG1lcmdlT2JqZWN0cyhjYWNoZS5nZXQoa2V5SW5mbyksIGluZm8pKTtcbiAgICB9O1xuICAgIC8vIEdldCB0aGUgY3VycmVudCBzdGF0ZSB0aGF0IFNXUiBzaG91bGQgcmV0dXJuLlxuICAgIHZhciBjYWNoZWQgPSBjYWNoZS5nZXQoa2V5KTtcbiAgICB2YXIgZmFsbGJhY2sgPSBpc1VuZGVmaW5lZChmYWxsYmFja0RhdGEpXG4gICAgICAgID8gY29uZmlnLmZhbGxiYWNrW2tleV1cbiAgICAgICAgOiBmYWxsYmFja0RhdGE7XG4gICAgdmFyIGRhdGEgPSBpc1VuZGVmaW5lZChjYWNoZWQpID8gZmFsbGJhY2sgOiBjYWNoZWQ7XG4gICAgdmFyIGluZm8gPSBjYWNoZS5nZXQoa2V5SW5mbykgfHwge307XG4gICAgdmFyIGVycm9yID0gaW5mby5lcnJvcjtcbiAgICAvLyAtIFN1c3BlbnNlIG1vZGUgYW5kIHRoZXJlJ3Mgc3RhbGUgZGF0YSBmb3IgdGhlIGluaXRpYWwgcmVuZGVyLlxuICAgIC8vIC0gTm90IHN1c3BlbnNlIG1vZGUgYW5kIHRoZXJlIGlzIG5vIGZhbGxiYWNrIGRhdGEgYW5kIGByZXZhbGlkYXRlSWZTdGFsZWAgaXMgZW5hYmxlZC5cbiAgICAvLyAtIGByZXZhbGlkYXRlSWZTdGFsZWAgaXMgZW5hYmxlZCBidXQgYGRhdGFgIGlzIG5vdCBkZWZpbmVkLlxuICAgIHZhciBzaG91bGRSZXZhbGlkYXRlT25Nb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gSWYgYHJldmFsaWRhdGVPbk1vdW50YCBpcyBzZXQsIHdlIHRha2UgdGhlIHZhbHVlIGRpcmVjdGx5LlxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKHJldmFsaWRhdGVPbk1vdW50KSlcbiAgICAgICAgICAgIHJldHVybiByZXZhbGlkYXRlT25Nb3VudDtcbiAgICAgICAgLy8gSWYgaXQncyBwYXVzZWQsIHdlIHNraXAgcmV2YWxpZGF0aW9uLlxuICAgICAgICBpZiAoZ2V0Q29uZmlnKCkuaXNQYXVzZWQoKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHN1c3BlbnNlXG4gICAgICAgICAgICA/IC8vIFVuZGVyIHN1c3BlbnNlIG1vZGUsIGl0IHdpbGwgYWx3YXlzIGZldGNoIG9uIHJlbmRlciBpZiB0aGVyZSBpcyBub1xuICAgICAgICAgICAgICAgIC8vIHN0YWxlIGRhdGEgc28gbm8gbmVlZCB0byByZXZhbGlkYXRlIGltbWVkaWF0ZWx5IG9uIG1vdW50IGFnYWluLlxuICAgICAgICAgICAgICAgICFpc1VuZGVmaW5lZChkYXRhKVxuICAgICAgICAgICAgOiAvLyBJZiB0aGVyZSBpcyBubyBzdGFsZSBkYXRhLCB3ZSBuZWVkIHRvIHJldmFsaWRhdGUgb24gbW91bnQ7XG4gICAgICAgICAgICAgICAgLy8gSWYgYHJldmFsaWRhdGVJZlN0YWxlYCBpcyBzZXQgdG8gdHJ1ZSwgd2Ugd2lsbCBhbHdheXMgcmV2YWxpZGF0ZS5cbiAgICAgICAgICAgICAgICBpc1VuZGVmaW5lZChkYXRhKSB8fCBjb25maWcucmV2YWxpZGF0ZUlmU3RhbGU7XG4gICAgfTtcbiAgICAvLyBSZXNvbHZlIHRoZSBjdXJyZW50IHZhbGlkYXRpbmcgc3RhdGUuXG4gICAgdmFyIHJlc29sdmVWYWxpZGF0aW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWtleSB8fCAhZmV0Y2hlcilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGluZm8uaXNWYWxpZGF0aW5nKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIC8vIElmIGl0J3Mgbm90IG1vdW50ZWQgeWV0IGFuZCBpdCBzaG91bGQgcmV2YWxpZGF0ZSBvbiBtb3VudCwgcmV2YWxpZGF0ZS5cbiAgICAgICAgcmV0dXJuICFpbml0aWFsTW91bnRlZFJlZi5jdXJyZW50ICYmIHNob3VsZFJldmFsaWRhdGVPbk1vdW50KCk7XG4gICAgfTtcbiAgICB2YXIgaXNWYWxpZGF0aW5nID0gcmVzb2x2ZVZhbGlkYXRpbmcoKTtcbiAgICB2YXIgX2MgPSB1c2VTdGF0ZVdpdGhEZXBzKHtcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICBpc1ZhbGlkYXRpbmc6IGlzVmFsaWRhdGluZ1xuICAgIH0sIHVubW91bnRlZFJlZiksIHN0YXRlUmVmID0gX2NbMF0sIHN0YXRlRGVwZW5kZW5jaWVzID0gX2NbMV0sIHNldFN0YXRlID0gX2NbMl07XG4gICAgLy8gVGhlIHJldmFsaWRhdGlvbiBmdW5jdGlvbiBpcyBhIGNhcmVmdWxseSBjcmFmdGVkIHdyYXBwZXIgb2YgdGhlIG9yaWdpbmFsXG4gICAgLy8gYGZldGNoZXJgLCB0byBjb3JyZWN0bHkgaGFuZGxlIHRoZSBtYW55IGVkZ2UgY2FzZXMuXG4gICAgdmFyIHJldmFsaWRhdGUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAocmV2YWxpZGF0ZU9wdHMpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjdXJyZW50RmV0Y2hlciwgbmV3RGF0YSwgc3RhcnRBdCwgbG9hZGluZywgb3B0cywgc2hvdWxkU3RhcnROZXdSZXF1ZXN0LCBpc0N1cnJlbnRLZXlNb3VudGVkLCBjbGVhbnVwU3RhdGUsIG5ld1N0YXRlLCBmaW5pc2hSZXF1ZXN0QW5kVXBkYXRlU3RhdGUsIG11dGF0aW9uSW5mbywgZXJyXzE7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEZldGNoZXIgPSBmZXRjaGVyUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmICgha2V5IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAhY3VycmVudEZldGNoZXIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVubW91bnRlZFJlZi5jdXJyZW50IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRDb25maWcoKS5pc1BhdXNlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBvcHRzID0gcmV2YWxpZGF0ZU9wdHMgfHwge307XG4gICAgICAgICAgICAgICAgICAgIHNob3VsZFN0YXJ0TmV3UmVxdWVzdCA9ICFGRVRDSFtrZXldIHx8ICFvcHRzLmRlZHVwZTtcbiAgICAgICAgICAgICAgICAgICAgaXNDdXJyZW50S2V5TW91bnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhdW5tb3VudGVkUmVmLmN1cnJlbnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPT09IGtleVJlZi5jdXJyZW50ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbE1vdW50ZWRSZWYuY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYW51cFN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgaXQncyBzdGlsbCB0aGUgc2FtZSByZXF1ZXN0IGJlZm9yZSBkZWxldGluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0SW5mbyA9IEZFVENIW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVxdWVzdEluZm8gJiYgcmVxdWVzdEluZm9bMV0gPT09IHN0YXJ0QXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgRkVUQ0hba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgbmV3U3RhdGUgPSB7IGlzVmFsaWRhdGluZzogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICAgICAgZmluaXNoUmVxdWVzdEFuZFVwZGF0ZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0Y2hGZXRjaEluZm8oeyBpc1ZhbGlkYXRpbmc6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgY2FuIG9ubHkgc2V0IHN0YXRlIGlmIGl0J3Mgc2FmZSAoc3RpbGwgbW91bnRlZCB3aXRoIHRoZSBzYW1lIGtleSkuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDdXJyZW50S2V5TW91bnRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAvLyBTdGFydCBmZXRjaGluZy4gQ2hhbmdlIHRoZSBgaXNWYWxpZGF0aW5nYCBzdGF0ZSwgdXBkYXRlIHRoZSBjYWNoZS5cbiAgICAgICAgICAgICAgICAgICAgcGF0Y2hGZXRjaEluZm8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZGF0aW5nOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZSh7IGlzVmFsaWRhdGluZzogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZFN0YXJ0TmV3UmVxdWVzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGVsbCBhbGwgb3RoZXIgaG9va3MgdG8gY2hhbmdlIHRoZSBgaXNWYWxpZGF0aW5nYCBzdGF0ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyb2FkY2FzdFN0YXRlKGNhY2hlLCBrZXksIHN0YXRlUmVmLmN1cnJlbnQuZGF0YSwgc3RhdGVSZWYuY3VycmVudC5lcnJvciwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBubyBjYWNoZSBiZWluZyByZW5kZXJlZCBjdXJyZW50bHkgKGl0IHNob3dzIGEgYmxhbmsgcGFnZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSB0cmlnZ2VyIHRoZSBsb2FkaW5nIHNsb3cgZXZlbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLmxvYWRpbmdUaW1lb3V0ICYmICFjYWNoZS5nZXQoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9hZGluZyAmJiBpc0N1cnJlbnRLZXlNb3VudGVkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldENvbmZpZygpLm9uTG9hZGluZ1Nsb3coa2V5LCBjb25maWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgY29uZmlnLmxvYWRpbmdUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0YXJ0IHRoZSByZXF1ZXN0IGFuZCBzYXZlIHRoZSB0aW1lc3RhbXAuXG4gICAgICAgICAgICAgICAgICAgICAgICBGRVRDSFtrZXldID0gW2N1cnJlbnRGZXRjaGVyLmFwcGx5KHZvaWQgMCwgZm5BcmdzKSwgZ2V0VGltZXN0YW1wKCldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF9hID0gRkVUQ0hba2V5XSwgbmV3RGF0YSA9IF9hWzBdLCBzdGFydEF0ID0gX2FbMV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG5ld0RhdGFdO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgbmV3RGF0YSA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZFN0YXJ0TmV3UmVxdWVzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHJlcXVlc3QgaXNuJ3QgaW50ZXJydXB0ZWQsIGNsZWFuIGl0IHVwIGFmdGVyIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVkdXBsaWNhdGlvbiBpbnRlcnZhbC5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY2xlYW51cFN0YXRlLCBjb25maWcuZGVkdXBpbmdJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUncmUgb3RoZXIgb25nb2luZyByZXF1ZXN0KHMpLCBzdGFydGVkIGFmdGVyIHRoZSBjdXJyZW50IG9uZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBpZ25vcmUgdGhlIGN1cnJlbnQgb25lIHRvIGF2b2lkIHBvc3NpYmxlIHJhY2UgY29uZGl0aW9uczpcbiAgICAgICAgICAgICAgICAgICAgLy8gICByZXExLS0tLS0tLS0tLS0tLS0tLS0tPnJlczEgICAgICAgIChjdXJyZW50IG9uZSlcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgIHJlcTItLS0tLS0tLS0tLS0tLS0tPnJlczJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHJlcXVlc3QgdGhhdCBmaXJlZCBsYXRlciB3aWxsIGFsd2F5cyBiZSBrZXB0LlxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgdGltZXN0YW1wIG1heWJlIGJlIGB1bmRlZmluZWRgIG9yIGEgbnVtYmVyXG4gICAgICAgICAgICAgICAgICAgIGlmICghRkVUQ0hba2V5XSB8fCBGRVRDSFtrZXldWzFdICE9PSBzdGFydEF0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkU3RhcnROZXdSZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ3VycmVudEtleU1vdW50ZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRDb25maWcoKS5vbkRpc2NhcmRlZChrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gQ2xlYXIgZXJyb3IuXG4gICAgICAgICAgICAgICAgICAgIHBhdGNoRmV0Y2hJbmZvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBVTkRFRklORURcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIG5ld1N0YXRlLmVycm9yID0gVU5ERUZJTkVEO1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbkluZm8gPSBNVVRBVElPTltrZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKG11dGF0aW9uSW5mbykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKHN0YXJ0QXQgPD0gbXV0YXRpb25JbmZvWzBdIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FzZSAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBdCA8PSBtdXRhdGlvbkluZm9bMV0gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlIDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbkluZm9bMV0gPT09IDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5pc2hSZXF1ZXN0QW5kVXBkYXRlU3RhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGRTdGFydE5ld1JlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDdXJyZW50S2V5TW91bnRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldENvbmZpZygpLm9uRGlzY2FyZGVkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBEZWVwIGNvbXBhcmUgd2l0aCBsYXRlc3Qgc3RhdGUgdG8gYXZvaWQgZXh0cmEgcmUtcmVuZGVycy5cbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGxvY2FsIHN0YXRlLCBjb21wYXJlIGFuZCBhc3NpZ24uXG4gICAgICAgICAgICAgICAgICAgIGlmICghY29tcGFyZShzdGF0ZVJlZi5jdXJyZW50LmRhdGEsIG5ld0RhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTdGF0ZS5kYXRhID0gbmV3RGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRhdGEgYW5kIG5ld0RhdGEgYXJlIGRlZXBseSBlcXVhbFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXQgc2hvdWxkIGJlIHNhZmUgdG8gYnJvYWRjYXN0IHRoZSBzdGFsZSBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTdGF0ZS5kYXRhID0gc3RhdGVSZWYuY3VycmVudC5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXQgdGhlIGVuZCBvZiB0aGlzIGZ1bmN0aW9uLCBgYnJvY2FzdFN0YXRlYCBpbnZva2VzIHRoZSBgb25TdGF0ZVVwZGF0ZWAgZnVuY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3aGljaCB0YWtlcyBjYXJlIG9mIGF2b2lkaW5nIHRoZSByZS1yZW5kZXJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgZ2xvYmFsIHN0YXRlLCBpdCdzIHBvc3NpYmxlIHRoYXQgdGhlIGtleSBoYXMgY2hhbmdlZC5cbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9zd3IvcHVsbC8xMDU4XG4gICAgICAgICAgICAgICAgICAgIGlmICghY29tcGFyZShjYWNoZS5nZXQoa2V5KSwgbmV3RGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlLnNldChrZXksIG5ld0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFRyaWdnZXIgdGhlIHN1Y2Nlc3NmdWwgY2FsbGJhY2sgaWYgaXQncyB0aGUgb3JpZ2luYWwgcmVxdWVzdC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZFN0YXJ0TmV3UmVxdWVzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ3VycmVudEtleU1vdW50ZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldENvbmZpZygpLm9uU3VjY2VzcyhuZXdEYXRhLCBrZXksIGNvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBlcnJfMSA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYW51cFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdCBwYXVzZWQsIHdlIGNvbnRpbnVlIGhhbmRsaW5nIHRoZSBlcnJvci4gT3RoZXJ3aXNlIGRpc2NhcmQgaXQuXG4gICAgICAgICAgICAgICAgICAgIGlmICghZ2V0Q29uZmlnKCkuaXNQYXVzZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IGEgbmV3IGVycm9yLCBkb24ndCB1c2UgZGVlcCBjb21wYXJpc29uIGZvciBlcnJvcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRjaEZldGNoSW5mbyh7IGVycm9yOiBlcnJfMSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXRlLmVycm9yID0gZXJyXzE7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFcnJvciBldmVudCBhbmQgcmV0cnkgbG9naWMuIE9ubHkgZm9yIHRoZSBhY3R1YWwgcmVxdWVzdCwgbm90XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWR1cGVkIG9uZXMuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkU3RhcnROZXdSZXF1ZXN0ICYmIGlzQ3VycmVudEtleU1vdW50ZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldENvbmZpZygpLm9uRXJyb3IoZXJyXzEsIGtleSwgY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHR5cGVvZiBjb25maWcuc2hvdWxkUmV0cnlPbkVycm9yID09PSAnYm9vbGVhbicgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnLnNob3VsZFJldHJ5T25FcnJvcikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlzRnVuY3Rpb24oY29uZmlnLnNob3VsZFJldHJ5T25FcnJvcikgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZy5zaG91bGRSZXRyeU9uRXJyb3IoZXJyXzEpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIHJldHJ5aW5nLCBkZWR1cGUgaXMgYWx3YXlzIGVuYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQWN0aXZlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0J3MgYWN0aXZlLCBzdG9wLiBJdCB3aWxsIGF1dG8gcmV2YWxpZGF0ZSB3aGVuIHJlZm9jdXNpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9yIHJlY29ubmVjdGluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldENvbmZpZygpLm9uRXJyb3JSZXRyeShlcnJfMSwga2V5LCBjb25maWcsIHJldmFsaWRhdGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXRyeUNvdW50OiAob3B0cy5yZXRyeUNvdW50IHx8IDApICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWR1cGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgLy8gTWFyayBsb2FkaW5nIGFzIHN0b3BwZWQuXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBjdXJyZW50IGhvb2sncyBzdGF0ZS5cbiAgICAgICAgICAgICAgICAgICAgZmluaXNoUmVxdWVzdEFuZFVwZGF0ZVN0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhlcmUgaXMgdGhlIHNvdXJjZSBvZiB0aGUgcmVxdWVzdCwgbmVlZCB0byB0ZWxsIGFsbCBvdGhlciBob29rcyB0b1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlaXIgc3RhdGVzLlxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNDdXJyZW50S2V5TW91bnRlZCgpICYmIHNob3VsZFN0YXJ0TmV3UmVxdWVzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJvYWRjYXN0U3RhdGUoY2FjaGUsIGtleSwgbmV3U3RhdGUuZGF0YSwgbmV3U3RhdGUuZXJyb3IsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdHJ1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pOyB9LCBcbiAgICAvLyBgc2V0U3RhdGVgIGlzIGltbXV0YWJsZSwgYW5kIGBldmVudHNDYWxsYmFja2AsIGBmbkFyZ3NgLCBga2V5SW5mb2AsXG4gICAgLy8gYW5kIGBrZXlWYWxpZGF0aW5nYCBhcmUgZGVwZW5kaW5nIG9uIGBrZXlgLCBzbyB3ZSBjYW4gZXhjbHVkZSB0aGVtIGZyb21cbiAgICAvLyB0aGUgZGVwcyBhcnJheS5cbiAgICAvL1xuICAgIC8vIEZJWE1FOlxuICAgIC8vIGBmbmAgYW5kIGBjb25maWdgIG1pZ2h0IGJlIGNoYW5nZWQgZHVyaW5nIHRoZSBsaWZlY3ljbGUsXG4gICAgLy8gYnV0IHRoZXkgbWlnaHQgYmUgY2hhbmdlZCBldmVyeSByZW5kZXIgbGlrZSB0aGlzLlxuICAgIC8vIGB1c2VTV1IoJ2tleScsICgpID0+IGZldGNoKCcvYXBpLycpLCB7IHN1c3BlbnNlOiB0cnVlIH0pYFxuICAgIC8vIFNvIHdlIG9taXQgdGhlIHZhbHVlcyBmcm9tIHRoZSBkZXBzIGFycmF5XG4gICAgLy8gZXZlbiB0aG91Z2ggaXQgbWlnaHQgY2F1c2UgdW5leHBlY3RlZCBiZWhhdmlvcnMuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIFtrZXldKTtcbiAgICAvLyBTaW1pbGFyIHRvIHRoZSBnbG9iYWwgbXV0YXRlLCBidXQgYm91bmQgdG8gdGhlIGN1cnJlbnQgY2FjaGUgYW5kIGtleS5cbiAgICAvLyBgY2FjaGVgIGlzbid0IGFsbG93ZWQgdG8gY2hhbmdlIGR1cmluZyB0aGUgbGlmZWN5Y2xlLlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICB2YXIgYm91bmRNdXRhdGUgPSB1c2VDYWxsYmFjayhcbiAgICAvLyBCeSB1c2luZyBgYmluZGAgd2UgZG9uJ3QgbmVlZCB0byBtb2RpZnkgdGhlIHNpemUgb2YgdGhlIHJlc3QgYXJndW1lbnRzLlxuICAgIGludGVybmFsTXV0YXRlLmJpbmQoVU5ERUZJTkVELCBjYWNoZSwgZnVuY3Rpb24gKCkgeyByZXR1cm4ga2V5UmVmLmN1cnJlbnQ7IH0pLCBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgW10pO1xuICAgIC8vIEFsd2F5cyB1cGRhdGUgZmV0Y2hlciBhbmQgY29uZmlnIHJlZnMuXG4gICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZldGNoZXJSZWYuY3VycmVudCA9IGZldGNoZXI7XG4gICAgICAgIGNvbmZpZ1JlZi5jdXJyZW50ID0gY29uZmlnO1xuICAgIH0pO1xuICAgIC8vIEFmdGVyIG1vdW50ZWQgb3Iga2V5IGNoYW5nZWQuXG4gICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgha2V5KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBOb3QgdGhlIGluaXRpYWwgcmVuZGVyLlxuICAgICAgICB2YXIga2V5Q2hhbmdlZCA9IGluaXRpYWxNb3VudGVkUmVmLmN1cnJlbnQ7XG4gICAgICAgIHZhciBzb2Z0UmV2YWxpZGF0ZSA9IHJldmFsaWRhdGUuYmluZChVTkRFRklORUQsIFdJVEhfREVEVVBFKTtcbiAgICAgICAgLy8gRXhwb3NlIHN0YXRlIHVwZGF0ZXIgdG8gZ2xvYmFsIGV2ZW50IGxpc3RlbmVycy4gU28gd2UgY2FuIHVwZGF0ZSBob29rJ3NcbiAgICAgICAgLy8gaW50ZXJuYWwgc3RhdGUgZnJvbSB0aGUgb3V0c2lkZS5cbiAgICAgICAgdmFyIG9uU3RhdGVVcGRhdGUgPSBmdW5jdGlvbiAodXBkYXRlZERhdGEsIHVwZGF0ZWRFcnJvciwgdXBkYXRlZElzVmFsaWRhdGluZykge1xuICAgICAgICAgICAgc2V0U3RhdGUobWVyZ2VPYmplY3RzKHtcbiAgICAgICAgICAgICAgICBlcnJvcjogdXBkYXRlZEVycm9yLFxuICAgICAgICAgICAgICAgIGlzVmFsaWRhdGluZzogdXBkYXRlZElzVmFsaWRhdGluZ1xuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAvLyBTaW5jZSBgc2V0U3RhdGVgIG9ubHkgc2hhbGxvd2x5IGNvbXBhcmVzIHN0YXRlcywgd2UgZG8gYSBkZWVwXG4gICAgICAgICAgICAvLyBjb21wYXJpc29uIGhlcmUuXG4gICAgICAgICAgICBjb21wYXJlKHN0YXRlUmVmLmN1cnJlbnQuZGF0YSwgdXBkYXRlZERhdGEpXG4gICAgICAgICAgICAgICAgPyBVTkRFRklORURcbiAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdXBkYXRlZERhdGFcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEV4cG9zZSByZXZhbGlkYXRvcnMgdG8gZ2xvYmFsIGV2ZW50IGxpc3RlbmVycy4gU28gd2UgY2FuIHRyaWdnZXJcbiAgICAgICAgLy8gcmV2YWxpZGF0aW9uIGZyb20gdGhlIG91dHNpZGUuXG4gICAgICAgIHZhciBuZXh0Rm9jdXNSZXZhbGlkYXRlZEF0ID0gMDtcbiAgICAgICAgdmFyIG9uUmV2YWxpZGF0ZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PSBGT0NVU19FVkVOVCkge1xuICAgICAgICAgICAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIGlmIChnZXRDb25maWcoKS5yZXZhbGlkYXRlT25Gb2N1cyAmJlxuICAgICAgICAgICAgICAgICAgICBub3cgPiBuZXh0Rm9jdXNSZXZhbGlkYXRlZEF0ICYmXG4gICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dEZvY3VzUmV2YWxpZGF0ZWRBdCA9IG5vdyArIGdldENvbmZpZygpLmZvY3VzVGhyb3R0bGVJbnRlcnZhbDtcbiAgICAgICAgICAgICAgICAgICAgc29mdFJldmFsaWRhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09IFJFQ09OTkVDVF9FVkVOVCkge1xuICAgICAgICAgICAgICAgIGlmIChnZXRDb25maWcoKS5yZXZhbGlkYXRlT25SZWNvbm5lY3QgJiYgaXNBY3RpdmUoKSkge1xuICAgICAgICAgICAgICAgICAgICBzb2Z0UmV2YWxpZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT0gTVVUQVRFX0VWRU5UKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldmFsaWRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHVuc3ViVXBkYXRlID0gc3Vic2NyaWJlQ2FsbGJhY2soa2V5LCBTVEFURV9VUERBVEVSUywgb25TdGF0ZVVwZGF0ZSk7XG4gICAgICAgIHZhciB1bnN1YkV2ZW50cyA9IHN1YnNjcmliZUNhbGxiYWNrKGtleSwgRVZFTlRfUkVWQUxJREFUT1JTLCBvblJldmFsaWRhdGUpO1xuICAgICAgICAvLyBNYXJrIHRoZSBjb21wb25lbnQgYXMgbW91bnRlZCBhbmQgdXBkYXRlIGNvcnJlc3BvbmRpbmcgcmVmcy5cbiAgICAgICAgdW5tb3VudGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAga2V5UmVmLmN1cnJlbnQgPSBrZXk7XG4gICAgICAgIGluaXRpYWxNb3VudGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAvLyBXaGVuIGBrZXlgIHVwZGF0ZXMsIHJlc2V0IHRoZSBzdGF0ZSB0byB0aGUgaW5pdGlhbCB2YWx1ZVxuICAgICAgICAvLyBhbmQgdHJpZ2dlciBhIHJlcmVuZGVyIGlmIG5lY2Vzc2FyeS5cbiAgICAgICAgaWYgKGtleUNoYW5nZWQpIHtcbiAgICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgICBpc1ZhbGlkYXRpbmc6IGlzVmFsaWRhdGluZ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHJpZ2dlciBhIHJldmFsaWRhdGlvbi5cbiAgICAgICAgaWYgKHNob3VsZFJldmFsaWRhdGVPbk1vdW50KCkpIHtcbiAgICAgICAgICAgIGlmIChpc1VuZGVmaW5lZChkYXRhKSB8fCBJU19TRVJWRVIpIHtcbiAgICAgICAgICAgICAgICAvLyBSZXZhbGlkYXRlIGltbWVkaWF0ZWx5LlxuICAgICAgICAgICAgICAgIHNvZnRSZXZhbGlkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBEZWxheSB0aGUgcmV2YWxpZGF0ZSBpZiB3ZSBoYXZlIGRhdGEgdG8gcmV0dXJuIHNvIHdlIHdvbid0IGJsb2NrXG4gICAgICAgICAgICAgICAgLy8gcmVuZGVyaW5nLlxuICAgICAgICAgICAgICAgIHJBRihzb2Z0UmV2YWxpZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIE1hcmsgaXQgYXMgdW5tb3VudGVkLlxuICAgICAgICAgICAgdW5tb3VudGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgdW5zdWJVcGRhdGUoKTtcbiAgICAgICAgICAgIHVuc3ViRXZlbnRzKCk7XG4gICAgICAgIH07XG4gICAgfSwgW2tleSwgcmV2YWxpZGF0ZV0pO1xuICAgIC8vIFBvbGxpbmdcbiAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRpbWVyO1xuICAgICAgICBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgLy8gVXNlIHRoZSBwYXNzZWQgaW50ZXJ2YWxcbiAgICAgICAgICAgIC8vIC4uLm9yIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgdXBkYXRlZCBkYXRhIHRvIGdldCB0aGUgaW50ZXJ2YWxcbiAgICAgICAgICAgIHZhciBpbnRlcnZhbCA9IGlzRnVuY3Rpb24ocmVmcmVzaEludGVydmFsKVxuICAgICAgICAgICAgICAgID8gcmVmcmVzaEludGVydmFsKGRhdGEpXG4gICAgICAgICAgICAgICAgOiByZWZyZXNoSW50ZXJ2YWw7XG4gICAgICAgICAgICAvLyBXZSBvbmx5IHN0YXJ0IG5leHQgaW50ZXJ2YWwgaWYgYHJlZnJlc2hJbnRlcnZhbGAgaXMgbm90IDAsIGFuZDpcbiAgICAgICAgICAgIC8vIC0gYGZvcmNlYCBpcyB0cnVlLCB3aGljaCBpcyB0aGUgc3RhcnQgb2YgcG9sbGluZ1xuICAgICAgICAgICAgLy8gLSBvciBgdGltZXJgIGlzIG5vdCAwLCB3aGljaCBtZWFucyB0aGUgZWZmZWN0IHdhc24ndCBjYW5jZWxlZFxuICAgICAgICAgICAgaWYgKGludGVydmFsICYmIHRpbWVyICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dChleGVjdXRlLCBpbnRlcnZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZXhlY3V0ZSgpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGl0J3MgT0sgdG8gZXhlY3V0ZTpcbiAgICAgICAgICAgIC8vIE9ubHkgcmV2YWxpZGF0ZSB3aGVuIHRoZSBwYWdlIGlzIHZpc2libGUsIG9ubGluZSBhbmQgbm90IGVycm9yZWQuXG4gICAgICAgICAgICBpZiAoIXN0YXRlUmVmLmN1cnJlbnQuZXJyb3IgJiZcbiAgICAgICAgICAgICAgICAocmVmcmVzaFdoZW5IaWRkZW4gfHwgZ2V0Q29uZmlnKCkuaXNWaXNpYmxlKCkpICYmXG4gICAgICAgICAgICAgICAgKHJlZnJlc2hXaGVuT2ZmbGluZSB8fCBnZXRDb25maWcoKS5pc09ubGluZSgpKSkge1xuICAgICAgICAgICAgICAgIHJldmFsaWRhdGUoV0lUSF9ERURVUEUpLnRoZW4obmV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBTY2hlZHVsZSBuZXh0IGludGVydmFsIHRvIGNoZWNrIGFnYWluLlxuICAgICAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBuZXh0KCk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGltZXIpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgICAgIHRpbWVyID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSwgW3JlZnJlc2hJbnRlcnZhbCwgcmVmcmVzaFdoZW5IaWRkZW4sIHJlZnJlc2hXaGVuT2ZmbGluZSwgcmV2YWxpZGF0ZV0pO1xuICAgIC8vIERpc3BsYXkgZGVidWcgaW5mbyBpbiBSZWFjdCBEZXZUb29scy5cbiAgICB1c2VEZWJ1Z1ZhbHVlKGRhdGEpO1xuICAgIC8vIEluIFN1c3BlbnNlIG1vZGUsIHdlIGNhbid0IHJldHVybiB0aGUgZW1wdHkgYGRhdGFgIHN0YXRlLlxuICAgIC8vIElmIHRoZXJlIGlzIGBlcnJvcmAsIHRoZSBgZXJyb3JgIG5lZWRzIHRvIGJlIHRocm93biB0byB0aGUgZXJyb3IgYm91bmRhcnkuXG4gICAgLy8gSWYgdGhlcmUgaXMgbm8gYGVycm9yYCwgdGhlIGByZXZhbGlkYXRpb25gIHByb21pc2UgbmVlZHMgdG8gYmUgdGhyb3duIHRvXG4gICAgLy8gdGhlIHN1c3BlbnNlIGJvdW5kYXJ5LlxuICAgIGlmIChzdXNwZW5zZSAmJiBpc1VuZGVmaW5lZChkYXRhKSAmJiBrZXkpIHtcbiAgICAgICAgLy8gQWx3YXlzIHVwZGF0ZSBmZXRjaGVyIGFuZCBjb25maWcgcmVmcyBldmVuIHdpdGggdGhlIFN1c3BlbnNlIG1vZGUuXG4gICAgICAgIGZldGNoZXJSZWYuY3VycmVudCA9IGZldGNoZXI7XG4gICAgICAgIGNvbmZpZ1JlZi5jdXJyZW50ID0gY29uZmlnO1xuICAgICAgICB0aHJvdyBpc1VuZGVmaW5lZChlcnJvcikgPyByZXZhbGlkYXRlKFdJVEhfREVEVVBFKSA6IGVycm9yO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBtdXRhdGU6IGJvdW5kTXV0YXRlLFxuICAgICAgICBnZXQgZGF0YSgpIHtcbiAgICAgICAgICAgIHN0YXRlRGVwZW5kZW5jaWVzLmRhdGEgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBlcnJvcigpIHtcbiAgICAgICAgICAgIHN0YXRlRGVwZW5kZW5jaWVzLmVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGlzVmFsaWRhdGluZygpIHtcbiAgICAgICAgICAgIHN0YXRlRGVwZW5kZW5jaWVzLmlzVmFsaWRhdGluZyA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gaXNWYWxpZGF0aW5nO1xuICAgICAgICB9XG4gICAgfTtcbn07XG52YXIgU1dSQ29uZmlnID0gT0JKRUNULmRlZmluZVByb3BlcnR5KFNXUkNvbmZpZyQxLCAnZGVmYXVsdCcsIHtcbiAgICB2YWx1ZTogZGVmYXVsdENvbmZpZ1xufSk7XG52YXIgdW5zdGFibGVfc2VyaWFsaXplID0gZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gc2VyaWFsaXplKGtleSlbMF07IH07XG52YXIgdXNlU1dSID0gd2l0aEFyZ3ModXNlU1dSSGFuZGxlcik7XG5cbi8vIHVzZVNXUlxuXG5leHBvcnQgeyBTV1JDb25maWcsIHVzZVNXUiBhcyBkZWZhdWx0LCBtdXRhdGUsIHVuc3RhYmxlX3NlcmlhbGl6ZSwgdXNlU1dSQ29uZmlnIH07XG4iXSwic291cmNlUm9vdCI6IiJ9