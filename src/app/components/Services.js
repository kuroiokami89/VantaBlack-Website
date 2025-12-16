import { OrbitronLight, Ki } from "./fonts";

export default function Services() {
  return (
    <div id="services" className={`${OrbitronLight.className}`}>
      <div className="section-title">
        <h2 className={`${OrbitronLight.className}`}>SKILLS</h2>
      </div>
      <div className={`services-list ${Ki.className}`}>
        <div className="service">
          <span>[01]</span>
          <h3>WEB DEVELOPMENT</h3>
          <p>
            Responsive, performant websites using modern tools (HTML, CSS, JS,
            React/Next.js). Focus on accessibility, maintainable code and fast
            user experiences.
          </p>
          <div className="service-img service-1"></div>
        </div>

        <div className="service">
          <span>[02]</span>
          <h3>UX/UI DESIGN</h3>
          <p>
            Wireframes, prototypes and interface design driven by user research
            — clear flows, usable interactions and polished UI components.
          </p>
          <div className="service-img service-3"></div>
        </div>

        <div className="service">
          <span>[03]</span>
          <h3>GRAPHIC DESIGN</h3>
          <p>
            Visual identity, logos and layouts for print & digital — strong
            typography, color and composition to communicate your brand.
          </p>
          <div className="service-img service-2"></div>
        </div>

        <div className="service">
          <span>[04]</span>
          <h3>PHOTOGRAPHY AND VIDEOMAKING</h3>
          <p>
            Photo and video production: framing, lighting and editing to tell
            stories that work across web and social platforms.
          </p>
          <div className="service-img service-4"></div>
        </div>
        {/* <div className="service">
          <span>[05]</span>
          <h3>VIDEO AND MOTION DESIGN</h3>
          <p>
            Motion graphics and animation (intros, transitions, kinetic
            typography) to enhance storytelling and add polish to digital
            projects.
          </p>
          <div className="service-img service-5"></div>
        </div> */}
      </div>
    </div>
  );
}
