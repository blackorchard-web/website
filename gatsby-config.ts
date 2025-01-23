import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Black Orchard Group`,
    siteUrl: `https://blackorchardgroup.com`,
    description: `We develop projects that address the target market requirements, balanced with the site conditions and planning constraints to arrive at units that are affordable yet functional.`,
    image: `/favicon.png`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        schemas: {
          project: require("./custom_types/projects.json")
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Black Orchard Group`,
        short_name: `bogroup`,
        start_url: `/`,
        background_color: `#000`,
        display: `minimal-ui`,
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          { family: "Nunito", weights: ["300", "400", "700", "900"] },
          { family: "Quicksand", weights: ["300", "400", "700"] },
        ],
        display: "swap",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-tawk.to`,
      options: {
        tawkId: "64bc0d82cc26a871b02a94d1",
        tawkKey: "1h5v99kbb",
      },
    },
  ],
};

export default config;
