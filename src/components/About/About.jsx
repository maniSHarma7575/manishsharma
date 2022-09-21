import React from "react";

const About = () => {
  return(
    <>
      <section id="about">
        <div className="container inner-container">
          <div className="intro scroll-in">
            <h2 className="section-title">Hello, I'm Manish Sharma <span className="title-icon">&#128578;</span></h2>
            <div className="section-subtitle">
              <p> I’m a self-taught Full-Stack Developer from India.</p>
              <p>
                I write code in Ruby On Rails and React. This is a place where I share my learnings.
              </p>
              <p>I also <a href="articles">write blogs</a> and I have my works published on <a
                  href="https://exploremanish.blogspot.com/" target="_blank" rel="noopener">Blogspot
                </a> and <a href="https://manishsharma.ml/blogs" target="_blank" rel="noopener">Blogs</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="history" class="container inner-container">
        <div className="container inner-container padding-top-0">
          <details open>
            <summary>
              <h2 class="subsection-title">
                History
              </h2>
            </summary>
            <div class="main-text">
              <p>
                I first started coding sometime in 2017 after taking a C course in my 1st year of university. The very
                first thing I built was a calculator
                and from then, I was
                hooked.
              </p>
              <p>
                I knew I enjoyed figuring out the logic behind creating applications but back then I was interested in learning
                mobile app development. Then I done the internship in Mobile app development. Developed a simple application which contains the login using twitter and facebook oAuth. That's how I started my career with development.
              </p>
              <p>
                After that I started exploring web devlopment. Then I started doing the internship in web development with php. I designed my own php MVC framework that time. And over the top of it built the email campaign application.
                Then I contributed to open source project build using laravel Employee Portal. Then I started exploring with React.
              </p>
              <p>
                After that I got my first job and started with the Ruby on Rails and React from there.
              </p>
              <p>
                I’m constantly trying to learn new technologies and concepts and I try to share my knowledge by <a
                  href="articles">writing
                  articles</a>.
              </p>
              <p>
                Currently, I’m learning webRTC and Media Servers.
              </p>
              <p>
                Thanks for reading &#128522;
              </p>
            </div>
          </details>
        </div>
      </section>
    </>
  )
}

export default About;