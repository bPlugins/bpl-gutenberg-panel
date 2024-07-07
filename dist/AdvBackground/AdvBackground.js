"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdvBackground = void 0;
var _components = require("@wordpress/components");
var _immer = require("immer");
var _react = require("react");
var _options = require("../utils/options");
var _BGradient = require("../BGradient/BGradient");
var _Device = require("../Device/Device");
var _Label = require("../Label/Label");
var _MediaArea = require("../MediaArea/MediaArea");
var _Tab = require("../Tab/Tab");
var _DualColorControl = require("../DualColorControl/DualColorControl");
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
var AdvBackground = exports.AdvBackground = function AdvBackground(props) {
  var _props$name = props.name,
    name = _props$name === void 0 ? "Background" : _props$name,
    value = props.value,
    _props$onChange = props.onChange,
    _onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$device = props.device,
    device = _props$device === void 0 ? "desktop" : _props$device;
  var _useState = (0, _react.useState)(value || {
      hoverType: "normal"
    }),
    _useState2 = _slicedToArray(_useState, 2),
    bgValue = _useState2[0],
    setBgValue = _useState2[1];
  var _ref = bgValue[bgValue.hoverType] || {},
    transition = _ref.transition;
  var updateBG = function updateBG(property, value) {
    var childP = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var newBG = (0, _immer.produce)(bgValue, function (draft) {
      if (null !== childP) {
        draft[bgValue.hoverType][property][childP] = value;
      } else {
        draft[bgValue.hoverType][property] = value;
      }
    });
    setBgValue(newBG);
    _onChange(newBG);
  };
  var updateHb = function updateHb(type, value) {
    var newHb = (0, _immer.produce)(bgValue, function (draft) {
      draft[type] = value;
    });
    setBgValue(newHb);
    _onChange(newHb);
  };
  (0, _react.useEffect)(function () {
    _onChange(bgValue);
  }, [bgValue]);
  return /*#__PURE__*/React.createElement(_react.Fragment, null, /*#__PURE__*/React.createElement(_Tab.Tab, {
    options: [{
      label: "Normal",
      value: "normal"
    }, {
      label: "Hover",
      value: "hover"
    }],
    value: bgValue.hoverType,
    onChange: function onChange(val) {
      return updateHb("hoverType", val);
    }
  }), bgValue.hoverType === "hover" && /*#__PURE__*/React.createElement(_react.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "advExtraMargin"
  }, /*#__PURE__*/React.createElement(_components.RangeControl, {
    label: "".concat(name, " Transition"),
    min: 0,
    max: 5,
    step: 0.05,
    value: transition,
    onChange: function onChange(val) {
      return updateBG("transition", val);
    }
  })), /*#__PURE__*/React.createElement(Background, {
    name: name,
    value: bgValue.hover,
    onChange: function onChange(val) {
      setBgValue(_objectSpread(_objectSpread({}, bgValue), {}, {
        hover: val
      }));
      _onChange(_objectSpread(_objectSpread({}, bgValue), {}, {
        hover: val
      }));
    },
    device: device
  })), bgValue.hoverType === "normal" && /*#__PURE__*/React.createElement(_react.Fragment, null, /*#__PURE__*/React.createElement(Background, {
    name: name,
    value: bgValue.normal,
    onChange: function onChange(val) {
      setBgValue(_objectSpread(_objectSpread({}, bgValue), {}, {
        normal: val
      }));
      _onChange(_objectSpread(_objectSpread({}, bgValue), {}, {
        normal: val
      }));
    },
    device: device
  })));
};
var Background = function Background(_ref2) {
  var name = _ref2.name,
    value = _ref2.value,
    _onChange2 = _ref2.onChange,
    device = _ref2.device;
  var _useState3 = (0, _react.useState)(value || {
      type: "color",
      color: "#0000",
      gradient: _options.advGradientOptions,
      img: {
        url: "",
        desktop: {
          position: "center-center",
          xPosition: 0,
          yPosition: 0,
          attachment: "default",
          repeat: "no-repeat",
          size: "default",
          customSize: "0px"
        },
        tablet: {
          position: "center-center",
          xPosition: 0,
          yPosition: 0,
          attachment: "default",
          repeat: "no-repeat",
          size: "default",
          customSize: "0px"
        },
        mobile: {
          position: "center-center",
          xPosition: 0,
          yPosition: 0,
          attachment: "default",
          repeat: "no-repeat",
          size: "default",
          customSize: "0px"
        }
      }
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    bgValue = _useState4[0],
    setBgValue = _useState4[1];
  var _ref3 = value || bgValue || {},
    type = _ref3.type,
    color = _ref3.color,
    gradient = _ref3.gradient,
    img = _ref3.img;
  var _ref4 = img[device] || {},
    position = _ref4.position,
    xPosition = _ref4.xPosition,
    yPosition = _ref4.yPosition,
    attachment = _ref4.attachment,
    repeat = _ref4.repeat,
    size = _ref4.size,
    customSize = _ref4.customSize;
  var updateBG = function updateBG(property, value, secondP) {
    var thirdP = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var newBG = (0, _immer.produce)(bgValue, function (draft) {
      if (null !== thirdP) {
        draft[property][secondP][thirdP] = value;
      } else if (property && secondP) {
        draft[property][secondP] = value;
      } else {
        draft[property] = value;
      }
    });
    setBgValue(newBG);
    _onChange2(newBG);
  };
  (0, _react.useEffect)(function () {
    return _onChange2(bgValue);
  }, [bgValue]);
  return /*#__PURE__*/React.createElement(_react.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "-7px"
    }
  }, /*#__PURE__*/React.createElement("label", null, name, " Type")), /*#__PURE__*/React.createElement(_Tab.Tab, {
    options: [{
      label: "Color",
      value: "color"
    }, {
      label: "Gradient",
      value: "gradient"
    }, {
      label: "Image",
      value: "image"
    }],
    value: type
    // onChange={(val) => updateBG("type", val)}
    ,
    onChange: function onChange(val) {
      return _onChange2(_objectSpread(_objectSpread({}, value), {}, {
        type: val
      }));
    }
  }), type === "color" && /*#__PURE__*/React.createElement(_DualColorControl.DualColorControl, {
    label: "".concat(name, " Color"),
    value: color
    // onChange={(val) => updateBG("color", val)}
    ,
    onChange: function onChange(val) {
      return _onChange2(_objectSpread(_objectSpread({}, value), {}, {
        color: val
      }));
    }
  }), type === "gradient" && /*#__PURE__*/React.createElement(_BGradient.BGradient, {
    value: gradient
    // onChange={(val) => updateBG("gradient", val)}
    ,
    onChange: function onChange(val) {
      return _onChange2(_objectSpread(_objectSpread({}, value), {}, {
        gradient: val
      }));
    }
  }), type === "image" && /*#__PURE__*/React.createElement(_react.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, name, " Image")), /*#__PURE__*/React.createElement(_MediaArea.MediaArea, {
    label: "Upload Image",
    value: value.img
    // onChange={(val) => updateBG("img", val.url, "url")}
    ,
    onChange: function onChange(val) {
      return _onChange2(_objectSpread(_objectSpread({}, value), {}, {
        img: _objectSpread(_objectSpread({}, img), {}, {
          url: val.url
        })
      }));
    },
    width: "100%",
    height: "100%"
  }), img.url && /*#__PURE__*/React.createElement(_react.Fragment, null, /*#__PURE__*/React.createElement(_components.Flex, {
    className: "mt20 mb5",
    gap: 4,
    align: "center"
  }, /*#__PURE__*/React.createElement(_Label.Label, {
    className: ""
  }, "Position"), /*#__PURE__*/React.createElement(_Device.Device, null)), /*#__PURE__*/React.createElement("div", {
    className: "advExtraMargin"
  }, /*#__PURE__*/React.createElement(_components.SelectControl, {
    value: position,
    options: _options.imgPositionOptions
    // onChange={(val) =>
    //   updateBG("img", { ...img[device], position: val }, device)
    // }
    ,
    onChange: function onChange(val) {
      return _onChange2(_objectSpread(_objectSpread({}, value), {}, {
        img: _objectSpread(_objectSpread({}, img), {}, _defineProperty({}, device, _objectSpread(_objectSpread({}, img[device]), {}, {
          position: val
        })))
      }));
    }
  })), position === "custom" && /*#__PURE__*/React.createElement(_react.Fragment, null, /*#__PURE__*/React.createElement(_components.Flex, {
    className: "mt20 mb5",
    gap: 4,
    align: "center"
  }, /*#__PURE__*/React.createElement(_Label.Label, {
    className: ""
  }, "X Position"), /*#__PURE__*/React.createElement(_Device.Device, null)), /*#__PURE__*/React.createElement(_components.__experimentalUnitControl, {
    units: _options.unitOptions,
    value: xPosition,
    min: -2000,
    max: 2000
    // onChange={(val) =>
    //   updateBG(
    //     "img",
    //     { ...img[device], xPosition: val },
    //     device
    //   )
    // }
    ,
    onChange: function onChange(val) {
      return _onChange2(_objectSpread(_objectSpread({}, value), {}, {
        img: _objectSpread(_objectSpread({}, img), {}, _defineProperty({}, device, _objectSpread(_objectSpread({}, img[device]), {}, {
          xPosition: val
        })))
      }));
    }
  }), /*#__PURE__*/React.createElement(_components.Flex, {
    className: "mt20 mb5",
    gap: 4,
    align: "center"
  }, /*#__PURE__*/React.createElement(_Label.Label, {
    className: ""
  }, "Y Position"), /*#__PURE__*/React.createElement(_Device.Device, null)), /*#__PURE__*/React.createElement("div", {
    className: "advExtraMargin"
  }, /*#__PURE__*/React.createElement(_components.__experimentalUnitControl, {
    units: _options.unitOptions,
    value: yPosition,
    min: -2000,
    max: 2000
    // onChange={(val) =>
    //   updateBG(
    //     "img",
    //     { ...img[device], yPosition: val },
    //     device
    //   )
    // }
    ,
    onChange: function onChange(val) {
      return _onChange2(_objectSpread(_objectSpread({}, value), {}, {
        img: _objectSpread(_objectSpread({}, img), {}, _defineProperty({}, device, _objectSpread(_objectSpread({}, img[device]), {}, {
          yPosition: val
        })))
      }));
    }
  }))), /*#__PURE__*/React.createElement(_components.Flex, {
    className: "mt20 mb5",
    gap: 4,
    align: "center"
  }, /*#__PURE__*/React.createElement(_Label.Label, {
    className: ""
  }, "Attachment"), /*#__PURE__*/React.createElement(_Device.Device, null)), /*#__PURE__*/React.createElement("div", {
    className: "advExtraMargin"
  }, /*#__PURE__*/React.createElement(_components.SelectControl, {
    value: attachment,
    options: _options.imgAttachmentOptions
    // onChange={(val) =>
    //   updateBG("img", { ...img[device], attachment: val }, device)
    // }
    ,
    onChange: function onChange(val) {
      return _onChange2(_objectSpread(_objectSpread({}, value), {}, {
        img: _objectSpread(_objectSpread({}, img), {}, _defineProperty({}, device, _objectSpread(_objectSpread({}, img[device]), {}, {
          attachment: val
        })))
      }));
    }
  })), /*#__PURE__*/React.createElement(_components.Flex, {
    className: "mt20 mb5",
    gap: 4,
    align: "center"
  }, /*#__PURE__*/React.createElement(_Label.Label, {
    className: ""
  }, "Repeat"), /*#__PURE__*/React.createElement(_Device.Device, null)), /*#__PURE__*/React.createElement("div", {
    className: "advExtraMargin"
  }, /*#__PURE__*/React.createElement(_components.SelectControl, {
    value: repeat,
    options: _options.imgRepeatOptions
    // onChange={(val) =>
    //   updateBG("img", { ...img[device], repeat: val }, device)
    // }
    ,
    onChange: function onChange(val) {
      return _onChange2(_objectSpread(_objectSpread({}, value), {}, {
        img: _objectSpread(_objectSpread({}, img), {}, _defineProperty({}, device, _objectSpread(_objectSpread({}, img[device]), {}, {
          repeat: val
        })))
      }));
    }
  })), /*#__PURE__*/React.createElement(_components.Flex, {
    className: "mt20 mb5",
    gap: 4,
    align: "center"
  }, /*#__PURE__*/React.createElement(_Label.Label, {
    className: ""
  }, "Size"), /*#__PURE__*/React.createElement(_Device.Device, null)), /*#__PURE__*/React.createElement("div", {
    className: "advExtraMargin"
  }, /*#__PURE__*/React.createElement(_components.SelectControl, {
    value: size,
    options: _options.imgSizeOptions
    // onChange={(val) =>
    //   updateBG("img", { ...img[device], size: val }, device)
    // }
    ,
    onChange: function onChange(val) {
      return _onChange2(_objectSpread(_objectSpread({}, value), {}, {
        img: _objectSpread(_objectSpread({}, img), {}, _defineProperty({}, device, _objectSpread(_objectSpread({}, img[device]), {}, {
          size: val
        })))
      }));
    }
  })), size === "custom" && /*#__PURE__*/React.createElement(_react.Fragment, null, /*#__PURE__*/React.createElement(_components.Flex, {
    className: "mt20 mb5",
    gap: 4,
    align: "center"
  }, /*#__PURE__*/React.createElement(_Label.Label, {
    className: ""
  }, "Width"), /*#__PURE__*/React.createElement(_Device.Device, null)), /*#__PURE__*/React.createElement(_components.__experimentalUnitControl, {
    units: _options.unitOptions,
    value: customSize,
    min: -2000,
    max: 2000
    // onChange={(val) =>
    //   updateBG(
    //     "img",
    //     { ...img[device], customSize: val },
    //     device
    //   )
    // }
    ,
    onChange: function onChange(val) {
      return _onChange2(_objectSpread(_objectSpread({}, value), {}, {
        img: _objectSpread(_objectSpread({}, img), {}, _defineProperty({}, device, _objectSpread(_objectSpread({}, img[device]), {}, {
          customSize: val
        })))
      }));
    }
  })))), " ");
};
//# sourceMappingURL=AdvBackground.js.map