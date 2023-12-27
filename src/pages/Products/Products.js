import { Box, Flex, Text } from "@chakra-ui/react";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProductCard from "../../components/ProductCard/ProductCard";
import { faker } from "@faker-js/faker";
import { usePriceFilter } from "../../Contexts/PriceFilterContext";
import { useEffect, useMemo, useState, useCallback } from "react";
import { useBrandFilter } from "../../Contexts/BrandFilterContext";
import { useRatingFilter } from "../../Contexts/RatingFilterContext";
import debounce from "lodash/debounce";

const brandNames = ["Mango", "H&M", "Zara"];

const generateFakeProducts = (count) => {
  const products = [];
  for (let i = 0; i < count; i++) {
    const product = {
      id: i,
      image: faker.image.urlLoremFlickr({
        category: "people",
        width: 239,
        height: 325,
      }),
      brand: brandNames[Math.floor(Math.random() * brandNames.length)],
      title: faker.commerce.productName(),
      price: faker.commerce.price({ min: 100, max: 1000 }),
      rating: faker.number.float({ min: 1, max: 5, precision: 0.1 }),
    };
    products.push(product);
  }
  return products;
};

const filterProducts = (products, filters) => {
  return products.filter((product) => {
    const { priceFilter, selectedBrands, minRating } = filters;

    if (priceFilter.lessThan500 && product.price >= 500) {
      return false;
    }
    if (priceFilter.moreThan500 && product.price < 500) {
      return false;
    }

    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
      return false;
    }

    if (minRating > 0 && product.rating < minRating) {
      return false;
    }

    return true;
  });
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const { priceFilter } = usePriceFilter();
  const { selectedBrands } = useBrandFilter();
  const { minRating } = useRatingFilter();

  const filteredProducts = useMemo(
    () => filterProducts(products, { priceFilter, selectedBrands, minRating }),
    [products, priceFilter, selectedBrands, minRating]
  );

  useEffect(() => {
    const fetchProducts = async () => {
      const fakeProducts = generateFakeProducts(20);
      setProducts(fakeProducts);
    };

    fetchProducts();
  }, []);

  const debouncedFilterProducts = useMemo(
    () => debounce(filterProducts, 300),
    []
  );

  const handleFilterChange = useCallback(() => {
    debouncedFilterProducts(products, {
      priceFilter,
      selectedBrands,
      minRating,
    });
  }, [
    products,
    priceFilter,
    selectedBrands,
    minRating,
    debouncedFilterProducts,
  ]);

  useEffect(() => {
    handleFilterChange();
    return () => {
      debouncedFilterProducts.cancel();
    };
  }, [handleFilterChange, debouncedFilterProducts]);

  return (
    <Box
      className="products-page-container"
      p={{
        base: "1rem",
        md: "1.5rem",
        xl: "2.5rem",
      }}
    >
      <Topbar />
      <Sidebar />
      <Flex alignItems={"end"} flexDirection={"column"}>
        <Box
          w={{
            base: "100%",
            lg: "80%",
          }}
          mt={"40px"}
        >
          <Flex
            gap={"40px"}
            flexWrap={"wrap"}
            justifyContent={{ base: "center", lg: "flex-start" }}
          >
            {filteredProducts.length === 0 ? (
              <Box mt={"40px"} fontSize={"24px"} textAlign={"center"} bg={"gray.100"} color={"gray.500"} p={"20px"} borderRadius={"10px"} w={"100%"}>
                Sorry! No products found
              </Box>
            ) : (
              <Flex
                gap={"40px"}
                flexWrap={"wrap"}
                justifyContent={{ base: "center", lg: "flex-start" }}
              >
                {filteredProducts.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </Flex>
            )}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Products;
