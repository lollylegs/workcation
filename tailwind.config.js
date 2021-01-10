module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        teal: {
          '100': '#CCFBF1',
          '200': '#99F6E4',
          '500': '#14B8A6',
          '600': '#0D9488',
          '700': '#0F766E',
          '800': '#115E59',
          '900': '#134E4A'
        },
      },
      padding: {
        '5/6': '83.33333333%'
      }
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms'),
  ],
}
