"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = void 0;
var Label = exports.Label = function Label(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? 'mt20 mb5' : _props$className,
    htmlFor = props.htmlFor,
    children = props.children;
  return /*#__PURE__*/React.createElement("label", {
    className: "bPlLabel ".concat(className),
    htmlFor: htmlFor
  }, children);
};
//# sourceMappingURL=Label.js.map