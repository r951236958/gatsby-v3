import React from "react"
import App from "./SearchApp/app"

const Layout = ({ children }) => {
  return (
    <>
      <App />
      {children}
    </>
  )
}

export default Layout
