import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
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

const Store = ({ navigation }) => {
  return (
    <Container>
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail', { msg: "From Screen 1" })}
        style={styles.button}
      >
        <Title>Click Me!</Title>
      </TouchableOpacity>
    </Container>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0275d8',
    paddingVertical: 5,
    paddingHorizontal: 10

  },
  buttonText: {
    color: '#fff',
    fontSize: 25
  }
})

export default Store