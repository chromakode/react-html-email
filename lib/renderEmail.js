'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderEmail;

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderEmail(emailComponent) {
  var doctype = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">';
  return doctype + _server2.default.renderToStaticMarkup(emailComponent);
}