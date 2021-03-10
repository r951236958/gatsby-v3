import CssBaseline from "@material-ui/core/CssBaseline"
import {
  // makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles"
import { graphql, useStaticQuery } from "gatsby"
import Prism from "prismjs"
import React, { useEffect } from "react"
import Footer from "../Footer"
import Footer3 from "../Footer3"
import Scroll from "../Scroll"
// import Header from '../Header'
import theme from "../theme"
import Title from "../Title"
import TopBar from "../TopBar"
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

  return (
    <>
      <ViewPort />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="w-full">
          {/* <DrawerLeft siteTitle={data.site.siteMetadata.title}> */}
          <TopBar siteTitle={data.site.siteMetadata.title} />
          <Scroll showBelow={250} />
          <div className="max-w-screen-lg mt-10 mx-auto pt-0 px-4 pb-6">
            <main>
              <Title>{title}</Title>

              {children}
            </main>
          </div>
          {/* </DrawerLeft> */}
          <Footer />
          <Footer3 />
        </div>
      </ThemeProvider>
    </>
  )
}

export default Layout
