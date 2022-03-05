import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { CInput } from "../Input";
import {Button } from "../Button";


const messages = [
    { sender: "simon", receiver: "Innocent"},
    { sender: "simon", receiver: "Innocent"},
    { sender: "simon", receiver: "Innocent"},
    { sender: "simon", receiver: "Innocent"},
    { sender: "simon", receiver: "Innocent"},
    { sender: "simon", receiver: "Innocent"},
    { sender: "simon", receiver: "Innocent"},
]

const ChatUI = () => {
    const [newMessage, setNewMessage] = useState({})
    const [allMessages, setAllMessages] = useState(messages)
    

    const onChange = ({target}, name) => {
        const {value} = target
        setNewMessage({
            receiver: "simon",
            sender: value
        })
    }
    const onMessage = (e) => {
        e.preventDefault()
        console.log("Messa", newMessage)
        setAllMessages({
            ...allMessages,
            newMessage
        })
    }
   return (
        <Container colorScheme={'blue'} height="auto">
        <Box display="flex"  flexDirection="column">
            {allMessages.map((message, key) => (
                <Flex flexDirection="column">
                    <Text mr="10px" bgColor="ButtonFace" mb={5}>{message.sender}</Text>
                    <Text bgColor="gray.400" mb={5}>{message.receiver}</Text>
                </Flex>
            ))}
        </Box>
        <Flex>
            <CInput 
            type="text"
            name="message"
            placeholder="Type your message here"
            onChange={onChange}
            />
            <Button 
            title="Send"
            variant="solid"
            handleClick={onMessage}
            />
        </Flex>
    </Container>)

  };

  export {ChatUI}