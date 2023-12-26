import { Box, Text } from "@chakra-ui/react";
import './SearchResultsItem.scss';
export default function SearchResultsItem({ product }) {
  return (
      <Box className="search-results-item">
        <Text className="search-results-item-name">{product.name}</Text>
      </Box>
  );
}
