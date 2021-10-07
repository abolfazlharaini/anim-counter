// App
//
import AnimCounterLogic from './AnimCounterLogic';
import PlusIcon from './PlusIcon';
import MinusIcon from './MinusIcon';
import { Label, Button, LabelWrapper, Root } from './AnimCounter.styles';


const AnimCounter = (props) => {
    const {
        onClickPlusBtn,
        onClickMinusBtn,
        incrementQueue
    } = AnimCounterLogic(props);

    return (
        <Root className={props.classes?.root}>
            <Button
                className={props.classes?.minus}
                onClick={onClickMinusBtn}>
                {props.minusChildren ?? <MinusIcon />}
            </Button>
            <LabelWrapper className={props.classes?.labelWrapper}>
                {incrementQueue.slice(0, 3).map((item, iItem) =>
                    <Label
                        key={item.id}
                        children={item.value}
                        className={props.classes.label}
                        duration={props.duration}
                        style={{ top: item.top }} />
                )}
            </LabelWrapper>
            <Button
                className={props.classes?.plus}
                onClick={onClickPlusBtn}>
                {props.plusChildren ?? <PlusIcon />}
            </Button>
        </Root>
    );
}

AnimCounter.defaultProps = {
    duration: 150
};
export default AnimCounter;
