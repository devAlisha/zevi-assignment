import { Box, Container, Flex, Image } from "@chakra-ui/react";
import bg from "../../images/bg.jpeg";
import "./Home.scss";
export default function Home() {
  return (
    <Box className="home-container">
      <Image src={bg} alt="Background Image" className="bg-image" />
    </Box>
  );
}
