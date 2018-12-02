import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const projects = get(this, 'props.data.projects.edges')

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <h2
          style={{
            textAlign: 'center',
            marginTop: '40px',
            marginBottom: '40px',
            fontSize: '32px',
          }}
        >
          Ideas that I keep (foolishly) telling myself I'll build later
        </h2>
        {projects.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  marginTop: rhythm(0.6),
                  marginBottom: rhythm(0.2),
                }}
              >
                {node.frontmatter.description}
              </p>
              <Link to={node.fields.slug}>Read the idea's description</Link>
              <br/>
              {node.frontmatter.source != undefined && (
                  <a href={node.frontmatter.source}>View the current source code</a>
              )}
            </div>
          )
        })}
        <Bio />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    projects : allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            url
            source
            description
          }
        }
      }
    }
  }
`
