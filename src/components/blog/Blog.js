import { Button, Card } from "react-bootstrap";
import cardImageOne from '../../images/card/card_image1.png';
import cardImageTwo from '../../images/card/card_image2.png';
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
                        <Card.Img style={{width: "100%"}} variant="top" src={cardImageOne} />
                        <Card.Body>
                            <Card.Title style={{fontWeight: 700}}>How can LMS help teachers to make classes interactive?</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="card_two same">
                    <Card style={{ width: "18rem" }}>
                        <Card.Img style={{width: "100%"}} variant="top" src={cardImageTwo} />
                        <Card.Body>
                            <Card.Title style={{fontWeight: 700}}>Top 6 reasons to adopt School Management System</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Blog;
