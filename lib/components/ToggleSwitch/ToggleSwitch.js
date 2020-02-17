"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./ToggleSwitch.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable jsx-a11y/label-has-for */

/* eslint-disable jsx-a11y/label-has-associated-control */

/* label-has-for is depricated, and the has-associated-control is not working */
var ToggleSwitch = function ToggleSwitch(props) {
  var switchId = props.switchId,
      optionOff = props.optionOff,
      optionOn = props.optionOn,
      className = props.className,
      size = props.size;
  return _react.default.createElement("div", {
    className: "toggle-switch-container"
  }, _react.default.createElement("span", {
    className: "option option-off"
  }, optionOff), _react.default.createElement("input", {
    role: "switch",
    type: "checkbox",
    "aria-checked": "false",
    id: switchId
  }), _react.default.createElement("label", {
    htmlFor: switchId,
    className: "toggle-switch-".concat(size, " ").concat(className)
  }), _react.default.createElement("span", {
    className: "option option-on"
  }, optionOn));
};

ToggleSwitch.propTypes = {
  switchId: _propTypes.default.string.isRequired,
  optionOff: _propTypes.default.string,
  optionOn: _propTypes.default.string,
  className: _propTypes.default.string,
  size: _propTypes.default.oneOf(['default', 'small', 'medium', 'large', 'extra-large'])
};
ToggleSwitch.defaultProps = {
  optionOff: '',
  optionOn: '',
  className: '',
  size: 'default'
};
var _default = ToggleSwitch;
exports.default = _default;