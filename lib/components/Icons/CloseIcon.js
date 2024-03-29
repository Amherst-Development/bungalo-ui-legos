"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CloseIcon = function CloseIcon(props) {
  var size = props.size,
      style = props.style,
      className = props.className;
  return _react.default.createElement("svg", {
    width: size,
    height: size,
    style: style,
    className: className,
    viewBox: "0 0 18 18",
    "aria-labelledby": "close-icon",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("title", {
    id: "close-icon"
  }, "Close"), _react.default.createElement("polygon", {
    points: "0 0 18 0 18 18 0 18"
  }), _react.default.createElement("polygon", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: ".5",
    points: "9.931 9.014 14.847 4.001 14.019 3.188 9.111 8.193 4.001 3.18 3.188 4.009 8.29 9.014 3.188 14.019 4.001 14.847 9.111 9.834 14.019 14.84 14.847 14.027"
  })));
};

CloseIcon.propTypes = {
  size: _propTypes.default.string,
  style: _propTypes.default.object,
  className: _propTypes.default.string
};
CloseIcon.defaultProps = {
  size: '18px',
  style: {},
  className: ''
};
var _default = CloseIcon;
exports.default = _default;