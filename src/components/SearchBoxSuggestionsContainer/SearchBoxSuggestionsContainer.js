import { Box, Flex, Image, Skeleton, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import trend1 from "../../images/latestTrends1.svg";
import trend2 from "../../images/latestTrends2.svg";
import trend3 from "../../images/latestTrends3.svg";
import trend4 from "../../images/latestTrends4.svg";
import trend5 from "../../images/latestTrends5.svg";
import "./SearchBoxSuggestionsContainer.scss";
import { useState } from "react";
export default function SearchBoxSuggestionsContainer() {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };
  const trends = [
    { image: trend1, alt: "Latest Trend 1", text: "Shirt with puff sleeves" },
    { image: trend2, alt: "Latest Trend 2", text: "Linen jumpsuit" },
    { image: trend3, alt: "Latest Trend 3", text: "Floral print dress" },
    { image: trend4, alt: "Latest Trend 4", text: "Pleated dress" },
    { image: trend5, alt: "Latest Trend 5", text: "Flared dress" },
  ];

  const popularSuggestions = [
    "Striped shirt dress",
    "Satin shirts",
    "Denim jumpsuit",
    "Leather dress",
    "Solid tshirts",
  ];
  return (
    <div className="search-box-suggestions-container">
      <h2 className="search-box-suggestions-container__heading">
        Latest Trends
      </h2>
      <Flex
        className="search-box-suggestions-container__latest-trends-container"
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        mt={"24px"}
        mb={"40px"}
        rowGap={"24px"}
      >
        {trends.map((trend, index) => (
          <Box
            key={index}
            className="search-box-suggestions-container__latest-trend"
          >
            {isLoading && <Skeleton height={"223px"} width={"165px"} />}

            <ChakraLink as={ReactRouterLink} to="/products">
              <Image
                src={trend.image}
                alt={trend.alt}
                className="search-box-suggestions-container__latest-trend-image"
                onLoad={handleImageLoad}
              />
              <Text fontSize={"14px"} mt={"14px"} className="latest-trend-text">
                {trend.text}
              </Text>
            </ChakraLink>
          </Box>
        ))}
      </Flex>
      <h2 className="search-box-suggestions-container__heading">
        Popular Suggestions
      </h2>
      <Flex mt={"24px"} rowGap={"12px"} flexDirection={"column"}>
        {popularSuggestions.map((suggestion, index) => (
          <ChakraLink as={ReactRouterLink} to="/products" key={index}>
            <Text
              fontSize={"16px"}
              className="search-box-suggestions-container__popular-suggestion-text"
            >
              {suggestion}
            </Text>
          </ChakraLink>
        ))}
      </Flex>
    </div>
  );
}
