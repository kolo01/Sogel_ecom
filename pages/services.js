import FirstNav from "@/components/firstNav";
import Navbar from "@/components/navbar";
import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Avatar,
  AvatarBadge,
  Box,
  Center,
  Flex,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  BiCameraHome,
  BiCameraMovie,
  BiDotsHorizontal,
  BiDotsHorizontalRounded,
  BiDotsVertical,
  BiMovie,
  BiSmile,
} from "react-icons/bi";
import { BsCamera, BsCameraVideoFill, BsSendFill } from "react-icons/bs";

export default function Services() {
  const data = ["Kone", "Olive", "Lagos", "Oignon"];
  const color = ["green", "yellow", "red", "gray"];
  const message1 = [
    "Lorem ipsum dolor sit amet,consectetur adipiscing elit.Egestas elementu",
    "Lorem ipsum dolor sit amet,consectetur adipiscing elit.Egestas elementu",
    "Lorem ipsum dolor sit amet,consectetur adipiscing elit.Egestas elementu",
    "Lorem ipsum dolor sit amet,consectetur adipiscing elit.Egestas elementu",
  ];
  const message2 = [
    "hey! Okay,send.",
    "yes i'm ready ",
    "okay, I wait",
    "so, thanks, all is okay!! nice product",
  ];
  const heure1 = ["4 jours", "1h", " 3jours", " 30 min"];
  const heure2 = ["1h", "3jours", "2h", " 30 min"];
  return (
    <>
      <FirstNav />
      <Navbar />
      <Box
        border={"1px solid #efeeeb "}
        borderRadius={"12px"}
        ml={10}
        boxShadow={"lg"}
        my={20}
    
      >
        <Flex>
          {/* premiere box */}
          <Box pl={10} pt={5}>
            <Box p={5}>
              <Flex>
                <SearchIcon />
                <Input type={"text"} placeholder="Recherche" />
              </Flex>
            </Box>
            {data.map((data, index) => (
              <Box
                borderTop={"1px solid gray"}
                width={"293px"}
                height={"66px"}
                mb={5}
                pb={5}
                pr={5}
              >
                <Flex pt={3} ml={3} w={"full"}>
                  <Avatar width={"57px"} height={"43px"} name={data}>
                    <AvatarBadge boxSize="1em" bg={color[index]} />
                  </Avatar>
                  <Flex justifyContent={"space-between"}>
                    <Box ml={5}>
                      <Text fontWeight={"bold"}>{data}</Text>
                      <Text noOfLines={1}>
                        hello world all how aare you today
                      </Text>
                    </Box>
                    <Text ml={10}>2W</Text>
                  </Flex>
                </Flex>
              </Box>
            ))}
          </Box>
          {/* Deuxieme Box */}
          <Box w={"60%"} border={"1px solid #efeeeb"}>
            <Flex
              pt={3}
              ml={5}
              w={"95%"}
              boxShadow={"0px 10px 0px 0px rgba(0,0,0,0.03)"}
              mb={5}
            >
              <Avatar width={"57px"} height={"43px"} name={data[0]}>
                <AvatarBadge boxSize="1em" bg="green" />
              </Avatar>
              <Flex justifyContent={"space-between"} w={"full"}>
                <Box ml={5}>
                  <Text fontWeight={"bold"}>{data[0]}</Text>
                  <Text w={"fit-content"}>En ligne</Text>
                </Box>
                <Stack direction={"row"} fontSize={"xl"} mt={3}>
                  <BsCameraVideoFill />
                  <PhoneIcon />
                  <BiDotsVertical />
                </Stack>
              </Flex>
            </Flex>
            <Center>
              <Text pb>8 Août 2022</Text>
            </Center>

            {message1.map((data2, index) => (
              <>
                <Box pb={3} pl={3}>
                  <Flex>
                    <Avatar
                      name={data[0]}
                      bg={"red"}
                      width={"34px"}
                      height={"26px"}
                    />
                    <Box bgColor={"#fbb614"} w={"406px"} mr={1} ml={3} pt={3} borderRadius={'5px'}>
                      <Text pl={3} color={'white'} fontSize={20}>{data2}</Text>
                    </Box>
                    <Box mt={3}>
                      <BiDotsHorizontalRounded fontSize={30} color={"gray"} />
                    </Box>
                  </Flex>
                  <Flex justifyContent={"space-between"} w={406} ml={10}>
                    <Text>{heure1[index]}</Text>
                    <Text>{heure1[index]}</Text>
                    
                  </Flex>
                  
                </Box>
                <Box pb={3} ml={'27%'} w={'full'}>
                  <Flex>
                  <Box mt={3}>
                      <BiDotsHorizontalRounded fontSize={30} color={"gray"} />
                    </Box>
                    <Box bgColor={"#3e82d7"} w={"406px"} mr={1} ml={3} pt={3} borderRadius={'5px'}>
                      <Text pl={3} color={'white'} fontSize={20}>{message2[index]}</Text>
                    </Box>
                    <Avatar
                    name={data[2]}
                    bg={"green"}
                    width={"34px"}
                    height={"26px"}
                  />
                  </Flex>
                  <Flex justifyContent={"space-between"} w={406} ml={10}>
                    <Text>{heure2[index]}</Text>
                    <Text>{heure2[index]}</Text>
                    
                  </Flex>
                </Box>
              </>
            ))}
            <Box borderTop={'1px solid gray'} mx={10}>
              <Flex>
                <Image src="./images/pj.svg" width={'20px'}/>
                <Input type={'text'} placeholder={'votre message'} border={'none'} _focus={{border:'none'}}/>
                <BiSmile fontSize={40}/>
                <Box border={'2px solid green'} bgColor={"green"} borderRadius={'70%'} width={'42px'} height={'32px'} mt={1} >
                  <Center mt={1} mr={1}>
                  <BsSendFill color="white" width={'21px'} height={'16px'} />
                  </Center>
                  
                </Box>
              </Flex>
            </Box>
          </Box>
          {/* Troisieme Box */}
          <Box w={"20%"}>
            <Center flexDirection={'column'}>
            <Avatar name={data[0]}/>
            <Text fontSize={30} fontWeight={'bold'}>{data[0]}</Text>
            </Center>
            <Flex justifyContent={'space-between'} mr={5}>
            <Text fontSize={20} fontWeight={'bold'}  pl={3}>Localisation</Text>
            <Text >Adjame</Text>
            </Flex>
            <Flex justifyContent={'space-between'} mr={5}>
            <Text fontSize={20} fontWeight={'bold'} pl={3}>Vu</Text>
            <Text >Juin 22</Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
