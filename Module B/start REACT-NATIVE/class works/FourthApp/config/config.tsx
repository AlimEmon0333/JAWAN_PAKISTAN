import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UploadImage from '../imageUploader/uploadImage';

const Stack = createNativeStackNavigator();

function StackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="uploadImage" options={{
                    title: "Upload your image"
                }} component={UploadImage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigation;