'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = A;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PropTypes = require('../PropTypes');

var _PropTypes2 = _interopRequireDefault(_PropTypes);

var _includeDataProps = require('../includeDataProps');

var _includeDataProps2 = _interopRequireDefault(_includeDataProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function A(props) {
  return _react2.default.createElement(
    'a',
    _extends({}, (0, _includeDataProps2.default)(props), {
      download: props.download,
      href: props.href,
      target: '_blank',
      style: _extends({
        color: props.color,
        textDecoration: props.textDecoration
      }, props.style)
    }),
    props.children
  );
}

A.propTypes = {
  href: _propTypes2.default.string.isRequired,
  download: _propTypes2.default.string,
  color: _propTypes2.default.string,
  textDecoration: _propTypes2.default.string,
  style: _PropTypes2.default.style,
  children: _propTypes2.default.node
};

A.defaultProps = {
  textDecoration: 'underline',
  href: undefined,
  download: undefined,
  color: undefined,
  style: undefined,
  children: undefined
};