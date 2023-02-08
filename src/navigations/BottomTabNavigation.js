import React, { useState } from 'react'
import styled from 'styled-components/native';
import { useRecoilValue } from 'recoil';

import CustomNavigation from './CustomNavigation';
import About from '../screens/About';

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { isTabViewState } from '../state/isTabViewState';
import { BottomTabData } from '../datas/BottomTabData';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const isTabView = useRecoilValue(isTabViewState);

  const TabIcon = ({ name, color }) => {
    return <Ionicons name={name} size={24} color={color} />;
  }

  return (
    <Tab.Navigator
      initialRouteName='StoreList'
      screenOptions={({
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
        tabBarActiveTintColor: '#63489A',
        tabBarInactiveTintColor: '#000',
        headerTitleAlign: 'center',
      })}
    >
      {
        BottomTabData.map((TabMenu, index) => (
          <Tab.Screen
            key={index}
            name={TabMenu.name}
            options={
              {
                tabBarShowLabel: TabMenu.name,
                headerShown: isTabView ? true : false,
                tabBarStyle: { display: `${isTabView ? 'flex' : 'none'}` },
                tabBarIcon: props => TabIcon(
                  {
                    ...props,
                    name: props.focused ? TabMenu.activeIcon : TabMenu.inActiveIcon,
                  }
                )
              }
            }
            component={TabMenu.component}
          />
        ))
      }
    </Tab.Navigator>
  )
}

export default BottomTabNavigation