import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CreateAccount from '../screens/signup/CreateAccount';
const Stack = createStackNavigator();

const Signup = () => {
    return (
        <Stack.Navigator initialRouteName="CreateAccount" screenOptions={{headerShown: false}}>
            <Stack.Screen name="CreateAccount" component={CreateAccount} />
        </Stack.Navigator>
    );
}

export default Signup;