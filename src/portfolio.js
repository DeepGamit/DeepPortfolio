
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";
import IconNodejs from 'react-devicon/nodejs/original-wordmark'

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Deep Gamit",
  title: "Hi, I'm Deep",
  subTitle: emoji("A passionate Full Stack Software Developer 🚀 having an experience of building Web Applications with JavaScript / Reactjs / Nodejs / Redux and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1zrYxIg9ZIxKdcVJuiLs_iT7NcnfS-3mQ/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/deepgamit",
  linkedin: "https://www.linkedin.com/in/deepgamit2105/",
  gmail: "deepkgamit@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/deepkgamit",
  instagram: "https://www.instagram.com/deep_gamit21/"
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "devicon-java-plain"
    },
    {
      skillName: "Html5",
      fontAwesomeClassname: "devicon-html5-plain"
    },
    {
      skillName: "Css3",
      fontAwesomeClassname: "devicon-css3-plain"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "devicon-javascript-plain"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "devicon-react-plain"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "devicon-nodejs-plain-wordmark"
    },
    {
      skillName: "ExpressJS",
      fontAwesomeClassname: "devicon-express-original"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "devicon-bootstrap-plain"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "devicon-mysql-plain"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "devicon-mongodb-plain"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "devicon-amazonwebservices-plain"
    },
    {
      skillName: "Sequelize",
      fontAwesomeClassname: "devicon-sequelize-plain"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "devicon-git-plain"
    },
    {
      skillName: "Visual Studio",
      fontAwesomeClassname: "devicon-visualstudio-plain"
    }
  ],

  competencies : [
      {
        title: "Programming Languages",
        content : [
          "Java", "JavaScript[ES6]", "SQL", "Shell Scripting", "Python", "C++"
        ]
      }, 
      {
        title: "Web Technologies",
        content : [
          "HTML5", "CSS3", "Bootstrap", "ReactJs", "NodeJs", "ExpressJs", "Sequelize", "Redux", "JSX", "RESTful API", "GraphQL", "JSON"
        ]
      }, 
      {
        title: "Java / J2EE",
        content : [
          "Spring MVC", "Hibernate ORM", "Maven", "Apache Tomcat", "JSP", "Servlets", "JSTL", "JavaBeans", "XML", 
        ]
      },
      {
        title: "Database",
        content : [
          "MySQL", "JDBC", "MongoDB", "PostgreSQL", "Firebase", "MS SQL"
        ]
      },
      {
        title: "Tools / Software",
        content : [
          "Git", "GitHub Actions", "Terraform", "Packer", "Netbeans", "Visual Studio Code", "Eclipse", "Spring Tool Suite", "Postman", "Bitbucket"
        ]
      },
      {
        title: "AWS Services",
        content : [
          "IAM", "EC2", "VPC", "S3", "RDS", "CodeDeploy", "Route53"
        ]
      }
  ]


};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Teaching Assistant",  
      company: "Northeastern University",
      companylogo: require("./assets/images/northeastern.png"),
      date: "June 2020 – Present",
      desc: "Graduate Teaching Assistant | CSYE 7230 : Software Engineering",
      descBullets: [
        "Mentored students to learn Software Development Life Cycle [SDLC] & formulating UML Diagrams",
        "Graded assignments of students weekly, assessed their performance and provided them with project feedback"
      ]
    },
    {
      role: "Web Developer",   
      company: "DA-IICT",
      companylogo: require("./assets/images/dhirubhai.png"),
      date: "May 2018 – July 2018",
      desc: "Designed & developed a full-stack web application to help end-users visualize how different patterns & combinations of tiles would look in their space",
      descBullets: [
        "Used HTML5, CSS3, Bootstrap, JavaScript, jQuery, and Firebase as database",
        "Led a 4-person team, following an Agile software development life cycle and worked on Microsoft’s GIT platform in Visual Studio Team Services"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "DeepGamit", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"false" // Set true or false to show Contact profile using Github, defaults to false 
};


// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "",
      image: require("./assets/images/aws_cloud.png"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1Mgpbw33R9q3QgZmAJJtQoosT2uaPu1r1/view?usp=sharing" }
      ]
    },
    {
      title: "JP Morgan Software Engineering Virtual Experience",
      subtitle: "",
      image: require("./assets/images/jp_virtual.jpg"),
      footerLink: [{ name: "Certification", url: "https://drive.google.com/file/d/1paiVe3UdO4pzgOWaURnwECGH7lJmD0Dq/view?usp=sharing" }]
    }
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-(609)-836-4450",
  email_address: "gamit.d@northeastern.edu"
};


export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, achievementSection, contactInfo};
