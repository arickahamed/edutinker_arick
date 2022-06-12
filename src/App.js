import "./App.css";
import Blog from "./components/blog/Blog";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Header from './components/header/Header';
import Reward from "./components/reward/Reward";

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Features />
      <Reward />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
