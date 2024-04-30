import React, {useState, useEffect} from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function Section9() {



  const [tilt, setTilt] = useState({ mouseX: 0, mouseY: 0 });

  const tiltEffect = (event) => {
    const elementRect= event.currentTarget.getBoundingClientRect();
    const centerX= elementRect.left + elementRect.width/2;
    const centerY= elementRect.top + elementRect.height/2;

    const { clientX, clientY } = event;
    setTilt({ mouseX: clientX-centerX, mouseY: clientY-centerY });
   
  };

  function tiltOut() {
    setTilt({ mouseX: 0, mouseY: 0});
  };












  return (
<div className="section9">

<div className="section9container1"
><p className="section9container1subheading">OUR LOCATIONS</p>
    <div className="section9container1heading">Join<br></br> Our Team</div>
    <button className="section9button"><div className="section9buttontext">All vacancies</div> <ArrowForwardIcon style={{fontSize:"small", backgroundColor:"#00358D", color:"white", height:"40px", width:"40px", borderRadius:"50%"}}/></button>
</div>

<div className="section9container2">

    <div className="section9cont2cont " onMouseMove={tiltEffect} onMouseLeave={tiltOut} style={{transform: ` perspective(250px) rotateX(${(tilt.mouseX/50)}deg) rotateY(${(tilt.mouseY/50)}deg)`, transition:"all 0.01s ease-in-out"}} >
<div className="section9cont2contimg"><img className="section9img" srcset="hts://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/96x121/filters:quality(95):focal() 96w, https://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/128x161/filters:quality(95):focal() 128w, https://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/256x323/filters:quality(95):focal() 256w, https://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/320x403/filters:quality(95):focal() 320w, https://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/384x484/filters:quality(95):focal() 384w, https://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/450x567/filters:quality(95):focal() 450w, https://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/600x756/filters:quality(95):focal() 600w, https://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/768x968/filters:quality(95):focal() 768w, https://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/1024x1290/filters:quality(95):focal() 1024w, https://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/1360x1714/filters:quality(95):focal() 1360w, https://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/1720x2167/filters:quality(95):focal() 1720w"></img></div>
<div className="section9cont2contcontent"> 
<div className="section9cont2contcontentheading">Freight Procurement <br></br>Manager-APAC</div>
<div className="section9cont2contcontentpara">Manuport Logistics is a dynamic international freight forwarding company. We transport cargo around the world, from A to B with a unique mix of services and modalities. Using our international presence, local knowledge and almost a century of experience in the maritime sector we excel in connecting the globe. Our future proof programs and the experience of our teams allow us to ensure a high-quality and sustainable approach for every supply-chain challenge.</div>
<div className="section9buttoncont"> <button className="section9button2"><div className="section9button2text">Apply here</div> <ArrowForwardIcon style={{fontSize:"small", backgroundColor:"#00358D", color:"white", height:"40px", width:"40px", borderRadius:"50%"}}/></button>
</div>
</div>
 </div>

 <div className="section9cont2cont"  >
<div className="section9cont2contimg"><img className="section9img" srcset="hts://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/96x121/filters:quality(95):focal() 96w, https://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/128x161/filters:quality(95):focal() 128w, https://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/256x323/filters:quality(95):focal() 256w, https://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/320x403/filters:quality(95):focal() 320w, https://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/384x484/filters:quality(95):focal() 384w, https://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/450x567/filters:quality(95):focal() 450w, https://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/600x756/filters:quality(95):focal() 600w, https://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/768x968/filters:quality(95):focal() 768w, https://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/1024x1290/filters:quality(95):focal() 1024w, https://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/1360x1714/filters:quality(95):focal() 1360w, https://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/1720x2167/filters:quality(95):focal() 1720w"></img></div>
<div className="section9cont2contcontent"> 
<div className="section9cont2contcontentheading">Freight Procurement <br></br>Manager-APAC</div>
<div className="section9cont2contcontentpara">Manuport Logistics is a dynamic international freight forwarding company. We transport cargo around the world, from A to B with a unique mix of services and modalities. Using our international presence, local knowledge and almost a century of experience in the maritime sector we excel in connecting the globe. Our future proof programs and the experience of our teams allow us to ensure a high-quality and sustainable approach for every supply-chain challenge.</div>
<button className="section9button2"><div className="section9button2text">Apply here</div> <ArrowForwardIcon style={{fontSize:"small", backgroundColor:"#00358D", color:"white", height:"40px", width:"40px", borderRadius:"50%"}}/></button>
</div>
 </div>

 <div className="section9cont2cont"  >
<div className="section9cont2contimg"><img className="section9img" srcset="hts://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/96x121/filters:quality(95):focal() 96w, https://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/128x161/filters:quality(95):focal() 128w, https://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/256x323/filters:quality(95):focal() 256w, https://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/320x403/filters:quality(95):focal() 320w, https://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/384x484/filters:quality(95):focal() 384w, https://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/450x567/filters:quality(95):focal() 450w, https://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/600x756/filters:quality(95):focal() 600w, https://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/768x968/filters:quality(95):focal() 768w, https://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/1024x1290/filters:quality(95):focal() 1024w, https://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/1360x1714/filters:quality(95):focal() 1360w, https://a.storyblok.com/f/240783/4284x5712/ae9cea8c56/image00043.jpeg/m/1720x2167/filters:quality(95):focal() 1720w"></img></div>
<div className="section9cont2contcontent"> 
<div className="section9cont2contcontentheading">Freight Procurement <br></br>Manager-APAC</div>
<div className="section9cont2contcontentpara">Manuport Logistics is a dynamic international freight forwarding company. We transport cargo around the world, from A to B with a unique mix of services and modalities. Using our international presence, local knowledge and almost a century of experience in the maritime sector we excel in connecting the globe. Our future proof programs and the experience of our teams allow us to ensure a high-quality and sustainable approach for every supply-chain challenge.</div>
<button className="section9button2"><div className="section9button2text">Apply here</div> <ArrowForwardIcon style={{fontSize:"small", backgroundColor:"#00358D", color:"white", height:"40px", width:"40px", borderRadius:"50%"}}/></button>
</div>
 </div>


</div>
</div>
  );
}

export default Section9;




