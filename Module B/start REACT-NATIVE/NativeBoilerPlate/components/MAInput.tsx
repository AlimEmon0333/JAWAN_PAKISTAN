import React from 'react'
import rncstyles from "rncstyles"
import { Text, View, TextInput } from "react-native";

export default function MAInput({ placeholder, lable }: any) {
    return (
        <>
            <View style={rncstyles.p2}>
                <Text style={[rncstyles.ms1, rncstyles.textBold, rncstyles.fs6]}>
                    {lable}
                </Text>
                <TextInput style={[rncstyles.input, rncstyles.mb1]} placeholder={placeholder} />
            </View>
        </>

    )
}
