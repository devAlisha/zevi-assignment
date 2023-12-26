import {
  Box,
  Heading,
} from "@chakra-ui/react";
import "./Sidebar.scss";
import FilterAccordion from "../FilterAccordion/FilterAccordion";
export default function Sidebar() {
  const brandFilter = [
    {
      id: 1,
      name: "Mango",
    },
    {
      id: 2,
      name: "Zara",
    },
    {
      id: 3,
      name: "H&M",
    },
  ];

  const priceFilter = [
    {
      id: 1,
      name: "Under 500",
    },
    {
      id: 2,
      name: "500 - 1000",
    },
  ];

  const ratingFilter = [
    {
      id: 1,
      name: "4.0 & Above",
    },
    {
      id: 2,
      name: "3.0 & Above",
    },
    {
      id: 3,
      name: "2.0 & Above",
    },
    {
      id: 4,
      name: "1.0 & Above",
    },
  ];

  return (
    <Box
      className="sidebar-container"
      p={{
        base: "1rem",
        md: "1.5rem",
        xl: "2.5rem",
      }}
    >
      <Heading as="h2" className="sidebar-heading" mt={"40px"} fontSize='1.75rem'>
        Search Results
      </Heading>
      <Box mt={10}>
        <FilterAccordion title="Brand" filter={brandFilter} />
        <FilterAccordion title="Price" filter={priceFilter} />
        <FilterAccordion title="Rating" filter={ratingFilter} />
      </Box>
    </Box>
  );
}
