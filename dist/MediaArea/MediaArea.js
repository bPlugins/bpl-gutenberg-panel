"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaArea = void 0;
require("./mediaArea.css");
var MediaUpload = wp.blockEditor.MediaUpload;
var MediaArea = exports.MediaArea = function MediaArea(props) {
  var _props$types = props.types,
    types = _props$types === void 0 ? ['image'] : _props$types,
    value = props.value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$default = props["default"],
    defaults = _props$default === void 0 ? "" : _props$default,
    _props$height = props.height,
    height = _props$height === void 0 ? '50px' : _props$height,
    _props$width = props.width,
    width = _props$width === void 0 ? '50px' : _props$width,
    _props$label = props.label,
    label = _props$label === void 0 ? 'Choose SVG' : _props$label,
    style = props.style,
    className = props.className;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: style,
    className: "custom-media-area-component ".concat(className)
  }, /*#__PURE__*/React.createElement(MediaUpload, {
    gallery: false,
    onSelect: function onSelect(value) {
      return onChange(value);
    },
    value: value,
    allowedTypes: types,
    render: function render(_ref) {
      var open = _ref.open;
      return /*#__PURE__*/React.createElement("div", {
        className: "media-area-container"
      }, defaults ? /*#__PURE__*/React.createElement("img", {
        onClick: open,
        style: {
          height: height,
          width: width
        },
        className: "media-area-image",
        src: (value === null || value === void 0 ? void 0 : value.url) || defaults,
        alt: ""
      }) : value !== null && value !== void 0 && value.url ? /*#__PURE__*/React.createElement("img", {
        onClick: open,
        style: {
          height: height,
          width: width
        },
        className: "media-area-image",
        src: (value === null || value === void 0 ? void 0 : value.url) || defaults,
        alt: ""
      }) : /*#__PURE__*/React.createElement("div", {
        className: "media-plusBtn-wrapper",
        onClick: open
      }, /*#__PURE__*/React.createElement("div", {
        className: "mediaPlus-btn-circle"
      }, /*#__PURE__*/React.createElement("svg", {
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 448 512",
        className: "mediaPlusBtn",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
      })))), /*#__PURE__*/React.createElement("div", {
        onClick: function onClick() {
          return onChange('');
        },
        className: "media-delete"
      }, /*#__PURE__*/React.createElement("svg", {
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 448 512",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"
      }))), /*#__PURE__*/React.createElement("div", {
        onClick: open,
        className: "media-bottom"
      }, /*#__PURE__*/React.createElement("span", null, label)));
    },
    multiple: false
  })));
};
//# sourceMappingURL=MediaArea.js.map