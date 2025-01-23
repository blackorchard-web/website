import React from "react";
import { graphql, useStaticQuery } from "gatsby";
/* @ts-ignore */

const SEO_IMAGE_URL = require("../../images/icon.png");

const svgContent = encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 215.6 213.8">
    <path fill="rgba(255,255,255,1)" stroke="rgba(0,0,0,1)" stroke-width="2" d="M215.5-0.1c-38.3,33.3-68.9,29.4-96.7,43.3c-9.5-3.5-19.9-5.5-30.7-5.5C39.4,37.7,0,77.1,0,125.8
	c0,48.7,39.4,88.1,88.1,88.1c48.7,0,88.1-39.4,88.1-88.1c0-15.3-3.9-29.6-10.7-42.1C195.5,73.4,214.7,31.8,215.5-0.1z M88.1,176.2
	c-27.8,0-50.4-22.6-50.4-50.4s22.6-50.4,50.4-50.4c0.9,0,1.8,0,2.7,0.1c-9.6,24.8-6,52.4-6,52.4c11.7-22.4,22.1-30.1,41.1-35.4
	c7.8,8.9,12.6,20.5,12.6,33.3C138.5,153.6,115.9,176.2,88.1,176.2z"/>
</svg>
`);

interface IMetaTags {
  title: string;
  description?: string;
  url?: string;
  contentType?: string;
  published?: string;
  updated?: string;
  category?: string;
  tags?: string;
  twitter?: string;
  image?: string;
  schema?: any;
  path?: string;
}

const getMetaTags = ({ title, description, url, contentType, published, updated, category, tags, twitter, image }: IMetaTags) => {
  const metaTags = [
    { name: "twitter:site", content: "@bogroup" },
    { name: "twitter:title", content: `${title} | Black Orchard Group` },
    { name: "twitter:description", content: description },
    { name: "twitter:creator", content: twitter || "@bogroup" },
    { name: "og:title", content: `${title} | Black Orchard Group` },
    { name: "og:type", content: contentType },
    { name: "og:url", content: url },
    { name: "og:description", content: description },
    { name: "og:site_name", content: "Black Orchard Group" },
    { name: "og:locale", content: "en_EN" },
    // { name: 'fb:app_id', content: '<FB App ID>' },
  ];

  if (published) metaTags.push({ name: "article:published_time", content: published });
  if (updated) metaTags.push({ name: "article:modified_time", content: updated });
  if (category) metaTags.push({ name: "article:section", content: category });
  if (tags) metaTags.push({ name: "article:tag", content: tags });
  // if (image) {
  metaTags.push({ name: "image", content: image });
  metaTags.push({ name: "twitter:image:src", content: image });
  metaTags.push({ name: "og:image", content: image });
  metaTags.push({ name: "twitter:card", content: "summary_large_image" });
  // } else {
  //   metaTags.push({ name: "twitter:card", content: "summary" });
  // }

  return metaTags;
};

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
        }
      }
    }
  `);
  return data.site.siteMetadata;
};

export const SEO = ({ title, description, image, pathname, children }: IMetaTags & { pathname?: string; children?: any }) => {
  const { title: defaultTitle, description: defaultDescription, image: defaultImage, siteUrl } = useSiteMetadata();
  const seo = {
    title: title ? title + " - Black Orchard Group" : defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    url: `${siteUrl}${pathname || ``}`,
  };
  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content={seo.url} />
      <meta name="og:image" content={seo.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      {/* <link rel="icon" href={`data:image/svg+xml,${svgContent}`} /> */}
      {children}
    </>
  );
};

export default SEO;
