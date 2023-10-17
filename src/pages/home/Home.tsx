import './home.css'
import { useEffect, useState } from 'react'

const Home = () => {

    const [scrollDirection, setScrollDirection] = useState("up")
    const [navMenuIsOpen, setNavMenuIsOpen] = useState(false)

    useEffect(() => {

        let lastScrollY = window.pageYOffset;
        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? "down" : "up";
            if (direction !== scrollDirection && (Math.abs(scrollY - lastScrollY) >= 5)) {
                setScrollDirection(direction)
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        }
        window.addEventListener("scroll", updateScrollDirection);
        return () => {
            window.removeEventListener("scroll", updateScrollDirection)
        }
        
    }, [scrollDirection])

    const handleOpenNavMenu = () => {
        setNavMenuIsOpen(!navMenuIsOpen)
    }


    const handleScrollTo = (scrollToElement: string) => {
        const element = document.getElementById(scrollToElement)
        element?.scrollIntoView({behavior : 'smooth', block : 'start'})
    }

    return(
       <div className={`homeContainer ${navMenuIsOpen ? 'disableScroll' : ''}`} id='homeContainer'>
        <nav className={`nav ${scrollDirection === "up" ?  'IsVisible' : navMenuIsOpen ? 'IsVisible' : 'IsNotVisible'}`}>
            <h1>DeVincentWeb</h1>
            <button className={`navButton ${scrollDirection == "up" ? '' : 'off'}`} onClick={() => handleOpenNavMenu()}>
                <div className={`barreHaut ${navMenuIsOpen ? 'active' : ''}`}></div>
                <div className={`barreBas ${navMenuIsOpen ? 'active' : ''}`}></div> 
            </button> 
                <div className={`navMenu ${navMenuIsOpen ? 'active' : ''}`}>
                    <ul className='navMenuList'>
                        <li className="navMenuElement" onClick={() => handleScrollTo("acceuil")}>Acceuil</li>
                        <li className="navMenuElement" onClick={() => handleScrollTo("presentation")}>Présentation</li>
                        <li className="navMenuElement" onClick={() => handleScrollTo("contact")}>Contact</li>
                    </ul>
                </div>
        </nav>
        <div className="homeContent">
            <section id='acceuil' style={{height : "100vh"}}></section>
            <section id='presentation' style={{height : "100vh", backgroundColor : 'blue'}}></section>
            <section id='contact' style={{height : "100vh"}}></section>
        </div>
       </div>
    )
}

export default Home