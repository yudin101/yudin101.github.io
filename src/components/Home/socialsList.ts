import { IconType } from "react-icons";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaEnvelope,
  FaMedium,
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
    name: "medium",
    logo: FaMedium,
    link: "https://yudin101.medium.com",
  },
  {
    name: "email",
    logo: FaEnvelope,
    link: "mailto:contact@yudin101.com.np",
  },
];

export default socialsList;
