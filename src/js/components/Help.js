import React from 'react'
import { Helmet } from 'react-helmet-async'

function Help() {
  return (
    <>
      <Helmet>
        <title>Meta Inspector - Help</title>
        <meta property="og:url" content="URL here" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="page.title / make this customizable!" />
        <meta property="og:description" content="Help page!" />
      </Helmet>
      <div>This is the help page.</div>
    </>
  )
}

export default Help