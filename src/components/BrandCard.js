import React from 'react';
import styled, { css } from 'styled-components/native';

const Container = styled.View`
  ${({ width }) => {
    return css`
      width: ${width};
    `}
  }
  backgroundColor: '#f9c2ff';
`

const TopWrapper = styled.View`
  ${({ width }) => {
    return css`
      width: ${width};
      height: ${width};
    `}
  }
`

const Image = styled.Image`
  ${({ width }) => {
    return css`
      width: ${width};
      height: ${width};
      border-radius: ${width * 0.05}
    `}
  }
  object-fit: cover;
`

const BrandNameWrapper = styled.View`
  position: absolute;
  top: 10;
  left: 10;
  padding: 3px;
  background-color: #555;
`

const BrandName = styled.Text`
  ${({ width }) => {
    return css`
      font-size: ${width * 0.05};
    `}
  }
  color: #fff;
  font-weight: bold;
`

const BottomWrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const BrandTitle = styled.Text`
  ${({ width }) => {
    return css`
      font-size: ${width * 0.1};
      font-weight: bold;
    `}
  }
`

const BrandDescription = styled.Text`
  ${({ width }) => {
    return css`
      font-size: ${width * 0.07};
      font-weight: bold;
    `}
  }
`


const BrandCard = ({ brand, width }) => {
  return (
    <Container width={width}>
      <TopWrapper
        width={width}
      >
        <Image
          width={width}
          source={
            { uri: brand.image }
          } />
        {brand.name && (
          <BrandNameWrapper>
            <BrandName width={width}>
              {brand.name}
            </BrandName>
          </BrandNameWrapper>)
        }
      </TopWrapper>
      <BottomWrapper>
        <BrandTitle width={width} numberOfLines={2}>{brand.title}</BrandTitle>
        <BrandDescription width={width} numberOfLines={1}>{brand.description}</BrandDescription>
      </BottomWrapper>
    </Container>
  )
}

export default BrandCard