import {
  createContext,
  useContext,
  useReducer,
  useState,
  ReactNode,
} from "react";
import ShortUrlReducer from "./ShortUrlReducer";
import { ShortUrlState, ShortUrlItem } from "./ShortUrlReducer";

export interface GlobalContextType {
  addShortUrl: (obj: ShortUrlItem) => void;
  shortUrls: ShortUrlState;
  textCopied: string;
  setTextCopied: (text: string) => void;
  deleteShortUrl: (id: string) => void;
  accordion: boolean;
  setAccordion: (value: boolean) => void;
}

const context = createContext<GlobalContextType | undefined>(undefined);
export const useGlobalContext = () => {
  const utilContext = useContext(context);
  return utilContext;
};
const initialState: ShortUrlState = JSON.parse(
  localStorage.getItem("shortUrls") || ""
) || { urls: [] };

function Context({ children }: { children: ReactNode }) {
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
