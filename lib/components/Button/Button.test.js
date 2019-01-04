"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _Button = require("./Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Button />', function () {
  var fakeClick = function fakeClick() {};

  it('renders a raised button', function () {
    var raisedButton = _reactTestRenderer.default.create(_react.default.createElement(_Button.Button, {
      variant: "raised",
      onClick: fakeClick
    }, "Test")).toJSON();

    expect(raisedButton).toHaveStyleRule('box-shadow', '0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)');
  });
});