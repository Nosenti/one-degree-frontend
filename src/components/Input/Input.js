import React, { useState} from "react";
import propTypes from "prop-types";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const CustomInput = ({
  type,
  label,
  labelColor,
  placeholder,
  isPassword,
  isRequired,
  name,
  error,
  onChange,
  onFocus,
  onKeyUp,
  value,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box className="w-full">
      <FormControl
        id={name?.toLowerCase()}
        isRequired={isRequired}
        isInvalid={error}
        className="mb-4"
      >
        {label && <FormLabel textColor={labelColor}>{label}</FormLabel>}
        {!isPassword ? (
          <Input
            type={type}
            placeholder={placeholder}
            onChange={(e) => onChange(e, name)}
            onKeyUp={onKeyUp}
            onFocus={onFocus}
            textColor="black"
            value={value}
            bg="white"
            mb="24px"
          />
        ) : (
          <InputGroup>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder={placeholder}
              onChange={(e) => onChange(e, "password")}
              onKeyUp={onKeyUp}
              onFocus={onFocus}
              textColor="black"
              value={value}
            />
            <InputRightElement h={"full"} alignItems="center">
              <Button
                variant={"ghost"}
                padding={0}
                onClick={() => setShowPassword((showPassword) => !showPassword)}
                bgColor="gray.200"
                _hover={{ bgColor: "gray.600" }}
              >
                {showPassword ? (
                  <AiFillEye size={20} />
                ) : (
                  <AiFillEyeInvisible size={20} />
                )}
              </Button>
            </InputRightElement>
          </InputGroup>
        )}
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
      </FormControl>
    </Box>
  );
};

CustomInput.propTypes = {
  type: propTypes.string,
  label: propTypes.string,
  labelColor: propTypes.string,
  placeholder: propTypes.string,
  isPassword: propTypes.bool,
  isRequired: propTypes.bool,
  name: propTypes.string.isRequired,
  value: propTypes.string,
  error: propTypes.string,
  onChange: propTypes.func,
  onFocus: propTypes.func,
  onKeyUp: propTypes.func,
};

CustomInput.defaultProps = {
  type: null,
  label: null,
  labelColor: "black",
  placeholder: null,
  isPassword: false,
  isRequired: false,
  name: "name",
  value:null,
  error: null,
  onChange: null,
  onFocus: null,
  onKeyUp: null,
};

export default CustomInput;
