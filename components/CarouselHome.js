import { Carousel, CarouselItem } from 'react-bootstrap'
import Image from 'next/image'

export default function CarouselHome() {
    return (
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="001.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="002.jpg"
      alt="Third slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="003.jpg"
      alt="Third slide"
    />

    
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="004.jpg"
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
    )
}