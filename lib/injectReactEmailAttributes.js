'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emailAttributes = undefined;
exports.default = injectReactEmailAttributes;

require('react-dom');

var _DOMProperty = require('react/lib/DOMProperty');

var _DOMProperty2 = _interopRequireDefault(_DOMProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ensure base DOM properties are already injected
var emailAttributes = exports.emailAttributes = {
  Properties: {
    'xmlns': 0,
    'align': 0,
    'valign': 0,
    'bgcolor': 0,
    'border': 0
  }
};

var injected = false;

function injectReactEmailAttributes() {
  if (injected) {
    return;
  }

  if (_DOMProperty2.default.properties.hasOwnProperty('xmlns')) {
    // already exists in React 15.3.0
    delete emailAttributes.Properties.xmlns;
  }

  // make React accept some HTML attributes useful to emails
  _DOMProperty2.default.injection.injectDOMPropertyConfig(emailAttributes);

  injected = true;
}