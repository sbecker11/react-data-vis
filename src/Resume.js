// src/Resume.js
import React from "react";
import "./Resume.css";

const resumeData = {
  name: "John Doe",
  title: "Software Engineer",
  contact: {
    email: "johndoe@example.com",
    phone: "123-456-7890",
    linkedin: "linkedin.com/in/johndoe",
    github: "github.com/johndoe",
  },
  summary:
    "Experienced software engineer with a passion for building scalable and maintainable applications.",
  skills: ["JavaScript", "React", "Node.js", "Express.js", "MongoDB"],
  experience: [
    {
      company: "ABC Company",
      title: "Software Engineer",
      duration: "June 2018 - Present",
      responsibilities: [
        "Developed and maintained a large-scale web application using React and Node.js",
        "Collaborated with a team of engineers to design and implement new features",
        "Wrote unit tests and integration tests to ensure code quality and reliability",
      ],
    },
  ],
  education: [
    {
      institution: "XYZ University",
      degree: "Bachelor of Science in Computer Science",
      duration: "2014 - 2018",
    },
  ],
  projects: [
    {
      name: "Project 1",
      description:
        "A web application that allows users to track their expenses and visualize their spending habits.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/johndoe/expense-tracker",
    },
  ],
};

function Contact() {
  const contact = resumeData.contact;
  return (
    <div>
      <h2>Contact</h2>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>
        LinkedIn:{" "}
        <a
          href={`https://${contact.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {contact.linkedin}
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a
          href={`https://${contact.github}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {contact.github}
        </a>
      </p>
    </div>
  );
}

function Summary() {
  const { summary } = resumeData;
  return (
    <div>
      <h2>Summary</h2>
      <p>{summary}</p>
    </div>
  );
}

function Skills() {
  const skillsList = [];
  for (let i = 0; i < resumeData.skills.length; i++) {
    skillsList.push(<li key={i}>{resumeData.skills[i]}</li>);
  }
  return (
    <div>
      <h2>Skills</h2>
      <ul>(skillsList)</ul>
    </div>
  );
}

function Experience() {
  return (
    <div>
      <h2>Experience</h2>
      {resumeData.experience.map((job, index) => (
        <div key={index}>
          <h3>{job.company}</h3>
          <h4>{job.title}</h4>
          <p>{job.duration}</p>
          <ul>
            {job.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Education() {
  return (
    <div>
      <h2>Education</h2>
      {resumeData.education.map((edu, index) => (
        <div key={index}>
          <h3>
            {edu.degree} from {edu.institution}
          </h3>
          <p>{edu.duration}</p>
        </div>
      ))}
    </div>
  );
}

function Projects() {
  const projects = resumeData.projects;
  return (
    <div>
      <h3>Projects</h3>
      {projects.map((project, index) => (
        <div key={index}>
          <h4>{project.name}</h4>
          <p>{project.description}</p>
          <p>Technologies: {project.technologies.join(", ")}</p>
          <p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.link}
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}

function Resume() {
  return (
    <div className="resume">
      <h1>{resumeData.name}</h1>
      <h2>{resumeData.title}</h2>
      <Contact />
      <Summary />
      <Skills />
      <Experience />
      <Education />
      <Projects />
    </div>
  );
}

export default Resume;
