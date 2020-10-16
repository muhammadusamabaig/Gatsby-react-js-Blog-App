import React from "react"
import { useAuth } from "gatsby-theme-firebase";
import Layout from "../components/layout"
import Navigationbar from '../components/Navbar'
import CardListPage from '../components/CardList'
import {Link} from 'gatsby'
import Slider from '../components/Slider'
import MobileNavbar from '../components/MobileNavbar'
// import LoginForm from '../components/LoginForm'
import MobileSlider from '../components/MobileSlider'
const IndexPage = () => {
const { isLoading, isLoggedIn, profile } = useAuth();
const [toggleLogin, setToggleLogin] = React.useState(false);

// console.log(isLoading,isLoggedIn,profile)
return(
  <Layout>
    <Navigationbar LoginCondition={isLoggedIn}/>
    <MobileNavbar/>
    <Slider/>
    <MobileSlider/>
    <CardListPage isLoggedIn={isLoggedIn}/>
        <Link to="/blog/">Visit the Blog Page</Link>

{/* <img style={{width:"20vh"}} src={BlogImg} alt="A dog smiling in a party hat" /> */}
{
  // true && <LoginForm setToggleLogin={setToggleLogin}/>
}
{/* <p style={{background:"rgba(255,255,255,.2)"}}>jjjj</p> */}

  </Layout>
)
  }
export default IndexPage
