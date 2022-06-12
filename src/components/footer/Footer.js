import {
    AiOutlineInstagram,
    AiOutlineMail,
    AiOutlineTwitter
} from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { GrFacebookOption, GrLinkedinOption, GrLocation } from "react-icons/gr";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer_container">
            <div className="footer_content">
                <div className="row">
                    <h4>Company</h4>
                    <p>Features</p>
                    <p>About</p>
                    <p>Career</p>
                    <p>Contact</p>
                </div>
                <div className="row">
                    <h4>Resources</h4>
                    <p>CSBC Syllabus</p>
                    <p>CSBC Book</p>
                    <p>Skill IQ</p>
                    <p>Partner Programme</p>
                    <p>Authors</p>
                </div>
                <div className="row">
                    <h4>Legal</h4>
                    <p>Privacy Policy</p>
                    <p>Terms and Condition</p>
                    <p>Cookies Policy</p>
                    <p>Disclaimer</p>
                </div>
                <div className="row">
                    <h4>Get In Touch</h4>
                    <div className="footer_icon_info">
                        <div className="footer_icon">
                            <GrLocation />
                        </div>
                        <p>
                            9 Raffles Place, #06-01 <br />
                            Republic Plaza, Singapore 048619{" "}
                        </p>
                    </div>
                    <div className="footer_icon_info">
                        <div className="footer_icon">
                            <BsTelephone />
                        </div>
                        <p>1-702-800-2690 (Support)</p>
                    </div>
                    <div className="footer_icon_info">
                        <div className="footer_icon">
                            <AiOutlineMail />
                        </div>
                        <p>support@edutinker.com</p>
                    </div>
                    <div className="footer_last_icon">
                        <GrFacebookOption />
                        <AiOutlineInstagram />
                        <GrLinkedinOption />
                        <AiOutlineTwitter />
                    </div>
                </div>
            </div>
            <div className="logo_footer">
                {" "}
                <h2>
                    {" "}
                    eduTinker <sup className="logo_tm">TM</sup>
                </h2>
                <div className="logo_footer_info">
                    <p className="border-right pb">Privacy Policy</p>
                    <p className="border-right pb">Terms of Services</p>
                    <p className="pb">All rights reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
