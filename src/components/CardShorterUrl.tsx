import { useState, useEffect } from "react";
import { useGlobalContext } from "../context/Context";
function CardShorterUrl({ sUrl }) {
  const [copy, setCopy] = useState<boolean>(false);
  const { textCopied, setTextCopied, deleteShortUrl } = useGlobalContext();

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(sUrl.short);
      setTextCopied(sUrl.short);
      setCopy(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (textCopied !== sUrl.short) setCopy(false);
  }, [textCopied]);

  return (
    <div className="shorterUrl">
      <div className="shorterUrl__original">
        <span>{sUrl.original}</span>
      </div>
      <div className="shorterUrl__short">
        <div className="deleteShort__container">
          <span>{sUrl.short}</span>
          <span onClick={() => deleteShortUrl(sUrl.id)} className="delete">
          </span>
        </div>
        <button className={`btn ${copy ? "active" : ""}`} onClick={handleClick}>
          {copy ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}

export default CardShorterUrl;
