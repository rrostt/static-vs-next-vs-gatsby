module.exports.createPages = async ({ actions: { createPage } }) => {
  createPage({
    path: '/page',
    component: require.resolve('./src/components/Page.js'),
    context: { title: 'A title' }
  })
  createPage({
    path: '/bla',
    component: require.resolve('./src/components/Page.js'),
    context: { title: 'A bla title' }
  })
}
