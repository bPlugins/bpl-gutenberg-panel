"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BBoxControl = void 0;
var _components = require("@wordpress/components");
var _react = require("react");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var BBoxControl = exports.BBoxControl = function BBoxControl(props) {
  var _Object$keys;
  var label = props.label,
    values = props.values,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    resetValues = props.resetValues,
    defaultValues = props.defaultValues,
    units = props.units,
    sides = props.sides,
    style = props.style,
    className = props.className,
    _props$disableUnits = props.disableUnits,
    disableUnits = _props$disableUnits === void 0 ? false : _props$disableUnits;
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    link = _useState2[0],
    setLink = _useState2[1];
  // const [value, setValue] = useState(values || {});

  var unitSides = sides || ["top", "right", "bottom", "left"];
  var resetOption = resetValues && Object.keys(resetValues).map(function (key) {
    var isReset = false;
    if (Object.keys(values) && resetValues[key] !== values[key]) {
      isReset = false;
    } else {
      isReset = true;
    }
    return isReset;
  });
  var isReset = resetValues && resetOption.includes(false) && ((_Object$keys = Object.keys(values)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length) > 0;
  var defaultUnits = [{
    label: "px",
    value: "px"
  }, {
    label: "%",
    value: "%"
  }, {
    label: "em",
    value: "em"
  }, {
    label: "rem",
    value: "rem"
  }, {
    label: "vw",
    value: "vw"
  }, {
    label: "vh",
    value: "vh"
  }];
  var handleChange = function handleChange(val, dimension) {
    if (!link) {
      onChange({
        top: val,
        right: val,
        bottom: val,
        left: val
      });
    } else {
      if (sides) {
        dimension === "horizontal" ? onChange(_objectSpread(_objectSpread({}, values), {}, {
          right: val,
          left: val
        })) : dimension === "vertical" && onChange(_objectSpread(_objectSpread({}, values), {}, {
          top: val,
          bottom: val
        }));
      } else {
        onChange(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, dimension, val)));
      }
    }
  };
  (0, _react.useEffect)(function () {
    onChange(values);
  }, [values]);
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread({
      marginBottom: "8px"
    }, style),
    className: className
  }, /*#__PURE__*/React.createElement("style", null, "\n        .bplUnitControlWrapper .components-base-control.components-input-control.components-number-control{\n          margin-bottom:0px !important;\n        }\n        .bplUnitControlWrapper .components-base-control.components-input-control.components-number-control .components-base-control__field .components-input-base .components-input-control__container .components-input-control__input{\n          font-size: 13px !important;\n          padding-right: 0px !important;\n        }\n        .bplUnitControlWrapper .components-base-control.components-input-control.components-number-control .components-base-control__field .components-input-base .components-input-control__container .components-input-control__suffix .components-unit-control__select{\n          padding:0px 0px;\n        }\n        .bplUnitControlWrapper .components-base-control.components-input-control.components-number-control .components-base-control__field .components-input-base .components-input-control__container .components-input-control__suffix{\n          width:17px !important;\n        }\n        .bplPanel-link-button{\n          background: transparent;\n          border: none;\n          padding: 0;\n          margin-top: -13px;\n          cursor: pointer;\n          .dashicons{\n            font-size:16px;\n          }\n        }\n        .bplPanel-link-button .dashicons.dashicons-image-rotate{\n          color:#666;\n        }\n        .bplPanel-link-button .dashicons.dashicons-image-rotate:hover{\n            color:black;\n          }\n        "), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "5px"
    }
  }, label && /*#__PURE__*/React.createElement("label", null, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: sides ? sides.includes("horizontal", "vertical") ? "5px" : "0px" : "0px"
    }
  }, unitSides.map(function (val, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "bplUnitControlWrapper",
      key: i
    }, /*#__PURE__*/React.createElement(_components.__experimentalUnitControl, {
      onChange: function onChange(v) {
        return handleChange(v, val);
      } // Pass dimension
      ,
      value: sides ? val === "horizontal" ? values === null || values === void 0 ? void 0 : values.right : val === "vertical" && (values === null || values === void 0 ? void 0 : values.top) : values === null || values === void 0 ? void 0 : values[val],
      defaultValue: defaultValues || null,
      units: units || defaultUnits,
      disableUnits: disableUnits
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        marginTop: "-4px"
      }
    }, /*#__PURE__*/React.createElement("small", {
      style: {
        textTransform: "capitalize"
      }
    }, val)));
  }), !sides && /*#__PURE__*/React.createElement("button", {
    className: "bplPanel-link-button",
    onClick: function onClick() {
      return setLink(!link);
    }
  }, link ? /*#__PURE__*/React.createElement("span", {
    className: "dashicons dashicons-admin-links"
  }) : /*#__PURE__*/React.createElement("span", {
    className: "dashicons dashicons-editor-unlink"
  })), isReset && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onChange(resetValues);
    },
    className: "bplPanel-link-button"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dashicons dashicons-image-rotate"
  })))));
};
//# sourceMappingURL=BBoxControl.js.map