import Carousel from 'react-bootstrap/Carousel';

const HeroCarousel = () => {
  return (
    <Carousel className="hero-carousel" fade interval={3000} controls={true} indicators={true}>
      <Carousel.Item>
        <img src="/banner1.png" alt="Banner Glucon 1" />
      </Carousel.Item>

      <Carousel.Item>
        <img src="/banner2.png" alt="Banner Glucon 2" />
      </Carousel.Item>

      <Carousel.Item>
        <img src="/banner3.png" alt="Banner Glucon 3" />
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroCarousel;