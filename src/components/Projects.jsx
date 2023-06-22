import '../css/project.css'

import { Project } from "./Project"

export function Projects( {id} ) {
    return (
        <>
        <div className="projects-container" id={id}>
            <h6 className='page-headline'><a href="">Projects</a></h6>
            <Project />
            {/* <Project />
            <Project /> */}
        </div>
        </>
    )
}