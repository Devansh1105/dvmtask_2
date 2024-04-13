import React, {useState,useEffect} from "react";
import Section4container from "./Section4container";

function Section4() {


 
  const [scrollX, setScrollX] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollX(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[]);


  return (
<div className="section4">

<Section4container style={{ transform: `translateX(-${-1000+scrollX/2}px)`, transition:`transform 0.5s ease-out` }}/>
<Section4container style={{ transform: `translateX(${-1600+scrollX/2}px)`, transition:`transform 0.5s ease-out` }}/>
<Section4container style={{ transform: `translateX(-${-1000+scrollX/2}px)`, transition:`transform 0.5s ease-out` }}/>
<Section4container style={{ transform: `translateX(${-1600+scrollX/2}px)`, transition:`transform 0.5s ease-out` }}/>

</div>
  );
}

export default Section4;
