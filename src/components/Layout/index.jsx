import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import {
  // makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles"
import { graphql, useStaticQuery } from "gatsby"
import Prism from "prismjs"
import React, { useEffect } from "react"
import DrawerLeft from "../DrawerLeft"
import Footer from "../Footer"
import Scroll from "../Scroll"
// import Header from '../Header'
import theme from "../theme"
import Title from "../Title"
import ViewPort from "../ViewPort"

// const useStyles = makeStyles((theme) => ({
//   toolbar: theme.mixins.toolbar,
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
// }))

const Layout = ({ children, title }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  // const classes = useStyles()

  // const isSSR = typeof window === "undefined"

  return (
    <>
      <ViewPort />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
          <DrawerLeft siteTitle={data.site.siteMetadata.title}>
            <Scroll showBelow={250} />
            <div className="max-w-full mt-0 mb-auto mx-auto pt-0 pb-5 px-4">
              <Container
                className="min-h-screen py-2 px-4 sm:px-6 lg:px-8"
                maxWidth="lg"
              >
                <Title>{title}</Title>
                {children}
              </Container>
            </div>
          </DrawerLeft>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  )
}

export default Layout
