"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Button = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = _interopRequireDefault(require("../../styles/colors/colors.scss"));

require("../../styles/fonts/fonts.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      background: transparent;\n      color: ", ";\n      &:hover {\n        color: ", ";\n        background: ", ";\n        &:disabled {\n          color: ", ";\n          background: transparent;\n        }\n      }\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      background: transparent;\n      color: ", ";\n      border: 1px solid ", ";\n      &:hover {\n        color: ", ";\n        background: ", ";\n        &:disabled {\n          color: ", ";\n          background: transparent;\n        }\n      }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      background: ", ";\n      color: ", ";\n      &:hover {\n        background: ", ";\n        &:disabled {\n          background: ", ";\n          color: ", ";\n        }\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      background: ", ";\n      color: ", ";\n      box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);\n      &:hover {\n        background: ", ";\n        &:disabled {\n          background: ", ";\n          color: ", ";\n        }\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      font-family: 'Graphik-Medium';\n      font-size: ", ";\n      white-space: nowrap;\n      width: ", ";\n      padding: ", ";\n      min-width: 64px;\n      min-height: ", ";\n      border-radius: 0;\n      border: none;\n      cursor: pointer;\n      opacity: ", ";\n      cursor: ", ";\n      transition: all 0.3s ease;\n    "]);

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Button =
/*#__PURE__*/
function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Button)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clicky", function (e) {
      var onClick = _this.props.onClick;
      onClick();
      e.stopPropagation();
    });

    return _this;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var getColor = function getColor(color) {
        switch (color) {
          case 'primary':
            return {
              main: _colors.default.blue,
              accent: _colors.default.white,
              hover: _colors.default.blueberry,
              hoverText: _colors.default.white
            };

          case 'secondary':
            return {
              main: _colors.default.grey,
              accent: _colors.default.white,
              hover: _colors.default.black,
              hoverText: _colors.default.white
            };

          case 'tertiary':
            return {
              main: _colors.default.apricot,
              accent: _colors.default.white,
              hover: _colors.default.orange,
              hoverText: _colors.default.white
            };

          case 'default':
          default:
            return {
              main: _colors.default.black,
              accent: _colors.default.greyTint,
              hover: _colors.default.grey,
              hoverText: _colors.default.greyLight
            };
        }
      };

      var getSize = function getSize(size) {
        switch (size) {
          case 'extra-large':
            return {
              padding: '16px 32px',
              height: '55px',
              fontSize: '1.1rem'
            };

          case 'large':
            return {
              padding: '14px 32px',
              height: '45px',
              fontSize: '1rem'
            };

          case 'small':
            return {
              padding: '8px 16px',
              height: '30px',
              fontSize: '0.75rem'
            };

          case 'medium':
          default:
            return {
              padding: '12px 24px',
              height: '35px',
              fontSize: '0.875rem'
            };
        }
      };

      var _this$props = this.props,
          size = _this$props.size,
          fullwidth = _this$props.fullwidth,
          disabled = _this$props.disabled,
          color = _this$props.color,
          variant = _this$props.variant,
          className = _this$props.className,
          children = _this$props.children;

      var DefaultButton = _styledComponents.default.button(_templateObject(), getSize(size).fontSize, fullwidth ? '100%' : '', getSize(size).padding, getSize(size).height, disabled && '.65', disabled && 'not-allowed');

      var RaisedButton = (0, _styledComponents.default)(DefaultButton)(_templateObject2(), getColor(color).main, getColor(color).accent, getColor(color).hover, getColor(color).main, getColor(color).accent);
      var FlatButton = (0, _styledComponents.default)(DefaultButton)(_templateObject3(), getColor(color).main, getColor(color).accent, getColor(color).hover, getColor(color).main, getColor(color).accent);
      var OutlinedButton = (0, _styledComponents.default)(DefaultButton)(_templateObject4(), getColor(color).main, getColor(color).main, getColor(color).hoverText, getColor(color).main, getColor(color).main);
      var TextButton = (0, _styledComponents.default)(DefaultButton)(_templateObject5(), getColor(color).main, getColor(color).hoverText, getColor(color).main, getColor(color).main);

      switch (variant) {
        case 'raised':
          return _react.default.createElement(RaisedButton, {
            disabled: disabled,
            onClick: this.clicky,
            className: className
          }, children);

        case 'flat':
          return _react.default.createElement(FlatButton, {
            disabled: disabled,
            onClick: this.clicky,
            className: className
          }, children);

        case 'outlined':
          return _react.default.createElement(OutlinedButton, {
            disabled: disabled,
            onClick: this.clicky,
            className: className
          }, children);

        case 'text':
        default:
          return _react.default.createElement(TextButton, {
            disabled: disabled,
            onClick: this.clicky,
            className: className
          }, children);
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
  onClick: _propTypes.default.func,

  /**
   * The onClick function of the button.
   */
  className: _propTypes.default.string,

  /**
   * The variant of the button to use.
   */
  variant: _propTypes.default.oneOf(['raised', 'flat', 'outlined', 'text']),

  /**
   * The colors of the button.
   */
  color: _propTypes.default.oneOf(['default', 'primary', 'secondary', 'tertiary']),

  /**
   * The size of the button.
   */
  size: _propTypes.default.oneOf(['default', 'small', 'medium', 'large', 'extra-large']),

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
  variant: 'text',
  size: 'default',
  fullwidth: false,
  onClick: function onClick() {},
  className: ''
};
var _default = Button;
exports.default = _default;