import React from 'react';
import {Block, Text, Body, Button} from '../../lib/index';

const PacticeScreen = () => {
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
      <Button gradient m={20} h={65} borderRadius={20} centered middle>
        <Text bold color="#fff">
          BOOK APPOINTMENT
        </Text>
      </Button>
    </Body>
  );
};

export default PacticeScreen;
