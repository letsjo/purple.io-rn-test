import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { BackHandler } from 'react-native';

import { useSetRecoilState } from 'recoil';
import { isTabViewState } from '../state/isTabViewState';

const Detail = ({ navigation, route }) => {
  const setIsTabView = useSetRecoilState(isTabViewState);

  const handlePressBack = () => {
    if (navigation?.canGoBack()) {
      setIsTabView(true)
      navigation.goBack();
      return true
    }
    return false
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handlePressBack)
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handlePressBack)
    }
  }, [handlePressBack])

  useEffect(() => {
    setIsTabView(false);
  }, [])

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>{route.params.msg}</Text>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000025',
  },
  text: {
    color: '#000',
    fontWeight: '700',
    fontSize: 30
  },
})