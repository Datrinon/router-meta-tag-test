import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async';

/**
 * Regex which extracts the domain from any given url. Use url.split(GET_DOMAIN_REGEX) and get the capture group at index 1.
 */
const GET_DOMAIN_REGEX = new RegExp(/^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/igm);

/**
 * Generates a sequence of meta tags based on the OpenGraph standard.
 * For use inside of a React Helmet element. Based on OpenGraph.xyz's
 * output of meta tags.
 * 
 * See 
 * https://www.opengraph.xyz/url/https%3A%2F%2Fwww.github.com%2F/ for an example
 * of Meta Tags in action.
 * 
 * @param {string} url - The URL of the site, with https:// and www.
 * @param {string} type - The type of content that website is. See 
 * [Open Graph Docs](https://ogp.me/#types) for more information.
 * @param {string} title - The title of the site.
 * @param {string} description - A one to two sentence description of the object.
 * @param {string} image - An image URL to represent the displayed meta tag.
 * Recommended to be in 2:1 ratio (e.g. 1200 x 630).
 */
function MetaTags({ type, title, description, image }) {

  const url = window.location.href;

  return (
    <Helmet>
      {/* HTML Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* FaceBook Meta Tags */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={url.split(GET_DOMAIN_REGEX)[1]} />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description}/>
      <meta name="twitter:image" content={description}/>
    </Helmet>

  )
}

export default MetaTags


MetaTags.propTypes = {
  url: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
}