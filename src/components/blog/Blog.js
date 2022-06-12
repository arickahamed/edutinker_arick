import { Button, Card } from "react-bootstrap";
import { AiFillLinkedin, AiOutlineClockCircle } from "react-icons/ai";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { MdCalendarViewMonth } from "react-icons/md";
import cardImageOne from "../../images/card/card_image1.png";
import cardImageTwo from "../../images/card/card_image2.png";
import "./Blog.css";

const Blog = () => {
    return (
        <div className="blog_container">
            <div className="blog_info">
                <h6>Blog</h6>
                <h2>We Love eduTinker</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    necessitatibus <br /> consequuntur aliquid quis repellendus
                    omnis architecto qui.
                </p>
            </div>

            {/* --------card section------------ */}
            <div className="card_holder">
                <div className="card_one same">
                    <Card style={{ width: "18rem" }}>
                        <Card.Img
                            style={{ width: "100%" }}
                            variant="top"
                            src={cardImageOne}
                        />
                        <Card.Body className="card_body">
                            <div className="top_icon ">
                                <p>eduTinker</p>
                                <div className="top_icon_div">
                                    <MdCalendarViewMonth />
                                    <p>24/12/21</p>
                                </div>
                                <div className="top_icon_div">
                                    <AiOutlineClockCircle />
                                    <p>4min ago</p>
                                </div>
                            </div>
                            <Card.Title style={{ fontWeight: 700 }}>
                                How can LMS help teachers to make classes
                                interactive?
                            </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </Card.Text>
                            <div className="btn_icon">
                                <Button variant="primary">Read More</Button>
                                <div className="icon">
                                    <AiFillLinkedin />
                                    <BsFacebook />
                                    <BsWhatsapp />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="card_two same">
                    <Card style={{ width: "18rem" }}>
                        <Card.Img
                            style={{ width: "100%" }}
                            variant="top"
                            src={cardImageTwo}
                        />
                        <Card.Body className="card_body">
                            <div className="top_icon ">
                                <p>eduTinker</p>
                                <div className="top_icon_div">
                                    <MdCalendarViewMonth />
                                    <p>24/12/21</p>
                                </div>
                                <div className="top_icon_div">
                                    <AiOutlineClockCircle />
                                    <p>4min ago</p>
                                </div>
                            </div>
                            <Card.Title style={{ fontWeight: 700 }}>
                                Top 6 reasons to adopt School Management System
                            </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </Card.Text>
                            <div className="btn_icon">
                                <Button variant="primary">Read More</Button>
                                <div className="icon">
                                    <AiFillLinkedin />
                                    <BsFacebook />
                                    <BsWhatsapp />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <p className="card_para">Read More</p>
        </div>
    );
};

export default Blog;
