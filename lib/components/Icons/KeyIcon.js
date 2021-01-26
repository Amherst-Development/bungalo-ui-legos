"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KeyIcon = function KeyIcon(props) {
  var size = props.size,
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
    id: "key icon"
  }, "Key"), _react.default.createElement("polygon", {
    points: "0 0 18 0 18 18 0 18"
  }), _react.default.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    fillRule: "nonzero",
    strokeWidth: ".5",
    d: "M14.8972903,6 L14.3811613,6 L14.3811613,8.8286846 L12.2190968,8.8286846 L12.2190968,6 L11.7029677,6 L11.7029677,8.8286846 L7.0923871,8.8286846 C6.96077419,7.32992243 5.65135484,6.15250041 4.05290323,6.15250041 C2.36670968,6.15250041 1,7.46162733 1,9.07625021 C1,10.6908731 2.36670968,12 4.05290323,12 C5.65135484,12 6.96077419,10.822578 7.0923871,9.32381581 L17,9.32381581 L17,8.8286846 L14.8978065,8.8286846 L14.8978065,6 L14.8972903,6 Z M4.05290323,11.5053639 C2.65419355,11.5053639 1.51612903,10.4155801 1.51612903,9.07625021 C1.51612903,7.73692028 2.65419355,6.64763162 4.05290323,6.64763162 C5.4516129,6.64763162 6.58967742,7.73741542 6.58967742,9.07625021 C6.58967742,10.415085 5.45109677,11.5053639 4.05290323,11.5053639 Z",
    transform: "matrix(1 0 0 -1 0 18)"
  })));
};

KeyIcon.propTypes = {
  size: _propTypes.default.string,
  style: _propTypes.default.object,
  className: _propTypes.default.string
};
KeyIcon.defaultProps = {
  size: '18px',
  style: {},
  className: ''
};
var _default = KeyIcon;
exports.default = _default;