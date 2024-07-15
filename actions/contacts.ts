"use server";

import { get } from "@/helper/api_helper";

export const getContacts = async (): Promise<any> => {
  return await get({ url: "contacts" });
};
