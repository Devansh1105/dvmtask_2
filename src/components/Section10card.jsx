import React from "react";




function Section10card(props){
return(
<div className="section10card">
<img style={{height:"40%", borderTopRightRadius:"50px"}} src={props.img}></img>
<div style={{height:"60%", backgroundColor:"white", paddingLeft:"20px",paddingRight:"5px"}}>
    <p className="section10cardhead">{props.head}</p>
    <p className="section10cardpara">{props.para}</p>
</div>
</div>
);
}



export default Section10card;