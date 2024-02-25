"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Debouncing = function Debouncing(input) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  // console.log('recived input',input)
  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      debounce = _useState2[0],
      setDebounce = _useState2[1];

  (0, _react.useEffect)(function () {
    var timer = setTimeout(function () {
      setDebounce(input);
    }, delay);
    return function () {
      clearInterval(timer);
    };
  }, [input, delay]);
  return debounce;
};

var _default = Debouncing;
exports["default"] = _default;