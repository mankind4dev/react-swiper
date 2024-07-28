import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Sliders from "./components/Sliders";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { logo } from "./assets";

export default function App() {
  return (
    <>
      <center className="header">
        <img src={logo} alt="" />
        <h1>My Professionals Team work</h1>
      </center>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: -100,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
      >
        <SwiperSlide>
          <div className="team-box team-bo1">
            <div className="team-name">
              <center>
                <div className="team-content">
                  <h2>Abisola Ogunmakin</h2>
                  <p>Fontend Developer</p>
                  <FaLinkedin className="logo-linkedin" />
                  <FaGithub className="logo-github" />
                  <FaTwitter className="logo-twitter" />
                  <FaInstagram className="logo-instagram" />
                  <FaFacebook className="logo-facebook" />
                </div>
              </center>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="team-box team-bo2">
            <div className="team-name">
              <center>
                <div className="team-content">
                  <h2>Temidayo Ogunmakin</h2>
                  <p>Fashion Designer</p>
                  <FaLinkedin className="logo-linkedin" />
                  <FaGithub className="logo-github" />
                  <FaTwitter className="logo-twitter" />
                  <FaInstagram className="logo-instagram" />
                  <FaFacebook className="logo-facebook" />
                </div>
              </center>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="team-box team-bo3">
            <div className="team-name">
              <center>
                <div className="team-content">
                  <h2>Abiola Agboroode</h2>
                  <p>Data Analysis</p>
                  <FaLinkedin className="logo-linkedin" />
                  <FaGithub className="logo-github" />
                  <FaTwitter className="logo-twitter" />
                  <FaInstagram className="logo-instagram" />
                  <FaFacebook className="logo-facebook" />
                </div>
              </center>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="team-box team-bo4">
            <div className="team-name">
              <center>
                <div className="team-content">
                  <h2>Daniel Oluwadare</h2>
                  <p>Backend Developer</p>
                  <FaLinkedin className="logo-linkedin" />
                  <FaGithub className="logo-github" />
                  <FaTwitter className="logo-twitter" />
                  <FaInstagram className="logo-instagram" />
                  <FaFacebook className="logo-facebook" />
                </div>
              </center>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="team-box team-bo5">
            <div className="team-name">
              <center>
                <div className="team-content">
                  <h2>Adebanke Ojufun</h2>
                  <p>Product Manager</p>
                  <FaLinkedin className="logo-linkedin" />
                  <FaGithub className="logo-github" />
                  <FaTwitter className="logo-twitter" />
                  <FaInstagram className="logo-instagram" />
                  <FaFacebook className="logo-facebook" />
                </div>
              </center>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="team-box team-bo6">
            <div className="team-name">
              <center>
                <div className="team-content">
                  <h2>Dolapo Adebayo</h2>
                  <p>Data Analysis</p>
                  <FaLinkedin className="logo-linkedin" />
                  <FaGithub className="logo-github" />
                  <FaTwitter className="logo-twitter" />
                  <FaInstagram className="logo-instagram" />
                  <FaFacebook className="logo-facebook" />
                </div>
              </center>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="team-box team-bo7">
            <div className="team-name">
              <center>
                <div className="team-content">
                  <h2>Temidayo Ogunmakin</h2>
                  <p>Fashion Designer</p>
                  <FaLinkedin className="logo-linkedin" />
                  <FaGithub className="logo-github" />
                  <FaTwitter className="logo-twitter" />
                  <FaInstagram className="logo-instagram" />
                  <FaFacebook className="logo-facebook" />
                </div>
              </center>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="team-box team-bo8">
            <div className="team-name">
              <center>
                <div className="team-content">
                  <h2>Taiwo Oladele</h2>
                  <p>Graphic Designer</p>
                  <FaLinkedin className="logo-linkedin" />
                  <FaGithub className="logo-github" />
                  <FaTwitter className="logo-twitter" />
                  <FaInstagram className="logo-instagram" />
                  <FaFacebook className="logo-facebook" />
                </div>
              </center>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="team-box team-bo9">
            <div className="team-name">
              <center>
                <div className="team-content">
                  <h2>Omowunmi Oke</h2>
                  <p>Product Manager</p>
                  <FaLinkedin className="logo-linkedin" />
                  <FaGithub className="logo-github" />
                  <FaTwitter className="logo-twitter" />
                  <FaInstagram className="logo-instagram" />
                  <FaFacebook className="logo-facebook" />
                </div>
              </center>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
