import one from "../../images/features/brand/top_school1.png";
import two from "../../images/features/brand/top_school2.png";
import three from "../../images/features/brand/top_school3.png";
import four from "../../images/features/brand/top_school4.png";
import five from "../../images/features/brand/top_school5.png";
import "./Brand.css";

const Brand = () => {
    return (
        <div className="brand_container">
            <div className="brand_details">
                <h3>Trusted by 400+ Schools Worldwide</h3>
                <div className="brand_image">
                    <img src={one} alt="brand-img-one" />
                    <img src={two} alt="brand-img-two" />
                    <img src={three} alt="brand-img-three" />
                    <img src={four} alt="brand-img-four" />
                    <img src={five} alt="brand-img-five" />
                </div>
            </div>
            <div className="brand_details_two">
                <h5>lms</h5>
                <h2>eduTinkers Core Features</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, nisi <br /> sunt? Voluptas aut hic nam repellendus omnis.</p>
            </div>
        </div>
    );
};

export default Brand;
