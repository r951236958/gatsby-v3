import React, { useState, useEffect, useCallback, useRef } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const DragBox = styled.div(({ isVisible }) =>
  isVisible
    ? `
        position: fixed;
        display: flex;
        border: 2px dashed white;
        width: 100%;
        height: 100%;
        z-index: 2000;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        flex: 1;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 30px;
        font-weight: 600;
        color: white;
        letter-spacing: 1px;
        margin: auto;
`
    : 'display: none;'
)

const FileUpload = () => {
  const [isVisible, setIsVisible] = useState(false)

  const onDragEnter = useCallback(
    (e) => {
      setIsVisible(true)
      e.stopPropagation()
      e.preventDefault()
      return false
    },
    [isVisible]
  )
  const onDragOver = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    return false
  }, [])
  const onDragLeave = useCallback((e) => {
    setIsVisible(false)
    e.stopPropagation()
    e.preventDefault()
    return false
  }, [])
  const onDrop = useCallback((e) => {
    e.preventDefault()
    const files = e.dataTransfer.files
    console.log('Files dropped: ', files)
    // Upload files
    setIsVisible(false)
    return false
  }, [])

  useEffect(() => {
    window.addEventListener('mouseup', onDragLeave)
    window.addEventListener('dragenter', onDragEnter)
    window.addEventListener('dragover', onDragOver)
    window.addEventListener('drop', onDrop)
    return () => {
      window.removeEventListener('mouseup', onDragLeave)
      window.removeEventListener('dragenter', onDragEnter)
      window.removeEventListener('dragover', onDragOver)
      window.removeEventListener('drop', onDrop)
    }
  }, [onDragEnter, onDragLeave, onDragOver, onDrop])

  // const [name, setName] = useState('')
  const [selectedFile, setSelectedFile] = useState()
  const [isSelected, setIsSelected] = useState()
  const [isFilePicked, setIsFilePicked] = useState(false)

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0])
    setIsSelected(true)
  }

  const handleSubmission = () => {
    const formData = new FormData()

    formData.append('File', selectedFile)

    const API_KEY = process.env.GATSBY_FREE_IMAGE_API
    fetch(`https://freeimage.host/api/1/upload?key=${API_KEY}`, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Success:', result)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  // const submitForm = () => {
  //   const formData = new FormData()
  //   formData.append('name', name)
  //   formData.append('file', selectedFile)

  //   axios
  //     .post(UPLOAD_URL, formData)
  //     .then((res) => {
  //       alert('File Upload success')
  //     })
  //     .catch((err) => alert('File Upload Error'))
  // }

  return (
    <>
      <div className="container my-4">
        <DragBox
          id="overlay"
          className="w-full h-full absolute top-0 left-0 pointer-events-none z-50 flex flex-col items-center justify-center rounded-md"
          isVisible={isVisible}
          onDragLeave={onDragLeave}
        >
          <i>
            <svg
              className="fill-current w-12 h-12 mb-3 text-blue-700"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479-1.092l4 4h-3v4h-2v-4h-3l4-4z" />
            </svg>
          </i>
          <p className="text-lg text-blue-700">Drop files to upload</p>
        </DragBox>
        <form>
          <div className="flex w-full items-center justify-center rounded-lg border-dashed border-2 border-gray-300 p-6 my-4">
            <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue-500 rounded-lg shadow-lg tracking-wide uppercase border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white">
              <svg
                className="w-8 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span className="mt-2 text-base leading-normal">
                Select a file
              </span>
              <input type="file" className="hidden" />
            </label>
          </div>
        </form>
        <div className="row">
          <div className="col-md-6">
            <form method="post" action="#" id="#">
              <header className="border-dashed rounded-md border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
                <p className="mb-3 font-semibold text-gray-200 flex flex-wrap justify-center">
                  <span>Drag and drop your</span>&nbsp;
                  <span>files anywhere or</span>
                </p>
                <input
                  id="hidden-input"
                  type="file"
                  multiple
                  className="hidden"
                />
                <button
                  id="button"
                  className="mt-2 rounded-sm px-3 py-1 text-white hover:text-gray-100 bg-green-500 hover:bg-green-600 focus:shadow-outline focus:outline-none"
                  onClick={handleSubmission}
                >
                  Upload a file
                </button>
              </header>
              {isSelected ? (
                <div>
                  <p>Filename: {selectedFile.name}</p>
                  <p>Filetype: {selectedFile.type}</p>
                  <p>Size in bytes: {selectedFile.size}</p>
                  <p>
                    lastModifiedDate:{' '}
                    {selectedFile.lastModifiedDate.toLocaleDateString()}
                  </p>
                </div>
              ) : (
                <p>Select a file to show details</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default FileUpload
