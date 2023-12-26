import {
  Box,
  Container,
  Flex,
  Image,
} from "@chakra-ui/react";
import bg from "../../images/bg.jpeg";
import logo from "../../images/logo.svg";
import "./Home.scss";
import Input from "../../components/Input/Input";
export default function Home() {
  return (
    <Box className="home-container">
      <Image src={bg} alt="Background Image" className="bg-image" />
      <Box p={"40px"}>
        <Flex justifyContent={"flex-end"}>
          <Image src={logo} alt="Logo" className="logo" />
        </Flex>
        <Container maxW={"container.xl"}>
          <Box px={"40px"}>
            <Input />
          </Box>
          <Box className="search-box-result-container"></Box>
        </Container>
      </Box>
    </Box>
  );
}
