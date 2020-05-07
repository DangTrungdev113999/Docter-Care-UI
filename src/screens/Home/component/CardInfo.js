import React, {useState} from 'react';
import styled from 'styled-components';
import {Block, Text, Button} from '../../../lib/index';
import Icon from '../../../components/Icon';

const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const icons = [
  {name: 'checkcircleo', size: 32, text: 'Check-in', type: 'antDesign'},
  {name: 'closecircleo', size: 32, text: 'Cancle', type: 'antDesign'},
  {name: 'calendar', size: 32, text: 'Calendar', type: 'antDesign'},
  {name: 'explore', size: 32, text: 'Directions', type: 'maturialIcons'},
];

const Rating = ({rating, hanleRating}) => {
  return (
    <Block direction="row" mt={5}>
      {Array(5)
        .fill(0)
        .map((_, i) => {
          if (rating > i) {
            return (
              <Button key={i} onPress={() => hanleRating(i)}>
                <Icon name="star" color="#FA8D00" type="antDesign" mr={5} />
              </Button>
            );
          }
          return (
            <Button key={i} onPress={() => hanleRating(i)}>
              <Icon name="staro" type="antDesign" mr={5} />
            </Button>
          );
        })}
    </Block>
  );
};

const CardInfo = ({source, info = {}, book, noFooter}) => {
  const [rating, setRating] = useState(0);
  const hanleRating = (star) => {
    setRating(star + 1);
  };
  return (
    <Block mh={20} p={20} bgColor="#fff" borderRadius={20} shadow>
      <Block flexDirection="row">
        <Block>
          <Image source={source} />
        </Block>
        <Block block ml={15}>
          {info.tag && (
            <Text color="#B066A4" bold>
              {info.tag}
            </Text>
          )}
          <Text color="#222" bold>
            {info.name}
          </Text>
          <Text color="#222">{info.time}</Text>
          <Text color="gray">{info.address}</Text>
          <Text color="gray">{info.detail}</Text>
          {info.rating && <Rating rating={rating} hanleRating={hanleRating} />}
          {book && <Block></Block>}
        </Block>
        {info.isLike && (
          <Button>
            <Icon type="antDesign" name="heart" color="#E8008D" size={22} />
          </Button>
        )}
        {info.more && (
          <Button alignSelf="flex-end">
            <Icon
              type="fontAwesome"
              name="angle-right"
              color="gray"
              size={22}
            />
          </Button>
        )}
      </Block>

      {!noFooter && (
        <Block mt={20}>
          <Block bgColor="lightgray" h={1} />
          <Block flexDirection="row" justifyContent="space-between" mt={20}>
            {icons.map((icon) => (
              <Button key={icon.name} centered middle>
                <Icon type={icon.type} name={icon.name} size={icon.size} />
                <Text mt={5}>{icon.text}</Text>
              </Button>
            ))}
          </Block>
        </Block>
      )}
    </Block>
  );
};
export default CardInfo;
