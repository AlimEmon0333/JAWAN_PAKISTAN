
import { View, TextInput, TouchableOpacity, Text, ScrollView, ToastAndroid } from 'react-native'
import { useState } from "react";
import rncStyles from 'rncstyles'
import auth from '@react-native-firebase/auth';
import database from "@react-native-firebase/database"

export default function SignUp({ navigation }: any) {
    const [user, setUser] = useState<any>({});
    const createUser = (key: any, val: any) => {
        user[key] = val
        setUser({ ...user })
    }
    const signupUser = () => {
        auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then((res) => {
                let id = res.user.uid
                database().ref(`users/${id}`).set(user)
                    .then(() => {
                        navigation.navigate("Home")
                        ToastAndroid.show(`you are successfully signed up ! (:) ${user.username}` , ToastAndroid.SHORT)
                    })
                    .catch((err) => {
                        ToastAndroid.show(err, ToastAndroid.SHORT)
                    })
            })
            .catch((err) => {
                console.log(err);
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
                    rncStyles.ms1,
                    rncStyles.h100,
                    rncStyles.justifyContentCenter
                ]}>
                <View
                    style={rncStyles.py3}>
                    <Text
                        style={[
                            rncStyles.fs1,
                            rncStyles.textPrimary,
                            rncStyles.textBold,
                            rncStyles.mb1
                        ]}
                    >Sign Up</Text>
                    <Text
                        style={[
                            rncStyles.fs5,
                            rncStyles.textSecondary
                        ]}
                    >Please Enter Your Information and create Acount.</Text>
                </View>
                <ScrollView>
                    <View>
                        <View
                            style={rncStyles.pb1}>
                            <Text
                                style={[
                                    rncStyles.textPrimary,
                                    rncStyles.p1
                                ]}
                            >Full Name</Text>
                            <TextInput
                                onChangeText={(e) => createUser("username", e)}
                                placeholder='eg. Muhammad Zaid'
                                style={[
                                    rncStyles.input,
                                    rncStyles.bgWhite,
                                    rncStyles.rounded,
                                    rncStyles.border1,
                                    rncStyles.borderPrimary
                                ]}
                            />
                        </View>
                        <View
                            style={rncStyles.pb1}>
                            <Text
                                style={[
                                    rncStyles.textPrimary,
                                    rncStyles.p1
                                ]}
                            >Email</Text>
                            <TextInput
                                onChangeText={(e) => createUser("email", e)}
                                keyboardType='email-address'
                                style={[
                                    rncStyles.input,
                                    rncStyles.bgWhite,
                                    rncStyles.rounded,
                                    rncStyles.border1,
                                    rncStyles.borderPrimary
                                ]}
                                placeholder='example@abc.com'
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
                                onChangeText={(e) => createUser("password", e)}
                                secureTextEntry={true}
                                style={[
                                    rncStyles.input,
                                    rncStyles.bgWhite,
                                    rncStyles.rounded,
                                    rncStyles.border1,
                                    rncStyles.borderPrimary
                                ]}
                                placeholder='Enter Password atleast 6 characters'
                                keyboardType='numeric'
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
                                    onPress={signupUser}
                                    style={[
                                        rncStyles.fs5,
                                        rncStyles.textWhite,
                                        rncStyles.textCenter
                                    ]}
                                >Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
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
                    >Have an Account?</Text>
                    <TouchableOpacity>
                        <Text
                            onPress={() => navigation.navigate("login")}
                            style={[
                                rncStyles.textBold,
                                rncStyles.fs5,
                                rncStyles.ms1,
                                rncStyles.textPrimary
                            ]}
                        >Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </>
}

