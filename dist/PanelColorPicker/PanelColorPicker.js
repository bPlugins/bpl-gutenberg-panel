"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelColorPicker = void 0;
var _components = require("@wordpress/components");
var _data = require("@wordpress/data");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /* eslint-disable no-unused-vars */
var PanelColorPicker = exports.PanelColorPicker = function PanelColorPicker(props) {
  var value = props.value,
    _props$onChange = props.onChange,
    _onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    label = props.label,
    colors = props.colors,
    tooltip = props.tooltip,
    children = props.children,
    style = props.style;
  var id = Math.floor(Math.random() * 99999999);
  var themeColors = (0, _data.useSelect)('core/block-editor').getSettings().colors;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: "10px",
      gap: "10px"
    }, style)
  }, /*#__PURE__*/_react["default"].createElement("style", null, "\n        .panelColorPickerSelectColor-".concat(id, "{\n          ").concat(value ? "background-color: ".concat(value) : "\n          background-image: linear-gradient(\n            45deg,\n            #d5d8dc 25%,\n            transparent 0,\n            transparent 75%,\n            #d5d8dc 0,\n            #d5d8dc\n          ),\n          linear-gradient(\n            45deg,\n            #d5d8dc 25%,\n            transparent 0,\n            transparent 75%,\n            #d5d8dc 0,\n            #d5d8dc\n          );\n          background-size: 16px 16px;\n          background-position: 0 0, calc(16px / 2) calc(16px / 2);\n          ", "\n        }\n        ")), /*#__PURE__*/_react["default"].createElement("div", null, label), children && children, /*#__PURE__*/_react["default"].createElement(_components.Dropdown, {
    className: "my-container-class-name",
    contentClassName: "my-popover-content-classname",
    renderToggle: function renderToggle(_ref) {
      var isOpen = _ref.isOpen,
        onToggle = _ref.onToggle,
        onClose = _ref.onClose;
      return /*#__PURE__*/_react["default"].createElement(TooltipChecker, {
        tooltip: tooltip
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "5px"
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        onClick: onToggle,
        className: "panelColorPickerSelectColor-".concat(id),
        style: {
          height: '25px',
          width: '25px',
          borderRadius: '50%',
          border: '1px solid #ccc',
          cursor: 'pointer'
        }
      })));
    },
    renderContent: function renderContent(_ref2) {
      var isOpen = _ref2.isOpen,
        onToggle = _ref2.onToggle,
        onClose = _ref2.onClose;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_components.ColorPalette, {
        colors: colors || themeColors.slice(0, 10),
        enableAlpha: true,
        value: value,
        onChange: function onChange(value) {
          return _onChange(value);
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        onClick: onClose
      }));
    }
  }));
};
var TooltipChecker = function TooltipChecker(_ref3) {
  var tooltip = _ref3.tooltip,
    children = _ref3.children;
  return tooltip ? /*#__PURE__*/_react["default"].createElement(_components.Tooltip, {
    delay: 300,
    text: tooltip,
    placement: "top"
  }, children) : children;
};
//# sourceMappingURL=PanelColorPicker.js.map