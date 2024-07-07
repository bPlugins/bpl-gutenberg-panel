"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Device = void 0;
var _compose = require("@wordpress/compose");
var _data = require("@wordpress/data");
var _react = require("react");
require("./style.css");
var Device = exports.Device = (0, _compose.compose)((0, _data.withSelect)(function (select) {
  var _experimentalGetPrev;
  var _select = select("core/edit-post"),
    __experimentalGetPreviewDeviceType = _select.__experimentalGetPreviewDeviceType;
  return {
    device: (_experimentalGetPrev = __experimentalGetPreviewDeviceType()) === null || _experimentalGetPrev === void 0 ? void 0 : _experimentalGetPrev.toLowerCase()
  };
}), (0, _data.withDispatch)(function (dispatch) {
  return {
    setDevice: function setDevice(device) {
      return dispatch("core/edit-post").__experimentalSetPreviewDeviceType(device);
    }
  };
}))(function (_ref) {
  var style = _ref.style,
    className = _ref.className,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? "horizontal" : _ref$position,
    device = _ref.device,
    setDevice = _ref.setDevice,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange;
  // const [show, setShow] = useState(false);
  var deviceValue = [{
    label: "Desktop",
    name: "desktop",
    icon: "dashicons-desktop"
  }, {
    label: "Tablet",
    name: "tablet",
    icon: "dashicons-tablet"
  }, {
    label: "Mobile",
    name: "mobile",
    icon: "dashicons-smartphone"
  }];
  return /*#__PURE__*/React.createElement(_react.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: style,
    className: className
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: position === "horizontal" ? "flex" : "grid",
      gap: "5px"
    }
  }, deviceValue.map(function (_ref2, i) {
    var label = _ref2.label,
      name = _ref2.name,
      icon = _ref2.icon;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: function onClick() {
        // setShow(false);
        setDevice(label);
        onChange(label.toLowerCase());
      },
      className: "advancedOptionssingle-device ".concat(name === device ? "active" : "")
    }, /*#__PURE__*/React.createElement("span", {
      className: "dashicons ".concat(icon, " ").concat(name === device ? "active" : "", " ")
    }));
  }))));
});
//# sourceMappingURL=Device.js.map