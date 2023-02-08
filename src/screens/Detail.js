import { useEffect } from 'react'
import { BackHandler } from 'react-native';
import { useSetRecoilState } from 'recoil';

import styled, { css } from 'styled-components/native';

import { isTabViewState } from '../state/isTabViewState';
import { windowWidth } from '../config/globalStyles';
import IoButton from '../widgets/IoButton';

const Container = styled.View`
  position: relative;
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const ScrollList = styled.ScrollView`
  flex: 24;
`

const MainImage = styled.Image`
  ${({ windowWidth }) => {
    return css`
      width: ${windowWidth};
      height: ${windowWidth};
    `}
  }
`
const TitleView = styled.View`
  ${({ windowWidth }) => {
    return css`
      width: ${windowWidth};
    `}
  }
  padding: 20px; 
  padding-bottom: 150px;
`

const Name = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #2c2c2c;
`;

const UrlLink = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: #2c2c2c;
`

const Description = styled.Text`
  font-size: 15px;
  font-weight: 100;
  color: #2c2c2c;
`;


const Detail = ({ navigation, route }) => {
  const { id, name, url, title, description, image } = route.params.brand.item;
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
    <Container>
      <ScrollList>
        <MainImage source={{ uri: image }} windowWidth={windowWidth} />
        <TitleView>
          <Name>{title}</Name>
          {url && (
            <UrlLink>
              {url}
            </UrlLink>
          )}
          <Description>{description}</Description>
        </TitleView>
      </ScrollList>
      <IoButton handlePressBack={handlePressBack} />
    </Container>
  )
}

export default Detail