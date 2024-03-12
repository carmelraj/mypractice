"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var UseLocalStorageMultiFiled = function UseLocalStorageMultiFiled() {
  var setItemOne = function setItemOne(value) {
    try {
      Object.keys(value).forEach(function (key) {
        window.localStorage.setItem(key, JSON.stringify(value[key]));
      });
    } catch (error) {
      console.error('error', error);
    }
  };

  var getItemOne = function getItemOne(value) {
    try {
      Object.keys(value).forEach(function (key) {
        var item = window.localStorage.getItem(key, JSON.stringify(value[key]));
        return item ? item : undefined;
      });
    } catch (error) {
      console.error('error', error);
    }
  };

  return {
    setItemOne: setItemOne,
    getItemOne: getItemOne
  };
};

var _default = UseLocalStorageMultiFiled;
exports["default"] = _default;