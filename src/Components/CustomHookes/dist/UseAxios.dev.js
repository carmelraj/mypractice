"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var UseAxios = function UseAxios() {
  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0, _react.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var axiosInstance = _axios["default"].create({
    baseURL: "https://jsonplaceholder.typicode.com"
  });

  var fetchData = function fetchData(_ref) {
    var _ref$url, url, method, _ref$data, data, _ref$params, params, result;

    return regeneratorRuntime.async(function fetchData$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$url = _ref.url, url = _ref$url === void 0 ? "" : _ref$url, method = _ref.method, _ref$data = _ref.data, data = _ref$data === void 0 ? {} : _ref$data, _ref$params = _ref.params, params = _ref$params === void 0 ? {} : _ref$params;
            setLoading(true);
            _context.prev = 2;
            _context.next = 5;
            return regeneratorRuntime.awrap(axiosInstance({
              url: url,
              method: method,
              data: data,
              params: params
            }));

          case 5:
            result = _context.sent;
            setData(result.data);
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](2);
            console.error("error", _context.t0);

          case 12:
            _context.prev = 12;
            setLoading(false);
            return _context.finish(12);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[2, 9, 12, 15]]);
  };

  return {
    data: data,
    error: error,
    loading: loading,
    fetchData: fetchData
  };
};

var _default = UseAxios;
exports["default"] = _default;