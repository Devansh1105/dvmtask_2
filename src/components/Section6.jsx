import React, {useState, useEffect} from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Section6() {



  const [showImg, setShowImg] = useState(1);
  let imgChange = null;

  const startAutoScroll = () => {
    imgChange = setInterval(() => {
      setShowImg((prevImg) =>
      prevImg ===  13 ? 1 : prevImg + 1  
      );
    }, 1000);
  };

  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(imgChange);
  }, );

















  return (
<div className="section6"> 
<div className="section6container1">

<div className={showImg === 1 ? "sec6cont1img sec6show" : "sec6cont1img"}><img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FMinerals-Business.png&w=1720&q=75" ></img></div>
<div className={showImg === 2 ? "sec6cont1img sec5show" : "sec6cont1img"}><img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FSteel-Business.png&w=1720&q=75"></img></div>
<div className={showImg === 3 ? "sec6cont1img sec6show" : "sec6cont1img"}><img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FWood-Business.png&w=1720&q=75" ></img></div>
<div className={showImg === 4 ? "sec6cont1img sec6show" : "sec6cont1img"}><img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FProjectCargo-Business.png&w=1720&q=75" ></img></div>
<div className={showImg === 5 ? "sec6cont1img sec6show" : "sec6cont1img"}><img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FFlooring-Business.png&w=1720&q=75" ></img></div>
<div className={showImg === 6 ? "sec6cont1img sec6show" : "sec6cont1img"}><img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FBuilding-Materials-Business.png&w=1720&q=75" ></img></div>
<div className={showImg === 7 ? "sec6cont1img sec6show" : "sec6cont1img"}><img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FConsumer-Goods-Business.png&w=1720&q=75" ></img></div>
<div className={showImg === 8 ? "sec6cont1img sec6show" : "sec6cont1img"}><img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FRenewables-Business.png&w=1720&q=75" ></img></div>
<div className={showImg === 9 ? "sec6cont1img sec6show" : "sec6cont1img"}><img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FWindmill-Business.png&w=1720&q=75" ></img></div>
<div className={showImg === 10 ? "sec6cont1img sec6show" : "sec6cont1img"}><img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FConsumer-Goods-Business.png&w=1720&q=75" ></img></div>
<div className={showImg === 11 ? "sec6cont1img sec6show" : "sec6cont1img"}><img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FSugar-Business.png&w=1720&q=75" ></img></div>
<div className={showImg === 12 ? "sec6cont1img sec6show" : "sec6cont1img"}><img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FBuilding-Materials-Business.png&w=1720&q=75" ></img></div>
<div className={showImg === 13 ? "sec6cont1img sec6show" : "sec6cont1img"}><img src="https://www.manuport-logistics.com/_next/image?url=%2Fimg%2Fcommodities%2FGlass-Business.png&w=1720&q=75" ></img></div>









</div>
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
