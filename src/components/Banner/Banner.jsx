import { register } from "swiper/element/bundle";
import { Img, PicWrapper, Section } from "./Banner.styled";

import car1 from "../../images/aston.jpg";
import car2 from "../../images/bmw.jpg";
import car3 from "../../images/sportback.jpg";

register();
const Banner = () => {
  return (
    <Section>
      <swiper-container
        speed="500"
        loop="true"
        navigation="true"
        autoplay="true"
      >
        <swiper-slide>
          <PicWrapper>
            <Img src={car1} alt="car1" />
          </PicWrapper>
        </swiper-slide>
        <swiper-slide>
          <PicWrapper>
            <Img src={car2} alt="car2" />
          </PicWrapper>
        </swiper-slide>
        <swiper-slide>
          <PicWrapper>
            <Img src={car3} alt="car3" />
          </PicWrapper>
        </swiper-slide>
      </swiper-container>
    </Section>
  );
};

export default Banner;
