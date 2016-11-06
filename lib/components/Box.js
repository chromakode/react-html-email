'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Box;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PropTypes = require('../PropTypes');

var _PropTypes2 = _interopRequireDefault(_PropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Box(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    'table',
    _extends({}, props, { className: props.className }),
    _react2.default.createElement(
      'tbody',
      null,
      children
    )
  );
}

Box.propTypes = {
  className: _react.PropTypes.string,
  cellPadding: _react.PropTypes.number,
  cellSpacing: _react.PropTypes.number,
  border: _react.PropTypes.string,
  bgcolor: _react.PropTypes.string,
  width: _react.PropTypes.string,
  height: _react.PropTypes.string,
  align: _react.PropTypes.oneOf(['left', 'center', 'right']),
  valign: _react.PropTypes.oneOf(['top', 'middle', 'bottom']),
  style: _PropTypes2.default.style,
  children: _react.PropTypes.node
};

Box.defaultProps = {
  cellPadding: 0,
  cellSpacing: 0,
  border: '0',
  align: 'left',
  valign: 'top'
};