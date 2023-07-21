import BackgroundFooter from "../BackgroundFooter/BackgroundFooter.js";
import './Background.css'


function Background() {
    return (
        <section className='section-container'>
            <img className='section-img' src="https://vasscompany.com/wp-content/uploads/2020/09/contacto.jpg" alt="background" />
            <h3 className="section-contact"> CONTACTO</h3>
            <BackgroundFooter />
        </section>
    )
}

export default Background;