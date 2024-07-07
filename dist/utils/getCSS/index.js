"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSingleShadowCSS = exports.getOverlayCSS = exports.getMultiShadowCSS = exports.getGradientCSS = exports.getBoxCSS = exports.getBorderCSS = exports.getBackgroundCSS = void 0;
//getBoxCss
var getBoxCSS = exports.getBoxCSS = function getBoxCSS(value, property) {
  if (value) {
    var result = Object.keys(value).map(function (key) {
      return "".concat(property, "-").concat(key, ":").concat(value[key], ";");
    });
    return result.join(" ");
  }
  return "";
};

//gradient
var getGradientCSS = exports.getGradientCSS = function getGradientCSS(gradient) {
  var type = gradient.type,
    radialType = gradient.radialType,
    colors = gradient.colors,
    centerPositions = gradient.centerPositions,
    angel = gradient.angel;
  if (gradient) {
    var gradientColors = colors === null || colors === void 0 ? void 0 : colors.map(function (_ref) {
      var color = _ref.color,
        position = _ref.position;
      return "".concat(color, " ").concat(position, "%");
    });
    var liner = "linear-gradient(".concat(angel, "deg, ").concat(gradientColors, ")");
    var radial = "radial-gradient(".concat(radialType, " at ").concat(centerPositions === null || centerPositions === void 0 ? void 0 : centerPositions.x, "% ").concat(centerPositions === null || centerPositions === void 0 ? void 0 : centerPositions.y, "%,").concat(gradientColors, ")");
    return type === "linear" ? "background:".concat(liner, ";") : "background:".concat(radial, ";");
  }
  return "";
};

//get image position
var getImagePosition = function getImagePosition(img) {
  return "".concat(img !== null && img !== void 0 && img.position && (img === null || img === void 0 ? void 0 : img.position) !== "default" ? "background-position: ".concat(img.position !== "custom" ? "".concat(img.position, ";") : "".concat(img.xPosition, " ").concat(img.yPosition, ";")) : "", "\n  ").concat(img !== null && img !== void 0 && img.attachment && (img === null || img === void 0 ? void 0 : img.attachment) !== "default" ? "background-attachment: ".concat(img.attachment, ";") : "", "\n    ").concat(img !== null && img !== void 0 && img.repeat && (img === null || img === void 0 ? void 0 : img.repeat) !== "default" ? "background-repeat: ".concat(img.repeat, ";") : "", "\n    ").concat(img !== null && img !== void 0 && img.size && (img === null || img === void 0 ? void 0 : img.size) !== "default" ? "background-size:".concat(img.size !== "custom" ? img.size : "".concat(img.customSize, " auto"), ";") : "");
};

//background image
var getImageCSS = function getImageCSS(img) {
  var desktop, tablet, mobile;
  if (Object.keys(img).length > 1) {
    if (img !== null && img !== void 0 && img.desktop) {
      desktop = getImagePosition(img === null || img === void 0 ? void 0 : img.desktop, "desktop");
    }
    if (img !== null && img !== void 0 && img.tablet) {
      tablet = getImagePosition(img === null || img === void 0 ? void 0 : img.tablet, "tablet");
    }
    if (img !== null && img !== void 0 && img.mobile) {
      mobile = getImagePosition(img === null || img === void 0 ? void 0 : img.mobile, "mobile");
    }
  }
  if (img) {
    return {
      global: "background-image: url(".concat(img.url, ");"),
      desktop: img.url ? desktop : "",
      tablet: img.url ? tablet : "",
      mobile: img.url ? mobile : ""
    };
  }
  return "";
};

//background color
var getColor = function getColor(color) {
  return " ".concat(color ? "background: ".concat(color, ";") : "");
};

