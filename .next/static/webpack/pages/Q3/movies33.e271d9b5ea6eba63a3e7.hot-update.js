self["webpackHotUpdate_N_E"]("pages/Q3/movies33",{

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
 * [API](https://react-hook-form.com/api/useformcontext) ??? [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
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
 * [API](https://react-hook-form.com/api/useformcontext) ??? [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
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
 * [API](https://react-hook-form.com/api/useformstate) ??? [Demo](https://codesandbox.io/s/useformstate-75xly)
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
 * [API](https://react-hook-form.com/api/usewatch) ??? [Demo](https://codesandbox.io/s/react-hook-form-v7-ts-usewatch-h9i5e)
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
 * [API](https://react-hook-form.com/api/usecontroller) ??? [Demo](https://codesandbox.io/s/usecontroller-0o8px)
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
 * [API](https://react-hook-form.com/api/usecontroller/controller) ??? [Demo](https://codesandbox.io/s/react-hook-form-v6-controller-ts-jwyzw) ??? [Video](https://www.youtube.com/watch?v=N2UNk_UCVyA)
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
 * [API](https://react-hook-form.com/api/usefieldarray) ??? [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn)
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
 * [API](https://react-hook-form.com/api/useform) ??? [Demo](https://codesandbox.io/s/react-hook-form-get-started-ts-5ksmm) ??? [Video](https://www.youtube.com/watch?v=RkXv4AXXC_4)
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUTMvbW92aWVzMzMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1ob29rLWZvcm0vZGlzdC9pbmRleC5lc20ubWpzIl0sIm5hbWVzIjpbIk1vdmllczMzIiwidXNlU3RhdGUiLCJ1cmwiLCJ0aXRsZVNlYXJjaFN0cmluZyIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VTV1IiLCJ1IiwiU2VhcmNoIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSIsImVycm9yIiwib25DbGlja0hhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiVGhlTW92aWVzIiwic2hvdyIsIlJlc3BvbnNlIiwibWFwIiwibSIsImltZGJJRCIsIlRpdGxlIiwiWWVhciIsIlRoZUZvcm0iLCJmaWx0cm8iLCJhY2FvIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwid2F0Y2giLCJlcnJvcnMiLCJmb3JtU3RhdGUiLCJyZXF1aXJlZCIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsInllYXJTZWFyY2hOdW1iZXIiLCJUaGVMaW5rIiwiaGFuZGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULEdBQW1CO0FBQUE7O0FBQUEsa0JBRUpDLCtDQUFRLENBQUM7QUFBQ0MsT0FBRyxFQUFDLEVBQUw7QUFBU0MscUJBQWlCLEVBQUM7QUFBM0IsR0FBRCxDQUZKO0FBQUEsTUFFdkJDLEtBRnVCO0FBQUEsTUFFaEJDLFFBRmdCOztBQUFBLGdCQUlSQyw0Q0FBTSxDQUFDRixLQUFLLENBQUNGLEdBQVA7QUFBQSx5UEFBWSxpQkFBT0ssQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFFaEMsQ0FBQ0gsS0FBSyxDQUFDRixHQUFQ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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRixxQ0FBcUMsVUFBVSxLQUFLLEtBQUssa0NBQWtDO0FBQzVLLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0Es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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNENBQTRDLFNBQVMsRUFBRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVCQUF1QjtBQUM5QyxxQ0FBcUMsdUJBQXVCO0FBQzVELGlCQUFpQixnQ0FBZ0MsaUJBQWlCLEVBQUU7QUFDcEUsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQix5QkFBeUIseUNBQVk7QUFDckMseUNBQXlDLDJDQUFjO0FBQ3ZEO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELDhCQUE4QixZQUFZO0FBQ3ZHO0FBQ0E7QUFDQSxxQkFBcUIsOENBQWlCO0FBQ3RDO0FBQ0EsK0RBQStEO0FBQy9ELDRDQUE0QztBQUM1QztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSw0Q0FBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRTJJO0FBQzNJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1EzL21vdmllczMzLmUyNzFkOWI1ZWE2ZWJhNjNhM2U3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXMzMygpe1xyXG5cclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe3VybDonJywgdGl0bGVTZWFyY2hTdHJpbmc6Jyd9KVxyXG5cclxuICAgIGNvbnN0IHtkYXRhLCBlcnJvcn0gPSB1c2VTV1Ioc3RhdGUudXJsLCBhc3luYyAodSkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoIXN0YXRlLnVybCB8fCAhc3RhdGUudGl0bGVTZWFyY2hTdHJpbmcpIHJldHVybiB7U2VhcmNoOicnfVxyXG5cclxuICAgICAgICBpZiAoc3RhdGUudXJsID09PSAnJyB8fCBzdGF0ZS50aXRsZVNlYXJjaFN0cmluZyA9PT0nJykgcmV0dXJuIHtTZWFyY2g6Jyd9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3N0YXRlLnVybH0vP2FwaUtleT01YzY1ODI5MSZzPSR7c3RhdGUudGl0bGVTZWFyY2hTdHJpbmd9YClcclxuXHJcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBqc29uO1xyXG5cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3Qgb25DbGlja0hhbmRsZXIgPSBlID0+IHtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgIGxldCBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlU2VhcmNoU3RyaW5nJykudmFsdWVcclxuXHJcbiAgICAgICAgaWYgKHN0YXRlLnVybCA9PT0gJycpIHtcclxuXHJcbiAgICAgICAgICAgIHNldFN0YXRlKHt1cmw6J2h0dHA6Ly93d3cub21kYmFwaS5jb20nLHRpdGxlU2VhcmNoU3RyaW5nOnN9KVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Ugc2V0U3RhdGUoe3VybDonJyx0aXRsZVNlYXJjaFN0cmluZzogc3RhdGUudGl0bGVTZWFyY2hTdHJpbmd9KVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICA8VGhlRm9ybS8+XHJcblxyXG4gICAgICAgICAgICA8VGhlTGluayB1cmw9e3N0YXRlLnVybH0gaGFuZGxlcj17b25DbGlja0hhbmRsZXJ9IC8+XHJcblxyXG4gICAgICAgICAgICA8VGhlTW92aWVzIGRhdGE9e2RhdGEgPyBkYXRhOiB7U2VhcmNoOicnfSB9IHNob3c9e3N0YXRlLnVybCAhPT0gJyd9IC8+XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRoZU1vdmllcyh7ZGF0YSxzaG93fSl7XHJcblxyXG4gICAgaWYgKCFzaG93KSByZXR1cm4gKDxkaXY+PC9kaXY+KVxyXG5cclxuICAgIGlmICghZGF0YSkgcmV0dXJuICg8ZGl2PjwvZGl2PilcclxuXHJcbiAgICBpZiAoZGF0YS5lcnJvcikgcmV0dXJuICg8ZGl2PmZhbGhhIG5hIHBlc3F1aXNhPC9kaXY+KVxyXG5cclxuICAgIGlmIChkYXRhLlNlYXJjaCA9PT0gJycgKSByZXR1cm4gKDxkaXY+Y2FycmVnYW5kby4uLjwvZGl2PilcclxuXHJcbiAgICBpZihkYXRhLlJlc3BvbnNlID09ICdGYWxzZScpIHJldHVybiAoPGRpdj5QZXNxdWlzYSBOw6NvIGVuY29udHJhZGEsIHRlbnRlIG5vdmFtZW50ZS48L2Rpdj4pXHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgIHsgZGF0YS5TZWFyY2gubWFwKCAobSkgPT4gPGRpdiBrZXk9e20uaW1kYklEfT57bS5UaXRsZX0gLS0tIHttLlllYXJ9PC9kaXY+ICApIH0gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG5cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gVGhlRm9ybSh7ZmlsdHJvLCB1cmwsIGFjYW99KXtcclxuXHJcbiAgICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIHdhdGNoLCBmb3JtU3RhdGU6IHsgZXJyb3JzIH0gfSA9IHVzZUZvcm0oKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2Zvcm0tc2VhcmNoLW1vdmllJyBvblN1Ym1pdD17aGFuZGxlU3VibWl0KGFjYW8pfT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGVTZWFyY2hTdHJpbmdcIj57ZmlsdHJvfTwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidGl0bGVTZWFyY2hTdHJpbmdcIiBcclxuICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJ0aXRsZVNlYXJjaFN0cmluZ1wiLCB7IHJlcXVpcmVkOiB0cnVlLCBtaW5MZW5ndGg6IDN9KX0gXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVMOtdHVsbydcclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAge2Vycm9ycy50aXRsZVNlYXJjaFN0cmluZyAmJiA8c3Bhbj5JbnNpcmEgbm8gbcOtbmltbyB0csOqcyBjYXJhY3RlcmVzICAgPC9zcGFuPn1cclxuXHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ5ZWFyU2VhcmNoTnVtYmVyXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwieWVhclNlYXJjaE51bWJlclwiLCB7IHJlcXVpcmVkOiB0cnVlLCBtaW5MZW5ndGg6IDQsIG1heExlbmd0aDogNCB9KX0gXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nQW5vJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLnllYXJTZWFyY2hOdW1iZXIgJiYgPHNwYW4+IEluc2lyYSB1bSBhbm8gdsOhbGlkbyA8L3NwYW4+IH1cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz57dXJsID09PSAnJyA/ICdNb3N0cmFyJyA6ICdPY3VsdGFyJ308L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFRoZUxpbmsoe3VybCwgaGFuZGxlcn0pe1xyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL21vdmllczMuanNcIiBvbkNsaWNrPXtoYW5kbGVyfT4ge3VybCA9PT0gJycgPyAnTW9zdHJhcicgOiAnT2N1bHRhcid9IDwvYT5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG5cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnZhciBpc0NoZWNrQm94SW5wdXQgPSAoZWxlbWVudCkgPT4gZWxlbWVudC50eXBlID09PSAnY2hlY2tib3gnO1xuXG52YXIgaXNEYXRlT2JqZWN0ID0gKHZhbHVlKSA9PiB2YWx1ZSBpbnN0YW5jZW9mIERhdGU7XG5cbnZhciBpc051bGxPclVuZGVmaW5lZCA9ICh2YWx1ZSkgPT4gdmFsdWUgPT0gbnVsbDtcblxuY29uc3QgaXNPYmplY3RUeXBlID0gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnO1xyXG52YXIgaXNPYmplY3QgPSAodmFsdWUpID0+ICFpc051bGxPclVuZGVmaW5lZCh2YWx1ZSkgJiZcclxuICAgICFBcnJheS5pc0FycmF5KHZhbHVlKSAmJlxyXG4gICAgaXNPYmplY3RUeXBlKHZhbHVlKSAmJlxyXG4gICAgIWlzRGF0ZU9iamVjdCh2YWx1ZSk7XG5cbnZhciBnZXRFdmVudFZhbHVlID0gKGV2ZW50KSA9PiBpc09iamVjdChldmVudCkgJiYgZXZlbnQudGFyZ2V0XHJcbiAgICA/IGlzQ2hlY2tCb3hJbnB1dChldmVudC50YXJnZXQpXHJcbiAgICAgICAgPyBldmVudC50YXJnZXQuY2hlY2tlZFxyXG4gICAgICAgIDogZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICA6IGV2ZW50O1xuXG52YXIgZ2V0Tm9kZVBhcmVudE5hbWUgPSAobmFtZSkgPT4gbmFtZS5zdWJzdHJpbmcoMCwgbmFtZS5zZWFyY2goLy5cXGQvKSkgfHwgbmFtZTtcblxudmFyIGlzTmFtZUluRmllbGRBcnJheSA9IChuYW1lcywgbmFtZSkgPT4gWy4uLm5hbWVzXS5zb21lKChjdXJyZW50KSA9PiBnZXROb2RlUGFyZW50TmFtZShuYW1lKSA9PT0gY3VycmVudCk7XG5cbnZhciBjb21wYWN0ID0gKHZhbHVlKSA9PiB2YWx1ZS5maWx0ZXIoQm9vbGVhbik7XG5cbnZhciBpc1VuZGVmaW5lZCA9ICh2YWwpID0+IHZhbCA9PT0gdW5kZWZpbmVkO1xuXG52YXIgZ2V0ID0gKG9iaiwgcGF0aCwgZGVmYXVsdFZhbHVlKSA9PiB7XHJcbiAgICBpZiAoIXBhdGggfHwgIWlzT2JqZWN0KG9iaikpIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0ID0gY29tcGFjdChwYXRoLnNwbGl0KC9bLFtcXF0uXSs/LykpLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IGlzTnVsbE9yVW5kZWZpbmVkKHJlc3VsdCkgPyByZXN1bHQgOiByZXN1bHRba2V5XSwgb2JqKTtcclxuICAgIHJldHVybiBpc1VuZGVmaW5lZChyZXN1bHQpIHx8IHJlc3VsdCA9PT0gb2JqXHJcbiAgICAgICAgPyBpc1VuZGVmaW5lZChvYmpbcGF0aF0pXHJcbiAgICAgICAgICAgID8gZGVmYXVsdFZhbHVlXHJcbiAgICAgICAgICAgIDogb2JqW3BhdGhdXHJcbiAgICAgICAgOiByZXN1bHQ7XHJcbn07XG5cbmNvbnN0IEVWRU5UUyA9IHtcclxuICAgIEJMVVI6ICdibHVyJyxcclxuICAgIEZPQ1VTX09VVDogJ2ZvY3Vzb3V0JyxcclxuICAgIENIQU5HRTogJ2NoYW5nZScsXHJcbn07XHJcbmNvbnN0IFZBTElEQVRJT05fTU9ERSA9IHtcclxuICAgIG9uQmx1cjogJ29uQmx1cicsXHJcbiAgICBvbkNoYW5nZTogJ29uQ2hhbmdlJyxcclxuICAgIG9uU3VibWl0OiAnb25TdWJtaXQnLFxyXG4gICAgb25Ub3VjaGVkOiAnb25Ub3VjaGVkJyxcclxuICAgIGFsbDogJ2FsbCcsXHJcbn07XHJcbmNvbnN0IElOUFVUX1ZBTElEQVRJT05fUlVMRVMgPSB7XHJcbiAgICBtYXg6ICdtYXgnLFxyXG4gICAgbWluOiAnbWluJyxcclxuICAgIG1heExlbmd0aDogJ21heExlbmd0aCcsXHJcbiAgICBtaW5MZW5ndGg6ICdtaW5MZW5ndGgnLFxyXG4gICAgcGF0dGVybjogJ3BhdHRlcm4nLFxyXG4gICAgcmVxdWlyZWQ6ICdyZXF1aXJlZCcsXHJcbiAgICB2YWxpZGF0ZTogJ3ZhbGlkYXRlJyxcclxufTtcblxudmFyIG9taXQgPSAoc291cmNlLCBrZXkpID0+IHtcclxuICAgIGNvbnN0IGNvcHkgPSBPYmplY3QuYXNzaWduKHt9LCBzb3VyY2UpO1xyXG4gICAgZGVsZXRlIGNvcHlba2V5XTtcclxuICAgIHJldHVybiBjb3B5O1xyXG59O1xuXG5jb25zdCBIb29rRm9ybUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xyXG4vKipcclxuICogVGhpcyBjdXN0b20gaG9vayBhbGxvd3MgeW91IHRvIGFjY2VzcyB0aGUgZm9ybSBjb250ZXh0LiB1c2VGb3JtQ29udGV4dCBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIGluIGRlZXBseSBuZXN0ZWQgc3RydWN0dXJlcywgd2hlcmUgaXQgd291bGQgYmVjb21lIGluY29udmVuaWVudCB0byBwYXNzIHRoZSBjb250ZXh0IGFzIGEgcHJvcC4gVG8gYmUgdXNlZCB3aXRoIHtAbGluayBGb3JtUHJvdmlkZXJ9LlxyXG4gKlxyXG4gKiBAcmVtYXJrc1xyXG4gKiBbQVBJXShodHRwczovL3JlYWN0LWhvb2stZm9ybS5jb20vYXBpL3VzZWZvcm1jb250ZXh0KSDigKIgW0RlbW9dKGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9yZWFjdC1ob29rLWZvcm0tdjctZm9ybS1jb250ZXh0LXl0dWRpKVxyXG4gKlxyXG4gKiBAcmV0dXJucyByZXR1cm4gYWxsIHVzZUZvcm0gbWV0aG9kc1xyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBgYGB0c3hcclxuICogZnVuY3Rpb24gQXBwKCkge1xyXG4gKiAgIGNvbnN0IG1ldGhvZHMgPSB1c2VGb3JtKCk7XHJcbiAqICAgY29uc3Qgb25TdWJtaXQgPSBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gKlxyXG4gKiAgIHJldHVybiAoXHJcbiAqICAgICA8Rm9ybVByb3ZpZGVyIHsuLi5tZXRob2RzfSA+XHJcbiAqICAgICAgIDxmb3JtIG9uU3VibWl0PXttZXRob2RzLmhhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG4gKiAgICAgICAgIDxOZXN0ZWRJbnB1dCAvPlxyXG4gKiAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgLz5cclxuICogICAgICAgPC9mb3JtPlxyXG4gKiAgICAgPC9Gb3JtUHJvdmlkZXI+XHJcbiAqICAgKTtcclxuICogfVxyXG4gKlxyXG4gKiAgZnVuY3Rpb24gTmVzdGVkSW5wdXQoKSB7XHJcbiAqICAgY29uc3QgeyByZWdpc3RlciB9ID0gdXNlRm9ybUNvbnRleHQoKTsgLy8gcmV0cmlldmUgYWxsIGhvb2sgbWV0aG9kc1xyXG4gKiAgIHJldHVybiA8aW5wdXQgey4uLnJlZ2lzdGVyKFwidGVzdFwiKX0gLz47XHJcbiAqIH1cclxuICogYGBgXHJcbiAqL1xyXG5jb25zdCB1c2VGb3JtQ29udGV4dCA9ICgpID0+IFJlYWN0LnVzZUNvbnRleHQoSG9va0Zvcm1Db250ZXh0KTtcclxuLyoqXHJcbiAqIEEgcHJvdmlkZXIgY29tcG9uZW50IHRoYXQgcHJvcGFnYXRlcyB0aGUgYHVzZUZvcm1gIG1ldGhvZHMgdG8gYWxsIGNoaWxkcmVuIGNvbXBvbmVudHMgdmlhIFtSZWFjdCBDb250ZXh0XShodHRwczovL3JlYWN0anMub3JnL2RvY3MvY29udGV4dC5odG1sKSBBUEkuIFRvIGJlIHVzZWQgd2l0aCB7QGxpbmsgdXNlRm9ybUNvbnRleHR9LlxyXG4gKlxyXG4gKiBAcmVtYXJrc1xyXG4gKiBbQVBJXShodHRwczovL3JlYWN0LWhvb2stZm9ybS5jb20vYXBpL3VzZWZvcm1jb250ZXh0KSDigKIgW0RlbW9dKGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9yZWFjdC1ob29rLWZvcm0tdjctZm9ybS1jb250ZXh0LXl0dWRpKVxyXG4gKlxyXG4gKiBAcGFyYW0gcHJvcHMgLSBhbGwgdXNlRnJvbSBtZXRob2RzXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIGBgYHRzeFxyXG4gKiBmdW5jdGlvbiBBcHAoKSB7XHJcbiAqICAgY29uc3QgbWV0aG9kcyA9IHVzZUZvcm0oKTtcclxuICogICBjb25zdCBvblN1Ym1pdCA9IGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSk7XHJcbiAqXHJcbiAqICAgcmV0dXJuIChcclxuICogICAgIDxGb3JtUHJvdmlkZXIgey4uLm1ldGhvZHN9ID5cclxuICogICAgICAgPGZvcm0gb25TdWJtaXQ9e21ldGhvZHMuaGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcbiAqICAgICAgICAgPE5lc3RlZElucHV0IC8+XHJcbiAqICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiAvPlxyXG4gKiAgICAgICA8L2Zvcm0+XHJcbiAqICAgICA8L0Zvcm1Qcm92aWRlcj5cclxuICogICApO1xyXG4gKiB9XHJcbiAqXHJcbiAqICBmdW5jdGlvbiBOZXN0ZWRJbnB1dCgpIHtcclxuICogICBjb25zdCB7IHJlZ2lzdGVyIH0gPSB1c2VGb3JtQ29udGV4dCgpOyAvLyByZXRyaWV2ZSBhbGwgaG9vayBtZXRob2RzXHJcbiAqICAgcmV0dXJuIDxpbnB1dCB7Li4ucmVnaXN0ZXIoXCJ0ZXN0XCIpfSAvPjtcclxuICogfVxyXG4gKiBgYGBcclxuICovXHJcbmNvbnN0IEZvcm1Qcm92aWRlciA9IChwcm9wcykgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoSG9va0Zvcm1Db250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBvbWl0KHByb3BzLCAnY2hpbGRyZW4nKSB9LCBwcm9wcy5jaGlsZHJlbikpO1xuXG52YXIgZ2V0UHJveHlGb3JtU3RhdGUgPSAoZm9ybVN0YXRlLCBfcHJveHlGb3JtU3RhdGUsIGxvY2FsUHJveHlGb3JtU3RhdGUsIGlzUm9vdCA9IHRydWUpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZm9ybVN0YXRlKSB7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlc3VsdCwga2V5LCB7XHJcbiAgICAgICAgICAgIGdldDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgX2tleSA9IGtleTtcclxuICAgICAgICAgICAgICAgIGlmIChfcHJveHlGb3JtU3RhdGVbX2tleV0gIT09IFZBTElEQVRJT05fTU9ERS5hbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBfcHJveHlGb3JtU3RhdGVbX2tleV0gPSAhaXNSb290IHx8IFZBTElEQVRJT05fTU9ERS5hbGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsb2NhbFByb3h5Rm9ybVN0YXRlICYmIChsb2NhbFByb3h5Rm9ybVN0YXRlW19rZXldID0gdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ybVN0YXRlW19rZXldO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcblxudmFyIGlzRW1wdHlPYmplY3QgPSAodmFsdWUpID0+IGlzT2JqZWN0KHZhbHVlKSAmJiAhT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aDtcblxudmFyIHNob3VsZFJlbmRlckZvcm1TdGF0ZSA9IChmb3JtU3RhdGVEYXRhLCBfcHJveHlGb3JtU3RhdGUsIGlzUm9vdCkgPT4ge1xyXG4gICAgY29uc3QgZm9ybVN0YXRlID0gb21pdChmb3JtU3RhdGVEYXRhLCAnbmFtZScpO1xyXG4gICAgcmV0dXJuIChpc0VtcHR5T2JqZWN0KGZvcm1TdGF0ZSkgfHxcclxuICAgICAgICBPYmplY3Qua2V5cyhmb3JtU3RhdGUpLmxlbmd0aCA+PSBPYmplY3Qua2V5cyhfcHJveHlGb3JtU3RhdGUpLmxlbmd0aCB8fFxyXG4gICAgICAgIE9iamVjdC5rZXlzKGZvcm1TdGF0ZSkuZmluZCgoa2V5KSA9PiBfcHJveHlGb3JtU3RhdGVba2V5XSA9PT1cclxuICAgICAgICAgICAgKCFpc1Jvb3QgfHwgVkFMSURBVElPTl9NT0RFLmFsbCkpKTtcclxufTtcblxudmFyIGNvbnZlcnRUb0FycmF5UGF5bG9hZCA9ICh2YWx1ZSkgPT4gKEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdKTtcblxudmFyIHNob3VsZFN1YnNjcmliZUJ5TmFtZSA9IChuYW1lLCBzaWduYWxOYW1lLCBleGFjdCkgPT4gZXhhY3QgJiYgc2lnbmFsTmFtZVxyXG4gICAgPyBuYW1lID09PSBzaWduYWxOYW1lXHJcbiAgICA6ICFuYW1lIHx8XHJcbiAgICAgICAgIXNpZ25hbE5hbWUgfHxcclxuICAgICAgICBuYW1lID09PSBzaWduYWxOYW1lIHx8XHJcbiAgICAgICAgY29udmVydFRvQXJyYXlQYXlsb2FkKG5hbWUpLnNvbWUoKGN1cnJlbnROYW1lKSA9PiBjdXJyZW50TmFtZSAmJlxyXG4gICAgICAgICAgICAoY3VycmVudE5hbWUuc3RhcnRzV2l0aChzaWduYWxOYW1lKSB8fFxyXG4gICAgICAgICAgICAgICAgc2lnbmFsTmFtZS5zdGFydHNXaXRoKGN1cnJlbnROYW1lKSkpO1xuXG5mdW5jdGlvbiB1c2VTdWJzY3JpYmUocHJvcHMpIHtcclxuICAgIGNvbnN0IF9wcm9wcyA9IFJlYWN0LnVzZVJlZihwcm9wcyk7XHJcbiAgICBfcHJvcHMuY3VycmVudCA9IHByb3BzO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB0ZWFyRG93biA9IChzdWJzY3JpcHRpb24pID0+IHtcclxuICAgICAgICAgICAgaWYgKHN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9ICFwcm9wcy5kaXNhYmxlZCAmJlxyXG4gICAgICAgICAgICBfcHJvcHMuY3VycmVudC5zdWJqZWN0LnN1YnNjcmliZSh7XHJcbiAgICAgICAgICAgICAgICBuZXh0OiBfcHJvcHMuY3VycmVudC5jYWxsYmFjayxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHRlYXJEb3duKHN1YnNjcmlwdGlvbik7XHJcbiAgICB9LCBbcHJvcHMuZGlzYWJsZWRdKTtcclxufVxuXG4vKipcclxuICogVGhpcyBjdXN0b20gaG9vayBhbGxvd3MgeW91IHRvIHN1YnNjcmliZSB0byBlYWNoIGZvcm0gc3RhdGUsIGFuZCBpc29sYXRlIHRoZSByZS1yZW5kZXIgYXQgdGhlIGN1c3RvbSBob29rIGxldmVsLiBJdCBoYXMgaXRzIHNjb3BlIGluIHRlcm1zIG9mIGZvcm0gc3RhdGUgc3Vic2NyaXB0aW9uLCBzbyBpdCB3b3VsZCBub3QgYWZmZWN0IG90aGVyIHVzZUZvcm1TdGF0ZSBhbmQgdXNlRm9ybS4gVXNpbmcgdGhpcyBob29rIGNhbiByZWR1Y2UgdGhlIHJlLXJlbmRlciBpbXBhY3Qgb24gbGFyZ2UgYW5kIGNvbXBsZXggZm9ybSBhcHBsaWNhdGlvbi5cclxuICpcclxuICogQHJlbWFya3NcclxuICogW0FQSV0oaHR0cHM6Ly9yZWFjdC1ob29rLWZvcm0uY29tL2FwaS91c2Vmb3Jtc3RhdGUpIOKAoiBbRGVtb10oaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zL3VzZWZvcm1zdGF0ZS03NXhseSlcclxuICpcclxuICogQHBhcmFtIHByb3BzIC0gaW5jbHVkZSBvcHRpb25zIG9uIHNwZWNpZnkgZmllbGRzIHRvIHN1YnNjcmliZS4ge0BsaW5rIFVzZUZvcm1TdGF0ZVJldHVybn1cclxuICpcclxuICogQGV4YW1wbGVcclxuICogYGBgdHN4XHJcbiAqIGZ1bmN0aW9uIEFwcCgpIHtcclxuICogICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGNvbnRyb2wgfSA9IHVzZUZvcm0oe1xyXG4gKiAgICAgZGVmYXVsdFZhbHVlczoge1xyXG4gKiAgICAgZmlyc3ROYW1lOiBcImZpcnN0TmFtZVwiXHJcbiAqICAgfX0pO1xyXG4gKiAgIGNvbnN0IHsgZGlydHlGaWVsZHMgfSA9IHVzZUZvcm1TdGF0ZSh7XHJcbiAqICAgICBjb250cm9sXHJcbiAqICAgfSk7XHJcbiAqICAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YSkgPT4gY29uc29sZS5sb2coZGF0YSk7XHJcbiAqXHJcbiAqICAgcmV0dXJuIChcclxuICogICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuICogICAgICAgPGlucHV0IHsuLi5yZWdpc3RlcihcImZpcnN0TmFtZVwiKX0gcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCIgLz5cclxuICogICAgICAge2RpcnR5RmllbGRzLmZpcnN0TmFtZSAmJiA8cD5GaWVsZCBpcyBkaXJ0eS48L3A+fVxyXG4gKiAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIC8+XHJcbiAqICAgICA8L2Zvcm0+XHJcbiAqICAgKTtcclxuICogfVxyXG4gKiBgYGBcclxuICovXHJcbmZ1bmN0aW9uIHVzZUZvcm1TdGF0ZShwcm9wcykge1xyXG4gICAgY29uc3QgbWV0aG9kcyA9IHVzZUZvcm1Db250ZXh0KCk7XHJcbiAgICBjb25zdCB7IGNvbnRyb2wgPSBtZXRob2RzLmNvbnRyb2wsIGRpc2FibGVkLCBuYW1lLCBleGFjdCB9ID0gcHJvcHMgfHwge307XHJcbiAgICBjb25zdCBbZm9ybVN0YXRlLCB1cGRhdGVGb3JtU3RhdGVdID0gUmVhY3QudXNlU3RhdGUoY29udHJvbC5fZm9ybVN0YXRlKTtcclxuICAgIGNvbnN0IF9sb2NhbFByb3h5Rm9ybVN0YXRlID0gUmVhY3QudXNlUmVmKHtcclxuICAgICAgICBpc0RpcnR5OiBmYWxzZSxcclxuICAgICAgICBkaXJ0eUZpZWxkczogZmFsc2UsXHJcbiAgICAgICAgdG91Y2hlZEZpZWxkczogZmFsc2UsXHJcbiAgICAgICAgaXNWYWxpZGF0aW5nOiBmYWxzZSxcclxuICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgICAgICBlcnJvcnM6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBfbmFtZSA9IFJlYWN0LnVzZVJlZihuYW1lKTtcclxuICAgIGNvbnN0IF9tb3VudGVkID0gUmVhY3QudXNlUmVmKHRydWUpO1xyXG4gICAgX25hbWUuY3VycmVudCA9IG5hbWU7XHJcbiAgICBjb25zdCBjYWxsYmFjayA9IFJlYWN0LnVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4gX21vdW50ZWQuY3VycmVudCAmJlxyXG4gICAgICAgIHNob3VsZFN1YnNjcmliZUJ5TmFtZShfbmFtZS5jdXJyZW50LCB2YWx1ZS5uYW1lLCBleGFjdCkgJiZcclxuICAgICAgICBzaG91bGRSZW5kZXJGb3JtU3RhdGUodmFsdWUsIF9sb2NhbFByb3h5Rm9ybVN0YXRlLmN1cnJlbnQpICYmXHJcbiAgICAgICAgdXBkYXRlRm9ybVN0YXRlKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29udHJvbC5fZm9ybVN0YXRlKSwgdmFsdWUpKSwgW2NvbnRyb2wsIGV4YWN0XSk7XHJcbiAgICB1c2VTdWJzY3JpYmUoe1xyXG4gICAgICAgIGRpc2FibGVkLFxyXG4gICAgICAgIGNhbGxiYWNrLFxyXG4gICAgICAgIHN1YmplY3Q6IGNvbnRyb2wuX3N1YmplY3RzLnN0YXRlLFxyXG4gICAgfSk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gKCkgPT4ge1xyXG4gICAgICAgIF9tb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiBnZXRQcm94eUZvcm1TdGF0ZShmb3JtU3RhdGUsIGNvbnRyb2wuX3Byb3h5Rm9ybVN0YXRlLCBfbG9jYWxQcm94eUZvcm1TdGF0ZS5jdXJyZW50LCBmYWxzZSk7XHJcbn1cblxudmFyIGlzU3RyaW5nID0gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xuXG52YXIgZ2VuZXJhdGVXYXRjaE91dHB1dCA9IChuYW1lcywgX25hbWVzLCBmb3JtVmFsdWVzLCBpc0dsb2JhbCkgPT4ge1xyXG4gICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkobmFtZXMpO1xyXG4gICAgaWYgKGlzU3RyaW5nKG5hbWVzKSkge1xyXG4gICAgICAgIGlzR2xvYmFsICYmIF9uYW1lcy53YXRjaC5hZGQobmFtZXMpO1xyXG4gICAgICAgIHJldHVybiBnZXQoZm9ybVZhbHVlcywgbmFtZXMpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzQXJyYXkpIHtcclxuICAgICAgICByZXR1cm4gbmFtZXMubWFwKChmaWVsZE5hbWUpID0+IChpc0dsb2JhbCAmJiBfbmFtZXMud2F0Y2guYWRkKGZpZWxkTmFtZSksXHJcbiAgICAgICAgICAgIGdldChmb3JtVmFsdWVzLCBmaWVsZE5hbWUpKSk7XHJcbiAgICB9XHJcbiAgICBpc0dsb2JhbCAmJiAoX25hbWVzLndhdGNoQWxsID0gdHJ1ZSk7XHJcbiAgICByZXR1cm4gZm9ybVZhbHVlcztcclxufTtcblxudmFyIGlzRnVuY3Rpb24gPSAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcblxudmFyIG9iamVjdEhhc0Z1bmN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcclxuICAgICAgICBpZiAoaXNGdW5jdGlvbihkYXRhW2tleV0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcblxuLyoqXHJcbiAqIEN1c3RvbSBob29rIHRvIHN1YnNjcmliZSB0byBmaWVsZCBjaGFuZ2UgYW5kIGlzb2xhdGUgcmUtcmVuZGVyaW5nIGF0IHRoZSBjb21wb25lbnQgbGV2ZWwuXHJcbiAqXHJcbiAqIEByZW1hcmtzXHJcbiAqXHJcbiAqIFtBUEldKGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkvdXNld2F0Y2gpIOKAoiBbRGVtb10oaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zL3JlYWN0LWhvb2stZm9ybS12Ny10cy11c2V3YXRjaC1oOWk1ZSlcclxuICpcclxuICogQGV4YW1wbGVcclxuICogYGBgdHN4XHJcbiAqIGNvbnN0IHsgd2F0Y2ggfSA9IHVzZUZvcm0oKTtcclxuICogY29uc3QgdmFsdWVzID0gdXNlV2F0Y2goe1xyXG4gKiAgIG5hbWU6IFwiZmllbGROYW1lXCJcclxuICogICBjb250cm9sLFxyXG4gKiB9KVxyXG4gKiBgYGBcclxuICovXHJcbmZ1bmN0aW9uIHVzZVdhdGNoKHByb3BzKSB7XHJcbiAgICBjb25zdCBtZXRob2RzID0gdXNlRm9ybUNvbnRleHQoKTtcclxuICAgIGNvbnN0IHsgY29udHJvbCA9IG1ldGhvZHMuY29udHJvbCwgbmFtZSwgZGVmYXVsdFZhbHVlLCBkaXNhYmxlZCwgZXhhY3QsIH0gPSBwcm9wcyB8fCB7fTtcclxuICAgIGNvbnN0IF9uYW1lID0gUmVhY3QudXNlUmVmKG5hbWUpO1xyXG4gICAgX25hbWUuY3VycmVudCA9IG5hbWU7XHJcbiAgICBjb25zdCBjYWxsYmFjayA9IFJlYWN0LnVzZUNhbGxiYWNrKChmb3JtU3RhdGUpID0+IHtcclxuICAgICAgICBpZiAoc2hvdWxkU3Vic2NyaWJlQnlOYW1lKF9uYW1lLmN1cnJlbnQsIGZvcm1TdGF0ZS5uYW1lLCBleGFjdCkpIHtcclxuICAgICAgICAgICAgY29uc3QgZmllbGRWYWx1ZXMgPSBnZW5lcmF0ZVdhdGNoT3V0cHV0KF9uYW1lLmN1cnJlbnQsIGNvbnRyb2wuX25hbWVzLCBmb3JtU3RhdGUudmFsdWVzIHx8IGNvbnRyb2wuX2Zvcm1WYWx1ZXMpO1xyXG4gICAgICAgICAgICB1cGRhdGVWYWx1ZShpc1VuZGVmaW5lZChfbmFtZS5jdXJyZW50KSB8fFxyXG4gICAgICAgICAgICAgICAgKGlzT2JqZWN0KGZpZWxkVmFsdWVzKSAmJiAhb2JqZWN0SGFzRnVuY3Rpb24oZmllbGRWYWx1ZXMpKVxyXG4gICAgICAgICAgICAgICAgPyBPYmplY3QuYXNzaWduKHt9LCBmaWVsZFZhbHVlcykgOiBBcnJheS5pc0FycmF5KGZpZWxkVmFsdWVzKVxyXG4gICAgICAgICAgICAgICAgPyBbLi4uZmllbGRWYWx1ZXNdXHJcbiAgICAgICAgICAgICAgICA6IGlzVW5kZWZpbmVkKGZpZWxkVmFsdWVzKVxyXG4gICAgICAgICAgICAgICAgICAgID8gZGVmYXVsdFZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgOiBmaWVsZFZhbHVlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2NvbnRyb2wsIGV4YWN0LCBkZWZhdWx0VmFsdWVdKTtcclxuICAgIHVzZVN1YnNjcmliZSh7XHJcbiAgICAgICAgZGlzYWJsZWQsXHJcbiAgICAgICAgc3ViamVjdDogY29udHJvbC5fc3ViamVjdHMud2F0Y2gsXHJcbiAgICAgICAgY2FsbGJhY2ssXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFt2YWx1ZSwgdXBkYXRlVmFsdWVdID0gUmVhY3QudXNlU3RhdGUoaXNVbmRlZmluZWQoZGVmYXVsdFZhbHVlKVxyXG4gICAgICAgID8gY29udHJvbC5fZ2V0V2F0Y2gobmFtZSlcclxuICAgICAgICA6IGRlZmF1bHRWYWx1ZSk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnRyb2wuX3JlbW92ZVVubW91bnRlZCgpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cblxuLyoqXHJcbiAqIEN1c3RvbSBob29rIHRvIHdvcmsgd2l0aCBjb250cm9sbGVkIGNvbXBvbmVudCwgdGhpcyBmdW5jdGlvbiBwcm92aWRlIHlvdSB3aXRoIGJvdGggZm9ybSBhbmQgZmllbGQgbGV2ZWwgc3RhdGUuIFJlLXJlbmRlciBpcyBpc29sYXRlZCBhdCB0aGUgaG9vayBsZXZlbC5cclxuICpcclxuICogQHJlbWFya3NcclxuICogW0FQSV0oaHR0cHM6Ly9yZWFjdC1ob29rLWZvcm0uY29tL2FwaS91c2Vjb250cm9sbGVyKSDigKIgW0RlbW9dKGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy91c2Vjb250cm9sbGVyLTBvOHB4KVxyXG4gKlxyXG4gKiBAcGFyYW0gcHJvcHMgLSB0aGUgcGF0aCBuYW1lIHRvIHRoZSBmb3JtIGZpZWxkIHZhbHVlLCBhbmQgdmFsaWRhdGlvbiBydWxlcy5cclxuICpcclxuICogQHJldHVybnMgZmllbGQgcHJvcGVydGllcywgZmllbGQgYW5kIGZvcm0gc3RhdGUuIHtAbGluayBVc2VDb250cm9sbGVyUmV0dXJufVxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBgYGB0c3hcclxuICogZnVuY3Rpb24gSW5wdXQocHJvcHMpIHtcclxuICogICBjb25zdCB7IGZpZWxkLCBmaWVsZFN0YXRlLCBmb3JtU3RhdGUgfSA9IHVzZUNvbnRyb2xsZXIocHJvcHMpO1xyXG4gKiAgIHJldHVybiAoXHJcbiAqICAgICA8ZGl2PlxyXG4gKiAgICAgICA8aW5wdXQgey4uLmZpZWxkfSBwbGFjZWhvbGRlcj17cHJvcHMubmFtZX0gLz5cclxuICogICAgICAgPHA+e2ZpZWxkU3RhdGUuaXNUb3VjaGVkICYmIFwiVG91Y2hlZFwifTwvcD5cclxuICogICAgICAgPHA+e2Zvcm1TdGF0ZS5pc1N1Ym1pdHRlZCA/IFwic3VibWl0dGVkXCIgOiBcIlwifTwvcD5cclxuICogICAgIDwvZGl2PlxyXG4gKiAgICk7XHJcbiAqIH1cclxuICogYGBgXHJcbiAqL1xyXG5mdW5jdGlvbiB1c2VDb250cm9sbGVyKHByb3BzKSB7XHJcbiAgICBjb25zdCBtZXRob2RzID0gdXNlRm9ybUNvbnRleHQoKTtcclxuICAgIGNvbnN0IHsgbmFtZSwgY29udHJvbCA9IG1ldGhvZHMuY29udHJvbCwgc2hvdWxkVW5yZWdpc3RlciB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBpc0FycmF5RmllbGQgPSBpc05hbWVJbkZpZWxkQXJyYXkoY29udHJvbC5fbmFtZXMuYXJyYXksIG5hbWUpO1xyXG4gICAgY29uc3QgdmFsdWUgPSB1c2VXYXRjaCh7XHJcbiAgICAgICAgY29udHJvbCxcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogZ2V0KGNvbnRyb2wuX2Zvcm1WYWx1ZXMsIG5hbWUsIGdldChjb250cm9sLl9kZWZhdWx0VmFsdWVzLCBuYW1lLCBwcm9wcy5kZWZhdWx0VmFsdWUpKSxcclxuICAgICAgICBleGFjdDogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZm9ybVN0YXRlID0gdXNlRm9ybVN0YXRlKHtcclxuICAgICAgICBjb250cm9sLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IF9yZWdpc3RlclByb3BzID0gUmVhY3QudXNlUmVmKGNvbnRyb2wucmVnaXN0ZXIobmFtZSwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwcm9wcy5ydWxlcyksIHsgdmFsdWUgfSkpKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlTW91bnRlZCA9IChuYW1lLCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IGdldChjb250cm9sLl9maWVsZHMsIG5hbWUpO1xyXG4gICAgICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkLl9mLm1vdW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHVwZGF0ZU1vdW50ZWQobmFtZSwgdHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgX3Nob3VsZFVucmVnaXN0ZXJGaWVsZCA9IGNvbnRyb2wuX29wdGlvbnMuc2hvdWxkVW5yZWdpc3RlciB8fCBzaG91bGRVbnJlZ2lzdGVyO1xyXG4gICAgICAgICAgICAoaXNBcnJheUZpZWxkXHJcbiAgICAgICAgICAgICAgICA/IF9zaG91bGRVbnJlZ2lzdGVyRmllbGQgJiYgIWNvbnRyb2wuX3N0YXRlRmxhZ3MuYWN0aW9uXHJcbiAgICAgICAgICAgICAgICA6IF9zaG91bGRVbnJlZ2lzdGVyRmllbGQpXHJcbiAgICAgICAgICAgICAgICA/IGNvbnRyb2wudW5yZWdpc3RlcihuYW1lKVxyXG4gICAgICAgICAgICAgICAgOiB1cGRhdGVNb3VudGVkKG5hbWUsIGZhbHNlKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW25hbWUsIGNvbnRyb2wsIGlzQXJyYXlGaWVsZCwgc2hvdWxkVW5yZWdpc3Rlcl0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmaWVsZDoge1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgb25DaGFuZ2U6IFJlYWN0LnVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgX3JlZ2lzdGVyUHJvcHMuY3VycmVudC5vbkNoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBnZXRFdmVudFZhbHVlKGV2ZW50KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEVWRU5UUy5DSEFOR0UsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgW25hbWVdKSxcclxuICAgICAgICAgICAgb25CbHVyOiBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBfcmVnaXN0ZXJQcm9wcy5jdXJyZW50Lm9uQmx1cih7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBnZXQoY29udHJvbC5fZm9ybVZhbHVlcywgbmFtZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBFVkVOVFMuQkxVUixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCBbbmFtZSwgY29udHJvbF0pLFxyXG4gICAgICAgICAgICByZWY6IFJlYWN0LnVzZUNhbGxiYWNrKChlbG0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZ2V0KGNvbnRyb2wuX2ZpZWxkcywgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxtICYmIGZpZWxkICYmIGVsbS5mb2N1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLl9mLnJlZiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6ICgpID0+IGVsbS5mb2N1cygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXN0b21WYWxpZGl0eTogKG1lc3NhZ2UpID0+IGVsbS5zZXRDdXN0b21WYWxpZGl0eShtZXNzYWdlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwb3J0VmFsaWRpdHk6ICgpID0+IGVsbS5yZXBvcnRWYWxpZGl0eSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIFtuYW1lLCBjb250cm9sLl9maWVsZHNdKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZvcm1TdGF0ZSxcclxuICAgICAgICBmaWVsZFN0YXRlOiBjb250cm9sLmdldEZpZWxkU3RhdGUobmFtZSwgZm9ybVN0YXRlKSxcclxuICAgIH07XHJcbn1cblxuLyoqXHJcbiAqIENvbXBvbmVudCBiYXNlZCBvbiBgdXNlQ29udHJvbGxlcmAgaG9vayB0byB3b3JrIHdpdGggY29udHJvbGxlZCBjb21wb25lbnQuXHJcbiAqXHJcbiAqIEByZW1hcmtzXHJcbiAqIFtBUEldKGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkvdXNlY29udHJvbGxlci9jb250cm9sbGVyKSDigKIgW0RlbW9dKGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9yZWFjdC1ob29rLWZvcm0tdjYtY29udHJvbGxlci10cy1qd3l6dykg4oCiIFtWaWRlb10oaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1OMlVOa19VQ1Z5QSlcclxuICpcclxuICogQHBhcmFtIHByb3BzIC0gdGhlIHBhdGggbmFtZSB0byB0aGUgZm9ybSBmaWVsZCB2YWx1ZSwgYW5kIHZhbGlkYXRpb24gcnVsZXMuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHByb3ZpZGUgZmllbGQgaGFuZGxlciBmdW5jdGlvbnMsIGZpZWxkIGFuZCBmb3JtIHN0YXRlLlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBgYGB0c3hcclxuICogZnVuY3Rpb24gQXBwKCkge1xyXG4gKiAgIGNvbnN0IHsgY29udHJvbCB9ID0gdXNlRm9ybTxGb3JtVmFsdWVzPih7XHJcbiAqICAgICBkZWZhdWx0VmFsdWVzOiB7XHJcbiAqICAgICAgIHRlc3Q6IFwiXCJcclxuICogICAgIH1cclxuICogICB9KTtcclxuICpcclxuICogICByZXR1cm4gKFxyXG4gKiAgICAgPGZvcm0+XHJcbiAqICAgICAgIDxDb250cm9sbGVyXHJcbiAqICAgICAgICAgY29udHJvbD17Y29udHJvbH1cclxuICogICAgICAgICBuYW1lPVwidGVzdFwiXHJcbiAqICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyBvbkNoYW5nZSwgb25CbHVyLCB2YWx1ZSwgcmVmIH0sIGZvcm1TdGF0ZSwgZmllbGRTdGF0ZSB9KSA9PiAoXHJcbiAqICAgICAgICAgICA8PlxyXG4gKiAgICAgICAgICAgICA8aW5wdXRcclxuICogICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9IC8vIHNlbmQgdmFsdWUgdG8gaG9vayBmb3JtXHJcbiAqICAgICAgICAgICAgICAgb25CbHVyPXtvbkJsdXJ9IC8vIG5vdGlmeSB3aGVuIGlucHV0IGlzIHRvdWNoZWRcclxuICogICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9IC8vIHJldHVybiB1cGRhdGVkIHZhbHVlXHJcbiAqICAgICAgICAgICAgICAgcmVmPXtyZWZ9IC8vIHNldCByZWYgZm9yIGZvY3VzIG1hbmFnZW1lbnRcclxuICogICAgICAgICAgICAgLz5cclxuICogICAgICAgICAgICAgPHA+e2Zvcm1TdGF0ZS5pc1N1Ym1pdHRlZCA/IFwic3VibWl0dGVkXCIgOiBcIlwifTwvcD5cclxuICogICAgICAgICAgICAgPHA+e2ZpZWxkU3RhdGUuaXNUb3VjaGVkID8gXCJ0b3VjaGVkXCIgOiBcIlwifTwvcD5cclxuICogICAgICAgICAgIDwvPlxyXG4gKiAgICAgICAgICl9XHJcbiAqICAgICAgIC8+XHJcbiAqICAgICA8L2Zvcm0+XHJcbiAqICAgKTtcclxuICogfVxyXG4gKiBgYGBcclxuICovXHJcbmNvbnN0IENvbnRyb2xsZXIgPSAocHJvcHMpID0+IHByb3BzLnJlbmRlcih1c2VDb250cm9sbGVyKHByb3BzKSk7XG5cbnZhciBhcHBlbmRFcnJvcnMgPSAobmFtZSwgdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhLCBlcnJvcnMsIHR5cGUsIG1lc3NhZ2UpID0+IHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYVxyXG4gICAgPyBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGVycm9yc1tuYW1lXSksIHsgdHlwZXM6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgKGVycm9yc1tuYW1lXSAmJiBlcnJvcnNbbmFtZV0udHlwZXMgPyBlcnJvcnNbbmFtZV0udHlwZXMgOiB7fSkpLCB7IFt0eXBlXTogbWVzc2FnZSB8fCB0cnVlIH0pIH0pIDoge307XG5cbnZhciBpc0tleSA9ICh2YWx1ZSkgPT4gL15cXHcqJC8udGVzdCh2YWx1ZSk7XG5cbnZhciBzdHJpbmdUb1BhdGggPSAoaW5wdXQpID0+IGNvbXBhY3QoaW5wdXQucmVwbGFjZSgvW1wifCddfFxcXS9nLCAnJykuc3BsaXQoL1xcLnxcXFsvKSk7XG5cbmZ1bmN0aW9uIHNldChvYmplY3QsIHBhdGgsIHZhbHVlKSB7XHJcbiAgICBsZXQgaW5kZXggPSAtMTtcclxuICAgIGNvbnN0IHRlbXBQYXRoID0gaXNLZXkocGF0aCkgPyBbcGF0aF0gOiBzdHJpbmdUb1BhdGgocGF0aCk7XHJcbiAgICBjb25zdCBsZW5ndGggPSB0ZW1wUGF0aC5sZW5ndGg7XHJcbiAgICBjb25zdCBsYXN0SW5kZXggPSBsZW5ndGggLSAxO1xyXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBrZXkgPSB0ZW1wUGF0aFtpbmRleF07XHJcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSBsYXN0SW5kZXgpIHtcclxuICAgICAgICAgICAgY29uc3Qgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcclxuICAgICAgICAgICAgbmV3VmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgaXNPYmplY3Qob2JqVmFsdWUpIHx8IEFycmF5LmlzQXJyYXkob2JqVmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBvYmpWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogIWlzTmFOKCt0ZW1wUGF0aFtpbmRleCArIDFdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDoge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9iamVjdFtrZXldID0gbmV3VmFsdWU7XHJcbiAgICAgICAgb2JqZWN0ID0gb2JqZWN0W2tleV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2JqZWN0O1xyXG59XG5cbmNvbnN0IGZvY3VzRmllbGRCeSA9IChmaWVsZHMsIGNhbGxiYWNrLCBmaWVsZHNOYW1lcykgPT4ge1xyXG4gICAgZm9yIChjb25zdCBrZXkgb2YgZmllbGRzTmFtZXMgfHwgT2JqZWN0LmtleXMoZmllbGRzKSkge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gZ2V0KGZpZWxkcywga2V5KTtcclxuICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgY29uc3QgX2YgPSBmaWVsZC5fZjtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IG9taXQoZmllbGQsICdfZicpO1xyXG4gICAgICAgICAgICBpZiAoX2YgJiYgY2FsbGJhY2soX2YubmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfZi5yZWYuZm9jdXMgJiYgaXNVbmRlZmluZWQoX2YucmVmLmZvY3VzKCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChfZi5yZWZzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX2YucmVmc1swXS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzT2JqZWN0KGN1cnJlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBmb2N1c0ZpZWxkQnkoY3VycmVudCwgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xuXG52YXIgZ2VuZXJhdGVJZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGQgPSB0eXBlb2YgcGVyZm9ybWFuY2UgPT09ICd1bmRlZmluZWQnID8gRGF0ZS5ub3coKSA6IHBlcmZvcm1hbmNlLm5vdygpICogMTAwMDtcclxuICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIChjKSA9PiB7XHJcbiAgICAgICAgY29uc3QgciA9IChNYXRoLnJhbmRvbSgpICogMTYgKyBkKSAlIDE2IHwgMDtcclxuICAgICAgICByZXR1cm4gKGMgPT0gJ3gnID8gciA6IChyICYgMHgzKSB8IDB4OCkudG9TdHJpbmcoMTYpO1xyXG4gICAgfSk7XHJcbn07XG5cbnZhciBnZXRGb2N1c0ZpZWxkTmFtZSA9IChuYW1lLCBpbmRleCwgb3B0aW9ucyA9IHt9KSA9PiBvcHRpb25zLnNob3VsZEZvY3VzIHx8IGlzVW5kZWZpbmVkKG9wdGlvbnMuc2hvdWxkRm9jdXMpXHJcbiAgICA/IG9wdGlvbnMuZm9jdXNOYW1lIHx8XHJcbiAgICAgICAgYCR7bmFtZX0uJHtpc1VuZGVmaW5lZChvcHRpb25zLmZvY3VzSW5kZXgpID8gaW5kZXggOiBvcHRpb25zLmZvY3VzSW5kZXh9LmBcclxuICAgIDogJyc7XG5cbnZhciBpc1dhdGNoZWQgPSAobmFtZSwgX25hbWVzLCBpc0JsdXJFdmVudCkgPT4gIWlzQmx1ckV2ZW50ICYmXHJcbiAgICAoX25hbWVzLndhdGNoQWxsIHx8XHJcbiAgICAgICAgX25hbWVzLndhdGNoLmhhcyhuYW1lKSB8fFxyXG4gICAgICAgIFsuLi5fbmFtZXMud2F0Y2hdLnNvbWUoKHdhdGNoTmFtZSkgPT4gbmFtZS5zdGFydHNXaXRoKHdhdGNoTmFtZSkgJiZcclxuICAgICAgICAgICAgL15cXC5cXHcrLy50ZXN0KG5hbWUuc2xpY2Uod2F0Y2hOYW1lLmxlbmd0aCkpKSk7XG5cbmZ1bmN0aW9uIGFwcGVuZChkYXRhLCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuIFsuLi5kYXRhLCAuLi5jb252ZXJ0VG9BcnJheVBheWxvYWQodmFsdWUpXTtcclxufVxuXG5mdW5jdGlvbiBjbG9uZU9iamVjdChkYXRhKSB7XHJcbiAgICBsZXQgY29weTtcclxuICAgIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGRhdGEpO1xyXG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgY29weSA9IG5ldyBEYXRlKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZGF0YSBpbnN0YW5jZW9mIFNldCkge1xyXG4gICAgICAgIGNvcHkgPSBuZXcgU2V0KGRhdGEpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNBcnJheSB8fCBpc09iamVjdChkYXRhKSkge1xyXG4gICAgICAgIGNvcHkgPSBpc0FycmF5ID8gW10gOiB7fTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGRhdGFba2V5XSkpIHtcclxuICAgICAgICAgICAgICAgIGNvcHkgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29weVtrZXldID0gY2xvbmVPYmplY3QoZGF0YVtrZXldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICAgIHJldHVybiBjb3B5O1xyXG59XG5cbnZhciBmaWxsRW1wdHlBcnJheSA9ICh2YWx1ZSkgPT4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5tYXAoKCkgPT4gdW5kZWZpbmVkKSA6IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaW5zZXJ0KGRhdGEsIGluZGV4LCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICAuLi5kYXRhLnNsaWNlKDAsIGluZGV4KSxcclxuICAgICAgICAuLi5jb252ZXJ0VG9BcnJheVBheWxvYWQodmFsdWUpLFxyXG4gICAgICAgIC4uLmRhdGEuc2xpY2UoaW5kZXgpLFxyXG4gICAgXTtcclxufVxuXG52YXIgbW92ZUFycmF5QXQgPSAoZGF0YSwgZnJvbSwgdG8pID0+IHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhKSkge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIGlmIChpc1VuZGVmaW5lZChkYXRhW3RvXSkpIHtcclxuICAgICAgICBkYXRhW3RvXSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGRhdGEuc3BsaWNlKHRvLCAwLCBkYXRhLnNwbGljZShmcm9tLCAxKVswXSk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxufTtcblxuZnVuY3Rpb24gcHJlcGVuZChkYXRhLCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuIFsuLi5jb252ZXJ0VG9BcnJheVBheWxvYWQodmFsdWUpLCAuLi5jb252ZXJ0VG9BcnJheVBheWxvYWQoZGF0YSldO1xyXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUF0SW5kZXhlcyhkYXRhLCBpbmRleGVzKSB7XHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICBjb25zdCB0ZW1wID0gWy4uLmRhdGFdO1xyXG4gICAgZm9yIChjb25zdCBpbmRleCBvZiBpbmRleGVzKSB7XHJcbiAgICAgICAgdGVtcC5zcGxpY2UoaW5kZXggLSBpLCAxKTtcclxuICAgICAgICBpKys7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29tcGFjdCh0ZW1wKS5sZW5ndGggPyB0ZW1wIDogW107XHJcbn1cclxudmFyIHJlbW92ZUFycmF5QXQgPSAoZGF0YSwgaW5kZXgpID0+IGlzVW5kZWZpbmVkKGluZGV4KVxyXG4gICAgPyBbXVxyXG4gICAgOiByZW1vdmVBdEluZGV4ZXMoZGF0YSwgY29udmVydFRvQXJyYXlQYXlsb2FkKGluZGV4KS5zb3J0KChhLCBiKSA9PiBhIC0gYikpO1xuXG52YXIgc3dhcEFycmF5QXQgPSAoZGF0YSwgaW5kZXhBLCBpbmRleEIpID0+IHtcclxuICAgIGRhdGFbaW5kZXhBXSA9IFtkYXRhW2luZGV4Ql0sIChkYXRhW2luZGV4Ql0gPSBkYXRhW2luZGV4QV0pXVswXTtcclxufTtcblxudmFyIHVwZGF0ZUF0ID0gKGZpZWxkVmFsdWVzLCBpbmRleCwgdmFsdWUpID0+IHtcclxuICAgIGZpZWxkVmFsdWVzW2luZGV4XSA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIGZpZWxkVmFsdWVzO1xyXG59O1xuXG4vKipcclxuICogQSBjdXN0b20gaG9vayB0aGF0IGV4cG9zZXMgY29udmVuaWVudCBtZXRob2RzIHRvIHBlcmZvcm0gb3BlcmF0aW9ucyB3aXRoIGEgbGlzdCBvZiBkeW5hbWljIGlucHV0cyB0aGF0IG5lZWQgdG8gYmUgYXBwZW5kZWQsIHVwZGF0ZWQsIHJlbW92ZWQgZXRjLlxyXG4gKlxyXG4gKiBAcmVtYXJrc1xyXG4gKiBbQVBJXShodHRwczovL3JlYWN0LWhvb2stZm9ybS5jb20vYXBpL3VzZWZpZWxkYXJyYXkpIOKAoiBbRGVtb10oaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zL3JlYWN0LWhvb2stZm9ybS11c2VmaWVsZGFycmF5LXNzdWduKVxyXG4gKlxyXG4gKiBAcGFyYW0gcHJvcHMgLSB1c2VGaWVsZEFycmF5IHByb3BzXHJcbiAqXHJcbiAqIEByZXR1cm5zIG1ldGhvZHMgLSBmdW5jdGlvbnMgdG8gbWFuaXB1bGF0ZSB3aXRoIHRoZSBGaWVsZCBBcnJheXMgKGR5bmFtaWMgaW5wdXRzKSB7QGxpbmsgVXNlRmllbGRBcnJheVJldHVybn1cclxuICpcclxuICogQGV4YW1wbGVcclxuICogYGBgdHN4XHJcbiAqIGZ1bmN0aW9uIEFwcCgpIHtcclxuICogICBjb25zdCB7IHJlZ2lzdGVyLCBjb250cm9sLCBoYW5kbGVTdWJtaXQsIHJlc2V0LCB0cmlnZ2VyLCBzZXRFcnJvciB9ID0gdXNlRm9ybSh7XHJcbiAqICAgICBkZWZhdWx0VmFsdWVzOiB7XHJcbiAqICAgICAgIHRlc3Q6IFtdXHJcbiAqICAgICB9XHJcbiAqICAgfSk7XHJcbiAqICAgY29uc3QgeyBmaWVsZHMsIGFwcGVuZCB9ID0gdXNlRmllbGRBcnJheSh7XHJcbiAqICAgICBjb250cm9sLFxyXG4gKiAgICAgbmFtZTogXCJ0ZXN0XCJcclxuICogICB9KTtcclxuICpcclxuICogICByZXR1cm4gKFxyXG4gKiAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKX0+XHJcbiAqICAgICAgIHtmaWVsZHMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gKiAgICAgICAgICA8aW5wdXQga2V5PXtpdGVtLmlkfSB7Li4ucmVnaXN0ZXIoYHRlc3QuJHtpbmRleH0uZmlyc3ROYW1lYCl9ICAvPlxyXG4gKiAgICAgICApKX1cclxuICogICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gYXBwZW5kKHsgZmlyc3ROYW1lOiBcImJpbGxcIiB9KX0+XHJcbiAqICAgICAgICAgYXBwZW5kXHJcbiAqICAgICAgIDwvYnV0dG9uPlxyXG4gKiAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIC8+XHJcbiAqICAgICA8L2Zvcm0+XHJcbiAqICAgKTtcclxuICogfVxyXG4gKiBgYGBcclxuICovXHJcbmZ1bmN0aW9uIHVzZUZpZWxkQXJyYXkocHJvcHMpIHtcclxuICAgIGNvbnN0IG1ldGhvZHMgPSB1c2VGb3JtQ29udGV4dCgpO1xyXG4gICAgY29uc3QgeyBjb250cm9sID0gbWV0aG9kcy5jb250cm9sLCBuYW1lLCBrZXlOYW1lID0gJ2lkJywgc2hvdWxkVW5yZWdpc3RlciwgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgW2ZpZWxkcywgc2V0RmllbGRzXSA9IFJlYWN0LnVzZVN0YXRlKGNvbnRyb2wuX2dldEZpZWxkQXJyYXkobmFtZSkpO1xyXG4gICAgY29uc3QgaWRzID0gUmVhY3QudXNlUmVmKGNvbnRyb2wuX2dldEZpZWxkQXJyYXkobmFtZSkubWFwKGdlbmVyYXRlSWQpKTtcclxuICAgIGNvbnN0IF9maWVsZElkcyA9IFJlYWN0LnVzZVJlZihmaWVsZHMpO1xyXG4gICAgY29uc3QgX25hbWUgPSBSZWFjdC51c2VSZWYobmFtZSk7XHJcbiAgICBjb25zdCBfYWN0aW9uZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xyXG4gICAgX25hbWUuY3VycmVudCA9IG5hbWU7XHJcbiAgICBfZmllbGRJZHMuY3VycmVudCA9IGZpZWxkcztcclxuICAgIGNvbnRyb2wuX25hbWVzLmFycmF5LmFkZChuYW1lKTtcclxuICAgIGNvbnN0IGNhbGxiYWNrID0gUmVhY3QudXNlQ2FsbGJhY2soKHsgdmFsdWVzLCBuYW1lOiBmaWVsZEFycmF5TmFtZSB9KSA9PiB7XHJcbiAgICAgICAgaWYgKGZpZWxkQXJyYXlOYW1lID09PSBfbmFtZS5jdXJyZW50IHx8ICFmaWVsZEFycmF5TmFtZSkge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZFZhbHVlcyA9IGdldCh2YWx1ZXMsIF9uYW1lLmN1cnJlbnQsIFtdKTtcclxuICAgICAgICAgICAgc2V0RmllbGRzKGZpZWxkVmFsdWVzKTtcclxuICAgICAgICAgICAgaWRzLmN1cnJlbnQgPSBmaWVsZFZhbHVlcy5tYXAoZ2VuZXJhdGVJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgdXNlU3Vic2NyaWJlKHtcclxuICAgICAgICBjYWxsYmFjayxcclxuICAgICAgICBzdWJqZWN0OiBjb250cm9sLl9zdWJqZWN0cy5hcnJheSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgdXBkYXRlVmFsdWVzID0gUmVhY3QudXNlQ2FsbGJhY2soKHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzKSA9PiB7XHJcbiAgICAgICAgX2FjdGlvbmVkLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnRyb2wuX3VwZGF0ZUZpZWxkQXJyYXkobmFtZSwgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMpO1xyXG4gICAgfSwgW2NvbnRyb2wsIG5hbWVdKTtcclxuICAgIGNvbnN0IGFwcGVuZCQxID0gKHZhbHVlLCBvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXBwZW5kVmFsdWUgPSBjb252ZXJ0VG9BcnJheVBheWxvYWQoY2xvbmVPYmplY3QodmFsdWUpKTtcclxuICAgICAgICBjb25zdCB1cGRhdGVkRmllbGRBcnJheVZhbHVlcyA9IGFwcGVuZChjb250cm9sLl9nZXRGaWVsZEFycmF5KG5hbWUpLCBhcHBlbmRWYWx1ZSk7XHJcbiAgICAgICAgY29udHJvbC5fbmFtZXMuZm9jdXMgPSBnZXRGb2N1c0ZpZWxkTmFtZShuYW1lLCB1cGRhdGVkRmllbGRBcnJheVZhbHVlcy5sZW5ndGggLSAxLCBvcHRpb25zKTtcclxuICAgICAgICBpZHMuY3VycmVudCA9IGFwcGVuZChpZHMuY3VycmVudCwgYXBwZW5kVmFsdWUubWFwKGdlbmVyYXRlSWQpKTtcclxuICAgICAgICB1cGRhdGVWYWx1ZXModXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMpO1xyXG4gICAgICAgIHNldEZpZWxkcyh1cGRhdGVkRmllbGRBcnJheVZhbHVlcyk7XHJcbiAgICAgICAgY29udHJvbC5fdXBkYXRlRmllbGRBcnJheShuYW1lLCB1cGRhdGVkRmllbGRBcnJheVZhbHVlcywgYXBwZW5kLCB7XHJcbiAgICAgICAgICAgIGFyZ0E6IGZpbGxFbXB0eUFycmF5KHZhbHVlKSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBwcmVwZW5kJDEgPSAodmFsdWUsIG9wdGlvbnMpID0+IHtcclxuICAgICAgICBjb25zdCBwcmVwZW5kVmFsdWUgPSBjb252ZXJ0VG9BcnJheVBheWxvYWQoY2xvbmVPYmplY3QodmFsdWUpKTtcclxuICAgICAgICBjb25zdCB1cGRhdGVkRmllbGRBcnJheVZhbHVlcyA9IHByZXBlbmQoY29udHJvbC5fZ2V0RmllbGRBcnJheShuYW1lKSwgcHJlcGVuZFZhbHVlKTtcclxuICAgICAgICBjb250cm9sLl9uYW1lcy5mb2N1cyA9IGdldEZvY3VzRmllbGROYW1lKG5hbWUsIDAsIG9wdGlvbnMpO1xyXG4gICAgICAgIGlkcy5jdXJyZW50ID0gcHJlcGVuZChpZHMuY3VycmVudCwgcHJlcGVuZFZhbHVlLm1hcChnZW5lcmF0ZUlkKSk7XHJcbiAgICAgICAgdXBkYXRlVmFsdWVzKHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzKTtcclxuICAgICAgICBzZXRGaWVsZHModXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMpO1xyXG4gICAgICAgIGNvbnRyb2wuX3VwZGF0ZUZpZWxkQXJyYXkobmFtZSwgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMsIHByZXBlbmQsIHtcclxuICAgICAgICAgICAgYXJnQTogZmlsbEVtcHR5QXJyYXkodmFsdWUpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlbW92ZSA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzID0gcmVtb3ZlQXJyYXlBdChjb250cm9sLl9nZXRGaWVsZEFycmF5KG5hbWUpLCBpbmRleCk7XHJcbiAgICAgICAgaWRzLmN1cnJlbnQgPSByZW1vdmVBcnJheUF0KGlkcy5jdXJyZW50LCBpbmRleCk7XHJcbiAgICAgICAgdXBkYXRlVmFsdWVzKHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzKTtcclxuICAgICAgICBzZXRGaWVsZHModXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMpO1xyXG4gICAgICAgIGNvbnRyb2wuX3VwZGF0ZUZpZWxkQXJyYXkobmFtZSwgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMsIHJlbW92ZUFycmF5QXQsIHtcclxuICAgICAgICAgICAgYXJnQTogaW5kZXgsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaW5zZXJ0JDEgPSAoaW5kZXgsIHZhbHVlLCBvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5zZXJ0VmFsdWUgPSBjb252ZXJ0VG9BcnJheVBheWxvYWQoY2xvbmVPYmplY3QodmFsdWUpKTtcclxuICAgICAgICBjb25zdCB1cGRhdGVkRmllbGRBcnJheVZhbHVlcyA9IGluc2VydChjb250cm9sLl9nZXRGaWVsZEFycmF5KG5hbWUpLCBpbmRleCwgaW5zZXJ0VmFsdWUpO1xyXG4gICAgICAgIGNvbnRyb2wuX25hbWVzLmZvY3VzID0gZ2V0Rm9jdXNGaWVsZE5hbWUobmFtZSwgaW5kZXgsIG9wdGlvbnMpO1xyXG4gICAgICAgIGlkcy5jdXJyZW50ID0gaW5zZXJ0KGlkcy5jdXJyZW50LCBpbmRleCwgaW5zZXJ0VmFsdWUubWFwKGdlbmVyYXRlSWQpKTtcclxuICAgICAgICB1cGRhdGVWYWx1ZXModXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMpO1xyXG4gICAgICAgIHNldEZpZWxkcyh1cGRhdGVkRmllbGRBcnJheVZhbHVlcyk7XHJcbiAgICAgICAgY29udHJvbC5fdXBkYXRlRmllbGRBcnJheShuYW1lLCB1cGRhdGVkRmllbGRBcnJheVZhbHVlcywgaW5zZXJ0LCB7XHJcbiAgICAgICAgICAgIGFyZ0E6IGluZGV4LFxyXG4gICAgICAgICAgICBhcmdCOiBmaWxsRW1wdHlBcnJheSh2YWx1ZSksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc3dhcCA9IChpbmRleEEsIGluZGV4QikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzID0gY29udHJvbC5fZ2V0RmllbGRBcnJheShuYW1lKTtcclxuICAgICAgICBzd2FwQXJyYXlBdCh1cGRhdGVkRmllbGRBcnJheVZhbHVlcywgaW5kZXhBLCBpbmRleEIpO1xyXG4gICAgICAgIHN3YXBBcnJheUF0KGlkcy5jdXJyZW50LCBpbmRleEEsIGluZGV4Qik7XHJcbiAgICAgICAgdXBkYXRlVmFsdWVzKHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzKTtcclxuICAgICAgICBzZXRGaWVsZHModXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMpO1xyXG4gICAgICAgIGNvbnRyb2wuX3VwZGF0ZUZpZWxkQXJyYXkobmFtZSwgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMsIHN3YXBBcnJheUF0LCB7XHJcbiAgICAgICAgICAgIGFyZ0E6IGluZGV4QSxcclxuICAgICAgICAgICAgYXJnQjogaW5kZXhCLFxyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBtb3ZlID0gKGZyb20sIHRvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMgPSBjb250cm9sLl9nZXRGaWVsZEFycmF5KG5hbWUpO1xyXG4gICAgICAgIG1vdmVBcnJheUF0KHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzLCBmcm9tLCB0byk7XHJcbiAgICAgICAgbW92ZUFycmF5QXQoaWRzLmN1cnJlbnQsIGZyb20sIHRvKTtcclxuICAgICAgICB1cGRhdGVWYWx1ZXModXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMpO1xyXG4gICAgICAgIHNldEZpZWxkcyh1cGRhdGVkRmllbGRBcnJheVZhbHVlcyk7XHJcbiAgICAgICAgY29udHJvbC5fdXBkYXRlRmllbGRBcnJheShuYW1lLCB1cGRhdGVkRmllbGRBcnJheVZhbHVlcywgbW92ZUFycmF5QXQsIHtcclxuICAgICAgICAgICAgYXJnQTogZnJvbSxcclxuICAgICAgICAgICAgYXJnQjogdG8sXHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHVwZGF0ZSA9IChpbmRleCwgdmFsdWUpID0+IHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkRmllbGRBcnJheVZhbHVlcyA9IHVwZGF0ZUF0KGNvbnRyb2wuX2dldEZpZWxkQXJyYXkobmFtZSksIGluZGV4LCB2YWx1ZSk7XHJcbiAgICAgICAgaWRzLmN1cnJlbnQgPSBbLi4udXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXNdLm1hcCgoaXRlbSwgaSkgPT4gIWl0ZW0gfHwgaSA9PT0gaW5kZXggPyBnZW5lcmF0ZUlkKCkgOiBpZHMuY3VycmVudFtpXSk7XHJcbiAgICAgICAgdXBkYXRlVmFsdWVzKHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzKTtcclxuICAgICAgICBzZXRGaWVsZHMoWy4uLnVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzXSk7XHJcbiAgICAgICAgY29udHJvbC5fdXBkYXRlRmllbGRBcnJheShuYW1lLCB1cGRhdGVkRmllbGRBcnJheVZhbHVlcywgdXBkYXRlQXQsIHtcclxuICAgICAgICAgICAgYXJnQTogaW5kZXgsXHJcbiAgICAgICAgICAgIGFyZ0I6IHZhbHVlLFxyXG4gICAgICAgIH0sIHRydWUsIGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCByZXBsYWNlID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMgPSBjb252ZXJ0VG9BcnJheVBheWxvYWQoY2xvbmVPYmplY3QodmFsdWUpKTtcclxuICAgICAgICBpZHMuY3VycmVudCA9IHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzLm1hcChnZW5lcmF0ZUlkKTtcclxuICAgICAgICB1cGRhdGVWYWx1ZXMoWy4uLnVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzXSk7XHJcbiAgICAgICAgc2V0RmllbGRzKFsuLi51cGRhdGVkRmllbGRBcnJheVZhbHVlc10pO1xyXG4gICAgICAgIGNvbnRyb2wuX3VwZGF0ZUZpZWxkQXJyYXkobmFtZSwgWy4uLnVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzXSwgKGRhdGEpID0+IGRhdGEsIHt9LCB0cnVlLCBmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb250cm9sLl9zdGF0ZUZsYWdzLmFjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIGlzV2F0Y2hlZChuYW1lLCBjb250cm9sLl9uYW1lcykgJiYgY29udHJvbC5fc3ViamVjdHMuc3RhdGUubmV4dCh7fSk7XHJcbiAgICAgICAgaWYgKF9hY3Rpb25lZC5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnRyb2wuX2V4ZWN1dGVTY2hlbWEoW25hbWVdKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gZ2V0KHJlc3VsdC5lcnJvcnMsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLnR5cGUgJiYgIWdldChjb250cm9sLl9mb3JtU3RhdGUuZXJyb3JzLCBuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldChjb250cm9sLl9mb3JtU3RhdGUuZXJyb3JzLCBuYW1lLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbC5fc3ViamVjdHMuc3RhdGUubmV4dCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yczogY29udHJvbC5fZm9ybVN0YXRlLmVycm9ycyxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRyb2wuX3N1YmplY3RzLndhdGNoLm5leHQoe1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZXM6IGNvbnRyb2wuX2Zvcm1WYWx1ZXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29udHJvbC5fbmFtZXMuZm9jdXMgJiZcclxuICAgICAgICAgICAgZm9jdXNGaWVsZEJ5KGNvbnRyb2wuX2ZpZWxkcywgKGtleSkgPT4ga2V5LnN0YXJ0c1dpdGgoY29udHJvbC5fbmFtZXMuZm9jdXMpKTtcclxuICAgICAgICBjb250cm9sLl9uYW1lcy5mb2N1cyA9ICcnO1xyXG4gICAgICAgIGNvbnRyb2wuX3Byb3h5Rm9ybVN0YXRlLmlzVmFsaWQgJiYgY29udHJvbC5fdXBkYXRlVmFsaWQoKTtcclxuICAgIH0sIFtmaWVsZHMsIG5hbWUsIGNvbnRyb2xdKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgIWdldChjb250cm9sLl9mb3JtVmFsdWVzLCBuYW1lKSAmJiBjb250cm9sLl91cGRhdGVGaWVsZEFycmF5KG5hbWUpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIChjb250cm9sLl9vcHRpb25zLnNob3VsZFVucmVnaXN0ZXIgfHwgc2hvdWxkVW5yZWdpc3RlcikgJiZcclxuICAgICAgICAgICAgICAgIGNvbnRyb2wudW5yZWdpc3RlcihuYW1lKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW25hbWUsIGNvbnRyb2wsIGtleU5hbWUsIHNob3VsZFVucmVnaXN0ZXJdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc3dhcDogUmVhY3QudXNlQ2FsbGJhY2soc3dhcCwgW3VwZGF0ZVZhbHVlcywgbmFtZSwgY29udHJvbF0pLFxyXG4gICAgICAgIG1vdmU6IFJlYWN0LnVzZUNhbGxiYWNrKG1vdmUsIFt1cGRhdGVWYWx1ZXMsIG5hbWUsIGNvbnRyb2xdKSxcclxuICAgICAgICBwcmVwZW5kOiBSZWFjdC51c2VDYWxsYmFjayhwcmVwZW5kJDEsIFt1cGRhdGVWYWx1ZXMsIG5hbWUsIGNvbnRyb2xdKSxcclxuICAgICAgICBhcHBlbmQ6IFJlYWN0LnVzZUNhbGxiYWNrKGFwcGVuZCQxLCBbdXBkYXRlVmFsdWVzLCBuYW1lLCBjb250cm9sXSksXHJcbiAgICAgICAgcmVtb3ZlOiBSZWFjdC51c2VDYWxsYmFjayhyZW1vdmUsIFt1cGRhdGVWYWx1ZXMsIG5hbWUsIGNvbnRyb2xdKSxcclxuICAgICAgICBpbnNlcnQ6IFJlYWN0LnVzZUNhbGxiYWNrKGluc2VydCQxLCBbdXBkYXRlVmFsdWVzLCBuYW1lLCBjb250cm9sXSksXHJcbiAgICAgICAgdXBkYXRlOiBSZWFjdC51c2VDYWxsYmFjayh1cGRhdGUsIFt1cGRhdGVWYWx1ZXMsIG5hbWUsIGNvbnRyb2xdKSxcclxuICAgICAgICByZXBsYWNlOiBSZWFjdC51c2VDYWxsYmFjayhyZXBsYWNlLCBbdXBkYXRlVmFsdWVzLCBuYW1lLCBjb250cm9sXSksXHJcbiAgICAgICAgZmllbGRzOiBSZWFjdC51c2VNZW1vKCgpID0+IGZpZWxkcy5tYXAoKGZpZWxkLCBpbmRleCkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZmllbGQpLCB7IFtrZXlOYW1lXTogaWRzLmN1cnJlbnRbaW5kZXhdIHx8IGdlbmVyYXRlSWQoKSB9KSkpLCBbZmllbGRzLCBrZXlOYW1lXSksXHJcbiAgICB9O1xyXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN1YmplY3QoKSB7XHJcbiAgICBsZXQgX29ic2VydmVycyA9IFtdO1xyXG4gICAgY29uc3QgbmV4dCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3Qgb2JzZXJ2ZXIgb2YgX29ic2VydmVycykge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc3Vic2NyaWJlID0gKG9ic2VydmVyKSA9PiB7XHJcbiAgICAgICAgX29ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgX29ic2VydmVycyA9IF9vYnNlcnZlcnMuZmlsdGVyKChvKSA9PiBvICE9PSBvYnNlcnZlcik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9ICgpID0+IHtcclxuICAgICAgICBfb2JzZXJ2ZXJzID0gW107XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXQgb2JzZXJ2ZXJzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX29ic2VydmVycztcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5leHQsXHJcbiAgICAgICAgc3Vic2NyaWJlLFxyXG4gICAgICAgIHVuc3Vic2NyaWJlLFxyXG4gICAgfTtcclxufVxuXG52YXIgaXNQcmltaXRpdmUgPSAodmFsdWUpID0+IGlzTnVsbE9yVW5kZWZpbmVkKHZhbHVlKSB8fCAhaXNPYmplY3RUeXBlKHZhbHVlKTtcblxuZnVuY3Rpb24gZGVlcEVxdWFsKG9iamVjdDEsIG9iamVjdDIpIHtcclxuICAgIGlmIChpc1ByaW1pdGl2ZShvYmplY3QxKSB8fCBpc1ByaW1pdGl2ZShvYmplY3QyKSkge1xyXG4gICAgICAgIHJldHVybiBvYmplY3QxID09PSBvYmplY3QyO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzRGF0ZU9iamVjdChvYmplY3QxKSAmJiBpc0RhdGVPYmplY3Qob2JqZWN0MikpIHtcclxuICAgICAgICByZXR1cm4gb2JqZWN0MS5nZXRUaW1lKCkgPT09IG9iamVjdDIuZ2V0VGltZSgpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qga2V5czEgPSBPYmplY3Qua2V5cyhvYmplY3QxKTtcclxuICAgIGNvbnN0IGtleXMyID0gT2JqZWN0LmtleXMob2JqZWN0Mik7XHJcbiAgICBpZiAoa2V5czEubGVuZ3RoICE9PSBrZXlzMi5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzMSkge1xyXG4gICAgICAgIGNvbnN0IHZhbDEgPSBvYmplY3QxW2tleV07XHJcbiAgICAgICAgaWYgKCFrZXlzMi5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleSAhPT0gJ3JlZicpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsMiA9IG9iamVjdDJba2V5XTtcclxuICAgICAgICAgICAgaWYgKChpc0RhdGVPYmplY3QodmFsMSkgJiYgaXNEYXRlT2JqZWN0KHZhbDIpKSB8fFxyXG4gICAgICAgICAgICAgICAgKGlzT2JqZWN0KHZhbDEpICYmIGlzT2JqZWN0KHZhbDIpKSB8fFxyXG4gICAgICAgICAgICAgICAgKEFycmF5LmlzQXJyYXkodmFsMSkgJiYgQXJyYXkuaXNBcnJheSh2YWwyKSlcclxuICAgICAgICAgICAgICAgID8gIWRlZXBFcXVhbCh2YWwxLCB2YWwyKVxyXG4gICAgICAgICAgICAgICAgOiB2YWwxICE9PSB2YWwyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxuXG52YXIgZ2V0VmFsaWRhdGlvbk1vZGVzID0gKG1vZGUpID0+ICh7XHJcbiAgICBpc09uU3VibWl0OiAhbW9kZSB8fCBtb2RlID09PSBWQUxJREFUSU9OX01PREUub25TdWJtaXQsXHJcbiAgICBpc09uQmx1cjogbW9kZSA9PT0gVkFMSURBVElPTl9NT0RFLm9uQmx1cixcclxuICAgIGlzT25DaGFuZ2U6IG1vZGUgPT09IFZBTElEQVRJT05fTU9ERS5vbkNoYW5nZSxcclxuICAgIGlzT25BbGw6IG1vZGUgPT09IFZBTElEQVRJT05fTU9ERS5hbGwsXHJcbiAgICBpc09uVG91Y2g6IG1vZGUgPT09IFZBTElEQVRJT05fTU9ERS5vblRvdWNoZWQsXHJcbn0pO1xuXG52YXIgaXNCb29sZWFuID0gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJztcblxudmFyIGlzRmlsZUlucHV0ID0gKGVsZW1lbnQpID0+IGVsZW1lbnQudHlwZSA9PT0gJ2ZpbGUnO1xuXG52YXIgaXNIVE1MRWxlbWVudCA9ICh2YWx1ZSkgPT4gdmFsdWUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcblxudmFyIGlzTXVsdGlwbGVTZWxlY3QgPSAoZWxlbWVudCkgPT4gZWxlbWVudC50eXBlID09PSBgc2VsZWN0LW11bHRpcGxlYDtcblxudmFyIGlzUmFkaW9JbnB1dCA9IChlbGVtZW50KSA9PiBlbGVtZW50LnR5cGUgPT09ICdyYWRpbyc7XG5cbnZhciBpc1JhZGlvT3JDaGVja2JveCA9IChyZWYpID0+IGlzUmFkaW9JbnB1dChyZWYpIHx8IGlzQ2hlY2tCb3hJbnB1dChyZWYpO1xuXG52YXIgaXNXZWIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxyXG4gICAgdHlwZW9mIHdpbmRvdy5IVE1MRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG5cbnZhciBsaXZlID0gKHJlZikgPT4gaXNIVE1MRWxlbWVudChyZWYpICYmIHJlZi5pc0Nvbm5lY3RlZDtcblxuZnVuY3Rpb24gYmFzZUdldChvYmplY3QsIHVwZGF0ZVBhdGgpIHtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHVwZGF0ZVBhdGguc2xpY2UoMCwgLTEpLmxlbmd0aDtcclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcclxuICAgICAgICBvYmplY3QgPSBpc1VuZGVmaW5lZChvYmplY3QpID8gaW5kZXgrKyA6IG9iamVjdFt1cGRhdGVQYXRoW2luZGV4KytdXTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYmplY3Q7XHJcbn1cclxuZnVuY3Rpb24gdW5zZXQob2JqZWN0LCBwYXRoKSB7XHJcbiAgICBjb25zdCB1cGRhdGVQYXRoID0gaXNLZXkocGF0aCkgPyBbcGF0aF0gOiBzdHJpbmdUb1BhdGgocGF0aCk7XHJcbiAgICBjb25zdCBjaGlsZE9iamVjdCA9IHVwZGF0ZVBhdGgubGVuZ3RoID09IDEgPyBvYmplY3QgOiBiYXNlR2V0KG9iamVjdCwgdXBkYXRlUGF0aCk7XHJcbiAgICBjb25zdCBrZXkgPSB1cGRhdGVQYXRoW3VwZGF0ZVBhdGgubGVuZ3RoIC0gMV07XHJcbiAgICBsZXQgcHJldmlvdXNPYmpSZWY7XHJcbiAgICBpZiAoY2hpbGRPYmplY3QpIHtcclxuICAgICAgICBkZWxldGUgY2hpbGRPYmplY3Rba2V5XTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgdXBkYXRlUGF0aC5zbGljZSgwLCAtMSkubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICBsZXQgaW5kZXggPSAtMTtcclxuICAgICAgICBsZXQgb2JqZWN0UmVmO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYXRocyA9IHVwZGF0ZVBhdGguc2xpY2UoMCwgLShrICsgMSkpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYXRoc0xlbmd0aCA9IGN1cnJlbnRQYXRocy5sZW5ndGggLSAxO1xyXG4gICAgICAgIGlmIChrID4gMCkge1xyXG4gICAgICAgICAgICBwcmV2aW91c09ialJlZiA9IG9iamVjdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKCsraW5kZXggPCBjdXJyZW50UGF0aHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBjdXJyZW50UGF0aHNbaW5kZXhdO1xyXG4gICAgICAgICAgICBvYmplY3RSZWYgPSBvYmplY3RSZWYgPyBvYmplY3RSZWZbaXRlbV0gOiBvYmplY3RbaXRlbV07XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50UGF0aHNMZW5ndGggPT09IGluZGV4ICYmXHJcbiAgICAgICAgICAgICAgICAoKGlzT2JqZWN0KG9iamVjdFJlZikgJiYgaXNFbXB0eU9iamVjdChvYmplY3RSZWYpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIChBcnJheS5pc0FycmF5KG9iamVjdFJlZikgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgIW9iamVjdFJlZi5maWx0ZXIoKGRhdGEpID0+IChpc09iamVjdChkYXRhKSAmJiAhaXNFbXB0eU9iamVjdChkYXRhKSkgfHwgaXNCb29sZWFuKGRhdGEpKS5sZW5ndGgpKSkge1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNPYmpSZWYgPyBkZWxldGUgcHJldmlvdXNPYmpSZWZbaXRlbV0gOiBkZWxldGUgb2JqZWN0W2l0ZW1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByZXZpb3VzT2JqUmVmID0gb2JqZWN0UmVmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvYmplY3Q7XHJcbn1cblxuZnVuY3Rpb24gbWFya0ZpZWxkc0RpcnR5KGRhdGEsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICBjb25zdCBpc1BhcmVudE5vZGVBcnJheSA9IEFycmF5LmlzQXJyYXkoZGF0YSk7XHJcbiAgICBpZiAoaXNPYmplY3QoZGF0YSkgfHwgaXNQYXJlbnROb2RlQXJyYXkpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGFba2V5XSkgfHxcclxuICAgICAgICAgICAgICAgIChpc09iamVjdChkYXRhW2tleV0pICYmICFvYmplY3RIYXNGdW5jdGlvbihkYXRhW2tleV0pKSkge1xyXG4gICAgICAgICAgICAgICAgZmllbGRzW2tleV0gPSBBcnJheS5pc0FycmF5KGRhdGFba2V5XSkgPyBbXSA6IHt9O1xyXG4gICAgICAgICAgICAgICAgbWFya0ZpZWxkc0RpcnR5KGRhdGFba2V5XSwgZmllbGRzW2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCFpc051bGxPclVuZGVmaW5lZChkYXRhW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZHNba2V5XSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmllbGRzO1xyXG59XHJcbmZ1bmN0aW9uIGdldERpcnR5RmllbGRzRnJvbURlZmF1bHRWYWx1ZXMoZGF0YSwgZm9ybVZhbHVlcywgZGlydHlGaWVsZHNGcm9tVmFsdWVzKSB7XHJcbiAgICBjb25zdCBpc1BhcmVudE5vZGVBcnJheSA9IEFycmF5LmlzQXJyYXkoZGF0YSk7XHJcbiAgICBpZiAoaXNPYmplY3QoZGF0YSkgfHwgaXNQYXJlbnROb2RlQXJyYXkpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGFba2V5XSkgfHxcclxuICAgICAgICAgICAgICAgIChpc09iamVjdChkYXRhW2tleV0pICYmICFvYmplY3RIYXNGdW5jdGlvbihkYXRhW2tleV0pKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzVW5kZWZpbmVkKGZvcm1WYWx1ZXMpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgaXNQcmltaXRpdmUoZGlydHlGaWVsZHNGcm9tVmFsdWVzW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlydHlGaWVsZHNGcm9tVmFsdWVzW2tleV0gPSBBcnJheS5pc0FycmF5KGRhdGFba2V5XSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBtYXJrRmllbGRzRGlydHkoZGF0YVtrZXldLCBbXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBPYmplY3QuYXNzaWduKHt9LCBtYXJrRmllbGRzRGlydHkoZGF0YVtrZXldKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBnZXREaXJ0eUZpZWxkc0Zyb21EZWZhdWx0VmFsdWVzKGRhdGFba2V5XSwgaXNOdWxsT3JVbmRlZmluZWQoZm9ybVZhbHVlcykgPyB7fSA6IGZvcm1WYWx1ZXNba2V5XSwgZGlydHlGaWVsZHNGcm9tVmFsdWVzW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlydHlGaWVsZHNGcm9tVmFsdWVzW2tleV0gPSAhZGVlcEVxdWFsKGRhdGFba2V5XSwgZm9ybVZhbHVlc1trZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBkaXJ0eUZpZWxkc0Zyb21WYWx1ZXM7XHJcbn1cclxudmFyIGdldERpcnR5RmllbGRzID0gKGRlZmF1bHRWYWx1ZXMsIGZvcm1WYWx1ZXMpID0+IGdldERpcnR5RmllbGRzRnJvbURlZmF1bHRWYWx1ZXMoZGVmYXVsdFZhbHVlcywgZm9ybVZhbHVlcywgbWFya0ZpZWxkc0RpcnR5KGZvcm1WYWx1ZXMpKTtcblxuY29uc3QgZGVmYXVsdFJlc3VsdCA9IHtcclxuICAgIHZhbHVlOiBmYWxzZSxcclxuICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG59O1xyXG5jb25zdCB2YWxpZFJlc3VsdCA9IHsgdmFsdWU6IHRydWUsIGlzVmFsaWQ6IHRydWUgfTtcclxudmFyIGdldENoZWNrYm94VmFsdWUgPSAob3B0aW9ucykgPT4ge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcclxuICAgICAgICBpZiAob3B0aW9ucy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IG9wdGlvbnNcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uICYmIG9wdGlvbi5jaGVja2VkICYmICFvcHRpb24uZGlzYWJsZWQpXHJcbiAgICAgICAgICAgICAgICAubWFwKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB2YWx1ZXMsIGlzVmFsaWQ6ICEhdmFsdWVzLmxlbmd0aCB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3B0aW9uc1swXS5jaGVja2VkICYmICFvcHRpb25zWzBdLmRpc2FibGVkXHJcbiAgICAgICAgICAgID8gLy8gQHRzLWV4cGVjdC1lcnJvciBleHBlY3RlZCB0byB3b3JrIGluIHRoZSBicm93c2VyXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zWzBdLmF0dHJpYnV0ZXMgJiYgIWlzVW5kZWZpbmVkKG9wdGlvbnNbMF0uYXR0cmlidXRlcy52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICA/IGlzVW5kZWZpbmVkKG9wdGlvbnNbMF0udmFsdWUpIHx8IG9wdGlvbnNbMF0udmFsdWUgPT09ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdmFsaWRSZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB7IHZhbHVlOiBvcHRpb25zWzBdLnZhbHVlLCBpc1ZhbGlkOiB0cnVlIH1cclxuICAgICAgICAgICAgICAgICAgICA6IHZhbGlkUmVzdWx0XHJcbiAgICAgICAgICAgIDogZGVmYXVsdFJlc3VsdDtcclxuICAgIH1cclxuICAgIHJldHVybiBkZWZhdWx0UmVzdWx0O1xyXG59O1xuXG52YXIgZ2V0RmllbGRWYWx1ZUFzID0gKHZhbHVlLCB7IHZhbHVlQXNOdW1iZXIsIHZhbHVlQXNEYXRlLCBzZXRWYWx1ZUFzIH0pID0+IGlzVW5kZWZpbmVkKHZhbHVlKVxyXG4gICAgPyB2YWx1ZVxyXG4gICAgOiB2YWx1ZUFzTnVtYmVyXHJcbiAgICAgICAgPyB2YWx1ZSA9PT0gJydcclxuICAgICAgICAgICAgPyBOYU5cclxuICAgICAgICAgICAgOiArdmFsdWVcclxuICAgICAgICA6IHZhbHVlQXNEYXRlICYmIGlzU3RyaW5nKHZhbHVlKVxyXG4gICAgICAgICAgICA/IG5ldyBEYXRlKHZhbHVlKVxyXG4gICAgICAgICAgICA6IHNldFZhbHVlQXNcclxuICAgICAgICAgICAgICAgID8gc2V0VmFsdWVBcyh2YWx1ZSlcclxuICAgICAgICAgICAgICAgIDogdmFsdWU7XG5cbmNvbnN0IGRlZmF1bHRSZXR1cm4gPSB7XHJcbiAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgIHZhbHVlOiBudWxsLFxyXG59O1xyXG52YXIgZ2V0UmFkaW9WYWx1ZSA9IChvcHRpb25zKSA9PiBBcnJheS5pc0FycmF5KG9wdGlvbnMpXHJcbiAgICA/IG9wdGlvbnMucmVkdWNlKChwcmV2aW91cywgb3B0aW9uKSA9PiBvcHRpb24gJiYgb3B0aW9uLmNoZWNrZWQgJiYgIW9wdGlvbi5kaXNhYmxlZFxyXG4gICAgICAgID8ge1xyXG4gICAgICAgICAgICBpc1ZhbGlkOiB0cnVlLFxyXG4gICAgICAgICAgICB2YWx1ZTogb3B0aW9uLnZhbHVlLFxyXG4gICAgICAgIH1cclxuICAgICAgICA6IHByZXZpb3VzLCBkZWZhdWx0UmV0dXJuKVxyXG4gICAgOiBkZWZhdWx0UmV0dXJuO1xuXG5mdW5jdGlvbiBnZXRGaWVsZFZhbHVlKF9mKSB7XHJcbiAgICBjb25zdCByZWYgPSBfZi5yZWY7XHJcbiAgICBpZiAoX2YucmVmcyA/IF9mLnJlZnMuZXZlcnkoKHJlZikgPT4gcmVmLmRpc2FibGVkKSA6IHJlZi5kaXNhYmxlZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChpc0ZpbGVJbnB1dChyZWYpKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlZi5maWxlcztcclxuICAgIH1cclxuICAgIGlmIChpc1JhZGlvSW5wdXQocmVmKSkge1xyXG4gICAgICAgIHJldHVybiBnZXRSYWRpb1ZhbHVlKF9mLnJlZnMpLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzTXVsdGlwbGVTZWxlY3QocmVmKSkge1xyXG4gICAgICAgIHJldHVybiBbLi4ucmVmLnNlbGVjdGVkT3B0aW9uc10ubWFwKCh7IHZhbHVlIH0pID0+IHZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChpc0NoZWNrQm94SW5wdXQocmVmKSkge1xyXG4gICAgICAgIHJldHVybiBnZXRDaGVja2JveFZhbHVlKF9mLnJlZnMpLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdldEZpZWxkVmFsdWVBcyhpc1VuZGVmaW5lZChyZWYudmFsdWUpID8gX2YucmVmLnZhbHVlIDogcmVmLnZhbHVlLCBfZik7XHJcbn1cblxudmFyIGdldFJlc29sdmVyT3B0aW9ucyA9IChmaWVsZHNOYW1lcywgX2ZpZWxkcywgY3JpdGVyaWFNb2RlLCBzaG91bGRVc2VOYXRpdmVWYWxpZGF0aW9uKSA9PiB7XHJcbiAgICBjb25zdCBmaWVsZHMgPSB7fTtcclxuICAgIGZvciAoY29uc3QgbmFtZSBvZiBmaWVsZHNOYW1lcykge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gZ2V0KF9maWVsZHMsIG5hbWUpO1xyXG4gICAgICAgIGZpZWxkICYmIHNldChmaWVsZHMsIG5hbWUsIGZpZWxkLl9mKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY3JpdGVyaWFNb2RlLFxyXG4gICAgICAgIG5hbWVzOiBbLi4uZmllbGRzTmFtZXNdLFxyXG4gICAgICAgIGZpZWxkcyxcclxuICAgICAgICBzaG91bGRVc2VOYXRpdmVWYWxpZGF0aW9uLFxyXG4gICAgfTtcclxufTtcblxudmFyIGlzUmVnZXggPSAodmFsdWUpID0+IHZhbHVlIGluc3RhbmNlb2YgUmVnRXhwO1xuXG52YXIgZ2V0UnVsZVZhbHVlID0gKHJ1bGUpID0+IGlzVW5kZWZpbmVkKHJ1bGUpXHJcbiAgICA/IHVuZGVmaW5lZFxyXG4gICAgOiBpc1JlZ2V4KHJ1bGUpXHJcbiAgICAgICAgPyBydWxlLnNvdXJjZVxyXG4gICAgICAgIDogaXNPYmplY3QocnVsZSlcclxuICAgICAgICAgICAgPyBpc1JlZ2V4KHJ1bGUudmFsdWUpXHJcbiAgICAgICAgICAgICAgICA/IHJ1bGUudmFsdWUuc291cmNlXHJcbiAgICAgICAgICAgICAgICA6IHJ1bGUudmFsdWVcclxuICAgICAgICAgICAgOiBydWxlO1xuXG52YXIgaGFzVmFsaWRhdGlvbiA9IChvcHRpb25zKSA9PiBvcHRpb25zLm1vdW50ICYmXHJcbiAgICAob3B0aW9ucy5yZXF1aXJlZCB8fFxyXG4gICAgICAgIG9wdGlvbnMubWluIHx8XHJcbiAgICAgICAgb3B0aW9ucy5tYXggfHxcclxuICAgICAgICBvcHRpb25zLm1heExlbmd0aCB8fFxyXG4gICAgICAgIG9wdGlvbnMubWluTGVuZ3RoIHx8XHJcbiAgICAgICAgb3B0aW9ucy5wYXR0ZXJuIHx8XHJcbiAgICAgICAgb3B0aW9ucy52YWxpZGF0ZSk7XG5cbmZ1bmN0aW9uIHNjaGVtYUVycm9yTG9va3VwKGVycm9ycywgX2ZpZWxkcywgbmFtZSkge1xyXG4gICAgY29uc3QgZXJyb3IgPSBnZXQoZXJyb3JzLCBuYW1lKTtcclxuICAgIGlmIChlcnJvciB8fCBpc0tleShuYW1lKSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGVycm9yLFxyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb25zdCBuYW1lcyA9IG5hbWUuc3BsaXQoJy4nKTtcclxuICAgIHdoaWxlIChuYW1lcy5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSBuYW1lcy5qb2luKCcuJyk7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSBnZXQoX2ZpZWxkcywgZmllbGROYW1lKTtcclxuICAgICAgICBjb25zdCBmb3VuZEVycm9yID0gZ2V0KGVycm9ycywgZmllbGROYW1lKTtcclxuICAgICAgICBpZiAoZmllbGQgJiYgIUFycmF5LmlzQXJyYXkoZmllbGQpICYmIG5hbWUgIT09IGZpZWxkTmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBuYW1lIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmb3VuZEVycm9yICYmIGZvdW5kRXJyb3IudHlwZSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogZmllbGROYW1lLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZvdW5kRXJyb3IsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5hbWVzLnBvcCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgfTtcclxufVxuXG52YXIgc2tpcFZhbGlkYXRpb24gPSAoaXNCbHVyRXZlbnQsIGlzVG91Y2hlZCwgaXNTdWJtaXR0ZWQsIHJlVmFsaWRhdGVNb2RlLCBtb2RlKSA9PiB7XHJcbiAgICBpZiAobW9kZS5pc09uQWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIWlzU3VibWl0dGVkICYmIG1vZGUuaXNPblRvdWNoKSB7XHJcbiAgICAgICAgcmV0dXJuICEoaXNUb3VjaGVkIHx8IGlzQmx1ckV2ZW50KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzU3VibWl0dGVkID8gcmVWYWxpZGF0ZU1vZGUuaXNPbkJsdXIgOiBtb2RlLmlzT25CbHVyKSB7XHJcbiAgICAgICAgcmV0dXJuICFpc0JsdXJFdmVudDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzU3VibWl0dGVkID8gcmVWYWxpZGF0ZU1vZGUuaXNPbkNoYW5nZSA6IG1vZGUuaXNPbkNoYW5nZSkge1xyXG4gICAgICAgIHJldHVybiBpc0JsdXJFdmVudDtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59O1xuXG52YXIgdW5zZXRFbXB0eUFycmF5ID0gKHJlZiwgbmFtZSkgPT4gIWNvbXBhY3QoZ2V0KHJlZiwgbmFtZSkpLmxlbmd0aCAmJiB1bnNldChyZWYsIG5hbWUpO1xuXG52YXIgaXNNZXNzYWdlID0gKHZhbHVlKSA9PiBpc1N0cmluZyh2YWx1ZSkgfHwgUmVhY3QuaXNWYWxpZEVsZW1lbnQodmFsdWUpO1xuXG5mdW5jdGlvbiBnZXRWYWxpZGF0ZUVycm9yKHJlc3VsdCwgcmVmLCB0eXBlID0gJ3ZhbGlkYXRlJykge1xyXG4gICAgaWYgKGlzTWVzc2FnZShyZXN1bHQpIHx8XHJcbiAgICAgICAgKEFycmF5LmlzQXJyYXkocmVzdWx0KSAmJiByZXN1bHQuZXZlcnkoaXNNZXNzYWdlKSkgfHxcclxuICAgICAgICAoaXNCb29sZWFuKHJlc3VsdCkgJiYgIXJlc3VsdCkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBpc01lc3NhZ2UocmVzdWx0KSA/IHJlc3VsdCA6ICcnLFxyXG4gICAgICAgICAgICByZWYsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxuXG52YXIgZ2V0VmFsdWVBbmRNZXNzYWdlID0gKHZhbGlkYXRpb25EYXRhKSA9PiBpc09iamVjdCh2YWxpZGF0aW9uRGF0YSkgJiYgIWlzUmVnZXgodmFsaWRhdGlvbkRhdGEpXHJcbiAgICA/IHZhbGlkYXRpb25EYXRhXHJcbiAgICA6IHtcclxuICAgICAgICB2YWx1ZTogdmFsaWRhdGlvbkRhdGEsXHJcbiAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICB9O1xuXG52YXIgdmFsaWRhdGVGaWVsZCA9IGFzeW5jIChmaWVsZCwgaW5wdXRWYWx1ZSwgdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhLCBzaG91bGRVc2VOYXRpdmVWYWxpZGF0aW9uKSA9PiB7XHJcbiAgICBjb25zdCB7IHJlZiwgcmVmcywgcmVxdWlyZWQsIG1heExlbmd0aCwgbWluTGVuZ3RoLCBtaW4sIG1heCwgcGF0dGVybiwgdmFsaWRhdGUsIG5hbWUsIHZhbHVlQXNOdW1iZXIsIG1vdW50LCBkaXNhYmxlZCwgfSA9IGZpZWxkLl9mO1xyXG4gICAgaWYgKCFtb3VudCB8fCBkaXNhYmxlZCkge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxuICAgIGNvbnN0IGlucHV0UmVmID0gcmVmcyA/IHJlZnNbMF0gOiByZWY7XHJcbiAgICBjb25zdCBzZXRDdXN0b21WYWxpZGl0eSA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgaWYgKHNob3VsZFVzZU5hdGl2ZVZhbGlkYXRpb24gJiYgaW5wdXRSZWYucmVwb3J0VmFsaWRpdHkpIHtcclxuICAgICAgICAgICAgaW5wdXRSZWYuc2V0Q3VzdG9tVmFsaWRpdHkoaXNCb29sZWFuKG1lc3NhZ2UpID8gJycgOiBtZXNzYWdlIHx8ICcgJyk7XHJcbiAgICAgICAgICAgIGlucHV0UmVmLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGVycm9yID0ge307XHJcbiAgICBjb25zdCBpc1JhZGlvID0gaXNSYWRpb0lucHV0KHJlZik7XHJcbiAgICBjb25zdCBpc0NoZWNrQm94ID0gaXNDaGVja0JveElucHV0KHJlZik7XHJcbiAgICBjb25zdCBpc1JhZGlvT3JDaGVja2JveCA9IGlzUmFkaW8gfHwgaXNDaGVja0JveDtcclxuICAgIGNvbnN0IGlzRW1wdHkgPSAoKHZhbHVlQXNOdW1iZXIgfHwgaXNGaWxlSW5wdXQocmVmKSkgJiYgIXJlZi52YWx1ZSkgfHxcclxuICAgICAgICBpbnB1dFZhbHVlID09PSAnJyB8fFxyXG4gICAgICAgIChBcnJheS5pc0FycmF5KGlucHV0VmFsdWUpICYmICFpbnB1dFZhbHVlLmxlbmd0aCk7XHJcbiAgICBjb25zdCBhcHBlbmRFcnJvcnNDdXJyeSA9IGFwcGVuZEVycm9ycy5iaW5kKG51bGwsIG5hbWUsIHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSwgZXJyb3IpO1xyXG4gICAgY29uc3QgZ2V0TWluTWF4TWVzc2FnZSA9IChleGNlZWRNYXgsIG1heExlbmd0aE1lc3NhZ2UsIG1pbkxlbmd0aE1lc3NhZ2UsIG1heFR5cGUgPSBJTlBVVF9WQUxJREFUSU9OX1JVTEVTLm1heExlbmd0aCwgbWluVHlwZSA9IElOUFVUX1ZBTElEQVRJT05fUlVMRVMubWluTGVuZ3RoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGV4Y2VlZE1heCA/IG1heExlbmd0aE1lc3NhZ2UgOiBtaW5MZW5ndGhNZXNzYWdlO1xyXG4gICAgICAgIGVycm9yW25hbWVdID0gT2JqZWN0LmFzc2lnbih7IHR5cGU6IGV4Y2VlZE1heCA/IG1heFR5cGUgOiBtaW5UeXBlLCBtZXNzYWdlLFxyXG4gICAgICAgICAgICByZWYgfSwgYXBwZW5kRXJyb3JzQ3VycnkoZXhjZWVkTWF4ID8gbWF4VHlwZSA6IG1pblR5cGUsIG1lc3NhZ2UpKTtcclxuICAgIH07XHJcbiAgICBpZiAocmVxdWlyZWQgJiZcclxuICAgICAgICAoKCFpc1JhZGlvT3JDaGVja2JveCAmJiAoaXNFbXB0eSB8fCBpc051bGxPclVuZGVmaW5lZChpbnB1dFZhbHVlKSkpIHx8XHJcbiAgICAgICAgICAgIChpc0Jvb2xlYW4oaW5wdXRWYWx1ZSkgJiYgIWlucHV0VmFsdWUpIHx8XHJcbiAgICAgICAgICAgIChpc0NoZWNrQm94ICYmICFnZXRDaGVja2JveFZhbHVlKHJlZnMpLmlzVmFsaWQpIHx8XHJcbiAgICAgICAgICAgIChpc1JhZGlvICYmICFnZXRSYWRpb1ZhbHVlKHJlZnMpLmlzVmFsaWQpKSkge1xyXG4gICAgICAgIGNvbnN0IHsgdmFsdWUsIG1lc3NhZ2UgfSA9IGlzTWVzc2FnZShyZXF1aXJlZClcclxuICAgICAgICAgICAgPyB7IHZhbHVlOiAhIXJlcXVpcmVkLCBtZXNzYWdlOiByZXF1aXJlZCB9XHJcbiAgICAgICAgICAgIDogZ2V0VmFsdWVBbmRNZXNzYWdlKHJlcXVpcmVkKTtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgZXJyb3JbbmFtZV0gPSBPYmplY3QuYXNzaWduKHsgdHlwZTogSU5QVVRfVkFMSURBVElPTl9SVUxFUy5yZXF1aXJlZCwgbWVzc2FnZSwgcmVmOiBpbnB1dFJlZiB9LCBhcHBlbmRFcnJvcnNDdXJyeShJTlBVVF9WQUxJREFUSU9OX1JVTEVTLnJlcXVpcmVkLCBtZXNzYWdlKSk7XHJcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXN0b21WYWxpZGl0eShtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghaXNFbXB0eSAmJiAoIWlzTnVsbE9yVW5kZWZpbmVkKG1pbikgfHwgIWlzTnVsbE9yVW5kZWZpbmVkKG1heCkpKSB7XHJcbiAgICAgICAgbGV0IGV4Y2VlZE1heDtcclxuICAgICAgICBsZXQgZXhjZWVkTWluO1xyXG4gICAgICAgIGNvbnN0IG1heE91dHB1dCA9IGdldFZhbHVlQW5kTWVzc2FnZShtYXgpO1xyXG4gICAgICAgIGNvbnN0IG1pbk91dHB1dCA9IGdldFZhbHVlQW5kTWVzc2FnZShtaW4pO1xyXG4gICAgICAgIGlmICghaXNOYU4oaW5wdXRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVOdW1iZXIgPSByZWYudmFsdWVBc051bWJlciB8fCAraW5wdXRWYWx1ZTtcclxuICAgICAgICAgICAgaWYgKCFpc051bGxPclVuZGVmaW5lZChtYXhPdXRwdXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBleGNlZWRNYXggPSB2YWx1ZU51bWJlciA+IG1heE91dHB1dC52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKG1pbk91dHB1dC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGV4Y2VlZE1pbiA9IHZhbHVlTnVtYmVyIDwgbWluT3V0cHV0LnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZURhdGUgPSByZWYudmFsdWVBc0RhdGUgfHwgbmV3IERhdGUoaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgIGlmIChpc1N0cmluZyhtYXhPdXRwdXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBleGNlZWRNYXggPSB2YWx1ZURhdGUgPiBuZXcgRGF0ZShtYXhPdXRwdXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc1N0cmluZyhtaW5PdXRwdXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBleGNlZWRNaW4gPSB2YWx1ZURhdGUgPCBuZXcgRGF0ZShtaW5PdXRwdXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChleGNlZWRNYXggfHwgZXhjZWVkTWluKSB7XHJcbiAgICAgICAgICAgIGdldE1pbk1heE1lc3NhZ2UoISFleGNlZWRNYXgsIG1heE91dHB1dC5tZXNzYWdlLCBtaW5PdXRwdXQubWVzc2FnZSwgSU5QVVRfVkFMSURBVElPTl9SVUxFUy5tYXgsIElOUFVUX1ZBTElEQVRJT05fUlVMRVMubWluKTtcclxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEpIHtcclxuICAgICAgICAgICAgICAgIHNldEN1c3RvbVZhbGlkaXR5KGVycm9yW25hbWVdLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKChtYXhMZW5ndGggfHwgbWluTGVuZ3RoKSAmJiAhaXNFbXB0eSAmJiBpc1N0cmluZyhpbnB1dFZhbHVlKSkge1xyXG4gICAgICAgIGNvbnN0IG1heExlbmd0aE91dHB1dCA9IGdldFZhbHVlQW5kTWVzc2FnZShtYXhMZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IG1pbkxlbmd0aE91dHB1dCA9IGdldFZhbHVlQW5kTWVzc2FnZShtaW5MZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IGV4Y2VlZE1heCA9ICFpc051bGxPclVuZGVmaW5lZChtYXhMZW5ndGhPdXRwdXQudmFsdWUpICYmXHJcbiAgICAgICAgICAgIGlucHV0VmFsdWUubGVuZ3RoID4gbWF4TGVuZ3RoT3V0cHV0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGV4Y2VlZE1pbiA9ICFpc051bGxPclVuZGVmaW5lZChtaW5MZW5ndGhPdXRwdXQudmFsdWUpICYmXHJcbiAgICAgICAgICAgIGlucHV0VmFsdWUubGVuZ3RoIDwgbWluTGVuZ3RoT3V0cHV0LnZhbHVlO1xyXG4gICAgICAgIGlmIChleGNlZWRNYXggfHwgZXhjZWVkTWluKSB7XHJcbiAgICAgICAgICAgIGdldE1pbk1heE1lc3NhZ2UoZXhjZWVkTWF4LCBtYXhMZW5ndGhPdXRwdXQubWVzc2FnZSwgbWluTGVuZ3RoT3V0cHV0Lm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VzdG9tVmFsaWRpdHkoZXJyb3JbbmFtZV0ubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAocGF0dGVybiAmJiAhaXNFbXB0eSAmJiBpc1N0cmluZyhpbnB1dFZhbHVlKSkge1xyXG4gICAgICAgIGNvbnN0IHsgdmFsdWU6IHBhdHRlcm5WYWx1ZSwgbWVzc2FnZSB9ID0gZ2V0VmFsdWVBbmRNZXNzYWdlKHBhdHRlcm4pO1xyXG4gICAgICAgIGlmIChpc1JlZ2V4KHBhdHRlcm5WYWx1ZSkgJiYgIWlucHV0VmFsdWUubWF0Y2gocGF0dGVyblZhbHVlKSkge1xyXG4gICAgICAgICAgICBlcnJvcltuYW1lXSA9IE9iamVjdC5hc3NpZ24oeyB0eXBlOiBJTlBVVF9WQUxJREFUSU9OX1JVTEVTLnBhdHRlcm4sIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICByZWYgfSwgYXBwZW5kRXJyb3JzQ3VycnkoSU5QVVRfVkFMSURBVElPTl9SVUxFUy5wYXR0ZXJuLCBtZXNzYWdlKSk7XHJcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXN0b21WYWxpZGl0eShtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh2YWxpZGF0ZSkge1xyXG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKHZhbGlkYXRlKSkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB2YWxpZGF0ZShpbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgY29uc3QgdmFsaWRhdGVFcnJvciA9IGdldFZhbGlkYXRlRXJyb3IocmVzdWx0LCBpbnB1dFJlZik7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZUVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcltuYW1lXSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdmFsaWRhdGVFcnJvciksIGFwcGVuZEVycm9yc0N1cnJ5KElOUFVUX1ZBTElEQVRJT05fUlVMRVMudmFsaWRhdGUsIHZhbGlkYXRlRXJyb3IubWVzc2FnZSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDdXN0b21WYWxpZGl0eSh2YWxpZGF0ZUVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc09iamVjdCh2YWxpZGF0ZSkpIHtcclxuICAgICAgICAgICAgbGV0IHZhbGlkYXRpb25SZXN1bHQgPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdmFsaWRhdGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghaXNFbXB0eU9iamVjdCh2YWxpZGF0aW9uUmVzdWx0KSAmJiAhdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZGF0ZUVycm9yID0gZ2V0VmFsaWRhdGVFcnJvcihhd2FpdCB2YWxpZGF0ZVtrZXldKGlucHV0VmFsdWUpLCBpbnB1dFJlZiwga2V5KTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZUVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblJlc3VsdCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdmFsaWRhdGVFcnJvciksIGFwcGVuZEVycm9yc0N1cnJ5KGtleSwgdmFsaWRhdGVFcnJvci5tZXNzYWdlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VzdG9tVmFsaWRpdHkodmFsaWRhdGVFcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yW25hbWVdID0gdmFsaWRhdGlvblJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFpc0VtcHR5T2JqZWN0KHZhbGlkYXRpb25SZXN1bHQpKSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcltuYW1lXSA9IE9iamVjdC5hc3NpZ24oeyByZWY6IGlucHV0UmVmIH0sIHZhbGlkYXRpb25SZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRDdXN0b21WYWxpZGl0eSh0cnVlKTtcclxuICAgIHJldHVybiBlcnJvcjtcclxufTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBtb2RlOiBWQUxJREFUSU9OX01PREUub25TdWJtaXQsXHJcbiAgICByZVZhbGlkYXRlTW9kZTogVkFMSURBVElPTl9NT0RFLm9uQ2hhbmdlLFxyXG4gICAgc2hvdWxkRm9jdXNFcnJvcjogdHJ1ZSxcclxufTtcclxuZnVuY3Rpb24gY3JlYXRlRm9ybUNvbnRyb2wocHJvcHMgPSB7fSkge1xyXG4gICAgbGV0IF9vcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucyksIHByb3BzKTtcclxuICAgIGxldCBfZm9ybVN0YXRlID0ge1xyXG4gICAgICAgIGlzRGlydHk6IGZhbHNlLFxyXG4gICAgICAgIGlzVmFsaWRhdGluZzogZmFsc2UsXHJcbiAgICAgICAgZGlydHlGaWVsZHM6IHt9LFxyXG4gICAgICAgIGlzU3VibWl0dGVkOiBmYWxzZSxcclxuICAgICAgICBzdWJtaXRDb3VudDogMCxcclxuICAgICAgICB0b3VjaGVkRmllbGRzOiB7fSxcclxuICAgICAgICBpc1N1Ym1pdHRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGlzU3VibWl0U3VjY2Vzc2Z1bDogZmFsc2UsXHJcbiAgICAgICAgaXNWYWxpZDogZmFsc2UsXHJcbiAgICAgICAgZXJyb3JzOiB7fSxcclxuICAgIH07XHJcbiAgICBsZXQgX2ZpZWxkcyA9IHt9O1xyXG4gICAgbGV0IF9kZWZhdWx0VmFsdWVzID0gX29wdGlvbnMuZGVmYXVsdFZhbHVlcyB8fCB7fTtcclxuICAgIGxldCBfZm9ybVZhbHVlcyA9IF9vcHRpb25zLnNob3VsZFVucmVnaXN0ZXJcclxuICAgICAgICA/IHt9XHJcbiAgICAgICAgOiBjbG9uZU9iamVjdChfZGVmYXVsdFZhbHVlcyk7XHJcbiAgICBsZXQgX3N0YXRlRmxhZ3MgPSB7XHJcbiAgICAgICAgYWN0aW9uOiBmYWxzZSxcclxuICAgICAgICBtb3VudDogZmFsc2UsXHJcbiAgICAgICAgd2F0Y2g6IGZhbHNlLFxyXG4gICAgfTtcclxuICAgIGxldCBfbmFtZXMgPSB7XHJcbiAgICAgICAgbW91bnQ6IG5ldyBTZXQoKSxcclxuICAgICAgICB1bk1vdW50OiBuZXcgU2V0KCksXHJcbiAgICAgICAgYXJyYXk6IG5ldyBTZXQoKSxcclxuICAgICAgICB3YXRjaDogbmV3IFNldCgpLFxyXG4gICAgfTtcclxuICAgIGxldCBkZWxheUVycm9yQ2FsbGJhY2s7XHJcbiAgICBsZXQgdGltZXIgPSAwO1xyXG4gICAgbGV0IHZhbGlkYXRlRmllbGRzID0ge307XHJcbiAgICBjb25zdCBfcHJveHlGb3JtU3RhdGUgPSB7XHJcbiAgICAgICAgaXNEaXJ0eTogZmFsc2UsXHJcbiAgICAgICAgZGlydHlGaWVsZHM6IGZhbHNlLFxyXG4gICAgICAgIHRvdWNoZWRGaWVsZHM6IGZhbHNlLFxyXG4gICAgICAgIGlzVmFsaWRhdGluZzogZmFsc2UsXHJcbiAgICAgICAgaXNWYWxpZDogZmFsc2UsXHJcbiAgICAgICAgZXJyb3JzOiBmYWxzZSxcclxuICAgIH07XHJcbiAgICBjb25zdCBfc3ViamVjdHMgPSB7XHJcbiAgICAgICAgd2F0Y2g6IGNyZWF0ZVN1YmplY3QoKSxcclxuICAgICAgICBhcnJheTogY3JlYXRlU3ViamVjdCgpLFxyXG4gICAgICAgIHN0YXRlOiBjcmVhdGVTdWJqZWN0KCksXHJcbiAgICB9O1xyXG4gICAgY29uc3QgdmFsaWRhdGlvbk1vZGVCZWZvcmVTdWJtaXQgPSBnZXRWYWxpZGF0aW9uTW9kZXMoX29wdGlvbnMubW9kZSk7XHJcbiAgICBjb25zdCB2YWxpZGF0aW9uTW9kZUFmdGVyU3VibWl0ID0gZ2V0VmFsaWRhdGlvbk1vZGVzKF9vcHRpb25zLnJlVmFsaWRhdGVNb2RlKTtcclxuICAgIGNvbnN0IHNob3VsZERpc3BsYXlBbGxBc3NvY2lhdGVkRXJyb3JzID0gX29wdGlvbnMuY3JpdGVyaWFNb2RlID09PSBWQUxJREFUSU9OX01PREUuYWxsO1xyXG4gICAgY29uc3QgZGVib3VuY2UgPSAoY2FsbGJhY2ssIHdhaXQpID0+ICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICB0aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IGNhbGxiYWNrKC4uLmFyZ3MpLCB3YWl0KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBfdXBkYXRlVmFsaWQgPSBhc3luYyAoc2hvdWxkU2tpcFJlbmRlcikgPT4ge1xyXG4gICAgICAgIGxldCBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKF9wcm94eUZvcm1TdGF0ZS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIGlzVmFsaWQgPSBfb3B0aW9ucy5yZXNvbHZlclxyXG4gICAgICAgICAgICAgICAgPyBpc0VtcHR5T2JqZWN0KChhd2FpdCBfZXhlY3V0ZVNjaGVtYSgpKS5lcnJvcnMpXHJcbiAgICAgICAgICAgICAgICA6IGF3YWl0IGV4ZWN1dGVCdWlsZEluVmFsaWRhdGlvbihfZmllbGRzLCB0cnVlKTtcclxuICAgICAgICAgICAgaWYgKCFzaG91bGRTa2lwUmVuZGVyICYmIGlzVmFsaWQgIT09IF9mb3JtU3RhdGUuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgX2Zvcm1TdGF0ZS5pc1ZhbGlkID0gaXNWYWxpZDtcclxuICAgICAgICAgICAgICAgIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KHtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgX3VwZGF0ZUZpZWxkQXJyYXkgPSAobmFtZSwgdmFsdWVzID0gW10sIG1ldGhvZCwgYXJncywgc2hvdWxkU2V0VmFsdWVzID0gdHJ1ZSwgc2hvdWxkVXBkYXRlRmllbGRzQW5kRXJyb3JzID0gdHJ1ZSkgPT4ge1xyXG4gICAgICAgIGlmIChhcmdzICYmIG1ldGhvZCkge1xyXG4gICAgICAgICAgICBfc3RhdGVGbGFncy5hY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoc2hvdWxkVXBkYXRlRmllbGRzQW5kRXJyb3JzICYmIEFycmF5LmlzQXJyYXkoZ2V0KF9maWVsZHMsIG5hbWUpKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGRWYWx1ZXMgPSBtZXRob2QoZ2V0KF9maWVsZHMsIG5hbWUpLCBhcmdzLmFyZ0EsIGFyZ3MuYXJnQik7XHJcbiAgICAgICAgICAgICAgICBzaG91bGRTZXRWYWx1ZXMgJiYgc2V0KF9maWVsZHMsIG5hbWUsIGZpZWxkVmFsdWVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX3Byb3h5Rm9ybVN0YXRlLmVycm9ycyAmJlxyXG4gICAgICAgICAgICAgICAgc2hvdWxkVXBkYXRlRmllbGRzQW5kRXJyb3JzICYmXHJcbiAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KGdldChfZm9ybVN0YXRlLmVycm9ycywgbmFtZSkpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvcnMgPSBtZXRob2QoZ2V0KF9mb3JtU3RhdGUuZXJyb3JzLCBuYW1lKSwgYXJncy5hcmdBLCBhcmdzLmFyZ0IpO1xyXG4gICAgICAgICAgICAgICAgc2hvdWxkU2V0VmFsdWVzICYmIHNldChfZm9ybVN0YXRlLmVycm9ycywgbmFtZSwgZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgIHVuc2V0RW1wdHlBcnJheShfZm9ybVN0YXRlLmVycm9ycywgbmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF9wcm94eUZvcm1TdGF0ZS50b3VjaGVkRmllbGRzICYmXHJcbiAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KGdldChfZm9ybVN0YXRlLnRvdWNoZWRGaWVsZHMsIG5hbWUpKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG91Y2hlZEZpZWxkcyA9IG1ldGhvZChnZXQoX2Zvcm1TdGF0ZS50b3VjaGVkRmllbGRzLCBuYW1lKSwgYXJncy5hcmdBLCBhcmdzLmFyZ0IpO1xyXG4gICAgICAgICAgICAgICAgc2hvdWxkU2V0VmFsdWVzICYmIHNldChfZm9ybVN0YXRlLnRvdWNoZWRGaWVsZHMsIG5hbWUsIHRvdWNoZWRGaWVsZHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfcHJveHlGb3JtU3RhdGUuZGlydHlGaWVsZHMpIHtcclxuICAgICAgICAgICAgICAgIF9mb3JtU3RhdGUuZGlydHlGaWVsZHMgPSBnZXREaXJ0eUZpZWxkcyhfZGVmYXVsdFZhbHVlcywgX2Zvcm1WYWx1ZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KHtcclxuICAgICAgICAgICAgICAgIGlzRGlydHk6IF9nZXREaXJ0eShuYW1lLCB2YWx1ZXMpLFxyXG4gICAgICAgICAgICAgICAgZGlydHlGaWVsZHM6IF9mb3JtU3RhdGUuZGlydHlGaWVsZHMsXHJcbiAgICAgICAgICAgICAgICBlcnJvcnM6IF9mb3JtU3RhdGUuZXJyb3JzLFxyXG4gICAgICAgICAgICAgICAgaXNWYWxpZDogX2Zvcm1TdGF0ZS5pc1ZhbGlkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldChfZm9ybVZhbHVlcywgbmFtZSwgdmFsdWVzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgdXBkYXRlRXJyb3JzID0gKG5hbWUsIGVycm9yKSA9PiAoc2V0KF9mb3JtU3RhdGUuZXJyb3JzLCBuYW1lLCBlcnJvciksXHJcbiAgICAgICAgX3N1YmplY3RzLnN0YXRlLm5leHQoe1xyXG4gICAgICAgICAgICBlcnJvcnM6IF9mb3JtU3RhdGUuZXJyb3JzLFxyXG4gICAgICAgIH0pKTtcclxuICAgIGNvbnN0IHVwZGF0ZVZhbGlkQW5kVmFsdWUgPSAobmFtZSwgc2hvdWxkU2tpcFNldFZhbHVlQXMsIHZhbHVlLCByZWYpID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZCA9IGdldChfZmllbGRzLCBuYW1lKTtcclxuICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlID0gZ2V0KF9mb3JtVmFsdWVzLCBuYW1lLCBpc1VuZGVmaW5lZCh2YWx1ZSkgPyBnZXQoX2RlZmF1bHRWYWx1ZXMsIG5hbWUpIDogdmFsdWUpO1xyXG4gICAgICAgICAgICBpc1VuZGVmaW5lZChkZWZhdWx0VmFsdWUpIHx8XHJcbiAgICAgICAgICAgICAgICAocmVmICYmIHJlZi5kZWZhdWx0Q2hlY2tlZCkgfHxcclxuICAgICAgICAgICAgICAgIHNob3VsZFNraXBTZXRWYWx1ZUFzXHJcbiAgICAgICAgICAgICAgICA/IHNldChfZm9ybVZhbHVlcywgbmFtZSwgc2hvdWxkU2tpcFNldFZhbHVlQXMgPyBkZWZhdWx0VmFsdWUgOiBnZXRGaWVsZFZhbHVlKGZpZWxkLl9mKSlcclxuICAgICAgICAgICAgICAgIDogc2V0RmllbGRWYWx1ZShuYW1lLCBkZWZhdWx0VmFsdWUpO1xyXG4gICAgICAgICAgICBfc3RhdGVGbGFncy5tb3VudCAmJiBfdXBkYXRlVmFsaWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgdXBkYXRlVG91Y2hBbmREaXJ0eSA9IChuYW1lLCBmaWVsZFZhbHVlLCBpc0JsdXJFdmVudCwgc2hvdWxkRGlydHksIHNob3VsZFJlbmRlcikgPT4ge1xyXG4gICAgICAgIGxldCBpc0ZpZWxkRGlydHkgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBvdXRwdXQgPSB7XHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBpc1ByZXZpb3VzRmllbGRUb3VjaGVkID0gZ2V0KF9mb3JtU3RhdGUudG91Y2hlZEZpZWxkcywgbmFtZSk7XHJcbiAgICAgICAgaWYgKF9wcm94eUZvcm1TdGF0ZS5pc0RpcnR5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzUHJldmlvdXNGb3JtRGlydHkgPSBfZm9ybVN0YXRlLmlzRGlydHk7XHJcbiAgICAgICAgICAgIF9mb3JtU3RhdGUuaXNEaXJ0eSA9IG91dHB1dC5pc0RpcnR5ID0gX2dldERpcnR5KCk7XHJcbiAgICAgICAgICAgIGlzRmllbGREaXJ0eSA9IGlzUHJldmlvdXNGb3JtRGlydHkgIT09IG91dHB1dC5pc0RpcnR5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoX3Byb3h5Rm9ybVN0YXRlLmRpcnR5RmllbGRzICYmICghaXNCbHVyRXZlbnQgfHwgc2hvdWxkRGlydHkpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzUHJldmlvdXNGaWVsZERpcnR5ID0gZ2V0KF9mb3JtU3RhdGUuZGlydHlGaWVsZHMsIG5hbWUpO1xyXG4gICAgICAgICAgICBjb25zdCBpc0N1cnJlbnRGaWVsZFByaXN0aW5lID0gZGVlcEVxdWFsKGdldChfZGVmYXVsdFZhbHVlcywgbmFtZSksIGZpZWxkVmFsdWUpO1xyXG4gICAgICAgICAgICBpc0N1cnJlbnRGaWVsZFByaXN0aW5lXHJcbiAgICAgICAgICAgICAgICA/IHVuc2V0KF9mb3JtU3RhdGUuZGlydHlGaWVsZHMsIG5hbWUpXHJcbiAgICAgICAgICAgICAgICA6IHNldChfZm9ybVN0YXRlLmRpcnR5RmllbGRzLCBuYW1lLCB0cnVlKTtcclxuICAgICAgICAgICAgb3V0cHV0LmRpcnR5RmllbGRzID0gX2Zvcm1TdGF0ZS5kaXJ0eUZpZWxkcztcclxuICAgICAgICAgICAgaXNGaWVsZERpcnR5ID1cclxuICAgICAgICAgICAgICAgIGlzRmllbGREaXJ0eSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGlzUHJldmlvdXNGaWVsZERpcnR5ICE9PSBnZXQoX2Zvcm1TdGF0ZS5kaXJ0eUZpZWxkcywgbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0JsdXJFdmVudCAmJiAhaXNQcmV2aW91c0ZpZWxkVG91Y2hlZCkge1xyXG4gICAgICAgICAgICBzZXQoX2Zvcm1TdGF0ZS50b3VjaGVkRmllbGRzLCBuYW1lLCBpc0JsdXJFdmVudCk7XHJcbiAgICAgICAgICAgIG91dHB1dC50b3VjaGVkRmllbGRzID0gX2Zvcm1TdGF0ZS50b3VjaGVkRmllbGRzO1xyXG4gICAgICAgICAgICBpc0ZpZWxkRGlydHkgPVxyXG4gICAgICAgICAgICAgICAgaXNGaWVsZERpcnR5IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKF9wcm94eUZvcm1TdGF0ZS50b3VjaGVkRmllbGRzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzUHJldmlvdXNGaWVsZFRvdWNoZWQgIT09IGlzQmx1ckV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXNGaWVsZERpcnR5ICYmIHNob3VsZFJlbmRlciAmJiBfc3ViamVjdHMuc3RhdGUubmV4dChvdXRwdXQpO1xyXG4gICAgICAgIHJldHVybiBpc0ZpZWxkRGlydHkgPyBvdXRwdXQgOiB7fTtcclxuICAgIH07XHJcbiAgICBjb25zdCBzaG91bGRSZW5kZXJCeUVycm9yID0gYXN5bmMgKHNob3VsZFNraXBSZW5kZXIsIG5hbWUsIGlzVmFsaWQsIGVycm9yLCBmaWVsZFN0YXRlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNGaWVsZEVycm9yID0gZ2V0KF9mb3JtU3RhdGUuZXJyb3JzLCBuYW1lKTtcclxuICAgICAgICBjb25zdCBzaG91bGRVcGRhdGVWYWxpZCA9IF9wcm94eUZvcm1TdGF0ZS5pc1ZhbGlkICYmIF9mb3JtU3RhdGUuaXNWYWxpZCAhPT0gaXNWYWxpZDtcclxuICAgICAgICBpZiAocHJvcHMuZGVsYXlFcnJvciAmJiBlcnJvcikge1xyXG4gICAgICAgICAgICBkZWxheUVycm9yQ2FsbGJhY2sgPVxyXG4gICAgICAgICAgICAgICAgZGVsYXlFcnJvckNhbGxiYWNrIHx8IGRlYm91bmNlKHVwZGF0ZUVycm9ycywgcHJvcHMuZGVsYXlFcnJvcik7XHJcbiAgICAgICAgICAgIGRlbGF5RXJyb3JDYWxsYmFjayhuYW1lLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgICAgICBlcnJvclxyXG4gICAgICAgICAgICAgICAgPyBzZXQoX2Zvcm1TdGF0ZS5lcnJvcnMsIG5hbWUsIGVycm9yKVxyXG4gICAgICAgICAgICAgICAgOiB1bnNldChfZm9ybVN0YXRlLmVycm9ycywgbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgoKGVycm9yID8gIWRlZXBFcXVhbChwcmV2aW91c0ZpZWxkRXJyb3IsIGVycm9yKSA6IHByZXZpb3VzRmllbGRFcnJvcikgfHxcclxuICAgICAgICAgICAgIWlzRW1wdHlPYmplY3QoZmllbGRTdGF0ZSkgfHxcclxuICAgICAgICAgICAgc2hvdWxkVXBkYXRlVmFsaWQpICYmXHJcbiAgICAgICAgICAgICFzaG91bGRTa2lwUmVuZGVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRGb3JtU3RhdGUgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZmllbGRTdGF0ZSksIChzaG91bGRVcGRhdGVWYWxpZCA/IHsgaXNWYWxpZCB9IDoge30pKSwgeyBlcnJvcnM6IF9mb3JtU3RhdGUuZXJyb3JzLCBuYW1lIH0pO1xyXG4gICAgICAgICAgICBfZm9ybVN0YXRlID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBfZm9ybVN0YXRlKSwgdXBkYXRlZEZvcm1TdGF0ZSk7XHJcbiAgICAgICAgICAgIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KHVwZGF0ZWRGb3JtU3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YWxpZGF0ZUZpZWxkc1tuYW1lXS0tO1xyXG4gICAgICAgIGlmIChfcHJveHlGb3JtU3RhdGUuaXNWYWxpZGF0aW5nICYmXHJcbiAgICAgICAgICAgICFPYmplY3QudmFsdWVzKHZhbGlkYXRlRmllbGRzKS5zb21lKCh2KSA9PiB2KSkge1xyXG4gICAgICAgICAgICBfc3ViamVjdHMuc3RhdGUubmV4dCh7XHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkYXRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFsaWRhdGVGaWVsZHMgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgX2V4ZWN1dGVTY2hlbWEgPSBhc3luYyAobmFtZSkgPT4gX29wdGlvbnMucmVzb2x2ZXJcclxuICAgICAgICA/IGF3YWl0IF9vcHRpb25zLnJlc29sdmVyKE9iamVjdC5hc3NpZ24oe30sIF9mb3JtVmFsdWVzKSwgX29wdGlvbnMuY29udGV4dCwgZ2V0UmVzb2x2ZXJPcHRpb25zKG5hbWUgfHwgX25hbWVzLm1vdW50LCBfZmllbGRzLCBfb3B0aW9ucy5jcml0ZXJpYU1vZGUsIF9vcHRpb25zLnNob3VsZFVzZU5hdGl2ZVZhbGlkYXRpb24pKVxyXG4gICAgICAgIDoge307XHJcbiAgICBjb25zdCBleGVjdXRlU2NoZW1hQW5kVXBkYXRlU3RhdGUgPSBhc3luYyAobmFtZXMpID0+IHtcclxuICAgICAgICBjb25zdCB7IGVycm9ycyB9ID0gYXdhaXQgX2V4ZWN1dGVTY2hlbWEoKTtcclxuICAgICAgICBpZiAobmFtZXMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIG5hbWVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IGdldChlcnJvcnMsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICA/IHNldChfZm9ybVN0YXRlLmVycm9ycywgbmFtZSwgZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgOiB1bnNldChfZm9ybVN0YXRlLmVycm9ycywgbmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIF9mb3JtU3RhdGUuZXJyb3JzID0gZXJyb3JzO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXJyb3JzO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGV4ZWN1dGVCdWlsZEluVmFsaWRhdGlvbiA9IGFzeW5jIChmaWVsZHMsIHNob3VsZE9ubHlDaGVja1ZhbGlkLCBjb250ZXh0ID0ge1xyXG4gICAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgfSkgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBpbiBmaWVsZHMpIHtcclxuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNbbmFtZV07XHJcbiAgICAgICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGRSZWZlcmVuY2UgPSBmaWVsZC5fZjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkVmFsdWUgPSBvbWl0KGZpZWxkLCAnX2YnKTtcclxuICAgICAgICAgICAgICAgIGlmIChmaWVsZFJlZmVyZW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkRXJyb3IgPSBhd2FpdCB2YWxpZGF0ZUZpZWxkKGZpZWxkLCBnZXQoX2Zvcm1WYWx1ZXMsIGZpZWxkUmVmZXJlbmNlLm5hbWUpLCBzaG91bGREaXNwbGF5QWxsQXNzb2NpYXRlZEVycm9ycywgX29wdGlvbnMuc2hvdWxkVXNlTmF0aXZlVmFsaWRhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkRXJyb3JbZmllbGRSZWZlcmVuY2UubmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC52YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkT25seUNoZWNrVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc2hvdWxkT25seUNoZWNrVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRFcnJvcltmaWVsZFJlZmVyZW5jZS5uYW1lXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzZXQoX2Zvcm1TdGF0ZS5lcnJvcnMsIGZpZWxkUmVmZXJlbmNlLm5hbWUsIGZpZWxkRXJyb3JbZmllbGRSZWZlcmVuY2UubmFtZV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHVuc2V0KF9mb3JtU3RhdGUuZXJyb3JzLCBmaWVsZFJlZmVyZW5jZS5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmaWVsZFZhbHVlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKGF3YWl0IGV4ZWN1dGVCdWlsZEluVmFsaWRhdGlvbihmaWVsZFZhbHVlLCBzaG91bGRPbmx5Q2hlY2tWYWxpZCwgY29udGV4dCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb250ZXh0LnZhbGlkO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IF9yZW1vdmVVbm1vdW50ZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIF9uYW1lcy51bk1vdW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZ2V0KF9maWVsZHMsIG5hbWUpO1xyXG4gICAgICAgICAgICBmaWVsZCAmJlxyXG4gICAgICAgICAgICAgICAgKGZpZWxkLl9mLnJlZnNcclxuICAgICAgICAgICAgICAgICAgICA/IGZpZWxkLl9mLnJlZnMuZXZlcnkoKHJlZikgPT4gIWxpdmUocmVmKSlcclxuICAgICAgICAgICAgICAgICAgICA6ICFsaXZlKGZpZWxkLl9mLnJlZikpICYmXHJcbiAgICAgICAgICAgICAgICB1bnJlZ2lzdGVyKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfbmFtZXMudW5Nb3VudCA9IG5ldyBTZXQoKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBfZ2V0RGlydHkgPSAobmFtZSwgZGF0YSkgPT4gKG5hbWUgJiYgZGF0YSAmJiBzZXQoX2Zvcm1WYWx1ZXMsIG5hbWUsIGRhdGEpLFxyXG4gICAgICAgICFkZWVwRXF1YWwoZ2V0VmFsdWVzKCksIF9kZWZhdWx0VmFsdWVzKSk7XHJcbiAgICBjb25zdCBfZ2V0V2F0Y2ggPSAobmFtZXMsIGRlZmF1bHRWYWx1ZSwgaXNHbG9iYWwpID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZFZhbHVlcyA9IE9iamVjdC5hc3NpZ24oe30sIChfc3RhdGVGbGFncy5tb3VudFxyXG4gICAgICAgICAgICA/IF9mb3JtVmFsdWVzXHJcbiAgICAgICAgICAgIDogaXNVbmRlZmluZWQoZGVmYXVsdFZhbHVlKVxyXG4gICAgICAgICAgICAgICAgPyBfZGVmYXVsdFZhbHVlc1xyXG4gICAgICAgICAgICAgICAgOiBpc1N0cmluZyhuYW1lcylcclxuICAgICAgICAgICAgICAgICAgICA/IHsgW25hbWVzXTogZGVmYXVsdFZhbHVlIH1cclxuICAgICAgICAgICAgICAgICAgICA6IGRlZmF1bHRWYWx1ZSkpO1xyXG4gICAgICAgIHJldHVybiBnZW5lcmF0ZVdhdGNoT3V0cHV0KG5hbWVzLCBfbmFtZXMsIGZpZWxkVmFsdWVzLCBpc0dsb2JhbCk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgX2dldEZpZWxkQXJyYXkgPSAobmFtZSkgPT4gY29tcGFjdChnZXQoX3N0YXRlRmxhZ3MubW91bnQgPyBfZm9ybVZhbHVlcyA6IF9kZWZhdWx0VmFsdWVzLCBuYW1lLCBwcm9wcy5zaG91bGRVbnJlZ2lzdGVyID8gZ2V0KF9kZWZhdWx0VmFsdWVzLCBuYW1lLCBbXSkgOiBbXSkpO1xyXG4gICAgY29uc3Qgc2V0RmllbGRWYWx1ZSA9IChuYW1lLCB2YWx1ZSwgb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSBnZXQoX2ZpZWxkcywgbmFtZSk7XHJcbiAgICAgICAgbGV0IGZpZWxkVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgY29uc3QgZmllbGRSZWZlcmVuY2UgPSBmaWVsZC5fZjtcclxuICAgICAgICAgICAgaWYgKGZpZWxkUmVmZXJlbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAhZmllbGRSZWZlcmVuY2UuZGlzYWJsZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICBzZXQoX2Zvcm1WYWx1ZXMsIG5hbWUsIGdldEZpZWxkVmFsdWVBcyh2YWx1ZSwgZmllbGRSZWZlcmVuY2UpKTtcclxuICAgICAgICAgICAgICAgIGZpZWxkVmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgICAgIGlzV2ViICYmIGlzSFRNTEVsZW1lbnQoZmllbGRSZWZlcmVuY2UucmVmKSAmJiBpc051bGxPclVuZGVmaW5lZCh2YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzTXVsdGlwbGVTZWxlY3QoZmllbGRSZWZlcmVuY2UucmVmKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFsuLi5maWVsZFJlZmVyZW5jZS5yZWYub3B0aW9uc10uZm9yRWFjaCgoc2VsZWN0UmVmKSA9PiAoc2VsZWN0UmVmLnNlbGVjdGVkID0gZmllbGRWYWx1ZS5pbmNsdWRlcyhzZWxlY3RSZWYudmFsdWUpKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChmaWVsZFJlZmVyZW5jZS5yZWZzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ2hlY2tCb3hJbnB1dChmaWVsZFJlZmVyZW5jZS5yZWYpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVmZXJlbmNlLnJlZnMubGVuZ3RoID4gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmaWVsZFJlZmVyZW5jZS5yZWZzLmZvckVhY2goKGNoZWNrYm94UmVmKSA9PiAoY2hlY2tib3hSZWYuY2hlY2tlZCA9IEFycmF5LmlzQXJyYXkoZmllbGRWYWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICEhZmllbGRWYWx1ZS5maW5kKChkYXRhKSA9PiBkYXRhID09PSBjaGVja2JveFJlZi52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZpZWxkVmFsdWUgPT09IGNoZWNrYm94UmVmLnZhbHVlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmllbGRSZWZlcmVuY2UucmVmc1swXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmaWVsZFJlZmVyZW5jZS5yZWZzWzBdLmNoZWNrZWQgPSAhIWZpZWxkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZWZlcmVuY2UucmVmcy5mb3JFYWNoKChyYWRpb1JlZikgPT4gKHJhZGlvUmVmLmNoZWNrZWQgPSByYWRpb1JlZi52YWx1ZSA9PT0gZmllbGRWYWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzRmlsZUlucHV0KGZpZWxkUmVmZXJlbmNlLnJlZikpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZFJlZmVyZW5jZS5yZWYudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkUmVmZXJlbmNlLnJlZi52YWx1ZSA9IGZpZWxkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWVsZFJlZmVyZW5jZS5yZWYudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfc3ViamVjdHMud2F0Y2gubmV4dCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgKG9wdGlvbnMuc2hvdWxkRGlydHkgfHwgb3B0aW9ucy5zaG91bGRUb3VjaCkgJiZcclxuICAgICAgICAgICAgdXBkYXRlVG91Y2hBbmREaXJ0eShuYW1lLCBmaWVsZFZhbHVlLCBvcHRpb25zLnNob3VsZFRvdWNoLCBvcHRpb25zLnNob3VsZERpcnR5LCB0cnVlKTtcclxuICAgICAgICBvcHRpb25zLnNob3VsZFZhbGlkYXRlICYmIHRyaWdnZXIobmFtZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc2V0VmFsdWVzID0gKG5hbWUsIHZhbHVlLCBvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBmaWVsZEtleSBpbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZFZhbHVlID0gdmFsdWVbZmllbGRLZXldO1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSBgJHtuYW1lfS4ke2ZpZWxkS2V5fWA7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZ2V0KF9maWVsZHMsIGZpZWxkTmFtZSk7XHJcbiAgICAgICAgICAgIChfbmFtZXMuYXJyYXkuaGFzKG5hbWUpIHx8XHJcbiAgICAgICAgICAgICAgICAhaXNQcmltaXRpdmUoZmllbGRWYWx1ZSkgfHxcclxuICAgICAgICAgICAgICAgIChmaWVsZCAmJiAhZmllbGQuX2YpKSAmJlxyXG4gICAgICAgICAgICAgICAgIWlzRGF0ZU9iamVjdChmaWVsZFZhbHVlKVxyXG4gICAgICAgICAgICAgICAgPyBzZXRWYWx1ZXMoZmllbGROYW1lLCBmaWVsZFZhbHVlLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgOiBzZXRGaWVsZFZhbHVlKGZpZWxkTmFtZSwgZmllbGRWYWx1ZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHNldFZhbHVlID0gKG5hbWUsIHZhbHVlLCBvcHRpb25zID0ge30pID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZCA9IGdldChfZmllbGRzLCBuYW1lKTtcclxuICAgICAgICBjb25zdCBpc0ZpZWxkQXJyYXkgPSBfbmFtZXMuYXJyYXkuaGFzKG5hbWUpO1xyXG4gICAgICAgIGNvbnN0IGNsb25lVmFsdWUgPSBjbG9uZU9iamVjdCh2YWx1ZSk7XHJcbiAgICAgICAgc2V0KF9mb3JtVmFsdWVzLCBuYW1lLCBjbG9uZVZhbHVlKTtcclxuICAgICAgICBpZiAoaXNGaWVsZEFycmF5KSB7XHJcbiAgICAgICAgICAgIF9zdWJqZWN0cy5hcnJheS5uZXh0KHtcclxuICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IF9mb3JtVmFsdWVzLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKChfcHJveHlGb3JtU3RhdGUuaXNEaXJ0eSB8fCBfcHJveHlGb3JtU3RhdGUuZGlydHlGaWVsZHMpICYmXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLnNob3VsZERpcnR5KSB7XHJcbiAgICAgICAgICAgICAgICBfZm9ybVN0YXRlLmRpcnR5RmllbGRzID0gZ2V0RGlydHlGaWVsZHMoX2RlZmF1bHRWYWx1ZXMsIF9mb3JtVmFsdWVzKTtcclxuICAgICAgICAgICAgICAgIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpcnR5RmllbGRzOiBfZm9ybVN0YXRlLmRpcnR5RmllbGRzLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzRGlydHk6IF9nZXREaXJ0eShuYW1lLCBjbG9uZVZhbHVlKSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmaWVsZCAmJiAhZmllbGQuX2YgJiYgIWlzTnVsbE9yVW5kZWZpbmVkKGNsb25lVmFsdWUpXHJcbiAgICAgICAgICAgICAgICA/IHNldFZhbHVlcyhuYW1lLCBjbG9uZVZhbHVlLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgOiBzZXRGaWVsZFZhbHVlKG5hbWUsIGNsb25lVmFsdWUsIG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpc1dhdGNoZWQobmFtZSwgX25hbWVzKSAmJiBfc3ViamVjdHMuc3RhdGUubmV4dCh7fSk7XHJcbiAgICAgICAgX3N1YmplY3RzLndhdGNoLm5leHQoe1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IG9uQ2hhbmdlID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGxldCBuYW1lID0gdGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSBnZXQoX2ZpZWxkcywgbmFtZSk7XHJcbiAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgIGxldCBlcnJvcjtcclxuICAgICAgICAgICAgbGV0IGlzVmFsaWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkVmFsdWUgPSB0YXJnZXQudHlwZVxyXG4gICAgICAgICAgICAgICAgPyBnZXRGaWVsZFZhbHVlKGZpZWxkLl9mKVxyXG4gICAgICAgICAgICAgICAgOiBnZXRFdmVudFZhbHVlKGV2ZW50KTtcclxuICAgICAgICAgICAgY29uc3QgaXNCbHVyRXZlbnQgPSBldmVudC50eXBlID09PSBFVkVOVFMuQkxVUiB8fCBldmVudC50eXBlID09PSBFVkVOVFMuRk9DVVNfT1VUO1xyXG4gICAgICAgICAgICBjb25zdCBzaG91bGRTa2lwVmFsaWRhdGlvbiA9ICghaGFzVmFsaWRhdGlvbihmaWVsZC5fZikgJiZcclxuICAgICAgICAgICAgICAgICFfb3B0aW9ucy5yZXNvbHZlciAmJlxyXG4gICAgICAgICAgICAgICAgIWdldChfZm9ybVN0YXRlLmVycm9ycywgbmFtZSkgJiZcclxuICAgICAgICAgICAgICAgICFmaWVsZC5fZi5kZXBzKSB8fFxyXG4gICAgICAgICAgICAgICAgc2tpcFZhbGlkYXRpb24oaXNCbHVyRXZlbnQsIGdldChfZm9ybVN0YXRlLnRvdWNoZWRGaWVsZHMsIG5hbWUpLCBfZm9ybVN0YXRlLmlzU3VibWl0dGVkLCB2YWxpZGF0aW9uTW9kZUFmdGVyU3VibWl0LCB2YWxpZGF0aW9uTW9kZUJlZm9yZVN1Ym1pdCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdhdGNoZWQgPSBpc1dhdGNoZWQobmFtZSwgX25hbWVzLCBpc0JsdXJFdmVudCk7XHJcbiAgICAgICAgICAgIHNldChfZm9ybVZhbHVlcywgbmFtZSwgZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgIGlmIChpc0JsdXJFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgZmllbGQuX2Yub25CbHVyICYmIGZpZWxkLl9mLm9uQmx1cihldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZmllbGQuX2Yub25DaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkLl9mLm9uQ2hhbmdlKGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBmaWVsZFN0YXRlID0gdXBkYXRlVG91Y2hBbmREaXJ0eShuYW1lLCBmaWVsZFZhbHVlLCBpc0JsdXJFdmVudCwgZmFsc2UpO1xyXG4gICAgICAgICAgICBjb25zdCBzaG91bGRSZW5kZXIgPSAhaXNFbXB0eU9iamVjdChmaWVsZFN0YXRlKSB8fCB3YXRjaGVkO1xyXG4gICAgICAgICAgICAhaXNCbHVyRXZlbnQgJiZcclxuICAgICAgICAgICAgICAgIF9zdWJqZWN0cy53YXRjaC5uZXh0KHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGV2ZW50LnR5cGUsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHNob3VsZFNraXBWYWxpZGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHNob3VsZFJlbmRlciAmJlxyXG4gICAgICAgICAgICAgICAgICAgIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KE9iamVjdC5hc3NpZ24oeyBuYW1lIH0sICh3YXRjaGVkID8ge30gOiBmaWVsZFN0YXRlKSkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAhaXNCbHVyRXZlbnQgJiYgd2F0Y2hlZCAmJiBfc3ViamVjdHMuc3RhdGUubmV4dCh7fSk7XHJcbiAgICAgICAgICAgIHZhbGlkYXRlRmllbGRzW25hbWVdID0gdmFsaWRhdGVGaWVsZHNbbmFtZV0gPyArMSA6IDE7XHJcbiAgICAgICAgICAgIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KHtcclxuICAgICAgICAgICAgICAgIGlzVmFsaWRhdGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChfb3B0aW9ucy5yZXNvbHZlcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBlcnJvcnMgfSA9IGF3YWl0IF9leGVjdXRlU2NoZW1hKFtuYW1lXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c0Vycm9yTG9va3VwUmVzdWx0ID0gc2NoZW1hRXJyb3JMb29rdXAoX2Zvcm1TdGF0ZS5lcnJvcnMsIF9maWVsZHMsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JMb29rdXBSZXN1bHQgPSBzY2hlbWFFcnJvckxvb2t1cChlcnJvcnMsIF9maWVsZHMsIHByZXZpb3VzRXJyb3JMb29rdXBSZXN1bHQubmFtZSB8fCBuYW1lKTtcclxuICAgICAgICAgICAgICAgIGVycm9yID0gZXJyb3JMb29rdXBSZXN1bHQuZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBuYW1lID0gZXJyb3JMb29rdXBSZXN1bHQubmFtZTtcclxuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBpc0VtcHR5T2JqZWN0KGVycm9ycyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvciA9IChhd2FpdCB2YWxpZGF0ZUZpZWxkKGZpZWxkLCBnZXQoX2Zvcm1WYWx1ZXMsIG5hbWUpLCBzaG91bGREaXNwbGF5QWxsQXNzb2NpYXRlZEVycm9ycywgX29wdGlvbnMuc2hvdWxkVXNlTmF0aXZlVmFsaWRhdGlvbikpW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IGF3YWl0IF91cGRhdGVWYWxpZCh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaWVsZC5fZi5kZXBzICYmIHRyaWdnZXIoZmllbGQuX2YuZGVwcyk7XHJcbiAgICAgICAgICAgIHNob3VsZFJlbmRlckJ5RXJyb3IoZmFsc2UsIG5hbWUsIGlzVmFsaWQsIGVycm9yLCBmaWVsZFN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgdHJpZ2dlciA9IGFzeW5jIChuYW1lLCBvcHRpb25zID0ge30pID0+IHtcclxuICAgICAgICBsZXQgaXNWYWxpZDtcclxuICAgICAgICBsZXQgdmFsaWRhdGlvblJlc3VsdDtcclxuICAgICAgICBjb25zdCBmaWVsZE5hbWVzID0gY29udmVydFRvQXJyYXlQYXlsb2FkKG5hbWUpO1xyXG4gICAgICAgIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KHtcclxuICAgICAgICAgICAgaXNWYWxpZGF0aW5nOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChfb3B0aW9ucy5yZXNvbHZlcikge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvcnMgPSBhd2FpdCBleGVjdXRlU2NoZW1hQW5kVXBkYXRlU3RhdGUoaXNVbmRlZmluZWQobmFtZSkgPyBuYW1lIDogZmllbGROYW1lcyk7XHJcbiAgICAgICAgICAgIGlzVmFsaWQgPSBpc0VtcHR5T2JqZWN0KGVycm9ycyk7XHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQgPSBuYW1lXHJcbiAgICAgICAgICAgICAgICA/ICFmaWVsZE5hbWVzLnNvbWUoKG5hbWUpID0+IGdldChlcnJvcnMsIG5hbWUpKVxyXG4gICAgICAgICAgICAgICAgOiBpc1ZhbGlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChuYW1lKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQgPSAoYXdhaXQgUHJvbWlzZS5hbGwoZmllbGROYW1lcy5tYXAoYXN5bmMgKGZpZWxkTmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSBnZXQoX2ZpZWxkcywgZmllbGROYW1lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBleGVjdXRlQnVpbGRJblZhbGlkYXRpb24oZmllbGQgJiYgZmllbGQuX2YgPyB7IFtmaWVsZE5hbWVdOiBmaWVsZCB9IDogZmllbGQpO1xyXG4gICAgICAgICAgICB9KSkpLmV2ZXJ5KEJvb2xlYW4pO1xyXG4gICAgICAgICAgICAhKCF2YWxpZGF0aW9uUmVzdWx0ICYmICFfZm9ybVN0YXRlLmlzVmFsaWQpICYmIF91cGRhdGVWYWxpZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFsaWRhdGlvblJlc3VsdCA9IGlzVmFsaWQgPSBhd2FpdCBleGVjdXRlQnVpbGRJblZhbGlkYXRpb24oX2ZpZWxkcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCAoIWlzU3RyaW5nKG5hbWUpIHx8XHJcbiAgICAgICAgICAgIChfcHJveHlGb3JtU3RhdGUuaXNWYWxpZCAmJiBpc1ZhbGlkICE9PSBfZm9ybVN0YXRlLmlzVmFsaWQpXHJcbiAgICAgICAgICAgID8ge31cclxuICAgICAgICAgICAgOiB7IG5hbWUgfSkpLCAoX29wdGlvbnMucmVzb2x2ZXIgPyB7IGlzVmFsaWQgfSA6IHt9KSksIHsgZXJyb3JzOiBfZm9ybVN0YXRlLmVycm9ycywgaXNWYWxpZGF0aW5nOiBmYWxzZSB9KSk7XHJcbiAgICAgICAgb3B0aW9ucy5zaG91bGRGb2N1cyAmJlxyXG4gICAgICAgICAgICAhdmFsaWRhdGlvblJlc3VsdCAmJlxyXG4gICAgICAgICAgICBmb2N1c0ZpZWxkQnkoX2ZpZWxkcywgKGtleSkgPT4gZ2V0KF9mb3JtU3RhdGUuZXJyb3JzLCBrZXkpLCBuYW1lID8gZmllbGROYW1lcyA6IF9uYW1lcy5tb3VudCk7XHJcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRpb25SZXN1bHQ7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZ2V0VmFsdWVzID0gKGZpZWxkTmFtZXMpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIF9kZWZhdWx0VmFsdWVzKSwgKF9zdGF0ZUZsYWdzLm1vdW50ID8gX2Zvcm1WYWx1ZXMgOiB7fSkpO1xyXG4gICAgICAgIHJldHVybiBpc1VuZGVmaW5lZChmaWVsZE5hbWVzKVxyXG4gICAgICAgICAgICA/IHZhbHVlc1xyXG4gICAgICAgICAgICA6IGlzU3RyaW5nKGZpZWxkTmFtZXMpXHJcbiAgICAgICAgICAgICAgICA/IGdldCh2YWx1ZXMsIGZpZWxkTmFtZXMpXHJcbiAgICAgICAgICAgICAgICA6IGZpZWxkTmFtZXMubWFwKChuYW1lKSA9PiBnZXQodmFsdWVzLCBuYW1lKSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZ2V0RmllbGRTdGF0ZSA9IChuYW1lLCBmb3JtU3RhdGUpID0+ICh7XHJcbiAgICAgICAgaW52YWxpZDogISFnZXQoKGZvcm1TdGF0ZSB8fCBfZm9ybVN0YXRlKS5lcnJvcnMsIG5hbWUpLFxyXG4gICAgICAgIGlzRGlydHk6ICEhZ2V0KChmb3JtU3RhdGUgfHwgX2Zvcm1TdGF0ZSkuZGlydHlGaWVsZHMsIG5hbWUpLFxyXG4gICAgICAgIGlzVG91Y2hlZDogISFnZXQoKGZvcm1TdGF0ZSB8fCBfZm9ybVN0YXRlKS50b3VjaGVkRmllbGRzLCBuYW1lKSxcclxuICAgICAgICBlcnJvcjogZ2V0KChmb3JtU3RhdGUgfHwgX2Zvcm1TdGF0ZSkuZXJyb3JzLCBuYW1lKSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY2xlYXJFcnJvcnMgPSAobmFtZSkgPT4ge1xyXG4gICAgICAgIG5hbWVcclxuICAgICAgICAgICAgPyBjb252ZXJ0VG9BcnJheVBheWxvYWQobmFtZSkuZm9yRWFjaCgoaW5wdXROYW1lKSA9PiB1bnNldChfZm9ybVN0YXRlLmVycm9ycywgaW5wdXROYW1lKSlcclxuICAgICAgICAgICAgOiAoX2Zvcm1TdGF0ZS5lcnJvcnMgPSB7fSk7XHJcbiAgICAgICAgX3N1YmplY3RzLnN0YXRlLm5leHQoe1xyXG4gICAgICAgICAgICBlcnJvcnM6IF9mb3JtU3RhdGUuZXJyb3JzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHNldEVycm9yID0gKG5hbWUsIGVycm9yLCBvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVmID0gKGdldChfZmllbGRzLCBuYW1lLCB7IF9mOiB7fSB9KS5fZiB8fCB7fSkucmVmO1xyXG4gICAgICAgIHNldChfZm9ybVN0YXRlLmVycm9ycywgbmFtZSwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBlcnJvciksIHsgcmVmIH0pKTtcclxuICAgICAgICBfc3ViamVjdHMuc3RhdGUubmV4dCh7XHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIGVycm9yczogX2Zvcm1TdGF0ZS5lcnJvcnMsXHJcbiAgICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG9wdGlvbnMgJiYgb3B0aW9ucy5zaG91bGRGb2N1cyAmJiByZWYgJiYgcmVmLmZvY3VzICYmIHJlZi5mb2N1cygpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHdhdGNoID0gKG5hbWUsIGRlZmF1bHRWYWx1ZSkgPT4gaXNGdW5jdGlvbihuYW1lKVxyXG4gICAgICAgID8gX3N1YmplY3RzLndhdGNoLnN1YnNjcmliZSh7XHJcbiAgICAgICAgICAgIG5leHQ6IChpbmZvKSA9PiBuYW1lKF9nZXRXYXRjaCh1bmRlZmluZWQsIGRlZmF1bHRWYWx1ZSksIGluZm8pLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgOiBfZ2V0V2F0Y2gobmFtZSwgZGVmYXVsdFZhbHVlLCB0cnVlKTtcclxuICAgIGNvbnN0IHVucmVnaXN0ZXIgPSAobmFtZSwgb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBmaWVsZE5hbWUgb2YgbmFtZSA/IGNvbnZlcnRUb0FycmF5UGF5bG9hZChuYW1lKSA6IF9uYW1lcy5tb3VudCkge1xyXG4gICAgICAgICAgICBfbmFtZXMubW91bnQuZGVsZXRlKGZpZWxkTmFtZSk7XHJcbiAgICAgICAgICAgIF9uYW1lcy5hcnJheS5kZWxldGUoZmllbGROYW1lKTtcclxuICAgICAgICAgICAgaWYgKGdldChfZmllbGRzLCBmaWVsZE5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMua2VlcFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5zZXQoX2ZpZWxkcywgZmllbGROYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB1bnNldChfZm9ybVZhbHVlcywgZmllbGROYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICFvcHRpb25zLmtlZXBFcnJvciAmJiB1bnNldChfZm9ybVN0YXRlLmVycm9ycywgZmllbGROYW1lKTtcclxuICAgICAgICAgICAgICAgICFvcHRpb25zLmtlZXBEaXJ0eSAmJiB1bnNldChfZm9ybVN0YXRlLmRpcnR5RmllbGRzLCBmaWVsZE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgIW9wdGlvbnMua2VlcFRvdWNoZWQgJiYgdW5zZXQoX2Zvcm1TdGF0ZS50b3VjaGVkRmllbGRzLCBmaWVsZE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgIV9vcHRpb25zLnNob3VsZFVucmVnaXN0ZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAhb3B0aW9ucy5rZWVwRGVmYXVsdFZhbHVlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdW5zZXQoX2RlZmF1bHRWYWx1ZXMsIGZpZWxkTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgX3N1YmplY3RzLndhdGNoLm5leHQoe30pO1xyXG4gICAgICAgIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgX2Zvcm1TdGF0ZSksICghb3B0aW9ucy5rZWVwRGlydHkgPyB7fSA6IHsgaXNEaXJ0eTogX2dldERpcnR5KCkgfSkpKTtcclxuICAgICAgICAhb3B0aW9ucy5rZWVwSXNWYWxpZCAmJiBfdXBkYXRlVmFsaWQoKTtcclxuICAgIH07XHJcbiAgICBjb25zdCByZWdpc3RlciA9IChuYW1lLCBvcHRpb25zID0ge30pID0+IHtcclxuICAgICAgICBsZXQgZmllbGQgPSBnZXQoX2ZpZWxkcywgbmFtZSk7XHJcbiAgICAgICAgY29uc3QgZGlzYWJsZWRJc0RlZmluZWQgPSBpc0Jvb2xlYW4ob3B0aW9ucy5kaXNhYmxlZCk7XHJcbiAgICAgICAgc2V0KF9maWVsZHMsIG5hbWUsIHtcclxuICAgICAgICAgICAgX2Y6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCAoZmllbGQgJiYgZmllbGQuX2YgPyBmaWVsZC5fZiA6IHsgcmVmOiB7IG5hbWUgfSB9KSksIHsgbmFtZSwgbW91bnQ6IHRydWUgfSksIG9wdGlvbnMpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIF9uYW1lcy5tb3VudC5hZGQobmFtZSk7XHJcbiAgICAgICAgZmllbGRcclxuICAgICAgICAgICAgPyBkaXNhYmxlZElzRGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgc2V0KF9mb3JtVmFsdWVzLCBuYW1lLCBvcHRpb25zLmRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICA6IGdldChfZm9ybVZhbHVlcywgbmFtZSwgZ2V0RmllbGRWYWx1ZShmaWVsZC5fZikpKVxyXG4gICAgICAgICAgICA6IHVwZGF0ZVZhbGlkQW5kVmFsdWUobmFtZSwgdHJ1ZSwgb3B0aW9ucy52YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCAoZGlzYWJsZWRJc0RlZmluZWQgPyB7IGRpc2FibGVkOiBvcHRpb25zLmRpc2FibGVkIH0gOiB7fSkpLCAoX29wdGlvbnMuc2hvdWxkVXNlTmF0aXZlVmFsaWRhdGlvblxyXG4gICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAhIW9wdGlvbnMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgICBtaW46IGdldFJ1bGVWYWx1ZShvcHRpb25zLm1pbiksXHJcbiAgICAgICAgICAgICAgICBtYXg6IGdldFJ1bGVWYWx1ZShvcHRpb25zLm1heCksXHJcbiAgICAgICAgICAgICAgICBtaW5MZW5ndGg6IGdldFJ1bGVWYWx1ZShvcHRpb25zLm1pbkxlbmd0aCksXHJcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IGdldFJ1bGVWYWx1ZShvcHRpb25zLm1heExlbmd0aCksXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBnZXRSdWxlVmFsdWUob3B0aW9ucy5wYXR0ZXJuKSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA6IHt9KSksIHsgbmFtZSxcclxuICAgICAgICAgICAgb25DaGFuZ2UsIG9uQmx1cjogb25DaGFuZ2UsIHJlZjogKHJlZikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlZikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyKG5hbWUsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkID0gZ2V0KF9maWVsZHMsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkUmVmID0gaXNVbmRlZmluZWQocmVmLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHJlZi5xdWVyeVNlbGVjdG9yQWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHJlZi5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCxzZWxlY3QsdGV4dGFyZWEnKVswXSB8fCByZWZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcmVmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogcmVmO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhZGlvT3JDaGVja2JveCA9IGlzUmFkaW9PckNoZWNrYm94KGZpZWxkUmVmKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWZzID0gZmllbGQuX2YucmVmcyB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmFkaW9PckNoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gcmVmcy5maW5kKChvcHRpb24pID0+IG9wdGlvbiA9PT0gZmllbGRSZWYpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZmllbGRSZWYgPT09IGZpZWxkLl9mLnJlZikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldChfZmllbGRzLCBuYW1lLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9mOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZpZWxkLl9mKSwgKHJhZGlvT3JDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmczogcmVmcy5jb25jYXQoZmllbGRSZWYpLmZpbHRlcihsaXZlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IHsgdHlwZTogZmllbGRSZWYudHlwZSwgbmFtZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7IHJlZjogZmllbGRSZWYgfSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVZhbGlkQW5kVmFsdWUobmFtZSwgZmFsc2UsIHVuZGVmaW5lZCwgZmllbGRSZWYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQgPSBnZXQoX2ZpZWxkcywgbmFtZSwge30pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5fZikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5fZi5tb3VudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAoX29wdGlvbnMuc2hvdWxkVW5yZWdpc3RlciB8fCBvcHRpb25zLnNob3VsZFVucmVnaXN0ZXIpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICEoaXNOYW1lSW5GaWVsZEFycmF5KF9uYW1lcy5hcnJheSwgbmFtZSkgJiYgX3N0YXRlRmxhZ3MuYWN0aW9uKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfbmFtZXMudW5Nb3VudC5hZGQobmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKG9uVmFsaWQsIG9uSW52YWxpZCkgPT4gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0ICYmIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5wZXJzaXN0ICYmIGUucGVyc2lzdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaGFzTm9Qcm9taXNlRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIGxldCBmaWVsZFZhbHVlcyA9IGNsb25lT2JqZWN0KF9mb3JtVmFsdWVzKTtcclxuICAgICAgICBfc3ViamVjdHMuc3RhdGUubmV4dCh7XHJcbiAgICAgICAgICAgIGlzU3VibWl0dGluZzogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoX29wdGlvbnMucmVzb2x2ZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3JzLCB2YWx1ZXMgfSA9IGF3YWl0IF9leGVjdXRlU2NoZW1hKCk7XHJcbiAgICAgICAgICAgICAgICBfZm9ybVN0YXRlLmVycm9ycyA9IGVycm9ycztcclxuICAgICAgICAgICAgICAgIGZpZWxkVmFsdWVzID0gdmFsdWVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZXhlY3V0ZUJ1aWxkSW5WYWxpZGF0aW9uKF9maWVsZHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc0VtcHR5T2JqZWN0KF9mb3JtU3RhdGUuZXJyb3JzKSAmJlxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoX2Zvcm1TdGF0ZS5lcnJvcnMpLmV2ZXJ5KChuYW1lKSA9PiBnZXQoZmllbGRWYWx1ZXMsIG5hbWUpKSkge1xyXG4gICAgICAgICAgICAgICAgX3N1YmplY3RzLnN0YXRlLm5leHQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yczoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgaXNTdWJtaXR0aW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBvblZhbGlkKGZpZWxkVmFsdWVzLCBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChvbkludmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBvbkludmFsaWQoT2JqZWN0LmFzc2lnbih7fSwgX2Zvcm1TdGF0ZS5lcnJvcnMpLCBlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF9vcHRpb25zLnNob3VsZEZvY3VzRXJyb3IgJiZcclxuICAgICAgICAgICAgICAgICAgICBmb2N1c0ZpZWxkQnkoX2ZpZWxkcywgKGtleSkgPT4gZ2V0KF9mb3JtU3RhdGUuZXJyb3JzLCBrZXkpLCBfbmFtZXMubW91bnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgaGFzTm9Qcm9taXNlRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgX2Zvcm1TdGF0ZS5pc1N1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KHtcclxuICAgICAgICAgICAgICAgIGlzU3VibWl0dGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaXNTdWJtaXR0aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzU3VibWl0U3VjY2Vzc2Z1bDogaXNFbXB0eU9iamVjdChfZm9ybVN0YXRlLmVycm9ycykgJiYgaGFzTm9Qcm9taXNlRXJyb3IsXHJcbiAgICAgICAgICAgICAgICBzdWJtaXRDb3VudDogX2Zvcm1TdGF0ZS5zdWJtaXRDb3VudCArIDEsXHJcbiAgICAgICAgICAgICAgICBlcnJvcnM6IF9mb3JtU3RhdGUuZXJyb3JzLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVzZXRGaWVsZCA9IChuYW1lLCBvcHRpb25zID0ge30pID0+IHtcclxuICAgICAgICBpZiAoZ2V0KF9maWVsZHMsIG5hbWUpKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1VuZGVmaW5lZChvcHRpb25zLmRlZmF1bHRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKG5hbWUsIGdldChfZGVmYXVsdFZhbHVlcywgbmFtZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWUobmFtZSwgb3B0aW9ucy5kZWZhdWx0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0KF9kZWZhdWx0VmFsdWVzLCBuYW1lLCBvcHRpb25zLmRlZmF1bHRWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmtlZXBUb3VjaGVkKSB7XHJcbiAgICAgICAgICAgICAgICB1bnNldChfZm9ybVN0YXRlLnRvdWNoZWRGaWVsZHMsIG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5rZWVwRGlydHkpIHtcclxuICAgICAgICAgICAgICAgIHVuc2V0KF9mb3JtU3RhdGUuZGlydHlGaWVsZHMsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgX2Zvcm1TdGF0ZS5pc0RpcnR5ID0gb3B0aW9ucy5kZWZhdWx0VmFsdWVcclxuICAgICAgICAgICAgICAgICAgICA/IF9nZXREaXJ0eShuYW1lLCBnZXQoX2RlZmF1bHRWYWx1ZXMsIG5hbWUpKVxyXG4gICAgICAgICAgICAgICAgICAgIDogX2dldERpcnR5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmtlZXBFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdW5zZXQoX2Zvcm1TdGF0ZS5lcnJvcnMsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgX3Byb3h5Rm9ybVN0YXRlLmlzVmFsaWQgJiYgX3VwZGF0ZVZhbGlkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3N1YmplY3RzLnN0YXRlLm5leHQoT2JqZWN0LmFzc2lnbih7fSwgX2Zvcm1TdGF0ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCByZXNldCA9IChmb3JtVmFsdWVzLCBrZWVwU3RhdGVPcHRpb25zID0ge30pID0+IHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkVmFsdWVzID0gZm9ybVZhbHVlcyB8fCBfZGVmYXVsdFZhbHVlcztcclxuICAgICAgICBjb25zdCBjbG9uZVVwZGF0ZWRWYWx1ZXMgPSBjbG9uZU9iamVjdCh1cGRhdGVkVmFsdWVzKTtcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSBmb3JtVmFsdWVzICYmICFpc0VtcHR5T2JqZWN0KGZvcm1WYWx1ZXMpXHJcbiAgICAgICAgICAgID8gY2xvbmVVcGRhdGVkVmFsdWVzXHJcbiAgICAgICAgICAgIDogX2RlZmF1bHRWYWx1ZXM7XHJcbiAgICAgICAgaWYgKCFrZWVwU3RhdGVPcHRpb25zLmtlZXBEZWZhdWx0VmFsdWVzKSB7XHJcbiAgICAgICAgICAgIF9kZWZhdWx0VmFsdWVzID0gdXBkYXRlZFZhbHVlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFrZWVwU3RhdGVPcHRpb25zLmtlZXBWYWx1ZXMpIHtcclxuICAgICAgICAgICAgaWYgKGlzV2ViICYmIGlzVW5kZWZpbmVkKGZvcm1WYWx1ZXMpKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgX25hbWVzLm1vdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSBnZXQoX2ZpZWxkcywgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkICYmIGZpZWxkLl9mKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkUmVmZXJlbmNlID0gQXJyYXkuaXNBcnJheShmaWVsZC5fZi5yZWZzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmaWVsZC5fZi5yZWZzWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZpZWxkLl9mLnJlZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSFRNTEVsZW1lbnQoZmllbGRSZWZlcmVuY2UpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZWZlcmVuY2UuY2xvc2VzdCgnZm9ybScpLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoX2EpIHsgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfZm9ybVZhbHVlcyA9IHByb3BzLnNob3VsZFVucmVnaXN0ZXJcclxuICAgICAgICAgICAgICAgID8ga2VlcFN0YXRlT3B0aW9ucy5rZWVwRGVmYXVsdFZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgID8gY2xvbmVPYmplY3QoX2RlZmF1bHRWYWx1ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgOiB7fVxyXG4gICAgICAgICAgICAgICAgOiBjbG9uZVVwZGF0ZWRWYWx1ZXM7XHJcbiAgICAgICAgICAgIF9maWVsZHMgPSB7fTtcclxuICAgICAgICAgICAgX3N1YmplY3RzLmFycmF5Lm5leHQoe1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgX3N1YmplY3RzLndhdGNoLm5leHQoe1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgX25hbWVzID0ge1xyXG4gICAgICAgICAgICBtb3VudDogbmV3IFNldCgpLFxyXG4gICAgICAgICAgICB1bk1vdW50OiBuZXcgU2V0KCksXHJcbiAgICAgICAgICAgIGFycmF5OiBuZXcgU2V0KCksXHJcbiAgICAgICAgICAgIHdhdGNoOiBuZXcgU2V0KCksXHJcbiAgICAgICAgICAgIHdhdGNoQWxsOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9jdXM6ICcnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgX3N0YXRlRmxhZ3MubW91bnQgPVxyXG4gICAgICAgICAgICAhX3Byb3h5Rm9ybVN0YXRlLmlzVmFsaWQgfHwgISFrZWVwU3RhdGVPcHRpb25zLmtlZXBJc1ZhbGlkO1xyXG4gICAgICAgIF9zdGF0ZUZsYWdzLndhdGNoID0gISFwcm9wcy5zaG91bGRVbnJlZ2lzdGVyO1xyXG4gICAgICAgIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KHtcclxuICAgICAgICAgICAgc3VibWl0Q291bnQ6IGtlZXBTdGF0ZU9wdGlvbnMua2VlcFN1Ym1pdENvdW50XHJcbiAgICAgICAgICAgICAgICA/IF9mb3JtU3RhdGUuc3VibWl0Q291bnRcclxuICAgICAgICAgICAgICAgIDogMCxcclxuICAgICAgICAgICAgaXNEaXJ0eToga2VlcFN0YXRlT3B0aW9ucy5rZWVwRGlydHlcclxuICAgICAgICAgICAgICAgID8gX2Zvcm1TdGF0ZS5pc0RpcnR5XHJcbiAgICAgICAgICAgICAgICA6IGtlZXBTdGF0ZU9wdGlvbnMua2VlcERlZmF1bHRWYWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICA/ICFkZWVwRXF1YWwoZm9ybVZhbHVlcywgX2RlZmF1bHRWYWx1ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNTdWJtaXR0ZWQ6IGtlZXBTdGF0ZU9wdGlvbnMua2VlcElzU3VibWl0dGVkXHJcbiAgICAgICAgICAgICAgICA/IF9mb3JtU3RhdGUuaXNTdWJtaXR0ZWRcclxuICAgICAgICAgICAgICAgIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRpcnR5RmllbGRzOiBrZWVwU3RhdGVPcHRpb25zLmtlZXBEaXJ0eVxyXG4gICAgICAgICAgICAgICAgPyBfZm9ybVN0YXRlLmRpcnR5RmllbGRzXHJcbiAgICAgICAgICAgICAgICA6IChrZWVwU3RhdGVPcHRpb25zLmtlZXBEZWZhdWx0VmFsdWVzICYmIGZvcm1WYWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICA/IE9iamVjdC5lbnRyaWVzKGZvcm1WYWx1ZXMpLnJlZHVjZSgocHJldmlvdXMsIFtrZXksIHZhbHVlXSkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcHJldmlvdXMpLCB7IFtrZXldOiB2YWx1ZSAhPT0gZ2V0KF9kZWZhdWx0VmFsdWVzLCBrZXkpIH0pKSwge30pXHJcbiAgICAgICAgICAgICAgICAgICAgOiB7fSksXHJcbiAgICAgICAgICAgIHRvdWNoZWRGaWVsZHM6IGtlZXBTdGF0ZU9wdGlvbnMua2VlcFRvdWNoZWRcclxuICAgICAgICAgICAgICAgID8gX2Zvcm1TdGF0ZS50b3VjaGVkRmllbGRzXHJcbiAgICAgICAgICAgICAgICA6IHt9LFxyXG4gICAgICAgICAgICBlcnJvcnM6IGtlZXBTdGF0ZU9wdGlvbnMua2VlcEVycm9yc1xyXG4gICAgICAgICAgICAgICAgPyBfZm9ybVN0YXRlLmVycm9yc1xyXG4gICAgICAgICAgICAgICAgOiB7fSxcclxuICAgICAgICAgICAgaXNTdWJtaXR0aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNTdWJtaXRTdWNjZXNzZnVsOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBzZXRGb2N1cyA9IChuYW1lLCBvcHRpb25zID0ge30pID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZCA9IGdldChfZmllbGRzLCBuYW1lKS5fZjtcclxuICAgICAgICBjb25zdCBmaWVsZFJlZiA9IGZpZWxkLnJlZnMgPyBmaWVsZC5yZWZzWzBdIDogZmllbGQucmVmO1xyXG4gICAgICAgIG9wdGlvbnMuc2hvdWxkU2VsZWN0ID8gZmllbGRSZWYuc2VsZWN0KCkgOiBmaWVsZFJlZi5mb2N1cygpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY29udHJvbDoge1xyXG4gICAgICAgICAgICByZWdpc3RlcixcclxuICAgICAgICAgICAgdW5yZWdpc3RlcixcclxuICAgICAgICAgICAgZ2V0RmllbGRTdGF0ZSxcclxuICAgICAgICAgICAgX2V4ZWN1dGVTY2hlbWEsXHJcbiAgICAgICAgICAgIF9nZXRXYXRjaCxcclxuICAgICAgICAgICAgX2dldERpcnR5LFxyXG4gICAgICAgICAgICBfdXBkYXRlVmFsaWQsXHJcbiAgICAgICAgICAgIF9yZW1vdmVVbm1vdW50ZWQsXHJcbiAgICAgICAgICAgIF91cGRhdGVGaWVsZEFycmF5LFxyXG4gICAgICAgICAgICBfZ2V0RmllbGRBcnJheSxcclxuICAgICAgICAgICAgX3N1YmplY3RzLFxyXG4gICAgICAgICAgICBfcHJveHlGb3JtU3RhdGUsXHJcbiAgICAgICAgICAgIGdldCBfZmllbGRzKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9maWVsZHM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldCBfZm9ybVZhbHVlcygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfZm9ybVZhbHVlcztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0IF9zdGF0ZUZsYWdzKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9zdGF0ZUZsYWdzO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQgX3N0YXRlRmxhZ3ModmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIF9zdGF0ZUZsYWdzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldCBfZGVmYXVsdFZhbHVlcygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfZGVmYXVsdFZhbHVlcztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0IF9uYW1lcygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfbmFtZXM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldCBfbmFtZXModmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIF9uYW1lcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXQgX2Zvcm1TdGF0ZSgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfZm9ybVN0YXRlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQgX2Zvcm1TdGF0ZSh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgX2Zvcm1TdGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXQgX29wdGlvbnMoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX29wdGlvbnM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldCBfb3B0aW9ucyh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgX29wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIF9vcHRpb25zKSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHJpZ2dlcixcclxuICAgICAgICByZWdpc3RlcixcclxuICAgICAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICAgICAgd2F0Y2gsXHJcbiAgICAgICAgc2V0VmFsdWUsXHJcbiAgICAgICAgZ2V0VmFsdWVzLFxyXG4gICAgICAgIHJlc2V0LFxyXG4gICAgICAgIHJlc2V0RmllbGQsXHJcbiAgICAgICAgY2xlYXJFcnJvcnMsXHJcbiAgICAgICAgdW5yZWdpc3RlcixcclxuICAgICAgICBzZXRFcnJvcixcclxuICAgICAgICBzZXRGb2N1cyxcclxuICAgICAgICBnZXRGaWVsZFN0YXRlLFxyXG4gICAgfTtcclxufVxuXG4vKipcclxuICogQ3VzdG9tIGhvb2sgdG8gbWFuZ2UgdGhlIGVudGlyZSBmb3JtLlxyXG4gKlxyXG4gKiBAcmVtYXJrc1xyXG4gKiBbQVBJXShodHRwczovL3JlYWN0LWhvb2stZm9ybS5jb20vYXBpL3VzZWZvcm0pIOKAoiBbRGVtb10oaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zL3JlYWN0LWhvb2stZm9ybS1nZXQtc3RhcnRlZC10cy01a3NtbSkg4oCiIFtWaWRlb10oaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1Sa1h2NEFYWENfNClcclxuICpcclxuICogQHBhcmFtIHByb3BzIC0gZm9ybSBjb25maWd1cmF0aW9uIGFuZCB2YWxpZGF0aW9uIHBhcmFtZXRlcnMuXHJcbiAqXHJcbiAqIEByZXR1cm5zIG1ldGhvZHMgLSBpbmRpdmlkdWFsIGZ1bmN0aW9ucyB0byBtYW5hZ2UgdGhlIGZvcm0gc3RhdGUuIHtAbGluayBVc2VGb3JtUmV0dXJufVxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBgYGB0c3hcclxuICogZnVuY3Rpb24gQXBwKCkge1xyXG4gKiAgIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgd2F0Y2gsIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSB9ID0gdXNlRm9ybSgpO1xyXG4gKiAgIGNvbnN0IG9uU3VibWl0ID0gZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKTtcclxuICpcclxuICogICBjb25zb2xlLmxvZyh3YXRjaChcImV4YW1wbGVcIikpO1xyXG4gKlxyXG4gKiAgIHJldHVybiAoXHJcbiAqICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcbiAqICAgICAgIDxpbnB1dCBkZWZhdWx0VmFsdWU9XCJ0ZXN0XCIgey4uLnJlZ2lzdGVyKFwiZXhhbXBsZVwiKX0gLz5cclxuICogICAgICAgPGlucHV0IHsuLi5yZWdpc3RlcihcImV4YW1wbGVSZXF1aXJlZFwiLCB7IHJlcXVpcmVkOiB0cnVlIH0pfSAvPlxyXG4gKiAgICAgICB7ZXJyb3JzLmV4YW1wbGVSZXF1aXJlZCAmJiA8c3Bhbj5UaGlzIGZpZWxkIGlzIHJlcXVpcmVkPC9zcGFuPn1cclxuICogICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiAvPlxyXG4gKiAgICAgPC9mb3JtPlxyXG4gKiAgICk7XHJcbiAqIH1cclxuICogYGBgXHJcbiAqL1xyXG5mdW5jdGlvbiB1c2VGb3JtKHByb3BzID0ge30pIHtcclxuICAgIGNvbnN0IF9mb3JtQ29udHJvbCA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgY29uc3QgW2Zvcm1TdGF0ZSwgdXBkYXRlRm9ybVN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgICAgICBpc0RpcnR5OiBmYWxzZSxcclxuICAgICAgICBpc1ZhbGlkYXRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGRpcnR5RmllbGRzOiB7fSxcclxuICAgICAgICBpc1N1Ym1pdHRlZDogZmFsc2UsXHJcbiAgICAgICAgc3VibWl0Q291bnQ6IDAsXHJcbiAgICAgICAgdG91Y2hlZEZpZWxkczoge30sXHJcbiAgICAgICAgaXNTdWJtaXR0aW5nOiBmYWxzZSxcclxuICAgICAgICBpc1N1Ym1pdFN1Y2Nlc3NmdWw6IGZhbHNlLFxyXG4gICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yczoge30sXHJcbiAgICB9KTtcclxuICAgIGlmIChfZm9ybUNvbnRyb2wuY3VycmVudCkge1xyXG4gICAgICAgIF9mb3JtQ29udHJvbC5jdXJyZW50LmNvbnRyb2wuX29wdGlvbnMgPSBwcm9wcztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIF9mb3JtQ29udHJvbC5jdXJyZW50ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjcmVhdGVGb3JtQ29udHJvbChwcm9wcykpLCB7IGZvcm1TdGF0ZSB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IGNvbnRyb2wgPSBfZm9ybUNvbnRyb2wuY3VycmVudC5jb250cm9sO1xyXG4gICAgY29uc3QgY2FsbGJhY2sgPSBSZWFjdC51c2VDYWxsYmFjaygodmFsdWUpID0+IHtcclxuICAgICAgICBpZiAoc2hvdWxkUmVuZGVyRm9ybVN0YXRlKHZhbHVlLCBjb250cm9sLl9wcm94eUZvcm1TdGF0ZSwgdHJ1ZSkpIHtcclxuICAgICAgICAgICAgY29udHJvbC5fZm9ybVN0YXRlID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb250cm9sLl9mb3JtU3RhdGUpLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZShPYmplY3QuYXNzaWduKHt9LCBjb250cm9sLl9mb3JtU3RhdGUpKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbY29udHJvbF0pO1xyXG4gICAgdXNlU3Vic2NyaWJlKHtcclxuICAgICAgICBzdWJqZWN0OiBjb250cm9sLl9zdWJqZWN0cy5zdGF0ZSxcclxuICAgICAgICBjYWxsYmFjayxcclxuICAgIH0pO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIWNvbnRyb2wuX3N0YXRlRmxhZ3MubW91bnQpIHtcclxuICAgICAgICAgICAgY29udHJvbC5fcHJveHlGb3JtU3RhdGUuaXNWYWxpZCAmJiBjb250cm9sLl91cGRhdGVWYWxpZCgpO1xyXG4gICAgICAgICAgICBjb250cm9sLl9zdGF0ZUZsYWdzLm1vdW50ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbnRyb2wuX3N0YXRlRmxhZ3Mud2F0Y2gpIHtcclxuICAgICAgICAgICAgY29udHJvbC5fc3RhdGVGbGFncy53YXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb250cm9sLl9zdWJqZWN0cy5zdGF0ZS5uZXh0KHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29udHJvbC5fcmVtb3ZlVW5tb3VudGVkKCk7XHJcbiAgICB9KTtcclxuICAgIF9mb3JtQ29udHJvbC5jdXJyZW50LmZvcm1TdGF0ZSA9IGdldFByb3h5Rm9ybVN0YXRlKGZvcm1TdGF0ZSwgY29udHJvbC5fcHJveHlGb3JtU3RhdGUpO1xyXG4gICAgcmV0dXJuIF9mb3JtQ29udHJvbC5jdXJyZW50O1xyXG59XG5cbmV4cG9ydCB7IENvbnRyb2xsZXIsIEZvcm1Qcm92aWRlciwgYXBwZW5kRXJyb3JzLCBnZXQsIHNldCwgdXNlQ29udHJvbGxlciwgdXNlRmllbGRBcnJheSwgdXNlRm9ybSwgdXNlRm9ybUNvbnRleHQsIHVzZUZvcm1TdGF0ZSwgdXNlV2F0Y2ggfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5tanMubWFwXG4iXSwic291cmNlUm9vdCI6IiJ9