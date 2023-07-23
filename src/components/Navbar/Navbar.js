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
      if(currScroll > 0){
        let elem = document.getElementById('container-navbar');
        elem.style.backgroundColor = 'black';
      }if(currScroll < 1){
        let elem = document.getElementById('container-navbar');
        elem.style.backgroundColor = 'transparent';
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
    console.log('click')
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
    <>
     {/*navbar navbar-expand-lg navbar-dark bg-dark d-block d-sm-block d-md-block d-lg-none menu-mobile-vass"
      container-navbar navbar p-0 p-md-3*/
      
     }
       <nav id='container-navbar' className="container-mobile  navbar navbar-expand-lg  navbar-dark  p-0 p-md-3">
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
              <li className="nav-item">
                <a className="nav-link nav-talento "  href='/#talento' >Talento</a>
              </li>
            </ul>
          </div>
         </div>
        </nav>
        <nav className='container-mobile-tablet'>
          <img className='img-icon-mobile' src='https://vasscompany.com/wp-content/uploads/2020/07/logo-vass-blanco.png' alt='icon' />
          <div className='toggle-icon'>
              <FaSistrix size="30px" right="10px"/>
              <button
                onClick={onMenuDropdown}
              >
                <div></div>
                <div></div>
                <div></div>
              </button>
              {/*<button onClick={onMenuDropdown} >
                <FontAwesomeIcon className='btn-icon' icon={faBars} />
    </button>*/}
          </div>
          <div className='dropdown-menu'>
                <li><a href='/#exito' onClick={handleClick}>Casos de éxito</a></li>
          </div>
        </nav>
    </>
    
  </Box>
  )
}

export default Navbar;

