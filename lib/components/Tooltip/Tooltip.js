"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TOOLTIP_DIRECTIONS = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = _interopRequireDefault(require("../../styles/colors/colors"));

require("../../styles/fonts/fonts.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: 'Graphik-Regular';\n  cursor: pointer;\n  position: absolute;\n\n  &.active {\n    .tooltip-container {\n        display: block;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  background: ", ";\n  border: 1px solid ", ";\n  transition: all .25s;\n  display: none;\n  p {\n      font-family: Graphik-Regular;\n      padding: 12px;\n      margin: 0;\n      white-space: nowrap;\n      font-size: 12px;\n      line-height: 1.2;\n      color: ", ";\n  }\n  &:after {\n    border: solid transparent;\n    content: \" \";\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n    border-width: ", "px;\n    margin-left: -", "px;\n  }\n  &.tooltip-top {\n      top: 0;\n      left: 50%;\n      transform: translate(-50%,-120%);\n      &:after {\n          top: 100%;\n          left: 50%;\n          border-top-color: ", ";\n      }\n  }\n  &.tooltip-bottom {\n      bottom: 0;\n      left: 50%;\n      transform: translate(-50%,120%);\n      &:after {\n          top: -", "px;\n          left: 50%;\n          border-bottom-color: ", ";\n      }\n  }\n  &.tooltip-left {\n      top: 50%;\n      left: -", "px;\n      transform: translate(-100%,-50%);\n      &:after {\n          top: 50%;\n          left: 100%;\n          margin-left: 0;\n          margin-top: -", "px;\n          border-left-color: ", ";\n      }\n  }\n  &.tooltip-right {\n      top: 50%;\n      right: -", "px;\n      transform: translate(100%,-50%);\n      &:after {\n          top: 50%;\n          right: 100%;\n          margin-left: 0;\n          margin-top: -", "px;\n          border-right-color: ", ";\n      }\n  }\n  &.tooltip-bottom-left {\n    bottom: 0;\n    left: -", "px;\n    transform: translate(-76%,120%);\n    &:after {\n        top: -", "px;\n        right: ", "px;\n        border-bottom-color: ", ";\n    }\n  }\n  &.tooltip-bottom-right {\n    bottom: 0;\n    right: -", "px;\n    transform: translate(77%,120%);\n    &:after {\n        top: -", "px;\n        left: ", "px;\n        border-bottom-color: ", ";\n    }\n  }\n  &.tooltip-top-left {\n    top: 0;\n    left: -", "px;\n    transform: translate(-72%,-120%);\n    &:after {\n        top: 100%;\n        right: ", "px;\n        border-top-color: ", ";\n    }\n  }\n  &.tooltip-top-right {\n    top: 0;\n    right: -", "px;\n    transform: translate(74%,-120%);\n    &:after {\n        top: 100%;\n        left: ", "px;\n        border-top-color: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TOOLTIP_DIRECTIONS = {
  RIGHT: 'tooltip-right',
  LEFT: 'tooltip-left',
  TOP: 'tooltip-top',
  BOTTOM: 'tooltip-bottom'
};
exports.TOOLTIP_DIRECTIONS = TOOLTIP_DIRECTIONS;
var arrowSize = 10;

var TooltipMessage = _styledComponents.default.div(_templateObject(), _colors.default.blackTint, _colors.default.blackTint, _colors.default.white, arrowSize, arrowSize, _colors.default.blackTint, arrowSize * 2, _colors.default.blackTint, arrowSize, arrowSize, _colors.default.blackTint, arrowSize, arrowSize, _colors.default.blackTint, arrowSize, arrowSize * 2, arrowSize, _colors.default.blackTint, arrowSize, arrowSize * 2, arrowSize * 2, _colors.default.blackTint, arrowSize, arrowSize, _colors.default.blackTint, arrowSize, arrowSize * 2, _colors.default.blackTint);

var Tooltip = function Tooltip(props) {
  var direction = props.direction,
      text = props.text,
      className = props.className,
      children = props.children;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var handleMouseOver = function handleMouseOver() {
    setActive(true);
  };

  var handleMouseLeave = function handleMouseLeave() {
    setActive(false);
  };

  var handleFocus = function handleFocus() {
    setActive(!active);
  };

  return _react.default.createElement("div", {
    className: "tooltip ".concat(className, " ").concat(active ? ' active' : ''),
    onMouseOver: handleMouseOver,
    onMouseLeave: handleMouseLeave,
    onFocus: handleFocus
  }, _react.default.createElement(TooltipMessage, {
    className: "tooltip-container ".concat(direction),
    "aria-hidden": !active
  }, _react.default.createElement("p", {
    className: "tooltip-message"
  }, text)), children);
};

Tooltip.propTypes = {
  children: _propTypes.default.node.isRequired,
  direction: _propTypes.default.string.isRequired,
  text: _propTypes.default.string.isRequired,
  className: _propTypes.default.string
};
Tooltip.defaultProps = {
  className: ''
};

var _default = (0, _styledComponents.default)(Tooltip)(_templateObject2());

exports.default = _default;