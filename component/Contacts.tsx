"use client";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import React, { useState } from "react";
import ContactForm from "./ContactForm";
import { CalendarDate, DateValue, parseDate, getLocalTimeZone } from "@internationalized/date";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Spinner,
} from "@nextui-org/react";
import { useAsyncList } from "@react-stately/data";

export type ContactType = {
  id?: number;
  name: string;
  tel: string;
  email: string;
  dateOfBirth: DateValue;
  description: string;
};
type Props = {
  contacts: ContactType[];
};

export type ModalMode = "create" | "update";

const Contacts = ({ contacts }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalMode, setModalMode] = useState<ModalMode>("create");

  const [contactsList, setContactsList] = useState<ContactType[]>(contacts);

  const [contactToUpdate, setContactToUpdate] = useState<ContactType | undefined>(undefined);

  const handleOpen = (mode: ModalMode) => {
    setModalMode(mode);
    onOpen();
  };

  const addContact = (contact: ContactType) => {
    console.log("adding:", contact);
    contact.id = Math.round(Math.random() * 1000000);
    setContactsList([...contactsList, contact]);
    // contacts.push(contact);
    onClose();
  };
  const updateContact = (contact: ContactType) => {
    console.log("updating:", contact);

    setContactsList(
      contactsList.map((c) => {
        if (c.id === contact.id) {
          return contact;
        }
        return c;
      })
    );
    onClose();
  };

  const deleteContact = (contact: ContactType) => {
    setContactsList(contactsList.filter((c) => c.id !== contact.id));
  };

  return (
    <div className="w-full">
      <h1 className="text-center text-3xl my-4">My Contacts</h1>
      <div className="flex grow justify-end my-4">
        <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  {modalMode === "create" ? "Add Contact" : "Update Contact"}
                </ModalHeader>
                <ModalBody>
                  <ContactForm
                    mode={modalMode}
                    addContact={addContact}
                    contactToUpdate={contactToUpdate}
                    updateContact={updateContact}
                    close={onClose}
                  />
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
        <Button variant="flat" color="primary" onClick={() => handleOpen("create")} className="">
          Add
        </Button>
      </div>
      <div
        className="grid  w-full border-spacing-2 border-gray-200 border bg-gray-300 font-bold px-4 py-2"
        style={{ gridTemplateColumns: "2fr 2fr 3fr 2fr 2fr 1fr 1fr" }}
      >
        <span>Name</span>
        <span>Tel</span>
        <span>Email</span>
        <span>Date of Birth</span>
        <span>Description</span>
        <span className="justify-self-center">Edit</span>
        <span className="justify-self-center">Delete</span>
      </div>
      {contactsList.map((contact, index) => (
        <div
          key={index}
          className="grid grid-cols-7 w-full border-spacing-2 border-gray-200 border px-4 py-2 hover:bg-slate-100"
          style={{ gridTemplateColumns: "2fr 2fr 3fr 2fr 2fr 1fr 1fr" }}
        >
          <span>{contact.name}</span>
          <span>{contact.tel}</span>
          <span>{contact.email}</span>
          <span>{contact.dateOfBirth ? contact.dateOfBirth.toString() : "--"}</span>
          <span>{contact.description}</span>
          <Button
            isIconOnly
            variant="flat"
            color="warning"
            onClick={() => {
              setContactToUpdate(contact);
              handleOpen("update");
            }}
            className="justify-self-center"
          >
            <i className="fa-solid fa-pen" />
          </Button>
          <Button
            isIconOnly
            variant="flat"
            color="danger"
            className="justify-self-center"
            onClick={() => deleteContact(contact)}
          >
            <i className="fa-regular fa-trash-can" />
            {/* Delete */}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
