const shadcnConfig = require('./config/shadcn.tailwind')

module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/container-queries'),
  ],

  content: [
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.erb'
  ],

  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  ...shadcnConfig
}
