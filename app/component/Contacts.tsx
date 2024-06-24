"use client";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import React from "react";
import ContactForm from "./ContactForm";

export type ContactType = {
  name: string;
  tel: string;
  email: string;
  dateOfBirth: Date;
  description: string;
};
type Props = {
  contacts: ContactType[];
};

const Contacts = ({ contacts }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };

  return (
    <div className="w-full">
      <h1>My Contacts</h1>
      <div className="flex grow justify-end">
        <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                <ModalBody>
                  <ContactForm />
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
        <Button variant="flat" color="warning" onPress={() => handleOpen()} className="capitalize">
          Add
        </Button>
      </div>
      <div className="grid grid-cols-7 w-full border-spacing-2 border-gray-200 border bg-gray-300 font-bold">
        <span>Name</span>
        <span>Tel</span>
        <span>Email</span>
        <span>Date of Birth</span>
        <span>Description</span>
        <span>Edit</span>
        <span>Delete</span>
      </div>
      {contacts.map((contact, index) => (
        <div key={index} className="grid grid-cols-7 w-full border-spacing-2 border-gray-200 border">
          <span>{contact.name}</span>
          <span>{contact.tel}</span>
          <span>{contact.email}</span>
          <span>{contact.dateOfBirth.toString()}</span>
          <span>{contact.description}</span>
          <Button variant="flat" color="warning" className="capitalize">
            Edit
          </Button>
          <Button variant="flat" color="danger" className="capitalize">
            <i className="fa fa-trash" />
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
