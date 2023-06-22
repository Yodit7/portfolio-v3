import '../css/about.css'
import { FiChevronRight } from "react-icons/fi";

export function About( {id}) {
    return (
        <>
            <div className="main-container" id={id}>
                <p className="about-title">Hi, I'm Yodit.</p>
                <div className="about-desc">
                    <p>Full Stack Developer.</p> 
                    <p>With a passion for building 
                innovative and user-friendly applications, I bring together both front-end 
                and back-end expertise to create seamless digital experiences.</p>
                </div>
                <div className='about-resume'>
                    <ul className='about-resume-items'>
                        <li className='about-resume-item'>
                            <FiChevronRight /> B.Sc. in Computer Science @Goethe University Frankfurt
                        </li>
                        <li className='about-resume-item'>
                            <FiChevronRight /> M.Sc. in Computer Science @Chalmers University of Technology (Semester Abroad)
                        </li>
                        <li className='about-resume-item'>
                            <FiChevronRight /> M.Sc. in Computer Science @Goethe University Frankfurt
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}