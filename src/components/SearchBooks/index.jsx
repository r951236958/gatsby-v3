import React, { useState, useEffect } from "react"

function useAsyncHook(searchBook) {
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState("false")

  useEffect(() => {
    async function fetchBookList() {
      const accessKey = process.env.GATSBY_UNSPLASH_ACCESS_KEY
      //   const URL = `https://api.unsplash.com/search/photos?client_id=${accessKey}&page=1&query=${searchBook}`

      try {
        setLoading("true")
        const response = await fetch(
          `https://api.unsplash.com/search/photos?client_id=${accessKey}&page=1&query=${searchBook}`
        )

        const json = await response.json()
        // console.log(json);
        setResult(
          json.items.map(item => {
            console.log(item.links.html)
            return item.user.name
          })
        )
      } catch (error) {
        setLoading("null")
      }
    }

    if (searchBook !== "") {
      fetchBookList()
    }
  }, [searchBook])

  return [result, loading]
}

const SearchBooks = () => {
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("")
  const [result, loading] = useAsyncHook(query)

  return (
    <div className="Books">
      <h3>Search for Books on any Topic</h3>
      <form
        onSubmit={e => {
          e.preventDefault()
          setQuery(search)
        }}
      >
        <label htmlFor="searbar">Search : </label>
        <input
          className="bg-transparent rounded border border-gray-400 text-md text-gray-200"
          id="searchbar"
          name="search"
          type="text"
          onChange={e => setSearch(e.target.value)}
        />
        <input
          className="px-6 py-2 text-base bg-transparent hover:bg-teal-200 hover:bg-opacity-10 rounded-md border border-teal-500 hover:border-teal-600 mx-4"
          type="submit"
          value="search"
        />
      </form>

      {loading === "false" ? (
        <h1>Search for Books</h1>
      ) : loading === "null" ? (
        <h1>No Book Found</h1>
      ) : (
        result.map((item, i) => {
          return <p key={i}>Book Title : {item}</p>
        })
      )}
    </div>
  )
}

export default SearchBooks
