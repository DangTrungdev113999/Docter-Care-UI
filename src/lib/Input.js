import React from 'react';
import styled from 'styled-components';

const TextInput = styled.TextInput`
  ${({m}) => m && `margin: ${m};`}
  ${({p}) => p && `padding: ${p};`}
  ${({bgColor}) => bgColor && `background-color: ${bgColor};`}
  ${({border}) =>
    border &&
    `
    border-width: 1px;
    border-color: gray;
  `}
  ${({radius}) => radius && 'border-radius: 8px;'}
  ${({fontSize}) => fontSize && `font-size: ${fontSize}px;`}
  ${({style}) => style && {...style}}
`;

const Input = ({onTextChange, value, placeholder, style, ...rest}) => {
  return (
    <TextInput
      placeholder={placeholder}
      onTextChange={onTextChange}
      value={value}
      style={style}
      {...rest}
    />
  );
};

export default Input;
