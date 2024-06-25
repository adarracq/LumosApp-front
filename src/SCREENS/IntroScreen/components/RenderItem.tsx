import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import CommonText from '../../../COMPONENTS/TextCommon'
import Colors from '../../../CONSTANTS/Colors';

type RenderItemProps = {
    backgroundColor: string;
    image: any;
    text: string;
};

export default function RenderItem(props: RenderItemProps) {
    return (
        <View
            style={{ ...styles.container, backgroundColor: props.backgroundColor }}>
            <Image
                style={styles.introImageStyle}
                source={props.image} />
            <CommonText
                text={props.text}
                color={Colors.lightGray} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingBottom: 100,
    },
    introImageStyle: {
        width: 250,
        height: 250,
        backgroundColor: Colors.lightGray,
        borderRadius: 50,
    },
})