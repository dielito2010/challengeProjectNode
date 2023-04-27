import "./Header.css";
import logobemol from "/marca-bemol.svg";

function Header() {
  return (
    <nav className="nav">
      <a
        className="logo"
        href="https://www.bemol.com.br/"
        target="_blank"
      >
        <img
          src={logobemol}
          alt="Bemol"
        />
      </a>
    </nav>
  );
}

export default Header;
