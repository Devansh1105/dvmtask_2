import React, {useState, useEffect} from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';




function Section5() {


  const [showImg, setShowImg] = useState(1);
  let imgChange = null;

  const startAutoScroll = () => {
    imgChange = setInterval(() => {
      setShowImg((prevImg) =>
      prevImg ===  5 ? 1 : prevImg + 1  
      );
    }, 2000);
  };

  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(imgChange);
  }, );


  return (
<div className="section5"> 
<div className="section5container1">
    <div className="section5container1heading">How we Move</div>
    <div className="section5container1para">Manuport Logistics offers a different approach to shipping, guided by creative thinking. Ship, barge, plane, train, truck, or a combination. For you, we move mountains.</div>
    <button className="section5button"><div className="section5buttontext">Discover our services</div> <ArrowForwardIcon style={{fontSize:"small", backgroundColor:"#00358D", color:"white", height:"40px", width:"40px", borderRadius:"50%"}}/></button>
</div>
<div className="section5container2">


<div className={showImg === 1 ? "sec5cont2img sec5show" : "sec5cont2img"}><img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2FsliderFallback%2FCargo-Plane-Business.png&w=1720&q=75" ></img></div>
<div className={showImg === 2 ? "sec5cont2img sec5show" : "sec5cont2img"}><img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2FsliderFallback%2FCargo-Barging-Business.png&w=1720&q=75"></img></div>
<div  className={showImg === 3 ? "sec5cont2img sec5show" : "sec5cont2img"}><img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2FsliderFallback%2FCargo-Rail-Business.png&w=1720&q=75"></img></div>
<div className={showImg === 4 ? "sec5cont2img sec5show" : "sec5cont2img"}><img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2FsliderFallback%2FCargo-Truck-Business.png&w=1720&q=75"></img></div>
<div className={showImg === 5 ? "sec5cont2img sec5show" : "sec5cont2img"}><img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2FsliderFallback%2FCargo-Ship-Business.png&w=1720&q=75"></img></div>

</div>
</div>
  );
}

export default Section5;
