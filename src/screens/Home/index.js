import React from 'react';
import styled from 'styled-components';
import { Dimensions, View } from 'react-native';

import { Block, Body, Text, Button } from '../../lib';
import HeaderBackground from '../../components/HeaderBackground';
import Icon from './component/Icon';

const W = Dimensions.get('window').width;

const HomeScreen = () => {
  return (
    <Body bgColor='#f3f3f3'>
      <Block absolute h={250} w={W}>
        <HeaderBackground />
      </Block>
      <Block block>
        <Block mt={52} ph={30} pv={20} >
          <Text h3 color="#fff">Hi Carly</Text>
          <Text color='#fff' size={18}>How are you feeling today?</Text>
        </Block>

        <Block
          direction='row'
          middle
          justifyContent='space-between'
          bgColor='#fff'
          borderRadius={20}
          p={20}
          mh={20}
          mt={W / 4}
          shadow
        >
          <Icon name='md-happy' color='#000' size={50} />
          <Icon name='md-happy' color='#000' size={50} />
          <Icon name='md-happy' color='#000' size={50} />
          <Icon name='md-happy' color='#000' size={50} />
          <Icon name='md-happy' color='#000' size={50} />
        </Block>

      </Block>
    </Body>
  )
}

export default HomeScreen;
