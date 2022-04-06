import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://leemir-gatsby-playground.netlify.app/`,
    title: `LeeMir Gatsby Playground`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
    },
    {
      resolve: `gatsby-plugin-styled-components`
    }
  ],
};

export default config;
