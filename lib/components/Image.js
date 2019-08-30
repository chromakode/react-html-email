'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Image;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PropTypes = require('../PropTypes');

var _PropTypes2 = _interopRequireDefault(_PropTypes);

var _includeDataProps = require('../includeDataProps');

var _includeDataProps2 = _interopRequireDefault(_includeDataProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Image(props) {
  return _react2.default.createElement('img', _extends({}, (0, _includeDataProps2.default)(props), {
    alt: props.alt,
    src: props.src,
    width: props.width,
    height: props.height,
    style: _extends({
      display: 'block',
      outline: 'none',
      border: 'none',
      textDecoration: 'none'
    }, props.style)
  }));
}

Image.propTypes = {
  alt: _propTypes2.default.string.isRequired,
  src: _propTypes2.default.string.isRequired,
  width: _propTypes2.default.number.isRequired,
  height: _propTypes2.default.number.isRequired,
  style: _PropTypes2.default.style
};

Image.defaultProps = {
  style: undefined
};