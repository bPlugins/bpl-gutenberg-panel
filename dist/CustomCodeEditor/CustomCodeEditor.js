"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomCodeEditor = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactAce = _interopRequireDefault(require("react-ace"));
require("ace-builds/src-noconflict/ext-language_tools");
require("ace-builds/src-noconflict/mode-css");
require("ace-builds/src-noconflict/theme-monokai");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var CustomCodeEditor = exports.CustomCodeEditor = function CustomCodeEditor(props) {
  var value = props.value,
    onChange = props.onChange,
    _props$height = props.height,
    height = _props$height === void 0 ? "300px" : _props$height,
    _props$width = props.width,
    width = _props$width === void 0 ? "100%" : _props$width;
  var id = Math.floor(Math.random() * 99999999);
  var timeout;
  var debouncedOnChange = (0, _react.useCallback)(function (newVal) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      onChange(newVal);
    }, 600);
  }, [onChange, timeout]);
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactAce["default"], {
    mode: "css",
    theme: "monokai",
    name: "advEditor-".concat(id)
    // onLoad={this.onLoad}
    ,
    onChange: debouncedOnChange,
    fontSize: 14,
    lineHeight: 19,
    height: height,
    width: width,
    showPrintMargin: true,
    showGutter: true,
    highlightActiveLine: true,
    value: value,
    setOptions: {
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: true,
      showLineNumbers: true,
      tabSize: 2
    }
  }));
};
//# sourceMappingURL=CustomCodeEditor.js.map