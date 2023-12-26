import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Flex,
  Input,
} from "@chakra-ui/react";
import "./FilterAccordion.scss";
export default function FilterAccordion({ title, filter }) {
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
            {filter.map((item, index) => (
              <Checkbox spacing={3} key={index}>
                {item.name}
              </Checkbox>
            ))}
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}