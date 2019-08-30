'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderEmail = exports.configStyleValidator = exports.A = exports.Span = exports.Item = exports.Image = exports.Email = exports.Box = exports.PropTypes = undefined;

var _PropTypes = require('./PropTypes');

var _PropTypes2 = _interopRequireDefault(_PropTypes);

var _Box = require('./components/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Email = require('./components/Email');

var _Email2 = _interopRequireDefault(_Email);

var _Image = require('./components/Image');

var _Image2 = _interopRequireDefault(_Image);

var _Item = require('./components/Item');

var _Item2 = _interopRequireDefault(_Item);

var _Span = require('./components/Span');

var _Span2 = _interopRequireDefault(_Span);

var _A = require('./components/A');

var _A2 = _interopRequireDefault(_A);

var _renderEmail = require('./renderEmail');

var _renderEmail2 = _interopRequireDefault(_renderEmail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEV = typeof process !== 'undefined' && process.env && process.env.NODE_ENV !== 'production';

(0, _PropTypes.configStyleValidator)({
  warn: DEV
});

exports.PropTypes = _PropTypes2.default;
exports.Box = _Box2.default;
exports.Email = _Email2.default;
exports.Image = _Image2.default;
exports.Item = _Item2.default;
exports.Span = _Span2.default;
exports.A = _A2.default;
exports.configStyleValidator = _PropTypes.configStyleValidator;
exports.renderEmail = _renderEmail2.default;
exports.default = {
  PropTypes: _PropTypes2.default,
  configStyleValidator: _PropTypes.configStyleValidator,
  renderEmail: _renderEmail2.default,
  styleValidator: _PropTypes.styleValidator
};