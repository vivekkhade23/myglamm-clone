import {
    Stack,
    FormControl,
    Input,
    Button,
    useColorModeValue,
    Heading,
    Text,
    Container,
    Flex,
    Box,
} from "@chakra-ui/react";

export default function Newsletter() {
    return (
        <Flex

            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Box
               
                bg={useColorModeValue("white", "whiteAlpha.100")}
                boxShadow={"xl"}
                rounded={"lg"}
                p={4}
                direction={"column"}
            >
                <Heading
                    as={"h2"}
                    fontSize={{ base: "xl", sm: "2xl" }}
                    textAlign={"center"}
                    mb={5}
                >
                    Subscribe to our Newsletter
                </Heading>
                <Stack
                    direction={{ base: "column", md: "row" }}
                    as={"form"}
                    spacing={"12px"}
                >
                    <FormControl>
                        <Input
                        w="20rem"
                            variant={"solid"}
                            borderWidth={1}
                            color={"gray.800"}
                            _placeholder={{
                                color: "gray.400",
                            }}
                            borderColor={useColorModeValue("gray.300", "gray.700")}
                            id={"email"}
                            type={"email"}
                            required
                            placeholder={"Your Email"}
                           
                        />
                    </FormControl>

                    <FormControl w={{ base: "100%", md: "40%" }}>
                        <Button colorScheme="blue" w="100%">
                            Submit
                        </Button>
                    </FormControl>
                </Stack>
                {/* <Text mt={2} textAlign={"center"}>
                    "You won't receive any spam! ✌️"
                </Text> */}
            </Box>
        </Flex>
    );
}
