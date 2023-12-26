import { Box, Flex, Image, Text, Skeleton } from "@chakra-ui/react";
import "./ProductCard.scss";
import { faker } from "@faker-js/faker";
import Rating from "../Ratings/Rating";
import { Heart } from "lucide-react";
import { useState } from "react";
import ProductDetailsModal from "../ProductDetailsModal/ProductDetailsModal";

export default function ProductCard({ product }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <Flex
      flexDirection={"column"}
      position={"relative"}
      className="product-card"
      maxW={"239px"}
    >
      <Heart
        position={"absolute"}
        className={isLiked ? "heart-icon heart-icon-active" : "heart-icon"}
        onClick={() => setIsLiked(!isLiked)}
      />
      <Box
        position={"relative"}
        className="product-card-image-container"
        mb={"24px"}
      >
        {isLoading && <Skeleton height={"325px"} width={"239px"} />}
        <Image
          src={product.image}
          alt="Product"
          className={`product-card-image ${isLoading && "hidden"}`}
          onLoad={handleImageLoad}
        />
        <Box className="product-card-image-overlay" onClick={openModal}>
          <Text fontSize={"12px"} className="product-card-image-overlay-text">
            View Details
          </Text>
        </Box>
      </Box>
      <Flex flexDirection={"column"} gap={"12px"}>
        <Text fontSize={"20px"} className="product-card-name">
          {product.title}
        </Text>
        <Flex fontSize={"20px"} className="product-card-price" gap={2}>
          <Text textDecoration={"line-through"}>
            {`${product.price - 20}.00`}
          </Text>
          <Text color={"#6D84FF"} fontWeight={"bold"}>
            {`Rs.${product.price}`}
          </Text>
        </Flex>
        <Flex flexDirection={"row"} gap={"12px"} alignItems={"center"}>
          <Box flex={1}>
            <Rating id={product.id} />
          </Box>
          <Text fontSize={"12px"} className="product-card-reviews" flex={1}>
            ({faker.number.int({ min: 10, max: 100 })})
          </Text>
        </Flex>
      </Flex>
      <ProductDetailsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={product}
      />
    </Flex>
  );
}
