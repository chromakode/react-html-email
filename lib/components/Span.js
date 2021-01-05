'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Span;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PropTypes = require('../PropTypes');

var _PropTypes2 = _interopRequireDefault(_PropTypes);

var _includeDataProps = require('../includeDataProps');

var _includeDataProps2 = _interopRequireDefault(_includeDataProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Span(props) {
  var lineHeight = props.lineHeight !== undefined ? props.lineHeight : props.fontSize;
  return _react2.default.createElement(
    'span',
    _extends({}, (0, _includeDataProps2.default)(props), {
      style: _extends({
        fontFamily: props.fontFamily,
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        lineHeight: `${lineHeight}px`,
        color: props.color
      }, props.style)
    }),
    props.children
  );
}

Span.propTypes = {
  fontFamily: _propTypes2.default.string,
  fontSize: _propTypes2.default.number,
  fontWeight: _propTypes2.default.string,
  lineHeight: _propTypes2.default.number,
  color: _propTypes2.default.string,
  style: _PropTypes2.default.style,
  children: _propTypes2.default.node
};

Span.defaultProps = {
  fontFamily: 'sans-serif',
  fontSize: 14,
  fontWeight: undefined,
  lineHeight: undefined,
  color: '#000',
  style: undefined,
  children: undefined
};