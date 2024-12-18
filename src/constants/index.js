import {
    
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    C,
    TheKeg,
    TimHortons,
    Hillfield,
   StockAnalysis,
    threejs,
  } from "../assets";
  
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
  
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "C++",
      icon: C,

    },
    
    
  ];
  
  const experiences = [
    {
      title: "Grounds & Maintenance",
      company_name: "Hillfield Strathallan College",
      icon: Hillfield,
      iconBg: "#383E56",
      date: ["Apr 2024 - Aug 2024"],
      points: [
        "Completed assigned projects such as renovating classrooms both independently and within a team, leading to an enhanced school environment",
        "Managed landscaping tasks including mowing, trimming, and tree care, optimizing resource use for long-term sustainability",
        "Assisted with inventory management, tracking tools, materials, and equipment to ensure smooth daily operations",
        "Collaborated with a small team, improving communication and teamwork skills"
      ],
      
    },
    {
      title: "Dishwasher",
      company_name: "The Keg Steakhouse + Bar",
      icon: TheKeg,
      iconBg: "#E6DEDD",
      date: "Apr 2022 - Feb 2023",
      points: [
        "Collaborated with other team members to maintain efficient kitchen operations in a fast-paced environment ",
        "Maintained cleanliness in the workplace to abide by policies and procedures outlined in the Occupational Health & Safety Act"
      ],
    },
    {
      title: "Counter Staff",
      company_name: "Tim Hortons",
      icon: TimHortons,
      iconBg: "#383E56",
      date: "Dec 2019 - Apr 2022",
      points: [
       " Prepared upwards of 300 food and drink items per day as per Tim Horton’s “Always Fresh” standards ",
       " Provided exceptional customer service and food preparation for all customers"
      ],
    },
    
    
    /*{
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },*/
  ];
  
  const projects = [
    {
      name: "Stock Analysis System",
      description:
        "Stock analysis system coded in C++ that retrieves real-time stock data from an API and offers robust functionality for financial analysis.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "Object Oriented Programming",
          color: "green-text-gradient",
        },
      ],
      image: StockAnalysis,
      source_code_link: "https://github.com/AvanPuri/Stock-Analysis-System",
    },
  ]
  export {technologies, experiences,projects };