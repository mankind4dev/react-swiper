import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Sliders() {
  return (
    < >
        <div className="team-box team-bo1">
            <div className="team-name">
                <center>
                    <div className="team-content">
                        <h2>Abisola Ogunmakin</h2>
                        <p>Fontend Developer</p>
                        <FaLinkedin className="logo-linkedin"/>
                        <FaGithub className="logo-github"/>
                        <FaTwitter className="logo-twitter"/>
                        <FaInstagram className='logo-instagram'/>
                        <FaFacebook className='logo-facebook'/>
                    </div>
                </center>
            </div>
        </div>
    </>
  )
}
