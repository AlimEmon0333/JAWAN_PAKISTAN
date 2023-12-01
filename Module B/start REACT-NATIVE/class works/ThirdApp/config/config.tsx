// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home';
import Product from '../pages/product';
import SingleProduct from '../pages/singleProduct';
import { _black } from "rncstyles";
import { Icon } from "@rneui/themed";
import SignUp from '../login_signup_screens/signup';
import Login from '../login_signup_screens/login';


const Stack = createNativeStackNavigator();

function StackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="signup" options={{ headerShown: false }} component={SignUp} />
                <Stack.Screen name="login" options={{ headerShown: false }} component={Login} />
                <Stack.Screen
                    options={{
                        title: "Welcome to ecommerce",
                        headerTitleAlign: "center",
                        headerTintColor: _black,

                    }}
                    name="Home" component={Home} />
                <Stack.Screen
                    options={{
                        title: "Welcome to Products",
                        headerTitleAlign: "center",
                        headerTintColor: _black,
                    }}
                    name="Products" component={Product} />
                <Stack.Screen name="Single product" options={{ title: "Product details" }} component={SingleProduct} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigation;