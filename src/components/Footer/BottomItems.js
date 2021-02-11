import { Box, Center, Icon, SimpleGrid } from "@chakra-ui/react";
import { CardGiftcard, CreditCardRounded } from "@material-ui/icons";
import React from "react";
import {
  GiBuyCard,
  GiCardPick,
  GiCreditsCurrency,
  GiCrossedPistols,
  GiCrystalBars,
  GiCutDiamond,
  GiMoneyStack,
  GiPayMoney,
  GiSecurityGate,
  GiSellCard,
  GiTruck,
} from "react-icons/gi";
import { MdAttachMoney, MdCreditCard, MdSecurity, MdSettings } from "react-icons/md";
export default function BottomItems() {
  return (
    // Passing `columns={[2, null, 3]}` and `columns={{sm: 2, md: 3}}`
    // will have the same effect.

    <SimpleGrid columns={[2, null, 4]} spacing="0px">
      <Box
        bg="white"
        height="250px"
        borderStyle="solid"
        borderColor="#E8E8E8"
        borderWidth="1px"
      >
        <Center>
          <Icon as={MdAttachMoney} w={20} h={20} />{" "}
        </Center>
        <Box>
          <Center color="black" fontWeight="BOLD">
          Great Value
          </Center>
        </Box>
        <Box padding="5%" textAlign="center">
        We offer competitive prices on our 1000 plus product range.
        </Box>
      </Box>
      <Box
        bg="white"
        height="250px"
        borderStyle="solid"
        borderColor="#E8E8E8"
        borderWidth="1px"
      >
        <Center>
          <Icon as={MdCreditCard} w={20} h={20} />{" "}
        </Center>
        <Box>
          <Center color="black" fontWeight="BOLD">
            Safe Payment
          </Center>
        </Box>
        <Box padding="5%" textAlign="center">
          Pay with the world’s most popular and secure payment methods.
        </Box>
      </Box>
      <Box
        bg="white"
        height="250px"
        borderStyle="solid"
        borderColor="#E8E8E8"
        borderWidth="1px"
      >
        <Center>
          
        
          <Icon as={MdSecurity} w={20} h={20} />{" "}
        </Center>
        <Box>
          <Center color="black" fontWeight="BOLD">
          Shop with Confidence
          </Center>
        </Box>
        <Box padding="5%" textAlign="center">
        Our Buyer Protection covers your purchase from click to delivery.
        </Box>
      </Box>
      <Box
        bg="white"
        height="250px"
        borderStyle="solid"
        borderColor="#E8E8E8"
        borderWidth="1px"
      >
        <Center>
        <GiTruck size='80px' width='20px'/>
        </Center>
        <Box>
          <Center color="black" fontWeight="BOLD">
          Country Wide Delivery
          </Center>
        </Box>
        <Box padding="5%" textAlign="center">
          Pay with the world’s most popular and secure payment methods.
        </Box>
      </Box>
    </SimpleGrid>
  );
}
