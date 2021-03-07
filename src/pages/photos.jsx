import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

import UnsplashDemo from '../components/UnsplashDemo'

const Photos = () => {
  const title = 'Unsplash API Example'
  return (
    <Layout title={title}>
      <SEO title={title} />
      <UnsplashDemo />
    </Layout>
  )
}

export default Photos
