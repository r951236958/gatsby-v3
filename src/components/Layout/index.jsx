import CssBaseline from '@material-ui/core/CssBaseline'
import {
  // makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles'
import { graphql, useStaticQuery } from 'gatsby'
import Prism from 'prismjs'
import React, {
  useEffect,
  // Suspense
} from 'react'
import Footer from '../Footer'
// import Header from '../Header'
import theme from '../theme'
import Title from '../Title'
import ViewPort from '../ViewPort'
import DrawerLeft from '../DrawerLeft'
import Scroll from '../Scroll'

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

        <DrawerLeft siteTitle={data.site.siteMetadata.title}>
          <Scroll showBelow={250} />
          <Title>{title}</Title>
          {children}
          <Footer />
        </DrawerLeft>
      </ThemeProvider>
    </>
  )
}

export default Layout
