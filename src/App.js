import Navbar from "./components/Navbar/Navbar"
import './App.css';
import CoverPage from "./components/CoverPage/CoverPage"
import Mission from "./components/Mission/Mission"
import Campaign from "./components/Campaign/Campaign";
import Footer from "./components/Footer/Footer"
import Carousel from "./components/carousel/carousel"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <Mission/>
      <Footer/>
    </div>
  );
}

export default App;
