function HeaderElements({ accordion, dispositive }) {
  return (
    <div
      className={`header__elements${
        dispositive === "mobile" && accordion ? "-shorter" : ""
      } ${dispositive}`}
    >
      <ul className="pages">
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
      <ul className="login">
        <li>Login</li>
        <li className="btn">Sign Up</li>
      </ul>
    </div>
  );
}

export default HeaderElements;
