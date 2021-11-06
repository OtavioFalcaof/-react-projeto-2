import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/f5/25/6f/f5256f22b9dea5d4eb80c41f91f87793.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://1.bp.blogspot.com/-ccPQOydSoRg/XexcM4FsAqI/AAAAAAAAhfs/t9ND0-kwzSsPBWwgNPv9RnJj2Y2jzy5AACLcBGAsYHQ/s2560/lightning_4-wallpaper-2560x1440.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://data.1freewallpapers.com/download/colorful-clouds-abstract-4k-abstract-1600x900.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
