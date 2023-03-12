import React, { useRef, useEffect, useState } from "react";

function Demo() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const myDivRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [screenSize]);

  const display = () => {
    if (screenSize.width > 768) {
      myDivRef.current.style.display = "block";
    } else {
      myDivRef.current.style.display = "none";
    }
  };
  return (
    <>
      <button onClick={display}>click</button>
      <div ref={myDivRef} className="my-class">
        {screenSize <= 768 ? (
          <p>You are on a small screen</p>
        ) : (
          <p>You are on a large screen</p>
        )}
      </div>
    </>
  );
}

export default Demo;
