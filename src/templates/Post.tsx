import React from 'react'
import { graphql } from 'gatsby'

export default function Template({ data }: { data: any }) {
  const { markdownRemark: { frontmatter, html } } = data;
  return (
    <div>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
    </div>
  )
}

export const pageQuery = graphql`
  query($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "YYYY년 MM월 DD일 ")
        title
        description
        tags
        image
      }
    }
  }
`
