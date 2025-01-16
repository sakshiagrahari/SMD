// /** @type {import('tailwindcss').Config} */
// const plugin = require('tailwindcss/plugin');

// export default {
  
//   theme: {
//     extend: {
//       backgroundImage: {
//         'custom-gradient': `
//           linear-gradient(0deg, var(--background-surface, #FBFCFE), var(--background-surface, #FBFCFE)),
//           radial-gradient(78.33% 53.72% at 11.15% 0%, rgba(0, 140, 194, 0.15) 0%, rgba(0, 140, 194, 0) 100%)
//         `,
//       },
//     },
//   },

//     plugin(function ({ addUtilities }) {
//       addUtilities({
//         '.custom-gradient': {
//           backgroundImage: `
//             linear-gradient(0deg, var(--background-surface, #FBFCFE), var(--background-surface, #FBFCFE)),
//             radial-gradient(78.33% 53.72% at 11.15% 0%, rgba(0, 140, 194, 0.15) 0%, rgba(0, 140, 194, 0) 100%)
//           `,
//         },
//       });
//     }),
//   ],
// };
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': `
          linear-gradient(0deg, var(--background-surface, #FBFCFE), var(--background-surface, #FBFCFE)),
          radial-gradient(78.33% 53.72% at 11.15% 0%, rgba(0, 140, 194, 0.15) 0%, rgba(0, 140, 194, 0) 100%)
        `,
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.custom-gradient': {
          backgroundImage: `
            linear-gradient(0deg, var(--background-surface, #FBFCFE), var(--background-surface, #FBFCFE)),
            radial-gradient(78.33% 53.72% at 11.15% 0%, rgba(0, 140, 194, 0.15) 0%, rgba(0, 140, 194, 0) 100%)
          `,
        },
      });
    }),
  ],
};
