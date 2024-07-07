"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdvOverlay = void 0;
var _components = require("@wordpress/components");
var _immer = require("immer");
var _react = require("react");
var _AdvBackground = require("../AdvBackground/AdvBackground");
var _options = require("../utils/options");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var blendOptions = [{
  label: "Normal",
  value: "normal"
}, {
  label: "Multiply",
  value: "multiply"
}, {
  label: "Screen",
  value: "screen"
}, {
  label: "Overlay",
  value: "overlay"
}, {
  label: "Darken",
  value: "darken"
}, {
  label: "Lighten",
  value: "lighten"
}, {
  label: "Color Dodge",
  value: "color-dodge"
}, {
  label: "Saturation",
  value: "saturation"
}, {
  label: "Color",
  value: "color"
}, {
  label: "Luminosity",
  value: "luminosity"
}];
var AdvOverlay = exports.AdvOverlay = function AdvOverlay(props) {
  var value = props.value,
    onChange = props.onChange;
  var _useState = (0, _react.useState)(value || {
      isEnabled: false,
      colors: _options.advBgOptions,
      opacity: 1,
      blend: "normal",
      isCssFilter: false,
      blur: 0,
      brightness: 100,
      contrast: 100,
      saturation: 100,
      hue: 0
    }),
    _useState2 = _slicedToArray(_useState, 2),
    overlay = _useState2[0],
    setOverlay = _useState2[1];
  // let overlay = value || { colors, opacity, blend };
  var _overlay$isEnabled = overlay.isEnabled,
    isEnabled = _overlay$isEnabled === void 0 ? false : _overlay$isEnabled,
    _overlay$colors = overlay.colors,
    colors = _overlay$colors === void 0 ? _options.advBgOptions : _overlay$colors,
    _overlay$opacity = overlay.opacity,
    opacity = _overlay$opacity === void 0 ? 1 : _overlay$opacity,
    _overlay$blend = overlay.blend,
    blend = _overlay$blend === void 0 ? "normal" : _overlay$blend,
    _overlay$isCssFilter = overlay.isCssFilter,
    isCssFilter = _overlay$isCssFilter === void 0 ? false : _overlay$isCssFilter,
    _overlay$blur = overlay.blur,
    blur = _overlay$blur === void 0 ? 0 : _overlay$blur,
    _overlay$brightness = overlay.brightness,
    brightness = _overlay$brightness === void 0 ? 100 : _overlay$brightness,
    _overlay$contrast = overlay.contrast,
    contrast = _overlay$contrast === void 0 ? 100 : _overlay$contrast,
    _overlay$saturation = overlay.saturation,
    saturation = _overlay$saturation === void 0 ? 100 : _overlay$saturation,
    _overlay$hue = overlay.hue,
    hue = _overlay$hue === void 0 ? 0 : _overlay$hue;
  var updateOverlay = function updateOverlay(property, value) {
    var childP = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var newBG = (0, _immer.produce)(overlay, function (draft) {
      if (null !== childP) {
        draft[property][childP] = value;
      } else {
        draft[property] = value;
      }
    });
    setOverlay(newBG);
    onChange(newBG);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "advExtraMargin"
  }, /*#__PURE__*/React.createElement(_components.ToggleControl, {
    label: "Enable Overlay",
    checked: isEnabled,
    value: isEnabled,
    onChange: function onChange(val) {
      return updateOverlay("isEnabled", val);
    }
  })), isEnabled && /*#__PURE__*/React.createElement(_react.Fragment, null, /*#__PURE__*/React.createElement(_AdvBackground.AdvBackground, {
    name: "Overlay",
    value: colors,
    onChange: function onChange(val) {
      return updateOverlay("colors", val);
    }
  }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("div", {
    className: "advExtraMargin"
  }, /*#__PURE__*/React.createElement(_components.RangeControl, {
    label: "Opacity",
    min: 0,
    max: 1,
    value: opacity,
    step: 0.01,
    onChange: function onChange(val) {
      return updateOverlay("opacity", val);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "advExtraMargin"
  }, /*#__PURE__*/React.createElement(_components.SelectControl, {
    label: "Blend Mode",
    labelPosition: "left",
    options: blendOptions,
    value: blend,
    onChange: function onChange(val) {
      return updateOverlay("blend", val);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "advExtraMargin"
  }, /*#__PURE__*/React.createElement(_components.ToggleControl, {
    label: "CSS Filters",
    checked: isCssFilter,
    value: isCssFilter,
    onChange: function onChange(val) {
      return updateOverlay("isCssFilter", val);
    }
  })), isCssFilter && /*#__PURE__*/React.createElement(_react.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "advExtraMargin"
  }, /*#__PURE__*/React.createElement(_components.RangeControl, {
    label: "Blur",
    min: 0,
    max: 10,
    value: blur,
    onChange: function onChange(val) {
      return updateOverlay("blur", val);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "advExtraMargin"
  }, /*#__PURE__*/React.createElement(_components.RangeControl, {
    label: "Brightness",
    min: 0,
    max: 200,
    value: brightness,
    onChange: function onChange(val) {
      return updateOverlay("brightness", val);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "advExtraMargin"
  }, /*#__PURE__*/React.createElement(_components.RangeControl, {
    label: "Contrast",
    min: 0,
    max: 200,
    value: contrast,
    onChange: function onChange(val) {
      return updateOverlay("contrast", val);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "advExtraMargin"
  }, /*#__PURE__*/React.createElement(_components.RangeControl, {
    label: "Saturation",
    min: 0,
    max: 200,
    value: saturation,
    onChange: function onChange(val) {
      return updateOverlay("saturation", val);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "advExtraMargin"
  }, /*#__PURE__*/React.createElement(_components.RangeControl, {
    label: "Hue",
    min: 0,
    max: 360,
    value: hue,
    onChange: function onChange(val) {
      return updateOverlay("hue", val);
    }
  })))));
};
//# sourceMappingURL=AdvOverlay.js.map