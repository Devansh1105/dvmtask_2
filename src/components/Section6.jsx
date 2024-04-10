import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Section6() {
  return (
<div className="section6"> 
<div className="section6container1"></div>
<div className="section6container2">
    <div className="section6container2heading">What we Move</div>
    <div className="section6container2para">Behind every shipment lies a world of possibilities. Whether it's raw materials, chemicals, consumer goods, or anything else. What we ship isn’t just cargo, we carry your dreams.</div>
    <button className="section6button"><div className="section6buttontext">About our commodities</div> <ArrowForwardIcon style={{fontSize:"small", backgroundColor:"#FFFFFF", color:"#00235d", height:"40px", width:"40px", borderRadius:"50%"}}/></button>
</div>

<div className="section6design"></div>
</div>



  );
}

export default Section6;
