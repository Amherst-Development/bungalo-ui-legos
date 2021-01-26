"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeartIcon = function HeartIcon(props) {
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
    id: "heart icon"
  }, "Heart"), _react.default.createElement("polygon", {
    points: "0 0 18 0 18 18 0 18"
  }), _react.default.createElement("path", {
    fill: "currentColor",
    d: "M12.2756598,3.1062876 C13.2462842,3.08601303 14.1830784,3.46758124 14.8695594,4.16281592 C15.5560405,4.85805059 15.9328044,5.80679037 15.9127851,6.78979161 C15.8904451,7.3006736 15.7667488,7.80176797 15.5490726,8.26319322 C14.9016643,9.58188765 9.00224703,14.8935004 9.00224703,14.8935004 C9.00224703,14.8935004 3.11010404,9.57820415 2.45542149,8.26319322 C2.22223004,7.80756561 2.09766513,7.30295244 2.09170896,6.78979161 C2.07478857,5.80771256 2.45254867,4.86080948 3.13834423,4.16626902 C3.82413979,3.47172855 4.75912049,3.08915145 5.72883426,3.1062876 C6.70722097,3.1062876 8.34756448,4.67914382 9.00224703,5.31639001 C9.65692958,4.68282732 11.2972731,3.1062876 12.2756598,3.1062876 L12.2756598,3.1062876 Z M12.2756598,2.0012364 C11.4136611,2.0012364 10.4098145,2.5500785 9.00224703,3.80983687 C7.59467954,2.5500785 6.59083296,2.0012364 5.72883426,2.0012364 C4.11117159,1.96364621 2.59184565,2.78537918 1.72298923,4.16781228 C0.854132812,5.55024538 0.762227361,7.29213462 1.48067191,8.76046626 C2.17536284,10.1565143 6.8563431,14.4404294 8.27482197,15.7186053 C8.68901875,16.0937982 9.31547531,16.0937982 9.72967209,15.7186053 C11.1517881,14.4404294 15.8400426,10.1565143 16.5274593,8.75309925 C17.2382097,7.28449676 17.1420383,5.54695224 16.2736781,4.16799525 C15.405318,2.78903825 13.8902521,1.96793584 12.2756598,2.0012364 L12.2756598,2.0012364 Z"
  })));
};

HeartIcon.propTypes = {
  size: _propTypes.default.string,
  style: _propTypes.default.object,
  className: _propTypes.default.string
};
HeartIcon.defaultProps = {
  size: '18px',
  style: {},
  className: ''
};
var _default = HeartIcon;
exports.default = _default;