import { View, TouchableOpacity, Image, Text } from "react-native";
import rncStyles from "rncstyles";
import banner from "../img/banner.jpg"

export default function Home({ navigation }: any) {

    return (
        <>
            <View>
                <Image source={banner}
                    resizeMode="contain"
                />
            </View>
            <Text style={[rncStyles.fs1, rncStyles.textInfo, rncStyles.textCenter, rncStyles.my2, rncStyles.textUnderline]}>New Arrivals</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Products")}>
                <Text style={[rncStyles.textCenter , rncStyles.m2 , rncStyles.btn , rncStyles.fs1 , rncStyles.textBold ]}>See New Arrivals Which are 50% off </Text>
            </TouchableOpacity>
        </>
    )
}