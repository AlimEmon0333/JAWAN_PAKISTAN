// In StackNavigation.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import SignUp from '../screens/signup';
import Login from '../screens/login';
import Task from '../screens/task';
import SingleTask from '../screens/singleTask';
import Profile from '../screens/profile';
import Team from '../screens/team';
import CreateTeam from '../screens/createTeam';
import CreateTask from '../screens/createTask';

const Stack = createNativeStackNavigator();

function StackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="signup" component={SignUp} />
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="createTask" component={CreateTask} />
                <Stack.Screen name="task" component={Task} />
                <Stack.Screen name="singleTask" component={SingleTask} />
                <Stack.Screen name="profile" component={Profile} />
                <Stack.Screen name="team" component={Team} />
                <Stack.Screen name="createTeam" component={CreateTeam} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigation;