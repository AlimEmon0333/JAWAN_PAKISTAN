import React from 'react'
import { Text, View, TextInput } from "react-native";
import rncstyles from 'rncstyles';

export default function MAMultilineInput({ placeholder, numberOfLines, label }: any) {
    return (
        <View style={rncstyles.p2}>
            <Text style={[rncstyles.m1, rncstyles.fs6, rncstyles.textBold]}>{label}</Text>
            <TextInput multiline={true} numberOfLines={numberOfLines} placeholder={placeholder} style={[rncstyles.shadow5, rncstyles.input, rncstyles.border2, { verticalAlign: "top" }]} />
        </View>
    )
}
