"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colors = _interopRequireDefault(require("../../styles/colors/colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SqftIcon = function SqftIcon(props) {
  var color = props.color,
      size = props.size,
      style = props.style,
      className = props.className;
  return _react.default.createElement("svg", {
    id: "sqft-icon",
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
  }, "Sqft"), _react.default.createElement("polygon", {
    points: "0 0 18 0 18 18 0 18"
  }), _react.default.createElement("path", {
    fill: color,
    fillRule: "nonzero",
    stroke: color,
    strokeWidth: ".3",
    d: "M2,2 L2,16 L11.9577465,16 L11.9577465,9.43209877 L16,9.43209877 L16,6.12345679 L16,2 L7.37323944,2 L2,2 Z M2.83802817,15.1851852 L2.83802817,9.43209877 L7.34859155,9.43209877 L7.76760563,9.43209877 L11.1197183,9.43209877 L11.1197183,15.1851852 L2.83802817,15.1851852 Z M11.1197183,8.59259259 L8.16197183,8.59259259 L8.16197183,6.12345679 L15.1619718,6.12345679 L15.1619718,8.59259259 L11.1197183,8.59259259 Z M15.1619718,2.83950617 L15.1619718,5.30864198 L8.18661972,5.30864198 L8.18661972,2.83950617 L15.1619718,2.83950617 Z M7.34859155,6.12345679 L7.34859155,8.59259259 L2.83802817,8.59259259 L2.83802817,2.83950617 L7.34859155,2.83950617 L7.34859155,6.12345679 Z"
  })));
};

SqftIcon.propTypes = {
  color: _propTypes.default.string,
  size: _propTypes.default.string,
  style: _propTypes.default.object,
  className: _propTypes.default.string
};
SqftIcon.defaultProps = {
  color: _colors.default.white,
  size: '18px',
  style: {},
  className: ''
};
var _default = SqftIcon;
exports.default = _default;