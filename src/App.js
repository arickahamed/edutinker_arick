import "./App.css";
import Blog from "./components/blog/Blog";
import Header from './components/header/Header';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Blog />
      <h3>edutinker</h3>
    </div>
  );
};

export default App;
