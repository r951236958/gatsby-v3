require("dotenv").config()

import { google } from "googleapis"

const SCOPES = [
  "https://www.googleapis.com/auth/drive",
  "https://www.googleapis.com/auth/drive.file",
  "https://www.googleapis.com/auth/drive.readonly",
  "https://www.googleapis.com/auth/spreadsheets",
  "https://www.googleapis.com/auth/spreadsheets.readonly",
]

const auth = new google.auth.GoogleAuth({
  keyFile: process.env.GATSBY_GOOGLE_APPLICATION_CREDENTIALS,
  scopes: SCOPES,
})

const oauth2Client = new google.auth.OAuth2(
  keys.web.client_id,
  keys.web.client_secret,
  keys.web.redirect_uris[0]
)

const { google } = require("googleapis")

const oauth2Client = new google.auth.OAuth2(
  YOUR_CLIENT_ID,
  YOUR_CLIENT_SECRET,
  YOUR_REDIRECT_URL
)

const url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: "offline",

  // If you only need one scope you can pass it as a string
  scope: scopes,
})
const keys = JSON.parse({ keyfile })

const [data, setData] = useState([])

const jsonFile = process.env.GATSBY_GOOGLE_APPLICATION_CREDENTIALS

const getData = () => {
  fetch(jsonFile, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then(function (response) {
      console.log(response)
      return response.json()
    })
    .then(function (myJson) {
      console.log(myJson)
      setData(myJson)
    })
}

useEffect(() => {
  getData()
}, [data])
