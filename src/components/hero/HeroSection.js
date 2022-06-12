import { BsPlayFill } from "react-icons/bs";
import roundCircle from "../../images/header/border_circle.png";
import smallImage from "../../images/header/small_image.png";
import "./HeroSection.css";

const HeroSection = () => {
    return (
        <div className="hero-section__container">
            {/* -------------hero section top part------------ */}
            <div className="hero-section__top ">
                <div className="top_left">
                    <h1 className="hero_heading">
                        eduTinker and your <br />
                        education
                    </h1>
                    <img
                        className="round_image"
                        src={roundCircle}
                        alt="circle"
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                        <br /> Sapiente eaque molestiae accusantium dicta quas
                        ut veritatis.
                    </p>
                </div>
            </div>

            {/* --------------hero section bottom part------------- */}
            <div className="hero-section__bottom ">
                <div className="bottom_left">
                    <div className="btn_holder">
                        <button className="book_btn">Book a Demo</button>
                    </div>
                    <div className="icon_holder">
                        <BsPlayFill />
                    </div>
                    <p>Watch how it works</p>
                </div>

                {/* -------bottom right--------- */}
                <div className="bottom_right">
                    <div className="one">
                        <div className="small_image__holder">
                            <img src={smallImage} alt="review" />
                        </div>
                        <div className="info">
                            <h5>English Class Schedule</h5>
                            <p className="info-para">Today at 12.00 am</p>
                            <div className="join_btn">
                            <button>Join Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="two">
                            <h5 className="congo">Congratulations</h5>
                            <p className="info-para congo-para">Your addmission completed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
