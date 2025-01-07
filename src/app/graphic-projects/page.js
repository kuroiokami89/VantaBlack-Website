import { NeutralFace } from "../components/fonts.js";

export default function GraphicProjectsPage() {
  return (
    <div id="graphic-page" className={`blocco ${NeutralFace.className}`}>
      <p>
        Lorem ipsum dolor sit amet, consectetu-ravida tincidunt pellentesque.
        Donec mattis, lorem sit amet interdum vehicula, felis leo mattis enim,
        sit amet maximus tortor nunc ut nisi. Praesent ipsum diam, dapibus non
        nisi sed, malesuada convallis metus. Nulla gravida congue metus vitae
        vulputate. Vestibulum consequat condimentum erat sed ultrices. Proin in
        massa quam. Mauris lobortis aliquet tortor, eget consequat nibh semper
        at. In accumsan nec lectus sit amet facilisis. Phasellus mattis erat ut
        rhoncus pretium.
      </p>
      <div className="projects-list">
        <img src="/foto/g1.png" alt="Graphic Project 1" />
        <img src="/foto/g2.png" alt="Graphic Project 2" />
        {/* <img src="/foto/g3.jpg" alt="Graphic Project 3" />
        <img src="/foto/g3.jpg" alt="Graphic Project 3" /> */}
      </div>
    </div>
  );
}
