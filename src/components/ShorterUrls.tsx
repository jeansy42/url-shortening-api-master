import { GlobalContextType, useGlobalContext } from "../context/Context";
import CardShorterUrl from "./CardShorterUrl";
import "./ShorterUrls.sass";

function ShorterUrls() {
  const { shortUrls } = useGlobalContext() as GlobalContextType;
  return (
    <div className="shorterUrls__container">
      {shortUrls.urls.map((short) => (
        <CardShorterUrl key={short.id} sUrl={short} />
      ))}
    </div>
  );
}

export default ShorterUrls;
