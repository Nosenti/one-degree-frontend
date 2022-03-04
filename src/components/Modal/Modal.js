import React from "react";
import { 
    Modal, 
    ModalBody, 
    ModalCloseButton, 
    ModalContent, 
    ModalFooter, 
    ModalHeader, 
    ModalOverlay, 
} from "@chakra-ui/react";
import propTypes from "prop-types";

import { Button } from "../Button";

export default function CustomModal({title, content, actionTitle, handleAction, isSubmitting, isOpen, onClose}) {

    const initialRef = React.useRef()
    const finalRef = React.useRef()
  
    return (
      <>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton onClick={onClose}/>
            <ModalBody pb={6}>
              {content}
            </ModalBody>
            <ModalFooter display="flex" justifyContent="center">
                <Button  
                  title={actionTitle} 
                  handleClick={handleAction} 
                  isLoading={isSubmitting} 
                  loadingText={"saving..."}
                  size={"lg"}
                />
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }


CustomModal.propTypes = {
    actionTitle: propTypes.string,
    content: propTypes.object,
    handleAction: propTypes.func,
    isOpen: propTypes.bool,
    onClose: propTypes.func
}

CustomModal.defaultProps = {
    actionTitle: "Save"
}