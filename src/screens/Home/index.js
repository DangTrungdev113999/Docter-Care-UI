import React from 'react';
import styled from 'styled-components';
import { Dimensions, View } from 'react-native';

import { Block, Body, Text } from '../../lib';
import HeaderBackground from '../../components/HeaderBackground';

const W = Dimensions.get('window').width;

const HomeScreen = () => {
  return (
    <Body bgColor='#f3f3f3'>
      <Block absolute h={250} w={W}>
        <HeaderBackground />
      </Block>
      <Block p={20} block>




        <Block>
          <Text h3 color="#fff">Hi Carly</Text>
          <Text color='#fff' size={18}>How are you feeling today?</Text>
        </Block>


        <Block
          bgColor='#fff'
          borderRadius={20}
          p={20}
          shadow
        >
          <Text h4> dang the trung  </Text>
        </Block>

      </Block>
    </Body>
  )
}

export default HomeScreen;
