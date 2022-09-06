import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

// function myFunction(item){

//     localStorage.setItem("singleProduct", JSON.stringify(item));

// }

const Card = ({ item }) => {
  let { name, brand, price, image_link } = item;
  const navigate = useNavigate(null);

  return (
    <Box className="item-box">
      <Box
        onClick={() => {
          localStorage.setItem("singleProduct", JSON.stringify(item));
          navigate("/productDetails");
        }}
        className="image-box"
      >
        <Image w="100%" h="15rem" src={image_link}></Image>
      </Box>

      <Box h="2.5rem" mt="1.5rem">
        <Text fontWeight={"bold"} as="h3">
          Brand: {brand}{" "}
        </Text>
      </Box>

      <Box h="3.5rem">
        <Text color={"gray"} fontWeight={"bold"} as="h3">
          {name}{" "}
        </Text>
      </Box>
      
      <Flex justifyContent={"space-between"} alignItems="center">
        <Box h="3.5rem">
          <Text fontWeight={"bold"} as="h3">
            <Text as="span" color={"red"}>
              {" "}
              ${" "}
            </Text>
            {price}{" "}
          </Text>
        </Box>

        <Box h="3.5rem">
          <Text className="ratings">★ {4.4}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Card;
