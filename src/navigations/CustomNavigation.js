import React from 'react'
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import StoreList from '../screens/StoreList';
import Detail from '../screens/Detail';

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
      <Stack.Screen
        name="STORE"
        component={StoreList}
      />
      <Stack.Screen
        name="Detail"
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
        component={Detail}
      />
    </Stack.Navigator>
  )
}

export default CustomNavigation