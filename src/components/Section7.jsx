import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Section7() {

  window.addEventListener('scroll', function(){
if(this.window.innerWidth>770){

const target = document.querySelector('.parallax');
var rate=  (window.scrollY-5000)*0.2;
target.style.transform= 'translate3d(0px,'+rate+'px, 0px)';

}

else{
  document.querySelector('.parallax').style.transform = 'translate3d(0px, 0px, 0px)';

}


  });







  return (
<div className="section7"> 
<div className="section7container1">
    <div className="section7container1heading">A Fully Transparent Logistics Flow at your Fingertips</div>
    <div className="section7container1para">We map out your entire logistics flow, so you always know the whereabouts of your cargo. With our user-friendly tool, you have full control and can make quick adjustments when necessary.</div>
    <button className="section7button"><div className="section7buttontext">Discover our customer portal</div> <ArrowForwardIcon style={{fontSize:"small", backgroundColor:"#00358D", color:"white", height:"40px", width:"40px", borderRadius:"50%"}}/></button>
</div>
<div className="section7container2 parallax"><img  src="https://a.storyblok.com/f/240783/1080x622/44f5d62fa7/screen_business.png/m/1024x1192/filters:quality(95):focal()"></img> </div>
</div>
  );
}

export default Section7;
