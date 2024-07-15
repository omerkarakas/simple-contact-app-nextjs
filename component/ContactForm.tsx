"use client";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { ContactType, ModalMode } from "./Contacts";
import { DateInput } from "@nextui-org/react";
import { CalendarDate } from "@internationalized/date";
import { DateValue, parseDate, getLocalTimeZone } from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";

type Props = {
  mode: ModalMode;
  addContact?: (contact: ContactType) => void;
  contactToUpdate?: ContactType;
  updateContact?: (contact: ContactType) => void;
  close: () => void;
};

const ContactForm = ({ mode, addContact, contactToUpdate, updateContact, close }: Props) => {
  const [contact, setContact] = useState<ContactType>(
    mode === "create"
      ? {
          name: "",
          tel: "",
          email: "",
          dateOfBirth: parseDate("2000-01-01"),
          description: "",
        }
      : contactToUpdate || ({} as ContactType)
  );

  const disableSubmit = () => {
    return !contact.name || !contact.tel || !contact.email;
  };

  return (
    <div className="w-full">
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            className="form-input"
            type="text"
            name="name"
            id="name"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="tel">Tel</label>
          <input
            className="form-input"
            type="tel"
            name="tel"
            id="tel"
            value={contact.tel}
            onChange={(e) => setContact({ ...contact, tel: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            id="email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <DateInput
            variant="bordered"
            className=""
            id="dateOfBirth"
            aria-label="Date of Birth"
            // value={contact.dateOfBirth as DateValue}
            value={parseDate(contact.dateOfBirth.toString())}
            onChange={(e: any) => {
              console.log("e:", e);
              // console.log("val:", e.target.value);
              let date = parseDate(
                e.year + "-" + e.month.toString().padStart(2, "0") + "-" + e.day.toString().padStart(2, "0")
              );
              console.log("date:", date);
              setContact({
                ...contact,
                dateOfBirth: parseDate(
                  e.year + "-" + e.month.toString().padStart(2, "0") + "-" + e.day.toString().padStart(2, "0")
                ),
              });
            }}
            // onBlur={(e: any) => setContact({ ...contact, dateOfBirth: e.target.value })}
          />

          {/* // <input
          //   className="form-input"
          //   type="date"
          //   name="dateOfBirth"
          //   id="dateOfBirth"
          //   value={contact.dateOfBirth.toLocaleDateString("en")}
          //   onChange={(e) => setContact({ ...contact, dateOfBirth: new Date(e.target.value) })}
          // /> */}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-textarea"
            rows={3}
            name="description"
            id="description"
            value={contact.description}
            onChange={(e) => setContact({ ...contact, description: e.target.value })}
          ></textarea>
        </div>
        <Button
          type="button"
          color="primary"
          disabled={disableSubmit()}
          onPress={() => (mode === "create" ? addContact?.(contact) : updateContact?.(contact))}
        >
          {mode === "create" ? "Add Contact" : "Update Contact"}
        </Button>
        <Button type="button" color="default" onPress={() => close()}>
          Close
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
