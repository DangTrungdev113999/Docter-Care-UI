import styled from 'styled-components';

const Block = styled.View`
  ${({ block }) => block && 'flex: 1;'}
  ${({ flex }) => flex && `flex: ${flex};`}
  ${({ w }) => w && `width: ${w}px;`}
  ${({ h }) => h && `height: ${h}px;`}
  ${({ m }) => m && `margin: ${m}px;`}
  ${({ mt }) => mt && `margin-top: ${mt}px;`}
  ${({ mb }) => mb && `margin-bottom: ${mb}px;`}
  ${({ ml }) => ml && `margin-left: ${ml}px;`}
  ${({ mr }) => mr && `margin-right: ${mr}px;`}
  ${({ mv }) => mv && `margin-vertical: ${mv}px;`}
  ${({ mh }) => mh && `margin-horizontal: ${mh}px;`}
  ${({ p }) => p && `padding: ${p}px;`}
  ${({ pt }) => pt && `padding-top: ${pt}px;`}
  ${({ pb }) => pb && `padding-bottop: ${pb}px;`}
  ${({ pl }) => pl && `padding-left: ${pl}px;`}
  ${({ pr }) => pr && `padding-right: ${pr}px;`}
  ${({ pv }) => pv && `padding-vertical: ${pv}px;`}
  ${({ ph }) => ph && `padding-horizontal: ${ph}px;`}
  ${({ absolute }) => absolute && 'position: absolute;'}
  ${({ top }) => top && `top: ${top}px;`}
  ${({ bottom }) => bottom && `bottom: ${bottom}px;`}
  ${({ right }) => right && `right: ${right}px;`}
  ${({ left }) => left && `right: ${left}px;`}
  ${({ border }) =>
    border &&
    `
    border-width: 1px;
    border-color: gray;
  `}
  ${({ borderWidth }) => borderWidth && `border-width: ${borderWidth}px;`}
  ${({ borderColor }) => borderColor && `border-color: ${borderColor};`}
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}px`}
  ${({ bgColor }) => bgColor && `background-color: ${bgColor};`}
  ${({ centered }) => centered && 'justify-content: center;'}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`}
  ${({ direction }) => direction && `flex-direction: ${direction};`}
  ${({ middle }) => middle && 'align-items: center;'}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ shadow }) =>
    shadow &&
    `
    shadow-opacity: 0.14;
    shadow-color: #000;
    shadow-radius: 4px;
    elevation: 4;
  `}
  ${({ style }) => style && { ...style }}
`;

export default Block;
