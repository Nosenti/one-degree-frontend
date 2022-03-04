import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Icon,
    Input,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  import React from "react";
  import { Link } from "react-router-dom";
  import { FaGoogle } from "react-icons/fa";

const Login = () => {

    const titleColor = useColorModeValue("teal.300", "teal.200");
    const textColor = useColorModeValue("gray.700", "white");
    const bgColor = useColorModeValue("white", "gray.700");
    const bgIcons = useColorModeValue("teal.200", "rgba(255, 255, 255, 0.5)");
    return (
        <Flex
        direction="column"
        alignSelf="center"
        justifySelf="center"
        overflow="hidden"
        >
        <Flex alignItems="center" justifyContent="center" mb="60px" mt="30px">
            <Flex
            direction="column"
            w="445px"
            background="transparent"
            borderRadius="15px"
            p="40px"
            mx={{ base: "100px" }}
            bg={bgColor}
            boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
            >
            <Text
                fontSize="xl"
                color={textColor}
                fontWeight="bold"
                textAlign="center"
                mb="22px"
            >
                Sign In With
            </Text>
            <HStack spacing="15px" justify="center" mb="22px">
                <Flex
                justify="center"
                align="center"
                w="75px"
                h="75px"
                borderRadius="15px"
                border="1px solid lightgray"
                cursor="pointer"
                transition="all .25s ease"
                _hover={{ filter: "brightness(120%)", bg: bgIcons }}
                >
                <Link to="#">
                    <Icon
                    as={FaGoogle}
                    w="30px"
                    h="30px"
                    _hover={{ filter: "brightness(120%)" }}
                    />
                </Link>
                </Flex>
            </HStack>
            <Text
                fontSize="lg"
                color="gray.400"
                fontWeight="bold"
                textAlign="center"
                mb="22px"
            >
                or
            </Text>
            <FormControl>
                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Email
                </FormLabel>
                <Input
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="email"
                placeholder="Your email address"
                mb="24px"
                size="lg"
                />
                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Password
                </FormLabel>
                <Input
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="password"
                placeholder="Your password"
                mb="24px"
                size="lg"
                />
                <Button
                type="submit"
                bg="teal.300"
                fontSize="10px"
                color="white"
                fontWeight="bold"
                w="100%"
                h="45"
                mb="24px"
                _hover={{
                    bg: "teal.200",
                }}
                _active={{
                    bg: "teal.400",
                }}
                >
                SIGN IN
                </Button>
            </FormControl>
            <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                maxW="100%"
                mt="0px"
            >
                <Text color={textColor} fontWeight="medium">
                Don't have an account?
                <Link
                    color={titleColor}
                    as="span"
                    ms="5px"
                    to="/register"
                    fontWeight="bold"
                >
                    Sign Up
                </Link>
                </Text>
            </Flex>
            </Flex>
        </Flex>
        </Flex>
    );
};

export default Login
  