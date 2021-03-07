import React, { useState, useRef } from "react"
import { Button, Link } from "gatsby-theme-material-ui"

export default function HomePage() {
  const [state, setState] = useState({ loading: false, msg: null })

  const searchQuery = useRef(null)

  const handleClick = e => {
    e.preventDefault()
    setState({ loading: true })

    fetch("/.netlify/functions/token-hider")
      .then(response => response.json())
      .then(json => {
        setState({ loading: false, msg: json.message })
      })
  }

  return (
    <>
      <div className="flex items-start max-h-screen w-full justify-center mt-20">
        <div className="max-w-lg">
          <div className="my-8">
            <p className="text-base leading-8 font-normal">
              <span className="mr-2" role="img" aria-label="hands">
                👋
              </span>
              This is a simple demo of creating dynamic pages with Gatsby that
              require{" "}
              <span className="font-bold text-red-600">
                user authentication
              </span>{" "}
              and using <span className="font-bold text-red-600">Firebase</span>{" "}
              as authentication provider.
            </p>
          </div>

          <div className="my-8">
            <p className="text-base leading-8 font-normal">
              <span className="mr-2" role="img" aria-label="books">
                📚
              </span>
              It uses concepts from the{" "}
              <Link
                color="primary"
                href="https://www.gatsbyjs.org/docs/client-only-routes-and-user-authentication/"
              >
                client-only routes section
              </Link>{" "}
              and{" "}
              <Link
                color="primary"
                href="https://www.gatsbyjs.org/tutorial/authentication-tutorial"
              >
                making a site with user authentication{" "}
              </Link>
              tutorial in the official gatsby doc.
            </p>
          </div>

          <div className="my-8">
            <div className="grid grid-rows-2 grid-flow-col gap-4">
              <div className="row-span-2 col-span-2">
                <p className="text-base leading-8 font-normal">
                  This is the public home, and here it is a private route to
                  start:{" "}
                </p>
              </div>
              <div className="col-span-2">
                <div className="flex items-center">
                  <Button color="primary" variant="contained" to="/app/profile">
                    Go to your profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>
          You can still access Netlify functions even on static "marketing
          pages". This function is available at{" "}
          <a href="/.netlify/functions/token-hider">
            <code>/.netlify/functions/token-hider</code>
          </a>{" "}
          and it uses an API_SECRET environment variable that is hidden from the
          frontend!
        </p>
        <button
          ref={searchQuery}
          className="px-4 py-2 rounded-md bg-blue-500 text-gray-100"
          onClick={handleClick}
        >
          {state.loading ? "Loading..." : "Call Lambda Function"}
        </button>
        <div className="min-h-36 mx-auto my-4">
          {state.msg ? (
            <img
              src={state.msg[Math.floor(Math.random() * 10)]}
              alt="dog"
            ></img>
          ) : (
            <pre>"Click the button and watch this!"</pre>
          )}
        </div>
      </div>
    </>
  )
}
