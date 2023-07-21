import { FaTwitter, FaLinkedinIn,FaInstagram, FaYoutubeSquare } from 'react-icons/fa';
import './Footer.css';


function Footer (){
    const PARAFOTWO = `Home \nCasos éxito \nSomos VASS \nImpactos \nMétodo \nTecnologías \nProyectos I+D+i \nInsights \nNoticias \nVASS Research \nCanal de denuncias \nContacto `
    const PARAFOTHREE = `Talento\n #LifeVASS\n Beneficios\n Planes para ti\n Proyectos\n SmartWorking\n Ofertas\n`

    return (
        <footer className='container'>
            <section className='section-top-part'>
                <div className='section-column-one'>
                    <div className='section-top-column-one-h3'>
                        <h3>Complex</h3>
                        <h3>made</h3>
                        <h3>simple</h3>
                    </div>
                    <img className='img-icon' src='https://vasscompany.com/wp-content/uploads/2020/07/logo-vass-blanco.png' alt='icon' />
                </div>
            </section>
            <section className='section-middle-part'>
                <div className='section-column-two'>
                    <h3>Sitemap VASS</h3>
                    <p>{PARAFOTWO}</p>
                </div>
            </section>
            <section className='section-middle-part-three'>
                <div className='section-column-three'>
                    <h3>Sitemap Talento</h3>
                    <p>{PARAFOTHREE}</p>
                </div>
            </section>
            <section className='section-middle-part-free'></section>
            <section className='section-middle-part-four'>
                <div className='section-column-four'>
                    <h3>Empresas</h3>
                    <p>VASS</p>
                    <p>Nateevo</p>
                    <p>Serbatic</p>
                    <p>vdSHOP</p>
                    <img className='img-icon-target' src='./icon.PNG' alt='icon' />
                </div>
            </section>
                
            
            <section className='section-bottom-part'>
                <div className='section-bottom-copyright'>
                    <p> Copyright © 2021 Todos los derechos reservados </p>
                </div>
                <div className='section-bottom-politics'>
                    <p> Memoria ambiental | Política de cookies | Politica de privacidad | Politica de calidad y medio ambiente </p>
                </div>
                <div className='section-bottom-socila-media'>
                    <div className='brand'>
                        <FaTwitter size="20px" opacity="0.5" color="white" />
                    </div>
                    <div className='brand'>
                        <FaLinkedinIn size="20px" opacity="0.5" color="white" />
                    </div>
                    <div className='brand'>
                        <FaInstagram size="20px" opacity="0.5" color="white" />
                    </div>
                    <div className='brand'>
                        <FaYoutubeSquare size="20px" opacity="0.5" color="white" />
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer;