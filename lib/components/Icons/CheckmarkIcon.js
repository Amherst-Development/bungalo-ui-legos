"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colors = _interopRequireDefault(require("../../styles/colors/colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckmarkIcon = function CheckmarkIcon(props) {
  var color = props.color,
      size = props.size,
      style = props.style,
      className = props.className;
  return _react.default.createElement("svg", {
    width: size,
    height: size,
    style: style,
    className: className,
    viewBox: "0 0 18 18",
    "aria-labelledby": "title",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("title", {
    id: "title"
  }, "Checkmark"), _react.default.createElement("polygon", {
    points: "0 0 18 0 18 18 0 18"
  }), _react.default.createElement("path", {
    fill: color,
    d: "M13.7730102,5 L7.58267278,11.2914004 L4.87841467,8.52666685 L4,9.41942246 L7.14346544,12.6305339 C7.38612132,12.8768446 7.77922424,12.8768446 8.02188012,12.6305339 L14.6514248,5.89275562 L13.7730102,5 Z"
  })));
};

CheckmarkIcon.propTypes = {
  color: _propTypes.default.string,
  size: _propTypes.default.string,
  style: _propTypes.default.object,
  className: _propTypes.default.string
};
CheckmarkIcon.defaultProps = {
  color: _colors.default.grey900,
  size: '18px',
  style: {},
  className: ''
};
var _default = CheckmarkIcon;
exports.default = _default;