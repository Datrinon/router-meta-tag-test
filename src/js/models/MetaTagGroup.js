/**
 * Represents a group of meta tags based on the OpenGraph standard.
 * 
 * @param {string} title - The title of the webpage.
 * @param {string} url - The URL of the webpage, with https:// and www.
 * @param {string} type - The type of content that website is. See 
 * [Open Graph Docs](https://ogp.me/#types) for more information. By default, is set to website.
 * @param {string} description - A one to two sentence description of the object.
 * @param {string} image - An image URL to represent the displayed meta tag.
 * Recommended to be in 2:1 ratio (e.g. 1200 x 630).
 */
class MetaTagGroup {
  constructor(title = "Untitled Web Page", type = "website", description = "", image = "") {
    this.title = title;
    this.type = type;
    this.description = description;
    this.image = image;
  }
}

export { MetaTagGroup };