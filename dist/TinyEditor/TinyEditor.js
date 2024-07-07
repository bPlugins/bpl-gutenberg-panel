"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TinyEditor = void 0;
var _tinymceReact = require("@tinymce/tinymce-react");
var _react = require("react");
require("./tinyEditor.css");
var _blockEditor = require("@wordpress/block-editor");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } /* eslint-disable no-unused-vars */
var Button = wp.components.Button;

/**
 * TinyEditor component.
 *
 * @component
 * @param {Object} props
 * @param {String} [props.value]
 * @param {Function} [props.onChange=() => {}]
 * @param {Number} [props.height=180] - Optional
 * @returns {JSX.Element}
 */

var TinyEditor = exports.TinyEditor = function TinyEditor(props) {
  var value = props.value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$height = props.height,
    height = _props$height === void 0 ? 180 : _props$height,
    defaults = props["default"];
  var editorRef = (0, _react.useRef)(null);
  var tinyRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    media = _useState2[0],
    setMedia = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    content = _useState4[0],
    setContent = _useState4[1];
  var _useState5 = (0, _react.useState)(value || defaults || 'This is the initial content of the editor'),
    _useState6 = _slicedToArray(_useState5, 2),
    initialValue = _useState6[0],
    setInitialValue = _useState6[1];
  var log = function log() {
    if (editorRef.current) {
      setContent(editorRef.current.getContent());
    }
  };
  (0, _react.useEffect)(function () {
    var _tinyRef$current, _tinyRef$current2;
    // const iframe = document?.querySelector('iframe');
    var iframeContent = ((_tinyRef$current = tinyRef.current) === null || _tinyRef$current === void 0 ? void 0 : _tinyRef$current.contentDocument) || ((_tinyRef$current2 = tinyRef.current) === null || _tinyRef$current2 === void 0 || (_tinyRef$current2 = _tinyRef$current2.contentWindow) === null || _tinyRef$current2 === void 0 ? void 0 : _tinyRef$current2.document);
    var tinymce = iframeContent === null || iframeContent === void 0 ? void 0 : iframeContent.querySelector('.mce-content-body');
    var createImgEl = document.createElement('img');
    createImgEl.src = media.url;
    createImgEl.style.maxWidth = '100%';
    createImgEl.style.maxHeight = '100%';
    tinymce === null || tinymce === void 0 || tinymce.appendChild(createImgEl);
  }, [media.url]);
  (0, _react.useEffect)(function () {
    onChange(content);
  }, [content]);
  (0, _react.useEffect)(function () {
    setContent(value);
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_blockEditor.MediaUploadCheck, null, /*#__PURE__*/React.createElement(_blockEditor.MediaUpload, {
    gallery: true,
    onSelect: function onSelect(value) {
      return setMedia(value);
    },
    allowedTypes: ['image/svg+xml'],
    render: function render(_ref) {
      var open = _ref.open;
      return /*#__PURE__*/React.createElement("button", {
        className: "custom-tinymce-button",
        onClick: open
      }, /*#__PURE__*/React.createElement("span", {
        className: "dashicons dashicons-admin-media"
      }), "Add Media");
    },
    multiple: false
  })), /*#__PURE__*/React.createElement(_tinymceReact.Editor, {
    ref: tinyRef,
    apiKey: "d1lxc40qcx6ad71i4bn1ih4d8l8oalalg9efymoc5l3ay9qo",
    onChange: function onChange(evt, editor) {
      return setContent(editor.getContent());
    },
    onInit: function onInit(evt, editor) {
      return editorRef.current = editor;
    },
    initialValue: initialValue,
    init: {
      height: height,
      selector: 'textarea',
      menubar: false,
      plugins: ['lists link image charmap', 'fullscreen', 'media paste'],
      toolbar: 'undo redo formatselect bold italic link alignleft aligncenter alignright alignjustify bullist numlist outdent indent removeformat specilchar fullscreen',
      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      margin: '10px 0'
    },
    variant: "primary",
    onClick: log
  }, "Apply")));
};
//# sourceMappingURL=TinyEditor.js.map