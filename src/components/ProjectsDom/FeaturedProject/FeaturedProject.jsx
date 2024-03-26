import projectImage from "../../../images/tara-winstead-AI.jpg";
import "./FeaturedProject.css";

function FeaturedProject() {
  const projectTitle = "A.I Chatbot Application";
  const description = "";

  return (
    <section className="featured-project">
      <h1>Featured Project</h1>
      <div className="featured-header">
        <img className="featured-image" src={projectImage} alt={projectTitle} />
        
        <div className="featured-project-content">
          <h1 className="featured-title">{projectTitle}</h1>
          <p>
            Our AI chatbot app is an advanced conversational platform developed
            using Python programming language and cutting-edge artificial
            intelligence (AI) technologies. This sophisticated application
            utilizes natural language processing (NLP) algorithms and machine
            learning models to understand and respond intelligently to user
            queries, mimicking human-like conversations.
          </p>

          <ul>
            <p> Key features of our AI chatbot app include:</p>
            <li>
              Natural Language Understanding: The chatbot comprehends natural
              language inputs, allowing users to interact with it in a
              conversational manner.
            </li>

            <li>
              Contextual Awareness: The app maintains context throughout the
              conversation, enabling it to provide relevant and personalized
              responses based on previous interactions.
            </li>

            <li>
              Machine Learning Capabilities: Leveraging machine learning models,
              the chatbot continuously learns from user interactions, improving
              its accuracy and effectiveness over time.
            </li>

            <li>
              Multi-platform Integration: The app can be integrated seamlessly
              across various platforms, including websites, messaging apps, and
              social media platforms, enhancing its accessibility and reach.
            </li>
          </ul>

          <p>
            Our AI chatbot app is designed to revolutionize customer service,
            streamline communication, and provide a personalized and engaging
            user experience.
          </p>
        </div>
      </div>
      <div className="featured-description">
        <p>{description}</p>
      </div>
    </section>
  );
}

export default FeaturedProject;
