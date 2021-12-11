module.exports = {
   content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            poppins: ["Poppins"],
            roboto: ["Roboto"],
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [require("tailwindcss-elevation")(["responsive"])],
}
