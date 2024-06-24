import { Button } from "@nextui-org/react";
import React from "react";

type Props = {};

const ContactForm = (props: Props) => {
  return (
    <div className="w-full">
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="tel">Tel</label>
          <input type="tel" name="tel" id="tel" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input type="date" name="dateOfBirth" id="dateOfBirth" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description"></textarea>
        </div>
        <Button type="submit" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
