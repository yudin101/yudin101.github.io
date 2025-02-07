import { ReactTyped } from "react-typed";
import SocialsList from "./socialsList";
import "./Home.css";
import { useEffect } from "react";
import projectsList from "../Projects/projectsList";

export default function Home() {
  useEffect(() => {
    projectsList.forEach(
      (project: {
        name: string;
        desc: string;
        img: string;
        web?: string;
        source?: string;
      }) => {
        const img = new Image();
        img.src = project.img;
      },
    );
  }, []);

  return (
    <>
      <div className="home-container">
        <h1 className="home-title">
          hi, i'm{" "}
          <ReactTyped
            className="react-typed"
            strings={["yudin", "a tech guy", "a web dev"]}
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
