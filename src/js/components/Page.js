import React from 'react'
import { Helmet } from 'react-helmet-async'
import MetaTags from './Shared/MetaTags'

/**
 * Wrapper component for a page of content. 
 * 
 * @param {MetaTagGroup} metaTagGroup - An object representing meta tag information,
 * use the provided model `MetaTagGroup`.
 * @param {JSX.Element} Content - A component to render on the `Page`.
 */
function Page({metaTagGroup : mtg, Content}) {
  return (
    <>
      <Helmet>
        <MetaTags url={mtg.url, mtg.type, mtg.title, mtg.description, mtg.image}/>
      </Helmet>
      <Content />
    </>
  )
}

export default Page