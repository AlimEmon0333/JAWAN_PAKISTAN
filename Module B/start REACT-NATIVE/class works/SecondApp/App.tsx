import { Text, TextInput, View } from "react-native";
import rncstyles from "rncstyles"

export default function App() {
  return (
    <>
      <View>
        <Text style={[rncstyles.m1 , rncstyles.justifyContentCenter]}>Input component</Text>
        <TextInput placeholder="Hello native" style={rncstyles.input}/>
      </View>
    </>
  )
}