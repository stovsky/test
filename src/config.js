module.exports = {
  siteTitle: 'Tyler Stovsky | Software Developer | Student at UCLA',
  siteDescription:
    'Tyler Stovsky is a computer science student at UCLA.',
  siteKeywords:
    'Tyler Stovsky, Tyler, Stovsky, tyler-stovsky, software developer, software engineer, computer science, student',
  siteUrl: 'https://stovsky.com/',
  googleAnalyticsID: 'G-D7NPMHSKMR',
  googleVerification: '12345',
  siteLanguage: 'en_US',
  name: 'Tyler Stovsky',
  location: 'Los Angeles, California',
  email: 'tylerstovsky@gmail.com',
  github: 'https://github.com/stovsky',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/stovsky',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/tyler-stovsky',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
