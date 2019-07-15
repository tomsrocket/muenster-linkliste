module.exports = {
  title: "MünstAH! - Die Münster Linksammlung",
  description: "Wer sagt, Webkataloge wären out?!",
  themeConfig: {
    sidebarDepth: 2,
    sidebar: [
      '/Nachrichten',
      '/Initiativen',
      '/Sonstige',
      //['/page-b', 'Explicit link text']
    ],	  
    nav: [
      { text: 'Startseite', link: '/' },
      { text: 'Linkliste', link: '/Nachrichten' },
      { text: 'Impressum', link: '/Impressum' },
      { text: 'Datenschutz', link: '/Datenschutz' },
    ],
    lastUpdated: 'Zuletzt geändert', // string | boolean
    // sidebar: 'auto',
    displayAllHeaders: true, // Default: false
    logo: '/muenstah.png',

    // Customising the header label
    //repo: 'tomsrocket/muenster-linkliste',
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    //repoLabel: 'Contribute!',

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    docsRepo: 'tomsrocket/muenster-linkliste',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Links zu dieser Seite beitragen'

    
  },
  plugins: [
    [ 
      '@vuepress/google-analytics',
      {
        'ga': 'UA-3346698-6' // UA-00000000-0
      }
    ]  
  ], 
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
