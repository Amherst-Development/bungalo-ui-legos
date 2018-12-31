"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Button = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      background: transparent;\n      color: ", ";\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      background: transparent;\n      color: ", ";\n      border: 1px solid ", ";\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      background: ", ";\n      color: ", ";\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      background: ", ";\n      color: ", ";\n      box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      font-size: 1em;\n      width: ", ";\n      padding: ", ";\n      min-width: ", ";\n      min-height: ", ";\n      border-radius: 0;\n      border: none;\n      cursor: pointer;\n      &:disabled {\n        color: ", ";\n        background: ", ";\n        cursor: not-allowed;\n      }\n      &:hover {\n        color: ", ";\n        background: ", "\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Button =
/*#__PURE__*/
function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _this = this;

      var getColor = function getColor(color) {
        switch (color) {
          case 'primary':
            return {
              main: _colors.blue[500],
              accent: _colors.grey[0]
            };

          case 'secondary':
            return {
              main: _colors.grey[700],
              accent: _colors.grey[0]
            };

          case 'default':
          default:
            return {
              main: _colors.grey[300],
              accent: _colors.grey[1000]
            };
        }
      };

      var getSize = function getSize(size) {
        switch (size) {
          case 'large':
            return {
              padding: '8px 24px',
              width: '256px',
              height: '42px'
            };

          case 'small':
            return {
              padding: '8px 16px',
              width: '64px',
              height: '31px'
            };

          case 'default':
          default:
            return {
              padding: '16px 28px',
              width: '64px',
              height: '36px'
            };
        }
      };

      var DefaultButton = _styledComponents.default.button(_templateObject(), function (props) {
        return _this.props.fullwidth ? '100%' : '';
      }, function (props) {
        return getSize(_this.props.size).padding;
      }, function (props) {
        return getSize(_this.props.size).width;
      }, function (props) {
        return getSize(_this.props.size).height;
      }, _colors.grey[300], _colors.grey[100], _colors.orange[500], _colors.orange[50]);

      var RaisedButton = (0, _styledComponents.default)(DefaultButton)(_templateObject2(), function (props) {
        return getColor(_this.props.color).main;
      }, function (props) {
        return getColor(_this.props.color).accent;
      });
      var FlatButton = (0, _styledComponents.default)(DefaultButton)(_templateObject3(), function (props) {
        return getColor(_this.props.color).main;
      }, function (props) {
        return getColor(_this.props.color).accent;
      });
      var OutlinedButton = (0, _styledComponents.default)(DefaultButton)(_templateObject4(), function (props) {
        return getColor(_this.props.color).main;
      }, function (props) {
        return getColor(_this.props.color).main;
      });
      var TextButton = (0, _styledComponents.default)(DefaultButton)(_templateObject5(), function (props) {
        return getColor(_this.props.color).main;
      });

      switch (this.props.variant) {
        case 'raised':
          return _react.default.createElement(RaisedButton, {
            disabled: this.props.disabled,
            onClick: function onClick() {
              return _this.props.onClick();
            }
          }, this.props.children);

        case 'flat':
          return _react.default.createElement(FlatButton, {
            disabled: this.props.disabled,
            onClick: function onClick() {
              return _this.props.onClick();
            }
          }, this.props.children);

        case 'outlined':
          return _react.default.createElement(OutlinedButton, {
            disabled: this.props.disabled,
            onClick: function onClick() {
              return _this.props.onClick();
            }
          }, this.props.children);

        case 'text':
        default:
          return _react.default.createElement(TextButton, {
            disabled: this.props.disabled,
            onClick: function onClick() {
              return _this.props.onClick();
            }
          }, this.props.children);
      }
    }
  }]);

  return Button;
}(_react.Component);

exports.Button = Button;
Button.propTypes = {
  /**
   * The content of the button.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * The onClick function of the button.
   */
  onClick: _propTypes.default.node.onClick,

  /**
  * The variant of the button to use.
  */
  variant: _propTypes.default.oneOf(['raised', 'flat', 'outlined', 'text']),

  /**
   * The colors of the button.
   */
  color: _propTypes.default.oneOf(['default', 'primary', 'secondary']),

  /**
   * The size of the button.
   */
  size: _propTypes.default.oneOf(['small', 'default', 'large']),

  /**
   * If `true`, the button will be 100% width.
   */
  fullwidth: _propTypes.default.bool,

  /**
   * If `true`, the button will be disabled.
   */
  disabled: _propTypes.default.bool
};
Button.defaultProps = {
  color: 'default',
  disabled: false,
  variant: 'text'
};
var _default = Button;
exports.default = _default;