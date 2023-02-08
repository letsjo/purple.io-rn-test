import { useEffect, useState } from 'react';

import BrandCard from '../components/BrandCard';
import userAPI from '../apis/userAPI'

import styled from 'styled-components/native';
import { windowWidth } from '../config/globalStyles';

const BrandListWrapper = styled.FlatList`
  background-color: #fff;
`

const BrandCardTouch = styled.TouchableOpacity`
  padding-left: 10px;
  padding-right: 10px;
`

const StoreList = ({ navigation }) => {
  const [brandList, setBrandList] = useState([]);

  const [containerWidth, setContainerWidth] = useState(0);
  const margins = 39 * 2;
  const numColumns = 2;

  useEffect(() => {
    const getBrandList = () => {
      userAPI.get('/stores')
        .then(res => {
          setBrandList(res.data);
        }).catch(error => console.log(error));
    }
    getBrandList();
  }, []);

  return (
    <BrandListWrapper
      data={brandList}
      columnWrapperStyle={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 18,
        marginBottom: 18,
      }}
      onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
      renderItem={(brand) => (
        <BrandCardTouch
          windowWidth={windowWidth}
          onPress={() => navigation.navigate('DETAIL', { brand, msg: "From Screen 1" })}
        >
          <BrandCard
            width={(containerWidth - margins) / numColumns}
            brand={brand.item}
          />
        </BrandCardTouch>
      )}
      keyExtractor={(item, index) => index}
      numColumns={numColumns}
    />
  )
}

export default StoreList