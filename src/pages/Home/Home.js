// Home.jsx
import { useEffect, useRef, useState } from "react";
import { Box, Container, Flex, Image } from "@chakra-ui/react";
import bg from "../../images/bg.jpeg";
import logo from "../../images/logo.svg";
import "./Home.scss";
import Input from "../../components/Input/Input";
import SearchBoxResultContainer from "../../components/SearchBoxResultContainer/SearchBoxResultContainer";
import { InputTextContextProvider } from "../../Contexts/InputTextContext";

export default function Home() {
  const [showResults, setShowResults] = useState(false);
  const searchBoxContainerRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchBoxContainerRef.current &&
        !searchBoxContainerRef.current.contains(event.target)
      ) {
        setShowResults(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleInputFocus = () => {
    setShowResults(true);
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
            ref={searchBoxContainerRef}
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
              <Input onFocus={handleInputFocus} />
            </Box>
            {showResults && (
              <SearchBoxResultContainer ref={searchBoxContainerRef} />
            )}
          </Container>
        </Box>
      </Box>
    </InputTextContextProvider>
  );
}
