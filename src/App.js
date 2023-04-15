import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { stateStore } from "./stores";
import ResPage from "./components/0.3_resolution/ResPage";

const CHOARD_DATA_PATH = "/data/chord_data_3.csv";
const PIE_DATA_PATH = "/data/pie_new@4.csv";

const App = () => {
  // const { page } = stateStore;
  const { page } = stateStore;

  //responsive design
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [isMobile, setIsMobile] = useState(false);

  // handle windows resize
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowSize.width < 1100 || windowSize.height < 400) setIsMobile(true);
    else setIsMobile("ontouchstart" in document.documentElement);
  }, [windowSize.width, windowSize.height]);

  const content = {
    1: <h2 style={{textAlign: "center", fontSize: "20px", color: "white"}}>Let's start!</h2>,
  };

  return isMobile ? (
    <ResPage />
  ) : (
    <div style={{textAlign: "center", fontSize: "32px", color: "white"}}>
      <h1>SoCity Community DAO</h1>
      {content[page]}
    </div>
  );
};

export default App;

export function renderToDOM(container) {
  render(<App />, container);
}