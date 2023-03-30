import { Flex, Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react';

// fontawesone Icone 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
// React icone
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const BlueBar = () => {
    return (
        <>
            <Flex
                justify={'space-between'} bg={'#4361ee'}
                w={'100%'} h={'2em'} color={'#fff'}
                fontWeight={"bold"}
                display={{ base: 'none', md: 'flex' }}
            >
                {/* la box avec le phone et le canapé  */}
                <Flex
                    justify={'space-between'} width={'20%'}
                    h={'100%'} ml={'5%'}
                >
                    <Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                        contact@fripchap.com
                    </Text>
                    <Text>
                        <FontAwesomeIcon icon={faPhone} />
                        +225025458
                    </Text>
                </Flex>

                {/* la box les reseaux sociaux */}
                <Flex justify={'space-between'} align={'center'} w={'20%'} h={'100%'} mr={'5%'}>
                    <Text fontWeight={'bold'}>Reseaux sociaux</Text>
                    <FaYoutube />
                    <FaFacebookF />
                    <FaInstagram />
                </Flex>
            </Flex>
        </>
    );
};

export default BlueBar;