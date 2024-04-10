import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Section5() {
  return (
<div className="section5"> 
<div className="section5container1">
    <div className="section5container1heading">How we Move</div>
    <div className="section5container1para">Manuport Logistics offers a different approach to shipping, guided by creative thinking. Ship, barge, plane, train, truck, or a combination. For you, we move mountains.</div>
    <button className="section5button"><div className="section5buttontext">Discover our services</div> <ArrowForwardIcon style={{fontSize:"small", backgroundColor:"#00358D", color:"white", height:"40px", width:"40px", borderRadius:"50%"}}/></button>
</div>
<div className="section5container2"></div>
</div>
  );
}

export default Section5;
