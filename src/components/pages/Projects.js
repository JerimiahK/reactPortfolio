import { ScrollControls, Scroll } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Projects() {
  return (
      <Canvas style={{width: "100%", height: "100vh"}}>
          <ScrollControls damping={0.4} pages={2}>
              <Scroll
                  html
                  style={{
                      width: "100%",
                      height: "100%",
                      right: "calc(var(--pad) * 3)",
                      bottom: "calc(var(--pad) * 8)",
                  }}
              >
                  <section className="page" id="projects">
                      <div className="projects">
                          <div className="projectHeaderContainer">
                              <h1 className="projectHeaderArrow">&#8593;</h1>
                              <h2 className="projectHeader">Scroll To See More</h2>
                          </div>
                          {/* Overland HS Baseball */}
                          <a
                              className="project-item"
                              href="https://overlandbaseball.com/"
                              target="_blank"
                              rel="noreferrer"
                          >
                              <div className="project-title">
                                  Overland HS Baseball
                              </div>
                              <div className="project-info">
                                  2023 / Freelance Work
                              </div>
                          </a>
                          {/* De Novo Beauty */}
                          <a
                              className="project-item"
                              href="https://denovobeauty.netlify.app/"
                              target="_blank"
                              rel="noreferrer"
                          >
                              <div className="project-title">
                                  De Novo Beauty
                              </div>
                              <div className="project-info">
                                  2023 / Freelance Work
                              </div>
                          </a>
                          {/* Fermentations */}
                          <a
                              className="project-item"
                              href="https://fermentationsdemo.netlify.app/"
                              target="_blank"
                              rel="noreferrer"
                          >
                              <div className="project-title">Fermentations</div>
                              <div className="project-info">
                                  2023 / Freelance Work
                              </div>
                          </a>
                          {/* GameSauce */}
                          <a
                              className="project-item"
                              href="https://gamesauce.netlify.app/"
                              target="_blank"
                              rel="noreferrer"
                          >
                              <div className="project-title">GameSauce</div>
                              <div className="project-info">2023 / Project</div>
                          </a>
                          {/* Get Yo Weather */}
                          <a
                              className="project-item"
                              href="https://getyoweather.netlify.app"
                              target="_blank"
                              rel="noreferrer"
                          >
                              <div className="project-title">
                                  Get Yo Weather
                              </div>
                              <div className="project-info">2023 / Project</div>
                          </a>
                          {/* Golden Goose Finance */}
                          <a
                              className="project-item"
                              href="https://golden-goose-finance.herokuapp.com/"
                              target="_blank"
                              rel="noreferrer"
                          >
                              <div className="project-title">
                                  Golden Goose Finance
                              </div>
                              <div className="project-info">2023 / Project</div>
                          </a>
                          {/* Study Buddies */}
                          <a
                              className="project-item"
                              href="https://studybuddiezzz.herokuapp.com/"
                              target="_blank"
                              rel="noreferrer"
                          >
                              <div className="project-title">Study Buddy</div>
                              <div className="project-info">2022 / Project</div>
                          </a>
                      </div>
                  </section>
              </Scroll>
          </ScrollControls>
      </Canvas>
  );
}
