import one from '../../images/features/main_features/Frame.png';
import two from '../../images/features/main_features/time_management_image2.png';
import "./MainFeatures.css";

const MainFeatures = () => {
    return (
        <div className="main_features_container">
            <div className="top_part">
                <div className="images">
                    <img className='same_one' src={one} alt="one" />
                    <img className='same_one' src={two} alt="two" />
                </div>
                <div className="info">
                    <h2>
                        Single platform for all <br />
                        class-related communication
                    </h2>
                    <ul>
                        <li>Create class, add students, and chat with them</li>
                        <li>
                            anytime all from one place Real-time notifications
                        </li>
                        <li>
                            to students about online classes, assignments,
                            attendance, and study material Online live class
                        </li>
                        <li>
                            with features like a whiteboard, screen sharing, and
                            answering student query
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MainFeatures;
