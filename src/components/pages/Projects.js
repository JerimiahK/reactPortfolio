import { ScrollControls, Scroll } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Projects() {
  return (
    <Canvas style={{ width: "100%", height: "100vh" }}>
      <ScrollControls damping={1} pages={2}>
        <Scroll
          html
          style={{
            width: "100%",
            right: "calc(var(--pad) * 3)",
            bottom: "calc(var(--pad) * 8)",
          }}
        >
          <section className="page" id="projects">
            <div className="projects">
              <a
                className="project-item"
                href="https://gamesauce-project.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="project-title">GameSauce</div>
                <div className="project-info">2023 / Project</div>
              </a>
              <a
                className="project-item"
                href="https://golden-goose-finance.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="project-title">Golden Goose Finance</div>
                <div className="project-info">2023 / Project</div>
              </a>
              <a
                className="project-item"
                href="https://studybuddiezzz.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="project-title">STUDY BUDDY Application</div>
                <div className="project-info">2022 / Project</div>
              </a>
              <a
                className="project-item"
                href="https://jerimiahk.github.io/WEBaboos/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="project-title">WEBABOOS Application</div>
                <div className="project-info">2022 / Project</div>
              </a>
            </div>
          </section>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}
