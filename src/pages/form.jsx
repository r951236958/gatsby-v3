import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import GoogleSheets from '../components/GoogleSheets'
import NetlifyForm from '../components/NetlifyForm'
import LoginForm from '../components/LoginForm'

const Form = () => {
  const title = '填寫表單'

  const demoCode = `
  {
    "status": 403,
    "statusText": "Forbidden",
    "headers": {
      "vary": "X-Origin, Referer, Origin,Accept-Encoding",
      "content-type": "application/json; charset=UTF-8",
      "date": "Sun, 07 Mar 2021 15:21:13 GMT",
      "server": "ESF",
      "cache-control": "private",
      "x-xss-protection": "0",
      "x-frame-options": "SAMEORIGIN",
      "alt-svc": "h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"",
      "accept-ranges": "none",
      "connection": "close",
      "transfer-encoding": "chunked"
    },
    "data": {
      "error": {
        "code": 403,
        "message": "The request is missing a valid API key.",
        "status": "PERMISSION_DENIED"
      }
    }
  }
  `
  return (
    <Layout title={title}>
      <SEO title={title} />
      <NetlifyForm />
      <GoogleSheets />
      <LoginForm />
      <div>
        <pre>
          <code className="language-json">{demoCode}</code>
        </pre>
      </div>
    </Layout>
  )
}

export default Form
