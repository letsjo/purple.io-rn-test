import React from 'react'
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #2c2c2c;
`;

const Home = ({ navigation }) => {
  return (
    <Container>
      <Title>Home</Title>
    </Container>
  )
}

export default Home