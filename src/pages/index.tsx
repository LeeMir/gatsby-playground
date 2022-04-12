import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '@components/Layout';
import { MasonryInfiniteGrid } from '@egjs/react-infinitegrid';

const Container = styled.div`
  width: 80%;
  margin: auto;
  a {
    max-width: 25%;
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
        <MasonryInfiniteGrid
          column={4}
          gap={5}
          align={'center'}
        >
          {blog.edges.map(({ node }: { node: any }) => {
            return (
              <Link to={node.fields.slug} key={node.id} >
                <img key={node.id} src={node.frontmatter.image} alt={node.fields.slug} />
              </Link>
            );
          })}
        </MasonryInfiniteGrid>
      </Container>
    </Layout>
  );
};

export default IndexPage;
