import '../css/header.css'

export function Header() {


    return (
        <>
            <div className="header">
                <a href='/'>Y</a>
                <ul className="nav">
                    <li className="nav-item">About</li>
                    <li className="nav-item"> Projects</li>
                    <li className="nav-item">Contact</li>
                </ul>
            </div>
        </>
    )
}