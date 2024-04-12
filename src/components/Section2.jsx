import React, {useState, useEffect} from "react";

function Section2() {

  const [showImg, setShowImg] = useState(1);
  let imgChange = null;

  const startAutoScroll = () => {
    imgChange = setInterval(() => {
      setShowImg((prevImg) =>
      prevImg ===  4 ? 1 : prevImg + 1  
      );
    }, 20000);
  };

  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(imgChange);
  }, [showImg]);



function handleClick(index){
setShowImg(index);
}


//////////////////////////////////////


  return (
<div className="section2">
<div className="section2container1">
<div>We're Different Because</div>

<div className={showImg === 1 ? "sec2cont1img1" : "sec2cont1img1 sec2hidden"}><img src="https://a.storyblok.com/f/240783/424x283/78ab1c3609/we-believe-in-people-compressed-2.png/m/1024x560/filters:quality(95):focal()" ></img></div>
<div className={showImg === 2 ? "sec2cont1img2" : "sec2cont1img2 sec2hidden"}><img src="https://a.storyblok.com/f/240783/1890x1417/fc3f9f86ec/aircharter-2.png/m/1024x560/filters:quality(95):focal(956x902:957x903)" className="sec2img2"></img></div>
<div  className={showImg === 3 ? "sec2cont1img3" : "sec2cont1img3 sec2hidden"}><img src="https://a.storyblok.com/f/240783/632x796/2481202365/sandra.jpg/m/1024x560/filters:quality(95):focal(381x302:382x303)" className="sec2img3"></img></div>
<div className={showImg === 4 ? "sec2cont1img4" : "sec2cont1img4 sec2hidden"}><img src="https://a.storyblok.com/f/240783/1920x781/6e425f1422/untitled_compressed.png/m/1024x560/filters:quality(95):focal()" className="sec2img4"></img></div>




</div>

<div className="section2container2">

<div onClick={() => handleClick(1)} className="section2container2text"><div className={showImg==1?"sec2cont2loading startloading":"sec2cont2loading"}></div><p className={showImg==1?"section2container2heading":"section2container2heading section2opacity"}>We Believe in People</p>
{showImg === 1 ? <div className="sec2cont2para">We believe in our people because they are our greatest asset. At MPL, we are not just a company; we are a family. Each and every one of us shares our unique MPL culture, in which everyone is valued, supported, and empowered to reach their full potential</div> : ""}</div>
<div onClick={() => handleClick(2)}  className="section2container2text"><div className={showImg==2?"sec2cont2loading startloading":"sec2cont2loading"}></div><p className={showImg==2?"section2container2heading":"section2container2heading section2opacity"}>We Solve Each and Any Shipping Problem</p>
{showImg === 2 ? <div className="sec2cont2para">We work with teams per commodity, each with specific domain expertise, to provide high-quality solutions or knowledge for any product or request. With offices around the world, we have excellent knowledge of local markets, laws, and customs.</div> : ""}</div>
<div onClick={() => handleClick(3)} className="section2container2text"><div className={showImg==3?"sec2cont2loading startloading":"sec2cont2loading"}></div><p className={showImg==3?"section2container2heading":"section2container2heading section2opacity"}>Single Point of Contact</p>
{showImg === 3 ? <div className="sec2cont2para">Our colleagues assist and guide customers from end to end in all logistics processes, including customs clearance and tender and procurement services.</div> : ""}</div>
<div onClick={() => handleClick(4)} className="section2container2text"><div className={showImg==4?"sec2cont2loading startloading":"sec2cont2loading"}></div><p className={showImg==4?"section2container2heading":"section2container2heading section2opacity"}>Flexible & Fast Decision-Making</p>
{showImg === 4 ? <div className="sec2cont2para">Our flexibility and desire to help customers in any way possible really sets us apart. Our fast decision-making comes from the open internal communication strategy we follow.</div> : ""}</div>



</div>
</div>
  );
}

export default Section2;
