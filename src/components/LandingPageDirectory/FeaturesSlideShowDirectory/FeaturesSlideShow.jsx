import "./FeaturesSlideShow.css";
import SlideShow from "./SlideShow";
import SlideShowButtons from "./SlideShowButtons";

function FeaturesSlideShow() {
    return <>
        <div className="features">
            <SlideShow />
            <SlideShowButtons />
        </div>
    </>
}

export default FeaturesSlideShow;