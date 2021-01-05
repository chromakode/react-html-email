'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Item;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
      _extends({}, (0, _includeDataProps2.default)(props), {
        className: props.className,
        align: props.align,
        valign: props.valign,
        bgcolor: props.bgcolor,
        style: props.style,
        dir: props.dir
      }),
      props.children
    )
  );
}

Item.propTypes = {
  className: _propTypes2.default.string,
  bgcolor: _propTypes2.default.string,
  align: _propTypes2.default.oneOf(['left', 'center', 'right']),
  valign: _propTypes2.default.oneOf(['top', 'middle', 'bottom']),
  style: _PropTypes2.default.style,
  dir: _propTypes2.default.oneOf(['ltr', 'rtl']),
  children: _propTypes2.default.node
};

Item.defaultProps = {
  className: undefined,
  bgcolor: undefined,
  align: undefined,
  valign: undefined,
  style: undefined,
  children: undefined
};