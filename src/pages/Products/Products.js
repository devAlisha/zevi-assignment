import { Box, Flex } from "@chakra-ui/react";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProductCard from "../../components/ProductCard/ProductCard";
import { faker } from "@faker-js/faker";

const generateFakeProducts = (count) => {
  const products = [];
  for (let i = 0; i < count; i++) {
    const product = {
      id: i,
      image: faker.image.urlLoremFlickr({
        category: "nature",
        width: 239,
        height: 325,
      }),
      title: faker.commerce.productName(),
      price: faker.commerce.price(),
      rating: faker.number.int({ min: 10, max: 100 }),
    };
    products.push(product);
  }
  return products;
};

export default function Products() {
  const products = generateFakeProducts(10);
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
        <Box w={"80%"} mt={"40px"}>
          <Flex gap={"40px"} flexWrap={"wrap"}>
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
