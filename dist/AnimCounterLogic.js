import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
let timeout = 0;

const AnimCounterLogic = props => {
  const [currentValue, setCurrentValue] = useState(props.defaultValue ?? 0);
  const [incrementQueue, setIncrementQueue] = useState([{
    value: currentValue,
    top: '0',
    id: nanoid()
  }]);
  useEffect(() => initAnimQueue(), [incrementQueue]);

  const onAddToNextQueue = isIncrease => {
    if (props.disabled) return;
    const newValue = isIncrease ? currentValue + 1 : currentValue - 1;
    setCurrentValue(newValue);
    setIncrementQueue(state => {
      const newIncrementQueue = [...state];
      newIncrementQueue.push({
        id: nanoid(),
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
    onClickPlusBtn: () => onAddToNextQueue(true),
    onClickMinusBtn: () => onAddToNextQueue(false),
    incrementQueue
  };
};

export default AnimCounterLogic;