//getBorderCss
var getBorderCSS = exports.getBorderCSS = function getBorderCSS(border) {
  var _ref2 = border || {},
    _ref2$width = _ref2.width,
    width = _ref2$width === void 0 ? "0px" : _ref2$width,
    _ref2$style = _ref2.style,
    style = _ref2$style === void 0 ? "solid" : _ref2$style,
    _ref2$color = _ref2.color,
    color = _ref2$color === void 0 ? "#0000" : _ref2$color,
    _ref2$side = _ref2.side,
    side = _ref2$side === void 0 ? "all" : _ref2$side,
    _ref2$radius = _ref2.radius,
    radius = _ref2$radius === void 0 ? "0px" : _ref2$radius;
  var borderSideCheck = function borderSideCheck(s) {
    var bSide = side === null || side === void 0 ? void 0 : side.toLowerCase();
    return (bSide === null || bSide === void 0 ? void 0 : bSide.includes("all")) || (bSide === null || bSide === void 0 ? void 0 : bSide.includes(s));
  };
  var borderCSS = "".concat(width, " ").concat(style, " ").concat(color);
  var styles = "\n\t\t".concat(["top", "right", "bottom", "left"].map(function (side) {
    return borderSideCheck(side) ? "border-".concat(side, ": ").concat(borderCSS, ";") : "";
  }).join(""), "\n\t\t").concat(!radius ? "" : "border-radius: ".concat(radius, ";"), "\n\t");
  return styles;
};

//getSingleShadowCSS
var getSingleShadowCSS = exports.getSingleShadowCSS = function getSingleShadowCSS(shadow) {
  var _ref3 = shadow || {},
    _ref3$type = _ref3.type,
    type = _ref3$type === void 0 ? "box" : _ref3$type,
    _ref3$hOffset = _ref3.hOffset,
    hOffset = _ref3$hOffset === void 0 ? "0px" : _ref3$hOffset,
    _ref3$vOffset = _ref3.vOffset,
    vOffset = _ref3$vOffset === void 0 ? "0px" : _ref3$vOffset,
    _ref3$blur = _ref3.blur,
    blur = _ref3$blur === void 0 ? "0px" : _ref3$blur,
    _ref3$spreed = _ref3.spreed,
    spreed = _ref3$spreed === void 0 ? "0px" : _ref3$spreed,
    _ref3$color = _ref3.color,
    color = _ref3$color === void 0 ? "#7090b0" : _ref3$color,
    _ref3$isInset = _ref3.isInset,
    isInset = _ref3$isInset === void 0 ? false : _ref3$isInset;
  var inset = isInset ? "inset" : "";
  var offsetBlur = "".concat(hOffset, " ").concat(vOffset, " ").concat(blur);
  var styles = "text" === type ? "".concat(offsetBlur, " ").concat(color) : "".concat(offsetBlur, " ").concat(spreed, " ").concat(color, " ").concat(inset);
  return styles || "none";
};

// getMultiShadowCSS
var getMultiShadowCSS = exports.getMultiShadowCSS = function getMultiShadowCSS(value) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'box';
  var styles = '';
  value === null || value === void 0 || value.map(function (item, index) {
    var _ref4 = item || {},
      _ref4$hOffset = _ref4.hOffset,
      hOffset = _ref4$hOffset === void 0 ? '0px' : _ref4$hOffset,
      _ref4$vOffset = _ref4.vOffset,
      vOffset = _ref4$vOffset === void 0 ? '0px' : _ref4$vOffset,
      _ref4$blur = _ref4.blur,
      blur = _ref4$blur === void 0 ? '0px' : _ref4$blur,
      _ref4$spreed = _ref4.spreed,
      spreed = _ref4$spreed === void 0 ? '0px' : _ref4$spreed,
      _ref4$color = _ref4.color,
      color = _ref4$color === void 0 ? '#7090b0' : _ref4$color,
      _ref4$isInset = _ref4.isInset,
      isInset = _ref4$isInset === void 0 ? false : _ref4$isInset;
    var inset = isInset ? 'inset' : '';
    var offsetBlur = "".concat(hOffset, " ").concat(vOffset, " ").concat(blur);
    var isComa = index + 1 >= value.length ? '' : ', ';
    styles += 'text' === type ? "".concat(offsetBlur, " ").concat(color).concat(isComa) : "".concat(offsetBlur, " ").concat(spreed, " ").concat(color, " ").concat(inset).concat(isComa);
  });
  return styles || 'none';
};

