import React from 'react';
import {Button} from '../../lib/index';
import Icon from '../../components/Icon';

const BackIcon = ({navigation}) => {
  const goBack = () => {
    navigation.navigate('Home');
  };
  return (
    <Button onPress={goBack} ml={15}>
      <Icon type="antDesign" name="left" size={20} color="#fff" />
    </Button>
  );
};

export default BackIcon;
