"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchIcon = function SearchIcon(props) {
  var size = props.size,
      style = props.style,
      className = props.className;
  return _react.default.createElement("svg", {
    width: size,
    height: size,
    style: style,
    className: className,
    viewBox: "0 0 24 24",
    "aria-labelledby": "title",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("title", {
    id: "search icon"
  }, "Search"), _react.default.createElement("path", {
    stroke: "currentColor",
    strokeWidth: "1.9",
    d: "M10.5,17 C6.91014913,17 4,14.0898509 4,10.5 C4,6.91014913 6.91014913,4 10.5,4 C14.0898509,4 17,6.91014913 17,10.5 C17,14.0898509 14.0898509,17 10.5,17 Z"
  }), _react.default.createElement("path", {
    fill: "currentColor",
    d: "M15.7590332,17.8875427 C16.5863444,17.2958476 17.2929688,16.5921936 17.8789063,15.7765808 C17.8789063,15.7765808 20.1022339,17.9004822 20.862915,18.7755611 C21.2136841,19.4338379 21.0202359,20.2205965 20.6251831,20.594635 C20.2249564,20.9735722 19.6202087,21.2415771 18.7755611,20.8504333 C18.2898314,20.4294535 17.2843221,19.4418233 15.7590332,17.8875427 Z"
  })));
};

SearchIcon.propTypes = {
  size: _propTypes.default.string,
  style: _propTypes.default.object,
  className: _propTypes.default.string
};
SearchIcon.defaultProps = {
  size: '18px',
  style: {},
  className: ''
};
var _default = SearchIcon;
exports.default = _default;