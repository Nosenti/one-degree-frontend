import propTypes from 'prop-types';
import {
    Box,
    Text,
    Stack,
    useColorModeValue,
    Center,
  } from '@chakra-ui/react';
 
  
  export default function Card({title, content, minWidth, width}) {
    return (
      <Center style={{width}} mt={10}>
        <Box
          minW={minWidth}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Stack
            textAlign={'center'}
            p={6}
            color={useColorModeValue('gray.800', 'white')}
            align={'center'}>
            <Text
              fontSize={'sm'}
              fontWeight={500}
              bg={useColorModeValue('green.50', 'green.900')}
              p={2}
              px={3}
              color={'green.500'}
              rounded={'full'}>
             {title}
            </Text>
          </Stack>
            {content}
        </Box>
      </Center>
    );
  }

  Card.propTypes = {
      title: propTypes.string,
      content: propTypes.object,
      minWidth: propTypes.string,
      width: propTypes.string
  }

  Card.defaultProps = {
      title: "Profile",
      minWidth: '350px',
      width: "90%"
  }