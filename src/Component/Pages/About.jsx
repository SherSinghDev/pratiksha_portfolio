import { useDispatch, useSelector } from "react-redux";
import { open } from "../../store/slices/sidebarSlice"
import { useEffect } from "react";
import { beActive } from "../../store/slices/menu";
import { Link } from "react-router-dom";
// import resumePath from "../../Documents/shersingh.pdf"

export default function About() {
    const sidebar = useSelector((state) => state.sidebar)
    const dispatch = useDispatch()
    let aboutStyle = !sidebar ? "section section-full about" : "section about";
    let barStyle = !sidebar ? "add-side" : "add-side d-none";
    useEffect(() => {
        dispatch(beActive("about"))
        
    })
    return (
        <>
            <section className={aboutStyle}>
                <div className="section-mainbox">
                    <div className={barStyle} onClick={() => dispatch(open())}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <h1 className="section-head">About Me</h1>
                    <h2 className="main-head">I'm Pratiksha Thakur A <span>Web Developer</span></h2>
                    <p className="para">Collaboration is key to my development process. I enjoy working in cross-functional teams, where I can contribute to every aspect of a project, from initial design discussions to final deployment. My goal is to create applications that not only meet business needs but also provide a seamless and engaging experience for users.</p>
                    <div className="container-fluid my-5">
                        <div className="row">
                            <div className="col personal-details mb-xl-0">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p><b>Birthday :</b> <span className="para">12 May 2004</span></p>
                                        <p><b>Website :</b> <span className="para"><a href="https://pratiksha-thakur-portfoliosite.netlify.app/">Visit</a></span></p>
                                        <p><b>Degree :</b> <span className="para">B.A</span></p>
                                        <p><b>City :</b> <span className="para">Sadabad, Mathura</span></p>
                                    </div>
                                    <div className="col-md-6" style={{ overflow: scroll }}>
                                        <p><b>Age :</b> <span className="para">20</span></p>
                                        <p className="d-flex flex-column"><b>Email :</b> <span className="para">pratikshathakur2003sky@gmail.com</span></p>
                                        <p><b>Phone :</b> <span className="para">+91 8006673446</span></p>
                                        <p><b>Freelance :</b> <span className="para">Available</span></p>
                                    </div>
                                    <div>
                                        <a href="https://drive.google.com/uc?export=download&id=1ZwqlvoWr-x36W0IsCxZcnNNaUnifgBLX"><button className="btn1" style={{ width: "fit-content" }}>Download CV</button></a>
                                        <Link to="/contact"><button className="btn1 ms-4" style={{ width: "fit-content" }}>Hire Me</button></Link>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-xl-5 mt-5 mt-md-3">
                                <div className="skills" style={{ height: "100%" }}>
                                    <div className="skill">
                                        <p><span><b>Ract Js</b></span> <span>40%</span></p>
                                        <div className="skill-bar react-bar"></div>
                                    </div>
                                    <div className="skill">
                                        <p><span><b>HTML</b></span> <span>95%</span></p>
                                        <div className="skill-bar"></div>
                                    </div>
                                    <div className="skill">
                                        <p><span><b>CSS</b></span> <span>95%</span></p>
                                        <div className="skill-bar"></div>
                                    </div>
                                    <div className="skill">
                                        <p><span><b>Bootstrap</b></span> <span>95%</span></p>
                                        <div className="skill-bar"></div>
                                    </div>
                                    <div className="skill">
                                        <p><span><b>JavaScript</b></span> <span>95%</span></p>
                                        <div className="skill-bar"></div>
                                    </div>
                                    <div className="skill">
                                        <p><span><b>JQuery</b></span> <span>95%</span></p>
                                        <div className="skill-bar"></div>
                                    </div>
                                    <div className="skill">
                                        <p><span><b>SQL</b></span> <span>95%</span></p>
                                        <div className="skill-bar"></div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="container-fluid py-5">
                        <div className="row">
                            <div className="col-md-6">
                                <h2 className="main-head">Education</h2>
                                <div className="achieve-box">
                                    <p className="para dot">2021-2024</p>
                                    <div className="sec-head">Bachlor's in Arts</div>
                                    <p className="para mb-5">I have Completed My Graduation From SSD girls degree College, which is affiliated to Raja Mahendra Pratap Universiy, Aligarh.
                                        and gain a 7.9 CGPA.
                                    </p>

                                    <p className="para dot">2021</p>
                                    <div className="sec-head">Intermediate</div>
                                    <p className="para mb-5">I have completed my intermediate from Ganga Inter College, Garhumrao with 79%.</p>
                                    <p className="para dot">2019</p>
                                    <div className="sec-head">High School</div>
                                    <p className="para">I have completed my High School from Ganga Inter College, Garhumrao with 81% marks.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h2 className="main-head">Experience</h2>
                                <div className="achieve-box">
                                    <p className="para dot">2013-2024</p>
                                    <div className="sec-head">Intern in Technosters</div>
                                    <p className="para mb-5">I am currently Doing an internship from Technosters IT Company.Here I am working on MERN Technology an gainig knowledge day by day. I am Enhancing my skills of React JS, Node JS, Jquery, Javascript,CSS and HTML. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}