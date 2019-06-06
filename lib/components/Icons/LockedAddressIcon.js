"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colors = _interopRequireDefault(require("../../styles/colors/colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LockedAddressIcon = function LockedAddressIcon(props) {
  var color = props.color,
      size = props.size,
      style = props.style,
      className = props.className;
  return _react.default.createElement("svg", {
    width: size,
    height: size,
    style: style,
    className: className,
    viewBox: "0 0 59 23",
    "aria-labelledby": "title",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("title", {
    id: "title"
  }, "Locked Address"), _react.default.createElement("path", {
    stroke: color,
    d: "M0 7L17.8474576 7M41 7L58.8474576 7M0 18L17.8474576 18M41 18L58.8474576 18"
  }), _react.default.createElement("path", {
    fill: color,
    fillRule: "nonzero",
    d: "M29.838047,15.9758087 L30.0979219,15.8446284 C30.5426063,15.6201595 30.8266365,15.1717263 30.8266365,14.6715341 C30.8266365,13.9414784 30.2334022,13.349318 29.50114,13.349318 C28.7680157,13.349318 28.1741235,13.9415808 28.1741235,14.6715341 C28.1741235,15.1698952 28.4594976,15.619662 28.9029706,15.8450805 L29.1614984,15.9764908 L28.5690143,18.1724395 L30.4328317,18.1724395 L29.838047,15.9758087 Z M31.3662471,18.8867252 L27.6364668,18.8867252 L28.3263696,16.3297092 C27.7926304,15.9544312 27.4598378,15.3425142 27.4598378,14.6715341 C27.4598378,13.5466518 28.3739653,12.6350323 29.50114,12.6350323 C30.6276019,12.6350323 31.5409222,13.5466993 31.5409222,14.6715341 C31.5409222,15.3440128 31.2090929,15.9556731 30.6740245,16.3302416 L31.3662471,18.8867252 Z M32.6156758,5.8596425 C32.6156758,4.3720924 31.4006103,3.16009407 29.9092598,3.16009407 L29.0945402,3.16009407 C27.6038776,3.16009407 26.3911642,4.3714053 26.3911642,5.8596425 L26.3911642,9.37420744 L32.6156758,9.37420744 L32.6156758,5.8596425 Z M25.6768785,5.8596425 C25.6768785,3.9767311 27.2095734,2.44580835 29.0945402,2.44580835 L29.9092598,2.44580835 C31.7946959,2.44580835 33.3299615,3.9771986 33.3299615,5.8596425 L33.3299615,10.0884932 L25.6768785,10.0884932 L25.6768785,5.8596425 Z M37,9.37420744 L37,22.7220077 L22,22.7220077 L22,9.37420744 L23.2258795,9.37420744 L23.2258795,5.8596425 C23.2258795,2.62796875 25.8570407,0 29.0945402,0 L29.9092598,0 C33.1432222,0 35.7779205,2.62974876 35.7779205,5.8596425 L35.7779205,9.37420744 L37,9.37420744 Z M35.0636348,10.0884932 L35.0636348,5.8596425 C35.0636348,3.02453885 32.7490334,0.714285714 29.9092598,0.714285714 L29.0945402,0.714285714 C26.2513358,0.714285714 23.9401652,3.02265212 23.9401652,5.8596425 L23.9401652,10.0884932 L22.7142857,10.0884932 L22.7142857,22.007722 L36.2857143,22.007722 L36.2857143,10.0884932 L35.0636348,10.0884932 Z"
  })));
};

LockedAddressIcon.propTypes = {
  color: _propTypes.default.string,
  size: _propTypes.default.string,
  style: _propTypes.default.object,
  className: _propTypes.default.string
};
LockedAddressIcon.defaultProps = {
  color: _colors.default.grey900,
  size: '18px',
  style: {},
  className: ''
};
var _default = LockedAddressIcon;
exports.default = _default;