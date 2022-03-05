/* eslint-disable react/jsx-no-duplicate-props */
import {
    Button,
    Flex,
    FormControl,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  import React from "react";
  import { Link } from "react-router-dom";
import { CInput } from "../Input";

const Login = ({onChange, onSubmit, isSubmitting}) => {

    const titleColor = useColorModeValue("teal.300", "teal.200");
    const textColor = useColorModeValue("gray.700", "white");
    const bgColor = useColorModeValue("white", "gray.700");
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
            <FormControl>
                <CInput 
                label="Email"
                type="email"
                placeholder="Your email address"
                onChange={onChange}
                name="email"
                labelColor="black"
                isRequired
                />
                <CInput 
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Your password"
                    onChange={onChange}
                    isPassword
                    isRequired
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
                mt="24px"
                _hover={{
                    bg: "teal.200",
                }}
                _active={{
                    bg: "teal.400",
                }}
                onClick={onSubmit}
                >
                {isSubmitting ? "Please wait..." : "SIGN IN"}
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
                    to="/register"
                >
                    <Text 
                    color={titleColor}
                    fontWeight="bold"
                    fontWeight="bold"
                    as="span"
                    ms="5px"
                    >
                        Sign Up
                    </Text>
                </Link>
                </Text>
            </Flex>
            </Flex>
        </Flex>
        </Flex>
    );
};

export default Login
  