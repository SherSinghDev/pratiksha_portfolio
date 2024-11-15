import heroImg from "../../assets/pratiksha.png"
import { ReactTyped } from "react-typed";
import { open } from "../../store/slices/sidebarSlice"
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { beActive } from "../../store/slices/menu";
import { useEffect } from "react";

export default function Home() {
    const sidebar = useSelector((state) => state.sidebar)
    const dispatch = useDispatch()
    let homeStyle = !sidebar ? "section section-full home" : "section home";
    let barStyle = !sidebar ? "add-side" : "add-side  d-none";
    useEffect(()=>{
        dispatch(beActive("home"))
    })
    return (
        <>
            <section className={homeStyle}>
                <div className="main-box">
                    <div className={barStyle} onClick={() => dispatch(open())}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <div className="main-content">
                        <h1 className="main-head">Hello, my name is <span className="clicker">Pratiksha Thakur</span></h1>
                        <h1 className="main-head">I'm a <ReactTyped strings={["MERN Developer", "Backend Developer", "Frontend Developer"]} typeSpeed={80} backSpeed={40} loop /></h1>
                        <p className="para">I am a passionate Frontend Web Developer with a love for crafting clean, responsive, and user-friendly websites. I specialize in HTML, CSS, JavaScript, and modern frameworks like React, always focusing on delivering seamless experiences across devices. I’m constantly learning and experimenting with new technologies to build innovative and dynamic web applications. Take a look at my work, and let's create something amazing together!</p>
                        <Link to="/about"><button className="btn1">More About Me</button></Link>
                    </div>
                    <div className="hero-img">
                        <img src={heroImg} alt="img" />
                    </div>
                </div>
            </section>
        </>
    )
}