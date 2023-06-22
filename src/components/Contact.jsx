import '../css/contact.css'
import { FiMail } from "react-icons/fi";


export function Contact(){
    return (
        <>
            <h6 className='page-headline-center'>Contact</h6>
            <div className="contact-container">
                <h1>Get in touch</h1>
                <p>I’m currently looking for any new opportunities, my inbox is always open.
                    <div className="icon-mail">
                        <a href='/'><FiMail /></a>
                    </div>
                </p>
            </div>
        </>
    )
}