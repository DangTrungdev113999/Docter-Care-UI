import React from 'react';
import styled from 'styled-components';
import { Dimensions } from 'react-native';
import Iconicons from 'react-native-vector-icons/Ionicons'

import { Block, Text } from '../../../lib';

const W = Dimensions.get('window').width;

const Icon = ({ size, color, name, moreText }) => {
  return (
    <Block>
      <Iconicons name={name} size={size} color={color} />
      {moreText && <Text>{moreText}</Text>}
    </Block>
  )
}

export default Icon;
