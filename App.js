import React from 'react';
import HomeScreen from './screens/HomeScreen';
import SelectCategoryScreen from './screens/SelectCategoryScreen';
import WorkoutScreen from './screens/WorkoutScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#00A0F3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Mobility Home" }}
        />
        <Stack.Screen
          name="SelectCategory"
          component={SelectCategoryScreen}
          options={{ title: "Select Category" }}
        />
        <Stack.Screen
          name="Workout"
          component={WorkoutScreen}
          options={{ title: "Workout" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}