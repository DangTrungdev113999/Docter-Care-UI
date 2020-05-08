/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import {Block, Body, Text, Button, Input} from '../../lib';
import HeaderBackground from '../../components/HeaderBackground';
import Icon from '../../components/Icon';
import CardInfo from '../../components/CardInfo';
import doctorImage from '../../assets/doctor.jpg';
import doctorImage1 from '../../assets/doctor-2.jpeg';
const W = Dimensions.get('window').width;

const SearchScreen = () => {
  return (
    <Body scrollView bgColor="#f3f3f3">
      <Block absolute h={250} w={W}>
        <HeaderBackground a />
      </Block>
      <Block block>
        <Button ph={20} mt={30}>
          <Icon type="fontAwesome" name="angle-left" color="#fff" size={30} />
        </Button>

        <Block direction="row" justifyContent="space-between" middle ph={20}>
          <Text color="#fff" h2>
            Search
          </Text>
          <Block direction="row" middle>
            <Button>
              <Icon type="entypo" name="map" size={30} color="#fff" mr={20} />
            </Button>
            <Button>
              <Icon type="octicons" name="settings" size={30} color="#fff" />
            </Button>
          </Block>
        </Block>

        <Block mh={20} mt={10}>
          <Block
            bgColor="#fff"
            borderRadius={5}
            ph={10}
            shadow
            direction="row"
            centered
            middle>
            <Icon type="feather" name="search" size={25} color="#222" mr={10} />
            <Input block value="VietNam" size={16} />
          </Block>
          <Block
            bgColor="#fff"
            mt={10}
            ph={10}
            borderRadius={5}
            shadow
            direction="row"
            centered
            middle>
            <Icon
              type="feather"
              name="map-pin"
              size={25}
              color="#222"
              mr={10}
            />
            <Input block value="Current location" size={16} />
            <Text color="lightgray">12 mi</Text>
          </Block>
        </Block>

        <Block mt={20}>
          <MapView
            style={{width: W, height: 300}}
            initialRegion={{
              latitude: 10.762622,
              longitude: 106.660172,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Marker
              coordinate={{
                latitude: 10.762622,
                longitude: 106.660172,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
          </MapView>
        </Block>

        <Block mt={20}>
          <CardInfo
            source={doctorImage}
            noFooter
            book
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
            book
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
        </Block>
      </Block>
    </Body>
  );
};

export default SearchScreen;
