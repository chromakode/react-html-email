'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _supportMatrix = require('./supportMatrix.json');

var _supportMatrix2 = _interopRequireDefault(_supportMatrix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var capsRe = /[A-Z]/g;

var StyleValidator = function () {
  function StyleValidator(config) {
    _classCallCheck(this, StyleValidator);

    this.setConfig(config);
  }

  _createClass(StyleValidator, [{
    key: 'setConfig',
    value: function setConfig(config) {
      this.config = _extends({
        strict: true,
        warn: true,
        platforms: ['gmail', 'gmail-android', 'apple-mail', 'apple-ios', 'yahoo-mail', 'outlook', 'outlook-legacy', 'outlook-web']
      }, config);
    }
  }, {
    key: 'validate',
    value: function validate(style, componentName) {
      var _this = this;

      var _loop = function _loop(propNameCamelCase) {
        var propName = propNameCamelCase.replace(capsRe, function (match) {
          return `-${match[0].toLowerCase()}`;
        });

        var supportInfo = _supportMatrix2.default[propName];

        if (!supportInfo) {
          if (_this.config.strict) {
            return {
              v: new Error(`Unknown style property \`${propName}\` supplied to \`${componentName}\`.`)
            };
          }
        } else {
          var unsupported = [];
          var messages = new Map();
          _this.config.platforms.forEach(function (platform) {
            if (typeof supportInfo[platform] === 'string') {
              var msg = supportInfo[platform];
              if (!messages.has(msg)) {
                messages.set(msg, []);
              }
              messages.get(msg).push(platform);
            } else if (supportInfo[platform] === false) {
              unsupported.push(platform);
            }
          });

          if (_this.config.warn) {
            // eslint-disable-next-line no-restricted-syntax
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = messages[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _ref = _step2.value;

                var _ref2 = _slicedToArray(_ref, 2);

                var msg = _ref2[0];
                var platforms = _ref2[1];

                console.warn(`Warning: Style property \`${propName}\` supplied to \`${componentName}\`, in ${platforms.join(', ')}: ${msg.toLowerCase()}`); // eslint-disable-line no-console
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }

          if (unsupported.length && _this.config.strict) {
            return {
              v: new Error(`Style property \`${propName}\` supplied to \`${componentName}\` unsupported in: ${unsupported.join(', ')}.`)
            };
          }
        }
      };

      // eslint-disable-next-line no-restricted-syntax
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(style)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var propNameCamelCase = _step.value;

          var _ret = _loop(propNameCamelCase);

          if (typeof _ret === "object") return _ret.v;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return undefined;
    }
  }]);

  return StyleValidator;
}();

exports.default = StyleValidator;