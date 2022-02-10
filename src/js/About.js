import React from 'react'
import { Helmet } from 'react-helmet-async'

function About() {
  return (
    <>
    <Helmet>
      <title>Meta Inspector - About</title>
      <meta property="og:url" content="URL here" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="page.title / make this customizable!" />
        <meta property="og:description" content="About page!" />
    </Helmet>
    <div>We've been open since forever.</div>
    </>
  )
}

export default About