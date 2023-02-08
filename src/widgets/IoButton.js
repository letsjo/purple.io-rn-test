import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { LogBox } from 'react-native'
LogBox.ignoreLogs([`to contain units`])

const IoButtonContainer = styled.TouchableOpacity`
  position: absolute;
  left: 20;
  bottom: 30;
  width: 60;
  height: 60;
  background-color: #fff;
  border-radius: 30;
  justify-content: center;
  align-items: center;
  z-index:1;
  shadow-color: #000;
  shadow-opacity: 1;
  elevation: 5;
`;

const IoButton = ({ handlePressBack }) => {

  return (
    <IoButtonContainer onPress={handlePressBack}>
      <AntDesign name='arrowleft' size={16} color={'#000'} />
    </IoButtonContainer>
  );
}

export default IoButton;