/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Tuflihun's Portfolio",
  description: "Developer that passionate at game dev and mobile app dev.",
  og: {
    title: "Ahmad Tuflihun Portfolio",
    type: "website",
    url: "http://leguna.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Ahmad Tuflihun",
  logo_name: "AhmadTuflihun",
  nickname: "tuf-tuf / leguna",
  subTitle:
    "Developer that passionate at game dev and mobile app dev. Love Building AI Bot, but hate Data Cleaning.",
  resumeLink:
    "https://drive.google.com/file/d/1ilwOgmy7_1Cub0qOBgfI6k-NHC9A3XeI/view?usp=sharing",
  portfolio_repository: "https://github.com/Leguna/leguna.github.io/",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Leguna",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/tuflihun/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCDWxRwupxJ1h0xN8AevlKVA",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:ahmadtuflihunxd@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/AhmadTuflihunBlaBla/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/gorilla_vegetarian/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagramaaaaaa
  },
  {
    name: "Stackoverflow",
    link: "https://stackoverflow.com/users/8574540/leguna",
    fontAwesomeIcon: "fa-stack-overflow", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagramaaaaaa
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using Webpack and Laravel",
        "✨ Developing mobile apps using Flutter and android apps using Native Android Kotlin",
        "📓 Clean code, Comments, Reuseable, Documentation, Commit, Push",
      ],
      softwareSkills: [
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#fb503b",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Back End Development",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Building resposive website front end using Webpack and Laravel",
        "✨ Developing mobile apps using Flutter and android apps using Native Android Kotlin",
        "📓 Clean code, Comments, Reuseable, Documentation, Commit, Push",
        "👓 Using good cases and practice for testing code",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6762a6",
          },
        },
      ],
    },
    {
      title: "AI & Data Science",
      fileName: "DataScienceImg",
      skills: [
        "📜 Make a simple rock, paper, scissors",
        "🤖 Build Discord Bot for Community and Teaching Assistant",
        "🎮 AI for Game Development, decision making or route path",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Discord API",
          fontAwesomeClassname: "simple-icons:discord",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Game Development",
      fileName: "GamingImg",
      skills: [
        "🎴 Experience with Live2D for animate 2D Images",
        "💈 Design game with story rich and exicing gameplay",
        "🎮 Good at Playing Simulation, RPG, and FPS Game",
      ],
      softwareSkills: [
        {
          skillName: "Unity",
          fontAwesomeClassname: "simple-icons:unity",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Unreal Engine",
          fontAwesomeClassname: "simple-icons:unrealengine",
          style: {
            color: "black",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "logos:c-sharp",
          style: {},
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "logos:c-plusplus",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Internet of Things",
      fileName: "IotImg",
      skills: [
        "🧰 Connect Raspberry Pi to PLC",
        "🔌 Experience with Arduino and RFID module",
        "🕹 Build Gamepad/Controller for Game Development",
      ],
      softwareSkills: [
        {
          skillName: "Arduino",
          fontAwesomeClassname: "cib:arduino",
          style: {
            color: "#00878F	",
          },
        },
        {
          skillName: "Raspberry Pi",
          fontAwesomeClassname: "logos:raspberry-pi",
          style: {},
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {},
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "logos:c-plusplus",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Dicoding",
      iconifyClassname: "",
      style: {
        color: "#2EC866",
      },
      image:
        "https://d17ivq9b7rppb3.cloudfront.net/original/jobs/fullstack_web_developer_160620212126.png",
      profileLink: "https://www.dicoding.com/users/tuflihun",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "cib:hackerrank",
      style: {
        color: "#2cc05c",
      },
      profileLink: "https://www.hackerrank.com/Tuflihun",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Politeknik Negeri Pontianak",
      subtitle: "Informatics Engineering",
      logo_path: "logopolnep.png",
      alt_name: "Polnep",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ Learn Basic Programming Data Structure and Object Oriented Programming.",
        "⚡ Courses for database using SQLite, Firebase, MySql, and PostgreSQL.",
        "⚡ Basic Android using Android Studio.",
      ],
      website_link: "https://polnep.ac.id/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Associate Android Developer",
      subtitle: "- Kotlin",
      logo_path: "kotlinbadge.png",
      certificate_link:
        "https://www.credential.net/d77f0148-91ff-4b82-a43f-2aceb1f43580#gs.d9zf64",
      alt_name: "Google Certificate",
      color_code: "#aaaaaa",
    },
    {
      title: "Junior Web Programming",
      subtitle: "- Politeknik Negeri Pontianak",
      logo_path: "logopolnep.png",
      certificate_link: "",
      alt_name: "Junior Web Programming",
      color_code: "#aaaaaa",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as Front End Android Developer, Full Stack Web Developer. I have also worked with some well established companies mostly as Web and Desktop App Development Service. I rarely participate at organising events but i often help college teacher doing some research about Programming and Internet of Things.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Mobile Engineer - Flutter",
          company: "PT. Sejutacita Anak Muda Indonesia",
          company_url: "https://usedeall.com/",
          logo_path: "deall.jpg",
          duration: "February 2022 - June 2022",
          location: "Remote - Work From Anywhere",
          description:
            "Develop and build mobile app for Sejutacita Apps and Usedeall Apps. Work on bug fixing and improving application performance. Write clean code and implementing BLoC Design Pattern.",
          color: "#761ced",
        },
        {
          title: "Junior Android Developer",
          company: "CV. Idekite Indonesia",
          company_url: "https://idekite.id/",
          logo_path: "idekite.png",
          duration: "March 2021 - June 2021",
          location: "Pontianak, West Borneo",
          description:
            "I am working on Android Application for Inventory Management using Label Printer, QR Code, and Flutter Technology.",
          color: "#f68a22",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Backend Developer",
          company: "CV. Ultima Solusi Digital",
          company_url: "http://www.ultimasolusi.com",
          logo_path: "ultima.png",
          duration: "Dec 2020 - Jan 2021",
          location: "Pontianak, Borneo",
          description:
            "I have doing some Backend for Web Virtual Event using A-Frame Library and News Android App using Flutter.",
          color: "#6f2f9f",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Full Stack Programming",
          company: "Politeknik Negeri Pontianak",
          company_url: "http://polnep.ac.id/",
          logo_path: "logopolnep.png",
          duration: "July 2021 - August 2021",
          location: "Pontianak, West Borneo",
          description:
            "Create App for Survey College Teacher Grade and Satisfaction about Teaching Management.",
          color: "#16d0cb",
        },
        {
          title: "Lead Web Programming for Jemna App",
          company: "Politeknik Negeri Pontianak",
          company_url: "http://polnep.ac.id/",
          logo_path: "logopolnep.png",
          duration: "Aug 2020 - Sept 2020",
          location: "Pontianak, West Borneo",
          description:
            "Make WebApp for controlling Programmable Logic Controllers using Raspberry Pi.",
          color: "#16d0cb",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Android App projects. Some of them is AI Bot and deploy them to cloud computing service using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few articles and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "leguna.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Android and Game Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "Be a example in the front, Building spirit at the middle, and Encourage from behind.",
    link: "https://medium.com/@ahmadtuflihunxd",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Pontianak, West Borneo, Indonesia. - 78114",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/s7bAWwH3M3T5mBnh9",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+62 852 4665 4277",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
