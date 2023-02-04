import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './navigations/BottomTabNavigation';

import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <NavigationContainer>
      <RecoilRoot>
        <BottomTabNavigation />
      </RecoilRoot>
    </NavigationContainer>
  )
}

export default App;