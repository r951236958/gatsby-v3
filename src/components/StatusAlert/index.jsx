import React, { useState } from "react"
// import { navigate } from '@reach/router'
import { getUser, isLoggedIn } from "../../utils/auth"
// import firebase from 'gatsby-plugin-firebase'

const StatusAlert = () => {
  const [showAlert, setShowAlert] = useState(true)
  const user = getUser()
  const { displayName } = user
  // const { user, isLoggedIn } = useIdentityContext()

  return (
    <>
      {showAlert ? (
        <div className="text-white px-6 py-4 border-0 rounded mb-4 bg-gray-500">
          <span className="inline-block align-middle mr-8">
            {isLoggedIn() ? `Hello, ${displayName}` : "You are not logged in"}
          </span>

          <button
            className="bg-transparent text-2xl font-semibold leading-none float-right right-0 top-0 outline-none focus:outline-none"
            onClick={() => setShowAlert(false)}
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
      ) : null}
    </>
  )
}
export default StatusAlert
