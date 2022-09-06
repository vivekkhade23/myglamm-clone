import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

import { subCat } from "../links/links";
import bgVideo from "../video/bgVideo.mp4";
import play from "../asset/play.png";
import MultiItemCarousel from "../components/MultiItemCrousel";

const Home = () => {
  return (
    <Box>
      <Box >
        <Carousel />
      </Box>
      <Box w={"80vw"} m="auto" mt="3rem">
        <Box>
          <Image src="https://files.myglamm.com/site-images/original/proposition-banner-2240x614_1.jpg" />
        </Box>
        <Box mt="3rem">
          <Image src="https://files.myglamm.com/site-images/original/2240x6140-cta.jpg" />
        </Box>
        <Box mt="3rem">
          <Text
            as="h4"
            m="3rem"
            fontSize={"2rem"}
            textColor="pink.800"
            textDecoration={"underline"}
            fontWeight="bold"
            textAlign={"center"}
          >
            BEST SELLERS
          </Text>
          <MultiItemCarousel />
        </Box>

        <Box mt="3rem">
          <Image src="https://files.myglamm.com/site-images/original/1920x527-(6).jpg" />
        </Box>

        <Box mt="3rem">
          <Image src="https://files.myglamm.com/site-images/original/Community-Banner-2240-x-344_1.jpg" />
        </Box>

        <Box m="3rem" textAlign={"center"}>
          <Text
            fontSize={"2rem"}
            textColor="pink.800"
            textDecoration={"underline"}
            fontWeight="bold"
          >
            SHOP FROM CATEGORIES
          </Text>

          <HStack spacing="4rem">
            {subCat.map((el) => (
              <Box key={el.title}>
                <Link to={el.to}>
                  {" "}
                  <Image src={el.img} alt="" />{" "}
                </Link>
                <Text fontWeight="bold"> {el.title}</Text>
              </Box>
            ))}
          </HStack>
        </Box>
      </Box>

      <Box className="video" pos={"relative"}>
        <video width="100%" autoPlay loop muted>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <Flex className="content">
          <Heading mb="2rem"> BRAND STORY</Heading>
          <Text>
            Backed by one of Europe's largest natural beauty companies, MyGlamm
            collaborated with global experts and makeup artists to bring about
            exciting innovation in makeup to accomplish our single, focused goal
            make looking glamorous effortless! Know More
          </Text>
          <Box mt="1rem">
            <Image cursor={"pointer"} src={play} alt="" />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
