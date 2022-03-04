import { Select } from "@chakra-ui/react";
import { AiOutlineArrowDown } from "react-icons/ai";
import propTypes from "prop-types";

const CustomSelect = ({ options, placeholder, size, value, handleSelect }) => {
  return (
    <Select
      icon={<AiOutlineArrowDown />}
      size={size}
      placeholder={placeholder}
      textColor="black"
      value={value}
      onChange={handleSelect}
    >
      {options.map((option, index) => (
        <option value={option?.value} key={index}>
          {option?.name}
        </option>
      ))}
    </Select>
  );
};

export default CustomSelect;

CustomSelect.propTypes = {
  options: propTypes.arrayOf(propTypes.object),
  placeholder: propTypes.string,
  size: propTypes.string,
  value: propTypes.string,
  handleSelect: propTypes.func
};

CustomSelect.defaultProps = {
  options: [],
  placeholder: "Select option",
  size: "md",
};
