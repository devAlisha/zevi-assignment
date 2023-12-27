import { Box, Flex, Image, Text, Skeleton } from "@chakra-ui/react";
import "./ProductCard.scss";
import { Heart, Star } from "lucide-react";
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

  const filledStars = Math.floor(Number(product.rating));

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
        mb={"12px"}
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
        <Flex
          fontSize={"18px"}
          className="product-card-name"
          gap={2}
          flexDirection={"column"}
        >
          <Text fontWeight={"bold"}>{product.brand}</Text>
          <Text>{product.title}</Text>
        </Flex>
        <Flex fontSize={"18px"} className="product-card-price" gap={2}>
          <Text textDecoration={"line-through"}>
            {`${parseFloat(product.price) + 
              Math.floor(Math.random() * 100)
            }.00`}
          </Text>
          <Text color={"#6D84FF"} fontWeight={"bold"}>
            {`Rs.${product.price}`}
          </Text>
        </Flex>
        <Flex flexDirection={"column"} gap={"12px"} mt={"auto"}>
          <Flex gap={1} color={"#FFD700"}>
            {[...Array(filledStars)].map((_, index) => (
              <Star key={index} fill="#FFD700" />
            ))}
            {[...Array(5 - filledStars)].map((_, index) => (
              <Star key={index} />
            ))}
          </Flex>
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