//background
var getBackgroundCSS = exports.getBackgroundCSS = function getBackgroundCSS(background, selector) {
  var normal = background.normal,
    hover = background.hover;
  var type = normal.type,
    color = normal.color,
    gradient = normal.gradient,
    img = normal.img;
  var hoverType = hover.type,
    hoverColor = hover.color,
    hoverGradient = hover.gradient,
    hoverImg = hover.img,
    transition = hover.transition;
  var bg = type === "color" ? getColor(color) : type === "gradient" ? getGradientCSS(gradient) : type === "image" ? getImageCSS(img).global : "";
  var hoverBg = hoverType === "color" ? getColor(hoverColor) : hover.type === "gradient" ? getGradientCSS(hoverGradient) : hover.type === "image" ? getImageCSS(hoverImg).global : "";
  var desktop = type === "image" ? getImageCSS(img).desktop : "";
  var tablet = type === "image" ? getImageCSS(img).tablet : "";
  var mobile = type === "image" ? getImageCSS(img).mobile : "";
  var hoverDesktop = hoverType === "image" ? getImageCSS(hover.img).desktop : "";
  var hoverTablet = hoverType === "image" ? getImageCSS(hover.img).tablet : "";
  var hoverMobile = hoverType === "image" ? getImageCSS(hover.img).mobile : "";
  return "".concat(selector, "{\n    ").concat(bg, "\n    ").concat(desktop, "\n    ").concat(transition ? "transition:all ".concat(transition, "s;") : "", "\n  }\n\n  ").concat(selector, ":hover{\n    ").concat(hoverBg, "\n    ").concat(hoverDesktop, "\n  }\n\n  @media only screen and (min-width:641px) and (max-width: 1024px) {\n      ").concat(selector, "{\n    ").concat(tablet, "\n  }\n  ").concat(selector, ":hover{\n    ").concat(hoverTablet, "\n  }\n  }\n  @media only screen and (max-width: 640px) {\n  ").concat(selector, "{\n    ").concat(mobile, "\n  }\n  ").concat(selector, ":hover{\n    ").concat(hoverMobile, "\n  }\n  }").replace(/\s+/g, " ").trim();
};
var getOverlayBGCSS = function getOverlayBGCSS(background) {
  var normal = background.normal,
    hover = background.hover;
  var type = normal.type,
    color = normal.color,
    gradient = normal.gradient,
    img = normal.img;
  var hoverType = hover.type,
    hoverColor = hover.color,
    hoverGradient = hover.gradient,
    hoverImg = hover.img,
    transition = hover.transition;
  var bg = type === "color" ? getColor(color) : type === "gradient" ? getGradientCSS(gradient) : type === "image" ? getImageCSS(img).global : "";
  var hoverBg = hoverType === "color" ? getColor(hoverColor) : hover.type === "gradient" ? getGradientCSS(hoverGradient) : hover.type === "image" ? getImageCSS(hoverImg).global : "";
  var desktop = type === "image" ? getImageCSS(img).desktop : "";
  var tablet = type === "image" ? getImageCSS(img).tablet : "";
  var mobile = type === "image" ? getImageCSS(img).mobile : "";
  return {
    normal: {
      background: bg,
      desktop: desktop,
      tablet: tablet,
      mobile: mobile
    },
    hover: {
      background: hoverBg,
      desktop: hoverType === "image" ? getImageCSS(hover.img).desktop : "",
      tablet: hoverType === "image" ? getImageCSS(hover.img).tablet : "",
      mobile: hoverType === "image" ? getImageCSS(hover.img).mobile : ""
    },
    transition: transition
  };
};

