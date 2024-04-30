import React, {useState, useEffect} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';





function Navbar() {

  const [showHam,setShowHam]= useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);
  




function showHamFunc(){
setShowHam(!showHam);
console.log("clicked ham");
}





  //////////////////////////////////////////////////////////////////
  return (
    <div>
    <div className= {visible ? 'show navbar' : 'hide navbar'}>
    <div className="navLogo"></div>
    <span className="navItems">Home</span>    
    <span className="navItems">Services</span>    
    <span className="navItems">Commodities</span>    
    <span className="navItems">Digital</span>    
    <span className="navItems">Careers</span>    
    <span className="navItems">About</span>    
    <span className="navItems">ESG</span>    
    <span className="navItems">Contact</span>    
    <MenuIcon className="menu" onClick={showHamFunc} />
  </div>

<div className={showHam==true?"ham hamshow":"ham hamhide"}>
<div className="hamdiv1"><img src=".\images\Screenshot 2024-04-07 122435.png"></img> <CloseIcon style={{paddingRight:"50px", paddingTop:"15px", fontSize:"30px", color:"white"}} onClick={showHamFunc}/></div>
<div className="hamdiv2">
<p>Home</p>
<p>Services</p>
<p>Commodities</p>
<p>Digital</p>
<p>Careers</p>
<p>Life at MPL</p>
<p>Jobs</p>
<p>About</p>
<p>ESG</p>
<p>Contact</p>
</div>
<div className="hamdiv3">
  <p>T&C</p>
  <span>|</span>
  <p>BLOG</p>
  <span>|</span>
  <p>LOCATIONS</p>
  <span>|</span>
  <p>LOGIN</p>
  
</div>
</div>

  </div>
  );
}

export default Navbar;
