"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddressIcon = function AddressIcon(props) {
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
  }, _react.default.createElement("title", null, "Address"), _react.default.createElement("polygon", {
    points: "0 0 18 0 18 18 0 18"
  }), _react.default.createElement("path", {
    fill: "currentColor",
    d: "M3,7.72727273 C3.08242902,4.59735784 5.72104154,2.07868224 9,2 C12.2789585,2.07868224 14.917571,4.59735784 15,7.72727273 C14.94025,8.65364955 14.6683011,9.55623219 14.2033333,10.3713636 L14.1566667,10.4477273 C14.1233333,10.505 13.2966667,11.7777273 12.3333333,13.0504545 C10.4966667,15.5163636 9.72,16 9,16 C8.54,16 7.45666667,16 3.83,10.4509091 L3.78333333,10.3713636 C3.32301164,9.55520263 3.05563055,8.65267511 3,7.72727273 Z M9,5.18181818 C7.52724067,5.18181818 6.33333333,6.321457 6.33333333,7.72727273 C6.33333333,9.13308845 7.52724067,10.2727273 9,10.2727273 C10.4727593,10.2727273 11.6666667,9.13308845 11.6666667,7.72727273 C11.6666667,6.321457 10.4727593,5.18181818 9,5.18181818 Z"
  })));
};

AddressIcon.propTypes = {
  size: _propTypes.default.string,
  style: _propTypes.default.object,
  className: _propTypes.default.string
};
AddressIcon.defaultProps = {
  size: '18px',
  style: {},
  className: ''
};
var _default = AddressIcon;
exports.default = _default;