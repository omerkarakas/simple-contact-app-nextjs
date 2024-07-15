import { getContacts } from "@/actions/contacts";
import React from "react";

type Props = {};

const ContactPage = async (props: Props) => {
  const contacts = await getContacts();
  return (
    <div>
      Server Test page
      {contacts?.map((d: any, index: number) => {
        return <li key={index}>{d?.name}</li>;
      })}
    </div>
  );
};

export default ContactPage;
