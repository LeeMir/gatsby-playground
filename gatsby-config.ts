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
    `gatsby-plugin-typescript`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
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
