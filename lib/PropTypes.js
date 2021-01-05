'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleValidator = undefined;
exports.configStyleValidator = configStyleValidator;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _StyleValidator = require('./StyleValidator');

var _StyleValidator2 = _interopRequireDefault(_StyleValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleValidator = exports.styleValidator = new _StyleValidator2.default();

function configStyleValidator(config) {
  styleValidator.setConfig(config);
}

exports.default = {
  style(props, propName, componentName) {
    if (props[propName] == null) {
      return undefined;
    }

    for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    var objErr = _propTypes2.default.object.apply(_propTypes2.default, [props, propName, componentName].concat(rest));
    if (objErr) {
      return objErr;
    }
    return styleValidator.validate(props[propName], componentName);
  }
};