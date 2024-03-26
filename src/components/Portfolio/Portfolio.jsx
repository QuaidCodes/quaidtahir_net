import { Link } from "react-router-dom";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio-header">
        <h1 className="portfolio-name">Quaid Tahir</h1>
        <h2 className="portfolio-job-title">Software Engineer</h2>
      </div>

      <div className="portfolio-summary">
        <div className="professional-summary">
          Highly motivated Software Engineer pursuing a Bachelor of Science
          degree in Computer Science with expertise in Python, C++, Java,
          HTML/CSS, JavaScript, and React. Actively enhancing skills in Django,
          PyTorch, and TensorFlow to develop robust and scalable solutions.
          Proven ability to deliver efficient code and innovative solutions to
          complex technical challenges. Passionate about leveraging emerging
          technologies to drive continuous improvement and achieve business
          objectives.
        </div>
      </div>

      <div className="portfolio-content">
        <div className="portfolio-content-left">
          <ul>
            <div className="portfolio-content-sub-section">
              <h2 className="portfolio-sub-heading-2">Pogramming Languages</h2>
              <li>HTML/CSS</li>
              <li>JavaScript/JSON</li>
              <li>Python</li>
              <li>C++</li>
              <li>Java</li>
            </div>

            <div className="portfolio-content-sub-section">
              <h2 className="portfolio-sub-heading-2">Frameworks</h2>
              <li>React</li>
              <li>Django</li>
            </div>

            <div className="portfolio-content-sub-section">
              <h2 className="portfolio-sub-heading-2">
                Additional Technical Skills
              </h2>
              <li>Linux Terminal</li>
              <li>Windows Command Line</li>
              <li>Git Versionioning</li>
              <li>Basic Network+</li>
            </div>
          </ul>

          <div className="portfolio-content-sub-section">
            <h2 className="portfolio-sub-heading-2">Education</h2>

            <div>
              <h3>Bachelors of Science in Computer Science</h3>
              <strong>Western Governors University</strong>
              <p>Anticipated Graduation Date: March 2025</p>
            </div>

            <div>
              <h3>Associates of Science in Computer Science</h3>
              <strong>Queensborough Community College</strong>
              <p>Graduation Year 2022</p>
            </div>
          </div>

          <div className="portfolio-content-sub-section">
            <h2 className="portfolio-sub-heading-2">Certificates</h2>

            <h3>Foundation: Data, Data, Everywhere</h3>
            <p>Amazon, Coursera - 2022</p>

            <h3>Amazon Web Services</h3>
            <p>Amazon, Coursera 2021</p>
          </div>

          <div className="portfolio-contact-links portfolio-content-sub-section">
            <h2>Contact Links</h2>
            <div>
              <a href="mailto:quaidtahirw@gmail.com">quaidtahirw@gmail.com</a>
            </div>
            <div>
              <a href="https://github.com/QuaidCodes">
                https://github.com/QuaidCodes
              </a>
            </div>
            <div>
              <Link to="/">www.quaidtahir.net</Link>
            </div>
          </div>
        </div>

        <div className="portfolio-content-right">
          <h2 className="portfolio-sub-heading-2">Work Experience</h2>
          <div className="portfolio-content-sub-section">
            <h3>Amazon</h3>
            <p>IT Support Specialist</p>
            <p>Nov 2022 - Present</p>

            <div className="experience-margin">
              <p>
                Provided technical support to employees, troubleshooting
                hardware and software issues, and ensuring the smooth operation
                of IT systems. Collaborated with cross-functional teams to
                implement IT solutions and enhancements, improving efficiency
                and productivity within the organization.
              </p>

              <ul>
                <li>
                  Managed IT infrastructure, including hardware and software
                  installations, network configurations, and system upgrades to
                  ensure optimal performance and security.
                </li>
                <li>
                  Monitored and resolved IT tickets and service requests within
                  defined SLAs, providing timely and effective technical
                  assistance to internal stakeholders and minimizing downtime.
                </li>
              </ul>
            </div>
          </div>

          <div className="portfolio-content-sub-section">
            <h3>Portfolio Website Project</h3>
            <p>Dynamic portfolio created with React</p>
            <p>April 2024</p>

            <div className="experience-margin">
              <p>
                Developed a dynamic portfolio website using React to showcase
                skills and projects in an interactive and engaging manner.
                Implemented responsive design principles for optimal viewing
                across devices and optimized performance for a seamless user
                experience.
              </p>

              <ul>
                <li>
                  Implemented React components and state management techniques
                  to create a modular and scalable architecture for the
                  portfolio website, enhancing code reusability and
                  maintainability.
                </li>
                <li>
                  Implemented version control using Git and GitHub to track code
                  changes, and deploy updates seamlessly, ensuring a streamlined
                  development and deployment process.
                </li>
              </ul>
            </div>
          </div>

          <div className="portfolio-content-sub-section">
            <h3>Chatbot Desktop Application Project</h3>
            <p>Chatbot created using Python</p>
            <p>April 2024</p>

            <div className="experience-margin">
              <p>
                Designed and developed a chatbot desktop application using
                Python and natural language processing (NLP) techniques.
                Integrated machine learning algorithms to enhance chatbot
                accuracy and functionality, allowing realtime understanding and
                response to user queries.
              </p>

              <ul>
                <li>
                  Implemented a GUI (Graphical User Interface) using Tkinter in
                  Python for the chatbot desktop application, providing a
                  user-friendly interface for seamless interaction and
                  navigation
                </li>
                <li>
                  Utilized SQLite database to store and retrieve user
                  preferences and chat history, enhancing the chatbot's ability
                  to provide personalized responses and maintain conversation
                  context across sessions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-btn">
        <button>Download Word</button>
        <button>Download PDF</button>
      </div>
    </section>
  );
}

export default Portfolio;
