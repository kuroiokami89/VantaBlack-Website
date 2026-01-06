import { OrbitronLight, Ki } from "./fonts";

const projects = [
  {
    year: "2024",
    type: "E-COMMERCE",
    title: "KRONOS E-COMMERCE | DEMO",
    href: "https://vanta-black-kronos.vercel.app/",
    className: "item-3",
  },
  {
    year: "2024",
    type: "FIGMA PROTOTYPE",
    title: "KRONOS FIGMA PROTHOTYPE",
    href: "https://www.figma.com/design/geHeoJJUyNJfAzgMKroU15/Kronos--2.0---Ecommerce?node-id=0-1&t=aUKnXH3w3MON96t7-1",
    className: "item-2",
  },
  {
    year: "2026",
    type: "PORTFOLIO WEBSITE",
    title: "CAR DETAILER PORTFOLIO WEBSITE",
    href: "https://db-website-nine.vercel.app/",
    className: "item-1",
  },
  {
    year: "2025",
    type: "PORTFOLIO HIGHLIGHTS",
    title: "VISUAL GALLERY",
    href: "/graphic-projects",
    className: "item-4",
  },
];

export default function Projects() {
  return (
    <section id="projects" className={OrbitronLight.className}>
      <div className="section-title" id="projects-title">
        <h2 className={OrbitronLight.className}>PROJECTS</h2>
      </div>
      <div className="container">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.href}
            className={`project-item ${project.className}`}
            target="_blank"
          >
            <div className={`spans ${Ki.className}`}>
              <span>{project.year}</span>
              <span>{project.type}</span>
            </div>
            <h3>{project.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}
