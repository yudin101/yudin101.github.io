import { ReactTyped } from "react-typed";
import SocialsList from "./SocialsList";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <h1 className="home-title">
          hi, i'm{" "}
          <ReactTyped
            className="react-typed"
            strings={[
              "yudin",
              "a tech guy",
              "a web dev",
            ]}
            typeSpeed={80}
            backSpeed={20}
            loop
          />
        </h1>
        <div className="home-socials">
          {SocialsList.map((item, index) => (
            <a
              className={`social-link ${item.name}`}
              href={item.link}
              key={index}
              target="_blank"
            >
              {<item.logo />}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
