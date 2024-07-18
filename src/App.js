import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Mission from "./components/Mission/Mission"
import Footer from "./components/Footer/Footer"
import Carousel from "./components/carousel/carousel"
import Campaign from "./components/Campaign/Campaign";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <Mission/>
      <Campaign/>
      <Footer/>
    </div>
  );
}

export default App;
