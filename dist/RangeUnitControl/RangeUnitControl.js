"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RangeUnitControl = void 0;
var _components = require("@wordpress/components");
var _react = _interopRequireWildcard(require("react"));
var _excluded = ["label", "units", "className", "style", "value", "min", "max", "onChange"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }
var RangeUnitControl = exports.RangeUnitControl = function RangeUnitControl(props) {
  var _rangeRef$current;
  var label = props.label,
    units = props.units,
    className = props.className,
    style = props.style,
    value = props.value,
    _props$min = props.min,
    min = _props$min === void 0 ? 0 : _props$min,
    _props$max = props.max,
    max = _props$max === void 0 ? 100 : _props$max,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    rest = _objectWithoutProperties(props, _excluded);
  var unitRef = (0, _react.useRef)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    toggle = _useState2[0],
    setToggle = _useState2[1];
  var defaults = [{
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
  var defaultUnits = defaults || units;

  // const number = parseInt(unit);
  var number = parseInt(value === null || value === void 0 ? void 0 : value.replace(/[^0-9]/g, ''));
  // const unit = value.slice(number.toString().length);
  var unit = (value === null || value === void 0 ? void 0 : value.replace(/\d+/g, '')) || "px";
  var _useState3 = (0, _react.useState)(number),
    _useState4 = _slicedToArray(_useState3, 2),
    currentNumber = _useState4[0],
    setCurrentNumber = _useState4[1];
  var _useState5 = (0, _react.useState)(unit),
    _useState6 = _slicedToArray(_useState5, 2),
    currentUnit = _useState6[0],
    setCurrentUnit = _useState6[1];
  var rangeRef = (0, _react.useRef)();
  var id = Math.floor(Math.random() * 999999);
  (0, _react.useEffect)(function () {
    number >= 0 ? onChange("".concat(currentNumber).concat(currentUnit)) : onChange("");
  }, [currentNumber, currentUnit]);
  (0, _react.useEffect)(function () {
    var handle = function handle(e) {
      var _unitRef$current;
      if (!(unitRef !== null && unitRef !== void 0 && (_unitRef$current = unitRef.current) !== null && _unitRef$current !== void 0 && _unitRef$current.contains(e.target))) {
        setToggle(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return function () {
      document.removeEventListener("mousedown", handle);
    };
  });
  var unitHeight = (_rangeRef$current = rangeRef.current) === null || _rangeRef$current === void 0 || (_rangeRef$current = _rangeRef$current.childNodes[0]) === null || _rangeRef$current === void 0 ? void 0 : _rangeRef$current.clientHeight;
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("style", null, "\n        .labelWrapper {\n            display: flex;\n            justify-content: space-between;\n          }\n          .rangeControlWrapper {\n            display: flex;\n          }\n          .rangeControlWrapper  .components-range-control__wrapper .components-range-control__thumb-wrapper>span{\n            background-color:#4527a4\n          }\n          .rangeControlWrapper  .components-range-control__wrapper .components-range-control__track{\n            color:#4527a4\n          }\n          .unitControlBtn {\n            font-size: 8px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            z-index: 9999;\n            border: 1px solid rgb(168, 168, 168);\n            border-left: none;\n            cursor: pointer;\n            font-weight: 600;\n            background-color: #0000;\n            height: ".concat(unitHeight, "px;\n            width: 21px;\n            border-radius: 0 2px 2px 0;\n            text-transform: uppercase;\n            margin-left: -1px;\n          }\n\n          .unitControlBtn:focus {\n            border-color: #4527a4;\n            border-left: 1px solid #4527a4;\n          }\n          .unitControlWrapper {\n            position: relative;\n          }\n          .unitListWrapper {\n            position: absolute;\n            left: 0px;\n            z-index: 9999 !important;\n            background: #fff;\n            font-weight: 600;\n            border: 1px solid rgb(168, 168, 168);\n            text-align: center;\n            border-radius: 0 0 2px 2px;\n          }\n          .unitList {\n            margin: 0;\n            cursor: default;\n            font-size: 9px;\n          }\n          .unitList:hover {\n            background-color: #4527a4;\n            color: aliceblue;\n          }\n          .hoverBgColor {\n            background-color: #4527a4;\n            color: aliceblue;\n          }\n\n\n      ")), /*#__PURE__*/_react["default"].createElement("div", {
    id: "unitId-".concat(id),
    className: "unitRangeWrapper ".concat(className),
    style: style
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "labelWrapper"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: ""
  }, label)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "rangeControlWrapper"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    ref: rangeRef,
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/_react["default"].createElement(_components.RangeControl, _extends({
    value: currentNumber,
    onChange: function onChange(val) {
      setCurrentNumber(val);
    }
  }, rest, {
    min: min,
    max: max
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    ref: unitRef,
    className: "unitControlWrapper"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return setToggle(!toggle);
    },
    className: "unitControlBtn"
  }, unit), toggle && /*#__PURE__*/_react["default"].createElement("div", {
    className: "unitListWrapper"
  }, defaultUnits === null || defaultUnits === void 0 ? void 0 : defaultUnits.map(function (val, i) {
    return /*#__PURE__*/_react["default"].createElement("p", {
      key: i,
      onClick: function onClick() {
        setCurrentUnit(val.value);
        setToggle(false);
      },
      className: "unitList ".concat(val.value === currentUnit ? "hoverBgColor" : "", " ")
    }, val.label);
  }))))));
};
//# sourceMappingURL=RangeUnitControl.js.map