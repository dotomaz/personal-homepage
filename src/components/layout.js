/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Box } from 'reakit';
import styled from 'styled-components';

import "./layout.css";

const Container = styled(Box)`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  main{
    flex: 1;
  }
`;

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
        <>
            <Container>
                <main>{children}</main>
                <footer>
                    © {new Date().getFullYear()}, By
                    {` `}
                    <a href="https://tomaz.dobrisek.si">Tomaž Dobrišek</a>
                </footer>
            </Container>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
