import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import SearchResultsItem from "../SearchResultsItem/SearchResultsItem";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { ArrowRightFromLine } from "lucide-react";
import "./SearchBoxResults.scss";
export default function SearchBoxResults({ textInput }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const generateFakeProducts = (count) => {
      const products = [];
      for (let i = 0; i < count; i++) {
        const product = {
          id: i,
          name: faker.commerce.productName(),
          description: faker.lorem.sentence(),
          price: faker.commerce.price(),
        };
        products.push(product);
      }
      return products;
    };

    const fetchProducts = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(generateFakeProducts(10));
        }, 1500);
      });
    };

    setLoading(true);
    fetchProducts().then((result) => {
      setProducts(result);
      setLoading(false);
    });
  }, [textInput]);

  const filterProducts = (query) => {
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
  };

  const filteredProducts = filterProducts(textInput);

  return (
    <div className="search-box-result">
      {loading ? (
        <Box textAlign="center">
          <Spinner />
        </Box>
      ) : (
        <Box>
          {filteredProducts.length > 0 ? (
            <Flex direction="column" gap={2}>
              {filteredProducts.slice(0, 5).map((product, index) => (
                <SearchResultsItem key={index} product={product} />
              ))}
            </Flex>
          ) : (
            <Box textAlign="center">No results found</Box>
          )}

          <ChakraLink
            mt={4}
            to="/products"
            as={ReactRouterLink}
            display={"flex"}
            gap={2}
            justifyContent={"end"}
            alignItems={"center"}
            className="view-all-items-link-container"
          >
            <span>View all items</span>
            <span>
              <ArrowRightFromLine className="arrow-right-icon" size={16} />
            </span>
          </ChakraLink>
        </Box>
      )}
    </div>
  );
}
