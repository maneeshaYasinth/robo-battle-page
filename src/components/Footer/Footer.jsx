import { useState } from 'react'
import './Footer.css'
import { ImLocation2 } from "react-icons/im";
import { ImPhone } from "react-icons/im";
import { ImMail2 } from "react-icons/im";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { ImLinkedin } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImYoutube } from "react-icons/im";
import logo from './battlebot logo.jpeg';



function App() {
  const [count, setCount] = useState(0)
    
  return (
    
    <footer class="footer-distributed">

        <div class="footer-left">
            <img src={logo} class="battlebot_logo"></img>
            
            
            <h3>ROBOT<span>BATTLES</span></h3>

            <p class="footer-links">
                <a href="#">Home &nbsp; </a>
                |
                <a href="#">&nbsp; About &nbsp;</a>
                |
                <a href="#">&nbsp; Contact &nbsp;</a>
                |
                <a href="#">&nbsp; Blog &nbsp;</a>
            </p>

            <p class="footer-company-name">Copyright © 2024 <strong>ECSC Club</strong> All rights reserved</p>
        </div>

        <div class="footer-center">
            <div>
                <i><ImLocation2 /></i>
                <p><span>Faculty of Science</span>
                    University of Kelaniya</p>
            </div>

            <div>
                <i ><ImPhone /></i>
                <p>(+94) 12 345 6789</p>
            </div>
            <div>
                <i ><ImMail2 /></i>
                <p><a href="mailto:ecs.uok@gmail.com">ecs.uok@gmail.com</a></p>
            </div>
        </div>
        <div class="footer-right">
            <p class="footer-company-about">
                <span>About the UOK Robot Battle</span>
                <strong>UOK</strong> First-ever robotic battle experience brought to you by the Electronics and Computer Science Club, University of Kelaniya.
            </p>
            <div class="footer-icons">
                <a href="#"><i ><IoLogoFacebook /></i></a>
                <a href="#"><i ><IoLogoInstagram /></i></a>
                <a href="https://www.linkedin.com/company/uokrobotbattles/posts/?feedView=all"><i class="fa fa-linkedin"><ImLinkedin /></i></a>
                <a href="#"><i ><ImTwitter /></i></a>
                <a href="#"><i ><ImYoutube /></i></a>
            </div>
        </div>
    </footer>
  )
}

export default App
