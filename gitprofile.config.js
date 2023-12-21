// gitprofile.config.js

const config = {
  github: {
    username: 'djacidfx', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 20, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    twitter: 'WildCatStudio18',
    mastodon: '',
    facebook: 'TheRockinRev',
    instagram: '',
    youtube: 'WildCatsStudio', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'djacidfx',
    stackoverflow: '2005305/david-b', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://mywild.work/',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/drive/folders/19doaWS3m-Mz-jsNkP3Mm6m4b7A15vARG?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'Screen Printing',
    'Sublimation Printing',
    'Problem Solving',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'WildCat Studio',
      position: 'Owner',
      from: 'September 2010',
      to: 'Present',
      companyLink: 'https://mywild.work/',
    },
    {
      company: '',
      position: '',
      from: '',
      to: '',
      companyLink: '',
    },
  ],
  /* certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: ''
    },
  ], */
  education: [
    {
      institution: 'MIT',
      degree: 'Bachelor Degree - Computer Engineering',
      from: '2012',
      to: '2016',
    },
    {
      institution: '',
      degree: '',
      from: '',
      to: '',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'WildCat Studio',
      description:
        'Current website',
      imageUrl: 'https://avatars.githubusercontent.com/u/19895356?v=4',
      link: 'https://mywild.work/',
    },
    {
      title: 'Our Portfolio Website',
      description:
        'Portfolio Website',
      imageUrl: 'https://avatars.githubusercontent.com/u/19895356?v=4',
      link: 'https://wildcatproductions.biz/',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: 'djacidfx', // to hide blog section, keep it empty
    limit: 10, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '3802380',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'corporate',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Welcome to <a 
      class="text-primary" href="https://mywild.work/"
      target="_blank"
      rel="noreferrer"
    >WildCat Studio</a><br><iframe src="https://github.com/sponsors/djacidfx/card" title="Sponsor djacidfx" height="225" width="600" style="border: 0;"></iframe>`,
};

export default config;
