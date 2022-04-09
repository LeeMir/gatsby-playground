import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '@components/Layout';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  a {
    max-width: 20%;
    img {
      width: 100%;
    }
  }
`;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            image
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;

const IndexPage = ({ data }: { data: any }) => {
  const blog = data.allMarkdownRemark;
  return (
    <Layout>
      <h4>{blog.totalCount} posts</h4>
      <Container>
        {blog.edges.map(({ node }: { node: any }) => {
          return (
            <Link to={node.fields.slug} key={node.id} >
              <img src={node.frontmatter.image} alt={node.fields.slug} />
            </Link>
          );
        })}
      </Container>
    </Layout>
  );
};

export default IndexPage;
