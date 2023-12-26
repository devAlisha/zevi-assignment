// ProductDetailsModal.jsx
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Box,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { Check } from "lucide-react";

const ProductDetailsModal = ({ isOpen, onClose, product }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Box fontSize={"20px"} fontWeight={"bold"}>
            Made by <strong>Alisha Singh</strong>
          </Box>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={Check} color="green.500" />
              Used SASS for styling.
            </ListItem>

            <ListItem>
              <ListIcon as={Check} color="green.500" />
              Implemented faker api for showing data.
            </ListItem>
            <ListItem>
              <ListIcon as={Check} color="green.500" />
              According to the price filter data updates.
            </ListItem>
            <ListItem>
              <ListIcon as={Check} color="green.500" />
              Click on the Wishlist colour changes to red.
            </ListItem>
            <ListItem>
              <ListIcon as={Check} color="green.500" />
              On hovering to the product view product button is visible.
            </ListItem>

            <ListItem>
              <ListIcon as={Check} color="green.500" />
              Used Atomic Commits.
            </ListItem>
          </List>
        </ModalBody>
        <ModalFooter>
          <Button
            as="a"
            href="https://drive.google.com/file/d/1xiWJsQnV9kJdjAHnrDC0ZkuVdQbOmjUv/view?usp=drive_link"
            target="_blank"
            variant={'outline'}
            mr={3}
          >
            View Resume
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProductDetailsModal;
