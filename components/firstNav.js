import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import {  BsInstagram, BsMessenger, BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

export default function FirstNav() {
  return (
    <>
      <Flex bgColor={"#3e82d7"} w="full" height={"40px"} justifyContent={'space-between'}>
        <Flex>
          <EmailIcon color={"white"} mt={3} mr={5}/>
          <Text mr={10} color={'white'} mt={1}> contact@FripChap.com</Text>
          <PhoneIcon color={'white'} mt={3} mr={5}/>
          <Text color={'white'} mt={1}> +22502545810</Text>
        </Flex>
        <Flex>
          
          {/* <Text mr={1} color={'white'} mt={1}> Reseaux sociaux</Text> */}
          <BsYoutube color="white" mt={3}/>
          <BsInstagram color="white" mt={3} />
          <FaFacebookF color="white" mt={3} />
        </Flex>
      </Flex>
      <Flex mt={5}>
        <Heading
          color={"#fbb614"}
          width={"152px"}
          fontSize={"32px"}
          lineHeight={"24px"}
          fontWeight={700}
          ml={"80px"}
          mt={"10px"}
        >
          FripChap
        </Heading>
        <Stack ml={10}>
          <Flex>
          <Input
            type={"text"}
            width={"650px"}
            borderRadius={"66px 0px 0px 66px"}
            opacity={30}
            bg={"#cce1d7"}
            height={"48px"}
            mb={1}
            
            placeholder={'Que recherchez-vous?'}
            // borderRight={}
          ></Input>
          <Box bgColor={'#3e82d7'} width={"50px"}  height={"48px"} borderRadius={"0px 66px 66px 0px"}>
            <Center mt={3}>
            <img src="./images/SearchIcon.svg"/>  
            </Center>
          </Box>
          </Flex>
          
        </Stack>

        <Link ml={10} mt={"10px"} href={"/Connexion"}>
          {" "}
          Se connecter
        </Link>
        <Link ml={10} mt={"10px"} href={"/Inscription"}>
          {" "}
          Inscription
        </Link>
      </Flex>
    </>
  );
}
