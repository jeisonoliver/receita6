(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/Q2/movies33"],{

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

/***/ "./pages/Q2/movies33.js":
/*!******************************!*\
  !*** ./pages/Q2/movies33.js ***!
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




var _jsxFileName = "C:\\Users\\HP\\receita6\\pages\\Q2\\movies33.js",
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

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FQ2%2Fmovies33&absolutePagePath=C%3A%5CUsers%5CHP%5Creceita6%5Cpages%5CQ2%5Cmovies33.js!":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FQ2%2Fmovies33&absolutePagePath=C%3A%5CUsers%5CHP%5Creceita6%5Cpages%5CQ2%5Cmovies33.js! ***!
  \**********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/Q2/movies33",
      function () {
        return __webpack_require__(/*! ./pages/Q2/movies33.js */ "./pages/Q2/movies33.js");
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
/******/ var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FQ2%2Fmovies33&absolutePagePath=C%3A%5CUsers%5CHP%5Creceita6%5Cpages%5CQ2%5Cmovies33.js!"));
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1EyL21vdmllczMzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy9vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovL19OX0UvIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtaG9vay1mb3JtL2Rpc3QvaW5kZXguZXNtLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3dyL2Rpc3QvaW5kZXgubWpzIl0sIm5hbWVzIjpbIk1vdmllczMzIiwidXNlU3RhdGUiLCJ1cmwiLCJ0aXRsZVNlYXJjaFN0cmluZyIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VTV1IiLCJ1IiwiU2VhcmNoIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSIsImVycm9yIiwib25DbGlja0hhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiVGhlTW92aWVzIiwic2hvdyIsIlJlc3BvbnNlIiwibWFwIiwibSIsImltZGJJRCIsIlRpdGxlIiwiWWVhciIsIlRoZUZvcm0iLCJmaWx0cm8iLCJhY2FvIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwid2F0Y2giLCJlcnJvcnMiLCJmb3JtU3RhdGUiLCJyZXF1aXJlZCIsIm1pbkxlbmd0aCIsIlRoZUxpbmsiLCJoYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDbENlO0FBQ2Y7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7OztBQ2hCQSxnSEFBK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQS9DO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsR0FBbUI7QUFBQTs7QUFBQSxrQkFFSkMsK0NBQVEsQ0FBQztBQUFDQyxPQUFHLEVBQUMsRUFBTDtBQUFTQyxxQkFBaUIsRUFBQztBQUEzQixHQUFELENBRko7QUFBQSxNQUV2QkMsS0FGdUI7QUFBQSxNQUVoQkMsUUFGZ0I7O0FBQUEsZ0JBSVJDLDRDQUFNLENBQUNGLEtBQUssQ0FBQ0YsR0FBUDtBQUFBLHlQQUFZLGlCQUFPSyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUVoQyxDQUFDSCxLQUFLLENBQUNGLEdBQVAsSUFBYyxDQUFDRSxLQUFLLENBQUNELGlCQUZXO0FBQUE7QUFBQTtBQUFBOztBQUFBLCtDQUVlO0FBQUNLLHNCQUFNLEVBQUM7QUFBUixlQUZm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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUYscUNBQXFDLFVBQVUsS0FBSyxLQUFLLGtDQUFrQztBQUM1Syx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNB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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9FQUFvRTs7QUFFcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZTs7QUFFZix3QkFBd0IsaUJBQWlCOzs7QUFHekM7QUFDQSx3QkFBd0I7O0FBRXhCLDJCQUEyQjtBQUMzQjtBQUNBOztBQUVBLCtCQUErQjs7QUFFL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUI7O0FBRXZCOztBQUVBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLHNJQUFzSSx5Q0FBeUM7QUFDL0s7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsV0FBVyxpQkFBaUI7QUFDNUIsV0FBVyxFQUFFO0FBQ2IsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLFlBQVksT0FBTztBQUNuQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxXQUFXLGlCQUFpQjtBQUM1QixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLGFBQWE7QUFDekI7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEhBQTBIO0FBQzFIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUVBQW1FOztBQUVuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLEVBQUU7QUFDYjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMERBQTBEO0FBQzFEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxX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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxLQUFLO0FBQ0wsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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QUF5QywwQkFBMEI7QUFDbkU7O0FBRUE7O0FBRWtGIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcGFnZXMvUTIvbW92aWVzMzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXMzMygpe1xyXG5cclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe3VybDonJywgdGl0bGVTZWFyY2hTdHJpbmc6Jyd9KVxyXG5cclxuICAgIGNvbnN0IHtkYXRhLCBlcnJvcn0gPSB1c2VTV1Ioc3RhdGUudXJsLCBhc3luYyAodSkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoIXN0YXRlLnVybCB8fCAhc3RhdGUudGl0bGVTZWFyY2hTdHJpbmcpIHJldHVybiB7U2VhcmNoOicnfVxyXG5cclxuICAgICAgICBpZiAoc3RhdGUudXJsID09PSAnJyB8fCBzdGF0ZS50aXRsZVNlYXJjaFN0cmluZyA9PT0nJykgcmV0dXJuIHtTZWFyY2g6Jyd9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3N0YXRlLnVybH0vP2FwaUtleT01YzY1ODI5MSZzPSR7c3RhdGUudGl0bGVTZWFyY2hTdHJpbmd9YClcclxuXHJcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBqc29uO1xyXG5cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3Qgb25DbGlja0hhbmRsZXIgPSBlID0+IHtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgIGxldCBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlU2VhcmNoU3RyaW5nJykudmFsdWVcclxuXHJcbiAgICAgICAgaWYgKHN0YXRlLnVybCA9PT0gJycpIHtcclxuXHJcbiAgICAgICAgICAgIHNldFN0YXRlKHt1cmw6J2h0dHA6Ly93d3cub21kYmFwaS5jb20nLHRpdGxlU2VhcmNoU3RyaW5nOnN9KVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Ugc2V0U3RhdGUoe3VybDonJyx0aXRsZVNlYXJjaFN0cmluZzogc3RhdGUudGl0bGVTZWFyY2hTdHJpbmd9KVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICA8VGhlRm9ybS8+XHJcblxyXG4gICAgICAgICAgICA8VGhlTGluayB1cmw9e3N0YXRlLnVybH0gaGFuZGxlcj17b25DbGlja0hhbmRsZXJ9IC8+XHJcblxyXG4gICAgICAgICAgICA8VGhlTW92aWVzIGRhdGE9e2RhdGEgPyBkYXRhOiB7U2VhcmNoOicnfSB9IHNob3c9e3N0YXRlLnVybCAhPT0gJyd9IC8+XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRoZU1vdmllcyh7ZGF0YSxzaG93fSl7XHJcblxyXG4gICAgaWYgKCFzaG93KSByZXR1cm4gKDxkaXY+PC9kaXY+KVxyXG5cclxuICAgIGlmICghZGF0YSkgcmV0dXJuICg8ZGl2PjwvZGl2PilcclxuXHJcbiAgICBpZiAoZGF0YS5lcnJvcikgcmV0dXJuICg8ZGl2PmZhbGhhIG5hIHBlc3F1aXNhPC9kaXY+KVxyXG5cclxuICAgIGlmIChkYXRhLlNlYXJjaCA9PT0gJycgKSByZXR1cm4gKDxkaXY+Y2FycmVnYW5kby4uLjwvZGl2PilcclxuXHJcbiAgICBpZihkYXRhLlJlc3BvbnNlID09ICdGYWxzZScpIHJldHVybiAoPGRpdj5QZXNxdWlzYSBOw6NvIGVuY29udHJhZGEsIHRlbnRlIG5vdmFtZW50ZS48L2Rpdj4pXHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgIHsgZGF0YS5TZWFyY2gubWFwKCAobSkgPT4gPGRpdiBrZXk9e20uaW1kYklEfT57bS5UaXRsZX0gLS0tIHttLlllYXJ9PC9kaXY+ICApIH0gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG5cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gVGhlRm9ybSh7ZmlsdHJvLCB1cmwsIGFjYW99KXtcclxuXHJcbiAgICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIHdhdGNoLCBmb3JtU3RhdGU6IHsgZXJyb3JzIH0gfSA9IHVzZUZvcm0oKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Zm9ybSAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChhY2FvKX0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlU2VhcmNoU3RyaW5nXCI+e2ZpbHRyb308L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidGl0bGVTZWFyY2hTdHJpbmdcIiB7Li4ucmVnaXN0ZXIoXCJ0aXRsZVNlYXJjaFN0cmluZ1wiLCB7IHJlcXVpcmVkOiB0cnVlLCBtaW5MZW5ndGg6IDN9KX0gdHlwZT1cInRleHRcIiBhdXRvQ29tcGxldGU9XCJ0cnVlXCIvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPnt1cmwgPT09ICcnID8gJ01vc3RyYXInIDogJ09jdWx0YXInfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAge2Vycm9ycy50aXRsZVNlYXJjaFN0cmluZyAmJiA8c3Bhbj5JbnNpcmEgbm8gbcOtbmltbyB0csOqcyBjYXJhY3RlcmVzICAgPC9zcGFuPn1cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBUaGVMaW5rKHt1cmwsIGhhbmRsZXJ9KXtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9tb3ZpZXMzLmpzXCIgb25DbGljaz17aGFuZGxlcn0+IHt1cmwgPT09ICcnID8gJ01vc3RyYXInIDogJ09jdWx0YXInfSA8L2E+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxuXHJcbn0iLCJcInVzZSBzdHJpY3RcIjt2YXIgYXNzaWduPU9iamVjdC5hc3NpZ24uYmluZChPYmplY3QpO21vZHVsZS5leHBvcnRzPWFzc2lnbjttb2R1bGUuZXhwb3J0cy5kZWZhdWx0PW1vZHVsZS5leHBvcnRzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b2JqZWN0LWFzc2lnbi5qcy5tYXAiLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL1EyL21vdmllczMzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcSFBcXFxccmVjZWl0YTZcXFxccGFnZXNcXFxcUTJcXFxcbW92aWVzMzMuanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnZhciBpc0NoZWNrQm94SW5wdXQgPSAoZWxlbWVudCkgPT4gZWxlbWVudC50eXBlID09PSAnY2hlY2tib3gnO1xuXG52YXIgaXNEYXRlT2JqZWN0ID0gKHZhbHVlKSA9PiB2YWx1ZSBpbnN0YW5jZW9mIERhdGU7XG5cbnZhciBpc051bGxPclVuZGVmaW5lZCA9ICh2YWx1ZSkgPT4gdmFsdWUgPT0gbnVsbDtcblxuY29uc3QgaXNPYmplY3RUeXBlID0gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnO1xyXG52YXIgaXNPYmplY3QgPSAodmFsdWUpID0+ICFpc051bGxPclVuZGVmaW5lZCh2YWx1ZSkgJiZcclxuICAgICFBcnJheS5pc0FycmF5KHZhbHVlKSAmJlxyXG4gICAgaXNPYmplY3RUeXBlKHZhbHVlKSAmJlxyXG4gICAgIWlzRGF0ZU9iamVjdCh2YWx1ZSk7XG5cbnZhciBnZXRFdmVudFZhbHVlID0gKGV2ZW50KSA9PiBpc09iamVjdChldmVudCkgJiYgZXZlbnQudGFyZ2V0XHJcbiAgICA/IGlzQ2hlY2tCb3hJbnB1dChldmVudC50YXJnZXQpXHJcbiAgICAgICAgPyBldmVudC50YXJnZXQuY2hlY2tlZFxyXG4gICAgICAgIDogZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICA6IGV2ZW50O1xuXG52YXIgZ2V0Tm9kZVBhcmVudE5hbWUgPSAobmFtZSkgPT4gbmFtZS5zdWJzdHJpbmcoMCwgbmFtZS5zZWFyY2goLy5cXGQvKSkgfHwgbmFtZTtcblxudmFyIGlzTmFtZUluRmllbGRBcnJheSA9IChuYW1lcywgbmFtZSkgPT4gWy4uLm5hbWVzXS5zb21lKChjdXJyZW50KSA9PiBnZXROb2RlUGFyZW50TmFtZShuYW1lKSA9PT0gY3VycmVudCk7XG5cbnZhciBjb21wYWN0ID0gKHZhbHVlKSA9PiB2YWx1ZS5maWx0ZXIoQm9vbGVhbik7XG5cbnZhciBpc1VuZGVmaW5lZCA9ICh2YWwpID0+IHZhbCA9PT0gdW5kZWZpbmVkO1xuXG52YXIgZ2V0ID0gKG9iaiwgcGF0aCwgZGVmYXVsdFZhbHVlKSA9PiB7XHJcbiAgICBpZiAoIXBhdGggfHwgIWlzT2JqZWN0KG9iaikpIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0ID0gY29tcGFjdChwYXRoLnNwbGl0KC9bLFtcXF0uXSs/LykpLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IGlzTnVsbE9yVW5kZWZpbmVkKHJlc3VsdCkgPyByZXN1bHQgOiByZXN1bHRba2V5XSwgb2JqKTtcclxuICAgIHJldHVybiBpc1VuZGVmaW5lZChyZXN1bHQpIHx8IHJlc3VsdCA9PT0gb2JqXHJcbiAgICAgICAgPyBpc1VuZGVmaW5lZChvYmpbcGF0aF0pXHJcbiAgICAgICAgICAgID8gZGVmYXVsdFZhbHVlXHJcbiAgICAgICAgICAgIDogb2JqW3BhdGhdXHJcbiAgICAgICAgOiByZXN1bHQ7XHJcbn07XG5cbmNvbnN0IEVWRU5UUyA9IHtcclxuICAgIEJMVVI6ICdibHVyJyxcclxuICAgIEZPQ1VTX09VVDogJ2ZvY3Vzb3V0JyxcclxuICAgIENIQU5HRTogJ2NoYW5nZScsXHJcbn07XHJcbmNvbnN0IFZBTElEQVRJT05fTU9ERSA9IHtcclxuICAgIG9uQmx1cjogJ29uQmx1cicsXHJcbiAgICBvbkNoYW5nZTogJ29uQ2hhbmdlJyxcclxuICAgIG9uU3VibWl0OiAnb25TdWJtaXQnLFxyXG4gICAgb25Ub3VjaGVkOiAnb25Ub3VjaGVkJyxcclxuICAgIGFsbDogJ2FsbCcsXHJcbn07XHJcbmNvbnN0IElOUFVUX1ZBTElEQVRJT05fUlVMRVMgPSB7XHJcbiAgICBtYXg6ICdtYXgnLFxyXG4gICAgbWluOiAnbWluJyxcclxuICAgIG1heExlbmd0aDogJ21heExlbmd0aCcsXHJcbiAgICBtaW5MZW5ndGg6ICdtaW5MZW5ndGgnLFxyXG4gICAgcGF0dGVybjogJ3BhdHRlcm4nLFxyXG4gICAgcmVxdWlyZWQ6ICdyZXF1aXJlZCcsXHJcbiAgICB2YWxpZGF0ZTogJ3ZhbGlkYXRlJyxcclxufTtcblxudmFyIG9taXQgPSAoc291cmNlLCBrZXkpID0+IHtcclxuICAgIGNvbnN0IGNvcHkgPSBPYmplY3QuYXNzaWduKHt9LCBzb3VyY2UpO1xyXG4gICAgZGVsZXRlIGNvcHlba2V5XTtcclxuICAgIHJldHVybiBjb3B5O1xyXG59O1xuXG5jb25zdCBIb29rRm9ybUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xyXG4vKipcclxuICogVGhpcyBjdXN0b20gaG9vayBhbGxvd3MgeW91IHRvIGFjY2VzcyB0aGUgZm9ybSBjb250ZXh0LiB1c2VGb3JtQ29udGV4dCBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIGluIGRlZXBseSBuZXN0ZWQgc3RydWN0dXJlcywgd2hlcmUgaXQgd291bGQgYmVjb21lIGluY29udmVuaWVudCB0byBwYXNzIHRoZSBjb250ZXh0IGFzIGEgcHJvcC4gVG8gYmUgdXNlZCB3aXRoIHtAbGluayBGb3JtUHJvdmlkZXJ9LlxyXG4gKlxyXG4gKiBAcmVtYXJrc1xyXG4gKiBbQVBJXShodHRwczovL3JlYWN0LWhvb2stZm9ybS5jb20vYXBpL3VzZWZvcm1jb250ZXh0KSDigKIgW0RlbW9dKGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9yZWFjdC1ob29rLWZvcm0tdjctZm9ybS1jb250ZXh0LXl0dWRpKVxyXG4gKlxyXG4gKiBAcmV0dXJucyByZXR1cm4gYWxsIHVzZUZvcm0gbWV0aG9kc1xyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBgYGB0c3hcclxuICogZnVuY3Rpb24gQXBwKCkge1xyXG4gKiAgIGNvbnN0IG1ldGhvZHMgPSB1c2VGb3JtKCk7XHJcbiAqICAgY29uc3Qgb25TdWJtaXQgPSBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gKlxyXG4gKiAgIHJldHVybiAoXHJcbiAqICAgICA8Rm9ybVByb3ZpZGVyIHsuLi5tZXRob2RzfSA+XHJcbiAqICAgICAgIDxmb3JtIG9uU3VibWl0PXttZXRob2RzLmhhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG4gKiAgICAgICAgIDxOZXN0ZWRJbnB1dCAvPlxyXG4gKiAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgLz5cclxuICogICAgICAgPC9mb3JtPlxyXG4gKiAgICAgPC9Gb3JtUHJvdmlkZXI+XHJcbiAqICAgKTtcclxuICogfVxyXG4gKlxyXG4gKiAgZnVuY3Rpb24gTmVzdGVkSW5wdXQoKSB7XHJcbiAqICAgY29uc3QgeyByZWdpc3RlciB9ID0gdXNlRm9ybUNvbnRleHQoKTsgLy8gcmV0cmlldmUgYWxsIGhvb2sgbWV0aG9kc1xyXG4gKiAgIHJldHVybiA8aW5wdXQgey4uLnJlZ2lzdGVyKFwidGVzdFwiKX0gLz47XHJcbiAqIH1cclxuICogYGBgXHJcbiAqL1xyXG5jb25zdCB1c2VGb3JtQ29udGV4dCA9ICgpID0+IFJlYWN0LnVzZUNvbnRleHQoSG9va0Zvcm1Db250ZXh0KTtcclxuLyoqXHJcbiAqIEEgcHJvdmlkZXIgY29tcG9uZW50IHRoYXQgcHJvcGFnYXRlcyB0aGUgYHVzZUZvcm1gIG1ldGhvZHMgdG8gYWxsIGNoaWxkcmVuIGNvbXBvbmVudHMgdmlhIFtSZWFjdCBDb250ZXh0XShodHRwczovL3JlYWN0anMub3JnL2RvY3MvY29udGV4dC5odG1sKSBBUEkuIFRvIGJlIHVzZWQgd2l0aCB7QGxpbmsgdXNlRm9ybUNvbnRleHR9LlxyXG4gKlxyXG4gKiBAcmVtYXJrc1xyXG4gKiBbQVBJXShodHRwczovL3JlYWN0LWhvb2stZm9ybS5jb20vYXBpL3VzZWZvcm1jb250ZXh0KSDigKIgW0RlbW9dKGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9yZWFjdC1ob29rLWZvcm0tdjctZm9ybS1jb250ZXh0LXl0dWRpKVxyXG4gKlxyXG4gKiBAcGFyYW0gcHJvcHMgLSBhbGwgdXNlRnJvbSBtZXRob2RzXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIGBgYHRzeFxyXG4gKiBmdW5jdGlvbiBBcHAoKSB7XHJcbiAqICAgY29uc3QgbWV0aG9kcyA9IHVzZUZvcm0oKTtcclxuICogICBjb25zdCBvblN1Ym1pdCA9IGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSk7XHJcbiAqXHJcbiAqICAgcmV0dXJuIChcclxuICogICAgIDxGb3JtUHJvdmlkZXIgey4uLm1ldGhvZHN9ID5cclxuICogICAgICAgPGZvcm0gb25TdWJtaXQ9e21ldGhvZHMuaGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcbiAqICAgICAgICAgPE5lc3RlZElucHV0IC8+XHJcbiAqICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiAvPlxyXG4gKiAgICAgICA8L2Zvcm0+XHJcbiAqICAgICA8L0Zvcm1Qcm92aWRlcj5cclxuICogICApO1xyXG4gKiB9XHJcbiAqXHJcbiAqICBmdW5jdGlvbiBOZXN0ZWRJbnB1dCgpIHtcclxuICogICBjb25zdCB7IHJlZ2lzdGVyIH0gPSB1c2VGb3JtQ29udGV4dCgpOyAvLyByZXRyaWV2ZSBhbGwgaG9vayBtZXRob2RzXHJcbiAqICAgcmV0dXJuIDxpbnB1dCB7Li4ucmVnaXN0ZXIoXCJ0ZXN0XCIpfSAvPjtcclxuICogfVxyXG4gKiBgYGBcclxuICovXHJcbmNvbnN0IEZvcm1Qcm92aWRlciA9IChwcm9wcykgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoSG9va0Zvcm1Db250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBvbWl0KHByb3BzLCAnY2hpbGRyZW4nKSB9LCBwcm9wcy5jaGlsZHJlbikpO1xuXG52YXIgZ2V0UHJveHlGb3JtU3RhdGUgPSAoZm9ybVN0YXRlLCBfcHJveHlGb3JtU3RhdGUsIGxvY2FsUHJveHlGb3JtU3RhdGUsIGlzUm9vdCA9IHRydWUpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZm9ybVN0YXRlKSB7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlc3VsdCwga2V5LCB7XHJcbiAgICAgICAgICAgIGdldDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgX2tleSA9IGtleTtcclxuICAgICAgICAgICAgICAgIGlmIChfcHJveHlGb3JtU3RhdGVbX2tleV0gIT09IFZBTElEQVRJT05fTU9ERS5hbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBfcHJveHlGb3JtU3RhdGVbX2tleV0gPSAhaXNSb290IHx8IFZBTElEQVRJT05fTU9ERS5hbGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsb2NhbFByb3h5Rm9ybVN0YXRlICYmIChsb2NhbFByb3h5Rm9ybVN0YXRlW19rZXldID0gdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ybVN0YXRlW19rZXldO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcblxudmFyIGlzRW1wdHlPYmplY3QgPSAodmFsdWUpID0+IGlzT2JqZWN0KHZhbHVlKSAmJiAhT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aDtcblxudmFyIHNob3VsZFJlbmRlckZvcm1TdGF0ZSA9IChmb3JtU3RhdGVEYXRhLCBfcHJveHlGb3JtU3RhdGUsIGlzUm9vdCkgPT4ge1xyXG4gICAgY29uc3QgZm9ybVN0YXRlID0gb21pdChmb3JtU3RhdGVEYXRhLCAnbmFtZScpO1xyXG4gICAgcmV0dXJuIChpc0VtcHR5T2JqZWN0KGZvcm1TdGF0ZSkgfHxcclxuICAgICAgICBPYmplY3Qua2V5cyhmb3JtU3RhdGUpLmxlbmd0aCA+PSBPYmplY3Qua2V5cyhfcHJveHlGb3JtU3RhdGUpLmxlbmd0aCB8fFxyXG4gICAgICAgIE9iamVjdC5rZXlzKGZvcm1TdGF0ZSkuZmluZCgoa2V5KSA9PiBfcHJveHlGb3JtU3RhdGVba2V5XSA9PT1cclxuICAgICAgICAgICAgKCFpc1Jvb3QgfHwgVkFMSURBVElPTl9NT0RFLmFsbCkpKTtcclxufTtcblxudmFyIGNvbnZlcnRUb0FycmF5UGF5bG9hZCA9ICh2YWx1ZSkgPT4gKEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdKTtcblxudmFyIHNob3VsZFN1YnNjcmliZUJ5TmFtZSA9IChuYW1lLCBzaWduYWxOYW1lLCBleGFjdCkgPT4gZXhhY3QgJiYgc2lnbmFsTmFtZVxyXG4gICAgPyBuYW1lID09PSBzaWduYWxOYW1lXHJcbiAgICA6ICFuYW1lIHx8XHJcbiAgICAgICAgIXNpZ25hbE5hbWUgfHxcclxuICAgICAgICBuYW1lID09PSBzaWduYWxOYW1lIHx8XHJcbiAgICAgICAgY29udmVydFRvQXJyYXlQYXlsb2FkKG5hbWUpLnNvbWUoKGN1cnJlbnROYW1lKSA9PiBjdXJyZW50TmFtZSAmJlxyXG4gICAgICAgICAgICAoY3VycmVudE5hbWUuc3RhcnRzV2l0aChzaWduYWxOYW1lKSB8fFxyXG4gICAgICAgICAgICAgICAgc2lnbmFsTmFtZS5zdGFydHNXaXRoKGN1cnJlbnROYW1lKSkpO1xuXG5mdW5jdGlvbiB1c2VTdWJzY3JpYmUocHJvcHMpIHtcclxuICAgIGNvbnN0IF9wcm9wcyA9IFJlYWN0LnVzZVJlZihwcm9wcyk7XHJcbiAgICBfcHJvcHMuY3VycmVudCA9IHByb3BzO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB0ZWFyRG93biA9IChzdWJzY3JpcHRpb24pID0+IHtcclxuICAgICAgICAgICAgaWYgKHN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9ICFwcm9wcy5kaXNhYmxlZCAmJlxyXG4gICAgICAgICAgICBfcHJvcHMuY3VycmVudC5zdWJqZWN0LnN1YnNjcmliZSh7XHJcbiAgICAgICAgICAgICAgICBuZXh0OiBfcHJvcHMuY3VycmVudC5jYWxsYmFjayxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHRlYXJEb3duKHN1YnNjcmlwdGlvbik7XHJcbiAgICB9LCBbcHJvcHMuZGlzYWJsZWRdKTtcclxufVxuXG4vKipcclxuICogVGhpcyBjdXN0b20gaG9vayBhbGxvd3MgeW91IHRvIHN1YnNjcmliZSB0byBlYWNoIGZvcm0gc3RhdGUsIGFuZCBpc29sYXRlIHRoZSByZS1yZW5kZXIgYXQgdGhlIGN1c3RvbSBob29rIGxldmVsLiBJdCBoYXMgaXRzIHNjb3BlIGluIHRlcm1zIG9mIGZvcm0gc3RhdGUgc3Vic2NyaXB0aW9uLCBzbyBpdCB3b3VsZCBub3QgYWZmZWN0IG90aGVyIHVzZUZvcm1TdGF0ZSBhbmQgdXNlRm9ybS4gVXNpbmcgdGhpcyBob29rIGNhbiByZWR1Y2UgdGhlIHJlLXJlbmRlciBpbXBhY3Qgb24gbGFyZ2UgYW5kIGNvbXBsZXggZm9ybSBhcHBsaWNhdGlvbi5cclxuICpcclxuICogQHJlbWFya3NcclxuICogW0FQSV0oaHR0cHM6Ly9yZWFjdC1ob29rLWZvcm0uY29tL2FwaS91c2Vmb3Jtc3RhdGUpIOKAoiBbRGVtb10oaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zL3VzZWZvcm1zdGF0ZS03NXhseSlcclxuICpcclxuICogQHBhcmFtIHByb3BzIC0gaW5jbHVkZSBvcHRpb25zIG9uIHNwZWNpZnkgZmllbGRzIHRvIHN1YnNjcmliZS4ge0BsaW5rIFVzZUZvcm1TdGF0ZVJldHVybn1cclxuICpcclxuICogQGV4YW1wbGVcclxuICogYGBgdHN4XHJcbiAqIGZ1bmN0aW9uIEFwcCgpIHtcclxuICogICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGNvbnRyb2wgfSA9IHVzZUZvcm0oe1xyXG4gKiAgICAgZGVmYXVsdFZhbHVlczoge1xyXG4gKiAgICAgZmlyc3ROYW1lOiBcImZpcnN0TmFtZVwiXHJcbiAqICAgfX0pO1xyXG4gKiAgIGNvbnN0IHsgZGlydHlGaWVsZHMgfSA9IHVzZUZvcm1TdGF0ZSh7XHJcbiAqICAgICBjb250cm9sXHJcbiAqICAgfSk7XHJcbiAqICAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YSkgPT4gY29uc29sZS5sb2coZGF0YSk7XHJcbiAqXHJcbiAqICAgcmV0dXJuIChcclxuICogICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuICogICAgICAgPGlucHV0IHsuLi5yZWdpc3RlcihcImZpcnN0TmFtZVwiKX0gcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCIgLz5cclxuICogICAgICAge2RpcnR5RmllbGRzLmZpcnN0TmFtZSAmJiA8cD5GaWVsZCBpcyBkaXJ0eS48L3A+fVxyXG4gKiAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIC8+XHJcbiAqICAgICA8L2Zvcm0+XHJcbiAqICAgKTtcclxuICogfVxyXG4gKiBgYGBcclxuICovXHJcbmZ1bmN0aW9uIHVzZUZvcm1TdGF0ZShwcm9wcykge1xyXG4gICAgY29uc3QgbWV0aG9kcyA9IHVzZUZvcm1Db250ZXh0KCk7XHJcbiAgICBjb25zdCB7IGNvbnRyb2wgPSBtZXRob2RzLmNvbnRyb2wsIGRpc2FibGVkLCBuYW1lLCBleGFjdCB9ID0gcHJvcHMgfHwge307XHJcbiAgICBjb25zdCBbZm9ybVN0YXRlLCB1cGRhdGVGb3JtU3RhdGVdID0gUmVhY3QudXNlU3RhdGUoY29udHJvbC5fZm9ybVN0YXRlKTtcclxuICAgIGNvbnN0IF9sb2NhbFByb3h5Rm9ybVN0YXRlID0gUmVhY3QudXNlUmVmKHtcclxuICAgICAgICBpc0RpcnR5OiBmYWxzZSxcclxuICAgICAgICBkaXJ0eUZpZWxkczogZmFsc2UsXHJcbiAgICAgICAgdG91Y2hlZEZpZWxkczogZmFsc2UsXHJcbiAgICAgICAgaXNWYWxpZGF0aW5nOiBmYWxzZSxcclxuICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgICAgICBlcnJvcnM6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBfbmFtZSA9IFJlYWN0LnVzZVJlZihuYW1lKTtcclxuICAgIGNvbnN0IF9tb3VudGVkID0gUmVhY3QudXNlUmVmKHRydWUpO1xyXG4gICAgX25hbWUuY3VycmVudCA9IG5hbWU7XHJcbiAgICBjb25zdCBjYWxsYmFjayA9IFJlYWN0LnVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4gX21vdW50ZWQuY3VycmVudCAmJlxyXG4gICAgICAgIHNob3VsZFN1YnNjcmliZUJ5TmFtZShfbmFtZS5jdXJyZW50LCB2YWx1ZS5uYW1lLCBleGFjdCkgJiZcclxuICAgICAgICBzaG91bGRSZW5kZXJGb3JtU3RhdGUodmFsdWUsIF9sb2NhbFByb3h5Rm9ybVN0YXRlLmN1cnJlbnQpICYmXHJcbiAgICAgICAgdXBkYXRlRm9ybVN0YXRlKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29udHJvbC5fZm9ybVN0YXRlKSwgdmFsdWUpKSwgW2NvbnRyb2wsIGV4YWN0XSk7XHJcbiAgICB1c2VTdWJzY3JpYmUoe1xyXG4gICAgICAgIGRpc2FibGVkLFxyXG4gICAgICAgIGNhbGxiYWNrLFxyXG4gICAgICAgIHN1YmplY3Q6IGNvbnRyb2wuX3N1YmplY3RzLnN0YXRlLFxyXG4gICAgfSk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gKCkgPT4ge1xyXG4gICAgICAgIF9tb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiBnZXRQcm94eUZvcm1TdGF0ZShmb3JtU3RhdGUsIGNvbnRyb2wuX3Byb3h5Rm9ybVN0YXRlLCBfbG9jYWxQcm94eUZvcm1TdGF0ZS5jdXJyZW50LCBmYWxzZSk7XHJcbn1cblxudmFyIGlzU3RyaW5nID0gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xuXG52YXIgZ2VuZXJhdGVXYXRjaE91dHB1dCA9IChuYW1lcywgX25hbWVzLCBmb3JtVmFsdWVzLCBpc0dsb2JhbCkgPT4ge1xyXG4gICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkobmFtZXMpO1xyXG4gICAgaWYgKGlzU3RyaW5nKG5hbWVzKSkge1xyXG4gICAgICAgIGlzR2xvYmFsICYmIF9uYW1lcy53YXRjaC5hZGQobmFtZXMpO1xyXG4gICAgICAgIHJldHVybiBnZXQoZm9ybVZhbHVlcywgbmFtZXMpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzQXJyYXkpIHtcclxuICAgICAgICByZXR1cm4gbmFtZXMubWFwKChmaWVsZE5hbWUpID0+IChpc0dsb2JhbCAmJiBfbmFtZXMud2F0Y2guYWRkKGZpZWxkTmFtZSksXHJcbiAgICAgICAgICAgIGdldChmb3JtVmFsdWVzLCBmaWVsZE5hbWUpKSk7XHJcbiAgICB9XHJcbiAgICBpc0dsb2JhbCAmJiAoX25hbWVzLndhdGNoQWxsID0gdHJ1ZSk7XHJcbiAgICByZXR1cm4gZm9ybVZhbHVlcztcclxufTtcblxudmFyIGlzRnVuY3Rpb24gPSAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcblxudmFyIG9iamVjdEhhc0Z1bmN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcclxuICAgICAgICBpZiAoaXNGdW5jdGlvbihkYXRhW2tleV0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcblxuLyoqXHJcbiAqIEN1c3RvbSBob29rIHRvIHN1YnNjcmliZSB0byBmaWVsZCBjaGFuZ2UgYW5kIGlzb2xhdGUgcmUtcmVuZGVyaW5nIGF0IHRoZSBjb21wb25lbnQgbGV2ZWwuXHJcbiAqXHJcbiAqIEByZW1hcmtzXHJcbiAqXHJcbiAqIFtBUEldKGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkvdXNld2F0Y2gpIOKAoiBbRGVtb10oaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zL3JlYWN0LWhvb2stZm9ybS12Ny10cy11c2V3YXRjaC1oOWk1ZSlcclxuICpcclxuICogQGV4YW1wbGVcclxuICogYGBgdHN4XHJcbiAqIGNvbnN0IHsgd2F0Y2ggfSA9IHVzZUZvcm0oKTtcclxuICogY29uc3QgdmFsdWVzID0gdXNlV2F0Y2goe1xyXG4gKiAgIG5hbWU6IFwiZmllbGROYW1lXCJcclxuICogICBjb250cm9sLFxyXG4gKiB9KVxyXG4gKiBgYGBcclxuICovXHJcbmZ1bmN0aW9uIHVzZVdhdGNoKHByb3BzKSB7XHJcbiAgICBjb25zdCBtZXRob2RzID0gdXNlRm9ybUNvbnRleHQoKTtcclxuICAgIGNvbnN0IHsgY29udHJvbCA9IG1ldGhvZHMuY29udHJvbCwgbmFtZSwgZGVmYXVsdFZhbHVlLCBkaXNhYmxlZCwgZXhhY3QsIH0gPSBwcm9wcyB8fCB7fTtcclxuICAgIGNvbnN0IF9uYW1lID0gUmVhY3QudXNlUmVmKG5hbWUpO1xyXG4gICAgX25hbWUuY3VycmVudCA9IG5hbWU7XHJcbiAgICBjb25zdCBjYWxsYmFjayA9IFJlYWN0LnVzZUNhbGxiYWNrKChmb3JtU3RhdGUpID0+IHtcclxuICAgICAgICBpZiAoc2hvdWxkU3Vic2NyaWJlQnlOYW1lKF9uYW1lLmN1cnJlbnQsIGZvcm1TdGF0ZS5uYW1lLCBleGFjdCkpIHtcclxuICAgICAgICAgICAgY29uc3QgZmllbGRWYWx1ZXMgPSBnZW5lcmF0ZVdhdGNoT3V0cHV0KF9uYW1lLmN1cnJlbnQsIGNvbnRyb2wuX25hbWVzLCBmb3JtU3RhdGUudmFsdWVzIHx8IGNvbnRyb2wuX2Zvcm1WYWx1ZXMpO1xyXG4gICAgICAgICAgICB1cGRhdGVWYWx1ZShpc1VuZGVmaW5lZChfbmFtZS5jdXJyZW50KSB8fFxyXG4gICAgICAgICAgICAgICAgKGlzT2JqZWN0KGZpZWxkVmFsdWVzKSAmJiAhb2JqZWN0SGFzRnVuY3Rpb24oZmllbGRWYWx1ZXMpKVxyXG4gICAgICAgICAgICAgICAgPyBPYmplY3QuYXNzaWduKHt9LCBmaWVsZFZhbHVlcykgOiBBcnJheS5pc0FycmF5KGZpZWxkVmFsdWVzKVxyXG4gICAgICAgICAgICAgICAgPyBbLi4uZmllbGRWYWx1ZXNdXHJcbiAgICAgICAgICAgICAgICA6IGlzVW5kZWZpbmVkKGZpZWxkVmFsdWVzKVxyXG4gICAgICAgICAgICAgICAgICAgID8gZGVmYXVsdFZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgOiBmaWVsZFZhbHVlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2NvbnRyb2wsIGV4YWN0LCBkZWZhdWx0VmFsdWVdKTtcclxuICAgIHVzZVN1YnNjcmliZSh7XHJcbiAgICAgICAgZGlzYWJsZWQsXHJcbiAgICAgICAgc3ViamVjdDogY29udHJvbC5fc3ViamVjdHMud2F0Y2gsXHJcbiAgICAgICAgY2FsbGJhY2ssXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFt2YWx1ZSwgdXBkYXRlVmFsdWVdID0gUmVhY3QudXNlU3RhdGUoaXNVbmRlZmluZWQoZGVmYXVsdFZhbHVlKVxyXG4gICAgICAgID8gY29udHJvbC5fZ2V0V2F0Y2gobmFtZSlcclxuICAgICAgICA6IGRlZmF1bHRWYWx1ZSk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnRyb2wuX3JlbW92ZVVubW91bnRlZCgpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cblxuLyoqXHJcbiAqIEN1c3RvbSBob29rIHRvIHdvcmsgd2l0aCBjb250cm9sbGVkIGNvbXBvbmVudCwgdGhpcyBmdW5jdGlvbiBwcm92aWRlIHlvdSB3aXRoIGJvdGggZm9ybSBhbmQgZmllbGQgbGV2ZWwgc3RhdGUuIFJlLXJlbmRlciBpcyBpc29sYXRlZCBhdCB0aGUgaG9vayBsZXZlbC5cclxuICpcclxuICogQHJlbWFya3NcclxuICogW0FQSV0oaHR0cHM6Ly9yZWFjdC1ob29rLWZvcm0uY29tL2FwaS91c2Vjb250cm9sbGVyKSDigKIgW0RlbW9dKGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy91c2Vjb250cm9sbGVyLTBvOHB4KVxyXG4gKlxyXG4gKiBAcGFyYW0gcHJvcHMgLSB0aGUgcGF0aCBuYW1lIHRvIHRoZSBmb3JtIGZpZWxkIHZhbHVlLCBhbmQgdmFsaWRhdGlvbiBydWxlcy5cclxuICpcclxuICogQHJldHVybnMgZmllbGQgcHJvcGVydGllcywgZmllbGQgYW5kIGZvcm0gc3RhdGUuIHtAbGluayBVc2VDb250cm9sbGVyUmV0dXJufVxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBgYGB0c3hcclxuICogZnVuY3Rpb24gSW5wdXQocHJvcHMpIHtcclxuICogICBjb25zdCB7IGZpZWxkLCBmaWVsZFN0YXRlLCBmb3JtU3RhdGUgfSA9IHVzZUNvbnRyb2xsZXIocHJvcHMpO1xyXG4gKiAgIHJldHVybiAoXHJcbiAqICAgICA8ZGl2PlxyXG4gKiAgICAgICA8aW5wdXQgey4uLmZpZWxkfSBwbGFjZWhvbGRlcj17cHJvcHMubmFtZX0gLz5cclxuICogICAgICAgPHA+e2ZpZWxkU3RhdGUuaXNUb3VjaGVkICYmIFwiVG91Y2hlZFwifTwvcD5cclxuICogICAgICAgPHA+e2Zvcm1TdGF0ZS5pc1N1Ym1pdHRlZCA/IFwic3VibWl0dGVkXCIgOiBcIlwifTwvcD5cclxuICogICAgIDwvZGl2PlxyXG4gKiAgICk7XHJcbiAqIH1cclxuICogYGBgXHJcbiAqL1xyXG5mdW5jdGlvbiB1c2VDb250cm9sbGVyKHByb3BzKSB7XHJcbiAgICBjb25zdCBtZXRob2RzID0gdXNlRm9ybUNvbnRleHQoKTtcclxuICAgIGNvbnN0IHsgbmFtZSwgY29udHJvbCA9IG1ldGhvZHMuY29udHJvbCwgc2hvdWxkVW5yZWdpc3RlciB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBpc0FycmF5RmllbGQgPSBpc05hbWVJbkZpZWxkQXJyYXkoY29udHJvbC5fbmFtZXMuYXJyYXksIG5hbWUpO1xyXG4gICAgY29uc3QgdmFsdWUgPSB1c2VXYXRjaCh7XHJcbiAgICAgICAgY29udHJvbCxcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogZ2V0KGNvbnRyb2wuX2Zvcm1WYWx1ZXMsIG5hbWUsIGdldChjb250cm9sLl9kZWZhdWx0VmFsdWVzLCBuYW1lLCBwcm9wcy5kZWZhdWx0VmFsdWUpKSxcclxuICAgICAgICBleGFjdDogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZm9ybVN0YXRlID0gdXNlRm9ybVN0YXRlKHtcclxuICAgICAgICBjb250cm9sLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IF9yZWdpc3RlclByb3BzID0gUmVhY3QudXNlUmVmKGNvbnRyb2wucmVnaXN0ZXIobmFtZSwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwcm9wcy5ydWxlcyksIHsgdmFsdWUgfSkpKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlTW91bnRlZCA9IChuYW1lLCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IGdldChjb250cm9sLl9maWVsZHMsIG5hbWUpO1xyXG4gICAgICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkLl9mLm1vdW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHVwZGF0ZU1vdW50ZWQobmFtZSwgdHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgX3Nob3VsZFVucmVnaXN0ZXJGaWVsZCA9IGNvbnRyb2wuX29wdGlvbnMuc2hvdWxkVW5yZWdpc3RlciB8fCBzaG91bGRVbnJlZ2lzdGVyO1xyXG4gICAgICAgICAgICAoaXNBcnJheUZpZWxkXHJcbiAgICAgICAgICAgICAgICA/IF9zaG91bGRVbnJlZ2lzdGVyRmllbGQgJiYgIWNvbnRyb2wuX3N0YXRlRmxhZ3MuYWN0aW9uXHJcbiAgICAgICAgICAgICAgICA6IF9zaG91bGRVbnJlZ2lzdGVyRmllbGQpXHJcbiAgICAgICAgICAgICAgICA/IGNvbnRyb2wudW5yZWdpc3RlcihuYW1lKVxyXG4gICAgICAgICAgICAgICAgOiB1cGRhdGVNb3VudGVkKG5hbWUsIGZhbHNlKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW25hbWUsIGNvbnRyb2wsIGlzQXJyYXlGaWVsZCwgc2hvdWxkVW5yZWdpc3Rlcl0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmaWVsZDoge1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgb25DaGFuZ2U6IFJlYWN0LnVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgX3JlZ2lzdGVyUHJvcHMuY3VycmVudC5vbkNoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBnZXRFdmVudFZhbHVlKGV2ZW50KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEVWRU5UUy5DSEFOR0UsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgW25hbWVdKSxcclxuICAgICAgICAgICAgb25CbHVyOiBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBfcmVnaXN0ZXJQcm9wcy5jdXJyZW50Lm9uQmx1cih7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBnZXQoY29udHJvbC5fZm9ybVZhbHVlcywgbmFtZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBFVkVOVFMuQkxVUixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCBbbmFtZSwgY29udHJvbF0pLFxyXG4gICAgICAgICAgICByZWY6IFJlYWN0LnVzZUNhbGxiYWNrKChlbG0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZ2V0KGNvbnRyb2wuX2ZpZWxkcywgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxtICYmIGZpZWxkICYmIGVsbS5mb2N1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLl9mLnJlZiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6ICgpID0+IGVsbS5mb2N1cygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXN0b21WYWxpZGl0eTogKG1lc3NhZ2UpID0+IGVsbS5zZXRDdXN0b21WYWxpZGl0eShtZXNzYWdlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwb3J0VmFsaWRpdHk6ICgpID0+IGVsbS5yZXBvcnRWYWxpZGl0eSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIFtuYW1lLCBjb250cm9sLl9maWVsZHNdKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZvcm1TdGF0ZSxcclxuICAgICAgICBmaWVsZFN0YXRlOiBjb250cm9sLmdldEZpZWxkU3RhdGUobmFtZSwgZm9ybVN0YXRlKSxcclxuICAgIH07XHJcbn1cblxuLyoqXHJcbiAqIENvbXBvbmVudCBiYXNlZCBvbiBgdXNlQ29udHJvbGxlcmAgaG9vayB0byB3b3JrIHdpdGggY29udHJvbGxlZCBjb21wb25lbnQuXHJcbiAqXHJcbiAqIEByZW1hcmtzXHJcbiAqIFtBUEldKGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkvdXNlY29udHJvbGxlci9jb250cm9sbGVyKSDigKIgW0RlbW9dKGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9yZWFjdC1ob29rLWZvcm0tdjYtY29udHJvbGxlci10cy1qd3l6dykg4oCiIFtWaWRlb10oaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1OMlVOa19VQ1Z5QSlcclxuICpcclxuICogQHBhcmFtIHByb3BzIC0gdGhlIHBhdGggbmFtZSB0byB0aGUgZm9ybSBmaWVsZCB2YWx1ZSwgYW5kIHZhbGlkYXRpb24gcnVsZXMuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHByb3ZpZGUgZmllbGQgaGFuZGxlciBmdW5jdGlvbnMsIGZpZWxkIGFuZCBmb3JtIHN0YXRlLlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBgYGB0c3hcclxuICogZnVuY3Rpb24gQXBwKCkge1xyXG4gKiAgIGNvbnN0IHsgY29udHJvbCB9ID0gdXNlRm9ybTxGb3JtVmFsdWVzPih7XHJcbiAqICAgICBkZWZhdWx0VmFsdWVzOiB7XHJcbiAqICAgICAgIHRlc3Q6IFwiXCJcclxuICogICAgIH1cclxuICogICB9KTtcclxuICpcclxuICogICByZXR1cm4gKFxyXG4gKiAgICAgPGZvcm0+XHJcbiAqICAgICAgIDxDb250cm9sbGVyXHJcbiAqICAgICAgICAgY29udHJvbD17Y29udHJvbH1cclxuICogICAgICAgICBuYW1lPVwidGVzdFwiXHJcbiAqICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyBvbkNoYW5nZSwgb25CbHVyLCB2YWx1ZSwgcmVmIH0sIGZvcm1TdGF0ZSwgZmllbGRTdGF0ZSB9KSA9PiAoXHJcbiAqICAgICAgICAgICA8PlxyXG4gKiAgICAgICAgICAgICA8aW5wdXRcclxuICogICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9IC8vIHNlbmQgdmFsdWUgdG8gaG9vayBmb3JtXHJcbiAqICAgICAgICAgICAgICAgb25CbHVyPXtvbkJsdXJ9IC8vIG5vdGlmeSB3aGVuIGlucHV0IGlzIHRvdWNoZWRcclxuICogICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9IC8vIHJldHVybiB1cGRhdGVkIHZhbHVlXHJcbiAqICAgICAgICAgICAgICAgcmVmPXtyZWZ9IC8vIHNldCByZWYgZm9yIGZvY3VzIG1hbmFnZW1lbnRcclxuICogICAgICAgICAgICAgLz5cclxuICogICAgICAgICAgICAgPHA+e2Zvcm1TdGF0ZS5pc1N1Ym1pdHRlZCA/IFwic3VibWl0dGVkXCIgOiBcIlwifTwvcD5cclxuICogICAgICAgICAgICAgPHA+e2ZpZWxkU3RhdGUuaXNUb3VjaGVkID8gXCJ0b3VjaGVkXCIgOiBcIlwifTwvcD5cclxuICogICAgICAgICAgIDwvPlxyXG4gKiAgICAgICAgICl9XHJcbiAqICAgICAgIC8+XHJcbiAqICAgICA8L2Zvcm0+XHJcbiAqICAgKTtcclxuICogfVxyXG4gKiBgYGBcclxuICovXHJcbmNvbnN0IENvbnRyb2xsZXIgPSAocHJvcHMpID0+IHByb3BzLnJlbmRlcih1c2VDb250cm9sbGVyKHByb3BzKSk7XG5cbnZhciBhcHBlbmRFcnJvcnMgPSAobmFtZSwgdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhLCBlcnJvcnMsIHR5cGUsIG1lc3NhZ2UpID0+IHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYVxyXG4gICAgPyBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGVycm9yc1tuYW1lXSksIHsgdHlwZXM6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgKGVycm9yc1tuYW1lXSAmJiBlcnJvcnNbbmFtZV0udHlwZXMgPyBlcnJvcnNbbmFtZV0udHlwZXMgOiB7fSkpLCB7IFt0eXBlXTogbWVzc2FnZSB8fCB0cnVlIH0pIH0pIDoge307XG5cbnZhciBpc0tleSA9ICh2YWx1ZSkgPT4gL15cXHcqJC8udGVzdCh2YWx1ZSk7XG5cbnZhciBzdHJpbmdUb1BhdGggPSAoaW5wdXQpID0+IGNvbXBhY3QoaW5wdXQucmVwbGFjZSgvW1wifCddfFxcXS9nLCAnJykuc3BsaXQoL1xcLnxcXFsvKSk7XG5cbmZ1bmN0aW9uIHNldChvYmplY3QsIHBhdGgsIHZhbHVlKSB7XHJcbiAgICBsZXQgaW5kZXggPSAtMTtcclxuICAgIGNvbnN0IHRlbXBQYXRoID0gaXNLZXkocGF0aCkgPyBbcGF0aF0gOiBzdHJpbmdUb1BhdGgocGF0aCk7XHJcbiAgICBjb25zdCBsZW5ndGggPSB0ZW1wUGF0aC5sZW5ndGg7XHJcbiAgICBjb25zdCBsYXN0SW5kZXggPSBsZW5ndGggLSAxO1xyXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBrZXkgPSB0ZW1wUGF0aFtpbmRleF07XHJcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSBsYXN0SW5kZXgpIHtcclxuICAgICAgICAgICAgY29uc3Qgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcclxuICAgICAgICAgICAgbmV3VmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgaXNPYmplY3Qob2JqVmFsdWUpIHx8IEFycmF5LmlzQXJyYXkob2JqVmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBvYmpWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogIWlzTmFOKCt0ZW1wUGF0aFtpbmRleCArIDFdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDoge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9iamVjdFtrZXldID0gbmV3VmFsdWU7XHJcbiAgICAgICAgb2JqZWN0ID0gb2JqZWN0W2tleV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2JqZWN0O1xyXG59XG5cbmNvbnN0IGZvY3VzRmllbGRCeSA9IChmaWVsZHMsIGNhbGxiYWNrLCBmaWVsZHNOYW1lcykgPT4ge1xyXG4gICAgZm9yIChjb25zdCBrZXkgb2YgZmllbGRzTmFtZXMgfHwgT2JqZWN0LmtleXMoZmllbGRzKSkge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gZ2V0KGZpZWxkcywga2V5KTtcclxuICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgY29uc3QgX2YgPSBmaWVsZC5fZjtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IG9taXQoZmllbGQsICdfZicpO1xyXG4gICAgICAgICAgICBpZiAoX2YgJiYgY2FsbGJhY2soX2YubmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfZi5yZWYuZm9jdXMgJiYgaXNVbmRlZmluZWQoX2YucmVmLmZvY3VzKCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChfZi5yZWZzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX2YucmVmc1swXS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzT2JqZWN0KGN1cnJlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBmb2N1c0ZpZWxkQnkoY3VycmVudCwgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xuXG52YXIgZ2VuZXJhdGVJZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGQgPSB0eXBlb2YgcGVyZm9ybWFuY2UgPT09ICd1bmRlZmluZWQnID8gRGF0ZS5ub3coKSA6IHBlcmZvcm1hbmNlLm5vdygpICogMTAwMDtcclxuICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIChjKSA9PiB7XHJcbiAgICAgICAgY29uc3QgciA9IChNYXRoLnJhbmRvbSgpICogMTYgKyBkKSAlIDE2IHwgMDtcclxuICAgICAgICByZXR1cm4gKGMgPT0gJ3gnID8gciA6IChyICYgMHgzKSB8IDB4OCkudG9TdHJpbmcoMTYpO1xyXG4gICAgfSk7XHJcbn07XG5cbnZhciBnZXRGb2N1c0ZpZWxkTmFtZSA9IChuYW1lLCBpbmRleCwgb3B0aW9ucyA9IHt9KSA9PiBvcHRpb25zLnNob3VsZEZvY3VzIHx8IGlzVW5kZWZpbmVkKG9wdGlvbnMuc2hvdWxkRm9jdXMpXHJcbiAgICA/IG9wdGlvbnMuZm9jdXNOYW1lIHx8XHJcbiAgICAgICAgYCR7bmFtZX0uJHtpc1VuZGVmaW5lZChvcHRpb25zLmZvY3VzSW5kZXgpID8gaW5kZXggOiBvcHRpb25zLmZvY3VzSW5kZXh9LmBcclxuICAgIDogJyc7XG5cbnZhciBpc1dhdGNoZWQgPSAobmFtZSwgX25hbWVzLCBpc0JsdXJFdmVudCkgPT4gIWlzQmx1ckV2ZW50ICYmXHJcbiAgICAoX25hbWVzLndhdGNoQWxsIHx8XHJcbiAgICAgICAgX25hbWVzLndhdGNoLmhhcyhuYW1lKSB8fFxyXG4gICAgICAgIFsuLi5fbmFtZXMud2F0Y2hdLnNvbWUoKHdhdGNoTmFtZSkgPT4gbmFtZS5zdGFydHNXaXRoKHdhdGNoTmFtZSkgJiZcclxuICAgICAgICAgICAgL15cXC5cXHcrLy50ZXN0KG5hbWUuc2xpY2Uod2F0Y2hOYW1lLmxlbmd0aCkpKSk7XG5cbmZ1bmN0aW9uIGFwcGVuZChkYXRhLCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuIFsuLi5kYXRhLCAuLi5jb252ZXJ0VG9BcnJheVBheWxvYWQodmFsdWUpXTtcclxufVxuXG5mdW5jdGlvbiBjbG9uZU9iamVjdChkYXRhKSB7XHJcbiAgICBsZXQgY29weTtcclxuICAgIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGRhdGEpO1xyXG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgY29weSA9IG5ldyBEYXRlKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZGF0YSBpbnN0YW5jZW9mIFNldCkge1xyXG4gICAgICAgIGNvcHkgPSBuZXcgU2V0KGRhdGEpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNBcnJheSB8fCBpc09iamVjdChkYXRhKSkge1xyXG4gICAgICAgIGNvcHkgPSBpc0FycmF5ID8gW10gOiB7fTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGRhdGFba2V5XSkpIHtcclxuICAgICAgICAgICAgICAgIGNvcHkgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29weVtrZXldID0gY2xvbmVPYmplY3QoZGF0YVtrZXldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICAgIHJldHVybiBjb3B5O1xyXG59XG5cbnZhciBmaWxsRW1wdHlBcnJheSA9ICh2YWx1ZSkgPT4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5tYXAoKCkgPT4gdW5kZWZpbmVkKSA6IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaW5zZXJ0KGRhdGEsIGluZGV4LCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICAuLi5kYXRhLnNsaWNlKDAsIGluZGV4KSxcclxuICAgICAgICAuLi5jb252ZXJ0VG9BcnJheVBheWxvYWQodmFsdWUpLFxyXG4gICAgICAgIC4uLmRhdGEuc2xpY2UoaW5kZXgpLFxyXG4gICAgXTtcclxufVxuXG52YXIgbW92ZUFycmF5QXQgPSAoZGF0YSwgZnJvbSwgdG8pID0+IHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhKSkge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIGlmIChpc1VuZGVmaW5lZChkYXRhW3RvXSkpIHtcclxuICAgICAgICBkYXRhW3RvXSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGRhdGEuc3BsaWNlKHRvLCAwLCBkYXRhLnNwbGljZShmcm9tLCAxKVswXSk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxufTtcblxuZnVuY3Rpb24gcHJlcGVuZChkYXRhLCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuIFsuLi5jb252ZXJ0VG9BcnJheVBheWxvYWQodmFsdWUpLCAuLi5jb252ZXJ0VG9BcnJheVBheWxvYWQoZGF0YSldO1xyXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUF0SW5kZXhlcyhkYXRhLCBpbmRleGVzKSB7XHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICBjb25zdCB0ZW1wID0gWy4uLmRhdGFdO1xyXG4gICAgZm9yIChjb25zdCBpbmRleCBvZiBpbmRleGVzKSB7XHJcbiAgICAgICAgdGVtcC5zcGxpY2UoaW5kZXggLSBpLCAxKTtcclxuICAgICAgICBpKys7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29tcGFjdCh0ZW1wKS5sZW5ndGggPyB0ZW1wIDogW107XHJcbn1cclxudmFyIHJlbW92ZUFycmF5QXQgPSAoZGF0YSwgaW5kZXgpID0+IGlzVW5kZWZpbmVkKGluZGV4KVxyXG4gICAgPyBbXVxyXG4gICAgOiByZW1vdmVBdEluZGV4ZXMoZGF0YSwgY29udmVydFRvQXJyYXlQYXlsb2FkKGluZGV4KS5zb3J0KChhLCBiKSA9PiBhIC0gYikpO1xuXG52YXIgc3dhcEFycmF5QXQgPSAoZGF0YSwgaW5kZXhBLCBpbmRleEIpID0+IHtcclxuICAgIGRhdGFbaW5kZXhBXSA9IFtkYXRhW2luZGV4Ql0sIChkYXRhW2luZGV4Ql0gPSBkYXRhW2luZGV4QV0pXVswXTtcclxufTtcblxudmFyIHVwZGF0ZUF0ID0gKGZpZWxkVmFsdWVzLCBpbmRleCwgdmFsdWUpID0+IHtcclxuICAgIGZpZWxkVmFsdWVzW2luZGV4XSA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIGZpZWxkVmFsdWVzO1xyXG59O1xuXG4vKipcclxuICogQSBjdXN0b20gaG9vayB0aGF0IGV4cG9zZXMgY29udmVuaWVudCBtZXRob2RzIHRvIHBlcmZvcm0gb3BlcmF0aW9ucyB3aXRoIGEgbGlzdCBvZiBkeW5hbWljIGlucHV0cyB0aGF0IG5lZWQgdG8gYmUgYXBwZW5kZWQsIHVwZGF0ZWQsIHJlbW92ZWQgZXRjLlxyXG4gKlxyXG4gKiBAcmVtYXJrc1xyXG4gKiBbQVBJXShodHRwczovL3JlYWN0LWhvb2stZm9ybS5jb20vYXBpL3VzZWZpZWxkYXJyYXkpIOKAoiBbRGVtb10oaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zL3JlYWN0LWhvb2stZm9ybS11c2VmaWVsZGFycmF5LXNzdWduKVxyXG4gKlxyXG4gKiBAcGFyYW0gcHJvcHMgLSB1c2VGaWVsZEFycmF5IHByb3BzXHJcbiAqXHJcbiAqIEByZXR1cm5zIG1ldGhvZHMgLSBmdW5jdGlvbnMgdG8gbWFuaXB1bGF0ZSB3aXRoIHRoZSBGaWVsZCBBcnJheXMgKGR5bmFtaWMgaW5wdXRzKSB7QGxpbmsgVXNlRmllbGRBcnJheVJldHVybn1cclxuICpcclxuICogQGV4YW1wbGVcclxuICogYGBgdHN4XHJcbiAqIGZ1bmN0aW9uIEFwcCgpIHtcclxuICogICBjb25zdCB7IHJlZ2lzdGVyLCBjb250cm9sLCBoYW5kbGVTdWJtaXQsIHJlc2V0LCB0cmlnZ2VyLCBzZXRFcnJvciB9ID0gdXNlRm9ybSh7XHJcbiAqICAgICBkZWZhdWx0VmFsdWVzOiB7XHJcbiAqICAgICAgIHRlc3Q6IFtdXHJcbiAqICAgICB9XHJcbiAqICAgfSk7XHJcbiAqICAgY29uc3QgeyBmaWVsZHMsIGFwcGVuZCB9ID0gdXNlRmllbGRBcnJheSh7XHJcbiAqICAgICBjb250cm9sLFxyXG4gKiAgICAgbmFtZTogXCJ0ZXN0XCJcclxuICogICB9KTtcclxuICpcclxuICogICByZXR1cm4gKFxyXG4gKiAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKX0+XHJcbiAqICAgICAgIHtmaWVsZHMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gKiAgICAgICAgICA8aW5wdXQga2V5PXtpdGVtLmlkfSB7Li4ucmVnaXN0ZXIoYHRlc3QuJHtpbmRleH0uZmlyc3ROYW1lYCl9ICAvPlxyXG4gKiAgICAgICApKX1cclxuICogICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gYXBwZW5kKHsgZmlyc3ROYW1lOiBcImJpbGxcIiB9KX0+XHJcbiAqICAgICAgICAgYXBwZW5kXHJcbiAqICAgICAgIDwvYnV0dG9uPlxyXG4gKiAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIC8+XHJcbiAqICAgICA8L2Zvcm0+XHJcbiAqICAgKTtcclxuICogfVxyXG4gKiBgYGBcclxuICovXHJcbmZ1bmN0aW9uIHVzZUZpZWxkQXJyYXkocHJvcHMpIHtcclxuICAgIGNvbnN0IG1ldGhvZHMgPSB1c2VGb3JtQ29udGV4dCgpO1xyXG4gICAgY29uc3QgeyBjb250cm9sID0gbWV0aG9kcy5jb250cm9sLCBuYW1lLCBrZXlOYW1lID0gJ2lkJywgc2hvdWxkVW5yZWdpc3RlciwgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgW2ZpZWxkcywgc2V0RmllbGRzXSA9IFJlYWN0LnVzZVN0YXRlKGNvbnRyb2wuX2dldEZpZWxkQXJyYXkobmFtZSkpO1xyXG4gICAgY29uc3QgaWRzID0gUmVhY3QudXNlUmVmKGNvbnRyb2wuX2dldEZpZWxkQXJyYXkobmFtZSkubWFwKGdlbmVyYXRlSWQpKTtcclxuICAgIGNvbnN0IF9maWVsZElkcyA9IFJlYWN0LnVzZVJlZihmaWVsZHMpO1xyXG4gICAgY29uc3QgX25hbWUgPSBSZWFjdC51c2VSZWYobmFtZSk7XHJcbiAgICBjb25zdCBfYWN0aW9uZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xyXG4gICAgX25hbWUuY3VycmVudCA9IG5hbWU7XHJcbiAgICBfZmllbGRJZHMuY3VycmVudCA9IGZpZWxkcztcclxuICAgIGNvbnRyb2wuX25hbWVzLmFycmF5LmFkZChuYW1lKTtcclxuICAgIGNvbnN0IGNhbGxiYWNrID0gUmVhY3QudXNlQ2FsbGJhY2soKHsgdmFsdWVzLCBuYW1lOiBmaWVsZEFycmF5TmFtZSB9KSA9PiB7XHJcbiAgICAgICAgaWYgKGZpZWxkQXJyYXlOYW1lID09PSBfbmFtZS5jdXJyZW50IHx8ICFmaWVsZEFycmF5TmFtZSkge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZFZhbHVlcyA9IGdldCh2YWx1ZXMsIF9uYW1lLmN1cnJlbnQsIFtdKTtcclxuICAgICAgICAgICAgc2V0RmllbGRzKGZpZWxkVmFsdWVzKTtcclxuICAgICAgICAgICAgaWRzLmN1cnJlbnQgPSBmaWVsZFZhbHVlcy5tYXAoZ2VuZXJhdGVJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgdXNlU3Vic2NyaWJlKHtcclxuICAgICAgICBjYWxsYmFjayxcclxuICAgICAgICBzdWJqZWN0OiBjb250cm9sLl9zdWJqZWN0cy5hcnJheSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgdXBkYXRlVmFsdWVzID0gUmVhY3QudXNlQ2FsbGJhY2soKHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzKSA9PiB7XHJcbiAgICAgICAgX2FjdGlvbmVkLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnRyb2wuX3VwZGF0ZUZpZWxkQXJyYXkobmFtZSwgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMpO1xyXG4gICAgfSwgW2NvbnRyb2wsIG5hbWVdKTtcclxuICAgIGNvbnN0IGFwcGVuZCQxID0gKHZhbHVlLCBvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXBwZW5kVmFsdWUgPSBjb252ZXJ0VG9BcnJheVBheWxvYWQoY2xvbmVPYmplY3QodmFsdWUpKTtcclxuICAgICAgICBjb25zdCB1cGRhdGVkRmllbGRBcnJheVZhbHVlcyA9IGFwcGVuZChjb250cm9sLl9nZXRGaWVsZEFycmF5KG5hbWUpLCBhcHBlbmRWYWx1ZSk7XHJcbiAgICAgICAgY29udHJvbC5fbmFtZXMuZm9jdXMgPSBnZXRGb2N1c0ZpZWxkTmFtZShuYW1lLCB1cGRhdGVkRmllbGRBcnJheVZhbHVlcy5sZW5ndGggLSAxLCBvcHRpb25zKTtcclxuICAgICAgICBpZHMuY3VycmVudCA9IGFwcGVuZChpZHMuY3VycmVudCwgYXBwZW5kVmFsdWUubWFwKGdlbmVyYXRlSWQpKTtcclxuICAgICAgICB1cGRhdGVWYWx1ZXModXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMpO1xyXG4gICAgICAgIHNldEZpZWxkcyh1cGRhdGVkRmllbGRBcnJheVZhbHVlcyk7XHJcbiAgICAgICAgY29udHJvbC5fdXBkYXRlRmllbGRBcnJheShuYW1lLCB1cGRhdGVkRmllbGRBcnJheVZhbHVlcywgYXBwZW5kLCB7XHJcbiAgICAgICAgICAgIGFyZ0E6IGZpbGxFbXB0eUFycmF5KHZhbHVlKSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBwcmVwZW5kJDEgPSAodmFsdWUsIG9wdGlvbnMpID0+IHtcclxuICAgICAgICBjb25zdCBwcmVwZW5kVmFsdWUgPSBjb252ZXJ0VG9BcnJheVBheWxvYWQoY2xvbmVPYmplY3QodmFsdWUpKTtcclxuICAgICAgICBjb25zdCB1cGRhdGVkRmllbGRBcnJheVZhbHVlcyA9IHByZXBlbmQoY29udHJvbC5fZ2V0RmllbGRBcnJheShuYW1lKSwgcHJlcGVuZFZhbHVlKTtcclxuICAgICAgICBjb250cm9sLl9uYW1lcy5mb2N1cyA9IGdldEZvY3VzRmllbGROYW1lKG5hbWUsIDAsIG9wdGlvbnMpO1xyXG4gICAgICAgIGlkcy5jdXJyZW50ID0gcHJlcGVuZChpZHMuY3VycmVudCwgcHJlcGVuZFZhbHVlLm1hcChnZW5lcmF0ZUlkKSk7XHJcbiAgICAgICAgdXBkYXRlVmFsdWVzKHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzKTtcclxuICAgICAgICBzZXRGaWVsZHModXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMpO1xyXG4gICAgICAgIGNvbnRyb2wuX3VwZGF0ZUZpZWxkQXJyYXkobmFtZSwgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMsIHByZXBlbmQsIHtcclxuICAgICAgICAgICAgYXJnQTogZmlsbEVtcHR5QXJyYXkodmFsdWUpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlbW92ZSA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzID0gcmVtb3ZlQXJyYXlBdChjb250cm9sLl9nZXRGaWVsZEFycmF5KG5hbWUpLCBpbmRleCk7XHJcbiAgICAgICAgaWRzLmN1cnJlbnQgPSByZW1vdmVBcnJheUF0KGlkcy5jdXJyZW50LCBpbmRleCk7XHJcbiAgICAgICAgdXBkYXRlVmFsdWVzKHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzKTtcclxuICAgICAgICBzZXRGaWVsZHModXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMpO1xyXG4gICAgICAgIGNvbnRyb2wuX3VwZGF0ZUZpZWxkQXJyYXkobmFtZSwgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMsIHJlbW92ZUFycmF5QXQsIHtcclxuICAgICAgICAgICAgYXJnQTogaW5kZXgsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaW5zZXJ0JDEgPSAoaW5kZXgsIHZhbHVlLCBvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5zZXJ0VmFsdWUgPSBjb252ZXJ0VG9BcnJheVBheWxvYWQoY2xvbmVPYmplY3QodmFsdWUpKTtcclxuICAgICAgICBjb25zdCB1cGRhdGVkRmllbGRBcnJheVZhbHVlcyA9IGluc2VydChjb250cm9sLl9nZXRGaWVsZEFycmF5KG5hbWUpLCBpbmRleCwgaW5zZXJ0VmFsdWUpO1xyXG4gICAgICAgIGNvbnRyb2wuX25hbWVzLmZvY3VzID0gZ2V0Rm9jdXNGaWVsZE5hbWUobmFtZSwgaW5kZXgsIG9wdGlvbnMpO1xyXG4gICAgICAgIGlkcy5jdXJyZW50ID0gaW5zZXJ0KGlkcy5jdXJyZW50LCBpbmRleCwgaW5zZXJ0VmFsdWUubWFwKGdlbmVyYXRlSWQpKTtcclxuICAgICAgICB1cGRhdGVWYWx1ZXModXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMpO1xyXG4gICAgICAgIHNldEZpZWxkcyh1cGRhdGVkRmllbGRBcnJheVZhbHVlcyk7XHJcbiAgICAgICAgY29udHJvbC5fdXBkYXRlRmllbGRBcnJheShuYW1lLCB1cGRhdGVkRmllbGRBcnJheVZhbHVlcywgaW5zZXJ0LCB7XHJcbiAgICAgICAgICAgIGFyZ0E6IGluZGV4LFxyXG4gICAgICAgICAgICBhcmdCOiBmaWxsRW1wdHlBcnJheSh2YWx1ZSksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc3dhcCA9IChpbmRleEEsIGluZGV4QikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzID0gY29udHJvbC5fZ2V0RmllbGRBcnJheShuYW1lKTtcclxuICAgICAgICBzd2FwQXJyYXlBdCh1cGRhdGVkRmllbGRBcnJheVZhbHVlcywgaW5kZXhBLCBpbmRleEIpO1xyXG4gICAgICAgIHN3YXBBcnJheUF0KGlkcy5jdXJyZW50LCBpbmRleEEsIGluZGV4Qik7XHJcbiAgICAgICAgdXBkYXRlVmFsdWVzKHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzKTtcclxuICAgICAgICBzZXRGaWVsZHModXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMpO1xyXG4gICAgICAgIGNvbnRyb2wuX3VwZGF0ZUZpZWxkQXJyYXkobmFtZSwgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMsIHN3YXBBcnJheUF0LCB7XHJcbiAgICAgICAgICAgIGFyZ0E6IGluZGV4QSxcclxuICAgICAgICAgICAgYXJnQjogaW5kZXhCLFxyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBtb3ZlID0gKGZyb20sIHRvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMgPSBjb250cm9sLl9nZXRGaWVsZEFycmF5KG5hbWUpO1xyXG4gICAgICAgIG1vdmVBcnJheUF0KHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzLCBmcm9tLCB0byk7XHJcbiAgICAgICAgbW92ZUFycmF5QXQoaWRzLmN1cnJlbnQsIGZyb20sIHRvKTtcclxuICAgICAgICB1cGRhdGVWYWx1ZXModXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMpO1xyXG4gICAgICAgIHNldEZpZWxkcyh1cGRhdGVkRmllbGRBcnJheVZhbHVlcyk7XHJcbiAgICAgICAgY29udHJvbC5fdXBkYXRlRmllbGRBcnJheShuYW1lLCB1cGRhdGVkRmllbGRBcnJheVZhbHVlcywgbW92ZUFycmF5QXQsIHtcclxuICAgICAgICAgICAgYXJnQTogZnJvbSxcclxuICAgICAgICAgICAgYXJnQjogdG8sXHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHVwZGF0ZSA9IChpbmRleCwgdmFsdWUpID0+IHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkRmllbGRBcnJheVZhbHVlcyA9IHVwZGF0ZUF0KGNvbnRyb2wuX2dldEZpZWxkQXJyYXkobmFtZSksIGluZGV4LCB2YWx1ZSk7XHJcbiAgICAgICAgaWRzLmN1cnJlbnQgPSBbLi4udXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXNdLm1hcCgoaXRlbSwgaSkgPT4gIWl0ZW0gfHwgaSA9PT0gaW5kZXggPyBnZW5lcmF0ZUlkKCkgOiBpZHMuY3VycmVudFtpXSk7XHJcbiAgICAgICAgdXBkYXRlVmFsdWVzKHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzKTtcclxuICAgICAgICBzZXRGaWVsZHMoWy4uLnVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzXSk7XHJcbiAgICAgICAgY29udHJvbC5fdXBkYXRlRmllbGRBcnJheShuYW1lLCB1cGRhdGVkRmllbGRBcnJheVZhbHVlcywgdXBkYXRlQXQsIHtcclxuICAgICAgICAgICAgYXJnQTogaW5kZXgsXHJcbiAgICAgICAgICAgIGFyZ0I6IHZhbHVlLFxyXG4gICAgICAgIH0sIHRydWUsIGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCByZXBsYWNlID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMgPSBjb252ZXJ0VG9BcnJheVBheWxvYWQoY2xvbmVPYmplY3QodmFsdWUpKTtcclxuICAgICAgICBpZHMuY3VycmVudCA9IHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzLm1hcChnZW5lcmF0ZUlkKTtcclxuICAgICAgICB1cGRhdGVWYWx1ZXMoWy4uLnVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzXSk7XHJcbiAgICAgICAgc2V0RmllbGRzKFsuLi51cGRhdGVkRmllbGRBcnJheVZhbHVlc10pO1xyXG4gICAgICAgIGNvbnRyb2wuX3VwZGF0ZUZpZWxkQXJyYXkobmFtZSwgWy4uLnVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzXSwgKGRhdGEpID0+IGRhdGEsIHt9LCB0cnVlLCBmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb250cm9sLl9zdGF0ZUZsYWdzLmFjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIGlzV2F0Y2hlZChuYW1lLCBjb250cm9sLl9uYW1lcykgJiYgY29udHJvbC5fc3ViamVjdHMuc3RhdGUubmV4dCh7fSk7XHJcbiAgICAgICAgaWYgKF9hY3Rpb25lZC5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnRyb2wuX2V4ZWN1dGVTY2hlbWEoW25hbWVdKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gZ2V0KHJlc3VsdC5lcnJvcnMsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLnR5cGUgJiYgIWdldChjb250cm9sLl9mb3JtU3RhdGUuZXJyb3JzLCBuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldChjb250cm9sLl9mb3JtU3RhdGUuZXJyb3JzLCBuYW1lLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbC5fc3ViamVjdHMuc3RhdGUubmV4dCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yczogY29udHJvbC5fZm9ybVN0YXRlLmVycm9ycyxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRyb2wuX3N1YmplY3RzLndhdGNoLm5leHQoe1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZXM6IGNvbnRyb2wuX2Zvcm1WYWx1ZXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29udHJvbC5fbmFtZXMuZm9jdXMgJiZcclxuICAgICAgICAgICAgZm9jdXNGaWVsZEJ5KGNvbnRyb2wuX2ZpZWxkcywgKGtleSkgPT4ga2V5LnN0YXJ0c1dpdGgoY29udHJvbC5fbmFtZXMuZm9jdXMpKTtcclxuICAgICAgICBjb250cm9sLl9uYW1lcy5mb2N1cyA9ICcnO1xyXG4gICAgICAgIGNvbnRyb2wuX3Byb3h5Rm9ybVN0YXRlLmlzVmFsaWQgJiYgY29udHJvbC5fdXBkYXRlVmFsaWQoKTtcclxuICAgIH0sIFtmaWVsZHMsIG5hbWUsIGNvbnRyb2xdKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgIWdldChjb250cm9sLl9mb3JtVmFsdWVzLCBuYW1lKSAmJiBjb250cm9sLl91cGRhdGVGaWVsZEFycmF5KG5hbWUpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIChjb250cm9sLl9vcHRpb25zLnNob3VsZFVucmVnaXN0ZXIgfHwgc2hvdWxkVW5yZWdpc3RlcikgJiZcclxuICAgICAgICAgICAgICAgIGNvbnRyb2wudW5yZWdpc3RlcihuYW1lKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW25hbWUsIGNvbnRyb2wsIGtleU5hbWUsIHNob3VsZFVucmVnaXN0ZXJdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc3dhcDogUmVhY3QudXNlQ2FsbGJhY2soc3dhcCwgW3VwZGF0ZVZhbHVlcywgbmFtZSwgY29udHJvbF0pLFxyXG4gICAgICAgIG1vdmU6IFJlYWN0LnVzZUNhbGxiYWNrKG1vdmUsIFt1cGRhdGVWYWx1ZXMsIG5hbWUsIGNvbnRyb2xdKSxcclxuICAgICAgICBwcmVwZW5kOiBSZWFjdC51c2VDYWxsYmFjayhwcmVwZW5kJDEsIFt1cGRhdGVWYWx1ZXMsIG5hbWUsIGNvbnRyb2xdKSxcclxuICAgICAgICBhcHBlbmQ6IFJlYWN0LnVzZUNhbGxiYWNrKGFwcGVuZCQxLCBbdXBkYXRlVmFsdWVzLCBuYW1lLCBjb250cm9sXSksXHJcbiAgICAgICAgcmVtb3ZlOiBSZWFjdC51c2VDYWxsYmFjayhyZW1vdmUsIFt1cGRhdGVWYWx1ZXMsIG5hbWUsIGNvbnRyb2xdKSxcclxuICAgICAgICBpbnNlcnQ6IFJlYWN0LnVzZUNhbGxiYWNrKGluc2VydCQxLCBbdXBkYXRlVmFsdWVzLCBuYW1lLCBjb250cm9sXSksXHJcbiAgICAgICAgdXBkYXRlOiBSZWFjdC51c2VDYWxsYmFjayh1cGRhdGUsIFt1cGRhdGVWYWx1ZXMsIG5hbWUsIGNvbnRyb2xdKSxcclxuICAgICAgICByZXBsYWNlOiBSZWFjdC51c2VDYWxsYmFjayhyZXBsYWNlLCBbdXBkYXRlVmFsdWVzLCBuYW1lLCBjb250cm9sXSksXHJcbiAgICAgICAgZmllbGRzOiBSZWFjdC51c2VNZW1vKCgpID0+IGZpZWxkcy5tYXAoKGZpZWxkLCBpbmRleCkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZmllbGQpLCB7IFtrZXlOYW1lXTogaWRzLmN1cnJlbnRbaW5kZXhdIHx8IGdlbmVyYXRlSWQoKSB9KSkpLCBbZmllbGRzLCBrZXlOYW1lXSksXHJcbiAgICB9O1xyXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN1YmplY3QoKSB7XHJcbiAgICBsZXQgX29ic2VydmVycyA9IFtdO1xyXG4gICAgY29uc3QgbmV4dCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3Qgb2JzZXJ2ZXIgb2YgX29ic2VydmVycykge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc3Vic2NyaWJlID0gKG9ic2VydmVyKSA9PiB7XHJcbiAgICAgICAgX29ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgX29ic2VydmVycyA9IF9vYnNlcnZlcnMuZmlsdGVyKChvKSA9PiBvICE9PSBvYnNlcnZlcik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9ICgpID0+IHtcclxuICAgICAgICBfb2JzZXJ2ZXJzID0gW107XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXQgb2JzZXJ2ZXJzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX29ic2VydmVycztcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5leHQsXHJcbiAgICAgICAgc3Vic2NyaWJlLFxyXG4gICAgICAgIHVuc3Vic2NyaWJlLFxyXG4gICAgfTtcclxufVxuXG52YXIgaXNQcmltaXRpdmUgPSAodmFsdWUpID0+IGlzTnVsbE9yVW5kZWZpbmVkKHZhbHVlKSB8fCAhaXNPYmplY3RUeXBlKHZhbHVlKTtcblxuZnVuY3Rpb24gZGVlcEVxdWFsKG9iamVjdDEsIG9iamVjdDIpIHtcclxuICAgIGlmIChpc1ByaW1pdGl2ZShvYmplY3QxKSB8fCBpc1ByaW1pdGl2ZShvYmplY3QyKSkge1xyXG4gICAgICAgIHJldHVybiBvYmplY3QxID09PSBvYmplY3QyO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzRGF0ZU9iamVjdChvYmplY3QxKSAmJiBpc0RhdGVPYmplY3Qob2JqZWN0MikpIHtcclxuICAgICAgICByZXR1cm4gb2JqZWN0MS5nZXRUaW1lKCkgPT09IG9iamVjdDIuZ2V0VGltZSgpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qga2V5czEgPSBPYmplY3Qua2V5cyhvYmplY3QxKTtcclxuICAgIGNvbnN0IGtleXMyID0gT2JqZWN0LmtleXMob2JqZWN0Mik7XHJcbiAgICBpZiAoa2V5czEubGVuZ3RoICE9PSBrZXlzMi5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzMSkge1xyXG4gICAgICAgIGNvbnN0IHZhbDEgPSBvYmplY3QxW2tleV07XHJcbiAgICAgICAgaWYgKCFrZXlzMi5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleSAhPT0gJ3JlZicpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsMiA9IG9iamVjdDJba2V5XTtcclxuICAgICAgICAgICAgaWYgKChpc0RhdGVPYmplY3QodmFsMSkgJiYgaXNEYXRlT2JqZWN0KHZhbDIpKSB8fFxyXG4gICAgICAgICAgICAgICAgKGlzT2JqZWN0KHZhbDEpICYmIGlzT2JqZWN0KHZhbDIpKSB8fFxyXG4gICAgICAgICAgICAgICAgKEFycmF5LmlzQXJyYXkodmFsMSkgJiYgQXJyYXkuaXNBcnJheSh2YWwyKSlcclxuICAgICAgICAgICAgICAgID8gIWRlZXBFcXVhbCh2YWwxLCB2YWwyKVxyXG4gICAgICAgICAgICAgICAgOiB2YWwxICE9PSB2YWwyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxuXG52YXIgZ2V0VmFsaWRhdGlvbk1vZGVzID0gKG1vZGUpID0+ICh7XHJcbiAgICBpc09uU3VibWl0OiAhbW9kZSB8fCBtb2RlID09PSBWQUxJREFUSU9OX01PREUub25TdWJtaXQsXHJcbiAgICBpc09uQmx1cjogbW9kZSA9PT0gVkFMSURBVElPTl9NT0RFLm9uQmx1cixcclxuICAgIGlzT25DaGFuZ2U6IG1vZGUgPT09IFZBTElEQVRJT05fTU9ERS5vbkNoYW5nZSxcclxuICAgIGlzT25BbGw6IG1vZGUgPT09IFZBTElEQVRJT05fTU9ERS5hbGwsXHJcbiAgICBpc09uVG91Y2g6IG1vZGUgPT09IFZBTElEQVRJT05fTU9ERS5vblRvdWNoZWQsXHJcbn0pO1xuXG52YXIgaXNCb29sZWFuID0gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJztcblxudmFyIGlzRmlsZUlucHV0ID0gKGVsZW1lbnQpID0+IGVsZW1lbnQudHlwZSA9PT0gJ2ZpbGUnO1xuXG52YXIgaXNIVE1MRWxlbWVudCA9ICh2YWx1ZSkgPT4gdmFsdWUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcblxudmFyIGlzTXVsdGlwbGVTZWxlY3QgPSAoZWxlbWVudCkgPT4gZWxlbWVudC50eXBlID09PSBgc2VsZWN0LW11bHRpcGxlYDtcblxudmFyIGlzUmFkaW9JbnB1dCA9IChlbGVtZW50KSA9PiBlbGVtZW50LnR5cGUgPT09ICdyYWRpbyc7XG5cbnZhciBpc1JhZGlvT3JDaGVja2JveCA9IChyZWYpID0+IGlzUmFkaW9JbnB1dChyZWYpIHx8IGlzQ2hlY2tCb3hJbnB1dChyZWYpO1xuXG52YXIgaXNXZWIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxyXG4gICAgdHlwZW9mIHdpbmRvdy5IVE1MRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG5cbnZhciBsaXZlID0gKHJlZikgPT4gaXNIVE1MRWxlbWVudChyZWYpICYmIHJlZi5pc0Nvbm5lY3RlZDtcblxuZnVuY3Rpb24gYmFzZUdldChvYmplY3QsIHVwZGF0ZVBhdGgpIHtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHVwZGF0ZVBhdGguc2xpY2UoMCwgLTEpLmxlbmd0aDtcclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcclxuICAgICAgICBvYmplY3QgPSBpc1VuZGVmaW5lZChvYmplY3QpID8gaW5kZXgrKyA6IG9iamVjdFt1cGRhdGVQYXRoW2luZGV4KytdXTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYmplY3Q7XHJcbn1cclxuZnVuY3Rpb24gdW5zZXQob2JqZWN0LCBwYXRoKSB7XHJcbiAgICBjb25zdCB1cGRhdGVQYXRoID0gaXNLZXkocGF0aCkgPyBbcGF0aF0gOiBzdHJpbmdUb1BhdGgocGF0aCk7XHJcbiAgICBjb25zdCBjaGlsZE9iamVjdCA9IHVwZGF0ZVBhdGgubGVuZ3RoID09IDEgPyBvYmplY3QgOiBiYXNlR2V0KG9iamVjdCwgdXBkYXRlUGF0aCk7XHJcbiAgICBjb25zdCBrZXkgPSB1cGRhdGVQYXRoW3VwZGF0ZVBhdGgubGVuZ3RoIC0gMV07XHJcbiAgICBsZXQgcHJldmlvdXNPYmpSZWY7XHJcbiAgICBpZiAoY2hpbGRPYmplY3QpIHtcclxuICAgICAgICBkZWxldGUgY2hpbGRPYmplY3Rba2V5XTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgdXBkYXRlUGF0aC5zbGljZSgwLCAtMSkubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICBsZXQgaW5kZXggPSAtMTtcclxuICAgICAgICBsZXQgb2JqZWN0UmVmO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYXRocyA9IHVwZGF0ZVBhdGguc2xpY2UoMCwgLShrICsgMSkpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYXRoc0xlbmd0aCA9IGN1cnJlbnRQYXRocy5sZW5ndGggLSAxO1xyXG4gICAgICAgIGlmIChrID4gMCkge1xyXG4gICAgICAgICAgICBwcmV2aW91c09ialJlZiA9IG9iamVjdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKCsraW5kZXggPCBjdXJyZW50UGF0aHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBjdXJyZW50UGF0aHNbaW5kZXhdO1xyXG4gICAgICAgICAgICBvYmplY3RSZWYgPSBvYmplY3RSZWYgPyBvYmplY3RSZWZbaXRlbV0gOiBvYmplY3RbaXRlbV07XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50UGF0aHNMZW5ndGggPT09IGluZGV4ICYmXHJcbiAgICAgICAgICAgICAgICAoKGlzT2JqZWN0KG9iamVjdFJlZikgJiYgaXNFbXB0eU9iamVjdChvYmplY3RSZWYpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIChBcnJheS5pc0FycmF5KG9iamVjdFJlZikgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgIW9iamVjdFJlZi5maWx0ZXIoKGRhdGEpID0+IChpc09iamVjdChkYXRhKSAmJiAhaXNFbXB0eU9iamVjdChkYXRhKSkgfHwgaXNCb29sZWFuKGRhdGEpKS5sZW5ndGgpKSkge1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNPYmpSZWYgPyBkZWxldGUgcHJldmlvdXNPYmpSZWZbaXRlbV0gOiBkZWxldGUgb2JqZWN0W2l0ZW1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByZXZpb3VzT2JqUmVmID0gb2JqZWN0UmVmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvYmplY3Q7XHJcbn1cblxuZnVuY3Rpb24gbWFya0ZpZWxkc0RpcnR5KGRhdGEsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICBjb25zdCBpc1BhcmVudE5vZGVBcnJheSA9IEFycmF5LmlzQXJyYXkoZGF0YSk7XHJcbiAgICBpZiAoaXNPYmplY3QoZGF0YSkgfHwgaXNQYXJlbnROb2RlQXJyYXkpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGFba2V5XSkgfHxcclxuICAgICAgICAgICAgICAgIChpc09iamVjdChkYXRhW2tleV0pICYmICFvYmplY3RIYXNGdW5jdGlvbihkYXRhW2tleV0pKSkge1xyXG4gICAgICAgICAgICAgICAgZmllbGRzW2tleV0gPSBBcnJheS5pc0FycmF5KGRhdGFba2V5XSkgPyBbXSA6IHt9O1xyXG4gICAgICAgICAgICAgICAgbWFya0ZpZWxkc0RpcnR5KGRhdGFba2V5XSwgZmllbGRzW2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCFpc051bGxPclVuZGVmaW5lZChkYXRhW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZHNba2V5XSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmllbGRzO1xyXG59XHJcbmZ1bmN0aW9uIGdldERpcnR5RmllbGRzRnJvbURlZmF1bHRWYWx1ZXMoZGF0YSwgZm9ybVZhbHVlcywgZGlydHlGaWVsZHNGcm9tVmFsdWVzKSB7XHJcbiAgICBjb25zdCBpc1BhcmVudE5vZGVBcnJheSA9IEFycmF5LmlzQXJyYXkoZGF0YSk7XHJcbiAgICBpZiAoaXNPYmplY3QoZGF0YSkgfHwgaXNQYXJlbnROb2RlQXJyYXkpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGFba2V5XSkgfHxcclxuICAgICAgICAgICAgICAgIChpc09iamVjdChkYXRhW2tleV0pICYmICFvYmplY3RIYXNGdW5jdGlvbihkYXRhW2tleV0pKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzVW5kZWZpbmVkKGZvcm1WYWx1ZXMpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgaXNQcmltaXRpdmUoZGlydHlGaWVsZHNGcm9tVmFsdWVzW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlydHlGaWVsZHNGcm9tVmFsdWVzW2tleV0gPSBBcnJheS5pc0FycmF5KGRhdGFba2V5XSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBtYXJrRmllbGRzRGlydHkoZGF0YVtrZXldLCBbXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBPYmplY3QuYXNzaWduKHt9LCBtYXJrRmllbGRzRGlydHkoZGF0YVtrZXldKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBnZXREaXJ0eUZpZWxkc0Zyb21EZWZhdWx0VmFsdWVzKGRhdGFba2V5XSwgaXNOdWxsT3JVbmRlZmluZWQoZm9ybVZhbHVlcykgPyB7fSA6IGZvcm1WYWx1ZXNba2V5XSwgZGlydHlGaWVsZHNGcm9tVmFsdWVzW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlydHlGaWVsZHNGcm9tVmFsdWVzW2tleV0gPSAhZGVlcEVxdWFsKGRhdGFba2V5XSwgZm9ybVZhbHVlc1trZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBkaXJ0eUZpZWxkc0Zyb21WYWx1ZXM7XHJcbn1cclxudmFyIGdldERpcnR5RmllbGRzID0gKGRlZmF1bHRWYWx1ZXMsIGZvcm1WYWx1ZXMpID0+IGdldERpcnR5RmllbGRzRnJvbURlZmF1bHRWYWx1ZXMoZGVmYXVsdFZhbHVlcywgZm9ybVZhbHVlcywgbWFya0ZpZWxkc0RpcnR5KGZvcm1WYWx1ZXMpKTtcblxuY29uc3QgZGVmYXVsdFJlc3VsdCA9IHtcclxuICAgIHZhbHVlOiBmYWxzZSxcclxuICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG59O1xyXG5jb25zdCB2YWxpZFJlc3VsdCA9IHsgdmFsdWU6IHRydWUsIGlzVmFsaWQ6IHRydWUgfTtcclxudmFyIGdldENoZWNrYm94VmFsdWUgPSAob3B0aW9ucykgPT4ge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcclxuICAgICAgICBpZiAob3B0aW9ucy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IG9wdGlvbnNcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uICYmIG9wdGlvbi5jaGVja2VkICYmICFvcHRpb24uZGlzYWJsZWQpXHJcbiAgICAgICAgICAgICAgICAubWFwKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB2YWx1ZXMsIGlzVmFsaWQ6ICEhdmFsdWVzLmxlbmd0aCB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3B0aW9uc1swXS5jaGVja2VkICYmICFvcHRpb25zWzBdLmRpc2FibGVkXHJcbiAgICAgICAgICAgID8gLy8gQHRzLWV4cGVjdC1lcnJvciBleHBlY3RlZCB0byB3b3JrIGluIHRoZSBicm93c2VyXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zWzBdLmF0dHJpYnV0ZXMgJiYgIWlzVW5kZWZpbmVkKG9wdGlvbnNbMF0uYXR0cmlidXRlcy52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICA/IGlzVW5kZWZpbmVkKG9wdGlvbnNbMF0udmFsdWUpIHx8IG9wdGlvbnNbMF0udmFsdWUgPT09ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdmFsaWRSZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB7IHZhbHVlOiBvcHRpb25zWzBdLnZhbHVlLCBpc1ZhbGlkOiB0cnVlIH1cclxuICAgICAgICAgICAgICAgICAgICA6IHZhbGlkUmVzdWx0XHJcbiAgICAgICAgICAgIDogZGVmYXVsdFJlc3VsdDtcclxuICAgIH1cclxuICAgIHJldHVybiBkZWZhdWx0UmVzdWx0O1xyXG59O1xuXG52YXIgZ2V0RmllbGRWYWx1ZUFzID0gKHZhbHVlLCB7IHZhbHVlQXNOdW1iZXIsIHZhbHVlQXNEYXRlLCBzZXRWYWx1ZUFzIH0pID0+IGlzVW5kZWZpbmVkKHZhbHVlKVxyXG4gICAgPyB2YWx1ZVxyXG4gICAgOiB2YWx1ZUFzTnVtYmVyXHJcbiAgICAgICAgPyB2YWx1ZSA9PT0gJydcclxuICAgICAgICAgICAgPyBOYU5cclxuICAgICAgICAgICAgOiArdmFsdWVcclxuICAgICAgICA6IHZhbHVlQXNEYXRlICYmIGlzU3RyaW5nKHZhbHVlKVxyXG4gICAgICAgICAgICA/IG5ldyBEYXRlKHZhbHVlKVxyXG4gICAgICAgICAgICA6IHNldFZhbHVlQXNcclxuICAgICAgICAgICAgICAgID8gc2V0VmFsdWVBcyh2YWx1ZSlcclxuICAgICAgICAgICAgICAgIDogdmFsdWU7XG5cbmNvbnN0IGRlZmF1bHRSZXR1cm4gPSB7XHJcbiAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgIHZhbHVlOiBudWxsLFxyXG59O1xyXG52YXIgZ2V0UmFkaW9WYWx1ZSA9IChvcHRpb25zKSA9PiBBcnJheS5pc0FycmF5KG9wdGlvbnMpXHJcbiAgICA/IG9wdGlvbnMucmVkdWNlKChwcmV2aW91cywgb3B0aW9uKSA9PiBvcHRpb24gJiYgb3B0aW9uLmNoZWNrZWQgJiYgIW9wdGlvbi5kaXNhYmxlZFxyXG4gICAgICAgID8ge1xyXG4gICAgICAgICAgICBpc1ZhbGlkOiB0cnVlLFxyXG4gICAgICAgICAgICB2YWx1ZTogb3B0aW9uLnZhbHVlLFxyXG4gICAgICAgIH1cclxuICAgICAgICA6IHByZXZpb3VzLCBkZWZhdWx0UmV0dXJuKVxyXG4gICAgOiBkZWZhdWx0UmV0dXJuO1xuXG5mdW5jdGlvbiBnZXRGaWVsZFZhbHVlKF9mKSB7XHJcbiAgICBjb25zdCByZWYgPSBfZi5yZWY7XHJcbiAgICBpZiAoX2YucmVmcyA/IF9mLnJlZnMuZXZlcnkoKHJlZikgPT4gcmVmLmRpc2FibGVkKSA6IHJlZi5kaXNhYmxlZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChpc0ZpbGVJbnB1dChyZWYpKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlZi5maWxlcztcclxuICAgIH1cclxuICAgIGlmIChpc1JhZGlvSW5wdXQocmVmKSkge1xyXG4gICAgICAgIHJldHVybiBnZXRSYWRpb1ZhbHVlKF9mLnJlZnMpLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzTXVsdGlwbGVTZWxlY3QocmVmKSkge1xyXG4gICAgICAgIHJldHVybiBbLi4ucmVmLnNlbGVjdGVkT3B0aW9uc10ubWFwKCh7IHZhbHVlIH0pID0+IHZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChpc0NoZWNrQm94SW5wdXQocmVmKSkge1xyXG4gICAgICAgIHJldHVybiBnZXRDaGVja2JveFZhbHVlKF9mLnJlZnMpLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdldEZpZWxkVmFsdWVBcyhpc1VuZGVmaW5lZChyZWYudmFsdWUpID8gX2YucmVmLnZhbHVlIDogcmVmLnZhbHVlLCBfZik7XHJcbn1cblxudmFyIGdldFJlc29sdmVyT3B0aW9ucyA9IChmaWVsZHNOYW1lcywgX2ZpZWxkcywgY3JpdGVyaWFNb2RlLCBzaG91bGRVc2VOYXRpdmVWYWxpZGF0aW9uKSA9PiB7XHJcbiAgICBjb25zdCBmaWVsZHMgPSB7fTtcclxuICAgIGZvciAoY29uc3QgbmFtZSBvZiBmaWVsZHNOYW1lcykge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gZ2V0KF9maWVsZHMsIG5hbWUpO1xyXG4gICAgICAgIGZpZWxkICYmIHNldChmaWVsZHMsIG5hbWUsIGZpZWxkLl9mKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY3JpdGVyaWFNb2RlLFxyXG4gICAgICAgIG5hbWVzOiBbLi4uZmllbGRzTmFtZXNdLFxyXG4gICAgICAgIGZpZWxkcyxcclxuICAgICAgICBzaG91bGRVc2VOYXRpdmVWYWxpZGF0aW9uLFxyXG4gICAgfTtcclxufTtcblxudmFyIGlzUmVnZXggPSAodmFsdWUpID0+IHZhbHVlIGluc3RhbmNlb2YgUmVnRXhwO1xuXG52YXIgZ2V0UnVsZVZhbHVlID0gKHJ1bGUpID0+IGlzVW5kZWZpbmVkKHJ1bGUpXHJcbiAgICA/IHVuZGVmaW5lZFxyXG4gICAgOiBpc1JlZ2V4KHJ1bGUpXHJcbiAgICAgICAgPyBydWxlLnNvdXJjZVxyXG4gICAgICAgIDogaXNPYmplY3QocnVsZSlcclxuICAgICAgICAgICAgPyBpc1JlZ2V4KHJ1bGUudmFsdWUpXHJcbiAgICAgICAgICAgICAgICA/IHJ1bGUudmFsdWUuc291cmNlXHJcbiAgICAgICAgICAgICAgICA6IHJ1bGUudmFsdWVcclxuICAgICAgICAgICAgOiBydWxlO1xuXG52YXIgaGFzVmFsaWRhdGlvbiA9IChvcHRpb25zKSA9PiBvcHRpb25zLm1vdW50ICYmXHJcbiAgICAob3B0aW9ucy5yZXF1aXJlZCB8fFxyXG4gICAgICAgIG9wdGlvbnMubWluIHx8XHJcbiAgICAgICAgb3B0aW9ucy5tYXggfHxcclxuICAgICAgICBvcHRpb25zLm1heExlbmd0aCB8fFxyXG4gICAgICAgIG9wdGlvbnMubWluTGVuZ3RoIHx8XHJcbiAgICAgICAgb3B0aW9ucy5wYXR0ZXJuIHx8XHJcbiAgICAgICAgb3B0aW9ucy52YWxpZGF0ZSk7XG5cbmZ1bmN0aW9uIHNjaGVtYUVycm9yTG9va3VwKGVycm9ycywgX2ZpZWxkcywgbmFtZSkge1xyXG4gICAgY29uc3QgZXJyb3IgPSBnZXQoZXJyb3JzLCBuYW1lKTtcclxuICAgIGlmIChlcnJvciB8fCBpc0tleShuYW1lKSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGVycm9yLFxyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb25zdCBuYW1lcyA9IG5hbWUuc3BsaXQoJy4nKTtcclxuICAgIHdoaWxlIChuYW1lcy5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSBuYW1lcy5qb2luKCcuJyk7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSBnZXQoX2ZpZWxkcywgZmllbGROYW1lKTtcclxuICAgICAgICBjb25zdCBmb3VuZEVycm9yID0gZ2V0KGVycm9ycywgZmllbGROYW1lKTtcclxuICAgICAgICBpZiAoZmllbGQgJiYgIUFycmF5LmlzQXJyYXkoZmllbGQpICYmIG5hbWUgIT09IGZpZWxkTmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBuYW1lIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmb3VuZEVycm9yICYmIGZvdW5kRXJyb3IudHlwZSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogZmllbGROYW1lLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZvdW5kRXJyb3IsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5hbWVzLnBvcCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgfTtcclxufVxuXG52YXIgc2tpcFZhbGlkYXRpb24gPSAoaXNCbHVyRXZlbnQsIGlzVG91Y2hlZCwgaXNTdWJtaXR0ZWQsIHJlVmFsaWRhdGVNb2RlLCBtb2RlKSA9PiB7XHJcbiAgICBpZiAobW9kZS5pc09uQWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIWlzU3VibWl0dGVkICYmIG1vZGUuaXNPblRvdWNoKSB7XHJcbiAgICAgICAgcmV0dXJuICEoaXNUb3VjaGVkIHx8IGlzQmx1ckV2ZW50KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzU3VibWl0dGVkID8gcmVWYWxpZGF0ZU1vZGUuaXNPbkJsdXIgOiBtb2RlLmlzT25CbHVyKSB7XHJcbiAgICAgICAgcmV0dXJuICFpc0JsdXJFdmVudDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzU3VibWl0dGVkID8gcmVWYWxpZGF0ZU1vZGUuaXNPbkNoYW5nZSA6IG1vZGUuaXNPbkNoYW5nZSkge1xyXG4gICAgICAgIHJldHVybiBpc0JsdXJFdmVudDtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59O1xuXG52YXIgdW5zZXRFbXB0eUFycmF5ID0gKHJlZiwgbmFtZSkgPT4gIWNvbXBhY3QoZ2V0KHJlZiwgbmFtZSkpLmxlbmd0aCAmJiB1bnNldChyZWYsIG5hbWUpO1xuXG52YXIgaXNNZXNzYWdlID0gKHZhbHVlKSA9PiBpc1N0cmluZyh2YWx1ZSkgfHwgUmVhY3QuaXNWYWxpZEVsZW1lbnQodmFsdWUpO1xuXG5mdW5jdGlvbiBnZXRWYWxpZGF0ZUVycm9yKHJlc3VsdCwgcmVmLCB0eXBlID0gJ3ZhbGlkYXRlJykge1xyXG4gICAgaWYgKGlzTWVzc2FnZShyZXN1bHQpIHx8XHJcbiAgICAgICAgKEFycmF5LmlzQXJyYXkocmVzdWx0KSAmJiByZXN1bHQuZXZlcnkoaXNNZXNzYWdlKSkgfHxcclxuICAgICAgICAoaXNCb29sZWFuKHJlc3VsdCkgJiYgIXJlc3VsdCkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBpc01lc3NhZ2UocmVzdWx0KSA/IHJlc3VsdCA6ICcnLFxyXG4gICAgICAgICAgICByZWYsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxuXG52YXIgZ2V0VmFsdWVBbmRNZXNzYWdlID0gKHZhbGlkYXRpb25EYXRhKSA9PiBpc09iamVjdCh2YWxpZGF0aW9uRGF0YSkgJiYgIWlzUmVnZXgodmFsaWRhdGlvbkRhdGEpXHJcbiAgICA/IHZhbGlkYXRpb25EYXRhXHJcbiAgICA6IHtcclxuICAgICAgICB2YWx1ZTogdmFsaWRhdGlvbkRhdGEsXHJcbiAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICB9O1xuXG52YXIgdmFsaWRhdGVGaWVsZCA9IGFzeW5jIChmaWVsZCwgaW5wdXRWYWx1ZSwgdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhLCBzaG91bGRVc2VOYXRpdmVWYWxpZGF0aW9uKSA9PiB7XHJcbiAgICBjb25zdCB7IHJlZiwgcmVmcywgcmVxdWlyZWQsIG1heExlbmd0aCwgbWluTGVuZ3RoLCBtaW4sIG1heCwgcGF0dGVybiwgdmFsaWRhdGUsIG5hbWUsIHZhbHVlQXNOdW1iZXIsIG1vdW50LCBkaXNhYmxlZCwgfSA9IGZpZWxkLl9mO1xyXG4gICAgaWYgKCFtb3VudCB8fCBkaXNhYmxlZCkge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxuICAgIGNvbnN0IGlucHV0UmVmID0gcmVmcyA/IHJlZnNbMF0gOiByZWY7XHJcbiAgICBjb25zdCBzZXRDdXN0b21WYWxpZGl0eSA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgaWYgKHNob3VsZFVzZU5hdGl2ZVZhbGlkYXRpb24gJiYgaW5wdXRSZWYucmVwb3J0VmFsaWRpdHkpIHtcclxuICAgICAgICAgICAgaW5wdXRSZWYuc2V0Q3VzdG9tVmFsaWRpdHkoaXNCb29sZWFuKG1lc3NhZ2UpID8gJycgOiBtZXNzYWdlIHx8ICcgJyk7XHJcbiAgICAgICAgICAgIGlucHV0UmVmLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGVycm9yID0ge307XHJcbiAgICBjb25zdCBpc1JhZGlvID0gaXNSYWRpb0lucHV0KHJlZik7XHJcbiAgICBjb25zdCBpc0NoZWNrQm94ID0gaXNDaGVja0JveElucHV0KHJlZik7XHJcbiAgICBjb25zdCBpc1JhZGlvT3JDaGVja2JveCA9IGlzUmFkaW8gfHwgaXNDaGVja0JveDtcclxuICAgIGNvbnN0IGlzRW1wdHkgPSAoKHZhbHVlQXNOdW1iZXIgfHwgaXNGaWxlSW5wdXQocmVmKSkgJiYgIXJlZi52YWx1ZSkgfHxcclxuICAgICAgICBpbnB1dFZhbHVlID09PSAnJyB8fFxyXG4gICAgICAgIChBcnJheS5pc0FycmF5KGlucHV0VmFsdWUpICYmICFpbnB1dFZhbHVlLmxlbmd0aCk7XHJcbiAgICBjb25zdCBhcHBlbmRFcnJvcnNDdXJyeSA9IGFwcGVuZEVycm9ycy5iaW5kKG51bGwsIG5hbWUsIHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSwgZXJyb3IpO1xyXG4gICAgY29uc3QgZ2V0TWluTWF4TWVzc2FnZSA9IChleGNlZWRNYXgsIG1heExlbmd0aE1lc3NhZ2UsIG1pbkxlbmd0aE1lc3NhZ2UsIG1heFR5cGUgPSBJTlBVVF9WQUxJREFUSU9OX1JVTEVTLm1heExlbmd0aCwgbWluVHlwZSA9IElOUFVUX1ZBTElEQVRJT05fUlVMRVMubWluTGVuZ3RoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGV4Y2VlZE1heCA/IG1heExlbmd0aE1lc3NhZ2UgOiBtaW5MZW5ndGhNZXNzYWdlO1xyXG4gICAgICAgIGVycm9yW25hbWVdID0gT2JqZWN0LmFzc2lnbih7IHR5cGU6IGV4Y2VlZE1heCA/IG1heFR5cGUgOiBtaW5UeXBlLCBtZXNzYWdlLFxyXG4gICAgICAgICAgICByZWYgfSwgYXBwZW5kRXJyb3JzQ3VycnkoZXhjZWVkTWF4ID8gbWF4VHlwZSA6IG1pblR5cGUsIG1lc3NhZ2UpKTtcclxuICAgIH07XHJcbiAgICBpZiAocmVxdWlyZWQgJiZcclxuICAgICAgICAoKCFpc1JhZGlvT3JDaGVja2JveCAmJiAoaXNFbXB0eSB8fCBpc051bGxPclVuZGVmaW5lZChpbnB1dFZhbHVlKSkpIHx8XHJcbiAgICAgICAgICAgIChpc0Jvb2xlYW4oaW5wdXRWYWx1ZSkgJiYgIWlucHV0VmFsdWUpIHx8XHJcbiAgICAgICAgICAgIChpc0NoZWNrQm94ICYmICFnZXRDaGVja2JveFZhbHVlKHJlZnMpLmlzVmFsaWQpIHx8XHJcbiAgICAgICAgICAgIChpc1JhZGlvICYmICFnZXRSYWRpb1ZhbHVlKHJlZnMpLmlzVmFsaWQpKSkge1xyXG4gICAgICAgIGNvbnN0IHsgdmFsdWUsIG1lc3NhZ2UgfSA9IGlzTWVzc2FnZShyZXF1aXJlZClcclxuICAgICAgICAgICAgPyB7IHZhbHVlOiAhIXJlcXVpcmVkLCBtZXNzYWdlOiByZXF1aXJlZCB9XHJcbiAgICAgICAgICAgIDogZ2V0VmFsdWVBbmRNZXNzYWdlKHJlcXVpcmVkKTtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgZXJyb3JbbmFtZV0gPSBPYmplY3QuYXNzaWduKHsgdHlwZTogSU5QVVRfVkFMSURBVElPTl9SVUxFUy5yZXF1aXJlZCwgbWVzc2FnZSwgcmVmOiBpbnB1dFJlZiB9LCBhcHBlbmRFcnJvcnNDdXJyeShJTlBVVF9WQUxJREFUSU9OX1JVTEVTLnJlcXVpcmVkLCBtZXNzYWdlKSk7XHJcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXN0b21WYWxpZGl0eShtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghaXNFbXB0eSAmJiAoIWlzTnVsbE9yVW5kZWZpbmVkKG1pbikgfHwgIWlzTnVsbE9yVW5kZWZpbmVkKG1heCkpKSB7XHJcbiAgICAgICAgbGV0IGV4Y2VlZE1heDtcclxuICAgICAgICBsZXQgZXhjZWVkTWluO1xyXG4gICAgICAgIGNvbnN0IG1heE91dHB1dCA9IGdldFZhbHVlQW5kTWVzc2FnZShtYXgpO1xyXG4gICAgICAgIGNvbnN0IG1pbk91dHB1dCA9IGdldFZhbHVlQW5kTWVzc2FnZShtaW4pO1xyXG4gICAgICAgIGlmICghaXNOYU4oaW5wdXRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVOdW1iZXIgPSByZWYudmFsdWVBc051bWJlciB8fCAraW5wdXRWYWx1ZTtcclxuICAgICAgICAgICAgaWYgKCFpc051bGxPclVuZGVmaW5lZChtYXhPdXRwdXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBleGNlZWRNYXggPSB2YWx1ZU51bWJlciA+IG1heE91dHB1dC52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKG1pbk91dHB1dC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGV4Y2VlZE1pbiA9IHZhbHVlTnVtYmVyIDwgbWluT3V0cHV0LnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZURhdGUgPSByZWYudmFsdWVBc0RhdGUgfHwgbmV3IERhdGUoaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgIGlmIChpc1N0cmluZyhtYXhPdXRwdXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBleGNlZWRNYXggPSB2YWx1ZURhdGUgPiBuZXcgRGF0ZShtYXhPdXRwdXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc1N0cmluZyhtaW5PdXRwdXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBleGNlZWRNaW4gPSB2YWx1ZURhdGUgPCBuZXcgRGF0ZShtaW5PdXRwdXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChleGNlZWRNYXggfHwgZXhjZWVkTWluKSB7XHJcbiAgICAgICAgICAgIGdldE1pbk1heE1lc3NhZ2UoISFleGNlZWRNYXgsIG1heE91dHB1dC5tZXNzYWdlLCBtaW5PdXRwdXQubWVzc2FnZSwgSU5QVVRfVkFMSURBVElPTl9SVUxFUy5tYXgsIElOUFVUX1ZBTElEQVRJT05fUlVMRVMubWluKTtcclxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEpIHtcclxuICAgICAgICAgICAgICAgIHNldEN1c3RvbVZhbGlkaXR5KGVycm9yW25hbWVdLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKChtYXhMZW5ndGggfHwgbWluTGVuZ3RoKSAmJiAhaXNFbXB0eSAmJiBpc1N0cmluZyhpbnB1dFZhbHVlKSkge1xyXG4gICAgICAgIGNvbnN0IG1heExlbmd0aE91dHB1dCA9IGdldFZhbHVlQW5kTWVzc2FnZShtYXhMZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IG1pbkxlbmd0aE91dHB1dCA9IGdldFZhbHVlQW5kTWVzc2FnZShtaW5MZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IGV4Y2VlZE1heCA9ICFpc051bGxPclVuZGVmaW5lZChtYXhMZW5ndGhPdXRwdXQudmFsdWUpICYmXHJcbiAgICAgICAgICAgIGlucHV0VmFsdWUubGVuZ3RoID4gbWF4TGVuZ3RoT3V0cHV0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGV4Y2VlZE1pbiA9ICFpc051bGxPclVuZGVmaW5lZChtaW5MZW5ndGhPdXRwdXQudmFsdWUpICYmXHJcbiAgICAgICAgICAgIGlucHV0VmFsdWUubGVuZ3RoIDwgbWluTGVuZ3RoT3V0cHV0LnZhbHVlO1xyXG4gICAgICAgIGlmIChleGNlZWRNYXggfHwgZXhjZWVkTWluKSB7XHJcbiAgICAgICAgICAgIGdldE1pbk1heE1lc3NhZ2UoZXhjZWVkTWF4LCBtYXhMZW5ndGhPdXRwdXQubWVzc2FnZSwgbWluTGVuZ3RoT3V0cHV0Lm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VzdG9tVmFsaWRpdHkoZXJyb3JbbmFtZV0ubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAocGF0dGVybiAmJiAhaXNFbXB0eSAmJiBpc1N0cmluZyhpbnB1dFZhbHVlKSkge1xyXG4gICAgICAgIGNvbnN0IHsgdmFsdWU6IHBhdHRlcm5WYWx1ZSwgbWVzc2FnZSB9ID0gZ2V0VmFsdWVBbmRNZXNzYWdlKHBhdHRlcm4pO1xyXG4gICAgICAgIGlmIChpc1JlZ2V4KHBhdHRlcm5WYWx1ZSkgJiYgIWlucHV0VmFsdWUubWF0Y2gocGF0dGVyblZhbHVlKSkge1xyXG4gICAgICAgICAgICBlcnJvcltuYW1lXSA9IE9iamVjdC5hc3NpZ24oeyB0eXBlOiBJTlBVVF9WQUxJREFUSU9OX1JVTEVTLnBhdHRlcm4sIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICByZWYgfSwgYXBwZW5kRXJyb3JzQ3VycnkoSU5QVVRfVkFMSURBVElPTl9SVUxFUy5wYXR0ZXJuLCBtZXNzYWdlKSk7XHJcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXN0b21WYWxpZGl0eShtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh2YWxpZGF0ZSkge1xyXG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKHZhbGlkYXRlKSkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB2YWxpZGF0ZShpbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgY29uc3QgdmFsaWRhdGVFcnJvciA9IGdldFZhbGlkYXRlRXJyb3IocmVzdWx0LCBpbnB1dFJlZik7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZUVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcltuYW1lXSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdmFsaWRhdGVFcnJvciksIGFwcGVuZEVycm9yc0N1cnJ5KElOUFVUX1ZBTElEQVRJT05fUlVMRVMudmFsaWRhdGUsIHZhbGlkYXRlRXJyb3IubWVzc2FnZSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDdXN0b21WYWxpZGl0eSh2YWxpZGF0ZUVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc09iamVjdCh2YWxpZGF0ZSkpIHtcclxuICAgICAgICAgICAgbGV0IHZhbGlkYXRpb25SZXN1bHQgPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdmFsaWRhdGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghaXNFbXB0eU9iamVjdCh2YWxpZGF0aW9uUmVzdWx0KSAmJiAhdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZGF0ZUVycm9yID0gZ2V0VmFsaWRhdGVFcnJvcihhd2FpdCB2YWxpZGF0ZVtrZXldKGlucHV0VmFsdWUpLCBpbnB1dFJlZiwga2V5KTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZUVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblJlc3VsdCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdmFsaWRhdGVFcnJvciksIGFwcGVuZEVycm9yc0N1cnJ5KGtleSwgdmFsaWRhdGVFcnJvci5tZXNzYWdlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VzdG9tVmFsaWRpdHkodmFsaWRhdGVFcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yW25hbWVdID0gdmFsaWRhdGlvblJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFpc0VtcHR5T2JqZWN0KHZhbGlkYXRpb25SZXN1bHQpKSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcltuYW1lXSA9IE9iamVjdC5hc3NpZ24oeyByZWY6IGlucHV0UmVmIH0sIHZhbGlkYXRpb25SZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRDdXN0b21WYWxpZGl0eSh0cnVlKTtcclxuICAgIHJldHVybiBlcnJvcjtcclxufTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBtb2RlOiBWQUxJREFUSU9OX01PREUub25TdWJtaXQsXHJcbiAgICByZVZhbGlkYXRlTW9kZTogVkFMSURBVElPTl9NT0RFLm9uQ2hhbmdlLFxyXG4gICAgc2hvdWxkRm9jdXNFcnJvcjogdHJ1ZSxcclxufTtcclxuZnVuY3Rpb24gY3JlYXRlRm9ybUNvbnRyb2wocHJvcHMgPSB7fSkge1xyXG4gICAgbGV0IF9vcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucyksIHByb3BzKTtcclxuICAgIGxldCBfZm9ybVN0YXRlID0ge1xyXG4gICAgICAgIGlzRGlydHk6IGZhbHNlLFxyXG4gICAgICAgIGlzVmFsaWRhdGluZzogZmFsc2UsXHJcbiAgICAgICAgZGlydHlGaWVsZHM6IHt9LFxyXG4gICAgICAgIGlzU3VibWl0dGVkOiBmYWxzZSxcclxuICAgICAgICBzdWJtaXRDb3VudDogMCxcclxuICAgICAgICB0b3VjaGVkRmllbGRzOiB7fSxcclxuICAgICAgICBpc1N1Ym1pdHRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGlzU3VibWl0U3VjY2Vzc2Z1bDogZmFsc2UsXHJcbiAgICAgICAgaXNWYWxpZDogZmFsc2UsXHJcbiAgICAgICAgZXJyb3JzOiB7fSxcclxuICAgIH07XHJcbiAgICBsZXQgX2ZpZWxkcyA9IHt9O1xyXG4gICAgbGV0IF9kZWZhdWx0VmFsdWVzID0gX29wdGlvbnMuZGVmYXVsdFZhbHVlcyB8fCB7fTtcclxuICAgIGxldCBfZm9ybVZhbHVlcyA9IF9vcHRpb25zLnNob3VsZFVucmVnaXN0ZXJcclxuICAgICAgICA/IHt9XHJcbiAgICAgICAgOiBjbG9uZU9iamVjdChfZGVmYXVsdFZhbHVlcyk7XHJcbiAgICBsZXQgX3N0YXRlRmxhZ3MgPSB7XHJcbiAgICAgICAgYWN0aW9uOiBmYWxzZSxcclxuICAgICAgICBtb3VudDogZmFsc2UsXHJcbiAgICAgICAgd2F0Y2g6IGZhbHNlLFxyXG4gICAgfTtcclxuICAgIGxldCBfbmFtZXMgPSB7XHJcbiAgICAgICAgbW91bnQ6IG5ldyBTZXQoKSxcclxuICAgICAgICB1bk1vdW50OiBuZXcgU2V0KCksXHJcbiAgICAgICAgYXJyYXk6IG5ldyBTZXQoKSxcclxuICAgICAgICB3YXRjaDogbmV3IFNldCgpLFxyXG4gICAgfTtcclxuICAgIGxldCBkZWxheUVycm9yQ2FsbGJhY2s7XHJcbiAgICBsZXQgdGltZXIgPSAwO1xyXG4gICAgbGV0IHZhbGlkYXRlRmllbGRzID0ge307XHJcbiAgICBjb25zdCBfcHJveHlGb3JtU3RhdGUgPSB7XHJcbiAgICAgICAgaXNEaXJ0eTogZmFsc2UsXHJcbiAgICAgICAgZGlydHlGaWVsZHM6IGZhbHNlLFxyXG4gICAgICAgIHRvdWNoZWRGaWVsZHM6IGZhbHNlLFxyXG4gICAgICAgIGlzVmFsaWRhdGluZzogZmFsc2UsXHJcbiAgICAgICAgaXNWYWxpZDogZmFsc2UsXHJcbiAgICAgICAgZXJyb3JzOiBmYWxzZSxcclxuICAgIH07XHJcbiAgICBjb25zdCBfc3ViamVjdHMgPSB7XHJcbiAgICAgICAgd2F0Y2g6IGNyZWF0ZVN1YmplY3QoKSxcclxuICAgICAgICBhcnJheTogY3JlYXRlU3ViamVjdCgpLFxyXG4gICAgICAgIHN0YXRlOiBjcmVhdGVTdWJqZWN0KCksXHJcbiAgICB9O1xyXG4gICAgY29uc3QgdmFsaWRhdGlvbk1vZGVCZWZvcmVTdWJtaXQgPSBnZXRWYWxpZGF0aW9uTW9kZXMoX29wdGlvbnMubW9kZSk7XHJcbiAgICBjb25zdCB2YWxpZGF0aW9uTW9kZUFmdGVyU3VibWl0ID0gZ2V0VmFsaWRhdGlvbk1vZGVzKF9vcHRpb25zLnJlVmFsaWRhdGVNb2RlKTtcclxuICAgIGNvbnN0IHNob3VsZERpc3BsYXlBbGxBc3NvY2lhdGVkRXJyb3JzID0gX29wdGlvbnMuY3JpdGVyaWFNb2RlID09PSBWQUxJREFUSU9OX01PREUuYWxsO1xyXG4gICAgY29uc3QgZGVib3VuY2UgPSAoY2FsbGJhY2ssIHdhaXQpID0+ICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICB0aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IGNhbGxiYWNrKC4uLmFyZ3MpLCB3YWl0KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBfdXBkYXRlVmFsaWQgPSBhc3luYyAoc2hvdWxkU2tpcFJlbmRlcikgPT4ge1xyXG4gICAgICAgIGxldCBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKF9wcm94eUZvcm1TdGF0ZS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIGlzVmFsaWQgPSBfb3B0aW9ucy5yZXNvbHZlclxyXG4gICAgICAgICAgICAgICAgPyBpc0VtcHR5T2JqZWN0KChhd2FpdCBfZXhlY3V0ZVNjaGVtYSgpKS5lcnJvcnMpXHJcbiAgICAgICAgICAgICAgICA6IGF3YWl0IGV4ZWN1dGVCdWlsZEluVmFsaWRhdGlvbihfZmllbGRzLCB0cnVlKTtcclxuICAgICAgICAgICAgaWYgKCFzaG91bGRTa2lwUmVuZGVyICYmIGlzVmFsaWQgIT09IF9mb3JtU3RhdGUuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgX2Zvcm1TdGF0ZS5pc1ZhbGlkID0gaXNWYWxpZDtcclxuICAgICAgICAgICAgICAgIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KHtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgX3VwZGF0ZUZpZWxkQXJyYXkgPSAobmFtZSwgdmFsdWVzID0gW10sIG1ldGhvZCwgYXJncywgc2hvdWxkU2V0VmFsdWVzID0gdHJ1ZSwgc2hvdWxkVXBkYXRlRmllbGRzQW5kRXJyb3JzID0gdHJ1ZSkgPT4ge1xyXG4gICAgICAgIGlmIChhcmdzICYmIG1ldGhvZCkge1xyXG4gICAgICAgICAgICBfc3RhdGVGbGFncy5hY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoc2hvdWxkVXBkYXRlRmllbGRzQW5kRXJyb3JzICYmIEFycmF5LmlzQXJyYXkoZ2V0KF9maWVsZHMsIG5hbWUpKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGRWYWx1ZXMgPSBtZXRob2QoZ2V0KF9maWVsZHMsIG5hbWUpLCBhcmdzLmFyZ0EsIGFyZ3MuYXJnQik7XHJcbiAgICAgICAgICAgICAgICBzaG91bGRTZXRWYWx1ZXMgJiYgc2V0KF9maWVsZHMsIG5hbWUsIGZpZWxkVmFsdWVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX3Byb3h5Rm9ybVN0YXRlLmVycm9ycyAmJlxyXG4gICAgICAgICAgICAgICAgc2hvdWxkVXBkYXRlRmllbGRzQW5kRXJyb3JzICYmXHJcbiAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KGdldChfZm9ybVN0YXRlLmVycm9ycywgbmFtZSkpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvcnMgPSBtZXRob2QoZ2V0KF9mb3JtU3RhdGUuZXJyb3JzLCBuYW1lKSwgYXJncy5hcmdBLCBhcmdzLmFyZ0IpO1xyXG4gICAgICAgICAgICAgICAgc2hvdWxkU2V0VmFsdWVzICYmIHNldChfZm9ybVN0YXRlLmVycm9ycywgbmFtZSwgZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgIHVuc2V0RW1wdHlBcnJheShfZm9ybVN0YXRlLmVycm9ycywgbmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF9wcm94eUZvcm1TdGF0ZS50b3VjaGVkRmllbGRzICYmXHJcbiAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KGdldChfZm9ybVN0YXRlLnRvdWNoZWRGaWVsZHMsIG5hbWUpKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG91Y2hlZEZpZWxkcyA9IG1ldGhvZChnZXQoX2Zvcm1TdGF0ZS50b3VjaGVkRmllbGRzLCBuYW1lKSwgYXJncy5hcmdBLCBhcmdzLmFyZ0IpO1xyXG4gICAgICAgICAgICAgICAgc2hvdWxkU2V0VmFsdWVzICYmIHNldChfZm9ybVN0YXRlLnRvdWNoZWRGaWVsZHMsIG5hbWUsIHRvdWNoZWRGaWVsZHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfcHJveHlGb3JtU3RhdGUuZGlydHlGaWVsZHMpIHtcclxuICAgICAgICAgICAgICAgIF9mb3JtU3RhdGUuZGlydHlGaWVsZHMgPSBnZXREaXJ0eUZpZWxkcyhfZGVmYXVsdFZhbHVlcywgX2Zvcm1WYWx1ZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KHtcclxuICAgICAgICAgICAgICAgIGlzRGlydHk6IF9nZXREaXJ0eShuYW1lLCB2YWx1ZXMpLFxyXG4gICAgICAgICAgICAgICAgZGlydHlGaWVsZHM6IF9mb3JtU3RhdGUuZGlydHlGaWVsZHMsXHJcbiAgICAgICAgICAgICAgICBlcnJvcnM6IF9mb3JtU3RhdGUuZXJyb3JzLFxyXG4gICAgICAgICAgICAgICAgaXNWYWxpZDogX2Zvcm1TdGF0ZS5pc1ZhbGlkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldChfZm9ybVZhbHVlcywgbmFtZSwgdmFsdWVzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgdXBkYXRlRXJyb3JzID0gKG5hbWUsIGVycm9yKSA9PiAoc2V0KF9mb3JtU3RhdGUuZXJyb3JzLCBuYW1lLCBlcnJvciksXHJcbiAgICAgICAgX3N1YmplY3RzLnN0YXRlLm5leHQoe1xyXG4gICAgICAgICAgICBlcnJvcnM6IF9mb3JtU3RhdGUuZXJyb3JzLFxyXG4gICAgICAgIH0pKTtcclxuICAgIGNvbnN0IHVwZGF0ZVZhbGlkQW5kVmFsdWUgPSAobmFtZSwgc2hvdWxkU2tpcFNldFZhbHVlQXMsIHZhbHVlLCByZWYpID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZCA9IGdldChfZmllbGRzLCBuYW1lKTtcclxuICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlID0gZ2V0KF9mb3JtVmFsdWVzLCBuYW1lLCBpc1VuZGVmaW5lZCh2YWx1ZSkgPyBnZXQoX2RlZmF1bHRWYWx1ZXMsIG5hbWUpIDogdmFsdWUpO1xyXG4gICAgICAgICAgICBpc1VuZGVmaW5lZChkZWZhdWx0VmFsdWUpIHx8XHJcbiAgICAgICAgICAgICAgICAocmVmICYmIHJlZi5kZWZhdWx0Q2hlY2tlZCkgfHxcclxuICAgICAgICAgICAgICAgIHNob3VsZFNraXBTZXRWYWx1ZUFzXHJcbiAgICAgICAgICAgICAgICA/IHNldChfZm9ybVZhbHVlcywgbmFtZSwgc2hvdWxkU2tpcFNldFZhbHVlQXMgPyBkZWZhdWx0VmFsdWUgOiBnZXRGaWVsZFZhbHVlKGZpZWxkLl9mKSlcclxuICAgICAgICAgICAgICAgIDogc2V0RmllbGRWYWx1ZShuYW1lLCBkZWZhdWx0VmFsdWUpO1xyXG4gICAgICAgICAgICBfc3RhdGVGbGFncy5tb3VudCAmJiBfdXBkYXRlVmFsaWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgdXBkYXRlVG91Y2hBbmREaXJ0eSA9IChuYW1lLCBmaWVsZFZhbHVlLCBpc0JsdXJFdmVudCwgc2hvdWxkRGlydHksIHNob3VsZFJlbmRlcikgPT4ge1xyXG4gICAgICAgIGxldCBpc0ZpZWxkRGlydHkgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBvdXRwdXQgPSB7XHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBpc1ByZXZpb3VzRmllbGRUb3VjaGVkID0gZ2V0KF9mb3JtU3RhdGUudG91Y2hlZEZpZWxkcywgbmFtZSk7XHJcbiAgICAgICAgaWYgKF9wcm94eUZvcm1TdGF0ZS5pc0RpcnR5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzUHJldmlvdXNGb3JtRGlydHkgPSBfZm9ybVN0YXRlLmlzRGlydHk7XHJcbiAgICAgICAgICAgIF9mb3JtU3RhdGUuaXNEaXJ0eSA9IG91dHB1dC5pc0RpcnR5ID0gX2dldERpcnR5KCk7XHJcbiAgICAgICAgICAgIGlzRmllbGREaXJ0eSA9IGlzUHJldmlvdXNGb3JtRGlydHkgIT09IG91dHB1dC5pc0RpcnR5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoX3Byb3h5Rm9ybVN0YXRlLmRpcnR5RmllbGRzICYmICghaXNCbHVyRXZlbnQgfHwgc2hvdWxkRGlydHkpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzUHJldmlvdXNGaWVsZERpcnR5ID0gZ2V0KF9mb3JtU3RhdGUuZGlydHlGaWVsZHMsIG5hbWUpO1xyXG4gICAgICAgICAgICBjb25zdCBpc0N1cnJlbnRGaWVsZFByaXN0aW5lID0gZGVlcEVxdWFsKGdldChfZGVmYXVsdFZhbHVlcywgbmFtZSksIGZpZWxkVmFsdWUpO1xyXG4gICAgICAgICAgICBpc0N1cnJlbnRGaWVsZFByaXN0aW5lXHJcbiAgICAgICAgICAgICAgICA/IHVuc2V0KF9mb3JtU3RhdGUuZGlydHlGaWVsZHMsIG5hbWUpXHJcbiAgICAgICAgICAgICAgICA6IHNldChfZm9ybVN0YXRlLmRpcnR5RmllbGRzLCBuYW1lLCB0cnVlKTtcclxuICAgICAgICAgICAgb3V0cHV0LmRpcnR5RmllbGRzID0gX2Zvcm1TdGF0ZS5kaXJ0eUZpZWxkcztcclxuICAgICAgICAgICAgaXNGaWVsZERpcnR5ID1cclxuICAgICAgICAgICAgICAgIGlzRmllbGREaXJ0eSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGlzUHJldmlvdXNGaWVsZERpcnR5ICE9PSBnZXQoX2Zvcm1TdGF0ZS5kaXJ0eUZpZWxkcywgbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0JsdXJFdmVudCAmJiAhaXNQcmV2aW91c0ZpZWxkVG91Y2hlZCkge1xyXG4gICAgICAgICAgICBzZXQoX2Zvcm1TdGF0ZS50b3VjaGVkRmllbGRzLCBuYW1lLCBpc0JsdXJFdmVudCk7XHJcbiAgICAgICAgICAgIG91dHB1dC50b3VjaGVkRmllbGRzID0gX2Zvcm1TdGF0ZS50b3VjaGVkRmllbGRzO1xyXG4gICAgICAgICAgICBpc0ZpZWxkRGlydHkgPVxyXG4gICAgICAgICAgICAgICAgaXNGaWVsZERpcnR5IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKF9wcm94eUZvcm1TdGF0ZS50b3VjaGVkRmllbGRzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzUHJldmlvdXNGaWVsZFRvdWNoZWQgIT09IGlzQmx1ckV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXNGaWVsZERpcnR5ICYmIHNob3VsZFJlbmRlciAmJiBfc3ViamVjdHMuc3RhdGUubmV4dChvdXRwdXQpO1xyXG4gICAgICAgIHJldHVybiBpc0ZpZWxkRGlydHkgPyBvdXRwdXQgOiB7fTtcclxuICAgIH07XHJcbiAgICBjb25zdCBzaG91bGRSZW5kZXJCeUVycm9yID0gYXN5bmMgKHNob3VsZFNraXBSZW5kZXIsIG5hbWUsIGlzVmFsaWQsIGVycm9yLCBmaWVsZFN0YXRlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNGaWVsZEVycm9yID0gZ2V0KF9mb3JtU3RhdGUuZXJyb3JzLCBuYW1lKTtcclxuICAgICAgICBjb25zdCBzaG91bGRVcGRhdGVWYWxpZCA9IF9wcm94eUZvcm1TdGF0ZS5pc1ZhbGlkICYmIF9mb3JtU3RhdGUuaXNWYWxpZCAhPT0gaXNWYWxpZDtcclxuICAgICAgICBpZiAocHJvcHMuZGVsYXlFcnJvciAmJiBlcnJvcikge1xyXG4gICAgICAgICAgICBkZWxheUVycm9yQ2FsbGJhY2sgPVxyXG4gICAgICAgICAgICAgICAgZGVsYXlFcnJvckNhbGxiYWNrIHx8IGRlYm91bmNlKHVwZGF0ZUVycm9ycywgcHJvcHMuZGVsYXlFcnJvcik7XHJcbiAgICAgICAgICAgIGRlbGF5RXJyb3JDYWxsYmFjayhuYW1lLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgICAgICBlcnJvclxyXG4gICAgICAgICAgICAgICAgPyBzZXQoX2Zvcm1TdGF0ZS5lcnJvcnMsIG5hbWUsIGVycm9yKVxyXG4gICAgICAgICAgICAgICAgOiB1bnNldChfZm9ybVN0YXRlLmVycm9ycywgbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgoKGVycm9yID8gIWRlZXBFcXVhbChwcmV2aW91c0ZpZWxkRXJyb3IsIGVycm9yKSA6IHByZXZpb3VzRmllbGRFcnJvcikgfHxcclxuICAgICAgICAgICAgIWlzRW1wdHlPYmplY3QoZmllbGRTdGF0ZSkgfHxcclxuICAgICAgICAgICAgc2hvdWxkVXBkYXRlVmFsaWQpICYmXHJcbiAgICAgICAgICAgICFzaG91bGRTa2lwUmVuZGVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRGb3JtU3RhdGUgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZmllbGRTdGF0ZSksIChzaG91bGRVcGRhdGVWYWxpZCA/IHsgaXNWYWxpZCB9IDoge30pKSwgeyBlcnJvcnM6IF9mb3JtU3RhdGUuZXJyb3JzLCBuYW1lIH0pO1xyXG4gICAgICAgICAgICBfZm9ybVN0YXRlID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBfZm9ybVN0YXRlKSwgdXBkYXRlZEZvcm1TdGF0ZSk7XHJcbiAgICAgICAgICAgIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KHVwZGF0ZWRGb3JtU3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YWxpZGF0ZUZpZWxkc1tuYW1lXS0tO1xyXG4gICAgICAgIGlmIChfcHJveHlGb3JtU3RhdGUuaXNWYWxpZGF0aW5nICYmXHJcbiAgICAgICAgICAgICFPYmplY3QudmFsdWVzKHZhbGlkYXRlRmllbGRzKS5zb21lKCh2KSA9PiB2KSkge1xyXG4gICAgICAgICAgICBfc3ViamVjdHMuc3RhdGUubmV4dCh7XHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkYXRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFsaWRhdGVGaWVsZHMgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgX2V4ZWN1dGVTY2hlbWEgPSBhc3luYyAobmFtZSkgPT4gX29wdGlvbnMucmVzb2x2ZXJcclxuICAgICAgICA/IGF3YWl0IF9vcHRpb25zLnJlc29sdmVyKE9iamVjdC5hc3NpZ24oe30sIF9mb3JtVmFsdWVzKSwgX29wdGlvbnMuY29udGV4dCwgZ2V0UmVzb2x2ZXJPcHRpb25zKG5hbWUgfHwgX25hbWVzLm1vdW50LCBfZmllbGRzLCBfb3B0aW9ucy5jcml0ZXJpYU1vZGUsIF9vcHRpb25zLnNob3VsZFVzZU5hdGl2ZVZhbGlkYXRpb24pKVxyXG4gICAgICAgIDoge307XHJcbiAgICBjb25zdCBleGVjdXRlU2NoZW1hQW5kVXBkYXRlU3RhdGUgPSBhc3luYyAobmFtZXMpID0+IHtcclxuICAgICAgICBjb25zdCB7IGVycm9ycyB9ID0gYXdhaXQgX2V4ZWN1dGVTY2hlbWEoKTtcclxuICAgICAgICBpZiAobmFtZXMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIG5hbWVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IGdldChlcnJvcnMsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICA/IHNldChfZm9ybVN0YXRlLmVycm9ycywgbmFtZSwgZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgOiB1bnNldChfZm9ybVN0YXRlLmVycm9ycywgbmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIF9mb3JtU3RhdGUuZXJyb3JzID0gZXJyb3JzO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXJyb3JzO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGV4ZWN1dGVCdWlsZEluVmFsaWRhdGlvbiA9IGFzeW5jIChmaWVsZHMsIHNob3VsZE9ubHlDaGVja1ZhbGlkLCBjb250ZXh0ID0ge1xyXG4gICAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgfSkgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBpbiBmaWVsZHMpIHtcclxuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNbbmFtZV07XHJcbiAgICAgICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGRSZWZlcmVuY2UgPSBmaWVsZC5fZjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkVmFsdWUgPSBvbWl0KGZpZWxkLCAnX2YnKTtcclxuICAgICAgICAgICAgICAgIGlmIChmaWVsZFJlZmVyZW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkRXJyb3IgPSBhd2FpdCB2YWxpZGF0ZUZpZWxkKGZpZWxkLCBnZXQoX2Zvcm1WYWx1ZXMsIGZpZWxkUmVmZXJlbmNlLm5hbWUpLCBzaG91bGREaXNwbGF5QWxsQXNzb2NpYXRlZEVycm9ycywgX29wdGlvbnMuc2hvdWxkVXNlTmF0aXZlVmFsaWRhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkRXJyb3JbZmllbGRSZWZlcmVuY2UubmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC52YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkT25seUNoZWNrVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc2hvdWxkT25seUNoZWNrVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRFcnJvcltmaWVsZFJlZmVyZW5jZS5uYW1lXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzZXQoX2Zvcm1TdGF0ZS5lcnJvcnMsIGZpZWxkUmVmZXJlbmNlLm5hbWUsIGZpZWxkRXJyb3JbZmllbGRSZWZlcmVuY2UubmFtZV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHVuc2V0KF9mb3JtU3RhdGUuZXJyb3JzLCBmaWVsZFJlZmVyZW5jZS5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmaWVsZFZhbHVlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKGF3YWl0IGV4ZWN1dGVCdWlsZEluVmFsaWRhdGlvbihmaWVsZFZhbHVlLCBzaG91bGRPbmx5Q2hlY2tWYWxpZCwgY29udGV4dCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb250ZXh0LnZhbGlkO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IF9yZW1vdmVVbm1vdW50ZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIF9uYW1lcy51bk1vdW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZ2V0KF9maWVsZHMsIG5hbWUpO1xyXG4gICAgICAgICAgICBmaWVsZCAmJlxyXG4gICAgICAgICAgICAgICAgKGZpZWxkLl9mLnJlZnNcclxuICAgICAgICAgICAgICAgICAgICA/IGZpZWxkLl9mLnJlZnMuZXZlcnkoKHJlZikgPT4gIWxpdmUocmVmKSlcclxuICAgICAgICAgICAgICAgICAgICA6ICFsaXZlKGZpZWxkLl9mLnJlZikpICYmXHJcbiAgICAgICAgICAgICAgICB1bnJlZ2lzdGVyKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfbmFtZXMudW5Nb3VudCA9IG5ldyBTZXQoKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBfZ2V0RGlydHkgPSAobmFtZSwgZGF0YSkgPT4gKG5hbWUgJiYgZGF0YSAmJiBzZXQoX2Zvcm1WYWx1ZXMsIG5hbWUsIGRhdGEpLFxyXG4gICAgICAgICFkZWVwRXF1YWwoZ2V0VmFsdWVzKCksIF9kZWZhdWx0VmFsdWVzKSk7XHJcbiAgICBjb25zdCBfZ2V0V2F0Y2ggPSAobmFtZXMsIGRlZmF1bHRWYWx1ZSwgaXNHbG9iYWwpID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZFZhbHVlcyA9IE9iamVjdC5hc3NpZ24oe30sIChfc3RhdGVGbGFncy5tb3VudFxyXG4gICAgICAgICAgICA/IF9mb3JtVmFsdWVzXHJcbiAgICAgICAgICAgIDogaXNVbmRlZmluZWQoZGVmYXVsdFZhbHVlKVxyXG4gICAgICAgICAgICAgICAgPyBfZGVmYXVsdFZhbHVlc1xyXG4gICAgICAgICAgICAgICAgOiBpc1N0cmluZyhuYW1lcylcclxuICAgICAgICAgICAgICAgICAgICA/IHsgW25hbWVzXTogZGVmYXVsdFZhbHVlIH1cclxuICAgICAgICAgICAgICAgICAgICA6IGRlZmF1bHRWYWx1ZSkpO1xyXG4gICAgICAgIHJldHVybiBnZW5lcmF0ZVdhdGNoT3V0cHV0KG5hbWVzLCBfbmFtZXMsIGZpZWxkVmFsdWVzLCBpc0dsb2JhbCk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgX2dldEZpZWxkQXJyYXkgPSAobmFtZSkgPT4gY29tcGFjdChnZXQoX3N0YXRlRmxhZ3MubW91bnQgPyBfZm9ybVZhbHVlcyA6IF9kZWZhdWx0VmFsdWVzLCBuYW1lLCBwcm9wcy5zaG91bGRVbnJlZ2lzdGVyID8gZ2V0KF9kZWZhdWx0VmFsdWVzLCBuYW1lLCBbXSkgOiBbXSkpO1xyXG4gICAgY29uc3Qgc2V0RmllbGRWYWx1ZSA9IChuYW1lLCB2YWx1ZSwgb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSBnZXQoX2ZpZWxkcywgbmFtZSk7XHJcbiAgICAgICAgbGV0IGZpZWxkVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgY29uc3QgZmllbGRSZWZlcmVuY2UgPSBmaWVsZC5fZjtcclxuICAgICAgICAgICAgaWYgKGZpZWxkUmVmZXJlbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAhZmllbGRSZWZlcmVuY2UuZGlzYWJsZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICBzZXQoX2Zvcm1WYWx1ZXMsIG5hbWUsIGdldEZpZWxkVmFsdWVBcyh2YWx1ZSwgZmllbGRSZWZlcmVuY2UpKTtcclxuICAgICAgICAgICAgICAgIGZpZWxkVmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgICAgIGlzV2ViICYmIGlzSFRNTEVsZW1lbnQoZmllbGRSZWZlcmVuY2UucmVmKSAmJiBpc051bGxPclVuZGVmaW5lZCh2YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzTXVsdGlwbGVTZWxlY3QoZmllbGRSZWZlcmVuY2UucmVmKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFsuLi5maWVsZFJlZmVyZW5jZS5yZWYub3B0aW9uc10uZm9yRWFjaCgoc2VsZWN0UmVmKSA9PiAoc2VsZWN0UmVmLnNlbGVjdGVkID0gZmllbGRWYWx1ZS5pbmNsdWRlcyhzZWxlY3RSZWYudmFsdWUpKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChmaWVsZFJlZmVyZW5jZS5yZWZzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ2hlY2tCb3hJbnB1dChmaWVsZFJlZmVyZW5jZS5yZWYpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVmZXJlbmNlLnJlZnMubGVuZ3RoID4gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmaWVsZFJlZmVyZW5jZS5yZWZzLmZvckVhY2goKGNoZWNrYm94UmVmKSA9PiAoY2hlY2tib3hSZWYuY2hlY2tlZCA9IEFycmF5LmlzQXJyYXkoZmllbGRWYWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICEhZmllbGRWYWx1ZS5maW5kKChkYXRhKSA9PiBkYXRhID09PSBjaGVja2JveFJlZi52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZpZWxkVmFsdWUgPT09IGNoZWNrYm94UmVmLnZhbHVlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmllbGRSZWZlcmVuY2UucmVmc1swXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmaWVsZFJlZmVyZW5jZS5yZWZzWzBdLmNoZWNrZWQgPSAhIWZpZWxkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZWZlcmVuY2UucmVmcy5mb3JFYWNoKChyYWRpb1JlZikgPT4gKHJhZGlvUmVmLmNoZWNrZWQgPSByYWRpb1JlZi52YWx1ZSA9PT0gZmllbGRWYWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzRmlsZUlucHV0KGZpZWxkUmVmZXJlbmNlLnJlZikpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZFJlZmVyZW5jZS5yZWYudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkUmVmZXJlbmNlLnJlZi52YWx1ZSA9IGZpZWxkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWVsZFJlZmVyZW5jZS5yZWYudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfc3ViamVjdHMud2F0Y2gubmV4dCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgKG9wdGlvbnMuc2hvdWxkRGlydHkgfHwgb3B0aW9ucy5zaG91bGRUb3VjaCkgJiZcclxuICAgICAgICAgICAgdXBkYXRlVG91Y2hBbmREaXJ0eShuYW1lLCBmaWVsZFZhbHVlLCBvcHRpb25zLnNob3VsZFRvdWNoLCBvcHRpb25zLnNob3VsZERpcnR5LCB0cnVlKTtcclxuICAgICAgICBvcHRpb25zLnNob3VsZFZhbGlkYXRlICYmIHRyaWdnZXIobmFtZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc2V0VmFsdWVzID0gKG5hbWUsIHZhbHVlLCBvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBmaWVsZEtleSBpbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZFZhbHVlID0gdmFsdWVbZmllbGRLZXldO1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSBgJHtuYW1lfS4ke2ZpZWxkS2V5fWA7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZ2V0KF9maWVsZHMsIGZpZWxkTmFtZSk7XHJcbiAgICAgICAgICAgIChfbmFtZXMuYXJyYXkuaGFzKG5hbWUpIHx8XHJcbiAgICAgICAgICAgICAgICAhaXNQcmltaXRpdmUoZmllbGRWYWx1ZSkgfHxcclxuICAgICAgICAgICAgICAgIChmaWVsZCAmJiAhZmllbGQuX2YpKSAmJlxyXG4gICAgICAgICAgICAgICAgIWlzRGF0ZU9iamVjdChmaWVsZFZhbHVlKVxyXG4gICAgICAgICAgICAgICAgPyBzZXRWYWx1ZXMoZmllbGROYW1lLCBmaWVsZFZhbHVlLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgOiBzZXRGaWVsZFZhbHVlKGZpZWxkTmFtZSwgZmllbGRWYWx1ZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHNldFZhbHVlID0gKG5hbWUsIHZhbHVlLCBvcHRpb25zID0ge30pID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZCA9IGdldChfZmllbGRzLCBuYW1lKTtcclxuICAgICAgICBjb25zdCBpc0ZpZWxkQXJyYXkgPSBfbmFtZXMuYXJyYXkuaGFzKG5hbWUpO1xyXG4gICAgICAgIGNvbnN0IGNsb25lVmFsdWUgPSBjbG9uZU9iamVjdCh2YWx1ZSk7XHJcbiAgICAgICAgc2V0KF9mb3JtVmFsdWVzLCBuYW1lLCBjbG9uZVZhbHVlKTtcclxuICAgICAgICBpZiAoaXNGaWVsZEFycmF5KSB7XHJcbiAgICAgICAgICAgIF9zdWJqZWN0cy5hcnJheS5uZXh0KHtcclxuICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IF9mb3JtVmFsdWVzLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKChfcHJveHlGb3JtU3RhdGUuaXNEaXJ0eSB8fCBfcHJveHlGb3JtU3RhdGUuZGlydHlGaWVsZHMpICYmXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLnNob3VsZERpcnR5KSB7XHJcbiAgICAgICAgICAgICAgICBfZm9ybVN0YXRlLmRpcnR5RmllbGRzID0gZ2V0RGlydHlGaWVsZHMoX2RlZmF1bHRWYWx1ZXMsIF9mb3JtVmFsdWVzKTtcclxuICAgICAgICAgICAgICAgIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpcnR5RmllbGRzOiBfZm9ybVN0YXRlLmRpcnR5RmllbGRzLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzRGlydHk6IF9nZXREaXJ0eShuYW1lLCBjbG9uZVZhbHVlKSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmaWVsZCAmJiAhZmllbGQuX2YgJiYgIWlzTnVsbE9yVW5kZWZpbmVkKGNsb25lVmFsdWUpXHJcbiAgICAgICAgICAgICAgICA/IHNldFZhbHVlcyhuYW1lLCBjbG9uZVZhbHVlLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgOiBzZXRGaWVsZFZhbHVlKG5hbWUsIGNsb25lVmFsdWUsIG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpc1dhdGNoZWQobmFtZSwgX25hbWVzKSAmJiBfc3ViamVjdHMuc3RhdGUubmV4dCh7fSk7XHJcbiAgICAgICAgX3N1YmplY3RzLndhdGNoLm5leHQoe1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IG9uQ2hhbmdlID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGxldCBuYW1lID0gdGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSBnZXQoX2ZpZWxkcywgbmFtZSk7XHJcbiAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgIGxldCBlcnJvcjtcclxuICAgICAgICAgICAgbGV0IGlzVmFsaWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkVmFsdWUgPSB0YXJnZXQudHlwZVxyXG4gICAgICAgICAgICAgICAgPyBnZXRGaWVsZFZhbHVlKGZpZWxkLl9mKVxyXG4gICAgICAgICAgICAgICAgOiBnZXRFdmVudFZhbHVlKGV2ZW50KTtcclxuICAgICAgICAgICAgY29uc3QgaXNCbHVyRXZlbnQgPSBldmVudC50eXBlID09PSBFVkVOVFMuQkxVUiB8fCBldmVudC50eXBlID09PSBFVkVOVFMuRk9DVVNfT1VUO1xyXG4gICAgICAgICAgICBjb25zdCBzaG91bGRTa2lwVmFsaWRhdGlvbiA9ICghaGFzVmFsaWRhdGlvbihmaWVsZC5fZikgJiZcclxuICAgICAgICAgICAgICAgICFfb3B0aW9ucy5yZXNvbHZlciAmJlxyXG4gICAgICAgICAgICAgICAgIWdldChfZm9ybVN0YXRlLmVycm9ycywgbmFtZSkgJiZcclxuICAgICAgICAgICAgICAgICFmaWVsZC5fZi5kZXBzKSB8fFxyXG4gICAgICAgICAgICAgICAgc2tpcFZhbGlkYXRpb24oaXNCbHVyRXZlbnQsIGdldChfZm9ybVN0YXRlLnRvdWNoZWRGaWVsZHMsIG5hbWUpLCBfZm9ybVN0YXRlLmlzU3VibWl0dGVkLCB2YWxpZGF0aW9uTW9kZUFmdGVyU3VibWl0LCB2YWxpZGF0aW9uTW9kZUJlZm9yZVN1Ym1pdCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdhdGNoZWQgPSBpc1dhdGNoZWQobmFtZSwgX25hbWVzLCBpc0JsdXJFdmVudCk7XHJcbiAgICAgICAgICAgIHNldChfZm9ybVZhbHVlcywgbmFtZSwgZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgIGlmIChpc0JsdXJFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgZmllbGQuX2Yub25CbHVyICYmIGZpZWxkLl9mLm9uQmx1cihldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZmllbGQuX2Yub25DaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkLl9mLm9uQ2hhbmdlKGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBmaWVsZFN0YXRlID0gdXBkYXRlVG91Y2hBbmREaXJ0eShuYW1lLCBmaWVsZFZhbHVlLCBpc0JsdXJFdmVudCwgZmFsc2UpO1xyXG4gICAgICAgICAgICBjb25zdCBzaG91bGRSZW5kZXIgPSAhaXNFbXB0eU9iamVjdChmaWVsZFN0YXRlKSB8fCB3YXRjaGVkO1xyXG4gICAgICAgICAgICAhaXNCbHVyRXZlbnQgJiZcclxuICAgICAgICAgICAgICAgIF9zdWJqZWN0cy53YXRjaC5uZXh0KHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGV2ZW50LnR5cGUsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHNob3VsZFNraXBWYWxpZGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHNob3VsZFJlbmRlciAmJlxyXG4gICAgICAgICAgICAgICAgICAgIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KE9iamVjdC5hc3NpZ24oeyBuYW1lIH0sICh3YXRjaGVkID8ge30gOiBmaWVsZFN0YXRlKSkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAhaXNCbHVyRXZlbnQgJiYgd2F0Y2hlZCAmJiBfc3ViamVjdHMuc3RhdGUubmV4dCh7fSk7XHJcbiAgICAgICAgICAgIHZhbGlkYXRlRmllbGRzW25hbWVdID0gdmFsaWRhdGVGaWVsZHNbbmFtZV0gPyArMSA6IDE7XHJcbiAgICAgICAgICAgIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KHtcclxuICAgICAgICAgICAgICAgIGlzVmFsaWRhdGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChfb3B0aW9ucy5yZXNvbHZlcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBlcnJvcnMgfSA9IGF3YWl0IF9leGVjdXRlU2NoZW1hKFtuYW1lXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c0Vycm9yTG9va3VwUmVzdWx0ID0gc2NoZW1hRXJyb3JMb29rdXAoX2Zvcm1TdGF0ZS5lcnJvcnMsIF9maWVsZHMsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JMb29rdXBSZXN1bHQgPSBzY2hlbWFFcnJvckxvb2t1cChlcnJvcnMsIF9maWVsZHMsIHByZXZpb3VzRXJyb3JMb29rdXBSZXN1bHQubmFtZSB8fCBuYW1lKTtcclxuICAgICAgICAgICAgICAgIGVycm9yID0gZXJyb3JMb29rdXBSZXN1bHQuZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBuYW1lID0gZXJyb3JMb29rdXBSZXN1bHQubmFtZTtcclxuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBpc0VtcHR5T2JqZWN0KGVycm9ycyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvciA9IChhd2FpdCB2YWxpZGF0ZUZpZWxkKGZpZWxkLCBnZXQoX2Zvcm1WYWx1ZXMsIG5hbWUpLCBzaG91bGREaXNwbGF5QWxsQXNzb2NpYXRlZEVycm9ycywgX29wdGlvbnMuc2hvdWxkVXNlTmF0aXZlVmFsaWRhdGlvbikpW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IGF3YWl0IF91cGRhdGVWYWxpZCh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaWVsZC5fZi5kZXBzICYmIHRyaWdnZXIoZmllbGQuX2YuZGVwcyk7XHJcbiAgICAgICAgICAgIHNob3VsZFJlbmRlckJ5RXJyb3IoZmFsc2UsIG5hbWUsIGlzVmFsaWQsIGVycm9yLCBmaWVsZFN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgdHJpZ2dlciA9IGFzeW5jIChuYW1lLCBvcHRpb25zID0ge30pID0+IHtcclxuICAgICAgICBsZXQgaXNWYWxpZDtcclxuICAgICAgICBsZXQgdmFsaWRhdGlvblJlc3VsdDtcclxuICAgICAgICBjb25zdCBmaWVsZE5hbWVzID0gY29udmVydFRvQXJyYXlQYXlsb2FkKG5hbWUpO1xyXG4gICAgICAgIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KHtcclxuICAgICAgICAgICAgaXNWYWxpZGF0aW5nOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChfb3B0aW9ucy5yZXNvbHZlcikge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvcnMgPSBhd2FpdCBleGVjdXRlU2NoZW1hQW5kVXBkYXRlU3RhdGUoaXNVbmRlZmluZWQobmFtZSkgPyBuYW1lIDogZmllbGROYW1lcyk7XHJcbiAgICAgICAgICAgIGlzVmFsaWQgPSBpc0VtcHR5T2JqZWN0KGVycm9ycyk7XHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQgPSBuYW1lXHJcbiAgICAgICAgICAgICAgICA/ICFmaWVsZE5hbWVzLnNvbWUoKG5hbWUpID0+IGdldChlcnJvcnMsIG5hbWUpKVxyXG4gICAgICAgICAgICAgICAgOiBpc1ZhbGlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChuYW1lKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQgPSAoYXdhaXQgUHJvbWlzZS5hbGwoZmllbGROYW1lcy5tYXAoYXN5bmMgKGZpZWxkTmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSBnZXQoX2ZpZWxkcywgZmllbGROYW1lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBleGVjdXRlQnVpbGRJblZhbGlkYXRpb24oZmllbGQgJiYgZmllbGQuX2YgPyB7IFtmaWVsZE5hbWVdOiBmaWVsZCB9IDogZmllbGQpO1xyXG4gICAgICAgICAgICB9KSkpLmV2ZXJ5KEJvb2xlYW4pO1xyXG4gICAgICAgICAgICAhKCF2YWxpZGF0aW9uUmVzdWx0ICYmICFfZm9ybVN0YXRlLmlzVmFsaWQpICYmIF91cGRhdGVWYWxpZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFsaWRhdGlvblJlc3VsdCA9IGlzVmFsaWQgPSBhd2FpdCBleGVjdXRlQnVpbGRJblZhbGlkYXRpb24oX2ZpZWxkcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCAoIWlzU3RyaW5nKG5hbWUpIHx8XHJcbiAgICAgICAgICAgIChfcHJveHlGb3JtU3RhdGUuaXNWYWxpZCAmJiBpc1ZhbGlkICE9PSBfZm9ybVN0YXRlLmlzVmFsaWQpXHJcbiAgICAgICAgICAgID8ge31cclxuICAgICAgICAgICAgOiB7IG5hbWUgfSkpLCAoX29wdGlvbnMucmVzb2x2ZXIgPyB7IGlzVmFsaWQgfSA6IHt9KSksIHsgZXJyb3JzOiBfZm9ybVN0YXRlLmVycm9ycywgaXNWYWxpZGF0aW5nOiBmYWxzZSB9KSk7XHJcbiAgICAgICAgb3B0aW9ucy5zaG91bGRGb2N1cyAmJlxyXG4gICAgICAgICAgICAhdmFsaWRhdGlvblJlc3VsdCAmJlxyXG4gICAgICAgICAgICBmb2N1c0ZpZWxkQnkoX2ZpZWxkcywgKGtleSkgPT4gZ2V0KF9mb3JtU3RhdGUuZXJyb3JzLCBrZXkpLCBuYW1lID8gZmllbGROYW1lcyA6IF9uYW1lcy5tb3VudCk7XHJcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRpb25SZXN1bHQ7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZ2V0VmFsdWVzID0gKGZpZWxkTmFtZXMpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIF9kZWZhdWx0VmFsdWVzKSwgKF9zdGF0ZUZsYWdzLm1vdW50ID8gX2Zvcm1WYWx1ZXMgOiB7fSkpO1xyXG4gICAgICAgIHJldHVybiBpc1VuZGVmaW5lZChmaWVsZE5hbWVzKVxyXG4gICAgICAgICAgICA/IHZhbHVlc1xyXG4gICAgICAgICAgICA6IGlzU3RyaW5nKGZpZWxkTmFtZXMpXHJcbiAgICAgICAgICAgICAgICA/IGdldCh2YWx1ZXMsIGZpZWxkTmFtZXMpXHJcbiAgICAgICAgICAgICAgICA6IGZpZWxkTmFtZXMubWFwKChuYW1lKSA9PiBnZXQodmFsdWVzLCBuYW1lKSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZ2V0RmllbGRTdGF0ZSA9IChuYW1lLCBmb3JtU3RhdGUpID0+ICh7XHJcbiAgICAgICAgaW52YWxpZDogISFnZXQoKGZvcm1TdGF0ZSB8fCBfZm9ybVN0YXRlKS5lcnJvcnMsIG5hbWUpLFxyXG4gICAgICAgIGlzRGlydHk6ICEhZ2V0KChmb3JtU3RhdGUgfHwgX2Zvcm1TdGF0ZSkuZGlydHlGaWVsZHMsIG5hbWUpLFxyXG4gICAgICAgIGlzVG91Y2hlZDogISFnZXQoKGZvcm1TdGF0ZSB8fCBfZm9ybVN0YXRlKS50b3VjaGVkRmllbGRzLCBuYW1lKSxcclxuICAgICAgICBlcnJvcjogZ2V0KChmb3JtU3RhdGUgfHwgX2Zvcm1TdGF0ZSkuZXJyb3JzLCBuYW1lKSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY2xlYXJFcnJvcnMgPSAobmFtZSkgPT4ge1xyXG4gICAgICAgIG5hbWVcclxuICAgICAgICAgICAgPyBjb252ZXJ0VG9BcnJheVBheWxvYWQobmFtZSkuZm9yRWFjaCgoaW5wdXROYW1lKSA9PiB1bnNldChfZm9ybVN0YXRlLmVycm9ycywgaW5wdXROYW1lKSlcclxuICAgICAgICAgICAgOiAoX2Zvcm1TdGF0ZS5lcnJvcnMgPSB7fSk7XHJcbiAgICAgICAgX3N1YmplY3RzLnN0YXRlLm5leHQoe1xyXG4gICAgICAgICAgICBlcnJvcnM6IF9mb3JtU3RhdGUuZXJyb3JzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHNldEVycm9yID0gKG5hbWUsIGVycm9yLCBvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVmID0gKGdldChfZmllbGRzLCBuYW1lLCB7IF9mOiB7fSB9KS5fZiB8fCB7fSkucmVmO1xyXG4gICAgICAgIHNldChfZm9ybVN0YXRlLmVycm9ycywgbmFtZSwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBlcnJvciksIHsgcmVmIH0pKTtcclxuICAgICAgICBfc3ViamVjdHMuc3RhdGUubmV4dCh7XHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIGVycm9yczogX2Zvcm1TdGF0ZS5lcnJvcnMsXHJcbiAgICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG9wdGlvbnMgJiYgb3B0aW9ucy5zaG91bGRGb2N1cyAmJiByZWYgJiYgcmVmLmZvY3VzICYmIHJlZi5mb2N1cygpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHdhdGNoID0gKG5hbWUsIGRlZmF1bHRWYWx1ZSkgPT4gaXNGdW5jdGlvbihuYW1lKVxyXG4gICAgICAgID8gX3N1YmplY3RzLndhdGNoLnN1YnNjcmliZSh7XHJcbiAgICAgICAgICAgIG5leHQ6IChpbmZvKSA9PiBuYW1lKF9nZXRXYXRjaCh1bmRlZmluZWQsIGRlZmF1bHRWYWx1ZSksIGluZm8pLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgOiBfZ2V0V2F0Y2gobmFtZSwgZGVmYXVsdFZhbHVlLCB0cnVlKTtcclxuICAgIGNvbnN0IHVucmVnaXN0ZXIgPSAobmFtZSwgb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBmaWVsZE5hbWUgb2YgbmFtZSA/IGNvbnZlcnRUb0FycmF5UGF5bG9hZChuYW1lKSA6IF9uYW1lcy5tb3VudCkge1xyXG4gICAgICAgICAgICBfbmFtZXMubW91bnQuZGVsZXRlKGZpZWxkTmFtZSk7XHJcbiAgICAgICAgICAgIF9uYW1lcy5hcnJheS5kZWxldGUoZmllbGROYW1lKTtcclxuICAgICAgICAgICAgaWYgKGdldChfZmllbGRzLCBmaWVsZE5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMua2VlcFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5zZXQoX2ZpZWxkcywgZmllbGROYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB1bnNldChfZm9ybVZhbHVlcywgZmllbGROYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICFvcHRpb25zLmtlZXBFcnJvciAmJiB1bnNldChfZm9ybVN0YXRlLmVycm9ycywgZmllbGROYW1lKTtcclxuICAgICAgICAgICAgICAgICFvcHRpb25zLmtlZXBEaXJ0eSAmJiB1bnNldChfZm9ybVN0YXRlLmRpcnR5RmllbGRzLCBmaWVsZE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgIW9wdGlvbnMua2VlcFRvdWNoZWQgJiYgdW5zZXQoX2Zvcm1TdGF0ZS50b3VjaGVkRmllbGRzLCBmaWVsZE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgIV9vcHRpb25zLnNob3VsZFVucmVnaXN0ZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAhb3B0aW9ucy5rZWVwRGVmYXVsdFZhbHVlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdW5zZXQoX2RlZmF1bHRWYWx1ZXMsIGZpZWxkTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgX3N1YmplY3RzLndhdGNoLm5leHQoe30pO1xyXG4gICAgICAgIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgX2Zvcm1TdGF0ZSksICghb3B0aW9ucy5rZWVwRGlydHkgPyB7fSA6IHsgaXNEaXJ0eTogX2dldERpcnR5KCkgfSkpKTtcclxuICAgICAgICAhb3B0aW9ucy5rZWVwSXNWYWxpZCAmJiBfdXBkYXRlVmFsaWQoKTtcclxuICAgIH07XHJcbiAgICBjb25zdCByZWdpc3RlciA9IChuYW1lLCBvcHRpb25zID0ge30pID0+IHtcclxuICAgICAgICBsZXQgZmllbGQgPSBnZXQoX2ZpZWxkcywgbmFtZSk7XHJcbiAgICAgICAgY29uc3QgZGlzYWJsZWRJc0RlZmluZWQgPSBpc0Jvb2xlYW4ob3B0aW9ucy5kaXNhYmxlZCk7XHJcbiAgICAgICAgc2V0KF9maWVsZHMsIG5hbWUsIHtcclxuICAgICAgICAgICAgX2Y6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCAoZmllbGQgJiYgZmllbGQuX2YgPyBmaWVsZC5fZiA6IHsgcmVmOiB7IG5hbWUgfSB9KSksIHsgbmFtZSwgbW91bnQ6IHRydWUgfSksIG9wdGlvbnMpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIF9uYW1lcy5tb3VudC5hZGQobmFtZSk7XHJcbiAgICAgICAgZmllbGRcclxuICAgICAgICAgICAgPyBkaXNhYmxlZElzRGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgc2V0KF9mb3JtVmFsdWVzLCBuYW1lLCBvcHRpb25zLmRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICA6IGdldChfZm9ybVZhbHVlcywgbmFtZSwgZ2V0RmllbGRWYWx1ZShmaWVsZC5fZikpKVxyXG4gICAgICAgICAgICA6IHVwZGF0ZVZhbGlkQW5kVmFsdWUobmFtZSwgdHJ1ZSwgb3B0aW9ucy52YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCAoZGlzYWJsZWRJc0RlZmluZWQgPyB7IGRpc2FibGVkOiBvcHRpb25zLmRpc2FibGVkIH0gOiB7fSkpLCAoX29wdGlvbnMuc2hvdWxkVXNlTmF0aXZlVmFsaWRhdGlvblxyXG4gICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAhIW9wdGlvbnMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgICBtaW46IGdldFJ1bGVWYWx1ZShvcHRpb25zLm1pbiksXHJcbiAgICAgICAgICAgICAgICBtYXg6IGdldFJ1bGVWYWx1ZShvcHRpb25zLm1heCksXHJcbiAgICAgICAgICAgICAgICBtaW5MZW5ndGg6IGdldFJ1bGVWYWx1ZShvcHRpb25zLm1pbkxlbmd0aCksXHJcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IGdldFJ1bGVWYWx1ZShvcHRpb25zLm1heExlbmd0aCksXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBnZXRSdWxlVmFsdWUob3B0aW9ucy5wYXR0ZXJuKSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA6IHt9KSksIHsgbmFtZSxcclxuICAgICAgICAgICAgb25DaGFuZ2UsIG9uQmx1cjogb25DaGFuZ2UsIHJlZjogKHJlZikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlZikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyKG5hbWUsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkID0gZ2V0KF9maWVsZHMsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkUmVmID0gaXNVbmRlZmluZWQocmVmLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHJlZi5xdWVyeVNlbGVjdG9yQWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHJlZi5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCxzZWxlY3QsdGV4dGFyZWEnKVswXSB8fCByZWZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcmVmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogcmVmO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhZGlvT3JDaGVja2JveCA9IGlzUmFkaW9PckNoZWNrYm94KGZpZWxkUmVmKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWZzID0gZmllbGQuX2YucmVmcyB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmFkaW9PckNoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gcmVmcy5maW5kKChvcHRpb24pID0+IG9wdGlvbiA9PT0gZmllbGRSZWYpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZmllbGRSZWYgPT09IGZpZWxkLl9mLnJlZikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldChfZmllbGRzLCBuYW1lLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9mOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZpZWxkLl9mKSwgKHJhZGlvT3JDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmczogcmVmcy5jb25jYXQoZmllbGRSZWYpLmZpbHRlcihsaXZlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IHsgdHlwZTogZmllbGRSZWYudHlwZSwgbmFtZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7IHJlZjogZmllbGRSZWYgfSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVZhbGlkQW5kVmFsdWUobmFtZSwgZmFsc2UsIHVuZGVmaW5lZCwgZmllbGRSZWYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQgPSBnZXQoX2ZpZWxkcywgbmFtZSwge30pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5fZikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5fZi5tb3VudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAoX29wdGlvbnMuc2hvdWxkVW5yZWdpc3RlciB8fCBvcHRpb25zLnNob3VsZFVucmVnaXN0ZXIpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICEoaXNOYW1lSW5GaWVsZEFycmF5KF9uYW1lcy5hcnJheSwgbmFtZSkgJiYgX3N0YXRlRmxhZ3MuYWN0aW9uKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfbmFtZXMudW5Nb3VudC5hZGQobmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKG9uVmFsaWQsIG9uSW52YWxpZCkgPT4gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0ICYmIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5wZXJzaXN0ICYmIGUucGVyc2lzdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaGFzTm9Qcm9taXNlRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIGxldCBmaWVsZFZhbHVlcyA9IGNsb25lT2JqZWN0KF9mb3JtVmFsdWVzKTtcclxuICAgICAgICBfc3ViamVjdHMuc3RhdGUubmV4dCh7XHJcbiAgICAgICAgICAgIGlzU3VibWl0dGluZzogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoX29wdGlvbnMucmVzb2x2ZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3JzLCB2YWx1ZXMgfSA9IGF3YWl0IF9leGVjdXRlU2NoZW1hKCk7XHJcbiAgICAgICAgICAgICAgICBfZm9ybVN0YXRlLmVycm9ycyA9IGVycm9ycztcclxuICAgICAgICAgICAgICAgIGZpZWxkVmFsdWVzID0gdmFsdWVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZXhlY3V0ZUJ1aWxkSW5WYWxpZGF0aW9uKF9maWVsZHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc0VtcHR5T2JqZWN0KF9mb3JtU3RhdGUuZXJyb3JzKSAmJlxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoX2Zvcm1TdGF0ZS5lcnJvcnMpLmV2ZXJ5KChuYW1lKSA9PiBnZXQoZmllbGRWYWx1ZXMsIG5hbWUpKSkge1xyXG4gICAgICAgICAgICAgICAgX3N1YmplY3RzLnN0YXRlLm5leHQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yczoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgaXNTdWJtaXR0aW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBvblZhbGlkKGZpZWxkVmFsdWVzLCBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChvbkludmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBvbkludmFsaWQoT2JqZWN0LmFzc2lnbih7fSwgX2Zvcm1TdGF0ZS5lcnJvcnMpLCBlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF9vcHRpb25zLnNob3VsZEZvY3VzRXJyb3IgJiZcclxuICAgICAgICAgICAgICAgICAgICBmb2N1c0ZpZWxkQnkoX2ZpZWxkcywgKGtleSkgPT4gZ2V0KF9mb3JtU3RhdGUuZXJyb3JzLCBrZXkpLCBfbmFtZXMubW91bnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgaGFzTm9Qcm9taXNlRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgX2Zvcm1TdGF0ZS5pc1N1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KHtcclxuICAgICAgICAgICAgICAgIGlzU3VibWl0dGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaXNTdWJtaXR0aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzU3VibWl0U3VjY2Vzc2Z1bDogaXNFbXB0eU9iamVjdChfZm9ybVN0YXRlLmVycm9ycykgJiYgaGFzTm9Qcm9taXNlRXJyb3IsXHJcbiAgICAgICAgICAgICAgICBzdWJtaXRDb3VudDogX2Zvcm1TdGF0ZS5zdWJtaXRDb3VudCArIDEsXHJcbiAgICAgICAgICAgICAgICBlcnJvcnM6IF9mb3JtU3RhdGUuZXJyb3JzLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVzZXRGaWVsZCA9IChuYW1lLCBvcHRpb25zID0ge30pID0+IHtcclxuICAgICAgICBpZiAoZ2V0KF9maWVsZHMsIG5hbWUpKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1VuZGVmaW5lZChvcHRpb25zLmRlZmF1bHRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKG5hbWUsIGdldChfZGVmYXVsdFZhbHVlcywgbmFtZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWUobmFtZSwgb3B0aW9ucy5kZWZhdWx0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0KF9kZWZhdWx0VmFsdWVzLCBuYW1lLCBvcHRpb25zLmRlZmF1bHRWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmtlZXBUb3VjaGVkKSB7XHJcbiAgICAgICAgICAgICAgICB1bnNldChfZm9ybVN0YXRlLnRvdWNoZWRGaWVsZHMsIG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5rZWVwRGlydHkpIHtcclxuICAgICAgICAgICAgICAgIHVuc2V0KF9mb3JtU3RhdGUuZGlydHlGaWVsZHMsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgX2Zvcm1TdGF0ZS5pc0RpcnR5ID0gb3B0aW9ucy5kZWZhdWx0VmFsdWVcclxuICAgICAgICAgICAgICAgICAgICA/IF9nZXREaXJ0eShuYW1lLCBnZXQoX2RlZmF1bHRWYWx1ZXMsIG5hbWUpKVxyXG4gICAgICAgICAgICAgICAgICAgIDogX2dldERpcnR5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmtlZXBFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdW5zZXQoX2Zvcm1TdGF0ZS5lcnJvcnMsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgX3Byb3h5Rm9ybVN0YXRlLmlzVmFsaWQgJiYgX3VwZGF0ZVZhbGlkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3N1YmplY3RzLnN0YXRlLm5leHQoT2JqZWN0LmFzc2lnbih7fSwgX2Zvcm1TdGF0ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCByZXNldCA9IChmb3JtVmFsdWVzLCBrZWVwU3RhdGVPcHRpb25zID0ge30pID0+IHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkVmFsdWVzID0gZm9ybVZhbHVlcyB8fCBfZGVmYXVsdFZhbHVlcztcclxuICAgICAgICBjb25zdCBjbG9uZVVwZGF0ZWRWYWx1ZXMgPSBjbG9uZU9iamVjdCh1cGRhdGVkVmFsdWVzKTtcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSBmb3JtVmFsdWVzICYmICFpc0VtcHR5T2JqZWN0KGZvcm1WYWx1ZXMpXHJcbiAgICAgICAgICAgID8gY2xvbmVVcGRhdGVkVmFsdWVzXHJcbiAgICAgICAgICAgIDogX2RlZmF1bHRWYWx1ZXM7XHJcbiAgICAgICAgaWYgKCFrZWVwU3RhdGVPcHRpb25zLmtlZXBEZWZhdWx0VmFsdWVzKSB7XHJcbiAgICAgICAgICAgIF9kZWZhdWx0VmFsdWVzID0gdXBkYXRlZFZhbHVlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFrZWVwU3RhdGVPcHRpb25zLmtlZXBWYWx1ZXMpIHtcclxuICAgICAgICAgICAgaWYgKGlzV2ViICYmIGlzVW5kZWZpbmVkKGZvcm1WYWx1ZXMpKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgX25hbWVzLm1vdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSBnZXQoX2ZpZWxkcywgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkICYmIGZpZWxkLl9mKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkUmVmZXJlbmNlID0gQXJyYXkuaXNBcnJheShmaWVsZC5fZi5yZWZzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmaWVsZC5fZi5yZWZzWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZpZWxkLl9mLnJlZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSFRNTEVsZW1lbnQoZmllbGRSZWZlcmVuY2UpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZWZlcmVuY2UuY2xvc2VzdCgnZm9ybScpLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoX2EpIHsgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfZm9ybVZhbHVlcyA9IHByb3BzLnNob3VsZFVucmVnaXN0ZXJcclxuICAgICAgICAgICAgICAgID8ga2VlcFN0YXRlT3B0aW9ucy5rZWVwRGVmYXVsdFZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgID8gY2xvbmVPYmplY3QoX2RlZmF1bHRWYWx1ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgOiB7fVxyXG4gICAgICAgICAgICAgICAgOiBjbG9uZVVwZGF0ZWRWYWx1ZXM7XHJcbiAgICAgICAgICAgIF9maWVsZHMgPSB7fTtcclxuICAgICAgICAgICAgX3N1YmplY3RzLmFycmF5Lm5leHQoe1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgX3N1YmplY3RzLndhdGNoLm5leHQoe1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgX25hbWVzID0ge1xyXG4gICAgICAgICAgICBtb3VudDogbmV3IFNldCgpLFxyXG4gICAgICAgICAgICB1bk1vdW50OiBuZXcgU2V0KCksXHJcbiAgICAgICAgICAgIGFycmF5OiBuZXcgU2V0KCksXHJcbiAgICAgICAgICAgIHdhdGNoOiBuZXcgU2V0KCksXHJcbiAgICAgICAgICAgIHdhdGNoQWxsOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9jdXM6ICcnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgX3N0YXRlRmxhZ3MubW91bnQgPVxyXG4gICAgICAgICAgICAhX3Byb3h5Rm9ybVN0YXRlLmlzVmFsaWQgfHwgISFrZWVwU3RhdGVPcHRpb25zLmtlZXBJc1ZhbGlkO1xyXG4gICAgICAgIF9zdGF0ZUZsYWdzLndhdGNoID0gISFwcm9wcy5zaG91bGRVbnJlZ2lzdGVyO1xyXG4gICAgICAgIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KHtcclxuICAgICAgICAgICAgc3VibWl0Q291bnQ6IGtlZXBTdGF0ZU9wdGlvbnMua2VlcFN1Ym1pdENvdW50XHJcbiAgICAgICAgICAgICAgICA/IF9mb3JtU3RhdGUuc3VibWl0Q291bnRcclxuICAgICAgICAgICAgICAgIDogMCxcclxuICAgICAgICAgICAgaXNEaXJ0eToga2VlcFN0YXRlT3B0aW9ucy5rZWVwRGlydHlcclxuICAgICAgICAgICAgICAgID8gX2Zvcm1TdGF0ZS5pc0RpcnR5XHJcbiAgICAgICAgICAgICAgICA6IGtlZXBTdGF0ZU9wdGlvbnMua2VlcERlZmF1bHRWYWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICA/ICFkZWVwRXF1YWwoZm9ybVZhbHVlcywgX2RlZmF1bHRWYWx1ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNTdWJtaXR0ZWQ6IGtlZXBTdGF0ZU9wdGlvbnMua2VlcElzU3VibWl0dGVkXHJcbiAgICAgICAgICAgICAgICA/IF9mb3JtU3RhdGUuaXNTdWJtaXR0ZWRcclxuICAgICAgICAgICAgICAgIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRpcnR5RmllbGRzOiBrZWVwU3RhdGVPcHRpb25zLmtlZXBEaXJ0eVxyXG4gICAgICAgICAgICAgICAgPyBfZm9ybVN0YXRlLmRpcnR5RmllbGRzXHJcbiAgICAgICAgICAgICAgICA6IChrZWVwU3RhdGVPcHRpb25zLmtlZXBEZWZhdWx0VmFsdWVzICYmIGZvcm1WYWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICA/IE9iamVjdC5lbnRyaWVzKGZvcm1WYWx1ZXMpLnJlZHVjZSgocHJldmlvdXMsIFtrZXksIHZhbHVlXSkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcHJldmlvdXMpLCB7IFtrZXldOiB2YWx1ZSAhPT0gZ2V0KF9kZWZhdWx0VmFsdWVzLCBrZXkpIH0pKSwge30pXHJcbiAgICAgICAgICAgICAgICAgICAgOiB7fSksXHJcbiAgICAgICAgICAgIHRvdWNoZWRGaWVsZHM6IGtlZXBTdGF0ZU9wdGlvbnMua2VlcFRvdWNoZWRcclxuICAgICAgICAgICAgICAgID8gX2Zvcm1TdGF0ZS50b3VjaGVkRmllbGRzXHJcbiAgICAgICAgICAgICAgICA6IHt9LFxyXG4gICAgICAgICAgICBlcnJvcnM6IGtlZXBTdGF0ZU9wdGlvbnMua2VlcEVycm9yc1xyXG4gICAgICAgICAgICAgICAgPyBfZm9ybVN0YXRlLmVycm9yc1xyXG4gICAgICAgICAgICAgICAgOiB7fSxcclxuICAgICAgICAgICAgaXNTdWJtaXR0aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNTdWJtaXRTdWNjZXNzZnVsOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBzZXRGb2N1cyA9IChuYW1lLCBvcHRpb25zID0ge30pID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZCA9IGdldChfZmllbGRzLCBuYW1lKS5fZjtcclxuICAgICAgICBjb25zdCBmaWVsZFJlZiA9IGZpZWxkLnJlZnMgPyBmaWVsZC5yZWZzWzBdIDogZmllbGQucmVmO1xyXG4gICAgICAgIG9wdGlvbnMuc2hvdWxkU2VsZWN0ID8gZmllbGRSZWYuc2VsZWN0KCkgOiBmaWVsZFJlZi5mb2N1cygpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY29udHJvbDoge1xyXG4gICAgICAgICAgICByZWdpc3RlcixcclxuICAgICAgICAgICAgdW5yZWdpc3RlcixcclxuICAgICAgICAgICAgZ2V0RmllbGRTdGF0ZSxcclxuICAgICAgICAgICAgX2V4ZWN1dGVTY2hlbWEsXHJcbiAgICAgICAgICAgIF9nZXRXYXRjaCxcclxuICAgICAgICAgICAgX2dldERpcnR5LFxyXG4gICAgICAgICAgICBfdXBkYXRlVmFsaWQsXHJcbiAgICAgICAgICAgIF9yZW1vdmVVbm1vdW50ZWQsXHJcbiAgICAgICAgICAgIF91cGRhdGVGaWVsZEFycmF5LFxyXG4gICAgICAgICAgICBfZ2V0RmllbGRBcnJheSxcclxuICAgICAgICAgICAgX3N1YmplY3RzLFxyXG4gICAgICAgICAgICBfcHJveHlGb3JtU3RhdGUsXHJcbiAgICAgICAgICAgIGdldCBfZmllbGRzKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9maWVsZHM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldCBfZm9ybVZhbHVlcygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfZm9ybVZhbHVlcztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0IF9zdGF0ZUZsYWdzKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9zdGF0ZUZsYWdzO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQgX3N0YXRlRmxhZ3ModmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIF9zdGF0ZUZsYWdzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldCBfZGVmYXVsdFZhbHVlcygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfZGVmYXVsdFZhbHVlcztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0IF9uYW1lcygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfbmFtZXM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldCBfbmFtZXModmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIF9uYW1lcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXQgX2Zvcm1TdGF0ZSgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfZm9ybVN0YXRlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQgX2Zvcm1TdGF0ZSh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgX2Zvcm1TdGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXQgX29wdGlvbnMoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX29wdGlvbnM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldCBfb3B0aW9ucyh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgX29wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIF9vcHRpb25zKSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHJpZ2dlcixcclxuICAgICAgICByZWdpc3RlcixcclxuICAgICAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICAgICAgd2F0Y2gsXHJcbiAgICAgICAgc2V0VmFsdWUsXHJcbiAgICAgICAgZ2V0VmFsdWVzLFxyXG4gICAgICAgIHJlc2V0LFxyXG4gICAgICAgIHJlc2V0RmllbGQsXHJcbiAgICAgICAgY2xlYXJFcnJvcnMsXHJcbiAgICAgICAgdW5yZWdpc3RlcixcclxuICAgICAgICBzZXRFcnJvcixcclxuICAgICAgICBzZXRGb2N1cyxcclxuICAgICAgICBnZXRGaWVsZFN0YXRlLFxyXG4gICAgfTtcclxufVxuXG4vKipcclxuICogQ3VzdG9tIGhvb2sgdG8gbWFuZ2UgdGhlIGVudGlyZSBmb3JtLlxyXG4gKlxyXG4gKiBAcmVtYXJrc1xyXG4gKiBbQVBJXShodHRwczovL3JlYWN0LWhvb2stZm9ybS5jb20vYXBpL3VzZWZvcm0pIOKAoiBbRGVtb10oaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zL3JlYWN0LWhvb2stZm9ybS1nZXQtc3RhcnRlZC10cy01a3NtbSkg4oCiIFtWaWRlb10oaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1Sa1h2NEFYWENfNClcclxuICpcclxuICogQHBhcmFtIHByb3BzIC0gZm9ybSBjb25maWd1cmF0aW9uIGFuZCB2YWxpZGF0aW9uIHBhcmFtZXRlcnMuXHJcbiAqXHJcbiAqIEByZXR1cm5zIG1ldGhvZHMgLSBpbmRpdmlkdWFsIGZ1bmN0aW9ucyB0byBtYW5hZ2UgdGhlIGZvcm0gc3RhdGUuIHtAbGluayBVc2VGb3JtUmV0dXJufVxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBgYGB0c3hcclxuICogZnVuY3Rpb24gQXBwKCkge1xyXG4gKiAgIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgd2F0Y2gsIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSB9ID0gdXNlRm9ybSgpO1xyXG4gKiAgIGNvbnN0IG9uU3VibWl0ID0gZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKTtcclxuICpcclxuICogICBjb25zb2xlLmxvZyh3YXRjaChcImV4YW1wbGVcIikpO1xyXG4gKlxyXG4gKiAgIHJldHVybiAoXHJcbiAqICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcbiAqICAgICAgIDxpbnB1dCBkZWZhdWx0VmFsdWU9XCJ0ZXN0XCIgey4uLnJlZ2lzdGVyKFwiZXhhbXBsZVwiKX0gLz5cclxuICogICAgICAgPGlucHV0IHsuLi5yZWdpc3RlcihcImV4YW1wbGVSZXF1aXJlZFwiLCB7IHJlcXVpcmVkOiB0cnVlIH0pfSAvPlxyXG4gKiAgICAgICB7ZXJyb3JzLmV4YW1wbGVSZXF1aXJlZCAmJiA8c3Bhbj5UaGlzIGZpZWxkIGlzIHJlcXVpcmVkPC9zcGFuPn1cclxuICogICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiAvPlxyXG4gKiAgICAgPC9mb3JtPlxyXG4gKiAgICk7XHJcbiAqIH1cclxuICogYGBgXHJcbiAqL1xyXG5mdW5jdGlvbiB1c2VGb3JtKHByb3BzID0ge30pIHtcclxuICAgIGNvbnN0IF9mb3JtQ29udHJvbCA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgY29uc3QgW2Zvcm1TdGF0ZSwgdXBkYXRlRm9ybVN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgICAgICBpc0RpcnR5OiBmYWxzZSxcclxuICAgICAgICBpc1ZhbGlkYXRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGRpcnR5RmllbGRzOiB7fSxcclxuICAgICAgICBpc1N1Ym1pdHRlZDogZmFsc2UsXHJcbiAgICAgICAgc3VibWl0Q291bnQ6IDAsXHJcbiAgICAgICAgdG91Y2hlZEZpZWxkczoge30sXHJcbiAgICAgICAgaXNTdWJtaXR0aW5nOiBmYWxzZSxcclxuICAgICAgICBpc1N1Ym1pdFN1Y2Nlc3NmdWw6IGZhbHNlLFxyXG4gICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yczoge30sXHJcbiAgICB9KTtcclxuICAgIGlmIChfZm9ybUNvbnRyb2wuY3VycmVudCkge1xyXG4gICAgICAgIF9mb3JtQ29udHJvbC5jdXJyZW50LmNvbnRyb2wuX29wdGlvbnMgPSBwcm9wcztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIF9mb3JtQ29udHJvbC5jdXJyZW50ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjcmVhdGVGb3JtQ29udHJvbChwcm9wcykpLCB7IGZvcm1TdGF0ZSB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IGNvbnRyb2wgPSBfZm9ybUNvbnRyb2wuY3VycmVudC5jb250cm9sO1xyXG4gICAgY29uc3QgY2FsbGJhY2sgPSBSZWFjdC51c2VDYWxsYmFjaygodmFsdWUpID0+IHtcclxuICAgICAgICBpZiAoc2hvdWxkUmVuZGVyRm9ybVN0YXRlKHZhbHVlLCBjb250cm9sLl9wcm94eUZvcm1TdGF0ZSwgdHJ1ZSkpIHtcclxuICAgICAgICAgICAgY29udHJvbC5fZm9ybVN0YXRlID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb250cm9sLl9mb3JtU3RhdGUpLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZShPYmplY3QuYXNzaWduKHt9LCBjb250cm9sLl9mb3JtU3RhdGUpKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbY29udHJvbF0pO1xyXG4gICAgdXNlU3Vic2NyaWJlKHtcclxuICAgICAgICBzdWJqZWN0OiBjb250cm9sLl9zdWJqZWN0cy5zdGF0ZSxcclxuICAgICAgICBjYWxsYmFjayxcclxuICAgIH0pO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIWNvbnRyb2wuX3N0YXRlRmxhZ3MubW91bnQpIHtcclxuICAgICAgICAgICAgY29udHJvbC5fcHJveHlGb3JtU3RhdGUuaXNWYWxpZCAmJiBjb250cm9sLl91cGRhdGVWYWxpZCgpO1xyXG4gICAgICAgICAgICBjb250cm9sLl9zdGF0ZUZsYWdzLm1vdW50ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbnRyb2wuX3N0YXRlRmxhZ3Mud2F0Y2gpIHtcclxuICAgICAgICAgICAgY29udHJvbC5fc3RhdGVGbGFncy53YXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb250cm9sLl9zdWJqZWN0cy5zdGF0ZS5uZXh0KHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29udHJvbC5fcmVtb3ZlVW5tb3VudGVkKCk7XHJcbiAgICB9KTtcclxuICAgIF9mb3JtQ29udHJvbC5jdXJyZW50LmZvcm1TdGF0ZSA9IGdldFByb3h5Rm9ybVN0YXRlKGZvcm1TdGF0ZSwgY29udHJvbC5fcHJveHlGb3JtU3RhdGUpO1xyXG4gICAgcmV0dXJuIF9mb3JtQ29udHJvbC5jdXJyZW50O1xyXG59XG5cbmV4cG9ydCB7IENvbnRyb2xsZXIsIEZvcm1Qcm92aWRlciwgYXBwZW5kRXJyb3JzLCBnZXQsIHNldCwgdXNlQ29udHJvbGxlciwgdXNlRmllbGRBcnJheSwgdXNlRm9ybSwgdXNlRm9ybUNvbnRleHQsIHVzZUZvcm1TdGF0ZSwgdXNlV2F0Y2ggfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5tanMubWFwXG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuLy8gVE9ETzogdGhpcyBpcyBzcGVjaWFsIGJlY2F1c2UgaXQgZ2V0cyBpbXBvcnRlZCBkdXJpbmcgYnVpbGQuXG52YXIgUmVhY3RWZXJzaW9uID0gJzE3LjAuMic7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG5leHBvcnRzLkZyYWdtZW50ID0gMHhlYWNiO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gMHhlYWNjO1xuZXhwb3J0cy5Qcm9maWxlciA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xuZXhwb3J0cy5TdXNwZW5zZSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIGV4cG9ydHMuRnJhZ21lbnQgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIGV4cG9ydHMuU3RyaWN0TW9kZSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgZXhwb3J0cy5Qcm9maWxlciA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIGV4cG9ydHMuU3VzcGVuc2UgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBkaXNwYXRjaGVyLlxuICovXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGJhdGNoJ3MgY29uZmlndXJhdGlvbiBzdWNoIGFzIGhvdyBsb25nIGFuIHVwZGF0ZVxuICogc2hvdWxkIHN1c3BlbmQgZm9yIGlmIGl0IG5lZWRzIHRvLlxuICovXG52YXIgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcgPSB7XG4gIHRyYW5zaXRpb246IDBcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgb3duZXIuXG4gKlxuICogVGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIGNvbXBvbmVudCB3aG8gc2hvdWxkIG93biBhbnkgY29tcG9uZW50cyB0aGF0IGFyZVxuICogY3VycmVudGx5IGJlaW5nIGNvbnN0cnVjdGVkLlxuICovXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSB7fTtcbnZhciBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gbnVsbDtcbmZ1bmN0aW9uIHNldEV4dHJhU3RhY2tGcmFtZShzdGFjaykge1xuICB7XG4gICAgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IHN0YWNrO1xuICB9XG59XG5cbntcbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUgPSBmdW5jdGlvbiAoc3RhY2spIHtcbiAgICB7XG4gICAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gICAgfVxuICB9OyAvLyBTdGFjayBpbXBsZW1lbnRhdGlvbiBpbmplY3RlZCBieSB0aGUgY3VycmVudCByZW5kZXJlci5cblxuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7IC8vIEFkZCBhbiBleHRyYSB0b3AgZnJhbWUgd2hpbGUgYW4gZWxlbWVudCBpcyBiZWluZyB2YWxpZGF0ZWRcblxuICAgIGlmIChjdXJyZW50RXh0cmFTdGFja0ZyYW1lKSB7XG4gICAgICBzdGFjayArPSBjdXJyZW50RXh0cmFTdGFja0ZyYW1lO1xuICAgIH0gLy8gRGVsZWdhdGUgdG8gdGhlIGluamVjdGVkIHJlbmRlcmVyLXNwZWNpZmljIGltcGxlbWVudGF0aW9uXG5cblxuICAgIHZhciBpbXBsID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2s7XG5cbiAgICBpZiAoaW1wbCkge1xuICAgICAgc3RhY2sgKz0gaW1wbCgpIHx8ICcnO1xuICAgIH1cblxuICAgIHJldHVybiBzdGFjaztcbiAgfTtcbn1cblxuLyoqXG4gKiBVc2VkIGJ5IGFjdCgpIHRvIHRyYWNrIHdoZXRoZXIgeW91J3JlIGluc2lkZSBhbiBhY3QoKSBzY29wZS5cbiAqL1xudmFyIElzU29tZVJlbmRlcmVyQWN0aW5nID0ge1xuICBjdXJyZW50OiBmYWxzZVxufTtcblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0ge1xuICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyOiBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLFxuICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzogUmVhY3RDdXJyZW50QmF0Y2hDb25maWcsXG4gIFJlYWN0Q3VycmVudE93bmVyOiBSZWFjdEN1cnJlbnRPd25lcixcbiAgSXNTb21lUmVuZGVyZXJBY3Rpbmc6IElzU29tZVJlbmRlcmVyQWN0aW5nLFxuICAvLyBVc2VkIGJ5IHJlbmRlcmVycyB0byBhdm9pZCBidW5kbGluZyBvYmplY3QtYXNzaWduIHR3aWNlIGluIFVNRCBidW5kbGVzOlxuICBhc3NpZ246IF9hc3NpZ25cbn07XG5cbntcbiAgUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG59XG5cbi8vIGJ5IGNhbGxzIHRvIHRoZXNlIG1ldGhvZHMgYnkgYSBCYWJlbCBwbHVnaW4uXG4vL1xuLy8gSW4gUFJPRCAob3IgaW4gcGFja2FnZXMgd2l0aG91dCBhY2Nlc3MgdG8gUmVhY3QgaW50ZXJuYWxzKSxcbi8vIHRoZXkgYXJlIGxlZnQgYXMgdGhleSBhcmUgaW5zdGVhZC5cblxuZnVuY3Rpb24gd2Fybihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnd2FybicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfVxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAnJyArIGl0ZW07XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG52YXIgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50ID0ge307XG5cbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gIHtcbiAgICB2YXIgX2NvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBfY29uc3RydWN0b3IgJiYgKF9jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBfY29uc3RydWN0b3IubmFtZSkgfHwgJ1JlYWN0Q2xhc3MnO1xuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArIFwiLlwiICsgY2FsbGVyTmFtZTtcblxuICAgIGlmIChkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlcnJvcihcIkNhbid0IGNhbGwgJXMgb24gYSBjb21wb25lbnQgdGhhdCBpcyBub3QgeWV0IG1vdW50ZWQuIFwiICsgJ1RoaXMgaXMgYSBuby1vcCwgYnV0IGl0IG1pZ2h0IGluZGljYXRlIGEgYnVnIGluIHlvdXIgYXBwbGljYXRpb24uICcgKyAnSW5zdGVhZCwgYXNzaWduIHRvIGB0aGlzLnN0YXRlYCBkaXJlY3RseSBvciBkZWZpbmUgYSBgc3RhdGUgPSB7fTtgICcgKyAnY2xhc3MgcHJvcGVydHkgd2l0aCB0aGUgZGVzaXJlZCBzdGF0ZSBpbiB0aGUgJXMgY29tcG9uZW50LicsIGNhbGxlck5hbWUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcbiAgfVxufVxuLyoqXG4gKiBUaGlzIGlzIHRoZSBhYnN0cmFjdCBBUEkgZm9yIGFuIHVwZGF0ZSBxdWV1ZS5cbiAqL1xuXG5cbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAZmluYWxcbiAgICovXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBOYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICB9XG59O1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcblxue1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cblxuXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDsgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgaWYgKCEodHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBwYXJ0aWFsU3RhdGUgPT0gbnVsbCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG59O1xuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcbi8qKlxuICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICovXG5cblxue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG5cbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5cbkNvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4vKipcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxuICovXG5cbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxudmFyIHB1cmVDb21wb25lbnRQcm90b3R5cGUgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7IC8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuXG5fYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xuXG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblxuLy8gYW4gaW1tdXRhYmxlIG9iamVjdCB3aXRoIGEgc2luZ2xlIG11dGFibGUgdmFsdWVcbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcbiAgdmFyIHJlZk9iamVjdCA9IHtcbiAgICBjdXJyZW50OiBudWxsXG4gIH07XG5cbiAge1xuICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVmT2JqZWN0O1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLkZyYWdtZW50OlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBleHBvcnRzLlByb2ZpbGVyOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIGV4cG9ydHMuU3RyaWN0TW9kZTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIGV4cG9ydHMuU3VzcGVuc2U6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24sIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duLCBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBjb25maWcuX19zZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBjb25maWcuX19zZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGNvbXBvbmVudE5hbWUsIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IG9mIHRoZSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjcmVhdGVlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gIHZhciBwcm9wcyA9IHt9O1xuICB2YXIga2V5ID0gbnVsbDtcbiAgdmFyIHJlZiA9IG51bGw7XG4gIHZhciBzZWxmID0gbnVsbDtcbiAgdmFyIHNvdXJjZSA9IG51bGw7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG5cbiAgICAgIHtcbiAgICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBzZWxmID0gY29uZmlnLl9fc2VsZiA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NlbGY7XG4gICAgc291cmNlID0gY29uZmlnLl9fc291cmNlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc291cmNlOyAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAge1xuICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZEFycmF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB7XG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG59XG5mdW5jdGlvbiBjbG9uZUFuZFJlcGxhY2VLZXkob2xkRWxlbWVudCwgbmV3S2V5KSB7XG4gIHZhciBuZXdFbGVtZW50ID0gUmVhY3RFbGVtZW50KG9sZEVsZW1lbnQudHlwZSwgbmV3S2V5LCBvbGRFbGVtZW50LnJlZiwgb2xkRWxlbWVudC5fc2VsZiwgb2xkRWxlbWVudC5fc291cmNlLCBvbGRFbGVtZW50Ll9vd25lciwgb2xkRWxlbWVudC5wcm9wcyk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuLyoqXG4gKiBDbG9uZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCB1c2luZyBlbGVtZW50IGFzIHRoZSBzdGFydGluZyBwb2ludC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY2xvbmVlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gY2xvbmVFbGVtZW50KGVsZW1lbnQsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgaWYgKCEhKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdW5kZWZpbmVkKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0LmNsb25lRWxlbWVudCguLi4pOiBUaGUgYXJndW1lbnQgbXVzdCBiZSBhIFJlYWN0IGVsZW1lbnQsIGJ1dCB5b3UgcGFzc2VkIFwiICsgZWxlbWVudCArIFwiLlwiICk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHByb3BOYW1lOyAvLyBPcmlnaW5hbCBwcm9wcyBhcmUgY29waWVkXG5cbiAgdmFyIHByb3BzID0gX2Fzc2lnbih7fSwgZWxlbWVudC5wcm9wcyk7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuXG4gIHZhciBrZXkgPSBlbGVtZW50LmtleTtcbiAgdmFyIHJlZiA9IGVsZW1lbnQucmVmOyAvLyBTZWxmIGlzIHByZXNlcnZlZCBzaW5jZSB0aGUgb3duZXIgaXMgcHJlc2VydmVkLlxuXG4gIHZhciBzZWxmID0gZWxlbWVudC5fc2VsZjsgLy8gU291cmNlIGlzIHByZXNlcnZlZCBzaW5jZSBjbG9uZUVsZW1lbnQgaXMgdW5saWtlbHkgdG8gYmUgdGFyZ2V0ZWQgYnkgYVxuICAvLyB0cmFuc3BpbGVyLCBhbmQgdGhlIG9yaWdpbmFsIHNvdXJjZSBpcyBwcm9iYWJseSBhIGJldHRlciBpbmRpY2F0b3Igb2YgdGhlXG4gIC8vIHRydWUgb3duZXIuXG5cbiAgdmFyIHNvdXJjZSA9IGVsZW1lbnQuX3NvdXJjZTsgLy8gT3duZXIgd2lsbCBiZSBwcmVzZXJ2ZWQsIHVubGVzcyByZWYgaXMgb3ZlcnJpZGRlblxuXG4gIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICAvLyBTaWxlbnRseSBzdGVhbCB0aGUgcmVmIGZyb20gdGhlIHBhcmVudC5cbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICBvd25lciA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIG92ZXJyaWRlIGV4aXN0aW5nIHByb3BzXG5cblxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG5cbiAgICBpZiAoZWxlbWVudC50eXBlICYmIGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIGRlZmF1bHRQcm9wcyA9IGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgfVxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgaWYgKGNvbmZpZ1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCAmJiBkZWZhdWx0UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudChlbGVtZW50LnR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcyk7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuXG52YXIgU0VQQVJBVE9SID0gJy4nO1xudmFyIFNVQlNFUEFSQVRPUiA9ICc6Jztcbi8qKlxuICogRXNjYXBlIGFuZCB3cmFwIGtleSBzbyBpdCBpcyBzYWZlIHRvIHVzZSBhcyBhIHJlYWN0aWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIGJlIGVzY2FwZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBlc2NhcGVkIGtleS5cbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGUoa2V5KSB7XG4gIHZhciBlc2NhcGVSZWdleCA9IC9bPTpdL2c7XG4gIHZhciBlc2NhcGVyTG9va3VwID0ge1xuICAgICc9JzogJz0wJyxcbiAgICAnOic6ICc9MidcbiAgfTtcbiAgdmFyIGVzY2FwZWRTdHJpbmcgPSBrZXkucmVwbGFjZShlc2NhcGVSZWdleCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIGVzY2FwZXJMb29rdXBbbWF0Y2hdO1xuICB9KTtcbiAgcmV0dXJuICckJyArIGVzY2FwZWRTdHJpbmc7XG59XG4vKipcbiAqIFRPRE86IFRlc3QgdGhhdCBhIHNpbmdsZSBjaGlsZCBhbmQgYW4gYXJyYXkgd2l0aCBvbmUgaXRlbSBoYXZlIHRoZSBzYW1lIGtleVxuICogcGF0dGVybi5cbiAqL1xuXG5cbnZhciBkaWRXYXJuQWJvdXRNYXBzID0gZmFsc2U7XG52YXIgdXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXggPSAvXFwvKy9nO1xuXG5mdW5jdGlvbiBlc2NhcGVVc2VyUHJvdmlkZWRLZXkodGV4dCkge1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG4vKipcbiAqIEdlbmVyYXRlIGEga2V5IHN0cmluZyB0aGF0IGlkZW50aWZpZXMgYSBlbGVtZW50IHdpdGhpbiBhIHNldC5cbiAqXG4gKiBAcGFyYW0geyp9IGVsZW1lbnQgQSBlbGVtZW50IHRoYXQgY291bGQgY29udGFpbiBhIG1hbnVhbCBrZXkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggdGhhdCBpcyB1c2VkIGlmIGEgbWFudWFsIGtleSBpcyBub3QgcHJvdmlkZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRFbGVtZW50S2V5KGVsZW1lbnQsIGluZGV4KSB7XG4gIC8vIERvIHNvbWUgdHlwZWNoZWNraW5nIGhlcmUgc2luY2Ugd2UgY2FsbCB0aGlzIGJsaW5kbHkuIFdlIHdhbnQgdG8gZW5zdXJlXG4gIC8vIHRoYXQgd2UgZG9uJ3QgYmxvY2sgcG90ZW50aWFsIGZ1dHVyZSBFUyBBUElzLlxuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnICYmIGVsZW1lbnQgIT09IG51bGwgJiYgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIC8vIEV4cGxpY2l0IGtleVxuICAgIHJldHVybiBlc2NhcGUoJycgKyBlbGVtZW50LmtleSk7XG4gIH0gLy8gSW1wbGljaXQga2V5IGRldGVybWluZWQgYnkgdGhlIGluZGV4IGluIHRoZSBzZXRcblxuXG4gIHJldHVybiBpbmRleC50b1N0cmluZygzNik7XG59XG5cbmZ1bmN0aW9uIG1hcEludG9BcnJheShjaGlsZHJlbiwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5hbWVTb0ZhciwgY2FsbGJhY2spIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgY2hpbGRyZW47XG5cbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgIC8vIEFsbCBvZiB0aGUgYWJvdmUgYXJlIHBlcmNlaXZlZCBhcyBudWxsLlxuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgfVxuXG4gIHZhciBpbnZva2VDYWxsYmFjayA9IGZhbHNlO1xuXG4gIGlmIChjaGlsZHJlbiA9PT0gbnVsbCkge1xuICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBzd2l0Y2ggKGNoaWxkcmVuLiQkdHlwZW9mKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgaWYgKGludm9rZUNhbGxiYWNrKSB7XG4gICAgdmFyIF9jaGlsZCA9IGNoaWxkcmVuO1xuICAgIHZhciBtYXBwZWRDaGlsZCA9IGNhbGxiYWNrKF9jaGlsZCk7IC8vIElmIGl0J3MgdGhlIG9ubHkgY2hpbGQsIHRyZWF0IHRoZSBuYW1lIGFzIGlmIGl0IHdhcyB3cmFwcGVkIGluIGFuIGFycmF5XG4gICAgLy8gc28gdGhhdCBpdCdzIGNvbnNpc3RlbnQgaWYgdGhlIG51bWJlciBvZiBjaGlsZHJlbiBncm93czpcblxuICAgIHZhciBjaGlsZEtleSA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgKyBnZXRFbGVtZW50S2V5KF9jaGlsZCwgMCkgOiBuYW1lU29GYXI7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShtYXBwZWRDaGlsZCkpIHtcbiAgICAgIHZhciBlc2NhcGVkQ2hpbGRLZXkgPSAnJztcblxuICAgICAgaWYgKGNoaWxkS2V5ICE9IG51bGwpIHtcbiAgICAgICAgZXNjYXBlZENoaWxkS2V5ID0gZXNjYXBlVXNlclByb3ZpZGVkS2V5KGNoaWxkS2V5KSArICcvJztcbiAgICAgIH1cblxuICAgICAgbWFwSW50b0FycmF5KG1hcHBlZENoaWxkLCBhcnJheSwgZXNjYXBlZENoaWxkS2V5LCAnJywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChtYXBwZWRDaGlsZCkpIHtcbiAgICAgICAgbWFwcGVkQ2hpbGQgPSBjbG9uZUFuZFJlcGxhY2VLZXkobWFwcGVkQ2hpbGQsIC8vIEtlZXAgYm90aCB0aGUgKG1hcHBlZCkgYW5kIG9sZCBrZXlzIGlmIHRoZXkgZGlmZmVyLCBqdXN0IGFzXG4gICAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAgICBlc2NhcGVkUHJlZml4ICsgKCAvLyAkRmxvd0ZpeE1lIEZsb3cgaW5jb3JyZWN0bHkgdGhpbmtzIFJlYWN0LlBvcnRhbCBkb2Vzbid0IGhhdmUgYSBrZXlcbiAgICAgICAgbWFwcGVkQ2hpbGQua2V5ICYmICghX2NoaWxkIHx8IF9jaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSkgPyAvLyAkRmxvd0ZpeE1lIEZsb3cgaW5jb3JyZWN0bHkgdGhpbmtzIGV4aXN0aW5nIGVsZW1lbnQncyBrZXkgY2FuIGJlIGEgbnVtYmVyXG4gICAgICAgIGVzY2FwZVVzZXJQcm92aWRlZEtleSgnJyArIG1hcHBlZENoaWxkLmtleSkgKyAnLycgOiAnJykgKyBjaGlsZEtleSk7XG4gICAgICB9XG5cbiAgICAgIGFycmF5LnB1c2gobWFwcGVkQ2hpbGQpO1xuICAgIH1cblxuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkO1xuICB2YXIgbmV4dE5hbWU7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpKTtcbiAgICAgIHN1YnRyZWVDb3VudCArPSBtYXBJbnRvQXJyYXkoY2hpbGQsIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuZXh0TmFtZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4oY2hpbGRyZW4pO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgaXRlcmFibGVDaGlsZHJlbiA9IGNoaWxkcmVuO1xuXG4gICAgICB7XG4gICAgICAgIC8vIFdhcm4gYWJvdXQgdXNpbmcgTWFwcyBhcyBjaGlsZHJlblxuICAgICAgICBpZiAoaXRlcmF0b3JGbiA9PT0gaXRlcmFibGVDaGlsZHJlbi5lbnRyaWVzKSB7XG4gICAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRNYXBzKSB7XG4gICAgICAgICAgICB3YXJuKCdVc2luZyBNYXBzIGFzIGNoaWxkcmVuIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnVXNlIGFuIGFycmF5IG9mIGtleWVkIFJlYWN0RWxlbWVudHMgaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoaXRlcmFibGVDaGlsZHJlbik7XG4gICAgICB2YXIgc3RlcDtcbiAgICAgIHZhciBpaSA9IDA7XG5cbiAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgY2hpbGQgPSBzdGVwLnZhbHVlO1xuICAgICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0RWxlbWVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSBtYXBJbnRvQXJyYXkoY2hpbGQsIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuZXh0TmFtZSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBjaGlsZHJlblN0cmluZyA9ICcnICsgY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAge1xuICAgICAgICAgIHRocm93IEVycm9yKCBcIk9iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogXCIgKyAoY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nKSArIFwiKS4gSWYgeW91IG1lYW50IHRvIHJlbmRlciBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIHVzZSBhbiBhcnJheSBpbnN0ZWFkLlwiICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VidHJlZUNvdW50O1xufVxuXG4vKipcbiAqIE1hcHMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm1hcFxuICpcbiAqIFRoZSBwcm92aWRlZCBtYXBGdW5jdGlvbihjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jIFRoZSBtYXAgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgbWFwRnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBvcmRlcmVkIG1hcCBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGNvdW50ID0gMDtcbiAgbWFwSW50b0FycmF5KGNoaWxkcmVuLCByZXN1bHQsICcnLCAnJywgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgY291bnQrKyk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgdmFyIG4gPSAwO1xuICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIG4rKzsgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nXG4gIH0pO1xuICByZXR1cm4gbjtcbn1cblxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5mdW5jdGlvbiBmb3JFYWNoQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCkge1xuICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIGZvckVhY2hGdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIERvbid0IHJldHVybiBhbnl0aGluZy5cbiAgfSwgZm9yRWFjaENvbnRleHQpO1xufVxuLyoqXG4gKiBGbGF0dGVuIGEgY2hpbGRyZW4gb2JqZWN0ICh0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmApIGFuZFxuICogcmV0dXJuIGFuIGFycmF5IHdpdGggYXBwcm9wcmlhdGVseSByZS1rZXllZCBjaGlsZHJlbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW50b2FycmF5XG4gKi9cblxuXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHJldHVybiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KSB8fCBbXTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgY2hpbGQgaW4gYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuIGFuZCB2ZXJpZmllcyB0aGF0IHRoZXJlXG4gKiBpcyBvbmx5IG9uZSBjaGlsZCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5vbmx5XG4gKlxuICogVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgYSBzaW5nbGUgY2hpbGQgZ2V0c1xuICogcGFzc2VkIHdpdGhvdXQgYSB3cmFwcGVyLCBidXQgdGhlIHB1cnBvc2Ugb2YgdGhpcyBoZWxwZXIgZnVuY3Rpb24gaXMgdG9cbiAqIGFic3RyYWN0IGF3YXkgdGhlIHBhcnRpY3VsYXIgc3RydWN0dXJlIG9mIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSB7P29iamVjdH0gY2hpbGRyZW4gQ2hpbGQgY29sbGVjdGlvbiBzdHJ1Y3R1cmUuXG4gKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR9IFRoZSBmaXJzdCBhbmQgb25seSBgUmVhY3RFbGVtZW50YCBjb250YWluZWQgaW4gdGhlXG4gKiBzdHJ1Y3R1cmUuXG4gKi9cblxuXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgaWYgKCFpc1ZhbGlkRWxlbWVudChjaGlsZHJlbikpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKSB7XG4gIGlmIChjYWxjdWxhdGVDaGFuZ2VkQml0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPSBudWxsO1xuICB9IGVsc2Uge1xuICAgIHtcbiAgICAgIGlmIChjYWxjdWxhdGVDaGFuZ2VkQml0cyAhPT0gbnVsbCAmJiB0eXBlb2YgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZXJyb3IoJ2NyZWF0ZUNvbnRleHQ6IEV4cGVjdGVkIHRoZSBvcHRpb25hbCBzZWNvbmQgYXJndW1lbnQgdG8gYmUgYSAnICsgJ2Z1bmN0aW9uLiBJbnN0ZWFkIHJlY2VpdmVkOiAlcycsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgY29udGV4dCA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY2FsY3VsYXRlQ2hhbmdlZEJpdHMsXG4gICAgLy8gQXMgYSB3b3JrYXJvdW5kIHRvIHN1cHBvcnQgbXVsdGlwbGUgY29uY3VycmVudCByZW5kZXJlcnMsIHdlIGNhdGVnb3JpemVcbiAgICAvLyBzb21lIHJlbmRlcmVycyBhcyBwcmltYXJ5IGFuZCBvdGhlcnMgYXMgc2Vjb25kYXJ5LiBXZSBvbmx5IGV4cGVjdFxuICAgIC8vIHRoZXJlIHRvIGJlIHR3byBjb25jdXJyZW50IHJlbmRlcmVycyBhdCBtb3N0OiBSZWFjdCBOYXRpdmUgKHByaW1hcnkpIGFuZFxuICAgIC8vIEZhYnJpYyAoc2Vjb25kYXJ5KTsgUmVhY3QgRE9NIChwcmltYXJ5KSBhbmQgUmVhY3QgQVJUIChzZWNvbmRhcnkpLlxuICAgIC8vIFNlY29uZGFyeSByZW5kZXJlcnMgc3RvcmUgdGhlaXIgY29udGV4dCB2YWx1ZXMgb24gc2VwYXJhdGUgZmllbGRzLlxuICAgIF9jdXJyZW50VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICBfY3VycmVudFZhbHVlMjogZGVmYXVsdFZhbHVlLFxuICAgIC8vIFVzZWQgdG8gdHJhY2sgaG93IG1hbnkgY29uY3VycmVudCByZW5kZXJlcnMgdGhpcyBjb250ZXh0IGN1cnJlbnRseVxuICAgIC8vIHN1cHBvcnRzIHdpdGhpbiBpbiBhIHNpbmdsZSByZW5kZXJlci4gU3VjaCBhcyBwYXJhbGxlbCBzZXJ2ZXIgcmVuZGVyaW5nLlxuICAgIF90aHJlYWRDb3VudDogMCxcbiAgICAvLyBUaGVzZSBhcmUgY2lyY3VsYXJcbiAgICBQcm92aWRlcjogbnVsbCxcbiAgICBDb25zdW1lcjogbnVsbFxuICB9O1xuICBjb250ZXh0LlByb3ZpZGVyID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9QUk9WSURFUl9UWVBFLFxuICAgIF9jb250ZXh0OiBjb250ZXh0XG4gIH07XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyID0gZmFsc2U7XG5cbiAge1xuICAgIC8vIEEgc2VwYXJhdGUgb2JqZWN0LCBidXQgcHJveGllcyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0IG9iamVjdCBmb3JcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gSXQgaGFzIGEgZGlmZmVyZW50ICQkdHlwZW9mLCBzbyB3ZSBjYW4gcHJvcGVybHlcbiAgICAvLyB3YXJuIGZvciB0aGUgaW5jb3JyZWN0IHVzYWdlIG9mIENvbnRleHQgYXMgYSBDb25zdW1lci5cbiAgICB2YXIgQ29uc3VtZXIgPSB7XG4gICAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgICAgX2NvbnRleHQ6IGNvbnRleHQsXG4gICAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNvbnRleHQuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzXG4gICAgfTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbm90IHNldHRpbmcgYSB2YWx1ZSwgd2hpY2ggaXMgaW50ZW50aW9uYWwgaGVyZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29uc3VtZXIsIHtcbiAgICAgIFByb3ZpZGVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Qcm92aWRlcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Qcm92aWRlcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Qcm92aWRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX1Byb3ZpZGVyKSB7XG4gICAgICAgICAgY29udGV4dC5Qcm92aWRlciA9IF9Qcm92aWRlcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZSA9IF9jdXJyZW50VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlMjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlMjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZTIpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUyID0gX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfdGhyZWFkQ291bnQ6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX3RocmVhZENvdW50O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfdGhyZWFkQ291bnQpIHtcbiAgICAgICAgICBjb250ZXh0Ll90aHJlYWRDb3VudCA9IF90aHJlYWRDb3VudDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIENvbnN1bWVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Db25zdW1lcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Db25zdW1lcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Db25zdW1lcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRpc3BsYXlOYW1lOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0LmRpc3BsYXlOYW1lO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChkaXNwbGF5TmFtZSkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIpIHtcbiAgICAgICAgICAgIHdhcm4oJ1NldHRpbmcgYGRpc3BsYXlOYW1lYCBvbiBDb250ZXh0LkNvbnN1bWVyIGhhcyBubyBlZmZlY3QuICcgKyBcIllvdSBzaG91bGQgc2V0IGl0IGRpcmVjdGx5IG9uIHRoZSBjb250ZXh0IHdpdGggQ29udGV4dC5kaXNwbGF5TmFtZSA9ICclcycuXCIsIGRpc3BsYXlOYW1lKTtcblxuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pOyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBtaXNzaW5nIHByb3BlcnRpZXMgYmVjYXVzZSBpdCBkb2Vzbid0IHVuZGVyc3RhbmQgZGVmaW5lUHJvcGVydHlcblxuICAgIGNvbnRleHQuQ29uc3VtZXIgPSBDb25zdW1lcjtcbiAgfVxuXG4gIHtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIgPSBudWxsO1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlcjIgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbnZhciBVbmluaXRpYWxpemVkID0gLTE7XG52YXIgUGVuZGluZyA9IDA7XG52YXIgUmVzb2x2ZWQgPSAxO1xudmFyIFJlamVjdGVkID0gMjtcblxuZnVuY3Rpb24gbGF6eUluaXRpYWxpemVyKHBheWxvYWQpIHtcbiAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gVW5pbml0aWFsaXplZCkge1xuICAgIHZhciBjdG9yID0gcGF5bG9hZC5fcmVzdWx0O1xuICAgIHZhciB0aGVuYWJsZSA9IGN0b3IoKTsgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cblxuICAgIHZhciBwZW5kaW5nID0gcGF5bG9hZDtcbiAgICBwZW5kaW5nLl9zdGF0dXMgPSBQZW5kaW5nO1xuICAgIHBlbmRpbmcuX3Jlc3VsdCA9IHRoZW5hYmxlO1xuICAgIHRoZW5hYmxlLnRoZW4oZnVuY3Rpb24gKG1vZHVsZU9iamVjdCkge1xuICAgICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUGVuZGluZykge1xuICAgICAgICB2YXIgZGVmYXVsdEV4cG9ydCA9IG1vZHVsZU9iamVjdC5kZWZhdWx0O1xuXG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoZGVmYXVsdEV4cG9ydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlcnJvcignbGF6eTogRXhwZWN0ZWQgdGhlIHJlc3VsdCBvZiBhIGR5bmFtaWMgaW1wb3J0KCkgY2FsbC4gJyArICdJbnN0ZWFkIHJlY2VpdmVkOiAlc1xcblxcbllvdXIgY29kZSBzaG91bGQgbG9vayBsaWtlOiBcXG4gICcgKyAvLyBCcmVhayB1cCBpbXBvcnRzIHRvIGF2b2lkIGFjY2lkZW50YWxseSBwYXJzaW5nIHRoZW0gYXMgZGVwZW5kZW5jaWVzLlxuICAgICAgICAgICAgJ2NvbnN0IE15Q29tcG9uZW50ID0gbGF6eSgoKSA9PiBpbXAnICsgXCJvcnQoJy4vTXlDb21wb25lbnQnKSlcIiwgbW9kdWxlT2JqZWN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cblxuXG4gICAgICAgIHZhciByZXNvbHZlZCA9IHBheWxvYWQ7XG4gICAgICAgIHJlc29sdmVkLl9zdGF0dXMgPSBSZXNvbHZlZDtcbiAgICAgICAgcmVzb2x2ZWQuX3Jlc3VsdCA9IGRlZmF1bHRFeHBvcnQ7XG4gICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBQZW5kaW5nKSB7XG4gICAgICAgIC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG4gICAgICAgIHZhciByZWplY3RlZCA9IHBheWxvYWQ7XG4gICAgICAgIHJlamVjdGVkLl9zdGF0dXMgPSBSZWplY3RlZDtcbiAgICAgICAgcmVqZWN0ZWQuX3Jlc3VsdCA9IGVycm9yO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUmVzb2x2ZWQpIHtcbiAgICByZXR1cm4gcGF5bG9hZC5fcmVzdWx0O1xuICB9IGVsc2Uge1xuICAgIHRocm93IHBheWxvYWQuX3Jlc3VsdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBsYXp5KGN0b3IpIHtcbiAgdmFyIHBheWxvYWQgPSB7XG4gICAgLy8gV2UgdXNlIHRoZXNlIGZpZWxkcyB0byBzdG9yZSB0aGUgcmVzdWx0LlxuICAgIF9zdGF0dXM6IC0xLFxuICAgIF9yZXN1bHQ6IGN0b3JcbiAgfTtcbiAgdmFyIGxhenlUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9MQVpZX1RZUEUsXG4gICAgX3BheWxvYWQ6IHBheWxvYWQsXG4gICAgX2luaXQ6IGxhenlJbml0aWFsaXplclxuICB9O1xuXG4gIHtcbiAgICAvLyBJbiBwcm9kdWN0aW9uLCB0aGlzIHdvdWxkIGp1c3Qgc2V0IGl0IG9uIHRoZSBvYmplY3QuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcbiAgICB2YXIgcHJvcFR5cGVzOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhsYXp5VHlwZSwge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGRlZmF1bHRQcm9wcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3RGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYGRlZmF1bHRQcm9wc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IG5ld0RlZmF1bHRQcm9wczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG4gICAgICAgICAgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAnZGVmYXVsdFByb3BzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BUeXBlcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3UHJvcFR5cGVzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYHByb3BUeXBlc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIHByb3BUeXBlcyA9IG5ld1Byb3BUeXBlczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG4gICAgICAgICAgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAncHJvcFR5cGVzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbGF6eVR5cGU7XG59XG5cbmZ1bmN0aW9uIGZvcndhcmRSZWYocmVuZGVyKSB7XG4gIHtcbiAgICBpZiAocmVuZGVyICE9IG51bGwgJiYgcmVuZGVyLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpIHtcbiAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCByZWNlaXZlZCBhIGBtZW1vYCAnICsgJ2NvbXBvbmVudC4gSW5zdGVhZCBvZiBmb3J3YXJkUmVmKG1lbW8oLi4uKSksIHVzZSAnICsgJ21lbW8oZm9yd2FyZFJlZiguLi4pKS4nKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCB3YXMgZ2l2ZW4gJXMuJywgcmVuZGVyID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHJlbmRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyZW5kZXIubGVuZ3RoICE9PSAwICYmIHJlbmRlci5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBhY2NlcHQgZXhhY3RseSB0d28gcGFyYW1ldGVyczogcHJvcHMgYW5kIHJlZi4gJXMnLCByZW5kZXIubGVuZ3RoID09PSAxID8gJ0RpZCB5b3UgZm9yZ2V0IHRvIHVzZSB0aGUgcmVmIHBhcmFtZXRlcj8nIDogJ0FueSBhZGRpdGlvbmFsIHBhcmFtZXRlciB3aWxsIGJlIHVuZGVmaW5lZC4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVuZGVyICE9IG51bGwpIHtcbiAgICAgIGlmIChyZW5kZXIuZGVmYXVsdFByb3BzICE9IG51bGwgfHwgcmVuZGVyLnByb3BUeXBlcyAhPSBudWxsKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgZG8gbm90IHN1cHBvcnQgcHJvcFR5cGVzIG9yIGRlZmF1bHRQcm9wcy4gJyArICdEaWQgeW91IGFjY2lkZW50YWxseSBwYXNzIGEgUmVhY3QgY29tcG9uZW50PycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSxcbiAgICByZW5kZXI6IHJlbmRlclxuICB9O1xuXG4gIHtcbiAgICB2YXIgb3duTmFtZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsICdkaXNwbGF5TmFtZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvd25OYW1lO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgb3duTmFtZSA9IG5hbWU7XG5cbiAgICAgICAgaWYgKHJlbmRlci5kaXNwbGF5TmFtZSA9PSBudWxsKSB7XG4gICAgICAgICAgcmVuZGVyLmRpc3BsYXlOYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRUeXBlO1xufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCB8fCB0eXBlID09PSBleHBvcnRzLlByb2ZpbGVyIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IGV4cG9ydHMuU3RyaWN0TW9kZSB8fCB0eXBlID09PSBleHBvcnRzLlN1c3BlbnNlIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBtZW1vKHR5cGUsIGNvbXBhcmUpIHtcbiAge1xuICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpKSB7XG4gICAgICBlcnJvcignbWVtbzogVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBjb21wb25lbnQuIEluc3RlYWQgJyArICdyZWNlaXZlZDogJXMnLCB0eXBlID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTUVNT19UWVBFLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgY29tcGFyZTogY29tcGFyZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbXBhcmVcbiAgfTtcblxuICB7XG4gICAgdmFyIG93bk5hbWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnRUeXBlLCAnZGlzcGxheU5hbWUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb3duTmFtZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG93bk5hbWUgPSBuYW1lO1xuXG4gICAgICAgIGlmICh0eXBlLmRpc3BsYXlOYW1lID09IG51bGwpIHtcbiAgICAgICAgICB0eXBlLmRpc3BsYXlOYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRUeXBlO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlRGlzcGF0Y2hlcigpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7XG5cbiAgaWYgKCEoZGlzcGF0Y2hlciAhPT0gbnVsbCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJJbnZhbGlkIGhvb2sgY2FsbC4gSG9va3MgY2FuIG9ubHkgYmUgY2FsbGVkIGluc2lkZSBvZiB0aGUgYm9keSBvZiBhIGZ1bmN0aW9uIGNvbXBvbmVudC4gVGhpcyBjb3VsZCBoYXBwZW4gZm9yIG9uZSBvZiB0aGUgZm9sbG93aW5nIHJlYXNvbnM6XFxuMS4gWW91IG1pZ2h0IGhhdmUgbWlzbWF0Y2hpbmcgdmVyc2lvbnMgb2YgUmVhY3QgYW5kIHRoZSByZW5kZXJlciAoc3VjaCBhcyBSZWFjdCBET00pXFxuMi4gWW91IG1pZ2h0IGJlIGJyZWFraW5nIHRoZSBSdWxlcyBvZiBIb29rc1xcbjMuIFlvdSBtaWdodCBoYXZlIG1vcmUgdGhhbiBvbmUgY29weSBvZiBSZWFjdCBpbiB0aGUgc2FtZSBhcHBcXG5TZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL2ludmFsaWQtaG9vay1jYWxsIGZvciB0aXBzIGFib3V0IGhvdyB0byBkZWJ1ZyBhbmQgZml4IHRoaXMgcHJvYmxlbS5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXNwYXRjaGVyO1xufVxuXG5mdW5jdGlvbiB1c2VDb250ZXh0KENvbnRleHQsIHVuc3RhYmxlX29ic2VydmVkQml0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG5cbiAge1xuICAgIGlmICh1bnN0YWJsZV9vYnNlcnZlZEJpdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IoJ3VzZUNvbnRleHQoKSBzZWNvbmQgYXJndW1lbnQgaXMgcmVzZXJ2ZWQgZm9yIGZ1dHVyZSAnICsgJ3VzZSBpbiBSZWFjdC4gUGFzc2luZyBpdCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ1lvdSBwYXNzZWQ6ICVzLiVzJywgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzLCB0eXBlb2YgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzID09PSAnbnVtYmVyJyAmJiBBcnJheS5pc0FycmF5KGFyZ3VtZW50c1syXSkgPyAnXFxuXFxuRGlkIHlvdSBjYWxsIGFycmF5Lm1hcCh1c2VDb250ZXh0KT8gJyArICdDYWxsaW5nIEhvb2tzIGluc2lkZSBhIGxvb3AgaXMgbm90IHN1cHBvcnRlZC4gJyArICdMZWFybiBtb3JlIGF0IGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9ydWxlcy1vZi1ob29rcycgOiAnJyk7XG4gICAgfSAvLyBUT0RPOiBhZGQgYSBtb3JlIGdlbmVyaWMgd2FybmluZyBmb3IgaW52YWxpZCB2YWx1ZXMuXG5cblxuICAgIGlmIChDb250ZXh0Ll9jb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciByZWFsQ29udGV4dCA9IENvbnRleHQuX2NvbnRleHQ7IC8vIERvbid0IGRlZHVwbGljYXRlIGJlY2F1c2UgdGhpcyBsZWdpdGltYXRlbHkgY2F1c2VzIGJ1Z3NcbiAgICAgIC8vIGFuZCBub2JvZHkgc2hvdWxkIGJlIHVzaW5nIHRoaXMgaW4gZXhpc3RpbmcgY29kZS5cblxuICAgICAgaWYgKHJlYWxDb250ZXh0LkNvbnN1bWVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Db25zdW1lcikgaXMgbm90IHN1cHBvcnRlZCwgbWF5IGNhdXNlIGJ1Z3MsIGFuZCB3aWxsIGJlICcgKyAncmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9IGVsc2UgaWYgKHJlYWxDb250ZXh0LlByb3ZpZGVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Qcm92aWRlcikgaXMgbm90IHN1cHBvcnRlZC4gJyArICdEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpO1xufVxuZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbn1cbmZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCk7XG59XG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG59XG5mdW5jdGlvbiB1c2VFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZU1lbW8oY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTWVtbyhjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pIHtcbiAge1xuICAgIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgICByZXR1cm4gZGlzcGF0Y2hlci51c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbik7XG4gIH1cbn1cblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICghZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpO1xuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLlN1c3BlbnNlOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIHNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMoZWxlbWVudFByb3BzKSB7XG4gIGlmIChlbGVtZW50UHJvcHMgIT09IG51bGwgJiYgZWxlbWVudFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oZWxlbWVudFByb3BzLl9fc291cmNlKTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluZm87XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gIH1cblxuICB7XG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobm9kZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKHByb3BzKTtcblxuICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGVycm9yKCdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbnZhciBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IGZhbHNlO1xuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcblxuICB7XG4gICAgaWYgKCFkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSkge1xuICAgICAgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSB0cnVlO1xuXG4gICAgICB3YXJuKCdSZWFjdC5jcmVhdGVGYWN0b3J5KCkgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgdXNpbmcgSlNYICcgKyAnb3IgdXNlIFJlYWN0LmNyZWF0ZUVsZW1lbnQoKSBkaXJlY3RseSBpbnN0ZWFkLicpO1xuICAgIH0gLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsaWRhdGVkRmFjdG9yeSwgJ3R5cGUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd0eXBlJywge1xuICAgICAgICAgIHZhbHVlOiB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZWRGYWN0b3J5O1xufVxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIG5ld0VsZW1lbnQudHlwZSk7XG4gIH1cblxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbntcblxuICB0cnkge1xuICAgIHZhciBmcm96ZW5PYmplY3QgPSBPYmplY3QuZnJlZXplKHt9KTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXcgKi9cblxuICAgIG5ldyBNYXAoW1tmcm96ZW5PYmplY3QsIG51bGxdXSk7XG4gICAgbmV3IFNldChbZnJvemVuT2JqZWN0XSk7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1uZXcgKi9cbiAgfSBjYXRjaCAoZSkge1xuICB9XG59XG5cbnZhciBjcmVhdGVFbGVtZW50JDEgPSAgY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjbG9uZUVsZW1lbnQkMSA9ICBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XG52YXIgY3JlYXRlRmFjdG9yeSA9ICBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24gO1xudmFyIENoaWxkcmVuID0ge1xuICBtYXA6IG1hcENoaWxkcmVuLFxuICBmb3JFYWNoOiBmb3JFYWNoQ2hpbGRyZW4sXG4gIGNvdW50OiBjb3VudENoaWxkcmVuLFxuICB0b0FycmF5OiB0b0FycmF5LFxuICBvbmx5OiBvbmx5Q2hpbGRcbn07XG5cbmV4cG9ydHMuQ2hpbGRyZW4gPSBDaGlsZHJlbjtcbmV4cG9ydHMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuZXhwb3J0cy5QdXJlQ29tcG9uZW50ID0gUHVyZUNvbXBvbmVudDtcbmV4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQgPSBSZWFjdFNoYXJlZEludGVybmFscztcbmV4cG9ydHMuY2xvbmVFbGVtZW50ID0gY2xvbmVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0O1xuZXhwb3J0cy5jcmVhdGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVGYWN0b3J5ID0gY3JlYXRlRmFjdG9yeTtcbmV4cG9ydHMuY3JlYXRlUmVmID0gY3JlYXRlUmVmO1xuZXhwb3J0cy5mb3J3YXJkUmVmID0gZm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnQgPSBpc1ZhbGlkRWxlbWVudDtcbmV4cG9ydHMubGF6eSA9IGxhenk7XG5leHBvcnRzLm1lbW8gPSBtZW1vO1xuZXhwb3J0cy51c2VDYWxsYmFjayA9IHVzZUNhbGxiYWNrO1xuZXhwb3J0cy51c2VDb250ZXh0ID0gdXNlQ29udGV4dDtcbmV4cG9ydHMudXNlRGVidWdWYWx1ZSA9IHVzZURlYnVnVmFsdWU7XG5leHBvcnRzLnVzZUVmZmVjdCA9IHVzZUVmZmVjdDtcbmV4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZSA9IHVzZUltcGVyYXRpdmVIYW5kbGU7XG5leHBvcnRzLnVzZUxheW91dEVmZmVjdCA9IHVzZUxheW91dEVmZmVjdDtcbmV4cG9ydHMudXNlTWVtbyA9IHVzZU1lbW87XG5leHBvcnRzLnVzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyO1xuZXhwb3J0cy51c2VSZWYgPSB1c2VSZWY7XG5leHBvcnRzLnVzZVN0YXRlID0gdXNlU3RhdGU7XG5leHBvcnRzLnZlcnNpb24gPSBSZWFjdFZlcnNpb247XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXNcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgY3JlYXRlRWxlbWVudCwgdXNlUmVmLCB1c2VDYWxsYmFjaywgdXNlRGVidWdWYWx1ZSB9IGZyb20gJ3JlYWN0JztcblxuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbmZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XG5cbnZhciBub29wID0gZnVuY3Rpb24gKCkgeyB9O1xuLy8gVXNpbmcgbm9vcCgpIGFzIHRoZSB1bmRlZmluZWQgdmFsdWUgYXMgdW5kZWZpbmVkIGNhbiBwb3NzaWJseSBiZSByZXBsYWNlZFxuLy8gYnkgc29tZXRoaW5nIGVsc2UuICBQcmV0dGllciBpZ25vcmUgYW5kIGV4dHJhIHBhcmVudGhlc2VzIGFyZSBuZWNlc3NhcnkgaGVyZVxuLy8gdG8gZW5zdXJlIHRoYXQgdHNjIGRvZXNuJ3QgcmVtb3ZlIHRoZSBfX05PSU5MSU5FX18gY29tbWVudC5cbi8vIHByZXR0aWVyLWlnbm9yZVxudmFyIFVOREVGSU5FRCA9ICggLyojX19OT0lOTElORV9fKi9ub29wKCkpO1xudmFyIE9CSkVDVCA9IE9iamVjdDtcbnZhciBpc1VuZGVmaW5lZCA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiB2ID09PSBVTkRFRklORUQ7IH07XG52YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiB0eXBlb2YgdiA9PSAnZnVuY3Rpb24nOyB9O1xudmFyIG1lcmdlT2JqZWN0cyA9IGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBPQkpFQ1QuYXNzaWduKHt9LCBhLCBiKTsgfTtcbnZhciBTVFJfVU5ERUZJTkVEID0gJ3VuZGVmaW5lZCc7XG4vLyBOT1RFOiBVc2UgZnVuY3Rpb24gdG8gZ3VhcmFudGVlIGl0J3MgcmUtZXZhbHVhdGVkIGJldHdlZW4ganNkb20gYW5kIG5vZGUgcnVudGltZSBmb3IgdGVzdHMuXG52YXIgaGFzV2luZG93ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPSBTVFJfVU5ERUZJTkVEOyB9O1xudmFyIGhhc0RvY3VtZW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdHlwZW9mIGRvY3VtZW50ICE9IFNUUl9VTkRFRklORUQ7IH07XG52YXIgaGFzUmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBoYXNXaW5kb3coKSAmJiB0eXBlb2Ygd2luZG93WydyZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXSAhPSBTVFJfVU5ERUZJTkVEO1xufTtcblxuLy8gdXNlIFdlYWtNYXAgdG8gc3RvcmUgdGhlIG9iamVjdC0+a2V5IG1hcHBpbmdcbi8vIHNvIHRoZSBvYmplY3RzIGNhbiBiZSBnYXJiYWdlIGNvbGxlY3RlZC5cbi8vIFdlYWtNYXAgdXNlcyBhIGhhc2h0YWJsZSB1bmRlciB0aGUgaG9vZCwgc28gdGhlIGxvb2t1cFxuLy8gY29tcGxleGl0eSBpcyBhbG1vc3QgTygxKS5cbnZhciB0YWJsZSA9IG5ldyBXZWFrTWFwKCk7XG4vLyBjb3VudGVyIG9mIHRoZSBrZXlcbnZhciBjb3VudGVyID0gMDtcbi8vIEEgc3RhYmxlIGhhc2ggaW1wbGVtZW50YXRpb24gdGhhdCBzdXBwb3J0czpcbi8vIC0gRmFzdCBhbmQgZW5zdXJlcyB1bmlxdWUgaGFzaCBwcm9wZXJ0aWVzXG4vLyAtIEhhbmRsZXMgdW5zZXJpYWxpemFibGUgdmFsdWVzXG4vLyAtIEhhbmRsZXMgb2JqZWN0IGtleSBvcmRlcmluZ1xuLy8gLSBHZW5lcmF0ZXMgc2hvcnQgcmVzdWx0c1xuLy9cbi8vIFRoaXMgaXMgbm90IGEgc2VyaWFsaXphdGlvbiBmdW5jdGlvbiwgYW5kIHRoZSByZXN1bHQgaXMgbm90IGd1YXJhbnRlZWQgdG8gYmVcbi8vIHBhcnNpYmxlLlxudmFyIHN0YWJsZUhhc2ggPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgdmFyIHR5cGUgPSB0eXBlb2YgYXJnO1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGFyZyAmJiBhcmcuY29uc3RydWN0b3I7XG4gICAgdmFyIGlzRGF0ZSA9IGNvbnN0cnVjdG9yID09IERhdGU7XG4gICAgdmFyIHJlc3VsdDtcbiAgICB2YXIgaW5kZXg7XG4gICAgaWYgKE9CSkVDVChhcmcpID09PSBhcmcgJiYgIWlzRGF0ZSAmJiBjb25zdHJ1Y3RvciAhPSBSZWdFeHApIHtcbiAgICAgICAgLy8gT2JqZWN0L2Z1bmN0aW9uLCBub3QgbnVsbC9kYXRlL3JlZ2V4cC4gVXNlIFdlYWtNYXAgdG8gc3RvcmUgdGhlIGlkIGZpcnN0LlxuICAgICAgICAvLyBJZiBpdCdzIGFscmVhZHkgaGFzaGVkLCBkaXJlY3RseSByZXR1cm4gdGhlIHJlc3VsdC5cbiAgICAgICAgcmVzdWx0ID0gdGFibGUuZ2V0KGFyZyk7XG4gICAgICAgIGlmIChyZXN1bHQpXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAvLyBTdG9yZSB0aGUgaGFzaCBmaXJzdCBmb3IgY2lyY3VsYXIgcmVmZXJlbmNlIGRldGVjdGlvbiBiZWZvcmUgZW50ZXJpbmcgdGhlXG4gICAgICAgIC8vIHJlY3Vyc2l2ZSBgc3RhYmxlSGFzaGAgY2FsbHMuXG4gICAgICAgIC8vIEZvciBvdGhlciBvYmplY3RzIGxpa2Ugc2V0IGFuZCBtYXAsIHdlIHVzZSB0aGlzIGlkIGRpcmVjdGx5IGFzIHRoZSBoYXNoLlxuICAgICAgICByZXN1bHQgPSArK2NvdW50ZXIgKyAnfic7XG4gICAgICAgIHRhYmxlLnNldChhcmcsIHJlc3VsdCk7XG4gICAgICAgIGlmIChjb25zdHJ1Y3RvciA9PSBBcnJheSkge1xuICAgICAgICAgICAgLy8gQXJyYXkuXG4gICAgICAgICAgICByZXN1bHQgPSAnQCc7XG4gICAgICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBhcmcubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IHN0YWJsZUhhc2goYXJnW2luZGV4XSkgKyAnLCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YWJsZS5zZXQoYXJnLCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25zdHJ1Y3RvciA9PSBPQkpFQ1QpIHtcbiAgICAgICAgICAgIC8vIE9iamVjdCwgc29ydCBrZXlzLlxuICAgICAgICAgICAgcmVzdWx0ID0gJyMnO1xuICAgICAgICAgICAgdmFyIGtleXMgPSBPQkpFQ1Qua2V5cyhhcmcpLnNvcnQoKTtcbiAgICAgICAgICAgIHdoaWxlICghaXNVbmRlZmluZWQoKGluZGV4ID0ga2V5cy5wb3AoKSkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChhcmdbaW5kZXhdKSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gaW5kZXggKyAnOicgKyBzdGFibGVIYXNoKGFyZ1tpbmRleF0pICsgJywnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhYmxlLnNldChhcmcsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGlzRGF0ZVxuICAgICAgICAgICAgPyBhcmcudG9KU09OKClcbiAgICAgICAgICAgIDogdHlwZSA9PSAnc3ltYm9sJ1xuICAgICAgICAgICAgICAgID8gYXJnLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICA6IHR5cGUgPT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgPyBKU09OLnN0cmluZ2lmeShhcmcpXG4gICAgICAgICAgICAgICAgICAgIDogJycgKyBhcmc7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIER1ZSB0byBidWcgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9Njc4MDc1LFxuICogaXQncyBub3QgcmVsaWFibGUgdG8gZGV0ZWN0IGlmIHRoZSBicm93c2VyIGlzIGN1cnJlbnRseSBvbmxpbmUgb3Igb2ZmbGluZVxuICogYmFzZWQgb24gYG5hdmlnYXRvci5vbkxpbmVgLlxuICogQXMgYSB3b3JrIGFyb3VuZCwgd2UgYWx3YXlzIGFzc3VtZSBpdCdzIG9ubGluZSBvbiBmaXJzdCBsb2FkLCBhbmQgY2hhbmdlXG4gKiB0aGUgc3RhdHVzIHVwb24gYG9ubGluZWAgb3IgYG9mZmxpbmVgIGV2ZW50cy5cbiAqL1xudmFyIG9ubGluZSA9IHRydWU7XG52YXIgaXNPbmxpbmUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBvbmxpbmU7IH07XG52YXIgaGFzV2luID0gaGFzV2luZG93KCk7XG52YXIgaGFzRG9jID0gaGFzRG9jdW1lbnQoKTtcbi8vIEZvciBub2RlIGFuZCBSZWFjdCBOYXRpdmUsIGBhZGQvcmVtb3ZlRXZlbnRMaXN0ZW5lcmAgZG9lc24ndCBleGlzdCBvbiB3aW5kb3cuXG52YXIgb25XaW5kb3dFdmVudCA9IGhhc1dpbiAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lclxuICAgID8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIuYmluZCh3aW5kb3cpXG4gICAgOiBub29wO1xudmFyIG9uRG9jdW1lbnRFdmVudCA9IGhhc0RvYyA/IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIuYmluZChkb2N1bWVudCkgOiBub29wO1xudmFyIG9mZldpbmRvd0V2ZW50ID0gaGFzV2luICYmIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyXG4gICAgPyB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lci5iaW5kKHdpbmRvdylcbiAgICA6IG5vb3A7XG52YXIgb2ZmRG9jdW1lbnRFdmVudCA9IGhhc0RvY1xuICAgID8gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lci5iaW5kKGRvY3VtZW50KVxuICAgIDogbm9vcDtcbnZhciBpc1Zpc2libGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZpc2liaWxpdHlTdGF0ZSA9IGhhc0RvYyAmJiBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGU7XG4gICAgcmV0dXJuIGlzVW5kZWZpbmVkKHZpc2liaWxpdHlTdGF0ZSkgfHwgdmlzaWJpbGl0eVN0YXRlICE9PSAnaGlkZGVuJztcbn07XG52YXIgaW5pdEZvY3VzID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgLy8gZm9jdXMgcmV2YWxpZGF0ZVxuICAgIG9uRG9jdW1lbnRFdmVudCgndmlzaWJpbGl0eWNoYW5nZScsIGNhbGxiYWNrKTtcbiAgICBvbldpbmRvd0V2ZW50KCdmb2N1cycsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBvZmZEb2N1bWVudEV2ZW50KCd2aXNpYmlsaXR5Y2hhbmdlJywgY2FsbGJhY2spO1xuICAgICAgICBvZmZXaW5kb3dFdmVudCgnZm9jdXMnLCBjYWxsYmFjayk7XG4gICAgfTtcbn07XG52YXIgaW5pdFJlY29ubmVjdCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIC8vIHJldmFsaWRhdGUgb24gcmVjb25uZWN0ZWRcbiAgICB2YXIgb25PbmxpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9ubGluZSA9IHRydWU7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgfTtcbiAgICAvLyBub3RoaW5nIHRvIHJldmFsaWRhdGUsIGp1c3QgdXBkYXRlIHRoZSBzdGF0dXNcbiAgICB2YXIgb25PZmZsaW5lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBvbmxpbmUgPSBmYWxzZTtcbiAgICB9O1xuICAgIG9uV2luZG93RXZlbnQoJ29ubGluZScsIG9uT25saW5lKTtcbiAgICBvbldpbmRvd0V2ZW50KCdvZmZsaW5lJywgb25PZmZsaW5lKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBvZmZXaW5kb3dFdmVudCgnb25saW5lJywgb25PbmxpbmUpO1xuICAgICAgICBvZmZXaW5kb3dFdmVudCgnb2ZmbGluZScsIG9uT2ZmbGluZSk7XG4gICAgfTtcbn07XG52YXIgcHJlc2V0ID0ge1xuICAgIGlzT25saW5lOiBpc09ubGluZSxcbiAgICBpc1Zpc2libGU6IGlzVmlzaWJsZVxufTtcbnZhciBkZWZhdWx0Q29uZmlnT3B0aW9ucyA9IHtcbiAgICBpbml0Rm9jdXM6IGluaXRGb2N1cyxcbiAgICBpbml0UmVjb25uZWN0OiBpbml0UmVjb25uZWN0XG59O1xuXG52YXIgSVNfU0VSVkVSID0gIWhhc1dpbmRvdygpIHx8ICdEZW5vJyBpbiB3aW5kb3c7XG4vLyBQb2x5ZmlsbCByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbnZhciByQUYgPSBmdW5jdGlvbiAoZikge1xuICAgIHJldHVybiBoYXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKSA/IHdpbmRvd1sncmVxdWVzdEFuaW1hdGlvbkZyYW1lJ10oZikgOiBzZXRUaW1lb3V0KGYsIDEpO1xufTtcbi8vIFJlYWN0IGN1cnJlbnRseSB0aHJvd3MgYSB3YXJuaW5nIHdoZW4gdXNpbmcgdXNlTGF5b3V0RWZmZWN0IG9uIHRoZSBzZXJ2ZXIuXG4vLyBUbyBnZXQgYXJvdW5kIGl0LCB3ZSBjYW4gY29uZGl0aW9uYWxseSB1c2VFZmZlY3Qgb24gdGhlIHNlcnZlciAobm8tb3ApIGFuZFxuLy8gdXNlTGF5b3V0RWZmZWN0IGluIHRoZSBicm93c2VyLlxudmFyIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgPSBJU19TRVJWRVIgPyB1c2VFZmZlY3QgOiB1c2VMYXlvdXRFZmZlY3Q7XG4vLyBUaGlzIGFzc2lnbm1lbnQgaXMgdG8gZXh0ZW5kIHRoZSBOYXZpZ2F0b3IgdHlwZSB0byB1c2UgZWZmZWN0aXZlVHlwZS5cbnZhciBuYXZpZ2F0b3JDb25uZWN0aW9uID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBuYXZpZ2F0b3IuY29ubmVjdGlvbjtcbi8vIEFkanVzdCB0aGUgY29uZmlnIGJhc2VkIG9uIHNsb3cgY29ubmVjdGlvbiBzdGF0dXMgKDw9IDcwS2JwcykuXG52YXIgc2xvd0Nvbm5lY3Rpb24gPSAhSVNfU0VSVkVSICYmXG4gICAgbmF2aWdhdG9yQ29ubmVjdGlvbiAmJlxuICAgIChbJ3Nsb3ctMmcnLCAnMmcnXS5pbmNsdWRlcyhuYXZpZ2F0b3JDb25uZWN0aW9uLmVmZmVjdGl2ZVR5cGUpIHx8XG4gICAgICAgIG5hdmlnYXRvckNvbm5lY3Rpb24uc2F2ZURhdGEpO1xuXG52YXIgc2VyaWFsaXplID0gZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChpc0Z1bmN0aW9uKGtleSkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGtleSA9IGtleSgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIC8vIGRlcGVuZGVuY2llcyBub3QgcmVhZHlcbiAgICAgICAgICAgIGtleSA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBhcmdzID0gW10uY29uY2F0KGtleSk7XG4gICAgLy8gSWYga2V5IGlzIG5vdCBmYWxzeSwgb3Igbm90IGFuIGVtcHR5IGFycmF5LCBoYXNoIGl0LlxuICAgIGtleSA9XG4gICAgICAgIHR5cGVvZiBrZXkgPT0gJ3N0cmluZydcbiAgICAgICAgICAgID8ga2V5XG4gICAgICAgICAgICA6IChBcnJheS5pc0FycmF5KGtleSkgPyBrZXkubGVuZ3RoIDoga2V5KVxuICAgICAgICAgICAgICAgID8gc3RhYmxlSGFzaChrZXkpXG4gICAgICAgICAgICAgICAgOiAnJztcbiAgICB2YXIgaW5mb0tleSA9IGtleSA/ICckc3dyJCcgKyBrZXkgOiAnJztcbiAgICByZXR1cm4gW2tleSwgYXJncywgaW5mb0tleV07XG59O1xuXG4vLyBHbG9iYWwgc3RhdGUgdXNlZCB0byBkZWR1cGxpY2F0ZSByZXF1ZXN0cyBhbmQgc3RvcmUgbGlzdGVuZXJzXG52YXIgU1dSR2xvYmFsU3RhdGUgPSBuZXcgV2Vha01hcCgpO1xuXG52YXIgRk9DVVNfRVZFTlQgPSAwO1xudmFyIFJFQ09OTkVDVF9FVkVOVCA9IDE7XG52YXIgTVVUQVRFX0VWRU5UID0gMjtcblxudmFyIGJyb2FkY2FzdFN0YXRlID0gZnVuY3Rpb24gKGNhY2hlLCBrZXksIGRhdGEsIGVycm9yLCBpc1ZhbGlkYXRpbmcsIHJldmFsaWRhdGUsIGJyb2FkY2FzdCkge1xuICAgIGlmIChicm9hZGNhc3QgPT09IHZvaWQgMCkgeyBicm9hZGNhc3QgPSB0cnVlOyB9XG4gICAgdmFyIF9hID0gU1dSR2xvYmFsU3RhdGUuZ2V0KGNhY2hlKSwgRVZFTlRfUkVWQUxJREFUT1JTID0gX2FbMF0sIFNUQVRFX1VQREFURVJTID0gX2FbMV0sIEZFVENIID0gX2FbM107XG4gICAgdmFyIHJldmFsaWRhdG9ycyA9IEVWRU5UX1JFVkFMSURBVE9SU1trZXldO1xuICAgIHZhciB1cGRhdGVycyA9IFNUQVRFX1VQREFURVJTW2tleV07XG4gICAgLy8gQ2FjaGUgd2FzIHBvcHVsYXRlZCwgdXBkYXRlIHN0YXRlcyBvZiBhbGwgaG9va3MuXG4gICAgaWYgKGJyb2FkY2FzdCAmJiB1cGRhdGVycykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHVwZGF0ZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB1cGRhdGVyc1tpXShkYXRhLCBlcnJvciwgaXNWYWxpZGF0aW5nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBJZiB3ZSBhbHNvIG5lZWQgdG8gcmV2YWxpZGF0ZSwgb25seSBkbyBpdCBmb3IgdGhlIGZpcnN0IGhvb2suXG4gICAgaWYgKHJldmFsaWRhdGUpIHtcbiAgICAgICAgLy8gSW52YWxpZGF0ZSB0aGUga2V5IGJ5IGRlbGV0aW5nIHRoZSBjb25jdXJyZW50IHJlcXVlc3QgbWFya2VycyBzbyBuZXdcbiAgICAgICAgLy8gcmVxdWVzdHMgd2lsbCBub3QgYmUgZGVkdXBlZC5cbiAgICAgICAgZGVsZXRlIEZFVENIW2tleV07XG4gICAgICAgIGlmIChyZXZhbGlkYXRvcnMgJiYgcmV2YWxpZGF0b3JzWzBdKSB7XG4gICAgICAgICAgICByZXR1cm4gcmV2YWxpZGF0b3JzWzBdKE1VVEFURV9FVkVOVCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhY2hlLmdldChrZXkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlLmdldChrZXkpO1xufTtcblxuLy8gR2xvYmFsIHRpbWVzdGFtcC5cbnZhciBfX3RpbWVzdGFtcCA9IDA7XG52YXIgZ2V0VGltZXN0YW1wID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKytfX3RpbWVzdGFtcDsgfTtcblxudmFyIGludGVybmFsTXV0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNhY2hlLCBfa2V5LCBfZGF0YSwgX29wdHMsIG9wdGlvbnMsIHBvcHVsYXRlQ2FjaGUsIHJldmFsaWRhdGUsIHJvbGxiYWNrT25FcnJvciwgb3B0aW1pc3RpY0RhdGEsIF9hLCBrZXksIGtleUluZm8sIF9iLCBNVVRBVElPTiwgZGF0YSwgZXJyb3IsIGJlZm9yZU11dGF0aW9uVHMsIGhhc09wdGltaXN0aWNEYXRhLCByb2xsYmFja0RhdGEsIHJlcztcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xuICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgY2FjaGUgPSBhcmdzWzBdLCBfa2V5ID0gYXJnc1sxXSwgX2RhdGEgPSBhcmdzWzJdLCBfb3B0cyA9IGFyZ3NbM107XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB0eXBlb2YgX29wdHMgPT09ICdib29sZWFuJyA/IHsgcmV2YWxpZGF0ZTogX29wdHMgfSA6IF9vcHRzIHx8IHt9O1xuICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZUNhY2hlID0gb3B0aW9ucy5wb3B1bGF0ZUNhY2hlICE9PSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmV2YWxpZGF0ZSA9IG9wdGlvbnMucmV2YWxpZGF0ZSAhPT0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJvbGxiYWNrT25FcnJvciA9IG9wdGlvbnMucm9sbGJhY2tPbkVycm9yICE9PSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW1pc3RpY0RhdGEgPSBvcHRpb25zLm9wdGltaXN0aWNEYXRhO1xuICAgICAgICAgICAgICAgICAgICBfYSA9IHNlcmlhbGl6ZShfa2V5KSwga2V5ID0gX2FbMF0sIGtleUluZm8gPSBfYVsyXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFrZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgIF9iID0gU1dSR2xvYmFsU3RhdGUuZ2V0KGNhY2hlKSwgTVVUQVRJT04gPSBfYlsyXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gbmV3IGRhdGEgcHJvdmlkZWQsIHJldmFsaWRhdGUgdGhlIGtleSB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJldmFsaWRhdGUgYW5kIGJyb2FkY2FzdCBzdGF0ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBicm9hZGNhc3RTdGF0ZShjYWNoZSwga2V5LCBjYWNoZS5nZXQoa2V5KSwgVU5ERUZJTkVELCBVTkRFRklORUQsIHJldmFsaWRhdGUsIHBvcHVsYXRlQ2FjaGUpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gX2RhdGE7XG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZU11dGF0aW9uVHMgPSBnZXRUaW1lc3RhbXAoKTtcbiAgICAgICAgICAgICAgICAgICAgTVVUQVRJT05ba2V5XSA9IFtiZWZvcmVNdXRhdGlvblRzLCAwXTtcbiAgICAgICAgICAgICAgICAgICAgaGFzT3B0aW1pc3RpY0RhdGEgPSAhaXNVbmRlZmluZWQob3B0aW1pc3RpY0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICByb2xsYmFja0RhdGEgPSBjYWNoZS5nZXQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRG8gb3B0aW1pc3RpYyBkYXRhIHVwZGF0ZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc09wdGltaXN0aWNEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZS5zZXQoa2V5LCBvcHRpbWlzdGljRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicm9hZGNhc3RTdGF0ZShjYWNoZSwga2V5LCBvcHRpbWlzdGljRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24oZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGBkYXRhYCBpcyBhIGZ1bmN0aW9uLCBjYWxsIGl0IHBhc3NpbmcgY3VycmVudCBjYWNoZSB2YWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IGRhdGEoY2FjaGUuZ2V0KGtleSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IHRocm93cyBhbiBlcnJvciBzeW5jaHJvbm91c2x5LCB3ZSBzaG91bGRuJ3QgdXBkYXRlIHRoZSBjYWNoZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIShkYXRhICYmIGlzRnVuY3Rpb24oZGF0YS50aGVuKSkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBkYXRhLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBvdGhlciBtdXRhdGlvbnMgaGF2ZSBvY2N1cnJlZCBzaW5jZSB3ZSd2ZSBzdGFydGVkIHRoaXMgbXV0YXRpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgcmFjZSB3ZSBkb24ndCB1cGRhdGUgY2FjaGUgb3IgYnJvYWRjYXN0IHRoZSBjaGFuZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBqdXN0IHJldHVybiB0aGUgZGF0YS5cbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgbWVhbnMgdGhhdCB0aGUgbXV0YXRpb24gaXMgYXN5bmMsIHdlIG5lZWQgdG8gY2hlY2sgdGltZXN0YW1wcyB0b1xuICAgICAgICAgICAgICAgICAgICAvLyBhdm9pZCByYWNlIGNvbmRpdGlvbnMuXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIG90aGVyIG11dGF0aW9ucyBoYXZlIG9jY3VycmVkIHNpbmNlIHdlJ3ZlIHN0YXJ0ZWQgdGhpcyBtdXRhdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhIHJhY2Ugd2UgZG9uJ3QgdXBkYXRlIGNhY2hlIG9yIGJyb2FkY2FzdCB0aGUgY2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICAvLyBqdXN0IHJldHVybiB0aGUgZGF0YS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJlZm9yZU11dGF0aW9uVHMgIT09IE1VVEFUSU9OW2tleV1bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBkYXRhXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChlcnJvciAmJiBoYXNPcHRpbWlzdGljRGF0YSAmJiByb2xsYmFja09uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJvbGxiYWNrLiBBbHdheXMgcG9wdWxhdGUgdGhlIGNhY2hlIGluIHRoaXMgY2FzZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVsYXRlQ2FjaGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHJvbGxiYWNrRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlLnNldChrZXksIHJvbGxiYWNrRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvcHVsYXRlQ2FjaGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPbmx5IHVwZGF0ZSBjYWNoZWQgZGF0YSBpZiB0aGVyZSdzIG5vIGVycm9yLiBEYXRhIGNhbiBiZSBgdW5kZWZpbmVkYCBoZXJlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlLnNldChrZXksIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWx3YXlzIHVwZGF0ZSBvciByZXNldCB0aGUgZXJyb3IuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZS5zZXQoa2V5SW5mbywgbWVyZ2VPYmplY3RzKGNhY2hlLmdldChrZXlJbmZvKSwgeyBlcnJvcjogZXJyb3IgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc2V0IHRoZSB0aW1lc3RhbXAgdG8gbWFyayB0aGUgbXV0YXRpb24gaGFzIGVuZGVkLlxuICAgICAgICAgICAgICAgICAgICBNVVRBVElPTltrZXldWzFdID0gZ2V0VGltZXN0YW1wKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGJyb2FkY2FzdFN0YXRlKGNhY2hlLCBrZXksIGRhdGEsIGVycm9yLCBVTkRFRklORUQsIHJldmFsaWRhdGUsIHBvcHVsYXRlQ2FjaGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaHJvdyBlcnJvciBvciByZXR1cm4gZGF0YVxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBUaHJvdyBlcnJvciBvciByZXR1cm4gZGF0YVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHBvcHVsYXRlQ2FjaGUgPyByZXMgOiBkYXRhXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG52YXIgcmV2YWxpZGF0ZUFsbEtleXMgPSBmdW5jdGlvbiAocmV2YWxpZGF0b3JzLCB0eXBlKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHJldmFsaWRhdG9ycykge1xuICAgICAgICBpZiAocmV2YWxpZGF0b3JzW2tleV1bMF0pXG4gICAgICAgICAgICByZXZhbGlkYXRvcnNba2V5XVswXSh0eXBlKTtcbiAgICB9XG59O1xudmFyIGluaXRDYWNoZSA9IGZ1bmN0aW9uIChwcm92aWRlciwgb3B0aW9ucykge1xuICAgIC8vIFRoZSBnbG9iYWwgc3RhdGUgZm9yIGEgc3BlY2lmaWMgcHJvdmlkZXIgd2lsbCBiZSB1c2VkIHRvIGRlZHVwbGljYXRlXG4gICAgLy8gcmVxdWVzdHMgYW5kIHN0b3JlIGxpc3RlbmVycy4gQXMgd2VsbCBhcyBhIG11dGF0ZSBmdW5jdGlvbiB0aGF0IGJvdW5kIHRvXG4gICAgLy8gdGhlIGNhY2hlLlxuICAgIC8vIFByb3ZpZGVyJ3MgZ2xvYmFsIHN0YXRlIG1pZ2h0IGJlIGFscmVhZHkgaW5pdGlhbGl6ZWQuIExldCdzIHRyeSB0byBnZXQgdGhlXG4gICAgLy8gZ2xvYmFsIHN0YXRlIGFzc29jaWF0ZWQgd2l0aCB0aGUgcHJvdmlkZXIgZmlyc3QuXG4gICAgaWYgKCFTV1JHbG9iYWxTdGF0ZS5oYXMocHJvdmlkZXIpKSB7XG4gICAgICAgIHZhciBvcHRzID0gbWVyZ2VPYmplY3RzKGRlZmF1bHRDb25maWdPcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBnbG9iYWwgc3RhdGUgYm91bmQgdG8gdGhlIHByb3ZpZGVyLCBjcmVhdGUgYSBuZXcgb25lIHdpdGggdGhlXG4gICAgICAgIC8vIG5ldyBtdXRhdGUgZnVuY3Rpb24uXG4gICAgICAgIHZhciBFVkVOVF9SRVZBTElEQVRPUlMgPSB7fTtcbiAgICAgICAgdmFyIG11dGF0ZSA9IGludGVybmFsTXV0YXRlLmJpbmQoVU5ERUZJTkVELCBwcm92aWRlcik7XG4gICAgICAgIHZhciB1bm1vdW50ID0gbm9vcDtcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBzdGF0ZSBpZiBpdCdzIG5ldywgb3IgdGhlIHByb3ZpZGVyIGhhcyBiZWVuIGV4dGVuZGVkLlxuICAgICAgICBTV1JHbG9iYWxTdGF0ZS5zZXQocHJvdmlkZXIsIFtFVkVOVF9SRVZBTElEQVRPUlMsIHt9LCB7fSwge30sIG11dGF0ZV0pO1xuICAgICAgICAvLyBUaGlzIGlzIGEgbmV3IHByb3ZpZGVyLCB3ZSBuZWVkIHRvIGluaXRpYWxpemUgaXQgYW5kIHNldHVwIERPTSBldmVudHNcbiAgICAgICAgLy8gbGlzdGVuZXJzIGZvciBgZm9jdXNgIGFuZCBgcmVjb25uZWN0YCBhY3Rpb25zLlxuICAgICAgICBpZiAoIUlTX1NFUlZFUikge1xuICAgICAgICAgICAgLy8gV2hlbiBsaXN0ZW5pbmcgdG8gdGhlIG5hdGl2ZSBldmVudHMgZm9yIGF1dG8gcmV2YWxpZGF0aW9ucyxcbiAgICAgICAgICAgIC8vIHdlIGludGVudGlvbmFsbHkgcHV0IGEgZGVsYXkgKHNldFRpbWVvdXQpIGhlcmUgdG8gbWFrZSBzdXJlIHRoZXkgYXJlXG4gICAgICAgICAgICAvLyBmaXJlZCBhZnRlciBpbW1lZGlhdGUgSmF2YVNjcmlwdCBleGVjdXRpb25zLCB3aGljaCBjYW4gcG9zc2libHkgYmVcbiAgICAgICAgICAgIC8vIFJlYWN0J3Mgc3RhdGUgdXBkYXRlcy5cbiAgICAgICAgICAgIC8vIFRoaXMgYXZvaWRzIHNvbWUgdW5uZWNlc3NhcnkgcmV2YWxpZGF0aW9ucyBzdWNoIGFzXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL3N3ci9pc3N1ZXMvMTY4MC5cbiAgICAgICAgICAgIHZhciByZWxlYXNlRm9jdXNfMSA9IG9wdHMuaW5pdEZvY3VzKHNldFRpbWVvdXQuYmluZChVTkRFRklORUQsIHJldmFsaWRhdGVBbGxLZXlzLmJpbmQoVU5ERUZJTkVELCBFVkVOVF9SRVZBTElEQVRPUlMsIEZPQ1VTX0VWRU5UKSkpO1xuICAgICAgICAgICAgdmFyIHJlbGVhc2VSZWNvbm5lY3RfMSA9IG9wdHMuaW5pdFJlY29ubmVjdChzZXRUaW1lb3V0LmJpbmQoVU5ERUZJTkVELCByZXZhbGlkYXRlQWxsS2V5cy5iaW5kKFVOREVGSU5FRCwgRVZFTlRfUkVWQUxJREFUT1JTLCBSRUNPTk5FQ1RfRVZFTlQpKSk7XG4gICAgICAgICAgICB1bm1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJlbGVhc2VGb2N1c18xICYmIHJlbGVhc2VGb2N1c18xKCk7XG4gICAgICAgICAgICAgICAgcmVsZWFzZVJlY29ubmVjdF8xICYmIHJlbGVhc2VSZWNvbm5lY3RfMSgpO1xuICAgICAgICAgICAgICAgIC8vIFdoZW4gdW4tbW91bnRpbmcsIHdlIG5lZWQgdG8gcmVtb3ZlIHRoZSBjYWNoZSBwcm92aWRlciBmcm9tIHRoZSBzdGF0ZVxuICAgICAgICAgICAgICAgIC8vIHN0b3JhZ2UgdG9vIGJlY2F1c2UgaXQncyBhIHNpZGUtZWZmZWN0LiBPdGhlcndpc2Ugd2hlbiByZS1tb3VudGluZyB3ZVxuICAgICAgICAgICAgICAgIC8vIHdpbGwgbm90IHJlLXJlZ2lzdGVyIHRob3NlIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgICAgICAgICAgICBTV1JHbG9iYWxTdGF0ZS5kZWxldGUocHJvdmlkZXIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBtaWdodCB3YW50IHRvIGluamVjdCBhbiBleHRyYSBsYXllciBvbiB0b3Agb2YgYHByb3ZpZGVyYCBpbiB0aGUgZnV0dXJlLFxuICAgICAgICAvLyBzdWNoIGFzIGtleSBzZXJpYWxpemF0aW9uLCBhdXRvIEdDLCBldGMuXG4gICAgICAgIC8vIEZvciBub3csIGl0J3MganVzdCBhIGBNYXBgIGludGVyZmFjZSB3aXRob3V0IGFueSBtb2RpZmljYXRpb25zLlxuICAgICAgICByZXR1cm4gW3Byb3ZpZGVyLCBtdXRhdGUsIHVubW91bnRdO1xuICAgIH1cbiAgICByZXR1cm4gW3Byb3ZpZGVyLCBTV1JHbG9iYWxTdGF0ZS5nZXQocHJvdmlkZXIpWzRdXTtcbn07XG5cbi8vIGVycm9yIHJldHJ5XG52YXIgb25FcnJvclJldHJ5ID0gZnVuY3Rpb24gKF8sIF9fLCBjb25maWcsIHJldmFsaWRhdGUsIG9wdHMpIHtcbiAgICB2YXIgbWF4UmV0cnlDb3VudCA9IGNvbmZpZy5lcnJvclJldHJ5Q291bnQ7XG4gICAgdmFyIGN1cnJlbnRSZXRyeUNvdW50ID0gb3B0cy5yZXRyeUNvdW50O1xuICAgIC8vIEV4cG9uZW50aWFsIGJhY2tvZmZcbiAgICB2YXIgdGltZW91dCA9IH5+KChNYXRoLnJhbmRvbSgpICsgMC41KSAqXG4gICAgICAgICgxIDw8IChjdXJyZW50UmV0cnlDb3VudCA8IDggPyBjdXJyZW50UmV0cnlDb3VudCA6IDgpKSkgKiBjb25maWcuZXJyb3JSZXRyeUludGVydmFsO1xuICAgIGlmICghaXNVbmRlZmluZWQobWF4UmV0cnlDb3VudCkgJiYgY3VycmVudFJldHJ5Q291bnQgPiBtYXhSZXRyeUNvdW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0VGltZW91dChyZXZhbGlkYXRlLCB0aW1lb3V0LCBvcHRzKTtcbn07XG4vLyBEZWZhdWx0IGNhY2hlIHByb3ZpZGVyXG52YXIgX2EgPSBpbml0Q2FjaGUobmV3IE1hcCgpKSwgY2FjaGUgPSBfYVswXSwgbXV0YXRlID0gX2FbMV07XG4vLyBEZWZhdWx0IGNvbmZpZ1xudmFyIGRlZmF1bHRDb25maWcgPSBtZXJnZU9iamVjdHMoe1xuICAgIC8vIGV2ZW50c1xuICAgIG9uTG9hZGluZ1Nsb3c6IG5vb3AsXG4gICAgb25TdWNjZXNzOiBub29wLFxuICAgIG9uRXJyb3I6IG5vb3AsXG4gICAgb25FcnJvclJldHJ5OiBvbkVycm9yUmV0cnksXG4gICAgb25EaXNjYXJkZWQ6IG5vb3AsXG4gICAgLy8gc3dpdGNoZXNcbiAgICByZXZhbGlkYXRlT25Gb2N1czogdHJ1ZSxcbiAgICByZXZhbGlkYXRlT25SZWNvbm5lY3Q6IHRydWUsXG4gICAgcmV2YWxpZGF0ZUlmU3RhbGU6IHRydWUsXG4gICAgc2hvdWxkUmV0cnlPbkVycm9yOiB0cnVlLFxuICAgIC8vIHRpbWVvdXRzXG4gICAgZXJyb3JSZXRyeUludGVydmFsOiBzbG93Q29ubmVjdGlvbiA/IDEwMDAwIDogNTAwMCxcbiAgICBmb2N1c1Rocm90dGxlSW50ZXJ2YWw6IDUgKiAxMDAwLFxuICAgIGRlZHVwaW5nSW50ZXJ2YWw6IDIgKiAxMDAwLFxuICAgIGxvYWRpbmdUaW1lb3V0OiBzbG93Q29ubmVjdGlvbiA/IDUwMDAgOiAzMDAwLFxuICAgIC8vIHByb3ZpZGVyc1xuICAgIGNvbXBhcmU6IGZ1bmN0aW9uIChjdXJyZW50RGF0YSwgbmV3RGF0YSkge1xuICAgICAgICByZXR1cm4gc3RhYmxlSGFzaChjdXJyZW50RGF0YSkgPT0gc3RhYmxlSGFzaChuZXdEYXRhKTtcbiAgICB9LFxuICAgIGlzUGF1c2VkOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICBjYWNoZTogY2FjaGUsXG4gICAgbXV0YXRlOiBtdXRhdGUsXG4gICAgZmFsbGJhY2s6IHt9XG59LCBcbi8vIHVzZSB3ZWIgcHJlc2V0IGJ5IGRlZmF1bHRcbnByZXNldCk7XG5cbnZhciBtZXJnZUNvbmZpZ3MgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIC8vIE5lZWQgdG8gY3JlYXRlIGEgbmV3IG9iamVjdCB0byBhdm9pZCBtdXRhdGluZyB0aGUgb3JpZ2luYWwgaGVyZS5cbiAgICB2YXIgdiA9IG1lcmdlT2JqZWN0cyhhLCBiKTtcbiAgICAvLyBJZiB0d28gY29uZmlncyBhcmUgcHJvdmlkZWQsIG1lcmdlIHRoZWlyIGB1c2VgIGFuZCBgZmFsbGJhY2tgIG9wdGlvbnMuXG4gICAgaWYgKGIpIHtcbiAgICAgICAgdmFyIHUxID0gYS51c2UsIGYxID0gYS5mYWxsYmFjaztcbiAgICAgICAgdmFyIHUyID0gYi51c2UsIGYyID0gYi5mYWxsYmFjaztcbiAgICAgICAgaWYgKHUxICYmIHUyKSB7XG4gICAgICAgICAgICB2LnVzZSA9IHUxLmNvbmNhdCh1Mik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGYxICYmIGYyKSB7XG4gICAgICAgICAgICB2LmZhbGxiYWNrID0gbWVyZ2VPYmplY3RzKGYxLCBmMik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHY7XG59O1xuXG52YXIgU1dSQ29uZmlnQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xudmFyIFNXUkNvbmZpZyQxID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvcHMudmFsdWU7XG4gICAgLy8gRXh0ZW5kIHBhcmVudCBjb250ZXh0IHZhbHVlcyBhbmQgbWlkZGxld2FyZS5cbiAgICB2YXIgZXh0ZW5kZWRDb25maWcgPSBtZXJnZUNvbmZpZ3ModXNlQ29udGV4dChTV1JDb25maWdDb250ZXh0KSwgdmFsdWUpO1xuICAgIC8vIFNob3VsZCBub3QgdXNlIHRoZSBpbmhlcml0ZWQgcHJvdmlkZXIuXG4gICAgdmFyIHByb3ZpZGVyID0gdmFsdWUgJiYgdmFsdWUucHJvdmlkZXI7XG4gICAgLy8gVXNlIGEgbGF6eSBpbml0aWFsaXplZCBzdGF0ZSB0byBjcmVhdGUgdGhlIGNhY2hlIG9uIGZpcnN0IGFjY2Vzcy5cbiAgICB2YXIgY2FjaGVDb250ZXh0ID0gdXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcHJvdmlkZXJcbiAgICAgICAgICAgID8gaW5pdENhY2hlKHByb3ZpZGVyKGV4dGVuZGVkQ29uZmlnLmNhY2hlIHx8IGNhY2hlKSwgdmFsdWUpXG4gICAgICAgICAgICA6IFVOREVGSU5FRDtcbiAgICB9KVswXTtcbiAgICAvLyBPdmVycmlkZSB0aGUgY2FjaGUgaWYgYSBuZXcgcHJvdmlkZXIgaXMgZ2l2ZW4uXG4gICAgaWYgKGNhY2hlQ29udGV4dCkge1xuICAgICAgICBleHRlbmRlZENvbmZpZy5jYWNoZSA9IGNhY2hlQ29udGV4dFswXTtcbiAgICAgICAgZXh0ZW5kZWRDb25maWcubXV0YXRlID0gY2FjaGVDb250ZXh0WzFdO1xuICAgIH1cbiAgICAvLyBVbnN1YnNjcmliZSBldmVudHMuXG4gICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7IHJldHVybiAoY2FjaGVDb250ZXh0ID8gY2FjaGVDb250ZXh0WzJdIDogVU5ERUZJTkVEKTsgfSwgW10pO1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFNXUkNvbmZpZ0NvbnRleHQuUHJvdmlkZXIsIG1lcmdlT2JqZWN0cyhwcm9wcywge1xuICAgICAgICB2YWx1ZTogZXh0ZW5kZWRDb25maWdcbiAgICB9KSk7XG59O1xuXG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIHN0YXRlIHdpdGggZGVwZW5kZW5jeS10cmFja2luZy5cbiAqL1xudmFyIHVzZVN0YXRlV2l0aERlcHMgPSBmdW5jdGlvbiAoc3RhdGUsIHVubW91bnRlZFJlZikge1xuICAgIHZhciByZXJlbmRlciA9IHVzZVN0YXRlKHt9KVsxXTtcbiAgICB2YXIgc3RhdGVSZWYgPSB1c2VSZWYoc3RhdGUpO1xuICAgIC8vIElmIGEgc3RhdGUgcHJvcGVydHkgKGRhdGEsIGVycm9yIG9yIGlzVmFsaWRhdGluZykgaXMgYWNjZXNzZWQgYnkgdGhlIHJlbmRlclxuICAgIC8vIGZ1bmN0aW9uLCB3ZSBtYXJrIHRoZSBwcm9wZXJ0eSBhcyBhIGRlcGVuZGVuY3kgc28gaWYgaXQgaXMgdXBkYXRlZCBhZ2FpblxuICAgIC8vIGluIHRoZSBmdXR1cmUsIHdlIHRyaWdnZXIgYSByZXJlbmRlci5cbiAgICAvLyBUaGlzIGlzIGFsc28ga25vd24gYXMgZGVwZW5kZW5jeS10cmFja2luZy5cbiAgICB2YXIgc3RhdGVEZXBlbmRlbmNpZXNSZWYgPSB1c2VSZWYoe1xuICAgICAgICBkYXRhOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgICBpc1ZhbGlkYXRpbmc6IGZhbHNlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHBheWxvYWQgVG8gY2hhbmdlIHN0YXRlUmVmLCBwYXNzIHRoZSB2YWx1ZXMgZXhwbGljaXRseSB0byBzZXRTdGF0ZTpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGBgYGpzXG4gICAgICogc2V0U3RhdGUoe1xuICAgICAqICAgaXNWYWxpZGF0aW5nOiBmYWxzZVxuICAgICAqICAgZGF0YTogbmV3RGF0YSAvLyBzZXQgZGF0YSB0byBuZXdEYXRhXG4gICAgICogICBlcnJvcjogdW5kZWZpbmVkIC8vIHNldCBlcnJvciB0byB1bmRlZmluZWRcbiAgICAgKiB9KVxuICAgICAqXG4gICAgICogc2V0U3RhdGUoe1xuICAgICAqICAgaXNWYWxpZGF0aW5nOiBmYWxzZVxuICAgICAqICAgZGF0YTogdW5kZWZpbmVkIC8vIHNldCBkYXRhIHRvIHVuZGVmaW5lZFxuICAgICAqICAgZXJyb3I6IGVyciAvLyBzZXQgZXJyb3IgdG8gZXJyXG4gICAgICogfSlcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICB2YXIgc2V0U3RhdGUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAocGF5bG9hZCkge1xuICAgICAgICB2YXIgc2hvdWxkUmVyZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgdmFyIGN1cnJlbnRTdGF0ZSA9IHN0YXRlUmVmLmN1cnJlbnQ7XG4gICAgICAgIGZvciAodmFyIF8gaW4gcGF5bG9hZCkge1xuICAgICAgICAgICAgdmFyIGsgPSBfO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHByb3BlcnR5IGhhcyBjaGFuZ2VkLCB1cGRhdGUgdGhlIHN0YXRlIGFuZCBtYXJrIHJlcmVuZGVyIGFzXG4gICAgICAgICAgICAvLyBuZWVkZWQuXG4gICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlW2tdICE9PSBwYXlsb2FkW2tdKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFN0YXRlW2tdID0gcGF5bG9hZFtrXTtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcHJvcGVydHkgaXMgYWNjZXNzZWQgYnkgdGhlIGNvbXBvbmVudCwgYSByZXJlbmRlciBzaG91bGQgYmVcbiAgICAgICAgICAgICAgICAvLyB0cmlnZ2VyZWQuXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlRGVwZW5kZW5jaWVzUmVmLmN1cnJlbnRba10pIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdWxkUmVyZW5kZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvdWxkUmVyZW5kZXIgJiYgIXVubW91bnRlZFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICByZXJlbmRlcih7fSk7XG4gICAgICAgIH1cbiAgICB9LCBcbiAgICAvLyBjb25maWcuc3VzcGVuc2UgaXNuJ3QgYWxsb3dlZCB0byBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZlY3ljbGVcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgW10pO1xuICAgIC8vIEFsd2F5cyB1cGRhdGUgdGhlIHN0YXRlIHJlZmVyZW5jZS5cbiAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3RhdGVSZWYuY3VycmVudCA9IHN0YXRlO1xuICAgIH0pO1xuICAgIHJldHVybiBbc3RhdGVSZWYsIHN0YXRlRGVwZW5kZW5jaWVzUmVmLmN1cnJlbnQsIHNldFN0YXRlXTtcbn07XG5cbnZhciBub3JtYWxpemUgPSBmdW5jdGlvbiAoYXJncykge1xuICAgIHJldHVybiBpc0Z1bmN0aW9uKGFyZ3NbMV0pXG4gICAgICAgID8gW2FyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0gfHwge31dXG4gICAgICAgIDogW2FyZ3NbMF0sIG51bGwsIChhcmdzWzFdID09PSBudWxsID8gYXJnc1syXSA6IGFyZ3NbMV0pIHx8IHt9XTtcbn07XG5cbnZhciB1c2VTV1JDb25maWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG1lcmdlT2JqZWN0cyhkZWZhdWx0Q29uZmlnLCB1c2VDb250ZXh0KFNXUkNvbmZpZ0NvbnRleHQpKTtcbn07XG5cbi8vIEl0J3MgdHJpY2t5IHRvIHBhc3MgZ2VuZXJpYyB0eXBlcyBhcyBwYXJhbWV0ZXJzLCBzbyB3ZSBqdXN0IGRpcmVjdGx5IG92ZXJyaWRlXG4vLyB0aGUgdHlwZXMgaGVyZS5cbnZhciB3aXRoQXJncyA9IGZ1bmN0aW9uIChob29rKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVzZVNXUkFyZ3MoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2V0IHRoZSBkZWZhdWx0IGFuZCBpbmhlcml0ZWQgY29uZmlndXJhdGlvbi5cbiAgICAgICAgdmFyIGZhbGxiYWNrQ29uZmlnID0gdXNlU1dSQ29uZmlnKCk7XG4gICAgICAgIC8vIE5vcm1hbGl6ZSBhcmd1bWVudHMuXG4gICAgICAgIHZhciBfYSA9IG5vcm1hbGl6ZShhcmdzKSwga2V5ID0gX2FbMF0sIGZuID0gX2FbMV0sIF9jb25maWcgPSBfYVsyXTtcbiAgICAgICAgLy8gTWVyZ2UgY29uZmlndXJhdGlvbnMuXG4gICAgICAgIHZhciBjb25maWcgPSBtZXJnZUNvbmZpZ3MoZmFsbGJhY2tDb25maWcsIF9jb25maWcpO1xuICAgICAgICAvLyBBcHBseSBtaWRkbGV3YXJlXG4gICAgICAgIHZhciBuZXh0ID0gaG9vaztcbiAgICAgICAgdmFyIHVzZSA9IGNvbmZpZy51c2U7XG4gICAgICAgIGlmICh1c2UpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSB1c2UubGVuZ3RoOyBpLS0gPiAwOykge1xuICAgICAgICAgICAgICAgIG5leHQgPSB1c2VbaV0obmV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5leHQoa2V5LCBmbiB8fCBjb25maWcuZmV0Y2hlciwgY29uZmlnKTtcbiAgICB9O1xufTtcblxuLy8gQWRkIGEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYSBsaXN0IG9mIGtleWVkIGNhbGxiYWNrIGZ1bmN0aW9ucyBhbmQgcmV0dXJuXG4vLyB0aGUgdW5zdWJzY3JpYmUgZnVuY3Rpb24uXG52YXIgc3Vic2NyaWJlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoa2V5LCBjYWxsYmFja3MsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGtleWVkUmV2YWxpZGF0b3JzID0gY2FsbGJhY2tzW2tleV0gfHwgKGNhbGxiYWNrc1trZXldID0gW10pO1xuICAgIGtleWVkUmV2YWxpZGF0b3JzLnB1c2goY2FsbGJhY2spO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGtleWVkUmV2YWxpZGF0b3JzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgLy8gTygxKTogZmFzdGVyIHRoYW4gc3BsaWNlXG4gICAgICAgICAgICBrZXllZFJldmFsaWRhdG9yc1tpbmRleF0gPSBrZXllZFJldmFsaWRhdG9yc1trZXllZFJldmFsaWRhdG9ycy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGtleWVkUmV2YWxpZGF0b3JzLnBvcCgpO1xuICAgICAgICB9XG4gICAgfTtcbn07XG5cbnZhciBXSVRIX0RFRFVQRSA9IHsgZGVkdXBlOiB0cnVlIH07XG52YXIgdXNlU1dSSGFuZGxlciA9IGZ1bmN0aW9uIChfa2V5LCBmZXRjaGVyLCBjb25maWcpIHtcbiAgICB2YXIgY2FjaGUgPSBjb25maWcuY2FjaGUsIGNvbXBhcmUgPSBjb25maWcuY29tcGFyZSwgZmFsbGJhY2tEYXRhID0gY29uZmlnLmZhbGxiYWNrRGF0YSwgc3VzcGVuc2UgPSBjb25maWcuc3VzcGVuc2UsIHJldmFsaWRhdGVPbk1vdW50ID0gY29uZmlnLnJldmFsaWRhdGVPbk1vdW50LCByZWZyZXNoSW50ZXJ2YWwgPSBjb25maWcucmVmcmVzaEludGVydmFsLCByZWZyZXNoV2hlbkhpZGRlbiA9IGNvbmZpZy5yZWZyZXNoV2hlbkhpZGRlbiwgcmVmcmVzaFdoZW5PZmZsaW5lID0gY29uZmlnLnJlZnJlc2hXaGVuT2ZmbGluZTtcbiAgICB2YXIgX2EgPSBTV1JHbG9iYWxTdGF0ZS5nZXQoY2FjaGUpLCBFVkVOVF9SRVZBTElEQVRPUlMgPSBfYVswXSwgU1RBVEVfVVBEQVRFUlMgPSBfYVsxXSwgTVVUQVRJT04gPSBfYVsyXSwgRkVUQ0ggPSBfYVszXTtcbiAgICAvLyBga2V5YCBpcyB0aGUgaWRlbnRpZmllciBvZiB0aGUgU1dSIGBkYXRhYCBzdGF0ZSwgYGtleUluZm9gIGhvbGRzIGV4dHJhXG4gICAgLy8gc3RhdGVzIHN1Y2ggYXMgYGVycm9yYCBhbmQgYGlzVmFsaWRhdGluZ2AgaW5zaWRlLFxuICAgIC8vIGFsbCBvZiB0aGVtIGFyZSBkZXJpdmVkIGZyb20gYF9rZXlgLlxuICAgIC8vIGBmbkFyZ3NgIGlzIGFuIGFycmF5IG9mIGFyZ3VtZW50cyBwYXJzZWQgZnJvbSB0aGUga2V5LCB3aGljaCB3aWxsIGJlIHBhc3NlZFxuICAgIC8vIHRvIHRoZSBmZXRjaGVyLlxuICAgIHZhciBfYiA9IHNlcmlhbGl6ZShfa2V5KSwga2V5ID0gX2JbMF0sIGZuQXJncyA9IF9iWzFdLCBrZXlJbmZvID0gX2JbMl07XG4gICAgLy8gSWYgaXQncyB0aGUgaW5pdGlhbCByZW5kZXIgb2YgdGhpcyBob29rLlxuICAgIHZhciBpbml0aWFsTW91bnRlZFJlZiA9IHVzZVJlZihmYWxzZSk7XG4gICAgLy8gSWYgdGhlIGhvb2sgaXMgdW5tb3VudGVkIGFscmVhZHkuIFRoaXMgd2lsbCBiZSB1c2VkIHRvIHByZXZlbnQgc29tZSBlZmZlY3RzXG4gICAgLy8gdG8gYmUgY2FsbGVkIGFmdGVyIHVubW91bnRpbmcuXG4gICAgdmFyIHVubW91bnRlZFJlZiA9IHVzZVJlZihmYWxzZSk7XG4gICAgLy8gUmVmcyB0byBrZWVwIHRoZSBrZXkgYW5kIGNvbmZpZy5cbiAgICB2YXIga2V5UmVmID0gdXNlUmVmKGtleSk7XG4gICAgdmFyIGZldGNoZXJSZWYgPSB1c2VSZWYoZmV0Y2hlcik7XG4gICAgdmFyIGNvbmZpZ1JlZiA9IHVzZVJlZihjb25maWcpO1xuICAgIHZhciBnZXRDb25maWcgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBjb25maWdSZWYuY3VycmVudDsgfTtcbiAgICB2YXIgaXNBY3RpdmUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRDb25maWcoKS5pc1Zpc2libGUoKSAmJiBnZXRDb25maWcoKS5pc09ubGluZSgpOyB9O1xuICAgIHZhciBwYXRjaEZldGNoSW5mbyA9IGZ1bmN0aW9uIChpbmZvKSB7XG4gICAgICAgIHJldHVybiBjYWNoZS5zZXQoa2V5SW5mbywgbWVyZ2VPYmplY3RzKGNhY2hlLmdldChrZXlJbmZvKSwgaW5mbykpO1xuICAgIH07XG4gICAgLy8gR2V0IHRoZSBjdXJyZW50IHN0YXRlIHRoYXQgU1dSIHNob3VsZCByZXR1cm4uXG4gICAgdmFyIGNhY2hlZCA9IGNhY2hlLmdldChrZXkpO1xuICAgIHZhciBmYWxsYmFjayA9IGlzVW5kZWZpbmVkKGZhbGxiYWNrRGF0YSlcbiAgICAgICAgPyBjb25maWcuZmFsbGJhY2tba2V5XVxuICAgICAgICA6IGZhbGxiYWNrRGF0YTtcbiAgICB2YXIgZGF0YSA9IGlzVW5kZWZpbmVkKGNhY2hlZCkgPyBmYWxsYmFjayA6IGNhY2hlZDtcbiAgICB2YXIgaW5mbyA9IGNhY2hlLmdldChrZXlJbmZvKSB8fCB7fTtcbiAgICB2YXIgZXJyb3IgPSBpbmZvLmVycm9yO1xuICAgIC8vIC0gU3VzcGVuc2UgbW9kZSBhbmQgdGhlcmUncyBzdGFsZSBkYXRhIGZvciB0aGUgaW5pdGlhbCByZW5kZXIuXG4gICAgLy8gLSBOb3Qgc3VzcGVuc2UgbW9kZSBhbmQgdGhlcmUgaXMgbm8gZmFsbGJhY2sgZGF0YSBhbmQgYHJldmFsaWRhdGVJZlN0YWxlYCBpcyBlbmFibGVkLlxuICAgIC8vIC0gYHJldmFsaWRhdGVJZlN0YWxlYCBpcyBlbmFibGVkIGJ1dCBgZGF0YWAgaXMgbm90IGRlZmluZWQuXG4gICAgdmFyIHNob3VsZFJldmFsaWRhdGVPbk1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBJZiBgcmV2YWxpZGF0ZU9uTW91bnRgIGlzIHNldCwgd2UgdGFrZSB0aGUgdmFsdWUgZGlyZWN0bHkuXG4gICAgICAgIGlmICghaXNVbmRlZmluZWQocmV2YWxpZGF0ZU9uTW91bnQpKVxuICAgICAgICAgICAgcmV0dXJuIHJldmFsaWRhdGVPbk1vdW50O1xuICAgICAgICAvLyBJZiBpdCdzIHBhdXNlZCwgd2Ugc2tpcCByZXZhbGlkYXRpb24uXG4gICAgICAgIGlmIChnZXRDb25maWcoKS5pc1BhdXNlZCgpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gc3VzcGVuc2VcbiAgICAgICAgICAgID8gLy8gVW5kZXIgc3VzcGVuc2UgbW9kZSwgaXQgd2lsbCBhbHdheXMgZmV0Y2ggb24gcmVuZGVyIGlmIHRoZXJlIGlzIG5vXG4gICAgICAgICAgICAgICAgLy8gc3RhbGUgZGF0YSBzbyBubyBuZWVkIHRvIHJldmFsaWRhdGUgaW1tZWRpYXRlbHkgb24gbW91bnQgYWdhaW4uXG4gICAgICAgICAgICAgICAgIWlzVW5kZWZpbmVkKGRhdGEpXG4gICAgICAgICAgICA6IC8vIElmIHRoZXJlIGlzIG5vIHN0YWxlIGRhdGEsIHdlIG5lZWQgdG8gcmV2YWxpZGF0ZSBvbiBtb3VudDtcbiAgICAgICAgICAgICAgICAvLyBJZiBgcmV2YWxpZGF0ZUlmU3RhbGVgIGlzIHNldCB0byB0cnVlLCB3ZSB3aWxsIGFsd2F5cyByZXZhbGlkYXRlLlxuICAgICAgICAgICAgICAgIGlzVW5kZWZpbmVkKGRhdGEpIHx8IGNvbmZpZy5yZXZhbGlkYXRlSWZTdGFsZTtcbiAgICB9O1xuICAgIC8vIFJlc29sdmUgdGhlIGN1cnJlbnQgdmFsaWRhdGluZyBzdGF0ZS5cbiAgICB2YXIgcmVzb2x2ZVZhbGlkYXRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgha2V5IHx8ICFmZXRjaGVyKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoaW5mby5pc1ZhbGlkYXRpbmcpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgLy8gSWYgaXQncyBub3QgbW91bnRlZCB5ZXQgYW5kIGl0IHNob3VsZCByZXZhbGlkYXRlIG9uIG1vdW50LCByZXZhbGlkYXRlLlxuICAgICAgICByZXR1cm4gIWluaXRpYWxNb3VudGVkUmVmLmN1cnJlbnQgJiYgc2hvdWxkUmV2YWxpZGF0ZU9uTW91bnQoKTtcbiAgICB9O1xuICAgIHZhciBpc1ZhbGlkYXRpbmcgPSByZXNvbHZlVmFsaWRhdGluZygpO1xuICAgIHZhciBfYyA9IHVzZVN0YXRlV2l0aERlcHMoe1xuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgIGlzVmFsaWRhdGluZzogaXNWYWxpZGF0aW5nXG4gICAgfSwgdW5tb3VudGVkUmVmKSwgc3RhdGVSZWYgPSBfY1swXSwgc3RhdGVEZXBlbmRlbmNpZXMgPSBfY1sxXSwgc2V0U3RhdGUgPSBfY1syXTtcbiAgICAvLyBUaGUgcmV2YWxpZGF0aW9uIGZ1bmN0aW9uIGlzIGEgY2FyZWZ1bGx5IGNyYWZ0ZWQgd3JhcHBlciBvZiB0aGUgb3JpZ2luYWxcbiAgICAvLyBgZmV0Y2hlcmAsIHRvIGNvcnJlY3RseSBoYW5kbGUgdGhlIG1hbnkgZWRnZSBjYXNlcy5cbiAgICB2YXIgcmV2YWxpZGF0ZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChyZXZhbGlkYXRlT3B0cykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRGZXRjaGVyLCBuZXdEYXRhLCBzdGFydEF0LCBsb2FkaW5nLCBvcHRzLCBzaG91bGRTdGFydE5ld1JlcXVlc3QsIGlzQ3VycmVudEtleU1vdW50ZWQsIGNsZWFudXBTdGF0ZSwgbmV3U3RhdGUsIGZpbmlzaFJlcXVlc3RBbmRVcGRhdGVTdGF0ZSwgbXV0YXRpb25JbmZvLCBlcnJfMTtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RmV0Y2hlciA9IGZldGNoZXJSZWYuY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFrZXkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICFjdXJyZW50RmV0Y2hlciB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgdW5tb3VudGVkUmVmLmN1cnJlbnQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldENvbmZpZygpLmlzUGF1c2VkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIG9wdHMgPSByZXZhbGlkYXRlT3B0cyB8fCB7fTtcbiAgICAgICAgICAgICAgICAgICAgc2hvdWxkU3RhcnROZXdSZXF1ZXN0ID0gIUZFVENIW2tleV0gfHwgIW9wdHMuZGVkdXBlO1xuICAgICAgICAgICAgICAgICAgICBpc0N1cnJlbnRLZXlNb3VudGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICF1bm1vdW50ZWRSZWYuY3VycmVudCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9PT0ga2V5UmVmLmN1cnJlbnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsTW91bnRlZFJlZi5jdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBjbGVhbnVwU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBpdCdzIHN0aWxsIHRoZSBzYW1lIHJlcXVlc3QgYmVmb3JlIGRlbGV0aW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlcXVlc3RJbmZvID0gRkVUQ0hba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0SW5mbyAmJiByZXF1ZXN0SW5mb1sxXSA9PT0gc3RhcnRBdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBGRVRDSFtrZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBuZXdTdGF0ZSA9IHsgaXNWYWxpZGF0aW5nOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgICAgICBmaW5pc2hSZXF1ZXN0QW5kVXBkYXRlU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRjaEZldGNoSW5mbyh7IGlzVmFsaWRhdGluZzogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBjYW4gb25seSBzZXQgc3RhdGUgaWYgaXQncyBzYWZlIChzdGlsbCBtb3VudGVkIHdpdGggdGhlIHNhbWUga2V5KS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0N1cnJlbnRLZXlNb3VudGVkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIC8vIFN0YXJ0IGZldGNoaW5nLiBDaGFuZ2UgdGhlIGBpc1ZhbGlkYXRpbmdgIHN0YXRlLCB1cGRhdGUgdGhlIGNhY2hlLlxuICAgICAgICAgICAgICAgICAgICBwYXRjaEZldGNoSW5mbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkYXRpbmc6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFN0YXRlKHsgaXNWYWxpZGF0aW5nOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkU3RhcnROZXdSZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUZWxsIGFsbCBvdGhlciBob29rcyB0byBjaGFuZ2UgdGhlIGBpc1ZhbGlkYXRpbmdgIHN0YXRlLlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJvYWRjYXN0U3RhdGUoY2FjaGUsIGtleSwgc3RhdGVSZWYuY3VycmVudC5kYXRhLCBzdGF0ZVJlZi5jdXJyZW50LmVycm9yLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIG5vIGNhY2hlIGJlaW5nIHJlbmRlcmVkIGN1cnJlbnRseSAoaXQgc2hvd3MgYSBibGFuayBwYWdlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIHRyaWdnZXIgdGhlIGxvYWRpbmcgc2xvdyBldmVudC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcubG9hZGluZ1RpbWVvdXQgJiYgIWNhY2hlLmdldChrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2FkaW5nICYmIGlzQ3VycmVudEtleU1vdW50ZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Q29uZmlnKCkub25Mb2FkaW5nU2xvdyhrZXksIGNvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBjb25maWcubG9hZGluZ1RpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RhcnQgdGhlIHJlcXVlc3QgYW5kIHNhdmUgdGhlIHRpbWVzdGFtcC5cbiAgICAgICAgICAgICAgICAgICAgICAgIEZFVENIW2tleV0gPSBbY3VycmVudEZldGNoZXIuYXBwbHkodm9pZCAwLCBmbkFyZ3MpLCBnZXRUaW1lc3RhbXAoKV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX2EgPSBGRVRDSFtrZXldLCBuZXdEYXRhID0gX2FbMF0sIHN0YXJ0QXQgPSBfYVsxXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmV3RGF0YV07XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBuZXdEYXRhID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkU3RhcnROZXdSZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcmVxdWVzdCBpc24ndCBpbnRlcnJ1cHRlZCwgY2xlYW4gaXQgdXAgYWZ0ZXIgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWR1cGxpY2F0aW9uIGludGVydmFsLlxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChjbGVhbnVwU3RhdGUsIGNvbmZpZy5kZWR1cGluZ0ludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSdyZSBvdGhlciBvbmdvaW5nIHJlcXVlc3QocyksIHN0YXJ0ZWQgYWZ0ZXIgdGhlIGN1cnJlbnQgb25lLFxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGlnbm9yZSB0aGUgY3VycmVudCBvbmUgdG8gYXZvaWQgcG9zc2libGUgcmFjZSBjb25kaXRpb25zOlxuICAgICAgICAgICAgICAgICAgICAvLyAgIHJlcTEtLS0tLS0tLS0tLS0tLS0tLS0+cmVzMSAgICAgICAgKGN1cnJlbnQgb25lKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgcmVxMi0tLS0tLS0tLS0tLS0tLS0+cmVzMlxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgcmVxdWVzdCB0aGF0IGZpcmVkIGxhdGVyIHdpbGwgYWx3YXlzIGJlIGtlcHQuXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSB0aW1lc3RhbXAgbWF5YmUgYmUgYHVuZGVmaW5lZGAgb3IgYSBudW1iZXJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFGRVRDSFtrZXldIHx8IEZFVENIW2tleV1bMV0gIT09IHN0YXJ0QXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGRTdGFydE5ld1JlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDdXJyZW50S2V5TW91bnRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldENvbmZpZygpLm9uRGlzY2FyZGVkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBDbGVhciBlcnJvci5cbiAgICAgICAgICAgICAgICAgICAgcGF0Y2hGZXRjaEluZm8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IFVOREVGSU5FRFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgbmV3U3RhdGUuZXJyb3IgPSBVTkRFRklORUQ7XG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9uSW5mbyA9IE1VVEFUSU9OW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQobXV0YXRpb25JbmZvKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FzZSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAoc3RhcnRBdCA8PSBtdXRhdGlvbkluZm9bMF0gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEF0IDw9IG11dGF0aW9uSW5mb1sxXSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uSW5mb1sxXSA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmlzaFJlcXVlc3RBbmRVcGRhdGVTdGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZFN0YXJ0TmV3UmVxdWVzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0N1cnJlbnRLZXlNb3VudGVkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Q29uZmlnKCkub25EaXNjYXJkZWQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIERlZXAgY29tcGFyZSB3aXRoIGxhdGVzdCBzdGF0ZSB0byBhdm9pZCBleHRyYSByZS1yZW5kZXJzLlxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgbG9jYWwgc3RhdGUsIGNvbXBhcmUgYW5kIGFzc2lnbi5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21wYXJlKHN0YXRlUmVmLmN1cnJlbnQuZGF0YSwgbmV3RGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXRlLmRhdGEgPSBuZXdEYXRhO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGF0YSBhbmQgbmV3RGF0YSBhcmUgZGVlcGx5IGVxdWFsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpdCBzaG91bGQgYmUgc2FmZSB0byBicm9hZGNhc3QgdGhlIHN0YWxlIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXRlLmRhdGEgPSBzdGF0ZVJlZi5jdXJyZW50LmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBdCB0aGUgZW5kIG9mIHRoaXMgZnVuY3Rpb24sIGBicm9jYXN0U3RhdGVgIGludm9rZXMgdGhlIGBvblN0YXRlVXBkYXRlYCBmdW5jdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdoaWNoIHRha2VzIGNhcmUgb2YgYXZvaWRpbmcgdGhlIHJlLXJlbmRlclxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBnbG9iYWwgc3RhdGUsIGl0J3MgcG9zc2libGUgdGhhdCB0aGUga2V5IGhhcyBjaGFuZ2VkLlxuICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL3N3ci9wdWxsLzEwNThcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21wYXJlKGNhY2hlLmdldChrZXkpLCBuZXdEYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGUuc2V0KGtleSwgbmV3RGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gVHJpZ2dlciB0aGUgc3VjY2Vzc2Z1bCBjYWxsYmFjayBpZiBpdCdzIHRoZSBvcmlnaW5hbCByZXF1ZXN0LlxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkU3RhcnROZXdSZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDdXJyZW50S2V5TW91bnRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Q29uZmlnKCkub25TdWNjZXNzKG5ld0RhdGEsIGtleSwgY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIGVycl8xID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhbnVwU3RhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gTm90IHBhdXNlZCwgd2UgY29udGludWUgaGFuZGxpbmcgdGhlIGVycm9yLiBPdGhlcndpc2UgZGlzY2FyZCBpdC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFnZXRDb25maWcoKS5pc1BhdXNlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgYSBuZXcgZXJyb3IsIGRvbid0IHVzZSBkZWVwIGNvbXBhcmlzb24gZm9yIGVycm9ycy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGNoRmV0Y2hJbmZvKHsgZXJyb3I6IGVycl8xIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3RhdGUuZXJyb3IgPSBlcnJfMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVycm9yIGV2ZW50IGFuZCByZXRyeSBsb2dpYy4gT25seSBmb3IgdGhlIGFjdHVhbCByZXF1ZXN0LCBub3RcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlZHVwZWQgb25lcy5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGRTdGFydE5ld1JlcXVlc3QgJiYgaXNDdXJyZW50S2V5TW91bnRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Q29uZmlnKCkub25FcnJvcihlcnJfMSwga2V5LCBjb25maWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgodHlwZW9mIGNvbmZpZy5zaG91bGRSZXRyeU9uRXJyb3IgPT09ICdib29sZWFuJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcuc2hvdWxkUmV0cnlPbkVycm9yKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXNGdW5jdGlvbihjb25maWcuc2hvdWxkUmV0cnlPbkVycm9yKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnLnNob3VsZFJldHJ5T25FcnJvcihlcnJfMSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gcmV0cnlpbmcsIGRlZHVwZSBpcyBhbHdheXMgZW5hYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNBY3RpdmUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQncyBhY3RpdmUsIHN0b3AuIEl0IHdpbGwgYXV0byByZXZhbGlkYXRlIHdoZW4gcmVmb2N1c2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3IgcmVjb25uZWN0aW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Q29uZmlnKCkub25FcnJvclJldHJ5KGVycl8xLCBrZXksIGNvbmZpZywgcmV2YWxpZGF0ZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHJ5Q291bnQ6IChvcHRzLnJldHJ5Q291bnQgfHwgMCkgKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZHVwZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAvLyBNYXJrIGxvYWRpbmcgYXMgc3RvcHBlZC5cbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIGN1cnJlbnQgaG9vaydzIHN0YXRlLlxuICAgICAgICAgICAgICAgICAgICBmaW5pc2hSZXF1ZXN0QW5kVXBkYXRlU3RhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSGVyZSBpcyB0aGUgc291cmNlIG9mIHRoZSByZXF1ZXN0LCBuZWVkIHRvIHRlbGwgYWxsIG90aGVyIGhvb2tzIHRvXG4gICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGVpciBzdGF0ZXMuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0N1cnJlbnRLZXlNb3VudGVkKCkgJiYgc2hvdWxkU3RhcnROZXdSZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicm9hZGNhc3RTdGF0ZShjYWNoZSwga2V5LCBuZXdTdGF0ZS5kYXRhLCBuZXdTdGF0ZS5lcnJvciwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0cnVlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7IH0sIFxuICAgIC8vIGBzZXRTdGF0ZWAgaXMgaW1tdXRhYmxlLCBhbmQgYGV2ZW50c0NhbGxiYWNrYCwgYGZuQXJnc2AsIGBrZXlJbmZvYCxcbiAgICAvLyBhbmQgYGtleVZhbGlkYXRpbmdgIGFyZSBkZXBlbmRpbmcgb24gYGtleWAsIHNvIHdlIGNhbiBleGNsdWRlIHRoZW0gZnJvbVxuICAgIC8vIHRoZSBkZXBzIGFycmF5LlxuICAgIC8vXG4gICAgLy8gRklYTUU6XG4gICAgLy8gYGZuYCBhbmQgYGNvbmZpZ2AgbWlnaHQgYmUgY2hhbmdlZCBkdXJpbmcgdGhlIGxpZmVjeWNsZSxcbiAgICAvLyBidXQgdGhleSBtaWdodCBiZSBjaGFuZ2VkIGV2ZXJ5IHJlbmRlciBsaWtlIHRoaXMuXG4gICAgLy8gYHVzZVNXUigna2V5JywgKCkgPT4gZmV0Y2goJy9hcGkvJyksIHsgc3VzcGVuc2U6IHRydWUgfSlgXG4gICAgLy8gU28gd2Ugb21pdCB0aGUgdmFsdWVzIGZyb20gdGhlIGRlcHMgYXJyYXlcbiAgICAvLyBldmVuIHRob3VnaCBpdCBtaWdodCBjYXVzZSB1bmV4cGVjdGVkIGJlaGF2aW9ycy5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgW2tleV0pO1xuICAgIC8vIFNpbWlsYXIgdG8gdGhlIGdsb2JhbCBtdXRhdGUsIGJ1dCBib3VuZCB0byB0aGUgY3VycmVudCBjYWNoZSBhbmQga2V5LlxuICAgIC8vIGBjYWNoZWAgaXNuJ3QgYWxsb3dlZCB0byBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZlY3ljbGUuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIHZhciBib3VuZE11dGF0ZSA9IHVzZUNhbGxiYWNrKFxuICAgIC8vIEJ5IHVzaW5nIGBiaW5kYCB3ZSBkb24ndCBuZWVkIHRvIG1vZGlmeSB0aGUgc2l6ZSBvZiB0aGUgcmVzdCBhcmd1bWVudHMuXG4gICAgaW50ZXJuYWxNdXRhdGUuYmluZChVTkRFRklORUQsIGNhY2hlLCBmdW5jdGlvbiAoKSB7IHJldHVybiBrZXlSZWYuY3VycmVudDsgfSksIFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICBbXSk7XG4gICAgLy8gQWx3YXlzIHVwZGF0ZSBmZXRjaGVyIGFuZCBjb25maWcgcmVmcy5cbiAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZmV0Y2hlclJlZi5jdXJyZW50ID0gZmV0Y2hlcjtcbiAgICAgICAgY29uZmlnUmVmLmN1cnJlbnQgPSBjb25maWc7XG4gICAgfSk7XG4gICAgLy8gQWZ0ZXIgbW91bnRlZCBvciBrZXkgY2hhbmdlZC5cbiAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFrZXkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIE5vdCB0aGUgaW5pdGlhbCByZW5kZXIuXG4gICAgICAgIHZhciBrZXlDaGFuZ2VkID0gaW5pdGlhbE1vdW50ZWRSZWYuY3VycmVudDtcbiAgICAgICAgdmFyIHNvZnRSZXZhbGlkYXRlID0gcmV2YWxpZGF0ZS5iaW5kKFVOREVGSU5FRCwgV0lUSF9ERURVUEUpO1xuICAgICAgICAvLyBFeHBvc2Ugc3RhdGUgdXBkYXRlciB0byBnbG9iYWwgZXZlbnQgbGlzdGVuZXJzLiBTbyB3ZSBjYW4gdXBkYXRlIGhvb2snc1xuICAgICAgICAvLyBpbnRlcm5hbCBzdGF0ZSBmcm9tIHRoZSBvdXRzaWRlLlxuICAgICAgICB2YXIgb25TdGF0ZVVwZGF0ZSA9IGZ1bmN0aW9uICh1cGRhdGVkRGF0YSwgdXBkYXRlZEVycm9yLCB1cGRhdGVkSXNWYWxpZGF0aW5nKSB7XG4gICAgICAgICAgICBzZXRTdGF0ZShtZXJnZU9iamVjdHMoe1xuICAgICAgICAgICAgICAgIGVycm9yOiB1cGRhdGVkRXJyb3IsXG4gICAgICAgICAgICAgICAgaXNWYWxpZGF0aW5nOiB1cGRhdGVkSXNWYWxpZGF0aW5nXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIC8vIFNpbmNlIGBzZXRTdGF0ZWAgb25seSBzaGFsbG93bHkgY29tcGFyZXMgc3RhdGVzLCB3ZSBkbyBhIGRlZXBcbiAgICAgICAgICAgIC8vIGNvbXBhcmlzb24gaGVyZS5cbiAgICAgICAgICAgIGNvbXBhcmUoc3RhdGVSZWYuY3VycmVudC5kYXRhLCB1cGRhdGVkRGF0YSlcbiAgICAgICAgICAgICAgICA/IFVOREVGSU5FRFxuICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB1cGRhdGVkRGF0YVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gRXhwb3NlIHJldmFsaWRhdG9ycyB0byBnbG9iYWwgZXZlbnQgbGlzdGVuZXJzLiBTbyB3ZSBjYW4gdHJpZ2dlclxuICAgICAgICAvLyByZXZhbGlkYXRpb24gZnJvbSB0aGUgb3V0c2lkZS5cbiAgICAgICAgdmFyIG5leHRGb2N1c1JldmFsaWRhdGVkQXQgPSAwO1xuICAgICAgICB2YXIgb25SZXZhbGlkYXRlID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlID09IEZPQ1VTX0VWRU5UKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgaWYgKGdldENvbmZpZygpLnJldmFsaWRhdGVPbkZvY3VzICYmXG4gICAgICAgICAgICAgICAgICAgIG5vdyA+IG5leHRGb2N1c1JldmFsaWRhdGVkQXQgJiZcbiAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmUoKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0Rm9jdXNSZXZhbGlkYXRlZEF0ID0gbm93ICsgZ2V0Q29uZmlnKCkuZm9jdXNUaHJvdHRsZUludGVydmFsO1xuICAgICAgICAgICAgICAgICAgICBzb2Z0UmV2YWxpZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT0gUkVDT05ORUNUX0VWRU5UKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdldENvbmZpZygpLnJldmFsaWRhdGVPblJlY29ubmVjdCAmJiBpc0FjdGl2ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvZnRSZXZhbGlkYXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PSBNVVRBVEVfRVZFTlQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV2YWxpZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgdW5zdWJVcGRhdGUgPSBzdWJzY3JpYmVDYWxsYmFjayhrZXksIFNUQVRFX1VQREFURVJTLCBvblN0YXRlVXBkYXRlKTtcbiAgICAgICAgdmFyIHVuc3ViRXZlbnRzID0gc3Vic2NyaWJlQ2FsbGJhY2soa2V5LCBFVkVOVF9SRVZBTElEQVRPUlMsIG9uUmV2YWxpZGF0ZSk7XG4gICAgICAgIC8vIE1hcmsgdGhlIGNvbXBvbmVudCBhcyBtb3VudGVkIGFuZCB1cGRhdGUgY29ycmVzcG9uZGluZyByZWZzLlxuICAgICAgICB1bm1vdW50ZWRSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICBrZXlSZWYuY3VycmVudCA9IGtleTtcbiAgICAgICAgaW5pdGlhbE1vdW50ZWRSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICAgIC8vIFdoZW4gYGtleWAgdXBkYXRlcywgcmVzZXQgdGhlIHN0YXRlIHRvIHRoZSBpbml0aWFsIHZhbHVlXG4gICAgICAgIC8vIGFuZCB0cmlnZ2VyIGEgcmVyZW5kZXIgaWYgbmVjZXNzYXJ5LlxuICAgICAgICBpZiAoa2V5Q2hhbmdlZCkge1xuICAgICAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgIGlzVmFsaWRhdGluZzogaXNWYWxpZGF0aW5nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUcmlnZ2VyIGEgcmV2YWxpZGF0aW9uLlxuICAgICAgICBpZiAoc2hvdWxkUmV2YWxpZGF0ZU9uTW91bnQoKSkge1xuICAgICAgICAgICAgaWYgKGlzVW5kZWZpbmVkKGRhdGEpIHx8IElTX1NFUlZFUikge1xuICAgICAgICAgICAgICAgIC8vIFJldmFsaWRhdGUgaW1tZWRpYXRlbHkuXG4gICAgICAgICAgICAgICAgc29mdFJldmFsaWRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIERlbGF5IHRoZSByZXZhbGlkYXRlIGlmIHdlIGhhdmUgZGF0YSB0byByZXR1cm4gc28gd2Ugd29uJ3QgYmxvY2tcbiAgICAgICAgICAgICAgICAvLyByZW5kZXJpbmcuXG4gICAgICAgICAgICAgICAgckFGKHNvZnRSZXZhbGlkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gTWFyayBpdCBhcyB1bm1vdW50ZWQuXG4gICAgICAgICAgICB1bm1vdW50ZWRSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICB1bnN1YlVwZGF0ZSgpO1xuICAgICAgICAgICAgdW5zdWJFdmVudHMoKTtcbiAgICAgICAgfTtcbiAgICB9LCBba2V5LCByZXZhbGlkYXRlXSk7XG4gICAgLy8gUG9sbGluZ1xuICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdGltZXI7XG4gICAgICAgIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgICAvLyBVc2UgdGhlIHBhc3NlZCBpbnRlcnZhbFxuICAgICAgICAgICAgLy8gLi4ub3IgaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSB1cGRhdGVkIGRhdGEgdG8gZ2V0IHRoZSBpbnRlcnZhbFxuICAgICAgICAgICAgdmFyIGludGVydmFsID0gaXNGdW5jdGlvbihyZWZyZXNoSW50ZXJ2YWwpXG4gICAgICAgICAgICAgICAgPyByZWZyZXNoSW50ZXJ2YWwoZGF0YSlcbiAgICAgICAgICAgICAgICA6IHJlZnJlc2hJbnRlcnZhbDtcbiAgICAgICAgICAgIC8vIFdlIG9ubHkgc3RhcnQgbmV4dCBpbnRlcnZhbCBpZiBgcmVmcmVzaEludGVydmFsYCBpcyBub3QgMCwgYW5kOlxuICAgICAgICAgICAgLy8gLSBgZm9yY2VgIGlzIHRydWUsIHdoaWNoIGlzIHRoZSBzdGFydCBvZiBwb2xsaW5nXG4gICAgICAgICAgICAvLyAtIG9yIGB0aW1lcmAgaXMgbm90IDAsIHdoaWNoIG1lYW5zIHRoZSBlZmZlY3Qgd2Fzbid0IGNhbmNlbGVkXG4gICAgICAgICAgICBpZiAoaW50ZXJ2YWwgJiYgdGltZXIgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGV4ZWN1dGUsIGludGVydmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBleGVjdXRlKCkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgaXQncyBPSyB0byBleGVjdXRlOlxuICAgICAgICAgICAgLy8gT25seSByZXZhbGlkYXRlIHdoZW4gdGhlIHBhZ2UgaXMgdmlzaWJsZSwgb25saW5lIGFuZCBub3QgZXJyb3JlZC5cbiAgICAgICAgICAgIGlmICghc3RhdGVSZWYuY3VycmVudC5lcnJvciAmJlxuICAgICAgICAgICAgICAgIChyZWZyZXNoV2hlbkhpZGRlbiB8fCBnZXRDb25maWcoKS5pc1Zpc2libGUoKSkgJiZcbiAgICAgICAgICAgICAgICAocmVmcmVzaFdoZW5PZmZsaW5lIHx8IGdldENvbmZpZygpLmlzT25saW5lKCkpKSB7XG4gICAgICAgICAgICAgICAgcmV2YWxpZGF0ZShXSVRIX0RFRFVQRSkudGhlbihuZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFNjaGVkdWxlIG5leHQgaW50ZXJ2YWwgdG8gY2hlY2sgYWdhaW4uXG4gICAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG5leHQoKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aW1lcikge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgICAgICAgICAgdGltZXIgPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LCBbcmVmcmVzaEludGVydmFsLCByZWZyZXNoV2hlbkhpZGRlbiwgcmVmcmVzaFdoZW5PZmZsaW5lLCByZXZhbGlkYXRlXSk7XG4gICAgLy8gRGlzcGxheSBkZWJ1ZyBpbmZvIGluIFJlYWN0IERldlRvb2xzLlxuICAgIHVzZURlYnVnVmFsdWUoZGF0YSk7XG4gICAgLy8gSW4gU3VzcGVuc2UgbW9kZSwgd2UgY2FuJ3QgcmV0dXJuIHRoZSBlbXB0eSBgZGF0YWAgc3RhdGUuXG4gICAgLy8gSWYgdGhlcmUgaXMgYGVycm9yYCwgdGhlIGBlcnJvcmAgbmVlZHMgdG8gYmUgdGhyb3duIHRvIHRoZSBlcnJvciBib3VuZGFyeS5cbiAgICAvLyBJZiB0aGVyZSBpcyBubyBgZXJyb3JgLCB0aGUgYHJldmFsaWRhdGlvbmAgcHJvbWlzZSBuZWVkcyB0byBiZSB0aHJvd24gdG9cbiAgICAvLyB0aGUgc3VzcGVuc2UgYm91bmRhcnkuXG4gICAgaWYgKHN1c3BlbnNlICYmIGlzVW5kZWZpbmVkKGRhdGEpICYmIGtleSkge1xuICAgICAgICAvLyBBbHdheXMgdXBkYXRlIGZldGNoZXIgYW5kIGNvbmZpZyByZWZzIGV2ZW4gd2l0aCB0aGUgU3VzcGVuc2UgbW9kZS5cbiAgICAgICAgZmV0Y2hlclJlZi5jdXJyZW50ID0gZmV0Y2hlcjtcbiAgICAgICAgY29uZmlnUmVmLmN1cnJlbnQgPSBjb25maWc7XG4gICAgICAgIHRocm93IGlzVW5kZWZpbmVkKGVycm9yKSA/IHJldmFsaWRhdGUoV0lUSF9ERURVUEUpIDogZXJyb3I7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIG11dGF0ZTogYm91bmRNdXRhdGUsXG4gICAgICAgIGdldCBkYXRhKCkge1xuICAgICAgICAgICAgc3RhdGVEZXBlbmRlbmNpZXMuZGF0YSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGVycm9yKCkge1xuICAgICAgICAgICAgc3RhdGVEZXBlbmRlbmNpZXMuZXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgaXNWYWxpZGF0aW5nKCkge1xuICAgICAgICAgICAgc3RhdGVEZXBlbmRlbmNpZXMuaXNWYWxpZGF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBpc1ZhbGlkYXRpbmc7XG4gICAgICAgIH1cbiAgICB9O1xufTtcbnZhciBTV1JDb25maWcgPSBPQkpFQ1QuZGVmaW5lUHJvcGVydHkoU1dSQ29uZmlnJDEsICdkZWZhdWx0Jywge1xuICAgIHZhbHVlOiBkZWZhdWx0Q29uZmlnXG59KTtcbnZhciB1bnN0YWJsZV9zZXJpYWxpemUgPSBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBzZXJpYWxpemUoa2V5KVswXTsgfTtcbnZhciB1c2VTV1IgPSB3aXRoQXJncyh1c2VTV1JIYW5kbGVyKTtcblxuLy8gdXNlU1dSXG5cbmV4cG9ydCB7IFNXUkNvbmZpZywgdXNlU1dSIGFzIGRlZmF1bHQsIG11dGF0ZSwgdW5zdGFibGVfc2VyaWFsaXplLCB1c2VTV1JDb25maWcgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=