import React, { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { Box, Image } from '@chakra-ui/react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://img.freepik.com/free-psd/fashion-store-banner-template_23-2148675200.jpg?w=2000",
    "https://i.ytimg.com/vi/sOgus6g21q0/maxresdefault.jpg",
    "https://img.freepik.com/premium-vector/colorful-sale-background-with-memphis-style_125540-4.jpg?w=1380",
    "https://img.freepik.com/free-psd/fashion-concept-horizontal-banner_23-2148582739.jpg?w=900&t=st=1675158453~exp=1675159053~hmac=f227eaebd7c17bc10907c327ac71eba478c1acb93118c5b4946d8c8dcf158e70",
    "https://img.freepik.com/free-vector/fashion-sale-banner-collection-with-photo_52683-13210.jpg?w=996&t=st=1675158521~exp=1675159121~hmac=44869d43c30db53ed1cccb59bdc5dba65bde47b11c2553fe9be008c9394290d5",
    // add more images here
  ];

  const previousSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <Box className="carousel" h={{ lg: "500px", base: "300px" }}  >
      <Image src={images[currentIndex]} alt="slide" w="100%" h="100%" borderRadius="20px" />
      <button onClick={previousSlide} style={{ padding: "8px", borderRadius: "20%", border: "1px solid #bdc3c7", height: "40px", marginTop: "10px", marginRight: "10px", background: "#bdc3c7" }}><ArrowLeftIcon /></button>
      <button onClick={nextSlide} style={{ padding: "8px", height: "40px", marginTop: "10px", background: "#bdc3c7", borderRadius: "20%" }}><ArrowRightIcon /></button>
    </Box>
  );
};

export default Carousel;
