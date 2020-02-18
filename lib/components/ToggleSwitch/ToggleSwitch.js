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
      className = props.className,
      checked = props.checked,
      size = props.size,
      disabled = props.disabled,
      onChange = props.onChange,
      defaultChecked = props.defaultChecked;
  return _react.default.createElement("div", {
    className: "toggle-switch-container"
  }, _react.default.createElement("input", {
    role: "switch",
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    "aria-checked": "false",
    id: switchId,
    disabled: disabled,
    onChange: onChange,
    className: "toggle-switch-checkbox"
  }), _react.default.createElement("label", {
    htmlFor: switchId,
    className: "toggle-switch-label toggle-switch-".concat(size, " ").concat(className)
  }));
};

ToggleSwitch.propTypes = {
  switchId: _propTypes.default.string.isRequired,
  checked: _propTypes.default.bool,
  defaultChecked: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['default', 'sm', 'md', 'lg', 'xl'])
};
ToggleSwitch.defaultProps = {
  checked: undefined,
  defaultChecked: undefined,
  onChange: function onChange() {},
  className: '',
  disabled: false,
  size: 'default'
};
var _default = ToggleSwitch;
exports.default = _default;