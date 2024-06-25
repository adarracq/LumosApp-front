import { View, Text, Image } from 'react-native'
import React from 'react'
import { functions } from '../CONSTANTS/Functions';
import Colors from '../CONSTANTS/Colors';

type TabBarElementProps = {
    title: string;
    focused: boolean;
    name: string;
}

export default function TabBarElement(props: TabBarElementProps) {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image
                source={functions.getIconSource(props.name)}
                style={{
                    width: props.focused ? 40 : 25,
                    height: props.focused ? 40 : 25,
                    tintColor: props.focused ? Colors.lightBlue : Colors.lightGray
                }}
            />
            <Text style={{
                color: props.focused ? Colors.lightBlue : Colors.lightGray,
                fontFamily: props.focused ? 'poppins-bold' : 'poppins',
                fontSize: props.focused ? 12 : 10,
            }}>{props.title}</Text>
        </View>
    )
}