import '../css/project.css'
import { FiArrowUpRight, FiGithub } from "react-icons/fi";


export function Project() {
    return (
        <>
            <div className="project-container">
                <img src='../images/cryptocurrently.png' />
                <div className='project-info'>
                    <div className="project-header">
                        <h6 className="project-title">Crypto Currently
                        </h6>
                        <div className="icon">
                            <a href="https://yodit7.github.io/cryptocurrently/"><FiArrowUpRight /></a>
                            <a href="https://yodit7.github.io/cryptocurrently/" className="github-icon-sm"><FiGithub /></a>
                        </div>
                    </div>
                    <p className="project-desc">A web app for visualizing crypto currencies. 
                    View the top currencies, the current market, up to date news and genereal 
                    information about crpyto via crpyto-abcA web app for visualizing crypto 
                    currencies. View the top currencies, the current market, up to date news 
                    and genereal information about crpyto via crpyto-abc.</p>
                    <ul className="project-fw-items">
                        <li className="project-fw-item">HTML</li>
                        <li className="project-fw-item">CSS</li>
                        <li className="project-fw-item">JavaScript</li>
                        <li className="project-fw-item">Bootstrap</li>
                        <li className="project-fw-item">Coin Desk Api</li>
                    </ul>
                </div>
            </div>

            <div className="project-container">
                <img src='../images/projecttracker_01.png' />
                <div className='project-info'>
                    <div className="project-header">
                        <h6 className="project-title">Project Tracker</h6>
                        <div className="icon">
                            <a href="https://project-tracker-reactapp.netlify.app/"><FiArrowUpRight /></a>
                            <a href="https://yodit7.github.io/cryptocurrently/" className="github-icon-sm"><FiGithub /></a>
                        </div>
                    </div>
                    <p className="project-desc">The project tracker is a web 
                    application that helps users manage tasks by organizing them 
                    into three sections: "To Do," "In Progress," and "Done." 
                    Users can easily drag and drop tasks between sections, allowing
                    them to track the progress of their projects in a visual and 
                    efficient way.</p>
                    <ul className="project-fw-items">
                        <li className="project-fw-item">HTML</li>
                        <li className="project-fw-item">CSS</li>
                        <li className="project-fw-item">JavaScript</li>
                        <li className="project-fw-item">React</li>
                    </ul>
                </div>
            </div>

            <div className="project-container">
                <img src='../images/agency.png' />
                <div className='project-info'>
                    <div className="project-header">
                        <h6 className="project-title">Agency Website</h6>
                        <div className="icon">
                            <a href="https://yodit7.github.io/agency-website/"><FiArrowUpRight /></a>
                            <a href="https://yodit7.github.io/cryptocurrently/" className="github-icon-sm"><FiGithub /></a>
                        </div>
                    </div>
                    <p className="project-desc">A minimal, black and white responsive website for a digital agency.</p>
                    <ul className="project-fw-items">
                        <li className="project-fw-item">HTML</li>
                        <li className="project-fw-item">CSS</li>
                        <li className="project-fw-item">JavaScript</li>
                        <li className="project-fw-item">Bootstrap</li>
                    </ul>
                </div>
            </div>
        </>
    )
}