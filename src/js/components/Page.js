import React from 'react'
import { Helmet } from 'react-helmet-async'
import MetaTags from './Shared/MetaTags'


/**
 * Regex which extracts the domain from any given url. Use url.split(GET_DOMAIN_REGEX) and get the capture group at index 1.
 */
 const GET_DOMAIN_REGEX = new RegExp(/^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/igm);


/**
 * Wrapper component for a page of content. 
 * 
 * @param {MetaTagGroup} meta - An object representing meta tag information,
 * use the provided model `MetaTagGroup`.
 * @param {JSX.Element} children - A component to render on the `Page`. This is
 * a built-in prop for all React components.
 */
function Page({ meta: m, children }) {
  return (
    <>
      <MetaTags
        url={m.url}
        type={m.type}
        title={m.title}
        description={m.description}
        image={m.image}
      />
      {children}
    </>
  )
}

export default Page