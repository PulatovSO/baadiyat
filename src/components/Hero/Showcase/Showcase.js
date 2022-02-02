import { StyledShowcase } from "./styled/Showcase.styled";
import CarouselSlide from "./CarouselSlide/CarouselSlide";
import { useState } from 'react'

const Showcase = () => {

  const [slide, setSlide] = useState(0);

  const slideFunc = (e) => {
    if (e.target.name === 'one') setSlide(0)
    else if (e.target.name === 'two') setSlide(-100)
    else if (e.target.name === 'three') setSlide(-200)
    else if (e.target.name === 'four') setSlide(-300)
  }
  
  console.log(slide);

  return (
    <StyledShowcase slide={slide} bg="red" >
      <div className="showcase-carousel">
        <div className="carousel-buttons">
          <button onClick={slideFunc} className="carousel-btn" name="one" type="button"></button>
          <button onClick={slideFunc} className="carousel-btn" name="two" type="button"></button>
          <button onClick={slideFunc} className="carousel-btn" name="three" type="button"></button>
          <button onClick={slideFunc} className="carousel-btn" name="four" type="button"></button>
        </div>
        <div className="carousel-wrap">
          <CarouselSlide className="carousel-one" />
          <CarouselSlide className="carousel-one" />
          <CarouselSlide className="carousel-one" />
          <CarouselSlide className="carousel-one" />
        </div>
      </div>
      <div className="search-wrap">
        <h3 className="search-header">Qidirish</h3>
        <div className="search-block">
          <input className="search-input" type="text" placeholder="Adiblar, kitoblar, audiolar, maqolalar..." />
          <button className="search-btn" type="button"> <i class='bx bx-search-alt' ></i> Izlash</button>
        </div>
      </div>
    </StyledShowcase>
  )
}

export default Showcase;