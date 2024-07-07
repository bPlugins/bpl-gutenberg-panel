"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vwUnit = exports.vhUnit = exports.unitOptions = exports.sides = exports.remUnit = exports.pxUnit = exports.perUnit = exports.imgSizeOptions = exports.imgRepeatOptions = exports.imgPositionOptions = exports.imgAttachmentOptions = exports.emUnit = exports.borderStyles = exports.advGradientOptions = exports.advBgOptions = void 0;
var unitOptions = exports.unitOptions = [{
  label: "px",
  value: "px"
}, {
  label: "%",
  value: "%"
}, {
  label: "em",
  value: "em"
}];
var imgPositionOptions = exports.imgPositionOptions = [{
  label: "Default",
  value: "default"
}, {
  label: "Center Center",
  value: "center center"
}, {
  label: "Center Left",
  value: "center left"
}, {
  label: "Center Right",
  value: "center right"
}, {
  label: "Top Center",
  value: "center top"
}, {
  label: "Top Left",
  value: "left top"
}, {
  label: "Top Right",
  value: "left bottom"
}, {
  label: "Bottom Center",
  value: "right center"
}, {
  label: "Bottom Left",
  value: "right top"
}, {
  label: "Bottom Right",
  value: "right bottom"
}, {
  label: "Custom",
  value: "custom"
}];
var imgAttachmentOptions = exports.imgAttachmentOptions = [{
  label: "Default",
  value: "default"
}, {
  label: "Fixed",
  value: "fixed"
}, {
  label: "Scroll",
  value: "scroll"
}];
var imgRepeatOptions = exports.imgRepeatOptions = [{
  label: "Default",
  value: "default"
}, {
  label: "Repeat",
  value: "repeat"
}, {
  label: "Repeat-X",
  value: "repeat-x"
}, {
  label: "Repeat-Y",
  value: "repeat-y"
}, {
  label: "No-Repeat",
  value: "no-repeat"
}];
var imgSizeOptions = exports.imgSizeOptions = [{
  label: "Default",
  value: "default"
}, {
  label: "Auto",
  value: "auto"
}, {
  label: "Cover",
  value: "cover"
}, {
  label: "Contain",
  value: "contain"
}, {
  label: "Custom",
  value: "custom"
}];
var advBgOptions = exports.advBgOptions = {
  normal: {
    type: "color",
    color: "#0000",
    gradient: {},
    img: {}
  },
  hover: {
    type: "color",
    color: "#0000",
    gradient: {},
    img: {}
  },
  hoverType: "normal"
};
var advGradientOptions = exports.advGradientOptions = {
  type: "linear",
  radialType: "ellipse",
  colors: [{
    color: "",
    position: 0
  }, {
    color: "",
    position: 0
  }],
  centerPositions: {
    x: 0,
    y: 0
  },
  angel: 90
};
var borderStyles = exports.borderStyles = [{
  label: "Solid",
  value: "solid"
}, {
  label: "Dashed",
  value: "dashed"
}, {
  label: "Dotted",
  value: "dotted"
}, {
  label: "Double",
  value: "double"
}, {
  label: "Groove",
  value: "groove"
}, {
  label: "Inset",
  value: "inset"
}, {
  label: "Outset",
  value: "outset"
}, {
  label: "Ridge",
  value: "ridge"
}];
var pxUnit = exports.pxUnit = function pxUnit() {
  var def = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return {
    value: "px",
    label: "px",
    "default": def
  };
};
var perUnit = exports.perUnit = function perUnit() {
  var def = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return {
    value: "%",
    label: "%",
    "default": def
  };
};
var emUnit = exports.emUnit = function emUnit() {
  var def = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return {
    value: "em",
    label: "em",
    "default": def
  };
};
var remUnit = exports.remUnit = function remUnit() {
  var def = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return {
    value: "rem",
    label: "rem",
    "default": def
  };
};
var vwUnit = exports.vwUnit = function vwUnit() {
  var def = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return {
    value: "vw",
    label: "vw",
    "default": def
  };
};
var vhUnit = exports.vhUnit = function vhUnit() {
  var def = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return {
    value: "vh",
    label: "vh",
    "default": def
  };
};
var sides = exports.sides = [{
  value: "all",
  label: "All Sides"
}, {
  value: "top",
  label: "Top"
}, {
  value: "right",
  label: "Right"
}, {
  value: "bottom",
  label: "Bottom"
}, {
  value: "left",
  label: "Left"
}, {
  value: "topRight",
  label: "Top Right"
}, {
  value: "topBottom",
  label: "Top Bottom"
}, {
  value: "topLeft",
  label: "Top Left"
}, {
  value: "topRightBottom",
  label: "Top Right Bottom"
}, {
  value: "topRightLeft",
  label: "Top Right Left"
}, {
  value: "topBottomLeft",
  label: "Top Bottom Left"
}, {
  value: "rightBottom",
  label: "Right Bottom"
}, {
  value: "rightLeft",
  label: "Right Left"
}, {
  value: "rightBottomLeft",
  label: "Right Bottom Left"
}, {
  value: "bottomLeft",
  label: "Bottom Left"
}];
//# sourceMappingURL=options.js.map