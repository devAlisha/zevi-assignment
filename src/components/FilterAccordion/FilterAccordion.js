import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Flex,
} from "@chakra-ui/react";
import "./FilterAccordion.scss";
import { usePriceFilter } from "../../Contexts/PriceFilterContext";
import { useBrandFilter } from "../../Contexts/BrandFilterContext";
import { useRatingFilter } from "../../Contexts/RatingFilterContext";

export default function FilterAccordion({ title, filter }) {
  const { priceFilter, updatePriceFilter } = usePriceFilter();
  const { selectedBrands, toggleBrandSelection } = useBrandFilter();
  const { minRating, updateMinRating } = useRatingFilter();

  const handleRatingCheckboxChange = (value) => {
    if (minRating === value) {
      updateMinRating(0);
    } else {
      updateMinRating(value);
    }
  };

  return (
    <Accordion defaultIndex={[0]} allowMultiple my={"10px"}>
      <AccordionItem
        border={"none"}
        className="accordion-item"
        _expanded={{ bg: "transparent" }}
      >
        <AccordionButton
          className="accordion-button"
          p={0}
          py={2}
          bg={"transparent"}
          _hover={{ bg: "transparent" }}
        >
          <Box as="span" flex="1" textAlign="left" p={0}>
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel p={1} rowGap={5}>
          <Flex flexDirection={"column"} gap={"10px"} justifyContent={"center"}>
            {title === "Price" && (
              <Flex flexDirection={"column"} gap={"10px"}>
                <Checkbox
                  spacing={3}
                  isChecked={priceFilter.lessThan500}
                  onChange={() => updatePriceFilter("lessThan500")}
                >
                  Under 500
                </Checkbox>
                <Checkbox
                  spacing={3}
                  isChecked={priceFilter.moreThan500}
                  onChange={() => updatePriceFilter("moreThan500")}
                >
                  500 - 1000
                </Checkbox>
              </Flex>
            )}
            {title === "Brand" &&
              filter.map((brand) => (
                <Checkbox
                  spacing={3}
                  isChecked={selectedBrands.includes(brand.name)}
                  onChange={() => toggleBrandSelection(brand.name)}
                  key={brand.id}
                >
                  {brand.name}
                </Checkbox>
              ))}
            {title === "Rating" && (
              <>
                <Flex flexDirection={"column"} gap={"10px"}>
                  <Checkbox
                    spacing={3}
                    isChecked={minRating >= 4}
                    onChange={() => handleRatingCheckboxChange(4)}
                  >
                    4.0 & Above
                  </Checkbox>
                  <Checkbox
                    spacing={3}
                    isChecked={minRating >= 3 && minRating < 4}
                    onChange={() => handleRatingCheckboxChange(3)}
                  >
                    3.0 & Above
                  </Checkbox>
                  <Checkbox
                    spacing={3}
                    isChecked={minRating >= 2 && minRating < 3}
                    onChange={() => handleRatingCheckboxChange(2)}
                  >
                    2.0 & Above
                  </Checkbox>
                  <Checkbox
                    spacing={3}
                    isChecked={minRating >= 1 && minRating < 2}
                    onChange={() => handleRatingCheckboxChange(1)}
                  >
                    1.0 & Above
                  </Checkbox>
                </Flex>
              </>
            )}
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
