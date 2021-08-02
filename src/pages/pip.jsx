import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

import YoutubePiP from "../components/YoutubePiP"

const PiP = () => {
  const title = "Open Youtube on Safari with PiP"
  return (
    <Layout title={title}>
      <SEO title={title} />
      <YoutubePiP />
    </Layout>
  )
}

export default PiP