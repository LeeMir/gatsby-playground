import type { GatsbyConfig } from 'gatsby';
import path from 'path';

require('dotenv').config({
  path: `.env${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://leemir-gatsby-playground.netlify.app/`,
    title: `LeeMir Gatsby Playground`,
  },
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    `gatsby-plugin-remove-fingerprints`,
    {
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `markdown-pages`,
        path: path.resolve(`src/posts`),
			},
		},
		`gatsby-transformer-remark`,
  ],
};
export default config;
