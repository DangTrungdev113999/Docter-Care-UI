import React from 'react';
import Iconicons from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {Block, Text} from '../lib';

const Icon = ({
  size = 20,
  color = '#000',
  name = 'slightly-smile',
  bgColor,
  type = 'iconicons',
  ...rest
}) => {
  return (
    <Block
      w={size}
      h={size}
      borderRadius={size / 2}
      bgColor={bgColor}
      {...rest}>
      {type === 'antDesign' && (
        <AntDesign name={name} size={size} color={color} />
      )}
      {type === 'iconicons' && (
        <Iconicons name={name} size={size} color={color} />
      )}
      {type === 'maturialIcons' && (
        <MaterialIcons name={name} size={size} color={color} />
      )}
      {type === 'fontAwesome' && (
        <FontAwesome name={name} size={size} color={color} />
      )}
    </Block>
  );
};

export default Icon;
