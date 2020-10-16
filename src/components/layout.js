/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import '../../Styles/global.css'
// import LoginForm from "./LoginForm"
// import Navigationbar from './Navbar'
// import Modal from './Modal'
import Footer from './Footer'
// import "./layout.css"
const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <div >
        <main style={{width:"100%",overflow:"hidden"}} className="main">
        {/* <LoginForm /> */}
{/* <h1>khjikkkhkkkkkkkkkkkkkkkkkkkkkkkkkk</h1> */}
          {children}
          </main>
          {/* <Modal/> */}
          <Footer/>

          {/* <main style={{height:"100vh",width:"100%",overflow:"hidden"}} className="main">
       
       {children}</main> */}
    
        
       
      
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
