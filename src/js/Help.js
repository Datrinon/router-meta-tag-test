import React from 'react'
import { Helmet } from 'react-helmet-async'

function Help() {
  return (
    <>
    <Helmet>
      <title>Meta Inspector - Help</title>
      <title>Meta Inspector</title>
        <meta property="og:url" content="URL here" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="page.title / make this customizable!" />
        <meta property="og:description" content="Help page!" />
    </Helmet>
    <div>This is where you find directions.</div>
  </>
  )
}

export default Help