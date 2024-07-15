"use client";

import React, { useEffect, useState } from "react";

type Props = {};

const Page = (props: Props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const res = await fetch("/api/contacts");
      const data = await res.json();

      console.log("data:", data);
      setData(data);
      // return data;
    };

    fetchContacts();
  }, []);

  return (
    <div>
      Client Test page
      {data?.map((d: any, index) => {
        return <li>{d?.name}</li>;
      })}
    </div>
  );
};

export default Page;
