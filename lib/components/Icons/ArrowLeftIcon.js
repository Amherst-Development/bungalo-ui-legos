"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowLeftIcon = function ArrowLeftIcon(props) {
  var size = props.size,
      style = props.style,
      className = props.className;
  return _react.default.createElement("svg", {
    width: size,
    height: size,
    style: style,
    className: className,
    viewBox: "0 0 18 18",
    "aria-labelledby": "arrow-left-icon",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("title", {
    id: "arrow-left-icon"
  }, "Arrow Left"), _react.default.createElement("polygon", {
    points: "0 0 18 0 18 18 0 18"
  }), _react.default.createElement("polygon", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: "1",
    points: "5.85 2 5 2.832 11.413 9.11 5 15.168 5.85 16 13 9.11",
    transform: "matrix(-1 0 0 1 18 0)"
  })));
};

ArrowLeftIcon.propTypes = {
  size: _propTypes.default.string,
  style: _propTypes.default.object,
  className: _propTypes.default.string
};
ArrowLeftIcon.defaultProps = {
  size: '18px',
  style: {},
  className: ''
};
var _default = ArrowLeftIcon;
exports.default = _default;