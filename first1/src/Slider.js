import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

function Slider() {

    return(
      <>

      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 img2"
          src={require('./image/2.jpeg')}
          alt="First slide"
        />
        <div className="carousel-caption">
          <p className='f1'>Simple & Modern</p>
          <p className='f2'>Furniture</p>
          <span className='f3'> 60%</span>
          <p className='f4'>Off Everything</p>
          <button className='f5'>ADD TO CART</button>
          <button className='f6'>SHOP NOW</button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img2"
          src={require('./image/3.jpeg')}
          alt="Second slide"
        />
        <div className="carousel-caption">
          <p className='f1'>Drawing Room </p>
          <p className='f2'>Inoterior</p>
          <span className='f3'> 70%</span>
          <p className='f4'>Off Everything</p>
          <button className='f5'>ADD TO CART</button>
          <button className='f6'>SHOP NOW</button>
        </div>

      </Carousel.Item>
    </Carousel>
     
      </>
        
    );
    
}
export default Slider;