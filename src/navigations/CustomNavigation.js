import React from 'react'
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import { StackMainData } from '../datas/StackMainData';

const Stack = createStackNavigator();

const CustomNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 80,
          shadowColor: '#222',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.2,
          shadowRadius: 4.65,
        },
        headerTitleAlign: 'center',
      }}
    >
      {
        StackMainData && StackMainData.map((stack, index) => (
          <Stack.Screen
            key={index}
            name={stack.name}
            options={{
              headerShown: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
            component={stack.component}
          />
        ))
      }
    </Stack.Navigator>
  )
}

export default CustomNavigation