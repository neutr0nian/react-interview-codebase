import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { routes } from "../../constants/data";
import { AnyObject } from "../../utils/types.d";
import "./sidebar.css";
import { ThemeContext } from "../../contexts/ThemeContext";

const Sidebar = () => {
  const location = useLocation();
  const activeLink = location.pathname.split("/")[1];
  const theme: any = useContext(ThemeContext);
  const { darkMode } = theme.state;

  const toggleTheme = () => {
    if (darkMode) theme.dispatch({ type: "LIGHTMODE" });
    else theme.dispatch({ type: "DARKMODE" });
  };

  function MenuOptions({ option, depth = 0 }: AnyObject) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <>
        {option?.data ? (
          <>
            <li
              style={{ marginLeft: `${depth * 20}px` }}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {option.name}
            </li>
            {isExpanded &&
              option?.data.map((data: AnyObject) => (
                <MenuOptions option={data} depth={depth + 1} />
              ))}
          </>
        ) : (
          <li
            key={option.path}
            className={`${
              activeLink === option.name.toLowerCase() ? "highlight br-5 " : ""
            }`}
          >
            <Link
              to={option.path}
              className={`${
                activeLink === option.name.toLowerCase() ? "active " : ""
              }`}
              style={{ marginLeft: `${depth * 20}px` }}
            >
              {option.name}
            </Link>
          </li>
        )}
      </>
    );
  }
  return (
    <div className={`sidebar ${darkMode ? "sidebar-dark" : "sidebar-light"}`}>
      <ul className="menu">
        {routes.map((route) => {
          return <MenuOptions option={route} />;
        })}
        <div className="bottom">
          <button onClick={toggleTheme}>{!darkMode ? "dark" : "light"}</button>
          <li className="bottom">
            <Link
              to="/contact"
              className={`${activeLink === "contact" ? "active " : ""}`}
            >
              Contact
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
