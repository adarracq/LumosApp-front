import React, { useState } from 'react'
import Timer from '../../../../COMPONENTS/Timer';
import ButtonIcon from '../../../../COMPONENTS/ButtonIcon';
import Colors from '../../../../CONSTANTS/Colors';
import Button from '../../../../COMPONENTS/Button';
import TextButton from '../../../../COMPONENTS/TextButton';

type TimerButtonProps = {
    time: number;
    onPress: () => void;
};
export default function TimerButton(props: TimerButtonProps) {
    const [isFinished, setIsFinished] = useState(false);

    return (
        <Button
            color={isFinished ? Colors.lightGreen : Colors.disabled}
            onPress={props.onPress}
            isEnabled={isFinished}
        >
            <Timer
                time={props.time}
                color={isFinished ? Colors.white : Colors.disabledText}
                setIsFinished={setIsFinished} />
            <TextButton text="Continuer" color={isFinished ? Colors.white : Colors.disabledText} />
            {
                isFinished ?
                    <ButtonIcon name="check" size={30} color={Colors.lightGreen} />
                    :
                    <ButtonIcon name="close" size={30} color={Colors.disabledText} />
            }
        </Button>
    )
}