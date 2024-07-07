"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabPanel = void 0;
var _react = _interopRequireDefault(require("react"));
require("./tabpanel.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Dashicon = wp.components.Dashicon;
var TabPanel = exports.TabPanel = function TabPanel(props) {
  var value = props.value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$isAdvanced = props.isAdvanced,
    isAdvanced = _props$isAdvanced === void 0 ? false : _props$isAdvanced,
    _props$isStyle = props.isStyle,
    isStyle = _props$isStyle === void 0 ? true : _props$isStyle,
    _props$isContent = props.isContent,
    isContent = _props$isContent === void 0 ? true : _props$isContent;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "tab-panel-container"
  }, isContent && /*#__PURE__*/_react["default"].createElement("div", {
    onClick: function onClick() {
      return onChange('content');
    },
    className: "single-tab ".concat(value === 'content' ? 'is-tab-active active-tab-color' : 'deActive-tab-color')
  }, /*#__PURE__*/_react["default"].createElement(Dashicon, {
    icon: "edit"
  }), /*#__PURE__*/_react["default"].createElement("span", null, "Content")), isStyle && /*#__PURE__*/_react["default"].createElement("div", {
    onClick: function onClick() {
      return onChange('style');
    },
    className: "single-tab ".concat(value === 'style' ? 'is-tab-active active-tab-color' : 'deActive-tab-color')
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    style: {
      paddingBottom: '4px',
      fontSize: '20px'
    },
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 512 512",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
  })), /*#__PURE__*/_react["default"].createElement("span", null, "Style")), isAdvanced && /*#__PURE__*/_react["default"].createElement("div", {
    onClick: function onClick() {
      return onChange('advanced');
    },
    className: "single-tab ".concat(value === 'advanced' ? 'is-tab-active active-tab-color' : 'deActive-tab-color')
  }, /*#__PURE__*/_react["default"].createElement(Dashicon, {
    icon: "generic"
  }), /*#__PURE__*/_react["default"].createElement("span", null, "Advanced"))));
};
//# sourceMappingURL=TabPanel.js.map