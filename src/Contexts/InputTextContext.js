import React, { createContext, useState } from "react";

const InputTextContext = createContext();

const InputTextContextProvider = ({ children }) => {
  const [textInput, setTextInput] = useState("");

  const updateTextInput = (newText) => {
    setTextInput(newText);
  };

  return (
    <InputTextContext.Provider value={{ textInput, updateTextInput }}>
      {children}
    </InputTextContext.Provider>
  );
};

export { InputTextContext, InputTextContextProvider };
