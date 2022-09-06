import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Image,
  VisuallyHidden,
  VStack,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";
import Newsletter from "./NewsLetter";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode,
  label: string,
  href: string,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <VStack
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      spacing={"2rem"}
      mb="4rem"
    >
      <Container as={Stack} maxW={"6xl"}>
        <SimpleGrid
          columns={{ base: 4, sm: 6, md: 8 }}
        
          spacing={"0.5rem"}
        >
          <Stack align={"flex-start"}>
            <ListHeader>LIPS</ListHeader>
            <Link href={"#"}>Liqid Lipstick</Link>
            <Link href={"#"}>Lip Gloss</Link>
            <Link href={"#"}>Lip Liner</Link>
            <Link href={"#"}>Lip Balm</Link>
            <Link href={"#"}>Glutter</Link>
            <Link href={"#"}>Lip Kit</Link>
            <Link href={"#"}>Lipistic set</Link>
            <Link href={"#"}>Glutter</Link>
            <Link href={"#"}>Glutter</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Face</ListHeader>
            <Link href={"#"}> Face set</Link>
            <Link href={"#"}>Fixing Power</Link>
            <Link href={"#"}>Primer</Link>
            <Link href={"#"}>Highlighter</Link>
            <Link href={"#"}>Banana Powder</Link>
            <Link href={"#"}>Make Up</Link>
            <Link href={"#"}>Bronzer</Link>
            <Link href={"#"}>MakeUp Brush</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>EYES</ListHeader>
            <Link href={"#"}>Shadow</Link>
            <Link href={"#"}>Eyeliner</Link>
            <Link href={"#"}>Eyebrows</Link>
            <Link href={"#"}>Glitter</Link>
            <Link href={"#"}>Mascara</Link>
            <Link href={"#"}>Kajal</Link>
            <Link href={"#"}>Eye Powder</Link>
            <Link href={"#"}>Eye brushes</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>NAILS </ListHeader>
            <Link href={"#"}>Nail Polish</Link>
            <Link href={"#"}>Twitter</Link>
            <Link href={"#"}>Dribbble</Link>
            <Link href={"#"}>Instagram</Link>
            <Link href={"#"}>LinkedIn</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Bath & Body</ListHeader>
            <Link href={"#"}>Night cream</Link>
            <Link href={"#"}>Eye cream</Link>
            <Link href={"#"}>Body lotion</Link>
            <Link href={"#"}>Massage cream</Link>
            <Link href={"#"}>Hand wash</Link>
            <Link href={"#"}>Foot cream</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Skin</ListHeader>
            <Link href={"#"}>Facebook</Link>
            <Link href={"#"}>Twitter</Link>
            <Link href={"#"}>Dribbble</Link>
            <Link href={"#"}>Instagram</Link>
            <Link href={"#"}>LinkedIn</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>HAIRS</ListHeader>
            <Link href={"#"}>Shampoo</Link>
            <Link href={"#"}>Hair Gel</Link>
            <Link href={"#"}>Conditioner</Link>
            <Link href={"#"}>Sereum</Link>
            <Link href={"#"}>Hair oil</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Know More</ListHeader>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}> Offers</Link>
            <Link href={"#"}>Refer & Earn</Link>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Partners</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Site Map</Link>
            <Link href={"#"}>Store Locator</Link>
            <Link href={"#"}>Replacement</Link>
            <Link href={"#"}>Press</Link>
            <Link href={"#"}>Partners</Link>
          </Stack>
        </SimpleGrid>
      </Container>

      <Container as={Stack} maxW={"6xl"}>
        <Flex justifyContent={"space-between"} alignItems="center">
          <Box>
            <Newsletter />
          </Box>
          <Box>
            <ListHeader>Follow Us</ListHeader>
            <Flex gap="20px">
              <Stack direction={"row"} spacing={6}>
                <SocialButton label={"Twitter"} href={"#"}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={"YouTube"} href={"#"}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={"Instagram"} href={"#"}>
                  <FaInstagram />
                </SocialButton>
              </Stack>
            </Flex>
          </Box>

          <Box>
            <ListHeader>EXPERIENCE THE MYGLAMM MOBILE APP</ListHeader>
            <Flex justifyContent={"space-between"}>
              <Box>
                <Image
                  w="10rem"
                  src="https://www.myglamm.com/images/iosStore.png"
                  alt=""
                />
              </Box>
              <Box>
                <Image
                  w="10rem"
                  src="https://www.myglamm.com/images/playStore.png"
                  alt=""
                />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </VStack>
  );
}
