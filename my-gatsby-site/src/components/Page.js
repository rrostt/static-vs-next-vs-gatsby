import * as React from 'react'
import { graphql } from 'gatsby'

const Page = ({ data, pageContext }) =>
  <div>
    <h1>{ data.site.siteMetadata.title }</h1>
    Hello Page, {pageContext.title}
  </div>

export default Page

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`