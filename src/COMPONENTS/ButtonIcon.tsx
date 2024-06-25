import { StyleSheet, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import Colors from '../CONSTANTS/Colors';

type buttonIconProps = {
    name: any;
    size: number;
    color: string;
};

export default function ButtonIcon(props: buttonIconProps) {
    return (
        <View style={styles.container}>
            <AntDesign name={props.name} size={props.size} color={props.color} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        backgroundColor: Colors.lightGray,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});