import { IconType } from "react-icons";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaDiscord,
  FaBluesky,
  FaEnvelope,
  FaStackOverflow,
} from "react-icons/fa6";

type socialsArray = {
  name: string;
  logo: IconType;
  link: string;
}[];

const socialsList: socialsArray = [
  {
    name: "github",
    logo: FaGithub,
    link: "https://github.com/yudin101",
  },
  {
    name: "linkedin",
    logo: FaLinkedin,
    link: "https://linkedin.com/in/yudin101",
  },
  {
    name: "twitter",
    logo: FaXTwitter,
    link: "https://x.com/yudin101",
  },
  {
    name: "discord",
    logo: FaDiscord,
    link: "https://discord.com/users/781480676049682452",
  },
  {
    name: "bluesky",
    logo: FaBluesky,
    link: "https://bsky.app/profile/yudin101.com.np",
  },
  {
    name: "stackoverflow",
    logo: FaStackOverflow,
    link: "https://stackoverflow.com/users/29547643/yudin101",
  },
  {
    name: "email",
    logo: FaEnvelope,
    link: "mailto:contact@yudin101.com.np",
  },
];

export default socialsList;
