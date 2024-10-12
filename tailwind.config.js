const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],

  safelist: [
    "hover",
    "p-20",
    "p-32",
    "bg-[#624EDE]",
    "bg-[#38DFCE]",
    "space-x-14",
  ],

  content: [flowbite.content()],
  plugins: [flowbite.plugin()],
};
