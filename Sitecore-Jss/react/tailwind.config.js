/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: '#061d49',
      },
      backgroundImage: {
        'overlay': "url('images/bg-overlay.png')"
        // 'logo': "url('./src/assets/logo.svg')",
      },
      zIndex: {
        "-1": "-1",
      },
      transformOrigin: {
        "0": "0%",
      },
    },
  },
  plugins: [

  ],
}
