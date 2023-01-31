import { Route, Routes } from "react-router-dom";
import NavTabs from "./pages/NavTabs";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import Info from "./pages/Info";
import Three from "./pages/Three";

export default function PageContainer() {
  return (
    <div id="page">
      <Three />
      <div className="mask" id="Mask">
        <div className="maskTop"></div>
        <div className="maskBottom"></div>
      </div>
      <div className="frame" id="Frame">
        <div className="frame_line frame_line_left"></div>
        <div className="frame_line frame_line_right"></div>
        <div className="frame_line frame_line_top"></div>
        <div className="frame_line frame_line_bottom"></div>
      </div>
      <header id="header">
        <h1>Jerimiah Kripakov</h1>
        <p>Creative//Designer//Developer</p>
        <NavTabs />
      </header>
      <main className="content">
        <div className="inner-content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
