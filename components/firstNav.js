import { Box, Button, Flex, Heading, Input,Link, Stack } from "@chakra-ui/react";


export default function FirstNav() {
    return(
        <Flex mt={5}>
             <Heading
            color={"#fbb614"}
            width={"152px"}
            fontSize={"32px"}
            lineHeight={"24px"}
            fontWeight={700}
            ml={"80px"}
            mt={'10px'}
          >
            FripChap
          </Heading>
          <Stack>
          <Input type={'text'} width={'775px'} borderRadius={'66px'} opacity={30} bg={'#cce1d7'} height={'48px'} mb={1}></Input>
          </Stack>
          
          <Link ml={10} mt={'10px'}> Se connecter</Link>
          <Link ml={10} mt={'10px'}> Inscription</Link>
        </Flex>
    )

}