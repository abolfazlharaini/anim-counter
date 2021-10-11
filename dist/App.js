"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./reboot.css");

var _AppModule = _interopRequireDefault(require("./App.module.css"));

var _AnimCounter = _interopRequireDefault(require("./AnimCounter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return /*#__PURE__*/_react.default.createElement("main", {
    className: _AppModule.default["app"]
  }, /*#__PURE__*/_react.default.createElement(_AnimCounter.default, {
    classes: {
      root: _AppModule.default['root'],
      plus: _AppModule.default['plus'],
      minus: _AppModule.default['minus'],
      label: _AppModule.default['label'],
      labelWrapper: _AppModule.default['labelWrapper']
    }
  }));
}

var _default = App;
exports.default = _default;