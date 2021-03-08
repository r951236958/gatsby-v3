import * as React from "react"
import InfiniteImages from "../components/InfiniteImages"
import Layout from "../components/Layout"
import SEO from "../components/SEO"


const Page4 = () => {
  const title = "404: Not found"
  return (
    <Layout title={title}>
      <SEO title={title} />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <InfiniteImages />
    </Layout>
  )
}

export default Page4
