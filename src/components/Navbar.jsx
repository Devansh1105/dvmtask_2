import React, {useState, useEffect} from "react";
import MenuIcon from '@mui/icons-material/Menu';






function Navbar() {


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
  










  //////////////////////////////////////////////////////////////////
  return (
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
    <MenuIcon className="menu"/>    
  </div>
  );
}

export default Navbar;
