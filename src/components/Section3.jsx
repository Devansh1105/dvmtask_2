import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Section3() {
  return (
<div className="section3">
<div style={{position:"relative"}}>
<p className="section3heading">OUR LOCATIONS</p>
<div className="section3paracontainer"><p className="section3para">Around the world, our teams are dedicated to meeting your logistics needs. As part of the Euroports Group, we can leverage group assets to support our solutions and add financial stability and flexibility, which is all to your benefit. Spin the globe and find your location.</p></div>
<button className="section3button"><div className="section3buttontext">All Locations</div> <ArrowForwardIcon style={{fontSize:"small", backgroundColor:"#00358D", color:"white", height:"40px", width:"40px", borderRadius:"50%"}}/></button>
<div className="section3design"></div>

</div>
</div>
  );
}

export default Section3;
