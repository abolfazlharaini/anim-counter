"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _AnimCounterLogic = _interopRequireDefault(require("./AnimCounterLogic"));

var _PlusIcon = _interopRequireDefault(require("./PlusIcon"));

var _MinusIcon = _interopRequireDefault(require("./MinusIcon"));

var _AnimCounter = require("./AnimCounter.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// App
//
const AnimCounter = props => {
  var _props$classes, _props$classes2, _props$minusIcon, _props$classes3, _props$classes5, _props$plusIcon;

  const {
    onClickPlusBtn,
    onClickMinusBtn,
    incrementQueue
  } = (0, _AnimCounterLogic.default)(props);
  return /*#__PURE__*/_react.default.createElement(_AnimCounter.Root, {
    className: (_props$classes = props.classes) === null || _props$classes === void 0 ? void 0 : _props$classes.root
  }, /*#__PURE__*/_react.default.createElement(_AnimCounter.Button, {
    className: (_props$classes2 = props.classes) === null || _props$classes2 === void 0 ? void 0 : _props$classes2.minus,
    onClick: onClickMinusBtn
  }, (_props$minusIcon = props.minusIcon) !== null && _props$minusIcon !== void 0 ? _props$minusIcon : /*#__PURE__*/_react.default.createElement(_MinusIcon.default, null)), /*#__PURE__*/_react.default.createElement(_AnimCounter.LabelWrapper, {
    className: (_props$classes3 = props.classes) === null || _props$classes3 === void 0 ? void 0 : _props$classes3.labelWrapper
  }, incrementQueue.slice(0, 3).map((item, iItem) => {
    var _props$classes4;

    return /*#__PURE__*/_react.default.createElement(_AnimCounter.Label, {
      key: item.id,
      children: item.value,
      className: (_props$classes4 = props.classes) === null || _props$classes4 === void 0 ? void 0 : _props$classes4.label,
      duration: props.duration,
      style: {
        top: item.top
      }
    });
  })), /*#__PURE__*/_react.default.createElement(_AnimCounter.Button, {
    className: (_props$classes5 = props.classes) === null || _props$classes5 === void 0 ? void 0 : _props$classes5.plus,
    onClick: onClickPlusBtn
  }, (_props$plusIcon = props.plusIcon) !== null && _props$plusIcon !== void 0 ? _props$plusIcon : /*#__PURE__*/_react.default.createElement(_PlusIcon.default, null)));
};

AnimCounter.defaultProps = {
  duration: 150
};
var _default = AnimCounter;
exports.default = _default;