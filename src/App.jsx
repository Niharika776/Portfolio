import { useState, useEffect } from "react";
import "./App.css";

const data = {
  name: "Niharika Chaturvedi",
  tagline: "Full-Stack Developer & Cloud Enthusiast",
  contact: {
    email: "niharikac9772@gmail.com",
    github: "https://github.com/niharika776",
    linkedin: "https://www.linkedin.com/in/niharika0204/",
    phone: "+91-7568262085",
  },
  about:
    "B.Tech IT student at Banasthali Vidyapith (CGPA 8.37) who loves turning ideas into scalable, cloud-deployed products. Currently an Associate SWE Intern at GIIT Solutions, I work across the full stack — Docker, AWS, Node.js, React — and enjoy the craft of writing clean, tested code.",
  experience: [
    {
      role: "Associate Software Engineer Intern",
      company: "GIIT Solutions",
      duration: "Jan 2026 – Jul 2026",
      points: [
        "Containerized Node.js services with Docker & deployed on AWS ECS",
        "Wrote unit + integration tests (Jest/Mocha), reducing production bugs",
        "Optimized PostgreSQL queries for high-frequency insurance workflows",
      ],
      color: "rose",
    },
  ],
  projects: [
    {
      title: "Attendance Management System",
      stack: ["React", "Node.js", "PostgreSQL", "Docker", "AWS EC2"],
      year: "2025",
      highlights: [
        "Automated 75% attendance rule for 200+ students — zero manual calculations",
        "Zero downtime deployment via Docker + AWS EC2",
        "Normalised PostgreSQL schema supporting concurrent multi-user sessions",
      ],
      color: "peach",
    },
    {
      title: "Project Management System",
      stack: ["Node.js", "Express", "MySQL"],
      year: "2024",
      highlights: [
        "RESTful API layer serves task data in < 200 ms",
        "Dynamic marks-tracking saves 2+ hrs per sprint per team lead",
        "MySQL schema with indexing for concurrent multi-team writes",
      ],
      color: "sage",
    },
    {
      title: "Comment Sentiment Analyzer",
      stack: ["Python", "Scikit-learn", "HTML/CSS/JS"],
      year: "2024",
      highlights: [
        "Benchmarked Naive Bayes, SVM, Logistic Regression on 1000+ comments",
        "SVM achieved highest accuracy — selected for production",
        "Reduced moderator review effort by ~60%",
      ],
      color: "lavender",
    },
  ],
  skills: {
    Languages: ["C++", "Java", "JavaScript", "SQL", "Python"],
    Backend: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "MySQL"],
    Frontend: ["React.js", "HTML5", "CSS3"],
    "Cloud / DevOps": ["AWS EC2", "S3", "ECS", "ECR", "Docker", "GitHub"],
    "CS Fundamentals": ["DSA", "OOP", "OS", "DBMS", "Computer Networks"],
    "ML / Data": ["Scikit-learn", "SVM", "Naive Bayes", "Pandas"],
  },
  achievements: [
    { icon: "⚡", text: "Active on LeetCode & GFG — Arrays, Trees, Graphs, DP" },
    { icon: "🎤", text: "Speaker at university seminar on AES Cryptographic Algorithm" },
    { icon: "🏆", text: "Competed in AIC Banasthali WeHack 2023 hackathon" },
  ],
};

const colorMap = {
  rose: { bg: "#fff0f0", accent: "#e07070", tag: "#ffd6d6", tagText: "#a03030" },
  peach: { bg: "#fff4ee", accent: "#e08050", tag: "#ffdcc8", tagText: "#943d15" },
  sage: { bg: "#f0f6f0", accent: "#5a9060", tag: "#cce3cc", tagText: "#2d5e2d" },
  lavender: { bg: "#f3f0fb", accent: "#7c68c8", tag: "#ddd6f5", tagText: "#4a3890" },
};

function Pin({ children, className = "", style = {} }) {
  return (
    <div className={`pin ${className}`} style={style}>
      {children}
    </div>
  );
}

