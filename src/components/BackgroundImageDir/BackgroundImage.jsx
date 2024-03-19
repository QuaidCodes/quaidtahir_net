import image from "../../images/pexels-cottonbro-studio-8721343.jpg";
import "./BackgroundImage.css";

function BackgroundImage() {
  return (
    <>
      <img className="background-image" src={image} alt="sci-fi background" />
      <div className="background-overlay"></div>
    </>
  );
}

export default BackgroundImage;
