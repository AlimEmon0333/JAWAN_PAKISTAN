import React from 'react'
import rncstyles from "rncstyles"
import { Text, TouchableOpacity } from "react-native";

export default function MAButton({ value, onPress }: any) {
    return (
        <TouchableOpacity style={[rncstyles.btnBlack, rncstyles.my2, rncstyles.mx1  ]}>
            <Text style={[rncstyles.textCenter , rncstyles.textWhite ]} onPress={onPress} >
                {value}
            </Text>
        </TouchableOpacity>
    )
}
