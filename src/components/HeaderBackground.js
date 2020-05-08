import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

const W = Dimensions.get('window').width;

const LinearGradientStyled = styled(LinearGradient)`
  height: ${(W * 3) / 5}px;
  border-bottom-left-radius: ${({a}) => (a ? 0 : 60)}px;
  border-bottom-right-radius: ${({a}) => (a ? 0 : 60)}px;
`;

const Line = styled.View`
  position: absolute;
  width: ${W}px;
  height: 90px;
  top: ${({top}) => top}px;
  left: ${({left}) => left}px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  transform: rotate(-35deg);
`;

const HeaderBackground = ({a}) => {
  return (
    <LinearGradientStyled
      a
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#5D0E7F', '#7A007E', '#9C007F']}>
      <Line top={100} left={-300} />
      <Line top={130} left={-150} />
      <Line top={160} left={0} />
    </LinearGradientStyled>
  );
};

export default HeaderBackground;
