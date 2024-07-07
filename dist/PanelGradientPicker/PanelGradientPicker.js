"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelGradientPicker = void 0;
var _react = _interopRequireDefault(require("react"));
var _components = require("@wordpress/components");
var _data = require("@wordpress/data");
var _Label = require("../Label/Label");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/* eslint-disable no-unused-vars */

var PanelGradientPicker = exports.PanelGradientPicker = function PanelGradientPicker(_ref) {
  var value = _ref.value,
    _ref$onChange = _ref.onChange,
    _onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    label = _ref.label;
  var themeColors = (0, _data.useSelect)('core/block-editor').getSettings().gradients;
  var id = Math.floor(Math.random() * 9999999);
  var gradientValue = "linear-gradient(to bottom, #D8613C 0%, #F9F9F9 100%)";
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement("style", null, "\n        .gradientPicker-".concat(id, "{\n          ").concat(value ? "background: ".concat(value, ";") : "\n          background-image: linear-gradient(\n            45deg,\n            #d5d8dc 25%,\n            transparent 0,\n            transparent 75%,\n            #d5d8dc 0,\n            #d5d8dc\n          ),\n          linear-gradient(\n            45deg,\n            #d5d8dc 25%,\n            transparent 0,\n            transparent 75%,\n            #d5d8dc 0,\n            #d5d8dc\n          );\n          background-size: 16px 16px;\n          background-position: 0 0, calc(16px / 2) calc(16px / 2);\n          ", "\n      ")), label ? /*#__PURE__*/_react["default"].createElement(_Label.Label, null, label) : "", /*#__PURE__*/_react["default"].createElement(_components.Dropdown, {
    className: "my-container-class-name",
    contentClassName: "my-popover-content-classname",
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
        onToggle = _ref2.onToggle,
        onClose = _ref2.onClose;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "gradientPicker-".concat(id),
        style: {
          height: '30px',
          width: '30px',
          borderRadius: '50%',
          cursor: 'pointer',
          border: '1px solid #ccc'
        },
        onClick: onToggle,
        "aria-expanded": isOpen
      });
    },
    renderContent: function renderContent(_ref3) {
      var isOpen = _ref3.isOpen,
        onToggle = _ref3.onToggle,
        onClose = _ref3.onClose;
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          marginTop: '10px'
        }
      }, /*#__PURE__*/_react["default"].createElement(_components.GradientPicker, {
        value: value || gradientValue,
        onChange: function onChange(value) {
          return _onChange(value);
        },
        gradients: themeColors
      }), /*#__PURE__*/_react["default"].createElement("div", {
        onClick: onClose
      }));
    }
  }));
};
//# sourceMappingURL=PanelGradientPicker.js.map