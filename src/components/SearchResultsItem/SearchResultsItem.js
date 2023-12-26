import { Box, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import "./SearchResultsItem.scss";
export default function SearchResultsItem({ product }) {
  return (
    <Box className="search-results-item">
      <ChakraLink as={ReactRouterLink} to="/products" _hover={{ textDecoration: 'none' }}>
        <Text className="search-results-item-name">
          {product.name}
        </Text>
      </ChakraLink>
    </Box>
  );
}
