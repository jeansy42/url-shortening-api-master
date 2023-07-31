import "./Form.sass";
import { useState } from "react";
import { useGlobalContext } from "../context/Context";
import { ShortUrlItem } from "../context/ShortUrlReducer";
function Form() {
  const { addShortUrl, shortUrls } = useGlobalContext();

  const [url, setUrl] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleErrorMessage = (err: number) => {
    switch (err) {
      case 2:
        return "Invalid URL submitted";
      case 3:
        return "Rate limit reached. Wait a second and try again";
      case 4:
        return "IP-Address has been blocked because of violating our terms of service <a href='https://shrtco.de/tos'>terms of service</a> ";
      default:
        return "Some error occurred, please try again.";
    }
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    urlLink: string
  ) => {
    event.preventDefault();
    if (urlLink.length === 0) {
      setErrorMessage("Please add a link");
      return;
    }
    const request = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${urlLink}`
    );
    const data = await request.json();

    if (data.ok) {
      const { result } = data;
      const obj: ShortUrlItem = {
        id: window.crypto.randomUUID(),
        original: result.original_link,
        short: result.short_link2,
      };
      addShortUrl(obj);
      setUrl("");
      console.log(data);
    } else if (!data.ok) {
      setErrorMessage(handleErrorMessage(data.error_code));
      console.log(data);
    }
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
    setErrorMessage("");
  };
  return (
    <form
      className="form"
      onSubmit={(e) => {
        handleSubmit(e, url);
      }}
    >
      <div className="form__input">
        <input
          className={`url__input ${errorMessage ? "active" : ""}`}
          onInput={handleInput}
          type="url"
          value={url}
          placeholder="Shorten a link here..."
        />
        {errorMessage && (
          <div className="error">
            <span className="error__content">{errorMessage}</span>
          </div>
        )}
      </div>
      <button className="btn">Shorten It!</button>
    </form>
  );
}

export default Form;
