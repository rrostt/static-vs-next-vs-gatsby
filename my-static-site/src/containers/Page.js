import React from 'react'
import { useRouteData } from 'react-static'
import { useSiteData } from 'react-static'

const Page = () => {
  const data = useRouteData()
  const site = useSiteData()

  return <div>
    <h1>{site.title}</h1>
    <p>Hello Page, {data.title}</p>
  </div>
}

export default Page
