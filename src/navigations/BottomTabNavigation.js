import React, { useState } from 'react'
import styled from 'styled-components/native';
import { useSetRecoilState, useRecoilState, useRecoilValue } from 'recoil';

import CustomNavigation from './CustomNavigation';
import About from '../screens/About';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { isTabViewState } from '../state/isTabViewState';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const isTabView = useRecoilValue(isTabViewState);

  return (
    <Tab.Navigator
      initialRouteName='Store'
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
      <Tab.Screen name='Store' options={{ headerShown: false, tabBarStyle: { display: `${isTabView ? 'flex' : 'none'}` } }} component={CustomNavigation} />
      <Tab.Screen name='About' options={{ headerShown: true, tabBarStyle: { display: `${isTabView ? 'flex' : 'none'}` } }} component={About} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation