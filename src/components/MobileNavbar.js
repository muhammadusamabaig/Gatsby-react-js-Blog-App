/** @jsx jsx */
import { jsx } from "theme-ui";
import React,{useState} from "react"
import '../../Styles/Navbar.css'
import { Twirl as Hamburger } from 'hamburger-react'
import MenuItems from './Menu'
const Navigationbar = () => {
    // const [isOpen, setOpen] = useState(false)
//   console.log(isOpen)
    return (
     <div  className="container d-lg-none d-xl-none">
      <div className="row " style={{marginTop:"3%"}}>
      <div className="col-10">
{/* <Hamburger toggled={isOpen} toggle={setOpen} /> */}
<span style={{fontSize:"30px",color:"brown",fontFamily:'Sansita Swashed',paddingRight:"5%"}}>Cocking Blog</span>
{/* <h1>knkdjkdj</h1> */}
</div>
<div className="col-2 d-flex justify-content-end">
{/* <Hamburger toggled={isOpen} toggle={setOpen} /> */}
<MenuItems />
</div>



 </div>
 </div>
    )
};

export default Navigationbar


