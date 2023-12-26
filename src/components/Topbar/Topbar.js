import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
} from "@chakra-ui/react";
import { Search } from "lucide-react";
import logo from "../../images/logo.svg";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";

export default function Topbar() {
  return (
    <Flex
      alignItems={"center"}
      flexDirection={{
        base: "column-reverse",
        md: "row",
      }}
      rowGap={{
        base: "1rem",
        md: "0",
      }}
    >
      <Box flex={1}></Box>
      <InputGroup flex={1}>
        <Input placeholder="Search..." />
        <InputRightElement>
          <Search className="search-icon" />
        </InputRightElement>
      </InputGroup>
      <Flex flex={1} justifyContent={"flex-end"}>
        <ChakraLink as={ReactRouterLink} to="/">
          <Image src={logo} alt="logo" w={"auto"} h={"auto"} />
        </ChakraLink>
      </Flex>
    </Flex>
  );
}
