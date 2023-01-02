import Carousel from "react-bootstrap/Carousel";

function CarouselWeb() {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img className="image1 d-block" src="https://berita.teknologi.id/images/?path=https://berita.teknologi.id/uploads/article/1618580229_poseter 3.png" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="image2 d-block" src="https://www.osnipa.com/wp-content/uploads/2021/10/image-57.png" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="image3 d-block" src="https://i.pinimg.com/564x/06/14/e0/0614e0fe8221a4261f97fe36e7410bad.jpg" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselWeb;
