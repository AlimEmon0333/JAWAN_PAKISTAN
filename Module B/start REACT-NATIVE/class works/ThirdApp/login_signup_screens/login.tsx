
import { View, TextInput, TouchableOpacity, Text, ToastAndroid } from 'react-native'
import rncStyles from 'rncstyles'
import { useState } from "react";
import auth from "@react-native-firebase/auth"

export default function Login({ navigation }: any) {
    const [user, setUser] = useState<any>({});
    const loginUser = (key: any, val: any) => {
        user[key] = val
        setUser({ ...user })
    }
    const signInUser = () => {
        auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then((res) => {
                navigation.navigate("Home")
            })
            .catch((err) => {
                ToastAndroid.show(err, ToastAndroid.SHORT);
            })
    }
    return <>
        <View
            style={[
                rncStyles.h100,
                rncStyles.bgWhite
            ]}>
            <View
                style={[
                    rncStyles.h100,
                    rncStyles.p2,
                    rncStyles.justifyContentCenter
                ]}>
                <View
                    style={rncStyles.py5}>
                    <Text
                        style={[
                            rncStyles.fs1,
                            rncStyles.textPrimary,
                            rncStyles.textBold,
                            rncStyles.mb1
                        ]}
                    >Login</Text>
                    <Text
                        style={[
                            rncStyles.fs5,
                            rncStyles.textSecondary
                        ]}
                    >Please Sign in to continue.</Text>
                </View>
                <View>
                    <View
                        style={rncStyles.pb1}>
                        <Text
                            style={[
                                rncStyles.textPrimary,
                                rncStyles.p1
                            ]}
                        >Email</Text>
                        <TextInput
                            onChangeText={(e) => loginUser("email", e)}
                            style={[
                                rncStyles.input,
                                rncStyles.bgWhite,
                                rncStyles.rounded,
                                rncStyles.border1,
                                rncStyles.borderPrimary
                            ]}
                            placeholder='example@abc.com'
                            keyboardType='email-address'
                        />
                    </View>
                    <View
                        style={rncStyles.pb1}>
                        <Text
                            style={[
                                rncStyles.textPrimary,
                                rncStyles.p1
                            ]}
                        >Password</Text>
                        <TextInput
                            onChangeText={(e) => loginUser("password", e)}
                            style={[
                                rncStyles.input,
                                rncStyles.bgWhite,
                                rncStyles.rounded,
                                rncStyles.border1,
                                rncStyles.borderPrimary
                            ]}
                            placeholder='Enter Password atleast 6 characters'
                            keyboardType='numeric'
                            secureTextEntry={true}
                        />
                    </View>
                    <View
                        style={rncStyles.py2}
                    >
                        <TouchableOpacity
                            style={[
                                rncStyles.btnPrimary,
                                rncStyles.rounded
                            ]}
                        >
                            <Text
                                onPress={signInUser}
                                style={[
                                    rncStyles.fs5,
                                    rncStyles.textWhite,
                                    rncStyles.textCenter
                                ]}
                            >Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    style={[
                        rncStyles.py2,
                        rncStyles.flexRow,
                        rncStyles.justifyContentCenter
                    ]}
                >
                    <Text
                        style={[
                            rncStyles.textBold,
                            rncStyles.textSecondary,
                            rncStyles.fs5
                        ]}
                    >Not Registerar yet?</Text>
                    <TouchableOpacity>
                        <Text
                            onPress={() => navigation.navigate("signup")}
                            style={[
                                rncStyles.textBold,
                                rncStyles.fs5,
                                rncStyles.ms1,
                                rncStyles.textPrimary
                            ]}
                        >Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </>
}

