
import Selfie from "../../../images/Selfie.jpg";
import "./Introduction.css";

function Introduction() {
  return (
    <>
      <div className="home-landing">
        <img className="profile-image" src={Selfie} />

        <div className="title-position">
          <h1 className="name">Quaid Tahir</h1>
          <h3 className="job-title">Software Engineer</h3>
        </div>
      </div>

      <div className="home-introduction">
        <p>
          Hello World! I'm Quaid Tahir, and I'm deeply passionate about software
          development and the endless possibilities it offers. Learning is at
          the core of my journey, and I thrive on exploring new technologies and
          pushing my boundaries to achieve greater heights.
        </p>

        <p>
          My ambition knows no bounds, and I'm driven by a curiosity that fuels
          my enthusiasm for artificial intelligence (AI). I see AI not just as a
          field of study but as a powerful tool with the potential to
          revolutionize industries and enhance our lives in meaningful ways.
        </p>

        <p>
          Fuelled by an insatiable thirst for knowledge and a deep-rooted
          passion for innovation, I am on an exhilarating journey to unravel the
          mysteries of software development and AI. Every discovery, every
          breakthrough, ignites my curiosity and drives me to explore new
          frontiers, eager to harness the transformative power of technology and
          make a profound impact on the world.
        </p>

        <p>
          The portfolio presented below provides an intimate glimpse into my
          evolving journey and accomplisw\wS.hments.
        </p>
      </div>
    </>
  );
}

export default Introduction;
