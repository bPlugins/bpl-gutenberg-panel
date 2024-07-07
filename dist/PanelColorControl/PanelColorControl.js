"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelColorControl = void 0;
var _react = require("react");
var _components = require("@wordpress/components");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } /* eslint-disable no-unused-vars */
var PanelColorControl = exports.PanelColorControl = function PanelColorControl(props) {
  var label = props.label,
    value = props.value,
    colors = props.colors,
    _props$onChange = props.onChange,
    _onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    style = props.style,
    className = props.className;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: style
  }, /*#__PURE__*/React.createElement("style", null, "\n          .custom-color-palette-style{\n            width: 20px;\n            height: 20px;\n            border:1px solid #ccc;\n            border-radius: 50%;\n          }\n          "), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0'
    }
  }, label), /*#__PURE__*/React.createElement(_components.Dropdown, {
    className: "my-container-class-name",
    contentClassName: "my-popover-content-classname",
    renderToggle: function renderToggle(_ref) {
      var isOpen = _ref.isOpen,
        onToggle = _ref.onToggle,
        onClose = _ref.onClose;
      return /*#__PURE__*/React.createElement("div", {
        onClick: onToggle,
        "aria-expanded": isOpen,
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: '20px'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          backgroundColor: value
        },
        className: "custom-color-palette-style"
      }), /*#__PURE__*/React.createElement(_components.Button, {
        onClick: function onClick() {
          return setIsOpen(!isOpen);
        }
      }, /*#__PURE__*/React.createElement(_components.Dashicon, {
        icon: "edit"
      })));
    },
    renderContent: function renderContent(_ref2) {
      var isOpen = _ref2.isOpen,
        onToggle = _ref2.onToggle,
        onClose = _ref2.onClose;
      return /*#__PURE__*/React.createElement("div", {
        style: {
          padding: '10px'
        }
      }, /*#__PURE__*/React.createElement(_components.ColorPalette, {
        colors: colors,
        value: value,
        onChange: function onChange(val) {
          return _onChange(val);
        }
      }), /*#__PURE__*/React.createElement("div", {
        onClick: onClose
      }));
    }
  })));
};
//# sourceMappingURL=PanelColorControl.js.map