import React from 'react'
// import HomePage from '../components/HomePage'
// import GetForm from '../components/GetForm'
import Layout from '../components/Layout'
import LinkList from '../components/LinkList'
import MyLink from '../components/MyLink'
import SEO from '../components/SEO'

const Index = () => {
  const title = 'Home Page'

  // const queryData = async () => {
  //   const spreadsheetId = '1YBmkaZC0jDQXKqn4JIlzG1Yp7dU0ZGgjBiODYA0Q__4'
  //   const response = await fetch(
  //     `https://api.graphqlsheet.com/api/${spreadsheetId}`,
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         token: '563b59efec74b19f008ee9dac49d5e2595d38929',
  //       },
  //       body: JSON.stringify({
  //         query: `
  //       {
  //         get(query: {name: "Achilleas"}) {
  //           name
  //           age
  //         }
  //       }
  //     `,
  //       }),
  //     }
  //   )
  //   const responseJSON = await response.json()
  //   console.log(responseJSON)
  // }

  return (
    <Layout title={title}>
      <SEO title={title} />

      <MyLink />
      <LinkList key="my-link-list" />
    </Layout>
  )
}

export default Index
