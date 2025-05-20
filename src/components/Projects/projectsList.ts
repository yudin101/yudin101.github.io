type projectsArray = {
  name: string;
  desc: string;
  more: string;
  img: string;
  web?: string;
  source?: string;
  stack: string[];
}[];

const projectsList: projectsArray = [
  {
    name: "WebKee",
    desc: "KeePass db on the web",
    more: "A webapp to read and also edit your KeePass database without having to install any other software. I actually created this for myself because I once had to type my really long password since I didn't have anything with which I could read my KeePass database.",
    img: "/projects/webkee.webp",
    web: "https://webkee.vercel.app",
    source: "https://github.com/yudin101/webkee",
    stack: ["React", "Flask", "PyKeePass"],
  },
  {
    name: "astropicdaily",
    desc: "Get an astro pic daily!",
    more: "A bot that takes the Astronomy Picture of the Day released by NASA and uploads it. This bot is currently active on X (Twitter) and Bluesky.",
    img: "https://opengraph.githubassets.com/1/yudin101/astropicdaily",
    web: "https://x.com/astropicdaily",
    source: "https://github.com/yudin101/astropicdaily",
    stack: ["Python", "Tweepy", "AT Protocol", "APOD API"],
  },
  {
    name: "Repo Reader",
    desc: "Read blogs, from a repo!",
    more: "Weird idea but what this does is take the contents of a GitHub repository as source for a blog. So you can push either text files or markdown files on the repository and you can read it here.",
    // img: "https://opengraph.githubassets.com/1/yudin101/repo-reader",
    img: "/projects/repo-reader.webp",
    web: "https://yudin101.com.np/repo-reader",
    source: "https://github.com/yudin101/repo-reader",
    stack: ["React", "GitHub API"],
  },
  {
    name: "Mausam",
    desc: "The Weather Jankari",
    more: "This tells you about the weather around you or just any place you can think of. You just have to search it. You also get a forecast for the next few days.",
    // img: "https://opengraph.githubassets.com/1/yudin101/mausam",
    img: "/projects/mausam.webp",
    web: "https://yudin101.com.np/mausam",
    source: "https://github.com/yudin101/mausam",
    stack: ["React", "OpenWeatherMap API"],
  },
  {
    name: "MyCulture AI Clone",
    desc: "Website CLone",
    more: "This is the clone of MyCulture AI's website. There is not much to say about this project. You can directly go the live website by clicking the name of this project above.",
    img: "/projects/myculture-ai-clone.webp",
    web: "https://yudin101.com.np/myculture-ai-clone",
    source: "https://github.com/yudin101/myculture-ai-clone",
    stack: ["React"],
  },
  {
    name: "ToTimer",
    desc: "Pomodoro Timer based on Django",
    more: "Heard about Pomodoro Technique? You can learn about it from this webapp itself. You get a Pomodoro Timer and a place to write down your tasks so that your dumb head won't forget it. UI could be better? I know.",
    // img: "https://opengraph.githubassets.com/1/yudin101/totimer",
    img: "/projects/totimer.webp",
    web: "https://totimer.pythonanywhere.com",
    source: "https://github.com/yudin101/ToTimer",
    stack: ["Django"],
  },
  {
    name: "TODO List",
    desc: "TODO app based on Flask",
    more: "The name pretty much already tells you what this is. If you still don't get it, with this you can create tasks and delete them after completion. Deadlines can also be set. Nothing facny.",
    // img: "https://opengraph.githubassets.com/1/yudin101/TODO-List",
    img: "/projects/todo-list.webp",
    web: "https://todolistfl.pythonanywhere.com",
    source: "https://github.com/yudin101/TODO-List",
    stack: ["Flask"],
  },
];

export default projectsList;
