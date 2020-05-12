import React from 'react';
import styled from 'styled-components';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SafeAreaViewStyled = styled.View`
  flex: 1;
  ${({m}) => m && `margin: ${m}px;`}
  ${({mt}) => mt && `margin-top: ${mt}px;`}
  ${({mb}) => mb && `margin-bottom: ${mb}px;`}
  ${({ml}) => ml && `margin-left: ${ml}px;`}
  ${({mr}) => mr && `margin-right: ${mr}px;`}
  ${({mv}) => mv && `margin-vertical: ${mv}px;`}
  ${({mh}) => mh && `margin-horizontal: ${mh}px;`}
  ${({p}) => p && `padding: ${p}px;`}
  ${({pt}) => pt && `padding-top: ${pt}px;`}
  ${({pb}) => pb && `padding-bottop: ${pb}px;`}
  ${({pl}) => pl && `padding-left: ${pl}px;`}
  ${({pr}) => pr && `padding-right: ${pr}px;`}
  ${({pv}) => pv && `padding-vertical: ${pv}px;`}
  ${({ph}) => ph && `padding-horizontal: ${ph}px;`}
  ${({bgColor}) => bgColor && `background-color: ${bgColor};`}
  ${({style}) => style && {...style}}
`;

const Body = ({children, scrollView, ...rest}) => {
  return (
    <SafeAreaViewStyled {...rest}>
      {scrollView ? (
        <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
      ) : (
        children
      )}
    </SafeAreaViewStyled>
  );
};

export default Body;
