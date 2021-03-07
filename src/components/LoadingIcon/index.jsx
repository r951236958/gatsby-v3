import React from "react"
import CircularProgress from "@material-ui/core/CircularProgress"
import Container from "@material-ui/core/Container"

const LoadingIcon = () => {
  return (
    <Container maxWidth="xl">
      <div className="h-screen flex flex-col items-center content-center">
        <div className="my-auto">
          <div className="text-lg">loading...</div>

          <CircularProgress color="secondary" />
        </div>
      </div>
    </Container>
  )
}

export default LoadingIcon
