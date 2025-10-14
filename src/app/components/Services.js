import { OrbitronLight, Kusanagi, Ki } from "./fonts";

export default function Services() {
  return (
    <div id="services" className={`${OrbitronLight.className}`}>
      <div className="section-title">
        <h2 className={`${OrbitronLight.className}`}>MY SKILLS</h2>
      </div>
      <div className={`skills-list ${Ki.className}`}>
        <div className="skilla">
          <span>[01]</span>
          <h3>WEB DEVELOPMENT</h3>
          <p>
            Responsive, performant websites using modern tools (HTML, CSS, JS,
            React/Next.js). Focus on accessibility, maintainable code and fast
            user experiences.
          </p>
          <div className="skill-img skill-1"></div>
        </div>

        <div className="skilla">
          <span>[02]</span>
          <h3>GRAPHIC DESIGN</h3>
          <p>
            Visual identity, logos and layouts for print & digital — strong
            typography, color and composition to communicate your brand.
          </p>
          <div className="skill-img skill-2"></div>
        </div>

        <div className="skilla">
          <span>[03]</span>
          <h3>UX/UI DESIGN</h3>
          <p>
            Wireframes, prototypes and interface design driven by user research
            — clear flows, usable interactions and polished UI components.
          </p>
          <div className="skill-img skill-3"></div>
        </div>

        <div className="skilla">
          <span>[04]</span>
          <h3>PHOTOGRAPHY AND VIDEOMAKING</h3>
          <p>
            Photo and video production: framing, lighting and editing to tell
            stories that work across web and social platforms.
          </p>
          <div className="skill-img skill-4"></div>
        </div>

        <div className="skilla">
          <span>[05]</span>
          <h3>VIDEO AND MOTION DESIGN</h3>
          <p>
            Motion graphics and animation (intros, transitions, kinetic
            typography) to enhance storytelling and add polish to digital
            projects.
          </p>
          <div className="skill-img skill-5"></div>
        </div>
        <div className="skilla">
          <span>[06]</span>
          <h3>MARKETING & ANALYTICS</h3>
          <p>
            SEO and analytics to increase visibility and measure results. Setup
            and optimization with Google Analytics, on-page SEO and data-driven
            improvements that align content and technical changes with business
            goals.
          </p>
          <div className="skill-img skill-6"></div>
        </div>
      </div>
    </div>
  );
}
