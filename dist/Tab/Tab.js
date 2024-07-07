"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tab = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Tab = exports.Tab = function Tab(props) {
  var options = props.options,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    value = props.value,
    _props$paddingY = props.paddingY,
    paddingY = _props$paddingY === void 0 ? 4 : _props$paddingY,
    _props$paddingX = props.paddingX,
    paddingX = _props$paddingX === void 0 ? 0 : _props$paddingX,
    _props$borderColor = props.borderColor,
    borderColor = _props$borderColor === void 0 ? "#4527a4" : _props$borderColor,
    _props$hoverColor = props.hoverColor,
    hoverColor = _props$hoverColor === void 0 ? "#fff" : _props$hoverColor,
    _props$hoverBg = props.hoverBg,
    hoverBg = _props$hoverBg === void 0 ? "#774cff" : _props$hoverBg,
    _props$activeBg = props.activeBg,
    activeBg = _props$activeBg === void 0 ? "#4527a4" : _props$activeBg,
    _props$activeColor = props.activeColor,
    activeColor = _props$activeColor === void 0 ? "#fff" : _props$activeColor,
    style = props.style,
    className = props.className;
  var defaultTabs = options !== null && options !== void 0 ? options : [{
    label: "Tab 1",
    value: "tab1"
  }, {
    label: "Tab 2",
    value: "tab2"
  }];
  // const { options, onChange = () => { }, value, paddingY = 4, paddingX = 0, borderColor = "#4527a4", hoverColor = "#774cff", activeColor = "#4527a4", color = "#fff" } = props;
  var id = Math.floor(Math.random() * 99999999);
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("style", null, "\n          #bpl-tab-".concat(id, ".bpl-tab {\n            display: flex;\n            justify-content: space-between;\n            border: 1px solid ").concat(borderColor, ";\n            margin:8px 0px;\n          }\n          #bpl-tab-").concat(id, " .dynamic-").concat(id, ".isActive {\n            background: ").concat(activeBg, ";\n            color: ").concat(activeColor, ";\n          }\n          #bpl-tab-").concat(id, " .dynamic-").concat(id, ".single-bpl-tab {\n            display: flex;\n            width: 100%;\n            justify-content: center;\n            transition: background 0.2s ease-in-out;\n            cursor: pointer;\n            white-space:nowrap;\n            border-right: 1px solid ").concat(borderColor, ";\n          }\n          #bpl-tab-").concat(id, " .single-bpl-tab:last-child{\n            border-right:0px\n          }\n          #bpl-tab-").concat(id, " .dynamic-").concat(id, ".single-bpl-tab p {\n              margin: 0;\n              padding: ").concat(paddingY, "px ").concat(paddingX, "px;\n            }\n          #bpl-tab-").concat(id, " .single-bpl-tab-hover:hover {\n            color: ").concat(hoverColor, ";\n            background: ").concat(hoverBg, ";\n          }\n        ")), /*#__PURE__*/_react["default"].createElement("div", {
    style: style,
    id: "bpl-tab-".concat(id),
    className: "bpl-tab ".concat(className)
  }, defaultTabs === null || defaultTabs === void 0 ? void 0 : defaultTabs.map(function (tab, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      onClick: function onClick() {
        return onChange(tab.value);
      },
      className: "dynamic-".concat(id, " single-bpl-tab ").concat(value === tab.value ? 'isActive' : 'single-bpl-tab-hover')
    }, /*#__PURE__*/_react["default"].createElement("p", null, tab.label));
  })));
};
//# sourceMappingURL=Tab.js.map