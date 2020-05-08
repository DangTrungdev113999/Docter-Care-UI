import React, {useState} from 'react';
import {Dimensions} from 'react-native';

import {Block, Body, Text, Button} from '../../lib';
import HeaderBackground from '../../components/HeaderBackground';
import Icon from '../../components/Icon';
import CardInfo from '../../components/CardInfo';
import doctorImage from '../../assets/doctor.jpg';
import doctorImage1 from '../../assets/doctor-2.jpeg';
const W = Dimensions.get('window').width;

const SearchScreen = () => {
  return (
    <Body scrollView bgColor="#f3f3f3">
      <Block absolute h={250} w={W}>
        <HeaderBackground />
      </Block>
      <Block block>
        <CardInfo
          source={doctorImage}
          noFooter
          book
          info={{
            name: 'Dr Ayon Das',
            time: 'Popular Pharma Limited',
            address: 'Dermatologists',
            detail: 'San Francisco, CA | 5 min',
            isLike: true,
            rating: true,
            tag: 'Wellness',
          }}
        />
        <Block mt={20} />
        <CardInfo
          source={doctorImage1}
          noFooter
          book
          info={{
            name: 'Dr Ayon Das',
            time: 'Popular Pharma Limited',
            address: 'Dermatologists',
            detail: 'San Francisco, CA | 5 min',
            isLike: true,
            rating: true,
            tag: 'Wellness',
          }}
        />
      </Block>
    </Body>
  );
};

export default SearchScreen;
