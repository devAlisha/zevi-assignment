import { Box, Flex } from "@chakra-ui/react";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProductCard from "../../components/ProductCard/ProductCard";
import { faker } from "@faker-js/faker";
import { usePriceFilter } from "../../Contexts/PriceFilterContext";
import { useEffect, useState } from "react";
import { useBrandFilter } from "../../Contexts/BrandFilterContext";
import { useRatingFilter } from "../../Contexts/RatingFilterContext";

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

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const products = generateFakeProducts(20);
    setProducts(products);
  }, []);

  const { priceFilter } = usePriceFilter();
  const { selectedBrands } = useBrandFilter();
  const { minRating } = useRatingFilter();

  const filteredProducts = products.filter((product) => {
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
            {filteredProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
