import "./Navigation.css";

const Navigation = () => {
    return (
        <div className='navigation_container'>
            <div className="main_color logo">
                <h2>edu<span className='orange_color'>Tinker</span><sup className="small">TM</sup> </h2>
            </div>
            <nav className="navbar">
                <ul>
                    <li className="main_color">Home</li>
                    <li>Features</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Login</li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;