import { createContext, useContext, useReducer, useState } from "react";
import ShortUrlReducer from "./ShortUrlReducer";
import { ShortUrlState, ShortUrlItem } from "./ShortUrlReducer";

const context = createContext();
export const useGlobalContext = () => {
  const utilContext = useContext(context);
  return utilContext;
};
const initialState: ShortUrlState =
  JSON.parse(localStorage.getItem("shortUrls")) || { urls: [] };

function Context({ children }) {
  const [textCopied, setTextCopied] = useState<string>("");
  const [accordion, setAccordion] = useState<boolean>(false);
  const [shortUrls, dispatch] = useReducer(ShortUrlReducer, initialState);

  const addShortUrl = (obj: ShortUrlItem): void => {
    dispatch({ type: "ADD", payload: obj });
  };
  const deleteShortUrl = (id: string): void => {
    dispatch({ type: "DELETE", id });
  };

  return (
    <context.Provider
      value={{
        addShortUrl,
        shortUrls,
        textCopied,
        setTextCopied,
        deleteShortUrl,
        accordion,
        setAccordion,
      }}
    >
      {children}
    </context.Provider>
  );
}

export default Context;
