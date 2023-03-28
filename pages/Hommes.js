import React, { useState } from "react";
import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  IconButton,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import Data from "@/data/data";
import Image from "next/image";
import { StarIcon } from "@chakra-ui/icons";
import FirstNav from "@/components/firstNav";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";

// Settings for the slider
const settings = {
  // className: "center",
  infinite: false,
  centerPadding: "30px",
  slidesToShow: 4,
  slidesToScroll: 3,
  swipeToSlide: true,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const cards = [
    "https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
  ];
  const router =useRouter()
  return (
    <>
    <FirstNav/>
    <Navbar/>
      <Box
        position={"relative"}
        height={"400px"}
        width={"full"}
        overflow={"hidden"}
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
        <Flex>
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
        </Flex>
       
        {/* Slider */}
      </Box>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {Data.map((data, index) => (
          <Box
            maxW="sm"
            width={"sm"}
            height={"sm"}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            px={10}
            boxShadow={"2xl"}
            mx={10}
            mb={10}
            pb={10}
          >
            <Box width={'150px'} height={'170px'} pt={10} pl={10}>
            <img src={data.images[0]} alt={data.title} />
            </Box>
            

            <Box p="6">
              <Box
                mt="1"
                fontWeight="semibold"
                as="h5"
                lineHeight="tight"
                noOfLines={2}
                w={'fit-content'}
                height={'50px'}
              >
                {data.title}
              </Box>

              <Box
                mt="1"
                fontWeight="normal"
                
                lineHeight="tight"
                noOfLines={2}
                w={'fit-content'}
                height={'50px'}
              >
                <Text>{data.description.toString()}</Text>
              </Box>
              <Box>
                {data.price}
                <Box as="span" color="gray.600" pl={2} fontSize="sm">
                  XOF
                </Box>
              </Box>

              <Box display="flex" mt="2" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon key={i} color={i < 4 ? "teal.500" : "gray.300"} />
                  ))}
              </Box>
              <Box>
                <Button bgColor={'blue'} mt={3} borderRadius={'66px'}></Button>
              </Box>
            </Box>
          </Box>
        ))}
        {/* </SimpleGrid> */}
      </Slider>
    </>
  );
}
