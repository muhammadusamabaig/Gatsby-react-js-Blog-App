/** @jsx jsx */
import { jsx } from "theme-ui";
import CardDesign from './Card'
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import SidePopup from './SidePopup'

import './LandingCard.css'
// import Rating from './Rating.js'
const CardListPage = ({isLoggedIn}) => {
    const data = useStaticQuery(
        graphql`
        query {
            allContentfulBlogPost(filter: {node_locale: {eq: "en-US"}}) {
                edges {
              node {
                title
                id
                slug
                publishedDate(formatString: "Do MMMM, YYYY")
                featuredImage {
                  fluid(maxWidth: 750) {
                    ...GatsbyContentfulFluid
                  }
                }
                
              }
            }
          }
        }
      `
    )


    let FirstAlphbet 


    return (
      
            <div className="container" >

                <div className="row d-flex justify-content-center" >


                    {data.allContentfulBlogPost.edges.map(edge => {
    FirstAlphbet=edge.node.title[0]

return (
                            // <li className="post" key={edge.node.id}>
                            //   <h2>
                            //     <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
                            //   </h2>
                            //   <div className="meta">
                            //     <span>Posted on {edge.node.publishedDate}</span>
                            //   </div>
                            //   {edge.node.featuredImage && (
                            //     <Img
                            //       className="featured"
                            //       fluid={edge.node.featuredImage.fluid}
                            //       alt={edge.node.title}
                            //     />
                            //   )}

                            //   <div className="button">
                            //     <Link to={`/blog/${edge.node.slug}/`}>Read More</Link>
                            //   </div>
                            // </li>
//                             <Link style={{backgroundImage: `url(${edge.node.featuredImage.fluid.src})`,textDecoration:"none",color:"white",boxShadow: "10px 7px 5px #000" ,marginTop:"1%",borderRadius:"2%"}} className="col-3 CardBackground" to={`/blog/${edge.node.slug}/`}> <div >
// <p>{edge.node.title}</p>
//                             </div></Link>
<div style={{marginLeft:"2%",marginTop:"2%"}}>
  {
    // console.log(edge.node.title[0])
  }
    
<CardDesign isLoggedIn={isLoggedIn} ImgSrc={edge.node.featuredImage.fluid.src} Title={edge.node.title} FirstAlphbet={FirstAlphbet} />
  
  </div>
                            // <h1>djvdj</h1>
                        )
                    })}


                </div>

            </div>
          

       
    )
}

export default CardListPage