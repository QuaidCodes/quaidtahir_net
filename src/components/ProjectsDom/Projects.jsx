import FeaturedProject from "./FeaturedProject/FeaturedProject";
import ProjectCard from "./ProjectCard/ProjectCard";

import "./Projects.css";

function Projects() {
  const data = [
    {
      id: 1,
      name: "Banking System",
      description:
        "A software system designed to manage financial transactions, customer accounts, and banking operations.",
      bullet1: "Secure online banking features.",
      bullet2: "Account management and transaction tracking.",
    },
    {
      id: 2,
      name: "POS System",
      description:
        "A point-of-sale system used in retail businesses to process sales transactions, manage inventory, and generate sales reports.",
      bullet1: "Efficient checkout process.",
      bullet2: "Inventory management and sales analytics.",
    },
    {
      id: 3,
      name: "Blogging Site",
      description:
        "A platform for creating and publishing blog posts, articles, and other written content.",
      bullet1: "User-friendly content creation tools.",
      bullet2: "Commenting and social sharing features.",
    },
    {
      id: 4,
      name: "Social Media",
      description:
        "An online platform for social networking, connecting users with friends, family, and communities.",
      bullet1: "Profile creation and customization.",
      bullet2: "News feeds, likes, and comments.",
    },
    {
      id: 5,
      name: "Inventory System",
      description:
        "A software application used to track and manage inventory levels, orders, and stock availability.",
      bullet1: "Real-time inventory tracking.",
      bullet2: "Order management and reporting tools.",
    },
  ];

  return (
    <section className="projects">
      <FeaturedProject />

      <div className="project-cards">
        {data.map((item) => (
          <ProjectCard
            key={item.id}
            name={item.name}
            description={item.description}
            bullet1={item.bullet1}
            bullet2={item.bullet2}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
