import React, {useState, useEffect} from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Section10card from "./Section10card";


function Section10() {


const [scrollX, setScrollX] = useState(0);

function handleClick1(){
setScrollX((prevScroll)=> prevScroll-1100);
}


function handleClick2(){
  
  if (scrollX<2000){
    setScrollX((prevScroll)=> prevScroll+1100);
    }
}

useEffect(() => {
  console.log("scrollX:", scrollX); 
}, [scrollX]);


  return (
<div className="section10">
<div className="section10design">
<div className="section10subhead">BLOG</div>
<div className="section10head">What's New at MPL</div>
<button className="section10button"><div className="section10buttontext">All Articles</div> <ArrowForwardIcon style={{fontSize:"small", backgroundColor:"#FFFFFF", color:"#00235d", height:"40px", width:"40px", borderRadius:"50%"}}/></button>
</div>
<div className="sec10scrollbutton2" style={scrollX<10? {opacity:0.5, transition:'opacity 0.25s ease-out'}:{opacity: 1 }}><button onClick={handleClick1} style={{width:"64px", height:"64px", borderRadius:"50%", border:"none"}}><ArrowForwardIcon style={{fontSize:"small", color:"#FFFFFF", backgroundColor:"#00235d", height:"64px", width:"64px", borderRadius:"50%"}}/></button></div>
<div className="sec10scrollbutton1" style={scrollX>2000? {opacity:0.5, transition:'opacity 0.25s ease-out'}:{opacity: 1 }}><button onClick={handleClick2}  style={{width:"64px", height:"64px", borderRadius:"50%", border:"none"}}><ArrowForwardIcon style={{fontSize:"small", color:"#FFFFFF", backgroundColor:"#00235d", height:"64px", width:"64px", borderRadius:"50%"}}/></button></div>


<div className="section10container" style={{ transform: `translateX(-${scrollX}px)`, transition:`transform 0.5s ease-out` }}>
<Section10card head="The Journey of Manuport Logistics Spain: Growth, Challenges, and Successes" para="Manuport Logistics has just completed a year of consolidation in Spain, during which the teams were integrated. It is now about to open new offices in Valencia and plans to open offices in Alicante and Algeciras." img="https://a.storyblok.com/f/240783/2000x741/1b3192a40c/image00001.jpeg/m/1360x930/filters:quality(95):focal(1105x470:1106x471)"/>
<Section10card head="The Journey of Manuport Logistics Spain: Growth, Challenges, and Successes" para="Manuport Logistics has just completed a year of consolidation in Spain, during which the teams were integrated. It is now about to open new offices in Valencia and plans to open offices in Alicante and Algeciras." img="https://a.storyblok.com/f/240783/2000x741/1b3192a40c/image00001.jpeg/m/1360x930/filters:quality(95):focal(1105x470:1106x471)"/>
<Section10card head="The Journey of Manuport Logistics Spain: Growth, Challenges, and Successes" para="Manuport Logistics has just completed a year of consolidation in Spain, during which the teams were integrated. It is now about to open new offices in Valencia and plans to open offices in Alicante and Algeciras." img="https://a.storyblok.com/f/240783/2000x741/1b3192a40c/image00001.jpeg/m/1360x930/filters:quality(95):focal(1105x470:1106x471)"/>
<Section10card head="The Journey of Manuport Logistics Spain: Growth, Challenges, and Successes" para="Manuport Logistics has just completed a year of consolidation in Spain, during which the teams were integrated. It is now about to open new offices in Valencia and plans to open offices in Alicante and Algeciras." img="https://a.storyblok.com/f/240783/2000x741/1b3192a40c/image00001.jpeg/m/1360x930/filters:quality(95):focal(1105x470:1106x471)"/>
<Section10card head="The Journey of Manuport Logistics Spain: Growth, Challenges, and Successes" para="Manuport Logistics has just completed a year of consolidation in Spain, during which the teams were integrated. It is now about to open new offices in Valencia and plans to open offices in Alicante and Algeciras." img="https://a.storyblok.com/f/240783/2000x741/1b3192a40c/image00001.jpeg/m/1360x930/filters:quality(95):focal(1105x470:1106x471)"/>
<Section10card head="The Journey of Manuport Logistics Spain: Growth, Challenges, and Successes" para="Manuport Logistics has just completed a year of consolidation in Spain, during which the teams were integrated. It is now about to open new offices in Valencia and plans to open offices in Alicante and Algeciras." img="https://a.storyblok.com/f/240783/2000x741/1b3192a40c/image00001.jpeg/m/1360x930/filters:quality(95):focal(1105x470:1106x471)"/>
<Section10card head="The Journey of Manuport Logistics Spain: Growth, Challenges, and Successes" para="Manuport Logistics has just completed a year of consolidation in Spain, during which the teams were integrated. It is now about to open new offices in Valencia and plans to open offices in Alicante and Algeciras." img="https://a.storyblok.com/f/240783/2000x741/1b3192a40c/image00001.jpeg/m/1360x930/filters:quality(95):focal(1105x470:1106x471)"/>
<Section10card head="The Journey of Manuport Logistics Spain: Growth, Challenges, and Successes" para="Manuport Logistics has just completed a year of consolidation in Spain, during which the teams were integrated. It is now about to open new offices in Valencia and plans to open offices in Alicante and Algeciras." img="https://a.storyblok.com/f/240783/2000x741/1b3192a40c/image00001.jpeg/m/1360x930/filters:quality(95):focal(1105x470:1106x471)"/>
<Section10card head="The Journey of Manuport Logistics Spain: Growth, Challenges, and Successes" para="Manuport Logistics has just completed a year of consolidation in Spain, during which the teams were integrated. It is now about to open new offices in Valencia and plans to open offices in Alicante and Algeciras." img="https://a.storyblok.com/f/240783/2000x741/1b3192a40c/image00001.jpeg/m/1360x930/filters:quality(95):focal(1105x470:1106x471)"/>
</div>


</div>
  );
}

export default Section10;




