import "./Header.sass";
import HeaderElements from "../components/HeaderElements";
import { useGlobalContext } from "../context/Context";
function Header() {
  const { accordion, setAccordion } = useGlobalContext();
  const handleClick = () => setAccordion(!accordion);
  return (
    <div className="header" role="banner">
      <div className="header__content">
        <h1 className="header__title">Shortly</h1>
        <HeaderElements accordion={accordion} dispositive={"desktop"} />
        <span
          onClick={handleClick}
          className={`accordion ${accordion ? "active" : ""}`}
        ></span>
      </div>
      <HeaderElements dispositive={"mobile"} accordion={accordion} />
    </div>
  );
}

export default Header;
