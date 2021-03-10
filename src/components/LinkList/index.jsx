import React from "react"

const LinkList = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Jane Cooper
                          </div>
                          <div className="text-sm text-gray-500">
                            jane.cooper@example.com
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        Regional Paradigm Technician
                      </div>
                      <div className="text-sm text-gray-500">Optimization</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Admin
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        href="/"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden shadow-lg bg-white min-h-64 lg:w-3/4 sm:w-1/2 md:w-full">
        <p className="px-2 text-gray-600 mb-2 text-2xl font-thin pt-3">
          Contacts
        </p>
        <div className="px-2">
          <svg
            className="absolute z-50 m-1 text-blue-400"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.71 14H15.5L20.49 19L19 20.49L14 15.5V14.71L13.73 14.43C12.59 15.41 11.11 16 9.5 16C5.90997 16 3 13.09 3 9.5C3 5.90997 5.90997 3 9.5 3C13.09 3 16 5.90997 16 9.5C16 11.11 15.41 12.59 14.43 13.73L14.71 14ZM5 9.5C5 11.99 7.01001 14 9.5 14C11.99 14 14 11.99 14 9.5C14 7.01001 11.99 5 9.5 5C7.01001 5 5 7.01001 5 9.5Z"
              fill="black"
              fillOpacity="0.54"
            />
          </svg>
          <input
            type="text"
            className="pl-8 p-1 bg-gray-200 w-full rounded relative"
            placeholder="Search teams or members"
          />
        </div>
        <div className="py-5 px-3">
          <div className="flex justify-between px-2 py-2">
            <p className="flex text-gray-700">
              <svg
                className="w-2 text-gray-500 mx-2"
                viewBox="0 0 8 8"
                fill="currentColor"
              >
                <circle cx={4} cy={4} r={3} />
              </svg>
              Tighten Co.
            </p>
            <p className="text-gray-500 font-thin">Team</p>
          </div>
          <div className="flex justify-between px-2 py-2 bg-blue-100 rounded">
            <p className="flex text-gray-700">
              <svg
                className="h2 w-2 text-teal-500 mx-2"
                viewBox="0 0 8 8"
                fill="currentColor"
              >
                <circle cx={4} cy={4} r={3} />
              </svg>
              Taylor Otwell
            </p>
            <p className="text-gray-500 font-thin">Member</p>
          </div>
          <div className="flex justify-between px-2 py-2">
            <p className="flex text-gray-700">
              <svg
                className="h2 w-2 text-gray-500 mx-2"
                viewBox="0 0 8 8"
                fill="currentColor"
              >
                <circle cx={4} cy={4} r={3} />
              </svg>
              Adam Wathan
            </p>
            <p className="text-gray-500 font-thin">Member</p>
          </div>
          <div className="flex justify-between px-2 py-2">
            <p className="flex text-gray-700">
              <svg
                className="h2 w-2 text-gray-500 mx-2"
                viewBox="0 0 8 8"
                fill="currentColor"
              >
                <circle cx={4} cy={4} r={3} />
              </svg>
              Ahmed Ashraf
            </p>
            <p className="text-gray-500 font-thin">Member</p>
          </div>
          <div className="flex justify-between px-2 py-2">
            <p className="flex text-gray-700">
              <svg
                className="h2 w-2 text-teal-500 mx-2"
                viewBox="0 0 8 8"
                fill="currentColor"
              >
                <circle cx={4} cy={4} r={3} />
              </svg>
              Laracasts
            </p>
            <p className="text-gray-500 font-thin">Team</p>
          </div>
        </div>
        <div className="bg-gray-300 flex flex-row-reverse px-2 py-3">
          <button className="bg-blue-500 py-2 px-4 rounded text-white">
            Invite
          </button>
          <button className="py-2 px-4 rounded text-gray-600">Cancel</button>
        </div>
      </div>
    </>
  )
}

export default LinkList
