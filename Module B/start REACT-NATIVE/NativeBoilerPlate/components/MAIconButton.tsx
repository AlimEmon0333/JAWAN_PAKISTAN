import React from 'react'
import rncstyles from "rncstyles";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/EvilIcons';

type MAIcon = {
    name: string,
    size: number,
    color: string
}

export default function MAIconButton(props: MAIcon) {
    return (
        <View style={[rncstyles.flexRow]}>
            <View style={[rncstyles.bgWhite, rncstyles.roundedPill, rncstyles.justifyContentCenter, rncstyles.alignItemsCenter, rncstyles.shadow5, rncstyles.m1, { width: 50, height: 50 }]}>

                <Icon name={props.name} size={props.size} color={props.color} />

            </View>
        </View>
    )
}
