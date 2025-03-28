import { Kusanagi, OrbitronLight, Ki } from "./fonts";

// Projects list
const projects = [
  {
    year: "2022",
    type: "PERSONAL WEBSITE",
    title: "VANTABLACK WEBSITE 1.0",
    href: "https://kuroiokami89.github.io/Vantablack-Portfolio-2.0/",
    className: "item-1",
  },
  {
    year: "2025",
    type: "PORTFOLIO HIGHLIGHTS",
    title: "VISUAL GALLERY",
    href: "/graphic-projects",
    className: "item-4",
  },
  {
    year: "2024",
    type: "E-COMMERCE",
    title: "KRONOS ONLINE SHOP",
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
];

export default function Projects() {
  return (
    <section id="projects" className={OrbitronLight.className}>
      <div className="section-title" id="projects-title">
        <h2 className={Kusanagi.className}>PROJECTS</h2>
      </div>
      <div className="container">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.href}
            className={`project-item ${project.className}`}
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
