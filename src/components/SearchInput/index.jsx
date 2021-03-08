// import InputBase from '@material-ui/core/InputBase'
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import React, { useState } from "react"
// import MenuIcon from '@material-ui/icons/Menu'
// import SearchIcon from '@material-ui/icons/Search'
// import DirectionsIcon from '@material-ui/icons/Directions'

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}))

// const ReturnLeftIcon = props => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="20"
//       height="20"
//       fill="currentColor"
//       viewBox="0 0 16 16"
//       {...props}
//     >
//       <path d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
//     </svg>
//   )
// }

const KeyboardReturnIcon = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      width="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z" />
    </svg>
  )
}

const SearchIcon = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
    </svg>
  )
}

const CloseIcon = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
    </svg>
  )
}

export default function SearchInput() {
  const classes = useStyles()
  const [inputValue, setTnputValue] = useState({ searchQuery: "" })

  const inputValueChange = e => {
    setTnputValue({ searchQuery: e.target.value })
  }

  const onFormSubmit = event => {
    event.preventDefault()
    setTnputValue(inputValue.searchQuery)
  }

  const handleReset = e => {
    e.preventDefault()
    setTnputValue({ searchQuery: "" })
  }

  return (
    <Paper
      component="form"
      className="relative flex w-400 px-2 py-1 text-center"
      onSubmit={onFormSubmit}
    >
      <IconButton className="p-2 w-1/12" aria-label="searchIcon">
        <SearchIcon />
      </IconButton>
      <input
        id="searchQuery"
        name="searchQuery"
        typr="text"
        value={inputValue.searchQuery}
        className="flex flex-grow w-4/12 ml-1 bg-transparent focus:outline-none"
        placeholder="Search Images"
        onChange={inputValueChange}
      />

      <button
        className="inline-block items-center p-2 w-1/12 right-auto"
        type="reset"
        onClick={handleReset}
      >
        <CloseIcon className={inputValue.searchQuery ? "w-6 h-6" : "hidden"} />
      </button>

      <Divider className={classes.divider} orientation="vertical" />
      <IconButton type="submit" className="p-2 w-1/12" aria-label="search">
        <KeyboardReturnIcon />
      </IconButton>
    </Paper>
  )
}
