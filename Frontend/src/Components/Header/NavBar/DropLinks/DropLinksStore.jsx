import { createContext } from "react";
import { useState } from "react";

export const DropLinksContext = createContext();

export default function DropLinksProvider({ children }) {
  const [dropLinksToggle, setDropLinksToggle] = useState("");

  const handleDropLinksToggle = (val) => {
    setDropLinksToggle(val);
  };

  return (
    <DropLinksContext.Provider
      value={{ dropLinksToggle, handleDropLinksToggle }}
    >
      {children}
    </DropLinksContext.Provider>
  );
}