function Tag({ label, color }) {
  const c = colorMap[color] || colorMap.lavender;
  return (
    <span
      className="tag"
      style={{ background: c.tag, color: c.tagText }}
    >
      {label}
    </span>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <div className={`app ${loaded ? "loaded" : ""}`}>
      {/* Decorative background blobs */}
      <div className="blob blob1" />
      <div className="blob blob2" />
      <div className="blob blob3" />

      {/* ─── HERO ─── */}
      <header className="hero">
        <div className="hero-inner">
          <div className="avatar-ring">
            <div className="avatar">NC</div>
          </div>
          <h1 className="hero-name">{data.name}</h1>
          <p className="hero-tagline">{data.tagline}</p>
          <div className="hero-links">
            <a href={`mailto:${data.contact.email}`} className="pill-link">✉ Email</a>
            <a href={data.contact.github} target="_blank" rel="noreferrer" className="pill-link">⌥ GitHub</a>
            <a href={data.contact.linkedin} target="_blank" rel="noreferrer" className="pill-link">↗ LinkedIn</a>
          </div>
        </div>
      </header>

      {/* ─── MASONRY BOARD ─── */}
      <main className="board">

        {/* About Me */}
        <Pin className="pin-about pin-stagger-1">
          <span className="pin-label">About Me</span>
          <p className="about-text">{data.about}</p>
          <div className="edu-card">
            <span className="edu-degree">B.Tech — Information Technology</span>
            <span className="edu-school">Banasthali Vidyapith, Jaipur · 2022–2026</span>
            <span className="edu-cgpa">CGPA 8.37 / 10.0</span>
          </div>
        </Pin>

        {/* Experience */}
        {data.experience.map((exp) => (
          <Pin
            key={exp.role}
            className="pin-stagger-2"
            style={{ borderTop: `4px solid ${colorMap[exp.color].accent}` }}
          >
            <span className="pin-label">Experience</span>
            <h3 className="exp-role">{exp.role}</h3>
            <p className="exp-company">{exp.company}</p>
            <p className="exp-duration">{exp.duration}</p>
            <ul className="exp-points">
              {exp.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Pin>
        ))}

        {/* Projects */}
        {data.projects.map((proj, i) => {
          const c = colorMap[proj.color];
          return (
            <Pin
              key={proj.title}
              className={`pin-project pin-stagger-${i + 3}`}
              style={{ background: c.bg, borderTop: `4px solid ${c.accent}` }}
            >
              <div className="proj-header">
                <span className="pin-label">Project · {proj.year}</span>
              </div>
              <h3 className="proj-title">{proj.title}</h3>
              <div className="tag-row">
                {proj.stack.map((s) => (
                  <Tag key={s} label={s} color={proj.color} />
                ))}
              </div>
              <ul className="proj-highlights">
                {proj.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </Pin>
          );
        })}

        {/* Skills */}
        <Pin className="pin-skills pin-stagger-4">
          <span className="pin-label">Skills</span>
          {Object.entries(data.skills).map(([category, items]) => (
            <div key={category} className="skill-group">
              <span className="skill-category">{category}</span>
              <div className="skill-tags">
                {items.map((item) => (
                  <span key={item} className="skill-chip">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </Pin>

        {/* Achievements */}
        <Pin className="pin-achievements pin-stagger-5">
          <span className="pin-label">Highlights</span>
          <div className="achieve-list">
            {data.achievements.map((a) => (
              <div key={a.text} className="achieve-item">
                <span className="achieve-icon">{a.icon}</span>
                <span className="achieve-text">{a.text}</span>
              </div>
            ))}
          </div>
        </Pin>

        {/* Contact CTA */}
        <Pin className="pin-contact pin-stagger-6">
          <span className="pin-label">Let's Connect</span>
          <p className="contact-sub">Open to internships, collabs & cool projects.</p>
          <a href={`mailto:${data.contact.email}`} className="cta-btn">
            Say Hello →
          </a>
          <div className="contact-details">
            <span>{data.contact.phone}</span>
            <span>{data.contact.email}</span>
          </div>
        </Pin>

      </main>

      <footer className="footer">
        <p>Crafted with ♥ by Niharika Chaturvedi</p>
      </footer>
    </div>
  );
}