//overlay
var getOverlayCSS = exports.getOverlayCSS = function getOverlayCSS(overlay, selector) {
  var colors = overlay.colors,
    opacity = overlay.opacity,
    blend = overlay.blend,
    isCssFilter = overlay.isCssFilter,
    blur = overlay.blur,
    brightness = overlay.brightness,
    contrast = overlay.contrast,
    saturation = overlay.saturation,
    hue = overlay.hue,
    isEnabled = overlay.isEnabled;
  var filter = isCssFilter ? "filter:brightness(".concat(brightness, "%) contrast(").concat(contrast, "%) saturate(").concat(saturation, "%) blur(").concat(blur, "px) hue-rotate(").concat(hue, "deg);\n    -webkit-filter:brightness(").concat(brightness, "%) contrast(").concat(contrast, "%) saturate(").concat(saturation, "%) blur(").concat(blur, "px) hue-rotate(").concat(hue, "deg);") : "";
  // brightness(100 % ) contrast(100 % ) saturate(100 % ) blur(0.9px) hue - rotate(0deg)
  // -webkit - filter: brightness(${ brightness } %) contrast(${ contrast } %) saturate(${ saturation } %) blur(${ blur }px) hue - rotate(${ hue }deg);
  var blendCss = blend ? "mix-blend-mode: ".concat(blend, ";") : "";
  var transition = transition ? "transition:all ".concat(transition, "s;") : "";
  return isEnabled ? "".concat(selector, "::after{\n    content:\"\";\n    position:absolute;\n    inset:0;\n    ").concat(getOverlayBGCSS(colors).normal.background, "\n    ").concat(getOverlayBGCSS(colors).normal.desktop, "\n    opacity:").concat(opacity, ";\n    ").concat(blendCss, "\n    ").concat(filter, "\n    ").concat(transition, "\n  }\n\n  ").concat(selector, ":hover::after{\n    content:\"\";\n    position:absolute;\n    inset:0;\n    ").concat(getOverlayBGCSS(colors).hover.background, "\n    ").concat(getOverlayBGCSS(colors).hover.desktop, "\n  }\n\n  @media only screen and (min-width:641px) and (max-width: 1024px) {\n      ").concat(selector, "::after{\n    ").concat(getOverlayBGCSS(colors).normal.tablet, "\n  }\n  ").concat(selector, ":hover::after{\n    ").concat(getOverlayBGCSS(colors).hover.tablet, "\n  }\n  }\n\n  @media only screen and (max-width: 640px) {\n  ").concat(selector, "::after{\n    ").concat(getOverlayBGCSS(colors).normal.mobile, "\n  }\n  ").concat(selector, ":hover::after{\n    ").concat(getOverlayBGCSS(colors).hover.mobile, "\n  }\n  }").replace(/\s+/g, " ").trim() : "";

  // return {
  //   normal: {
  //     background: getBackgroundCSS(colors).normal.background,
  //     desktop: getBackgroundCSS(colors).normal.desktop,
  //     tablet: getBackgroundCSS(colors).normal.tablet,
  //     mobile: getBackgroundCSS(colors).normal.mobile,
  //   },
  //   hover: {
  //     background: getBackgroundCSS(colors).hover.background,
  //     desktop: getBackgroundCSS(colors).hover.desktop,
  //     tablet: getBackgroundCSS(colors).hover.tablet,
  //     mobile: getBackgroundCSS(colors).hover.mobile,
  //   },
  //   transition: getBackgroundCSS(colors).transition,
  //   opacity: opacity ? `opacity: ${opacity};` : "",
  //   blend: blend ? `mix-blend-mode: ${blend};` : "",
  //   filter,
  // };
};
//# sourceMappingURL=index.js.map