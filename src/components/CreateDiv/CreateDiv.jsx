import React, { useState, useEffect } from "react";
import styles from "./CreateDiv.module.scss";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Box,
} from "@chakra-ui/react";

const CreateDiv = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  useEffect(() => {
    if (!isOpen) {
      setIsOpen(false);
    }
  }, [isOpen]);

  return (
    <div className={styles.CreateDiv}>
      <Button colorScheme="blue" onClick={onOpen}>Abrir modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal</ModalHeader>
          <ModalBody>
            {[...Array(5)].map((_, i) => (
              <Box key={i} bg="blue.200" p="4" mb="4" borderRadius="md">
                Este es el div número {i + 1}.
              </Box>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreateDiv;
