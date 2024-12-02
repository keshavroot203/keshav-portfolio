import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  blackdove,
  reactjs,
  redux,
  git,
  figma,
  reactnative,
  faveo,
  mastercheck,
  carrent,
  aligner,
  skybell,
} from "./assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React Native",
    icon: reactnative,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },

  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Sde-|| Mobile App Developer ",
    company_name: "RootQuotient Technologies",
    //   icon: starbucks,
    iconBg: "#383E56",
    date: "August 2022 - Present",
    points: [
      "Developing and maintaining Mobile applications using ReactNative and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Handle deployment in both ios and android",
      "Maintaining code quality and best practices",
    ],
  },
  {
    title: "ReactNative Developer",
    company_name: "LadyBird web solutions",
    //   icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2021 - july 2022",
    points: [
      "Worked on a product - faveo helpdesk plan all the designs, feature implementation to enhance the product",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Handle a team of 2 junior developers",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: " jr Software Developer",
    company_name: "Espa Learn pvt limited",
    //   icon: shopify,
    iconBg: "#383E56",
    date: "may 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js ",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Master check App",
    description:
      "MasterCheck is a forklift inspection app and safety management software that enables safety-conscious companies to identify and manage negative incidents, failures and potential repairs.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: mastercheck,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.ontariolimited.mastercheck",
  },
  {
    name: "Faveo helpdesk",
    description:
      "Faveo helpdesk is a helpdesk ticketing system which provides Businesses with an automated Helpdesk system to manage customer support, handling customer's queries and other related tasks.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: faveo,
    source_code_link:
      "https://play.google.com/store/search?q=faveo%20helpdesk&c=apps",
  },
  {
    name: "Aligner 4D",
    description:
      "Aligner 4d is a patient app which handles the appointment flow , interaction of doctors with patient, saving the contract flow and details , payment schedule , and other related queries",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
    ],
    image: aligner,
    source_code_link:
      "https://aligner4dadb2c.b2clogin.com/aligner4dadb2c.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_aligner4dSignInFlow&client_id=f300da0f-36c4-4b04-8e2b-74b02c17d132&nonce=defaultNonce&redirect_uri=https://www.corporate-aligner.rootquotient.com/auth&scope=openid&response_type=code&prompt=login",
  },
  {
    name: "SkyBell",
    description:
      "Skybell is a Ai based doorbell mobile app which see and speak with the person at your door from smartphone .You can check day to day activities as well as live streaming of the person visiting your door or your nearby areas",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },

      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: skybell,
    source_code_link: "https://play.google.com/store/search?q=skybell&c=apps",
  },
  {
    name: "My Learn App",
    description:
      "MyLearnApp is an e-learning mobile app for students and teachers for interacting with each other , live classes , share assignments , take part in quiz etc",
    tags: [
      {
        name: "React React Native",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://mylearnapp.com/",
  },
  {
    name: "Black Dove",
    description:
      "Black dove is a digital artwork streaming platform where users can see list of artworks and subscribe it to view it on web, mobile , smart Tv apps etc",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
    ],
    image: blackdove,
    source_code_link: "https://www.blackdove.com/home",
  },
];

export { services, technologies, experiences, testimonials, projects };
