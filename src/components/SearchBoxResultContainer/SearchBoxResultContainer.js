import "./SearchBoxResultContainer.scss";
import { InputTextContext } from "../../Contexts/InputTextContext";
import { useContext } from "react";
import SearchBoxSuggestionsContainer from "../SearchBoxSuggestionsContainer/SearchBoxSuggestionsContainer";
import SearchBoxResults from "../SearchBoxResults/SearchBoxResults";
import { Box } from "@chakra-ui/react";

export default function SearchBoxResultContainer() {
  const { textInput } = useContext(InputTextContext);

  return (
    <Box
      className="search-box-result-container"
      p={{
        base: "5px",
        sm: "10px",
        md: "15px",
        lg: "20px",
        xl: "40px",
      }}
    >
      {textInput.trim() !== "" ? (
        <SearchBoxResults textInput={textInput} />
      ) : (
        <SearchBoxSuggestionsContainer />
      )}
    </Box>
  );
}
