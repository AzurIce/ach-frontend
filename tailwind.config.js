module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'background': '#fafafa',
    }),
    extend: {
      backgroundImage: {
        'azurcraft': "url('AzurCraft.svg')"
      },
      minWidth: {
       '0': '0',
       '450': '450px',
       '1/4': '25%',
       '1/2': '50%',
       '3/4': '75%',
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
