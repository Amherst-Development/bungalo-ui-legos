"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowRightIcon = function ArrowRightIcon(props) {
  var size = props.size,
      style = props.style,
      className = props.className;
  return _react.default.createElement("svg", {
    width: size,
    height: size,
    style: style,
    className: className,
    viewBox: "0 0 18 18",
    "aria-labelledby": "arrow-right-icon",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("title", {
    id: "arrow-right-icon"
  }, "Arrow Right"), _react.default.createElement("polygon", {
    points: "0 0 18 0 18 18 0 18"
  }), _react.default.createElement("polygon", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: "1",
    points: "6.85 2 6 2.832 12.413 9.11 6 15.168 6.85 16 14 9.11"
  })));
};

ArrowRightIcon.propTypes = {
  size: _propTypes.default.string,
  style: _propTypes.default.object,
  className: _propTypes.default.string
};
ArrowRightIcon.defaultProps = {
  size: '18px',
  style: {},
  className: ''
};
var _default = ArrowRightIcon;
exports.default = _default;