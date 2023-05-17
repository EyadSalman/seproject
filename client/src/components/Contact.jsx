import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Logo from '../assets/logo3.png';

const Contact = () => {
    return ( 
        <div className="contact-section">
            <div className="contact-left">
                <img src={Logo} alt="Logo" className="logo" />
                <h2 className="website-name">TurboTech</h2>
            </div>
            <div className="contact-right">
                <div className="social-icons">
                    <a 
                        href='https://www.facebook.com/'
                        target='_blank'
                        rel='noreferrer'
                        className="social-link"
                    >
                        <div className="social-icon">
                            <FaFacebook className='icon' />
                        </div>
                    </a>
                    <a 
                        href='https://www.instagram.com/'
                        target='_blank'
                        rel='noreferrer'
                        className="social-link"
                    >
                        <div className="social-icon">
                            <FaInstagram className='icon' />
                        </div>
                    </a>
                    <a
                        href='https://www.twitter.com/'
                        target='_blank'
                        rel='noreferrer'
                        className="social-link"          
                    >
                        <div className="social-icon">
                            <FaTwitter className='icon' />
                        </div>
                    </a>
                </div>
                <div className='contact-details'>
                    <p>123 Main Street, City, Country</p>
                    <p><span style={{ fontWeight: "bold"}}>Phone</span>: +1 234 567 890</p>
                    <p><span style={{ fontWeight: "bold"}}>Email</span>: info@example.com</p>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;