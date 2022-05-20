import "./Navbar.scss";

import { CgMenuGridR } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";
import { AiFillCaretRight } from "react-icons/ai";
import { ConnectButton } from "web3uikit";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="navbar">
      <div className="part left">
        <div className="menu-toggle">
          <button onClick={handleMenu}>
            <CgMenuGridR size={22} color="red" />
          </button>
        </div>
        <div className="logo">LOGO</div>
      </div>
      <div className="part right">
        <ConnectButton />
      </div>
      <div className={`side-menu ${openMenu && "open"}`}>
        <div className="header">
          <div className="logo">LOGO</div>
          <div className="menu-toggle">
            <button onClick={handleMenu}>
              <MdOutlineClose size={32} color="red" />
            </button>
          </div>
        </div>
        <div className="body">
          <div className="menus">
            <a href="/#" className="menu-item active">
              <div className="icon">
                <AiFillCaretRight color="#bf91ff" size={26} />
              </div>
              <div>Menu Text 01</div>
            </a>
            <a href="/#" className="menu-item">
              <div className="icon">
                <AiFillCaretRight color="#bf91ff" size={26} />
              </div>
              <div>Menu Text 02</div>
            </a>
            <a href="/#" className="menu-item">
              <div className="icon">
                <AiFillCaretRight color="#bf91ff" size={26} />
              </div>
              <div>Menu Text 03</div>
            </a>
            <a href="/#" className="menu-item">
              <div className="icon">
                <AiFillCaretRight color="#bf91ff" size={26} />
              </div>
              <div>Menu Text 04</div>
            </a>
            <a href="/#" className="menu-item">
              <div className="icon">
                <AiFillCaretRight color="#bf91ff" size={26} />
              </div>
              <div>Menu Text 05</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
