import React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  IconButton,
  Tooltip,
  Avatar,
  Center,
  Badge,
  Progress
} from "@chakra-ui/react";

import { AvatarBadge } from "@chakra-ui/react";
import "./Middle.css";
import { FaDollarSign } from "react-icons/fa";
import { Money, MoneyOff } from "@material-ui/icons";
import { GiCartwheel, GiShoppingBag, GiShoppingCart } from "react-icons/gi";
import { FiUserPlus } from "react-icons/fi";

function Middle() {
  return (
    <>
      <div className="dashboard">
        <Box
          borderStyle="solid"
          borderColor="gray.800"
          boarderRadius="200px"
          mt="0px"
          pl="20px"
          pr="20px"
          pt="150px"
          h="700px"
          mb="20px"
          bg="linear-gradient( blue -80%, white 100%);"
        >
          <Box
            borderStyle="solid"
            borderColor="gray.200"
            borderWidth="2px"
            p="10px"
            pt="30px"
            mt="-120px"
            borderRadius="20px"
          >
            <Center mb="5px" mt="10px">
              <Avatar bg="red.500">
                <AvatarBadge boxSize="1.25em" bg="green.500" />
              </Avatar>
            </Center>

            <Box h="50px" mb="70px">
              <Center>
                <Text color="black">C.P.Amarasena</Text>
              </Center>
              <Progress
                colorScheme="green"
                size="xs"
                mr="45%"
                ml="45%"
                mb="5px"
                isIndeterminate
              />
              <Center mb="10px">
                <Badge variant="solid" colorScheme="green">
                  Online
                </Badge>
              </Center>
              
            </Box>

            <Box
              borderStyle="solid"
              borderColor="gray.200"
              borderWidth="2px"
              h="70px"
              m="10px"
              mt="100px"
              borderRadius="10px"
            >
              <Tooltip label="Total Revenue" fontSize="md">
                <Text pl="2px" color="gray.900" isTruncated>
                  <IconButton
                    m="10px"
                    variant="outline"
                    colorScheme="blue"
                    aria-label=""
                    icon={<FaDollarSign />}
                  />
                  Total Revenue : 15000$
                </Text>
              </Tooltip>
            </Box>
            <Box
              borderStyle="solid"
              borderColor="gray.200"
              borderWidth="2px"
              h="70px"
              m="10px"
              borderRadius="10px"
            >
              <Tooltip label="Today Revenue" fontSize="md">
                <Text pl="2px" color="gray.900" isTruncated>
                  <IconButton
                    m="10px"
                    colorScheme="green"
                    aria-label=""
                    variant="outline"
                    icon={<Money />}
                  />
                  Today Revenue : 440$
                </Text>
              </Tooltip>
            </Box>

            <Box
              borderStyle="solid"
              borderColor="gray.200"
              borderWidth="2px"
              h="70px"
              m="10px"
              borderRadius="10px"
            >
              <Tooltip label="Today Orders" fontSize="md">
                <Text pl="2px" color="gray.700" isTruncated>
                  <IconButton
                    m="10px"
                    colorScheme="red"
                    aria-label=""
                    variant="outline"
                    icon={<GiShoppingCart size="20px" />}
                  />
                  Today Orders : 1500
                </Text>
              </Tooltip>
            </Box>

            <Box
              borderStyle="solid"
              borderColor="gray.200"
              borderWidth="2px"
              h="70px"
              m="10px"
              borderRadius="10px"
            >
              <Tooltip label="Awaiting for shipment orders" fontSize="md">
                <Text pl="2px" color="gray.700" isTruncated>
                  <IconButton
                    m="10px"
                    colorScheme="black"
                    aria-label=""
                    variant="outline"
                    icon={<GiShoppingBag size="20px" />}
                  />
                  Awaiting for shipment : 120
                </Text>
              </Tooltip>
            </Box>
            <Box
              borderStyle="solid"
              borderColor="gray.200"
              borderWidth="2px"
              h="70px"
              m="10px"
              borderRadius="10px"
            >
              <Tooltip label="Today New Users" fontSize="md">
                <Text pl="2px" color="gray.700" isTruncated>
                  <IconButton
                    m="10px"
                    colorScheme="cyan"
                    aria-label=""
                    variant="outline"
                    icon={<FiUserPlus size="20px" />}
                  />
                  Today New Users : 60
                </Text>
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Middle;
