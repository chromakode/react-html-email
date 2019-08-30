'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Email;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
    { lang: props.lang, xmlns: 'http://www.w3.org/1999/xhtml' },
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
      {
        style: _extends({
          width: '100%',
          margin: 0,
          padding: 0,
          WebkitTextSizeAdjust: '100%',
          MsTextSizeAdjust: '100%'
        }, props.bodyStyle)
      },
      _react2.default.createElement(
        _Box2.default,
        { width: props.width, bgcolor: props.bgcolor, align: 'center', cellPadding: props.cellPadding, cellSpacing: props.cellSpacing, style: props.style },
        props.children
      )
    )
  );
}

Email.propTypes = {
  lang: _propTypes2.default.string,
  title: _propTypes2.default.string.isRequired,
  bgcolor: _propTypes2.default.string,
  cellPadding: _propTypes2.default.number,
  cellSpacing: _propTypes2.default.number,
  style: _PropTypes2.default.style,
  headCSS: _propTypes2.default.string,
  width: _propTypes2.default.string,
  align: _propTypes2.default.oneOf(['left', 'center', 'right']),
  valign: _propTypes2.default.oneOf(['top', 'middle', 'bottom']),
  bodyStyle: _PropTypes2.default.style,
  children: _propTypes2.default.node
};

Email.defaultProps = {
  lang: 'en',
  width: '600',
  align: 'center',
  valign: 'top',
  bgcolor: undefined,
  cellPadding: undefined,
  cellSpacing: undefined,
  style: undefined,
  headCSS: undefined,
  bodyStyle: undefined,
  children: undefined
};