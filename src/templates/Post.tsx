import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@components/Layout';

export const query = graphql`
  query MyQuery($slug: String) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        date
        description
        image
        tags
        title
      }
      html
    }
  }
`;

export default function Template({ data }: { data: any }) {
  const { markdownRemark: { frontmatter, html } } = data;
  return (
    <Layout>
      <img src={frontmatter.image} alt={frontmatter.title} />
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
};
