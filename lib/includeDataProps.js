"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  var dataProps = {};

  Object.keys(props).forEach(function (key) {
    if (/^data-/.test(key)) {
      dataProps[key] = props[key];
    }
  });

  return dataProps;
};