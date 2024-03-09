import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          100: "#127cFF",
          90: "#2595FD",
          80: "#409CF3",
          70: "#74B1EA",
          60: "#9FCFFB",
          50: "#BADEFF",
          40: "#C9E5FF",
          30: "#D6EBFF",
          20: "#E7F3FF",
        },
        warning: "#FD4C36",
        neutral: {
          100: "#000B15",
          90: "#0B1E2F",
          80: "#082F54",
          70: "#53626F",
          60: "#6E7A86",
          50: "#9BA2A8",
          40: "#C4C5C5",
          30: "#D1D4D6",
          20: "#E7EAEE",
        },
      },
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
