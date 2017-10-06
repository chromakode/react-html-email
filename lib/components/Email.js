'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Email;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PropTypes = require('../PropTypes');

var _PropTypes2 = _interopRequireDefault(_PropTypes);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// inspired by http://htmlemailboilerplate.com
function Email(props) {
  // default nested 600px wide outer table container (see http://templates.mailchimp.com/development/html/)
  return _react2.default.createElement(
    'html',
    { xmlns: 'http://www.w3.org/1999/xhtml' },
    _react2.default.createElement(
      'head',
      null,
      _react2.default.createElement('meta', { httpEquiv: 'Content-Type', content: 'text/html; charset=utf-8' }),
      _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
      _react2.default.createElement(
        'title',
        null,
        props.title
      ),
      props.headCSS && _react2.default.createElement(
        'style',
        { type: 'text/css' },
        props.headCSS
      )
    ),
    _react2.default.createElement(
      'body',
      { style: _extends({
          width: '100%',
          margin: 0,
          padding: 0,
          WebkitTextSizeAdjust: '100%',
          MsTextSizeAdjust: '100%'
        }, props.bodyStyle) },
      _react2.default.createElement(
        _Box2.default,
        { width: '100%', bgcolor: props.bgcolor },
        _react2.default.createElement(
          _Item2.default,
          { align: props.align, valign: props.valign },
          _react2.default.createElement(
            _Box2.default,
            { width: props.width, align: 'center', cellPadding: props.cellPadding, cellSpacing: props.cellSpacing, style: props.style },
            props.children
          )
        )
      )
    )
  );
}

Email.propTypes = {
  title: _react.PropTypes.string.isRequired,
  bgcolor: _react.PropTypes.string,
  cellPadding: _react.PropTypes.number,
  cellSpacing: _react.PropTypes.number,
  style: _PropTypes2.default.style,
  headCSS: _react.PropTypes.string,
  children: _react.PropTypes.node,
  width: _react.PropTypes.string,
  align: _react.PropTypes.oneOf(['left', 'center', 'right']),
  valign: _react.PropTypes.oneOf(['top', 'middle', 'bottom']),
  bodyStyle: _react.PropTypes.object
};

Email.defaultProps = {
  width: '600',
  align: 'center',
  valign: 'top'
};
