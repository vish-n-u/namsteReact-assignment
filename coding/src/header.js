import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <img
        id="logo"
        src="https://images-workbench.99static.com/xsIn-JPiXqWm4PaVeCGm7zz1Vn0=/99designs-contests-attachments/95/95490/attachment_95490984"
        alt="companyLogo"
      ></img>
      {/* //logo */}
      <div id="title">
        <span>rápidosh</span>
      </div>
      {/* // title */}
      <div id="otherElem">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Contact</li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/signUp">Signin</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>{" "}
      {/* // Home Contact About Signin Cart */}
    </div>
  );
};

export default Header;
