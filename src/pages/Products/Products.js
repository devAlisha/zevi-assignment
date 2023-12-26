import { Box } from "@chakra-ui/react";
import Topbar from "../../components/Topbar/Topbar";

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
    </Box>
  );
}
