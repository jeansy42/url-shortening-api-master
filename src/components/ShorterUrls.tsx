import { useGlobalContext } from "../context/Context";
import CardShorterUrl from "./CardShorterUrl";
import './ShorterUrls.sass'

function ShorterUrls() {
  const { shortUrls } = useGlobalContext();
  return (
    <div className="shorterUrls__container">
      {shortUrls.urls.map((short) => (
        <CardShorterUrl key={short.id} sUrl={short} />
      ))}
    </div>
  );
}

export default ShorterUrls;
