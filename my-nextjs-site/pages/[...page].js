const Page = ({ title }) =>
  <div>Hello Page, {title}</div>

export default Page

export const getStaticPaths = async () => {
  return {
    paths: [
      '/page',
      '/bla',
    ],
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  return {
    props: { title: context.params.page }
  }
}
