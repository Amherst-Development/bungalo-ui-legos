"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Button: true,
  ToggleSwitch: true,
  Tooltip: true
};
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _Button.default;
  }
});
Object.defineProperty(exports, "ToggleSwitch", {
  enumerable: true,
  get: function get() {
    return _ToggleSwitch.default;
  }
});
Object.defineProperty(exports, "Tooltip", {
  enumerable: true,
  get: function get() {
    return _Tooltip.default;
  }
});

var _Button = _interopRequireDefault(require("./components/Button"));

var _ToggleSwitch = _interopRequireDefault(require("./components/ToggleSwitch"));

var _Tooltip = _interopRequireDefault(require("./components/Tooltip"));

var _Icons = require("./components/Icons");

Object.keys(_Icons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Icons[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }