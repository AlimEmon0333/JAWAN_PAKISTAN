import React from 'react'
import { StyleSheet, Text, View  , TextInput} from 'react-native'
import rncStyles from 'rncstyles'

export default function App() {
  const styles = StyleSheet.create({
    signupHead: {
      textAlign:"center",
      fontSize:35,
      fontWeight:"bold",
      color:"black",
    }
  })
  return (
    <View style={[rncStyles.h100, rncStyles.p2, rncStyles.bgLight]}>
      <Text style={[styles.signupHead , rncStyles.shadow5 , rncStyles.m2]}>Sign up</Text>
      <View style={[rncStyles.AlignItemsCenter , rncStyles.mt5]}>
        <TextInput placeholder="Input" placeholderTextColor='black' style={[rncStyles.input, rncStyles.border1]} />
      </View> 
    </View>
    
  )
}
