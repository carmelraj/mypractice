"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var UseLocalStorage = function UseLocalStorage(name) {
  var setItem = function setItem(value) {
    try {
      window.localStorage.setItem(name, JSON.stringify(value));
    } catch (error) {
      console.error('error', error);
    }
  };

  var getItem = function getItem() {
    try {
      var item = window.localStorage.getItem(name);
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      console.error('error', error);
    }
  };

  var removeItem = function removeItem() {
    try {
      window.localStorage.removeItem(name);
    } catch (error) {
      console.error('error', error);
    }
  };

  return {
    setItem: setItem,
    getItem: getItem,
    removeItem: removeItem
  };
};

var _default = UseLocalStorage;
exports["default"] = _default;