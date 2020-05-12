import React, {useState} from 'react';
import {FlatList} from 'react-native';

import {Block, Text, Button, Body} from '../../lib';

const buttons = [
  {time: '8:00 AM', status: 'active'},
  {time: '8:10 AM', status: 'disible'},
  {time: '9:00 AM', status: 'active'},
  {time: '4:00 AM', status: 'active'},
  {time: '3:00 AM', status: 'active'},
  {time: '5:00 AM', status: 'active'},
  {time: '8:30 AM', status: 'active'},
  {time: '8:20 AM', status: 'active'},
  {time: '1:00 AM', status: 'active'},
  {time: '7:30 AM', status: 'disible'},
  {time: '1:40 AM', status: 'active'},
  {time: '5:10 AM', status: 'disible'},
  {time: '3:20 AM', status: 'active'},
  {time: '2:00 AM', status: 'disible'},
];

const Schedule = () => {
  const [active, setActive] = useState(3);
  return (
    <Body>
      <Block direction="row" justifyContent="space-around" mv={20}>
        <Block middle>
          <Text bold size={16}>
            Mon
          </Text>
          <Text h6>Oct 1</Text>
        </Block>
        <Block middle size={16}>
          <Text bold>Mon</Text>
          <Text h6>Oct 1</Text>
        </Block>
        <Block middle size={16}>
          <Text bold>Mon</Text>
          <Text h6>Oct 1</Text>
        </Block>
      </Block>

      <Block centered middle>
        <FlatList
          data={buttons}
          renderItem={({item, index, separators}) => (
            <Button
              m={10}
              ph={20}
              pv={10}
              bgColor={index === active ? '#554383' : ''}
              borderRadius={999}
              borderColor="#554383"
              borderWidth={2}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}
              onPress={() => setActive(index)}>
              <Text color={index === active ? '#fff' : '#222'}>
                {item.time}
              </Text>
            </Button>
          )}
          keyExtractor={(item) => item.time}
          horizontal={false}
          numColumns={3}
        />
      </Block>
    </Body>
  );
};

export default Schedule;
