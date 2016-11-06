'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Item;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PropTypes = require('../PropTypes');

var _PropTypes2 = _interopRequireDefault(_PropTypes);

var _includeDataProps = require('../includeDataProps');

var _includeDataProps2 = _interopRequireDefault(_includeDataProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Item(props) {
  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'td',
      _extends({}, (0, _includeDataProps2.default)(props), { className: props.className, align: props.align, valign: props.valign, bgcolor: props.bgcolor, style: props.style }),
      props.children
    )
  );
}

Item.propTypes = {
  className: _react.PropTypes.string,
  bgcolor: _react.PropTypes.string,
  align: _react.PropTypes.oneOf(['left', 'center', 'right']),
  valign: _react.PropTypes.oneOf(['top', 'middle', 'bottom']),
  style: _PropTypes2.default.style,
  children: _react.PropTypes.node
};