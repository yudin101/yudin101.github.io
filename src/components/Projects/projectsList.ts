type projectsArray = {
  name: string;
  desc: string;
  img: string;
  web?: string;
  source?: string;
}[];

const projectsList: projectsArray = [
  {
    name: "KeePass Reader",
    desc: "KeePass db on the web",
    img: "/projects/keepass-reader.webp",
    web: "https://keepass-reader.vercel.app",
    source: "https://github.com/yudin101/keepass-reader",
  },
  {
    name: "astropicdaily",
    desc: "Get an astro pic daily!",
    img: "https://opengraph.githubassets.com/1/yudin101/astropicdaily",
    web: "https://x.com/astropicdaily",
    source: "https://github.com/yudin101/astropicdaily",
  },
  {
    name: "Repo Reader",
    desc: "Read blogs, from a repo!",
    // img: "https://opengraph.githubassets.com/1/yudin101/repo-reader",
    img: "/projects/repo-reader.webp",
    web: "https://yudin101.github.io/repo-reader",
    source: "https://github.com/yudin101/repo-reader",
  },
  {
    name: "Mausam",
    desc: "The Weather Jankari",
    // img: "https://opengraph.githubassets.com/1/yudin101/mausam",
    img: "/projects/mausam.webp",
    web: "https://yudin101.github.io/mausam",
    source: "https://github.com/yudin101/mausam",
  },
  {
    name: "ToTimer",
    desc: "Pomodoro Timer based on Django",
    // img: "https://opengraph.githubassets.com/1/yudin101/totimer",
    img: "/projects/totimer.webp",
    web: "https://totimer.pythonanywhere.com",
    source: "https://github.com/yudin101/ToTimer",
  },
  {
    name: "TODO List",
    desc: "TODO app based on Flask",
    // img: "https://opengraph.githubassets.com/1/yudin101/TODO-List",
    img: "/projects/todo-list.webp",
    web: "https://todolistfl.pythonanywhere.com",
    source: "https://github.com/yudin101/TODO-List",
  },
];

export default projectsList;
