import HeaderBottom from '../headerBottom/HeaderBottom';
import HeroSection from '../hero/HeroSection';
import Navigation from '../navigation/Navigation';
import './Header.css';
const Header = () => {
    return (
        <div className="header_container">
            <Navigation />
            <HeroSection />
            <HeaderBottom />
        </div>
    );
};

export default Header;