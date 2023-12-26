import { Box, Flex } from "@chakra-ui/react";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Products() {
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
        <Box w={"80%"} bg={"red"} mt={"40px"}>
          <Flex justifyContent={"space-between"} gap={"20px"}>
            
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
