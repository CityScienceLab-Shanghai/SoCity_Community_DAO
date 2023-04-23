import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { stateStore } from "./stores";
import ResPage from "./components/0.3_resolution/ResPage";
import Layout1 from './components/Layout/Layout1';
import { SplitScreen } from "./components/Layout/SplitScreen";


const App = () => {

  const RightHandComponent = () =>{
    return <p>  Right!</p>;
  }
  const LeftHandComponent = () =>{
    return <p>  Left!</p>;
  }


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
    // <div style={{textAlign: "center", fontSize: "32px", color: "white"}}>
    //   <Navigation />
    //   <h5>SoCity Community DAO</h5>
    //   {content[page]}
    // </div>

    <Layout1 >
      {/* <div style={{textAlign: "center", fontSize: "32px", color: "white"}}>
        <h5>SoCity Community DAO</h5>
      </div>
      {content[page]} */}
      
    </Layout1>
  );
};

export default App;

export function renderToDOM(container) {
  render(<App />, container);
}
