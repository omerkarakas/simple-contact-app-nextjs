"use server";

type GetParams = {
  url: string;
  params?: Record<string, string>;
};

export const get = async ({ url, params }: GetParams) => {
  const API_URL = process.env.APP_APIENDPOINT;
  let requestUrl = API_URL + url;
  if (params) {
    requestUrl += "?" + new URLSearchParams(params);
  }

  try {
    const response = await fetch(requestUrl, { method: "GET" });
    console.log("response:", response);
    let data: any;
    try {
      data = await response.json();
      console.log("data:", data);
    } catch (err: any) {
      /*  console.log("Response: ", response); */
      throw new Error("Api_Helper - GET - Failed to parse response JSON: " + err.message);
    }

    if (!response.ok) {
      const err = data?.message || response.statusText;
      throw new Error(err);
    }

    return data;
  } catch (e: any) {
    console.log("Api_Helper - GET - Error:", e);
    /*  return e.json(); */
  }
};
