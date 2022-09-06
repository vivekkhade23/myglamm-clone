import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";




let cartArr = JSON.parse(localStorage.getItem("cart")) || [];

const ProductDetails = () => {
  const clickedData = JSON.parse(localStorage.getItem("singleProduct"));
  // console.log(clickedData);
  const [product, setProduct]= useState(clickedData);
  const navigate = useNavigate();



useEffect(() => {

  setProduct(clickedData);

}, [])

  
  const { price, brand, name, image_link, product_colors, description } =
  product;
 

  return (
    <Box mt="11rem">

      <Flex m="4rem 2rem" justifyContent={"space-evenly"} alignItems="center">
        <Box
          cursor={"pointer"}
          transition="all 2s linear"
          _hover={{ transform: "scale(1.5)" }}
        >
          <Image src={image_link} alt=""></Image>
        </Box>

        <VStack width={"30rem"} spacing="3rem" align={"left"}>
          <Flex gap="3rem" justifyContent={"flex-start"}>
            <Heading>Brand: </Heading>
            <Heading> {brand} </Heading>
          </Flex>

          <Box>
            <Heading color={"grey"}>{name} </Heading>
          </Box>

          <Flex gap="4rem" fontWeight={"bold"} alignItems="center">
            <Text>Ratings</Text>
            <Text className="ratings">★ {4.4}</Text>
          </Flex>

          <Box>
            <Text color={"Gray"}>{description}</Text>
          </Box>

          <Flex gap="4rem">
            <Text fontWeight={"bold"}>Price</Text>
            <Text fontWeight={"bold"} as="h3">
              <Text as="span" color={"red"}>
                {" "}
                ${" "}
              </Text>
              {price}{" "}
            </Text>
          </Flex>

          <Box>
            <Button
              w="100%"
              bg={"pink"}
              fontWeight="bold"
              onClick={() => {
                addToCart(clickedData);
              }}
            >
              ADD TO CART
            </Button>
          </Box>

          <Box>
            <Button
              w="100%"
              bg={"pink"}
              fontWeight="bold"
              onClick={() => {
                navigate("/checkout");
              }}
            >
              BUY NOW
            </Button>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

export default ProductDetails;

function addToCart(clickedData) {
  cartArr.push(clickedData);
  alert("item added to cart");
  localStorage.setItem("cart", JSON.stringify(cartArr));
}
