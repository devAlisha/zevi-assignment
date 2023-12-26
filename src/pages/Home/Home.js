// Home.jsx
import { useState } from "react";
import { Box, Container, Flex, Image } from "@chakra-ui/react";
import bg from "../../images/bg.jpeg";
import logo from "../../images/logo.svg";
import "./Home.scss";
import Input from "../../components/Input/Input";
import SearchBoxResultContainer from "../../components/SearchBoxResultContainer/SearchBoxResultContainer";
import { InputTextContextProvider } from "../../Contexts/InputTextContext";

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleInputFocus = () => {
    setIsSearchOpen(true);
  };

  const handleInputBlur = () => {
    setIsSearchOpen(false);
  };

  return (
    <InputTextContextProvider>
      <Box className="home-container">
        <Image src={bg} alt="Background Image" className="bg-image" />
        <Box
          p={{
            base: "5px",
            sm: "10px",
            md: "15px",
            lg: "20px",
            xl: "40px",
          }}
          className="main-container"
        >
          <Flex justifyContent={"flex-end"}>
            <Image src={logo} alt="Logo" className="logo" />
          </Flex>
          <Container
            maxW={{
              sm: "100%",
              md: "container.md",
              lg: "container.lg",
              xl: "container.xl",
            }}
            mt={"40px"}
            mb={0}
          >
            <Box
              px={{
                base: "5px",
                sm: "10px",
                md: "15px",
                lg: "20px",
                xl: "40px",
              }}
              pb={0}
            >
              <Input onFocus={handleInputFocus} onBlur={handleInputBlur} />
            </Box>
            {isSearchOpen && <SearchBoxResultContainer />}
          </Container>
        </Box>
      </Box>
    </InputTextContextProvider>
  );
}
