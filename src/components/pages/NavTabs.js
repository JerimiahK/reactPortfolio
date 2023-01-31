import { ScrollControls, Scroll } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function NavTabs() {
  return (
    <Canvas style={{ width: "100%", height: "100vh" }}>
      <ScrollControls damping={1} pages={2}>
        <Scroll html style={{ width: "100%" }}>
          <a
            className="button"
            href="/"
            style={{
              position: "absolute",
              top: `20vh`,
              transform: `translate3d(0,-100%,0)`,
            }}
          >
            Home
          </a>
          <a
            className="button"
            href="/projects"
            style={{
              position: "absolute",
              top: "60vh",
              left: "7vw",
              transform: `translate3d(0,-100%,0)`,
            }}
          >
            Projects
          </a>
          <a
            className="button"
            href="/info"
            style={{ position: "absolute", top: "100vh"}}
          >
            Info
          </a>
        </Scroll>
      </ScrollControls>
    </Canvas>
    // <nav className="nav">
    //   <ul className="navbar">
    //     <li className="navbar-item">
    //       <a className="button" href="/">
    //         Home
    //       </a>
    //     </li>
    //     <li className="navbar-item">
    //       <a className="button" href="/projects">
    //         Projects
    //       </a>
    //     </li>
    //     <li className="navbar-item">
    //       <a className="button" href="/info">
    //         Info
    //       </a>
    //     </li>
    //   </ul>
    // </nav>
  );
}
