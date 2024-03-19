import { Link } from "react-router-dom";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio-header-left">
        <h1 className="portfolio-name">Quaid Tahir</h1>
        <h2 className="portfolio-job-title">Software Engineer</h2>
      </div>

      <div className="portfolio-header-right">
        <p>New Jersey, USA</p>
        <a href="mailto:quaidtahirw@gmail.com">quaidtahirw@gmail.com</a>
        <Link to="/">www.quaidtahir.net</Link>
      </div>

      <div className="portfolio-content">
        <div className="portfolio-content-left">
          <h1 className="portfolio-sub-heading">Programming Skills</h1>
          <ul>
            <h2 className="portfolio-sub-heading-2">Pogramming Languages</h2>
            <li>HTML/CSS</li>
            <li>JavaScript/JSON</li>
            <li>Python</li>
            <li>C++</li>
            <li>Java</li>

            <h2 className="portfolio-sub-heading-2">Frameworks</h2>
            <li>React</li>
            <li>Django</li>

            <h2 className="portfolio-sub-heading-2">
              Additional Technical Skills
            </h2>
            <li>Linux Terminal</li>
            <li>Windows Command Line</li>
            <li>Git Versionioning</li>
            <li>Basic Network+</li>
          </ul>

          <h1 className="portfolio-sub-heading">Personal Projects and Goals</h1>
          <ul>
            <li>
              Designed, curated, and created a responsive and dynamic website
              with HTML/CSS/JavaScript and React Framework.
            </li>

            <li>
              Hosted the website on domain; quaidtahir.net with various hosting
              services like AWS E3, Github, and Bluehost.
            </li>

            <li>
              Developed, tested, and deployed various apps for beta testing.
            </li>

            <h2 className="portfolio-sub-heading-2"></h2>
            <li></li>
          </ul>
        </div>

        <div className="portfolio-content-right"></div>
      </div>

      <button>Download pdf</button>
    </section>
  );
}

export default Portfolio;
