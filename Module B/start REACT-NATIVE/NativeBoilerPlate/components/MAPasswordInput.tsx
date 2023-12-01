import React from 'react'
import rncstyles from "rncstyles"
import { View, Text, TouchableOpacity, TextInput } from "react-native";

export default function MAPasswordInput({ placeholder, lable }: any) {
    return (
        <>
            <View style={rncstyles.p2}>
                <Text style={[rncstyles.ms1, rncstyles.textBold, rncstyles.fs6]}>
                    {lable}
                </Text>
                <TextInput style={[rncstyles.input, rncstyles.mb1]} secureTextEntry={true} keyboardType='numeric' placeholder={placeholder} />
            </View>
        </>

    )
}
