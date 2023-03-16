const logo = require('../images/logo1.png');

export default function Header() {
    return (
        <header className="main-header fixed h-full w-72 left-0 z-50 backdrop-blur-md bg-cyan-900/30">
            <nav className="h-full flex justify-center items-center flex-col text-center">
                <div className="logo">
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <ul>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Skills</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}