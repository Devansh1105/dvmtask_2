import React, {useState, useEffect} from "react";

function Header() {


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
  


  ////////////////////////////////////////////////////////////////////
  return (
   
    <div className={visible? "hflex-container show":"hflex-container hide"}>
      <div className="hcontainer">T&amp;C </div>
      <div className="separator">|</div>
      <div className="hcontainer">BLOG</div>
      <div className="separator">|</div>
      <div className="hcontainer">LOG IN</div>
    </div>

  );
}

export default Header;
