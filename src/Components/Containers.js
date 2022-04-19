import { useState , useEffect} from "react";
import ProjectCard from "../Components/projectCard/ProjectCard";
import "../Components/container.scss";
import alertify from "alertifyjs";
import { sendPsudoMail } from "../firebase/firebase.util";
import { AnimationOnScroll } from 'react-animation-on-scroll';

// import "animate.css/animate.min.css";
// import ScrollAnimation from 'react-animate-on-scroll';


const Projects = [
  {
    heading: "PosterFever.in",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-c4ba1.appspot.com/o/projectImages%2Fposterfever.png?alt=media&token=3968f5bd-46bc-4492-bd2b-eecd9eb7705b",
    tech: ["ReactJS", "Redux", "Firebase"],
    shortDiscription: "eCommerce website made using ReactJS and Firebase",
    repo: "https://github.com/iamsachin619/PosterFever"
    // discription:
    //   "https://raw.githubusercontent.com/iamsachin619/PosterFever/main/README.md"
  },
  {
    heading: "Link-in-bio",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-c4ba1.appspot.com/o/projectImages%2Flink-in-bio.png?alt=media&token=5b80cba5-ac48-4c5e-96c8-8cd3e60fbce6",
    tech: ["ReactJS", "Redux", "Firebase"],
    shortDiscription:
      "Link-in-bio is a app which  creates a link based landing page",
    repo: "https://github.com/iamsachin619/link-in-bio"
  },
  {
    heading: "Weather-App",

    tech: ["ReactJS", "Redux", "RESTapi", "JavaScript"],
    shortDiscription: "App to get weather reports",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-c4ba1.appspot.com/o/projectImages%2Fweather-app.png?alt=media&token=612485e5-481e-4a33-9c61-c652239bc8e4",
    repo: "https://github.com/iamsachin619/weather-app"
  },
  {
    heading: "Decentralized Exchange",

    tech: ["ReactJS", "Redux", "Moralis", "1inchAPI"],
    shortDiscription: "App to Swap Crypto Tokens",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-c4ba1.appspot.com/o/projectImages%2Fdex-react.png?alt=media&token=d0ddc938-a971-4cf2-ba46-f35761215502",
    repo: "https://github.com/iamsachin619/dex-react"
  }
];
export default function Container() {
  const [showMore, setShowMore] = useState(false);
  // const numberToShow = 4;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // useEffect(()=>{
  //   window.addEventListener('load', AOS.refresh)
  // })
  return (
    <div class="container">
      <div class="row">
        <div className="downloadContainer">
          <i class="fa fa-download"></i>&nbsp;Download Resume / CV
        </div>
        <div class="col-xs-12">
        <AnimationOnScroll animateIn="animate__fadeInUp" duration={0.65}>

        
          <div class="card" >
            <div class="card-block" >
              <h2>About me</h2>
              <div class="row">
                <div class="col-md-4">
                  <p>
                    <img
                      src="https://avatars.githubusercontent.com/u/67550112?v=4"
                      class="img-responsive"
                      alt=""
                    />
                  </p>
                </div>
                <div class="col-md-8 about">
                  <p>
                    I am a Full Stack Web Developer with experience in
                    developing Web Apps using various teach stack such as MERN,
                    PERN and Cloud Based with the help of Firebase and AWS. I
                    have been teaching myself how to make websites since I was
                    14, I started out with HTML, CSS. Later on, I learned how to
                    code in Javascript - which is what most websites are built
                    on today. Long story short I devloped a passion to create
                    applications which solves problems and helps build a better
                    future. I enjoy solving problems and implementing the
                    solution in code.
                  </p>

                  <p>
                    I am looking for an opportunity to work with someone who can
                    help me grow in my skills and knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeInUp" duration={0.65}>
          <div class="card">
            <div class="card-block">
              <h2>Technical Skills</h2>

              {/* <img
                    src="./assets/images/img-02.jpg"
                    class="img-responsive"
                    alt=""
                  />
                  <h3 class="h5">PosterFever.in</h3>
                  <p>Dec 2021</p> */}
              <div className="iconContainer">
                <i className="icon devicon-html5-plain-wordmark colored"></i>
                <i className="icon devicon-sass-original colored"></i>
                <i className="icon devicon-javascript-plain colored"></i>
                <i className="icon devicon-react-plain-wordmark colored"></i>
                <i className="icon devicon-redux-original colored"></i>

                <i className="icon devicon-firebase-plain-wordmark colored"></i>
                <i className="icon devicon-nodejs-plain-wordmark colored"></i>
                <i className="icon devicon-github-original-wordmark colored"></i>
                <i className="icon devicon-bootstrap-original-wordmark colored"></i>
              </div>
            </div>
          </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp" duration={0.65}>
          <div class="card" data-aos="fade-up">
            <div class="card-block">
              <h2>Projects</h2>

              <div class="projectContainer">
                {/* <img
                    src="./assets/images/img-02.jpg"
                    class="img-responsive"
                    alt=""
                  />
                  <h3 class="h5">PosterFever.in</h3>
                  <p>Dec 2021</p> */}
                {Projects
                  // .slice(0, numberToShow)
                  .map((project) => {
                    return <ProjectCard project={project} />;
                  })}
              </div>
              {/* {showMore ? (
                <div className="showMeBtnContainer">
                  <button
                    className="showMeBtn"
                    onClick={() => {
                      setShowMore(false);
                    }}
                  >
                    Show Less
                  </button>
                </div>
              ) : (
                <div className="showMeBtnContainer">
                  <button
                    className="showMeBtn"
                    onClick={() => {
                      setShowMore(true);
                    }}
                  >
                    Show More
                  </button>
                </div>
              )} */}
              {/* <div className="showMeBtnContainer">
                <button
                  className="showMeBtn"
                  onClick={() => {
                    //to projects page
                  }}
                >
                  See More
                </button>
              </div> */}
            </div>
          </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp" duration={0.65}>
          <div class="card" data-aos="fade-up">
            <div class="card-block">
              <h2>Certificates</h2>

              {/* <img
                    src="./assets/images/img-02.jpg"
                    class="img-responsive"
                    alt=""
                  />
                  <h3 class="h5">PosterFever.in</h3>
                  <p>Dec 2021</p> */}
              <div className="CertContainer">
                <div className="CertificateCard">
                  <img
                    src="https://i.postimg.cc/CLZtQRTh/Java-Algo.png"
                    className="certImg"
                    alt="Avatar"
                  />
                  <div className="certContent">
                    <h3>JavaScript Algorithms and Data Structures</h3>
                    <p>by freeCodeCamp</p>
                  </div>
                </div>

                <div className="CertificateCard">
                  <img
                    src="https://i.postimg.cc/G3zdC85v/Responsive-Web-Design.png"
                    className="certImg"
                    alt="Avatar"
                  />
                  <div className="certContent">
                    <h3>Responsive Web Design</h3>
                    <p>by freeCodeCamp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp" duration={0.65}>
          {/* <div class="card" data-aos="fade-up">
            <div class="card-block">
              <h2>Work</h2>
              <div class="work-experience">
                <small class="date">2017-2015</small>
                <h3 class="h5 date-title">
                  Web developer -
                  <a
                    href="http://en.orson.io"
                    title="Create professionnal website"
                  >
                    Orson.io
                  </a>
                </h3>

                <p>
                  Leo vel orci porta non pulvinar neque laoreet suspendisse
                  interdum. Vitae ultricies leo integer malesuada nunc.
                  Imperdiet proin fermentum leo vel orci porta non pulvinar
                  neque. Fermentum leo vel orci porta non. Posuere sollicitudin
                  aliquam ultrices sagittis. Aliquam faucibus purus in massa
                  tempor nec.
                </p>
              </div>

              <div class="work-experience">
                <small class="date">2017-2015</small>
                <h3 class="h5 date-title">
                  Web developer -
                  <a href="http://mashup-template.com" title="">
                    Mashup Template
                  </a>
                </h3>

                <p>
                  Fermentum leo vel orci porta non. Posuere sollicitudin aliquam
                  ultrices sagittis. Aliquam faucibus purus in massa tempor nec.
                </p>
              </div>
            </div>
          </div> */}
  </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp" duration={0.65}>
          <div class="card" data-aos="fade-up">
            <div class="card-block">
              <h2>Education</h2>
              <div class="row">
                <div class="col-md-4">
                  <div class="education-experience">
                    <small class="date">2015</small>
                    <h3 class="h5 date-title">
                      SSC <br />
                      Maharashtra Board
                    </h3>
                    <p>MBBI Educational Academy</p>
                  </div>
                  <hr />
                </div>

                <div class="col-md-4">
                  <div class="education-experience">
                    <small class="date">2017</small>
                    <h3 class="h5 date-title">
                      HSC - Science (PCM) <br />
                      with Computer Science
                    </h3>
                    <p>Mehernosh Junior College</p>
                  </div>
                  <hr />
                </div>
                <div class="col-md-4">
                  <div class="education-experience">
                    <small class="date">2020</small>
                    <h3 class="h5 date-title">
                      Bachelor of Science <br />
                      in Visual Graphics
                    </h3>
                    <p>Amity University</p>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp" duration={0.65}>
          <div class="card" data-aos="fade-up">
            <div class="card-block">
              <h2>Language</h2>
              <div class="row">
                <div class="col-md-4">
                  <div class="language-experience">
                    <h3 class="h5">
                      English :<small>Bilingual</small>
                    </h3>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="language-experience">
                    <h3 class="h5">
                      Hindi :<small>Fluent</small>
                    </h3>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="language-experience">
                    <h3 class="h5">
                      Spanish :<small>Beginner</small>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div class="card" data-aos="fade-up">
            <div class="card-block">
              <h2>Projects</h2>
              <div
                id="carousel-example-generic"
                class="carousel slide"
                data-ride="carousel"
              >
                <div class="carousel-inner" role="listbox">
                  <div class="item active">
                    <img
                      src="./assets/images/img-05.jpg"
                      class="img-responsive"
                      alt="..."
                    />
                    <div class="carousel-caption">
                      <h3 class="h5">Jules for Bastion</h3>
                      <p>2017</p>
                    </div>
                  </div>
                  <div class="item">
                    <img
                      src="./assets/images/img-06.jpg"
                      class="img-responsive"
                      alt="..."
                    />
                    <div class="carousel-caption">
                      <h3 class="h5">Shop List</h3>
                      <p>Sept 2021</p>
                    </div>
                  </div>

                  <div class="item">
                    <img
                      src="./assets/images/img-08.jpg"
                      class="img-responsive"
                      alt="..."
                    />
                    <div class="carousel-caption">
                      <h3 class="h5">Jules for Bastion</h3>
                      <p>2017</p>
                    </div>
                  </div>
                </div>

                <ol class="carousel-indicators">
                  <li
                    data-target="#carousel-example-generic"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#carousel-example-generic"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carousel-example-generic"
                    data-slide-to="2"
                  ></li>
                </ol>
              </div>
            </div>
          </div> */}
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp" duration={0.65}>
          <div class="card" data-aos="fade-up">
            <div class="card-block">
              <h2>Networks</h2>
              <div class="row">
                <div class="col-md-3">
                  <p class="social-buttons">
                    <a
                      href="https://www.linkedin.com/in/sachinsingh99"
                      title=""
                      target="#"
                    >
                      <span class="social-round-icon fa-icon">
                        <i class="fa fa-linkedin"></i>
                      </span>
                      /sachinsingh99
                    </a>
                  </p>
                </div>

                <div class="col-md-3">
                  <p class="social-buttons">
                    <a
                      href="https://github.com/iamsachin619"
                      title=""
                      target="#"
                    >
                      <span class="social-round-icon fa-icon">
                        <i class="fa fa-github"></i>
                      </span>
                      /iamsachin619
                    </a>
                  </p>
                </div>
                <div class="col-md-3">
                  <p class="social-buttons">
                    <a
                      href="https://twitter.com/iamsachin619"
                      title=""
                      target="#"
                    >
                      <span class="social-round-icon fa-icon">
                        <i class="fa fa-twitter"></i>
                      </span>
                      /iamsachin619
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp" duration={0.65}>
          <div class="card" data-aos="fade-up">
            <div class="card-block">
              <h2>Contact</h2>
              <form action="" class="reveal-content">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="subject"
                    placeholder="Subject"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    rows="5"
                    id="messageContext"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      const email = document.getElementById("email").value;
                      const sub = document.getElementById("subject").value;
                      const message = document.getElementById("messageContext")
                        .value;
                      if (email && sub && message) {
                        //send email
                        sendPsudoMail({ email, sub, message });
                        alertify.success("Message sent!");
                        //clear form
                        document.getElementById("email").value = "";
                        document.getElementById("subject").value = "";
                        document.getElementById("messageContext").value = "";
                      } else {
                        alertify.error("All fields are required!");
                      }
                    }}
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
          </AnimationOnScroll>
          
          <div className="downloadContainer bottomOne">
            <i class="fa fa-download"></i>&nbsp;Download Resume / CV
          </div>
        </div>
      </div>
    </div>
  );
}
