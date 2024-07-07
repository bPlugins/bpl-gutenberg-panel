"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SortableProvider = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactSortablejs = require("react-sortablejs");
var _sortablejs = _interopRequireWildcard(require("sortablejs"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_sortablejs["default"].mount(new _sortablejs.MultiDrag(), new _sortablejs.Swap());
var SortableProvider = exports.SortableProvider = function SortableProvider(props) {
  var _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    items = props.items,
    children = props.children,
    style = props.style,
    className = props.className;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactSortablejs.ReactSortable, {
    animation: 200,
    delayOnTouchStart: true,
    delay: 2,
    list: items,
    setList: function setList(val) {
      return onChange(val);
    },
    style: style,
    className: className
  }, children));
};
//# sourceMappingURL=SortableProvider.js.map