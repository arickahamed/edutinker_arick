import "./App.css";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";
import Header from './components/header/Header';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
