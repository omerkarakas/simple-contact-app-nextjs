import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import plugin from "tailwindcss/plugin";

// const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    plugin(function ({ addComponents, e, config }) {
      addComponents({
        ".form-input": {
          "@apply w-full focus:border-black h-[2.5rem] outline-none border-[1px] border-black/[.23] rounded-[8px] px-[7px] py-[4px] border-medium border-default-200 rounded-medium":
            {},
        },
        ".form-textarea": {
          "@apply w-full focus:border-black outline-none border-[1px] border-black/[.23] rounded-[8px] px-[7px] py-[4px] border-medium border-default-200 rounded-medium":
            {},
        },
        ".form-input-checkbox": {
          "@apply p-[2px] w-[1rem] h-[1rem] checked:accent-success": {},
        },
        ".form-select": {
          "@apply w-full focus:border-black h-[2.5rem] outline-none border-[1px] border-black/[.23] rounded-[8px] px-[7px] py-[4px] border-medium border-default-200 rounded-medium":
            {},
        },
        ".error-message": {
          "@apply text-dangerous font-semibold text-sm": {},
        },
      });
    }),
  ],
};
export default config;
