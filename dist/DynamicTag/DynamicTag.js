"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DynamicTag = void 0;
var _react = _interopRequireDefault(require("react"));
var _excluded = ["tagName"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }
var DynamicTag = exports.DynamicTag = function DynamicTag(_ref) {
  var DynamicTag = _ref.tagName,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(DynamicTag, restProps);
};
//# sourceMappingURL=DynamicTag.js.map