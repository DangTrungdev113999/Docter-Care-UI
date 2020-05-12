import React from 'react';
import {Button, Block} from '../../lib/index';
import Icon from '../../components/Icon';

const RightIcon = ({navigation}) => {
  return (
    <Block mr={10} direction="row" centered middle>
      <Button mr={15}>
        <Icon type="antDesign" name="hearto" size={20} color="#fff" />
      </Button>
      <Button mr={15}>
        <Icon type="feather" name="share" size={20} color="#fff" />
      </Button>
    </Block>
  );
};

export default RightIcon;
