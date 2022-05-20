import {useState, useEffect} from "react";

function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const {innerWidth: width, innerHeight: height} = window as Window;

    return {
      width,
      height,
    };
  }

  return {
    width: 2000,
    height: 2000,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
