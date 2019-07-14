module.exports = {
  title: "MünstAH! - der Münster Webkatalog",
  description: "Münster-Linksammlung zu verschiedenen Themengebieten",
  themeConfig: {
    sidebar: [
      '/Initiativen',
      '/Nachrichten',
      '/Sonstige',
      //['/page-b', 'Explicit link text']
    ],	  
    lastUpdated: 'Zuletzt geändert', // string | boolean
    // sidebar: 'auto',
    displayAllHeaders: true, // Default: false
    nav: [
      { text: 'Startseite', link: '/' },
      { text: 'Linkliste', link: '/Linkliste' },
      { text: 'Impressum', link: '/Impressum' },
    ]
  },
  markdown: {
    linkify: true,
    config: md => {
      md.set({
        linkify: true,  
      }),
      md.use(require('linkify-it'))
    }
  }
}
