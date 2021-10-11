"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

var _nanoid = require("nanoid");

let timeout = 0;

const AnimCounterLogic = props => {
  var _props$defaultValue;

  const [currentValue, setCurrentValue] = (0, _react.useState)((_props$defaultValue = props.defaultValue) !== null && _props$defaultValue !== void 0 ? _props$defaultValue : 0);
  const [incrementQueue, setIncrementQueue] = (0, _react.useState)([{
    value: currentValue,
    top: '0',
    id: (0, _nanoid.nanoid)()
  }]);
  (0, _react.useEffect)(() => initAnimQueue(), [incrementQueue]);

  const onAddToNextQueue = isIncrease => {
    if (props.disabled) return;
    const newValue = isIncrease ? currentValue + 1 : currentValue - 1;
    setCurrentValue(newValue);
    setIncrementQueue(state => {
      const newIncrementQueue = [...state];
      newIncrementQueue.push({
        id: (0, _nanoid.nanoid)(),
        value: newValue,
        top: isIncrease ? '100%' : '-100%',
        isIncrease
      });
      return [...newIncrementQueue];
    });
    if (props.onChange) props.onChange(newValue);
  };

  const initAnimQueue = () => {
    console.log('initAnimQueue');
    if (incrementQueue.length <= 1 || timeout) return;

    if (incrementQueue.length === 2 && incrementQueue[1].top !== '0') {
      setIncrementQueue(state => {
        const newIncrementQueue = [...state];

        if (newIncrementQueue[1] !== undefined) {
          newIncrementQueue[0].top = newIncrementQueue[1].isIncrease ? '-100%' : '100%';
          newIncrementQueue[1].top = '0';
        }

        return [...newIncrementQueue];
      });
      return;
    }

    timeout = window.setTimeout(() => {
      timeout = undefined;
      setIncrementQueue(state => {
        if (state.length === 2) return state;
        const newIncrementQueue = [...state.filter((_, i) => i !== 0)];

        if (newIncrementQueue[1] !== undefined) {
          newIncrementQueue[0].top = newIncrementQueue[1].isIncrease ? '-100%' : '100%';
          newIncrementQueue[1].top = '0';
        }

        return [...newIncrementQueue];
      });
    }, [props.duration]);
  };

  return {
    onClickPlusBtn: () => {
      if (props.plusDisabled) return;
      onAddToNextQueue(true);
    },
    onClickMinusBtn: () => {
      if (props.minusDisabled) return;
      onAddToNextQueue(false);
    },
    incrementQueue
  };
};

var _default = AnimCounterLogic;
exports.default = _default;