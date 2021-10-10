// App
//
import AnimCounterLogic from './AnimCounterLogic';
import PlusIcon from './PlusIcon';
import MinusIcon from './MinusIcon';
import { Label, Button, LabelWrapper, Root } from './AnimCounter.styles';

const AnimCounter = props => {
  const {
    onClickPlusBtn,
    onClickMinusBtn,
    incrementQueue
  } = AnimCounterLogic(props);
  return /*#__PURE__*/React.createElement(Root, {
    className: props.classes?.root
  }, /*#__PURE__*/React.createElement(Button, {
    className: props.classes?.minus,
    onClick: onClickMinusBtn
  }, props.minusIcon ?? /*#__PURE__*/React.createElement(MinusIcon, null)), /*#__PURE__*/React.createElement(LabelWrapper, {
    className: props.classes?.labelWrapper
  }, incrementQueue.slice(0, 3).map((item, iItem) => /*#__PURE__*/React.createElement(Label, {
    key: item.id,
    children: item.value,
    className: props.classes?.label,
    duration: props.duration,
    style: {
      top: item.top
    }
  }))), /*#__PURE__*/React.createElement(Button, {
    className: props.classes?.plus,
    onClick: onClickPlusBtn
  }, props.plusIcon ?? /*#__PURE__*/React.createElement(PlusIcon, null)));
};

AnimCounter.defaultProps = {
  duration: 150
};
export default AnimCounter;