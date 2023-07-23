import React, { useEffect, useRef } from "react";
import { FaSistrix } from 'react-icons/fa';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Box } from "@chakra-ui/react";
import './Navbar.css';



function Navbar (){
  const outerBox = useRef();
  useEffect(() => {
    let prevScroll = window.pageYOffset;
    console.log(prevScroll + "move");
    const handleScroll = () => {
      let currScroll = window.pageYOffset;
      console.log(currScroll + "c");
      if (prevScroll > currScroll) {
        outerBox.current.style.transform = "translateY(0)";
        prevScroll = currScroll;
      } else if (prevScroll < currScroll) {
        outerBox.current.style.transform = "translateY(-200px)";
        prevScroll = currScroll;
      }
    }
    window.addEventListener('scroll', handleScroll);
    return(() => {
    window.removeEventListener('scroll', handleScroll);
    }
    )
  }, []);

  function handleClick(anchor){
    console.log(anchor)
    const id = `#${anchor}`;
    const element = document.getElementById(id);
    if(element){
      element.scrollIntoView({
        behavior:"smooth",
        block:"start"
      })
    }
  }

  function onMenuDropdown(){
    const dropdownMenu = document.querySelector('.dropdown-menu')
    dropdownMenu.classList.toggle('open')
  }

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      ref={outerBox}
  >
       <nav className=" container-navbar navbar navbar-expand-lg p-0 navbar-dark p-md-3">
        <div className="container-fluid">
          <img className='img-icon' src='https://vasscompany.com/wp-content/uploads/2020/07/logo-vass-blanco.png' alt='icon' />
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link text-white"  href='/#exito'>Casos de éxito</a>
              </li>
              <li className="nav-item">
                <a className="dropdown-toggle nav-link text-white" href='/#mercados'>Mercados</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white"  href='/#paises'>Países</a>
              </li>
              <li className="nav-item">
                <a className="dropdown-toggle nav-link text-white" href='/#vass'>Somos VASS</a>
              </li>
              <li className="nav-item">
                <a className="dropdown-toggle nav-link text-white" href='/#comoLoHacemos'>Cómo lo hacemos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white"  href='/#insights'>Insights</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white"  href='/#noticias'>Noticias</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white"  href='/#research'>VASS Research</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white"  href='/#en'>EN</a>
              </li>
              <li className="nav-item">
              <a className="nav-link text-white"  href="#">{<FaSistrix size="20px" opacity="0.5" />}</a>
              </li>
              <li class="nav-item">
                <a className="nav-link nav-talento "  href='/#talento' >Talento</a>
              </li>
            </ul>
          </div>
          <div className='toggle-icon'>
            <FaSistrix size="20px"/>
            <button onClick={onMenuDropdown}>
              <FontAwesomeIcon className='btn-icon' icon={faBars} />
            </button>
          </div>
          <menu className='dropdown-menu'>
              <li><a href='/#about' onClick={handleClick}>About Me</a></li>
              <li><a href='/#projects' onClick={handleClick}>Projects</a></li>
              <li><a href='/#contact' onClick={handleClick}>Contact Me</a></li>
          </menu>
         </div>
        </nav>
  </Box>
  )
}

export default Navbar;

