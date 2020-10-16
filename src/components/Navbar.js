/** @jsx jsx */
import { jsx } from "theme-ui";
import React,{useState} from "react"
import '../../Styles/Navbar.css'
import Link from 'gatsby'
import { Twirl as Hamburger } from 'hamburger-react'
import { auth } from "gatsby-theme-firebase";

const Navigationbar = ({LoginCondition}) => {
    // const [isOpen, setOpen] = useState(false)
console.log(LoginCondition)
    return (
     <div  className="container d-lg-block d-none" >
      <div className="row " style={{marginTop:"3%",backgroundAttachment:"fixed"}}>

<ul className=" Nav col-12" >
{/* <li className="d-xl-none d-lg-none"><Hamburger/></li> */}

      <span style={{fontSize:"35px",color:"brown",fontFamily:'Sansita Swashed',paddingRight:"5%"}}>Cocking Blog</span>
      <a href="/">Home</a>
      <a href="/About">About Us</a>
      <a href="Contact">Contact</a>
{
    LoginCondition &&     <span style={{marginLeft:"35%",padding:"2%" ,fontWeight:"bold",fontSize:"20px"}}>  <a style={{textDecoration:"none",fontFamily:"Sansita Swashed"}} onClick={()=>{auth.signOut()}}>Singout</a></span>

}
{
    !LoginCondition &&     <span style={{marginLeft:"35%",padding:"2%",fontWeight:"bold",fontSize:"20px"}}><a style={{textDecoration:"none",fontFamily:"Sansita Swashed"}} href="/login">SingIn</a></span>

}
    </ul>






 </div>
 </div>
    )
};

export default Navigationbar


