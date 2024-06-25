import { Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

type TimerProps = {
    time: number;
    color: string;
    setIsFinished: (isFinished: boolean) => void;
};
export default function Timer(props: TimerProps) {
    const [timer, setTimer] = useState(props.time);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer > 0)
                    return prevTimer - 1;
                else
                    return 0;
            });
        }, 1000);

        return () => clearInterval(interval);

    }, [props]);

    useEffect(() => {
        if (timer === 0)
            props.setIsFinished(true);
    }, [timer, props]);

    return (
        <Text style={{ ...styles.timer, color: props.color }}>{timer === 0 ? '' : timer}</Text>
    )
}

const styles = StyleSheet.create({
    timer: {
        fontSize: 20,
        fontFamily: 'poppins-bold',
        textAlign: 'center',
        width: 40,
    }
})