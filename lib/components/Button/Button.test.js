"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _Button = require("./Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Button />', function () {
  it('renders a default button with no variant passed', function () {
    var textButton = _reactTestRenderer.default.create(_react.default.createElement(_Button.Button, null, "Test")).toJSON();

    expect(textButton).toHaveStyleRule('background', 'transparent');
    expect(textButton).not.toHaveStyleRule('box-shadow');
    expect(textButton).not.toHaveStyleRule('border');
  });
  it('renders a raised button', function () {
    var raisedButton = _reactTestRenderer.default.create(_react.default.createElement(_Button.Button, {
      variant: "raised"
    }, "Test")).toJSON();

    expect(raisedButton).toHaveStyleRule('box-shadow', expect.any(String));
    expect(raisedButton).not.toHaveStyleRule('border');
  });
  it('renders a flat button', function () {
    var flatButton = _reactTestRenderer.default.create(_react.default.createElement(_Button.Button, {
      variant: "flat"
    }, "Test")).toJSON();

    expect(flatButton).not.toHaveStyleRule('background', 'transparent');
    expect(flatButton).not.toHaveStyleRule('box-shadow');
    expect(flatButton).not.toHaveStyleRule('border');
  });
  it('renders a raised button', function () {
    var outlinedButton = _reactTestRenderer.default.create(_react.default.createElement(_Button.Button, {
      variant: "outlined"
    }, "Test")).toJSON();

    expect(outlinedButton).not.toHaveStyleRule('box-shadow');
    expect(outlinedButton).toHaveStyleRule('border', expect.any(String));
  });
  it('renders a fullwidth button', function () {
    var fullWidthButton = _reactTestRenderer.default.create(_react.default.createElement(_Button.Button, {
      fullwidth: true
    }, "Test")).toJSON();

    expect(fullWidthButton).toHaveStyleRule('width', '100%');
  });
  it('should disable the button correctly', function () {
    var disabledButton = _reactTestRenderer.default.create(_react.default.createElement(_Button.Button, {
      disabled: true
    }, "Test")).toJSON();

    expect(disabledButton).toHaveStyleRule('opacity', '.65');
    expect(disabledButton).toHaveStyleRule('cursor', 'not-allowed');
  });
});