import React, {useState} from 'react';
import {Dimensions, ScrollView} from 'react-native';

import {Block, Body, Text, Button} from '../../lib';
import HeaderBackground from '../../components/HeaderBackground';
import Icon from '../../components/Icon';
import CardInfo from '../../components/CardInfo';
import doctorImage from '../../assets/doctor.jpg';
import doctorImage1 from '../../assets/doctor-2.jpeg';
const W = Dimensions.get('window').width;

const FontIcons = [
  {name: 'laughing', color: '#E23f9c', title: 'Greet'},
  {name: 'slightly-smile', color: '#C55696', title: 'Good'},
  {name: 'neutral', color: '#A5008C', title: 'Okey'},
  {name: 'frowning', color: '#827791', title: 'Bad'},
  {name: 'expressionless', color: '#000', title: 'Awful'},
];

const HeaderTop = ({title, moreText}) => {
  return (
    <Block
      ph={20}
      mt={30}
      mb={15}
      direction="row"
      justifyContent="space-between"
      middle>
      <Text size={20} bold>
        {title}
      </Text>
      <Button>
        <Text color="#7B6C95" bold>
          {moreText}
        </Text>
      </Button>
    </Block>
  );
};

const HomeScreen = () => {
  const [faceActive, setFaceActive] = useState(null);

  const handleActiveFace = (index) => {
    setFaceActive(index);
  };
  return (
    <Body bgColor="#f3f3f3">
      <Block absolute h={250} w={W}>
        <HeaderBackground a />
      </Block>
      <Block block>
        <Block mt={52} ph={30} pv={20}>
          <Text h3 color="#fff">
            Hi Carly
          </Text>
          <Text color="#fff" size={18}>
            How are you feeling today?
          </Text>
        </Block>

        <Block
          direction="row"
          middle
          justifyContent="space-between"
          bgColor="#fff"
          borderRadius={20}
          p={20}
          mh={20}
          mt={W / 14}
          shadow
          h={100}>
          {FontIcons.map((icon, idx) => (
            <Button
              direction="column"
              centered
              middle
              key={icon.name}
              onPress={() => handleActiveFace(idx)}>
              <Icon
                type="iconicons"
                name={icon.name}
                color={idx === faceActive ? '#fff' : icon.color}
                textColor={icon.color}
                bgColor={idx === faceActive ? icon.color : ''}
                size={idx === faceActive ? 56 : 36}
                title={icon.title}
              />
              <Text color={icon.color}>{icon.title}</Text>
            </Button>
          ))}
        </Block>
        <ScrollView>
          <HeaderTop title="Your Next Appointment" moreText="See All" />
          <CardInfo
            source={doctorImage}
            info={{
              name: 'Dr T Pay Dhar',
              time: 'Sunday, May 15th at 8:00 PM',
              address: '570 Kemmer Shores',
              detail: 'San Francisco, CA 90293',
              more: true,
            }}
          />
          <HeaderTop title="Specialist in your area" moreText="See All" />
          <CardInfo
            source={doctorImage1}
            noFooter
            info={{
              name: 'Dr Ayon Das',
              time: 'Popular Pharma Limited',
              address: 'Dermatologists',
              detail: 'San Francisco, CA | 5 min',
              isLike: true,
              rating: true,
              tag: 'Wellness',
            }}
          />
          <Block mt={20} />
          <CardInfo
            source={doctorImage1}
            noFooter
            info={{
              name: 'Dr Ayon Das',
              time: 'Popular Pharma Limited',
              address: 'Dermatologists',
              detail: 'San Francisco, CA | 5 min',
              isLike: true,
              rating: true,
              tag: 'Wellness',
            }}
          />
          <Block mt={20} />
        </ScrollView>
      </Block>
    </Body>
  );
};

export default HomeScreen;
