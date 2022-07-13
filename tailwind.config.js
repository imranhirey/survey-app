module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        sourceSans: "Source Sans Pro",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
