module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        bg: "url('./images/bg.jpg')",
      },
      backgroundSize: {
        half: '50% 100%',
      },
      colors: {
        punch: '#D35530', // red orange
        ulcaGold: '#FAB829', // gold
        blanc: '#DBD4C3', // beige
        onyx: '#393837', // dark gray
        pesto: '#7d7e34', // green
        fiord: '#3a5269', // dark blue
        greenSheen: '#6ea4a0', // light blue
        veridianGreen: '#00979d', // bright teal
        heatWave: '#ff7b00', // orange
        gray: '#969187', // beige / dark tan
        eternity: '##2d2d2b', // almost black
        sonicSilver: '#747474', // mid gray
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      condensed: ['mouse_memoir', 'Arial Narrow'],
      slab: ['BioRhyme', 'serif'],
    },
    zIndex: {
      question: '1',
      cover: '1',
      nav: '2',
      avatarConnector: '4',
      avatar: '5',
      byline: '6',
      searchButton: '7',
      optionsMenu: '8',
      actionButtons: '9',
      tooltip: '14',
      tooltipButton: '15',
      modalWindow: '9997',
      modal: '9998',
      modalButton: '9999',
    },
  },
  plugins: [],
}
