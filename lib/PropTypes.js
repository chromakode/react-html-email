'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__styleValidator = undefined;
exports.configStyleValidator = configStyleValidator;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StyleValidator = require('./StyleValidator');

var _StyleValidator2 = _interopRequireDefault(_StyleValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __styleValidator = exports.__styleValidator = new _StyleValidator2.default();

function configStyleValidator(config) {
  __styleValidator.setConfig(config);
}

exports.default = {
  style: function style(props, propName, componentName) {
    var _React$PropTypes;

    for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    var objErr = (_React$PropTypes = _react2.default.PropTypes).object.apply(_React$PropTypes, [props, propName, componentName].concat(rest));
    if (objErr) {
      return objErr;
    }
    return __styleValidator.validate(props[propName], componentName);
  }
};