// filepath: /c:/2 - Proyectos/Kaffee-menu/kafee-menu/tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'text': 'var(--text)',
        'text-secondary': 'var(--text-secondary)',
        'background': 'var(--background)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'secondary-accent': 'var(--secondary-accent)',
        'secondary-hover': 'var(--secondary-hover)',
        'secondary-hover-2': 'var(--secondary-hover-2)',
        'accent': 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        'accent-degrade': 'var(--accent-degraded)',
       },
       backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #7c222241 0%, #bf4040 100%); ',
      },       
    },
  },
  plugins: [],
}