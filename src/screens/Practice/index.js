import React from 'react';
import {Block, Text, Body, Button} from '../../lib/index';
import {connectActionSheet} from '@expo/react-native-action-sheet';

const PacticeScreen = ({showActionSheetWithOptions}) => {
  const onPress = () => {
    showActionSheetWithOptions(
      {
        options: ['Generate number', 'Reset', 'Cancel'],
        destructiveButtonIndex: 2,
        cancelButtonIndex: 2,
        useModal: true,
        showSeparators: true,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          // cancel action
          console.log('0 🔮');
        } else if (buttonIndex === 1) {
          console.log('1 🔮');
          // setResult(Math.floor(Math.random() * 100) + 1);
        } else if (buttonIndex === 2) {
          console.log('2 🔮');
        }
      },
    );
  };
  return (
    <Body scrollView>
      <Block p={20}>
        <Text>
          <Text bold>Address </Text>
          <Text color="#222">Proident cillum laborum esse ex amet irure</Text>
        </Text>
      </Block>

      <Block h={1} bgColor="lightgray" />

      <Block p={20}>
        <Text bold mb={10}>
          Area of Proident cillum{' '}
        </Text>
        <Text color="gray">
          Proident cillum laborum esse ex amet irure Proident cillum laborum
          esse ex amet irure Proident cillum laborum esse ex amet irure
        </Text>
      </Block>

      <Block h={1} bgColor="lightgray" />

      <Block p={20}>
        <Text bold mb={10}>
          Area of Proident cillum{' '}
        </Text>
        <Text color="gray">
          Proident cillum laborum esse ex amet irure Proident cillum laborum
          esse ex amet irure Proident cillum laborum esse ex amet irure
        </Text>
      </Block>

      <Block h={1} bgColor="lightgray" />

      <Block p={20}>
        <Text bold mb={10}>
          Area of Proident cillum{' '}
        </Text>
        <Text color="gray">
          Proident cillum laborum esse ex amet irure Proident cillum laborum
          esse ex amet irure Proident cillum laborum esse ex amet irure
        </Text>
      </Block>

      <Block h={1} bgColor="lightgray" />

      <Block p={20}>
        <Text bold mb={10}>
          Area of Proident cillum{' '}
        </Text>
        <Text color="gray">
          Proident cillum laborum esse ex amet irure Proident cillum laborum
          esse ex amet irure Proident cillum laborum esse ex amet irure
        </Text>
      </Block>

      <Block h={1} bgColor="lightgray" />

      <Block p={20}>
        <Text bold mb={10}>
          Area of Proident cillum{' '}
        </Text>
        <Block direction="row" justifyContent="space-between">
          <Text>Monday</Text>
          <Text>8 PM - 6PM</Text>
        </Block>
        <Block direction="row" justifyContent="space-between">
          <Text>Monday</Text>
          <Text>8 PM - 6PM</Text>
        </Block>
      </Block>
      <Button
        gradient
        m={20}
        h={65}
        borderRadius={20}
        centered
        middle
        onPress={onPress}>
        <Text bold color="#fff">
          BOOK APPOINTMENT
        </Text>
      </Button>
    </Body>
  );
};

export default connectActionSheet(PacticeScreen);
