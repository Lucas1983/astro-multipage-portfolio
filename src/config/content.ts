export const siteConfig = {
  name: "Lukasz Mielczarek",
  title: "Lukasz Mielczarek's Portfolio",
  description: "A showcase of my work and thoughts",
  social: {
    github: "https://github.com/Lucas1983",
    linkedin: "https://www.linkedin.com/in/lukaszmielczarek83",
    email: "mailto:mielczarek.lukasz.karol@gmail.com",
  },
};

export const homeContent = {
  title: "Hello, I'm Lukasz",
  description:
    "Backend-focused software engineer with deep experience building scalable cloud platforms, distributed systems, and integration-heavy enterprise solutions, working across architecture, delivery, and platform engineering to solve real-world problems.",
  buttons: {
    about: {
      text: "View About",
      href: "/about/",
    },
    posts: {
      text: "Read Posts",
      href: "/posts/",
    },
  },
  images: {
    light: "/assets/images/tech-background.svg",
    dark: "/assets/images/tech-background-dark.svg",
  },
};

export const aboutContent = {
  meta: {
    title: "About - Your Portfolio",
    description: "Learn more about my background, skills, and experience",
  },
  title: "About Me",
  description:
    "I’m a software engineer with over 15 years of strong experience in industrial IT, and I’m especially excited by distributed systems, data-driven platforms, and IoT solutions, with a strong focus on cloud, microservices, and event-driven systems.",
  skills: [
    {
      name: "Programming Languages",
      keywords: ["Java", "Kotlin", "Python", "JavaScript", "TypeScript"],
    },
    {
      name: "Software Architecture",
      keywords: ["Microservices", "Event-Driven", "Serverless", "DDD"],
    },
    {
      name: "Frameworks & Libraries",
      keywords: ["Spring Boot", "Spring Cloud", "Hibernate", "ReactJS", "NodeJS"],
    },
    {
      name: "DevOps & Infrastructure",
      keywords: ["Docker", "Kubernetes", "Terraform", "AWS CDK", "Helm"],
    },
    {
      name: "Cloud Computing",
      keywords: ["AWS", "Lambda", "Containers", "Storage", "Managed Databases"],
    },
    {
      name: "Databases",
      keywords: ["PostgreSQL", "Redis", "MongoDB"],
    },
    {
      name: "Messaging & Streaming",
      keywords: ["RabbitMQ", "EventBridge", "AMQP", "MQTT"],
    },
    {
      name: "APIs & Protocols",
      keywords: ["REST", "WebSockets", "GraphQL"],
    },
    {
      name: "Testing",
      keywords: ["JUnit", "Mockito"],
    },
    {
      name: "CI/CD",
      keywords: ["Jenkins", "GitHub Actions", "ArgoCD"],
    },
    {
      name: "Monitoring",
      keywords: ["ELK Stack", "DataDog"],
    },
  ],
  image: {
    src: "/assets/images/about/photo.png",
    alt: "Profile",
  },
  experience: {
    title: "Experience",
    items: [
      {
        period: "Jun 2024 - Present",
        position: "Lead Developer",
        company: "Roofio.ai",
        description:
          "Leading the end-to-end development of an AI-powered MVP for analyzing technical drawings, from platform setup to delivery.",
      },
      {
        period: "Jun 2023 - Jun 2024",
        position: "Senior Software Developer",
        company: "Rekor.ai",
        description:
          "Contributed to a data-driven road operating system with a focus on backend design, performance optimization, and scalability.",
      },
      {
        period: "Jan 2023 - Jun 2023",
        position: "Principal Java Developer / Industrial Blockchain Leader",
        company: "Supply-Block-Chain (Web3)",
        description:
          "Led a proof-of-concept blockchain initiative for supply chain management using Hyperledger Fabric.",
      },
      {
        period: "Jan 2022 - Dec 2022",
        position: "Principal Java Developer",
        company: "Philip Morris International (P4 / IIoT)",
        description:
          "Built an industrial IoT platform based on microservices and event-driven architecture.",
      },
      {
        period: "Jan 2020 - Feb 2022",
        position: "Principal Java Developer",
        company: "Philip Morris International (Digiperf)",
        description:
          "Delivered a scalable microservices platform supporting digital transformation across enterprise operations.",
      },
      {
        period: "Jun 2018 - Dec 2019",
        position: "Senior Java Developer / Solution Architect",
        company: "Volvo VCE",
        description:
          "Designed and implemented integration between Windchill PLM and SAP using Tibco ESB.",
      },
      {
        period: "Dec 2017 - May 2018",
        position: "Senior Java Developer / Solution Architect",
        company: "IIoT (Continental / Vaillant / Fresenius / NCR)",
        description:
          "Led architecture design and performance optimization for industrial IoT solutions.",
      },
      {
        period: "Jun 2014 - Oct 2017",
        position: "Java Developer / Technical Leader",
        company: "MBDA",
        description:
          "Worked on legacy systems integration and Windchill PLM customizations.",
      },
      {
        period: "Sep 2011 - Jun 2014",
        position: "Java Developer",
        company: "Airbus Helicopters / Eurocopter",
        description:
          "Implemented PLM solutions and delivered Windchill PLM customizations.",
      },
      {
        period: "Jul 2011 - Sep 2011",
        position: "Junior Java Developer",
        company: "Lockheed Martin",
        description:
          "Contributed to Java development work in an early-career engineering role.",
      },
    ],
  },
  connect: {
    title: "Let's Connect",
    description:
      "Feel free to reach me out if you want to collaborate or just say hi!",
    email: {
      text: "email",
      href: "mailto:mielczarek.lukasz.karol@gmail.com",
    },
  },
};

export const projectsContent = {
  meta: {
    title: "Projects - Your Portfolio",
    description: "Showcase of my best work and projects",
  },
  title: "My Projects",
  description:
    "Here you can showcase your best work. Each project should include a brief description, the technologies used, and any notable achievements. This helps potential clients or employers understand your capabilities.",
  projects: [
    {
      title: "Project One",
      description:
        "A brief description of your first project. Explain what it does and what technologies you used.",
      image: "/assets/images/projects/project1.jpg",
      href: "#",
    },
    {
      title: "Project Two",
      description:
        "Describe your second project here. Highlight the key features and your role in development.",
      image: "/assets/images/projects/project2.jpg",
      href: "#",
    },
    {
      title: "Project Three",
      description:
        "Share details about your third project. What problems did it solve? What was the outcome?",
      image: "/assets/images/projects/project3.png",
      href: "#",
    },
  ],
};
