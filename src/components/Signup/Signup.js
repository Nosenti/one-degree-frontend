import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Switch,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  import React from "react";
  import { Link } from "react-router-dom";
import { CInput } from "../Input";
import PropTypes from "prop-types";

const Signup = ({onChange, onSubmit, isSubmitting}) => {

    const titleColor = useColorModeValue("teal.300", "teal.200");
    const textColor = useColorModeValue("gray.700", "white");
    const bgColor = useColorModeValue("white", "gray.700");
    return (
        <Flex
        direction="column"
        alignSelf="center"
        justifySelf="center"
        overflow="hidden"
        mt="15px"
        >
        <Flex alignItems="center" justifyContent="center" mb="60px" mt="25px">
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
                label="Name"
                type="text"
                placeholder="Your names"
                onChange={onChange}
                name="name"
                labelColor="black"
                isRequired
                />
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
                <FormControl display="flex" alignItems="center" mb="24px" mt="24px">
                <Switch id="rememSignup" colorScheme="teal" me="10px" />
                <FormLabel htmlFor="remember-login" mb="0" fontWeight="normal">
                    Remember me
                </FormLabel>
                </FormControl>
                <Button
                type="submit"
                bg="teal.300"
                fontSize="20px"
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
                onClick={onSubmit}
                >
                { isSubmitting ? "PLease wait..." : "SIGN UP"}
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
                Already have an account?
                <Link
                    to="/"   
                >
                    <Text
                    color={titleColor}
                    as="span"
                    ms="5px"
                    fontWeight="bold"
                    >
                        Sign In
                    </Text>
                </Link>
                </Text>
            </Flex>
            </Flex>
        </Flex>
        </Flex>
    );
};

export default Signup

Signup.propTypes = {
    onchange: PropTypes.func,
    onSubmit: PropTypes.func,
    isSubmitting: PropTypes.bool
}
