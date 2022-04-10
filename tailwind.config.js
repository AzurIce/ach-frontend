module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'azurcraft': "url('src/assets/AzurCraft.svg')"
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
  plugins: [],
}
