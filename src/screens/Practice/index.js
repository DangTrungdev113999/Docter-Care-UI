import React, {useState} from 'react';
import {Block, Text, Body, Button} from '../../lib/index';
import {connectActionSheet} from '@expo/react-native-action-sheet';
import {Modal, Alert} from 'react-native';

const PacticeScreen = ({showActionSheetWithOptions}) => {
  const [visible, setVisible] = useState(false);
  const onPress = () => {
    setVisible(true);
    // showActionSheetWithOptions(
    //   {
    //     options: ['Generate number', 'Reset', 'Cancel'],
    //     destructiveButtonIndex: 2,
    //     cancelButtonIndex: 2,
    //     useModal: true,
    //     showSeparators: true,
    //   },
    //   (buttonIndex) => {
    //     if (buttonIndex === 0) {
    //       // cancel action
    //       console.log('0 🔮');
    //     } else if (buttonIndex === 1) {
    //       console.log('1 🔮');
    //       // setResult(Math.floor(Math.random() * 100) + 1);
    //     } else if (buttonIndex === 2) {
    //       console.log('2 🔮');
    //     }
    //   },
    // );
  };

  const closeModal = () => {
    setVisible(false);
  };
  return (
    <Body scrollView>
      <Modal
        animationType="slide"
        transparent
        visible={visible}
        presentationStyle="overFullScreen"
        onRequestClose={closeModal}>
        <Block>
          <Text>This is Modal</Text>
        </Block>
      </Modal>

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
