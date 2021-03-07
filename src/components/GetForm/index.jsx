import React from "react"

const GetForm = () => {
  return (
    <div className="max-w-2xl bg-paper-500 shadow-lg p-6 mx-auto my-6">
      <div className="text-2xl text-teal-400 font-bold text-center leading-8 mt-8 mb-4">
        GetForm
      </div>
      <form
        className="flex flex-col items-center justify-center space-y-4"
        action="https://getform.io/f/ad90619e-c67d-4cdb-96cd-b7add2a1bc7e"
        method="POST"
      >
        <div className="textInput w-1/2 flex flex-col space-y-2">
          <label htmlFor="name" className="text-sm text-gray-300 ml-2">
            Name
          </label>
          <input
            placeholder="Your Name"
            className="bg-transparent rounded-md border border-gray-500 p-2 my-2 text-md text-gray-200"
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className="textInput w-1/2 flex flex-col space-y-2">
          <label htmlFor="email" className="text-sm text-gray-300 ml-2">
            Email
          </label>
          <input
            placeholder="Email Address"
            className="bg-transparent rounded-md border border-gray-500 p-2 my-2 text-md text-gray-200"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="textInput w-1/2 flex flex-col space-y-2">
          <label htmlFor="message" className="text-sm text-gray-300 ml-2">
            Message
          </label>
          <input
            placeholder="Say something"
            className="bg-transparent rounded-md border border-gray-500 p-2 my-2 text-md text-gray-200"
            type="text"
            name="message"
            id="message"
          />
        </div>
        <div className="text-center">
          <button
            className="px-4 py-2 w-36 m-4 text-lg text-teal-500 rounded-md border-2 border-teal-500 hover:border-teal-400 bg-transparent hover:bg-gray-500 hover:bg-opacity-10"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default GetForm
