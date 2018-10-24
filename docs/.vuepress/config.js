module.exports = {
  title: 'Poi',
  description: 'Delightful web development.',
  themeConfig: {
    sidebar: [
      {
        title: 'Basics',
        collapsable: false,
        children: [
          '/guide/getting-started',
          '/guide/transforms',
          '/guide/serve-public-files'
        ]
      },
      {
        title: 'How To',
        children: [
          '/guide/use-with-eslint'
        ]
      }
    ],
    nav: [
      {
        text: 'Guide',
        link: '/guide/getting-started'
      },
      {
        text: 'Config File',
        link: '/config'
      },
      {
        text: 'Plugin Dev Guide',
        link: '/plugin-dev'
      }
    ],
    editLinks: true,
    repo: 'egoist/poi',
    docsRepo: 'poi-bundler/website',
    docsDir: 'docs'
  }
}
