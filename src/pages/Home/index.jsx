import React, { useState } from "react";
import "./home.css";
import {
  desktopIcon,
  jobsData,
  navLinks,
  projectData,
  skillsData,
  socialLinks,
} from "../../json/db";

const Home = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      document.documentElement
        .requestFullscreen()
        .then(() => {
          setIsFullScreen(true);
        })
        .catch((err) => {
          console.error("Error attempting to enable full-screen mode:", err);
        });
    } else {
      document
        .exitFullscreen()
        .then(() => {
          setIsFullScreen(false);
        })
        .catch((err) => {
          console.error("Error attempting to exit full-screen mode:", err);
        });
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-page">
      <div className="main-background">
        <video width={320} height={240} loop autoPlay muted>
          <source src="./background-video.mp4" />
        </video>
      </div>
      <div className="personal-main-container">
        <div className="personal-container-row">
          <div className="left-side">
            <div className="left-side-header">
              {desktopIcon.map((ele) => {
                return (
                  <div
                    key={ele.id}
                    className="button-block"
                    style={{ backgroundColor: ele.bgColor }}
                    onClick={toggleFullScreen}
                  >
                    <img src={ele.icon} alt={ele.icon} />
                  </div>
                );
              })}
            </div>
            <div className="left-side-body hide-scrollbar">
              <div className="left-side-body-block">
                <p className="left-side-body-block-paragraph">Categories</p>
                <nav>
                  {navLinks.map((ele) => {
                    return (
                      <button
                        key={ele.id}
                        className="left-side-body-block-link"
                        onClick={() => scrollToSection(ele.link.replace("#", ""))}
                      >
                        <img src={ele.icon} alt={ele.title} />
                        <p>{ele.title}</p>
                      </button>
                    );
                  })}
                </nav>
              </div>
              <div className="left-side-body-block">
                <p className="left-side-body-block-paragraph">Social Links</p>
                <nav>
                  {socialLinks.map((ele) => {
                    return (
                      <a
                        key={ele.id}
                        href={ele.link}
                        target="blank"
                        className="left-side-body-block-link"
                      >
                        <img src={ele.icon} alt={ele.title} />
                        <p>{ele.title}</p>
                      </a>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="right-side-header">
              <img src="./avtar.jpg" alt="mukesh suthar avtar image" />
            </div>
            <div className="right-side-body hide-scrollbar">
              <div id="about" className="about-block">
                <div className="about-info-block">
                  <h1>Mukesh Suthar</h1>
                  <p>
                    Innovative and detail-oriented Web Developer with 3 years of
                    hands-on experience in building responsive,
                    high-performance, and user-friendly web applications.
                    Skilled in ReactJS, Bootstrap, Tailwind CSS, and modern
                    front-end workflows. Strong expertise in debugging,
                    cross-browser development, and UI/UX optimization.
                    Passionate about translating design into clean, scalable
                    code and delivering seamless digital experiences. Seeking to
                    contribute to a dynamic team and build impactful web
                    solutions.
                  </p>
                  <a
                    href={"./new-cv-2025.pdf"}
                    download
                    className="about-download-btn"
                  >
                    Download Resume
                  </a>
                </div>
                <img
                  src="./front-end-developer.png"
                  className="about-block-img"
                  alt=""
                />
              </div>
              <div id="skills" className="skills-block">
                <h4>My Skills</h4>
                <div className="skills-block-row">
                  {skillsData.map((ele) => {
                    return (
                      <div key={ele.id} className="skills-content">
                        <img src={ele.icon} alt={ele.title} />
                        <p>{ele.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div id="jobs" className="jobs-block">
                <h4>My Jobs</h4>
                <div className="jobs-block-row">
                  {jobsData.map((ele) => {
                    return (
                      <a
                        key={ele.id}
                        href={ele.companyLink}
                        target="blank"
                        className="jobs-content"
                      >
                        <div className="jobs-content-header">
                          <div className="jobs-content-header-left">
                            <img src={ele.companyLogo} alt={ele.title} />
                            <p>{ele.title}</p>
                          </div>
                          <div className="jobs-content-header-right">
                            <p>{ele.joiningDate}</p>
                          </div>
                        </div>
                        <div className="jobs-content-body">
                          {/* <p>{ele.companyOneLIne}</p> */}
                          <ul>
                            {ele.companyPoints.map((point) => {
                              return <li key={point.id}>{point.title}</li>;
                            })}
                          </ul>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
              <div id="projects" className="projects-block">
                <h4>My Projects</h4>
                <div className="projects-block-row">
                  {projectData.map((ele) => {
                    return (
                      <div key={ele.id} className="projects-content">
                        <h5>{ele.pTitle}</h5>
                        <p>{ele.pDesc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div id="educations" className="education-block">
                <h4>My Education</h4>
                <div className="education-block-row">
                  <div className="education-content">
                    <div className="education-content-left-block">
                      <img src="./bvu.png" alt="" />
                      <div>
                        <h5>Bachelor of Computer Application</h5>
                        <h6>Bharati Vidyapeeth Deemed University</h6>
                      </div>
                    </div>
                    <div className="education-content-right-block">
                      <p>2022 Oct – present</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
