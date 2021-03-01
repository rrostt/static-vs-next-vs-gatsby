import path from 'path'

const config = {
  getRoutes: async () => {
    return [
      {
        path: '/page',
        template: 'src/containers/Page',
        getData: () => ({
          title: 'Title page'
        })
      },
    ]
  },
  getSiteData: () => {
    return {
      title: 'My site',
    }
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-sitemap'),
  ],
}

export default config
