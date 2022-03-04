import { Button } from '@chakra-ui/react'
import propTypes from 'prop-types';



const CustomButton = ({title, colorScheme, variant, isLoading, loadingText, size, handleClick, ...props}) => {
    return (
        <Button 
            colorScheme={colorScheme}
            variant={variant}
            isLoading={isLoading}
            loadingText={loadingText}
            size={size}
            onClick={handleClick}
            {...props}
        >
        {title}
        </Button>
    )
};

export default CustomButton;


CustomButton.propTypes = {
    title: propTypes.string,
    colorScheme: propTypes.string,
    variant: propTypes.oneOf(['solid', 'ghost', 'outline', 'link']),
    isLoading: propTypes.bool,
    loadingText: propTypes.string,
    size: propTypes.string,
    handleClick: propTypes.func
};

CustomButton.defaultProps = {
    title: 'Save',
    colorScheme: 'blue',
    variant: 'solid',
    isLoading: false,
    loadingText: "Submitting",
    size: "md",
    handleClick: null
}