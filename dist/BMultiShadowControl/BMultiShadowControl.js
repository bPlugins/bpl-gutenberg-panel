"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BMultiShadowControl = void 0;
var _components = require("@wordpress/components");
var _i18n = require("@wordpress/i18n");
var _immer = require("immer");
var _react = require("react");
var _options = require("../utils/options");
var _icons = require("../utils/icons");
var _BButtonGroup = require("../BButtonGroup/BButtonGroup");
var _Label = require("../Label/Label");
var _PanelColorPicker = require("../PanelColorPicker/PanelColorPicker");
require("./style.css");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // import { BColor, BtnGroup, Label } from "../index";
// import { gearIcon } from "../utils/icons";
var BMultiShadowControl = exports.BMultiShadowControl = function BMultiShadowControl(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? "" : _props$className,
    _props$label = props.label,
    label = _props$label === void 0 ? (0, _i18n.__)("Shadow", "bplugins") : _props$label,
    value = props.value,
    onChange = props.onChange,
    _props$type = props.type,
    type = _props$type === void 0 ? "box" : _props$type,
    _props$defaults = props.defaults,
    defaults = _props$defaults === void 0 ? [] : _props$defaults;
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    activeIndex = _useState2[0],
    setActiveIndex = _useState2[1];
  var defaultVal = [{
    hOffset: "0px",
    vOffset: "0px",
    blur: "0px",
    spreed: "0px",
    color: "#7090b0",
    isInset: false
  }];
  var shadow = (value !== null && value !== void 0 && value.length ? value : null) || (defaults !== null && defaults !== void 0 && defaults.length ? defaults : null) || defaultVal;
  var getDefault = function getDefault(property) {
    var _defaults$activeIndex;
    return (defaults === null || defaults === void 0 || (_defaults$activeIndex = defaults[activeIndex]) === null || _defaults$activeIndex === void 0 ? void 0 : _defaults$activeIndex[property]) || defaultVal[0][property];
  };
  var resetValue = function resetValue(property) {
    return /*#__PURE__*/React.createElement(_components.Button, {
      icon: "image-rotate",
      className: "bPlResetVal",
      onClick: function onClick() {
        return updateShadow(property, getDefault(property));
      }
    });
  };
  var updateShadow = function updateShadow(property, val) {
    var newShadow = (0, _immer.produce)(shadow, function (draft) {
      draft[activeIndex][property] = val;
    });
    onChange(newShadow);
  };
  var duplicateShadow = function duplicateShadow(e) {
    e.preventDefault();
    onChange([].concat(_toConsumableArray(shadow.slice(0, activeIndex)), [_objectSpread({}, shadow[activeIndex])], _toConsumableArray(shadow.slice(activeIndex))));
    setActiveIndex(activeIndex + 1);
  };
  var removeShadow = function removeShadow(e) {
    e.preventDefault();
    onChange([].concat(_toConsumableArray(shadow.slice(0, activeIndex)), _toConsumableArray(shadow.slice(activeIndex + 1))));
    setActiveIndex(0 === activeIndex ? 0 : activeIndex - 1);
  };
  var _ref = shadow[activeIndex] || {},
    _ref$hOffset = _ref.hOffset,
    hOffset = _ref$hOffset === void 0 ? "" : _ref$hOffset,
    _ref$vOffset = _ref.vOffset,
    vOffset = _ref$vOffset === void 0 ? "" : _ref$vOffset,
    _ref$blur = _ref.blur,
    blur = _ref$blur === void 0 ? "" : _ref$blur,
    _ref$spreed = _ref.spreed,
    spreed = _ref$spreed === void 0 ? "" : _ref$spreed,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "" : _ref$color,
    _ref$isInset = _ref.isInset,
    isInset = _ref$isInset === void 0 ? false : _ref$isInset;
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
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
        onToggle = _ref2.onToggle;
      return /*#__PURE__*/React.createElement(_components.Button, {
        icon: "edit",
        onClick: function onClick() {
          onToggle(), setActiveIndex(0);
        },
        "aria-expanded": isOpen
      });
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, 1 < (shadow === null || shadow === void 0 ? void 0 : shadow.length) && /*#__PURE__*/React.createElement(_components.PanelRow, null, /*#__PURE__*/React.createElement(_Label.Label, {
        className: "mt5"
      }, (0, _i18n.__)("Shadow:", "bplugins")), /*#__PURE__*/React.createElement(_BButtonGroup.BButtonGroup, {
        label: "",
        value: activeIndex,
        borderRadius: "5px",
        onChange: function onChange(val) {
          return setActiveIndex(val);
        },
        options: shadow && (shadow === null || shadow === void 0 ? void 0 : shadow.map(function (_, index) {
          return {
            label: index + 1 + "",
            value: index
          };
        })) || [{
          label: 1,
          value: 0
        }]
      })), null !== activeIndex && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_components.PanelRow, null, /*#__PURE__*/React.createElement(_components.__experimentalUnitControl, {
        label: (0, _i18n.__)("Horizontal Offset:", "bplugins"),
        labelPosition: "left",
        value: hOffset,
        onChange: function onChange(val) {
          return updateShadow("hOffset", val);
        },
        units: [(0, _options.pxUnit)(), (0, _options.emUnit)(), (0, _options.remUnit)()]
      }), hOffset && hOffset !== getDefault("hOffset") && resetValue("hOffset")), /*#__PURE__*/React.createElement(_components.PanelRow, null, /*#__PURE__*/React.createElement(_components.__experimentalUnitControl, {
        label: (0, _i18n.__)("Vertical Offset:", "bplugins"),
        labelPosition: "left",
        value: vOffset,
        onChange: function onChange(val) {
          return updateShadow("vOffset", val);
        },
        units: [(0, _options.pxUnit)(), (0, _options.emUnit)(), (0, _options.remUnit)()]
      }), vOffset && vOffset !== getDefault("vOffset") && resetValue("vOffset")), /*#__PURE__*/React.createElement(_components.PanelRow, null, /*#__PURE__*/React.createElement(_components.__experimentalUnitControl, {
        label: (0, _i18n.__)("Blur:", "bplugins"),
        labelPosition: "left",
        value: blur,
        onChange: function onChange(val) {
          return updateShadow("blur", val);
        },
        units: [(0, _options.pxUnit)(), (0, _options.emUnit)(), (0, _options.remUnit)()]
      }), blur && blur !== getDefault("blur") && resetValue("blur")), /*#__PURE__*/React.createElement("small", null, (0, _i18n.__)("Blur cannot be negative value!", "bplugins")), "box" === type && /*#__PURE__*/React.createElement(_components.PanelRow, null, /*#__PURE__*/React.createElement(_components.__experimentalUnitControl, {
        label: (0, _i18n.__)("Spreed:", "bplugins"),
        labelPosition: "left",
        value: spreed,
        onChange: function onChange(val) {
          return updateShadow("spreed", val);
        },
        units: [(0, _options.pxUnit)(), (0, _options.emUnit)(), (0, _options.remUnit)()]
      }), spreed && spreed !== getDefault("spreed") && resetValue("spreed")), /*#__PURE__*/React.createElement(_PanelColorPicker.PanelColorPicker, {
        label: (0, _i18n.__)("Color:", "bplugins"),
        value: color,
        onChange: function onChange(val) {
          return updateShadow("color", val);
        },
        defaultColor: getDefault("color")
      }), "box" === type && /*#__PURE__*/React.createElement(_components.ToggleControl, {
        label: (0, _i18n.__)("Shadow Inset?", "bplugins"),
        checked: isInset,
        onChange: function onChange(val) {
          return updateShadow("isInset", val);
        }
      }), /*#__PURE__*/React.createElement(_components.PanelRow, {
        className: "itemAction mt20"
      }, 1 < (shadow === null || shadow === void 0 ? void 0 : shadow.length) && /*#__PURE__*/React.createElement(_components.Button, {
        className: "removeItem",
        label: (0, _i18n.__)("Remove", "bplugins"),
        onClick: removeShadow
      }, /*#__PURE__*/React.createElement(_components.Dashicon, {
        icon: "no"
      }), (0, _i18n.__)("Remove", "bplugins")), /*#__PURE__*/React.createElement(_components.Button, {
        className: "duplicateItem",
        label: (0, _i18n.__)("Duplicate", "bplugins"),
        onClick: duplicateShadow
      }, _icons.gearIcon, (0, _i18n.__)("Duplicate", "bplugins")))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
        className: "addItem"
      }, /*#__PURE__*/React.createElement(_components.Button, {
        label: (0, _i18n.__)("Add New Shadow", "bplugins"),
        onClick: function onClick() {
          return onChange([].concat(_toConsumableArray(shadow), [defaultVal[0]]));
        }
      }, /*#__PURE__*/React.createElement(_components.Dashicon, {
        icon: "plus"
      }), (0, _i18n.__)("Add New Shadow", "bplugins"))));
    }
  }));
};
//# sourceMappingURL=BMultiShadowControl.js.map