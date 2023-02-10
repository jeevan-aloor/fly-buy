import Carousel from 'react-bootstrap/Carousel';
import "./Slider.css"
import { Image } from '@chakra-ui/react';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
      <Image
          className="d-block w-100"
          src="https://admin.mochishoes.com/banner/1670318632DESKTOP-BANNER_MOCHI_1600X623PX_MEN.jpg"
          alt="Second slide"
          height={{md:"500px",sm:"400px",base:"300px"}}
        />
       
        
      </Carousel.Item>
      <Carousel.Item>
      <Image
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60"
           height={{md:"500px",sm:"400px",base:"300px"}}
        />
       

       
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0046/3454/2129/files/Couple_1920x667_c26e26da-a37d-4e24-9c8e-ad815e1e4950.jpg?v=1641811299"
          alt="Third slide"
           height={{md:"500px",sm:"400px",base:"300px"}}
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="https://cdn.shopclues.com/images/banners/UltimateSmartphones_M_T_HB_W.jpg"
          alt="fourth slide"
           height={{md:"500px",sm:"400px",base:"300px"}}
        />

        
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Slider;