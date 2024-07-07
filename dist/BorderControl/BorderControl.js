"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BorderControl = void 0;
var _components = require("@wordpress/components");
var _i18n = require("@wordpress/i18n");
var _Label = require("../Label/Label");
var _options = require("../utils/options");
var _PanelColorPicker = require("../PanelColorPicker/PanelColorPicker");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * @props className (optional): 'mt20' (String)
 * @props label: 'Border Settings' (String)
 * @props border: { width, style, color, side, radius } (Object)
 * @props onChange: (Function)
 * @props defaults (optional): { width, style, color, side, radius } (Object)
 * @return Border Properties (Object)
 */
var BorderControl = exports.BorderControl = function BorderControl(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? "" : _props$className,
    _props$label = props.label,
    label = _props$label === void 0 ? (0, _i18n.__)("Border:", "bplugins") : _props$label,
    value = props.value,
    onChange = props.onChange,
    _props$defaults = props.defaults,
    defaults = _props$defaults === void 0 ? {} : _props$defaults;
  var defaultVal = {
    width: "0px",
    style: "solid",
    color: "#0000",
    side: "all",
    radius: "0px"
  };
  var getDefault = function getDefault(property) {
    return (defaults === null || defaults === void 0 ? void 0 : defaults[property]) || defaultVal[property];
  };
  var setDefault = function setDefault(property) {
    return onChange(_objectSpread(_objectSpread({}, value), {}, _defineProperty({}, property, getDefault(property))));
  };
  var getValue = function getValue(property) {
    return (value === null || value === void 0 ? void 0 : value[property]) || getDefault(property);
  };
  var setValue = function setValue(property, val) {
    return onChange(_objectSpread(_objectSpread({}, value), {}, _defineProperty({}, property, val)));
  };
  var resetValue = function resetValue(property) {
    return /*#__PURE__*/React.createElement(_components.Button, {
      icon: "image-rotate",
      className: "bPlResetVal",
      onClick: function onClick() {
        return setDefault(property);
      }
    });
  };
  return /*#__PURE__*/React.createElement(_components.PanelRow, {
    className: "bPlDropdown ".concat(className)
  }, /*#__PURE__*/React.createElement(_Label.Label, {
    className: "mt5"
  }, label), /*#__PURE__*/React.createElement(_components.Dropdown, {
    className: "bPlDropdownContainer",
    contentClassName: "bPlDropdownPopover",
    popoverProps: {
      placement: "bottom-end"
    },
    renderToggle: function renderToggle(_ref) {
      var isOpen = _ref.isOpen,
        onToggle = _ref.onToggle;
      return /*#__PURE__*/React.createElement(_components.Button, {
        icon: "edit",
        onClick: onToggle,
        "aria-expanded": isOpen
      });
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_components.PanelRow, null, /*#__PURE__*/React.createElement(_components.__experimentalUnitControl, {
        label: (0, _i18n.__)("Width:", "bplugins"),
        labelPosition: "left",
        value: getValue("width"),
        onChange: function onChange(val) {
          return setValue("width", val);
        },
        units: [(0, _options.pxUnit)(), (0, _options.emUnit)()]
      }), (value === null || value === void 0 ? void 0 : value.width) && (value === null || value === void 0 ? void 0 : value.width) !== getDefault("width") && resetValue("width")), /*#__PURE__*/React.createElement(_components.PanelRow, null, /*#__PURE__*/React.createElement(_Label.Label, {
        className: ""
      }, (0, _i18n.__)("Style:", "bplugins")), /*#__PURE__*/React.createElement(_components.SelectControl, {
        value: getValue("style"),
        onChange: function onChange(val) {
          return setValue("style", val);
        },
        options: _options.borderStyles
      }), (value === null || value === void 0 ? void 0 : value.style) && (value === null || value === void 0 ? void 0 : value.style) !== getDefault("style") && resetValue("style")), /*#__PURE__*/React.createElement(_PanelColorPicker.PanelColorPicker, {
        label: (0, _i18n.__)("Color:", "bplugins"),
        value: getValue("color"),
        onChange: function onChange(val) {
          return setValue("color", val);
        },
        defaultColor: getDefault("color")
      }), /*#__PURE__*/React.createElement(_components.PanelRow, null, /*#__PURE__*/React.createElement(_Label.Label, {
        className: ""
      }, (0, _i18n.__)("Sides:", "bplugins")), /*#__PURE__*/React.createElement(_components.SelectControl, {
        value: getValue("side"),
        onChange: function onChange(val) {
          return setValue("side", val);
        },
        options: _options.sides
      }), (value === null || value === void 0 ? void 0 : value.side) && (value === null || value === void 0 ? void 0 : value.side) !== getDefault("side") && resetValue("side")), /*#__PURE__*/React.createElement(_components.PanelRow, null, /*#__PURE__*/React.createElement(_components.__experimentalUnitControl, {
        label: (0, _i18n.__)("Radius:", "bplugins"),
        labelPosition: "left",
        value: getValue("radius"),
        onChange: function onChange(val) {
          return setValue("radius", val);
        },
        units: [(0, _options.pxUnit)(50), (0, _options.perUnit)(50), (0, _options.emUnit)(3), (0, _options.remUnit)(3)],
        isResetValueOnUnitChange: true
      }), (value === null || value === void 0 ? void 0 : value.radius) && (value === null || value === void 0 ? void 0 : value.radius) !== getDefault("radius") && resetValue("radius")));
    }
  }));
};
//# sourceMappingURL=BorderControl.js.map