import React from "react";
import ReactDOM from "react-dom/client";
import {
  Shield,
  Terminal,
  Award,
  BriefcaseBusiness,
  ChevronRight,
} from "lucide-react";
import "./style.css";

const certs = [
  ["Microsoft Certified: Security Operations Analyst Associate (SC-200)", "Certified"],
  ["CompTIA Security+", "Certified"],
  ["Microsoft 365 Certified: Endpoint Administrator Associate (MD-102)", "Certified"],
  ["Microsoft 365 Certified: Administrator Expert", "Certified"],
  ["CompTIA Network+", "Certified"],
  ["CompTIA A+", "Certified"],
  ["Microsoft Azure Administrator (AZ-104)", "In Progress"],
  ["CompTIA Cybersecurity Analyst (CySA+)", "In Progress"],
];

const skills = [
  "Microsoft Sentinel",
  "Microsoft Defender",
  "Endpoint Security",
  "Microsoft 365",
  "Incident Handling",
  "Troubleshooting",
  "Escalation",
  "Networking",
];

const projects = [
  [
    "SOC Investigation Lab",
    "Security Operations",
    "Documenting alert triage, investigation methodology, evidence, findings and escalation decisions.",
  ],
  [
    "Microsoft Sentinel Lab",
    "SIEM",
    "A project area for Sentinel analytics, incidents, KQL investigations and security monitoring exercises.",
  ],
  [
    "Endpoint Security & Response",
    "Endpoint",
    "Showcasing endpoint troubleshooting, security-focused investigation, remediation and support experience.",
  ],
];

function App() {
  return (
    <main>
      <nav>
  #home
    <Shield size={20} /> MS
  <nav>
  <div className="brand">
    <Shield size={20} />
    <span>MS</span>
  </div>

  <div className="links">
    <span>About</span>
    <span>Experience</span>
    <span>Certifications</span>
    <span>Projects</span>
    <span>Contact</span>
  </div>
</nav>
      <section id="home" className="hero">
        <div>
          <span className="pill">● IT Support → Cybersecurity</span>

          <h1>
            Mulweli
            <br />
            <b>Sinyegwe</b>
          </h1>

          <h3>First Responder Technician | Aspiring SOC Analyst</h3>

          <p>
            Building on hands-on endpoint support, incident handling,
            troubleshooting and Microsoft 365 experience to transition into
            security operations. Focused on detection, investigation, response
            and continuous development.
          </p>

          <div className="buttons">
            #projects
              View Security Projects
            </a>

            #contact
              Contact Me
            </a>
          </div>
        </div>

        <div className="terminal">
          <Terminal />

          <p>
            <i>$</i> role --current
            <br />
            <strong>First Responder Technician</strong>
            <br />
            <i>$</i> target --career
            <br />
            <strong>SOC Analyst / Cybersecurity Analyst</strong>
            <br />
            <i>$</i> status
            <br />
            <em>Continuously learning and building.</em>
          </p>
        </div>
      </section>

      <section id="about" className="band">
        <small>ABOUT</small>

        <h2>From frontline support to security operations</h2>

        <p>
          I am an IT professional with a strong foundation in endpoint support,
          networking, Microsoft 365 administration, incident handling and
          escalation. I am deliberately developing my security operations
          capabilities through industry certifications and practical labs,
          with the goal of moving into a dedicated SOC Analyst role.
        </p>
      </section>

      <section id="experience">
        <small>EXPERIENCE</small>

        <div className="card experience">
          <BriefcaseBusiness />

          <div>
            <h2>First Responder Technician</h2>
            <span>Cyberlogic</span>

            <ul>
              <li>
                Frontline troubleshooting and incident handling across user and
                endpoint environments.
              </li>
              <li>
                Endpoint support with structured investigation, remediation and
                escalation.
              </li>
              <li>
                Microsoft Teams, Outlook and Microsoft 365 troubleshooting and
                administration support.
              </li>
              <li>
                Clear documentation of technical findings, actions taken and
                next steps for escalation.
              </li>
              <li>
                Strong networking and hardware troubleshooting foundation.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="certifications" className="band">
        <small>CERTIFICATIONS</small>

        <h2>Continuous professional development</h2>

        <div className="grid">
          {certs.map(([name, status]) => (
            <div className="card cert" key={name}>
              <Award className={status === "In Progress" ? "amber" : ""} />

              <div>
                <strong>{name}</strong>

                <span
                  className={
                    status === "In Progress"
                      ? "status progress"
                      : "status"
                  }
                >
                  {status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <small>CAPABILITIES</small>

        <h2>Technical focus</h2>

        <div className="skills">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section id="projects" className="band">
        <small>PROJECTS</small>

        <h2>Security portfolio</h2>

        <p>
          Starter areas for completed lab evidence, screenshots and GitHub
          write-ups.
        </p>

        <div className="projects">
          {projects.map(([title, category, description]) => (
            <article className="card" key={title}>
              <small>{category}</small>

              <h3>{title}</h3>

              <p>{description}</p>

              <span className="project-link">
                Project write-up <ChevronRight size={16} />
              </span>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Let's connect</h2>

        <p>
          Open to opportunities where I can continue growing toward security
          operations and contribute my support, endpoint and incident-handling
          experience.
        </p>

        <a
          className="primary"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/mulweli-sinyegwe-a1b142175"
        >
          LinkedIn
        </a>
      </section>

      <footer>
        © 2026 Mulweli Sinyegwe · Cybersecurity Portfolio
      </footer>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
