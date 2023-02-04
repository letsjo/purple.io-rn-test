import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styled from 'styled-components/native';

import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Store' component={Home} />
    </Stack.Navigator>
  )
}

export default StackNavigation