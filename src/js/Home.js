import React from 'react'
import { Helmet } from 'react-helmet-async'

function Home() {
  return (
    <>
      <Helmet>
        <title>Meta Inspector</title>
        <meta property="og:url" content="URL here" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="page.title / make this customizable!" />
        <meta property="og:description" content="Home page!" />
      </Helmet>
      <div>Welcome to the Home Page.</div>
    </>
  )
}

export default Home