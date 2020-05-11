import React from 'react';
import styled from 'styled-components';

const TextInput = styled.TextInput`

  ${({block}) => block && 'flex: 1;'}
  ${({bgColor}) => bgColor && `background-color: ${bgColor};`}
  ${({w}) => w && `width: ${w}px;`}
  ${({h}) => h && `height: ${h}px;`}
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
  ${({absolute}) => absolute && 'position: absolute;'}
  ${({top}) => top && `top: ${top}px;`}
  ${({bottom}) => bottom && `bottom: ${bottom}px;`}
  ${({right}) => right && `right: ${right}px;`}
  ${({left}) => left && `right: ${left}px;`}
  ${({border}) =>
    border &&
    `
    border-width: 1px;
    border-color: gray;
  `}
  ${({borderRadius}) => borderRadius && 'border-radius: 8px;'}
  ${({size}) => size && `font-size: ${size}px;`}
  ${({color}) => color && `color: ${color};`}
  ${({style}) => style && {...style}}
`;

const Input = ({
  onTextChange,
  value,
  placeholder,
  color,
  editable = true,
  keyboardType = 'phone-pad',
  style,
  ...rest
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onTextChange}
      editable={editable}
      keyboardType={keyboardType}
      value={value}
      style={style}
      {...rest}
    />
  );
};

export default Input;
