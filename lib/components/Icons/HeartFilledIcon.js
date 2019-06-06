"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colors = _interopRequireDefault(require("../../styles/colors/colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeartFilledIcon = function HeartFilledIcon(props) {
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
    fill: "none"
  }, _react.default.createElement("title", null, "Heart Filled"), _react.default.createElement("polygon", {
    points: "0 0 18 0 18 18 0 18"
  }), _react.default.createElement("path", {
    fill: color,
    d: "M12.2756598,2.0012364 C13.8902521,1.96793584 15.405318,2.78903825 16.2736781,4.16799525 C17.1420383,5.54695224 17.2382097,7.28449676 16.5274593,8.75309925 C15.8400426,10.1565143 11.1517881,14.4404294 9.72967209,15.7186053 C9.31547531,16.0937982 8.68901875,16.0937982 8.27482197,15.7186053 C6.8563431,14.4404294 2.17536284,10.1565143 1.48067191,8.76046626 C0.762227361,7.29213462 0.854132812,5.55024538 1.72298923,4.16781228 C2.59184565,2.78537918 4.11117159,1.96364621 5.72883426,2.0012364 C6.59083296,2.0012364 7.59467954,2.5500785 9.00224703,3.80983687 C10.4098145,2.5500785 11.4136611,2.0012364 12.2756598,2.0012364 Z"
  })));
};

HeartFilledIcon.propTypes = {
  color: _propTypes.default.string,
  size: _propTypes.default.string,
  style: _propTypes.default.object,
  className: _propTypes.default.string
};
HeartFilledIcon.defaultProps = {
  color: _colors.default.grey0,
  size: '18px',
  style: {},
  className: ''
};
var _default = HeartFilledIcon;
exports.default = _default;