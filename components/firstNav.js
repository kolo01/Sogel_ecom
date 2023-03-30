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
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsInstagram, BsMessenger, BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

export default function FirstNav() {
  return (
    <>
      <Flex
        bgColor={"#3e82d7"}
        w="full"
        height={"40px"}
        justifyContent={"space-between"}
      >
        <Stack
          direction={"row"}
          display={["inline-flex"]}
          spacing={4}
          // justifyContent={["center", "center", "center", "normal", "normal"]}
        >
          <EmailIcon color={"white"} mt={2} />
          <Text mr={10} color={"white"} mt={2}>
            {" "}
            contact@FripChap.com
          </Text>
         
            <PhoneIcon color={"white"}  mt={2} />
          

          <Text color={"white"} mt={2}>
            {" "}
            +22502545810
          </Text>
        </Stack>
        <Stack
          direction={"row"}
          spacing={4}
          display={["none", "none", "none", "flex", "flex"]}
        >
          <Text mr={1} color={"white"}>
            {" "}
            Reseaux sociaux
          </Text>
          <Stack pt={1} direction={"row"}>
            <BsYoutube color="white" />
            <BsInstagram color="white" />
            <FaFacebookF color="white" />
          </Stack>
        </Stack>
      </Flex>
      <Flex   bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
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
              width={'100%'}
              borderRadius={"66px 0px 0px 66px"}
              opacity={30}
              bg={"#cce1d7"}
              height={"48px"}
              mb={1}
              placeholder={"Que recherchez-vous?"}
              // borderRight={}
            ></Input>
            <Box
              bgColor={"#3e82d7"}
              width={"50px"}
              height={"48px"}
              borderRadius={"0px 66px 66px 0px"}
            >
              <Center mt={3}>
                <img src="./images/SearchIcon.svg" />
              </Center>
            </Box>
          </Flex>
        </Stack>

        <Link ml={10} mt={"10px"} href={"/Connexion"}>
          {" "}
          Se connecter
        </Link>
        <Link ml={10} mt={"10px"}>
          {" "}
          Inscription
        </Link>
      </Flex>
    </>
  );
}
