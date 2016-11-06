'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Span;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PropTypes = require('../PropTypes');

var _PropTypes2 = _interopRequireDefault(_PropTypes);

var _includeDataProps = require('../includeDataProps');

var _includeDataProps2 = _interopRequireDefault(_includeDataProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Span(props) {
  return _react2.default.createElement(
    'span',
    _extends({}, (0, _includeDataProps2.default)(props), { style: _extends({
        fontFamily: props.fontFamily,
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        lineHeight: (props.lineHeight !== undefined ? props.lineHeight : props.fontSize) + 'px',
        color: props.color
      }, props.style) }),
    props.children
  );
}

Span.propTypes = {
  fontFamily: _react.PropTypes.string,
  fontSize: _react.PropTypes.number,
  fontWeight: _react.PropTypes.string,
  lineHeight: _react.PropTypes.number,
  color: _react.PropTypes.string,
  style: _PropTypes2.default.style,
  children: _react.PropTypes.node
};

Span.defaultProps = {
  fontFamily: 'sans-serif',
  fontSize: 14,
  color: '#000'
};