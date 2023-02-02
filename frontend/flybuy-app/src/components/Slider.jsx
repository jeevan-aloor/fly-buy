import Carousel from 'react-bootstrap/Carousel';
import "./Slider.css"

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://admin.mochishoes.com/banner/1670318632DESKTOP-BANNER_MOCHI_1600X623PX_MEN.jpg"
          alt="Second slide"
          style={{height:"500px"}}
        />
       
        
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvzfflfMZ8nJZiHUqVu-i88wONm_jaqvmwOA&usqp=CAU"
          alt="First slide"
          style={{height:"500px"}}
        />
       

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0046/3454/2129/files/Couple_1920x667_c26e26da-a37d-4e24-9c8e-ad815e1e4950.jpg?v=1641811299"
          alt="Third slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopclues.com/images/banners/UltimateSmartphones_M_T_HB_W.jpg"
          alt="fourth slide"
          style={{height:"500px"}}
        />

        
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Slider;