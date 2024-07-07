"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelRepeater = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./panelRepeater.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var PanelRepeater = exports.PanelRepeater = function PanelRepeater(props) {
  var children = props.children,
    title = props.title,
    _props$length = props.length,
    length = _props$length === void 0 ? 2 : _props$length,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$toggle = props.toggle,
    toggle = _props$toggle === void 0 ? false : _props$toggle,
    _props$copy = props.copy,
    copy = _props$copy === void 0 ? true : _props$copy,
    _props$delete = props["delete"],
    del = _props$delete === void 0 ? true : _props$delete,
    _props$index = props.index,
    index = _props$index === void 0 ? null : _props$index,
    handleDelete = props.handleDelete,
    handleCopy = props.handleCopy;
  var _useState = (0, _react.useState)(toggle),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(35),
    _useState4 = _slicedToArray(_useState3, 2),
    width = _useState4[0],
    setWidth = _useState4[1];
  (0, _react.useEffect)(function () {
    onChange(open);
  }, [open, toggle]);
  (0, _react.useEffect)(function () {
    var iconGroup = document.querySelector(".panel-repeater-icon-group");
    setWidth(iconGroup.clientWidth);
  }, [width]);
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("style", null, "\n        .panel-repeater-wrapper\n          .panel-repeater-header-wrapper\n          .panel-repeater-header-title {\n          margin: 0;\n          font-size: 13px;\n          padding-left: 10px;\n          width: calc(100% - ".concat(width, "px);\n          height: 100%;\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          cursor: pointer;\n          transition: all 0.2s ease-in-out;\n          }\n        ")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "panel-repeater-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "panel-repeater-header-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    onClick: function onClick() {
      return setOpen(!open);
    },
    className: "panel-repeater-header-title"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      margin: "0px"
    }
  }, title), /*#__PURE__*/_react["default"].createElement("span", null, open ? /*#__PURE__*/_react["default"].createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 512 512",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"
  })) : /*#__PURE__*/_react["default"].createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 512 512",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "panel-repeater-icon-group"
  }, copy && /*#__PURE__*/_react["default"].createElement("div", {
    onClick: handleCopy ? function () {
      return handleCopy(index);
    } : null,
    className: "panel-repeater-icon"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 512 512",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M296 48H176.5C154.4 48 136 65.4 136 87.5V96h-7.5C106.4 96 88 113.4 88 135.5v288c0 22.1 18.4 40.5 40.5 40.5h208c22.1 0 39.5-18.4 39.5-40.5V416h8.5c22.1 0 39.5-18.4 39.5-40.5V176L296 48zm0 44.6l83.4 83.4H296V92.6zm48 330.9c0 4.7-3.4 8.5-7.5 8.5h-208c-4.4 0-8.5-4.1-8.5-8.5v-288c0-4.1 3.8-7.5 8.5-7.5h7.5v255.5c0 22.1 10.4 32.5 32.5 32.5H344v7.5zm48-48c0 4.7-3.4 8.5-7.5 8.5h-208c-4.4 0-8.5-4.1-8.5-8.5v-288c0-4.1 3.8-7.5 8.5-7.5H264v128h128v167.5z"
  }))), del && length > 1 && /*#__PURE__*/_react["default"].createElement("div", {
    onClick: handleDelete ? function () {
      return handleDelete(index);
    } : null,
    className: "panel-repeater-icon"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
  }))))), open && /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: '10px',
      border: '1px solid #ccc',
      borderTop: 'none'
    }
  }, children)));
};
//# sourceMappingURL=PanelRepeater.js.map