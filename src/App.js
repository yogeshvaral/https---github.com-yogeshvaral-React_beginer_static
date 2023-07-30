import './style.css';
import Navbar from './components/airbnb/Navbar';
import Card from './components/airbnb/Card';
import Contact from './components/airbnb/Contact';
import sachin from "./images/sachin_image.jpg" 
import star from "./images/star.png"
import ArrayTest from './components/airbnb/Arraytest';
import Cards from './components/airbnb/Cards';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Card img={sachin} star_image={star} rating={5.6} review_count={5} country="USA" title="Number 1 player" price={136} />
      <Contact img={sachin} name='yogesh' phone='9540321984' email='yogeshvaralhdp@gmail.com'/>
      <ArrayTest/>
      <Cards/>
    </div>
  );
}

export default App;
