/* eslint-disable curly */
/* eslint-disable quotes */
import styled from 'styled-components';

const Text = styled.Text`
  font-size: 14px;
  ${({thin}) => thin && 'font-weight: 100;'}
  ${({light}) => light && 'font-weight: 300;'}
  ${({medium}) => medium && 'font-weight: 500;'}
  ${({bold}) => bold && 'font-weight: 700;'}
  ${({extraBold}) => extraBold && 'font-weight: 900;'}
  ${({weight}) => {
    if (weight) return `font-weight: ${+weight};`;
    return 'font-weight: 400';
  }}
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
  ${({size}) => size && `font-size: ${size}px;`}
  ${({color}) => color && `color: ${color};`}
  ${({italic}) => italic && 'font-style: italic;'}
  ${({h1}) =>
    h1 &&
    `
    font-size: 44px;
    font-weight: bold;
  `}
  ${({h2}) =>
    h2 &&
    `
    font-size: 38px;
    font-weight: bold;
  `}
  ${({h3}) =>
    h3 &&
    `
    font-size: 32px;
    font-weight: bold;
  `}
  ${({h4}) =>
    h4 &&
    `
    font-size: 28px;
    font-weight: bold;
  `}
  ${({h5}) =>
    h5 &&
    `
    font-size: 22px;
    font-weight: bold;
  `}
  ${({h6}) =>
    h6 &&
    `
    font-size: 18px;
    font-weight: bold;
  `}
  ${({center}) =>
    center &&
    `
    text-align: center;
  `}
  ${({right}) =>
    right &&
    `
    align-self: flex-start;
    text-align: right;
  `}
  ${({left}) =>
    left &&
    `
    align-self: flex-end;   
    text-align:  left;
  `}
  
`;

export default Text;
