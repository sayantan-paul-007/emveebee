// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     colors: {
//       'primary': "#0f0f0f",
//       "primary-gray": "#404040",
//       'gray': "#7f7f7f",
//       "light-gray": "#bfbfbf",
//       'neutral': "#ffffff",
//     },
//     fontFamily: {
//       poppins: ["Poppins", "sans-serif"],
//     },
//     extend: {
//       backgroundImage: {
//         'hero-bg': "url('./assets/hero-bg.svg')",
//         'black-section': "url('./assets/bg-2.svg')",
//         'black-section-2': "url('./assets/black-bg-2.png')",
//       }
//     },
//   },
//   plugins: [require('flowbite/plugin')],
// };
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'primary': "#0f0f0f",
      "primary-gray": "#404040",
      'gray': "#7f7f7f",
      "light-gray": "#bfbfbf",
      'neutral': "#ffffff",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    }
  }
}