import React, { useState } from "react"

const SearchBar = () => {
  const [state, setState] = useState({ term: "" })

  const onFormSubmit = event => {
    event.preventDefault()
    onSubmit(setState(state.term))
  }
  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label> Image Search: </label>
          <input
            type="text"
            value={state.term}
            onChange={event => setState({ term: event.target.value })}
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar
