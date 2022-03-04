import { Input } from "@chakra-ui/react"

const Search = ({onSearch, value, onFocus, onKeyUp}) => {
    return (
        <Input
        type="text"
        placeholder="Type search term"
        onChange={onSearch}
        onKeyUp={onKeyUp}
        onFocus={onFocus}
        textColor="black"
        value={value}
      />
    )
};


export default Search

Search.propTypes = {
    value: propTypes.string,
    onChange: propTypes.func,
    onFocus: propTypes.func,
    onKeyUp: propTypes.func,
  };
  
 Search.defaultProps = {
    value: null,
    onChange: null,
    onFocus: null,
    onKeyUp: null,
  };