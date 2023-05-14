import Accordion from "../components/accordion/Accordion";
import { concepts } from "../constants/data";
import reactLogo from "../assets/react.svg";

const Home = () => {
  return (
    <div className="container">
      <div style={{ display: "flex", alignContent: "center" }}>
        <img src={reactLogo} className="logo" /> <h1>Interview Codebase</h1>
      </div>
      <p>
        This application a simple yet comprehensive collection of React Coding
        Interview Challenges. The theme for the application is something like
        Dashboard Application. All challenges are created with Pure React and
        CSS without any third party packages or css frameworks. You are expected
        to have a basic level of understanding of React and CSS.
      </p>
      <p>
        {" "}
        Everything is made from scratch so that you can have a better
        understanding of how React works.{" "}
      </p>
      <p>The collection includes following topics: </p>
      {<Accordion items={concepts} />}
      <p>
        Others things that you will learn from this application are:
        <ul>
          <li>React Router</li>
          <li>Code structure and maintenance</li>
          <li>Theming</li>
          <li>Using icons</li>
          <li>Problem solving </li>
          <li>Typescript Types </li>
          <li>CSS Flexbox, Grid</li>
        </ul>
      </p>
      <p>
        Although, this isn't a complete developed product so you may see few
        areas where you can improve the codebase, I'd encourage you to do so.
      </p>
      <p>I hope you like it, Thank you</p>
    </div>
  );
};

export default Home;
