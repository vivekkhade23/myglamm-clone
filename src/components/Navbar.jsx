import {
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsBag } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { links } from "../links/links";
import { BsGiftFill, BsSearch } from "react-icons/bs";
import { BiStore } from "react-icons/bi";

let activeStyle = {
  color: "red",
};

let baseStyle = {
  
  color: "black",
};

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box className="nav">
      <Flex
        padding={"1rem"}
        pr={"3rem"}
        pl={"3rem"}
        justifyContent={"space-between"}
        bg="#FEE8E8"
      >
        <Box minW={"40vw"} spacing=".4rem">
          <HStack>
            <Box>
              <Icon
                as={BsGiftFill}
                color="#FF9D9D"
                w={"1.4rem"}
                h={"1.4rem"}
                cursor="pointer"
              />
            </Box>
            <Text cursor="pointer">Flat 199 store</Text>
            <Text cursor={"pointer"} color="orange">
              Shop Now
            </Text>
          </HStack>
        </Box>
        <Box>
          <HStack spacing={"1rem"}>
            <Icon
              as={BiStore}
              color="#FF9D9D"
              w={"1.4rem"}
              h={"1.4rem"}
              cursor="pointer"
            />

            <Text cursor={"pointer"}>MyGlamm store</Text>
          </HStack>
        </Box>
      </Flex>

      {/* ............................. Middle nav..................................... */}

      <Flex
        padding={".5rem"}
        pr={"3rem"}
        pl={"3rem"}
        justifyContent={"space-between"}
        w={"100vw"}
        m="auto"
      >
        <HStack spacing="10rem">
          <Image
            onClick={() => navigate("/")}
            src="	https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg"
            cursor={"pointer"}
          />
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={
                <Icon
                  as={BsSearch}
                  color="#FF9D9D"
                  w={"1.4rem"}
                  h={"1.4rem"}
                  cursor="pointer"
                />
              }
            />
            <Input
              type="text"
              placeholder="Find Lipstick, Eyeliner, Makeup, Tutorial, etc"
              w={["10rem", "15rem", "20rem"]}
            />
          </InputGroup>
        </HStack>

        <HStack spacing={"2rem"}>
          <Icon as={BsBag} w={"2.4rem"} h={"2.4rem"} cursor="pointer" />
          <Icon
            onClick={() => navigate("/signup")}
            as={FaRegUser}
            w={"2.4rem"}
            h={"2.4rem"}
            cursor="pointer"
          />
        </HStack>
      </Flex>

      {/* ------------------------Category Navbar--------------------------------- */}

      <HStack pr={"3rem"} pl={"3rem"} spacing={"4rem"}>
        {links.map((el) => (
          <Box
            _hover={{ textDecoration: " underline solid red 5px", textUnderlineOffset: "3px"  }}
            fontSize={"1rem"}
            key={el.title}
          >
            <NavLink
              to={el.to}
              style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
            >
              {el.title}
            </NavLink>
          </Box>
        ))}
      </HStack>
    </Box>
  );
};

export default Navbar;
