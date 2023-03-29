import React, { useState } from "react";
import {
  Box,
  Center,
  Flex,
  Heading,
  IconButton,
  Link,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import Navbar from "@/components/navbar";
import FirstNav from "@/components/firstNav";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Data from "@/data/data";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export default function Home() {
  const [slider, setSlider] = useState(null);
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });
  const cards = [
    "./Slider/images.jpg",
    "./Slider/images1.jpg",
    "./Slider/images2.jpg",
    "./Slider/images3.jpg",
    "./Slider/images4.jpg",
    "./Slider/images5.jpg",
    "./Slider/images6.jpg",
    "./Slider/images7.jpg",
    "./Slider/images8.jpg",
  ];
  
  return (
    <>
      <FirstNav />
      <Navbar />
      <Box
        position={"relative"}
        height={"600px"}
        width={"full"}
        overflow={"hidden"}
        py={10}
        mb={20}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((url, index) => (
            <Box
              key={index}
              height={"6xl"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${url})`}
            />
          ))}
        </Slider>
      </Box>
      <Center>
          <Heading>Nos Articles</Heading>
        </Center>
      <Box>
        <Flex justifyContent={'space-between'} py={20}>
          <Text fontSize={35}>Enfants</Text>
          <Flex>
            <Link href="/Enfants" fontSize={35}>Voir plus</Link>
            <ChevronRightIcon height={65} fontSize={35}/>
          </Flex>
        </Flex>
        <SimpleGrid columns={[3,3,3,4,5]}>
            
        </SimpleGrid>
      </Box>
    </>
  );
}
