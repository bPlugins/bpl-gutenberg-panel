"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DualColorControl = void 0;
var _react = require("react");
var _PanelColorPicker = require("../PanelColorPicker/PanelColorPicker");
require("./panelCustomColorControl.css");
var _components = require("@wordpress/components");
var _BButtonGroup = require("../BButtonGroup/BButtonGroup");
var _data = require("@wordpress/data");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } /* eslint-disable no-unused-vars */
var DualColorControl = exports.DualColorControl = function DualColorControl(props) {
  var value = props.value,
    _props$onChange = props.onChange,
    _onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$label = props.label,
    label = _props$label === void 0 ? 'Color' : _props$label;
  var themeColors = (0, _data.useSelect)('core/block-editor').getSettings().gradients;
  var _useState = (0, _react.useState)('solid'),
    _useState2 = _slicedToArray(_useState, 2),
    tab = _useState2[0],
    setTab = _useState2[1];
  var id = Math.floor(Math.random() * 9999999);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("style", null, "\n        #customColorControlPanel-".concat(id, "-dualColor{\n          ").concat(value ? "background: ".concat(value, ";") : "\n          background-image: linear-gradient(\n            45deg,\n            #d5d8dc 25%,\n            transparent 0,\n            transparent 75%,\n            #d5d8dc 0,\n            #d5d8dc\n          ),\n          linear-gradient(\n            45deg,\n            #d5d8dc 25%,\n            transparent 0,\n            transparent 75%,\n            #d5d8dc 0,\n            #d5d8dc\n          );\n          background-size: 16px 16px;\n          background-position: 0 0, calc(16px / 2) calc(16px / 2);\n          ", "\n        }\n        ")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement(_components.Dropdown, {
    className: "my-container-class-name",
    contentClassName: "my-popover-content-classname",
    renderToggle: function renderToggle(_ref) {
      var isOpen = _ref.isOpen,
        onToggle = _ref.onToggle,
        onClose = _ref.onClose;
      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "5px"
        }
      }, /*#__PURE__*/React.createElement("div", {
        id: "customColorControlPanel-".concat(id, "-dualColor"),
        style: {
          height: '25px',
          width: '25px',
          borderRadius: '50%',
          border: '1px solid #ccc'
        }
      }), /*#__PURE__*/React.createElement(_components.Button, {
        onClick: onToggle,
        "aria-expanded": isOpen,
        icon: "edit"
      }));
    },
    renderContent: function renderContent(_ref2) {
      var isOpen = _ref2.isOpen,
        onToggle = _ref2.onToggle,
        onClose = _ref2.onClose;
      return /*#__PURE__*/React.createElement("div", {
        className: "panel-custom-color-control-container"
      }, /*#__PURE__*/React.createElement(_BButtonGroup.BButtonGroup, {
        label: "Type:",
        options: [{
          label: "Solid",
          value: "solid"
        }, {
          label: "Gradient",
          value: "gradient"
        }],
        value: tab,
        onChange: function onChange(val) {
          return setTab(val);
        }
      }), tab === 'solid' && /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: '20px'
        }
      }, /*#__PURE__*/React.createElement(_PanelColorPicker.PanelColorPicker, {
        value: value,
        label: "Color :",
        onChange: function onChange(value) {
          return _onChange(value);
        }
      })), tab === 'gradient' && /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: '10px'
        }
      }, /*#__PURE__*/React.createElement(_components.GradientPicker, {
        value: value || gradientValue,
        onChange: function onChange(value) {
          return _onChange(value);
        },
        gradients: themeColors
      })), /*#__PURE__*/React.createElement("div", {
        onClick: onClose
      }));
    }
  })));
};
//# sourceMappingURL=DualColorControl.js.map