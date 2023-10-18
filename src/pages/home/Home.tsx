/* eslint-disable react-hooks/exhaustive-deps */
import './home.css'
import { useEffect, useState } from 'react'

import Description from '../../components/description/Description'
import Presentation from '../../components/presentation/Presentation'

const Home = () => {

    const [scrollDirection, setScrollDirection] = useState("up")
    const [navMenuIsOpen, setNavMenuIsOpen] = useState(false)

    useEffect(() => {
        const closeMenuOnClickOnPage = document.querySelector(".homeContainer")
        let lastScrollY = window.pageYOffset;
        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? "down" : "up";
            if (direction !== scrollDirection && (Math.abs(scrollY - lastScrollY) >= 5)) {
                setScrollDirection(direction)
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        }
        if(navMenuIsOpen) {
            closeMenuOnClickOnPage?.addEventListener("click", handleOpenNavMenu)
        }
        
        window.addEventListener("scroll", updateScrollDirection);
        return () => {
            window.removeEventListener("scroll", updateScrollDirection)
        }
        
    }, [navMenuIsOpen, scrollDirection])

    const handleOpenNavMenu = () => {
        setNavMenuIsOpen(!navMenuIsOpen)
    }


    const handleScrollTo = (scrollToElement: string) => {
        const element = document.getElementById(scrollToElement)
        element?.scrollIntoView({behavior : 'smooth', block : 'start'})
    }

    return(
       <div className={`homeContainer ${navMenuIsOpen ? 'disableScroll' : ''}`} id='homeContainer'>
        <nav className={`nav ${scrollDirection === "up" ?  '' : navMenuIsOpen ? '' : 'IsNotVisible'}`}>
            <h1>DeVincentWeb</h1>
            <button className={`navButton ${scrollDirection == "up" ? '' : 'off'}`} onClick={() => handleOpenNavMenu()}>
                <div className={`barreHaut ${navMenuIsOpen ? 'active' : ''}`}></div>
                <div className={`barreBas ${navMenuIsOpen ? 'active' : ''}`}></div> 
            </button> 
                
        </nav>
        <div className={`navMenu ${navMenuIsOpen ? 'active' : ''}`}>
                    <ul className='navMenuList'>
                        <li className="navMenuElement" onClick={() => handleScrollTo("acceuil")}>Acceuil</li>
                        <li className="navMenuElement" onClick={() => handleScrollTo("presentation")}>Présentation</li>
                        <li className="navMenuElement" onClick={() => handleScrollTo("contact")}>Contact</li>
                    </ul>
                </div>
        <div className="homeContent">
            <section id='acceuil'>
                <Description/>
            </section>
            <section id='presentation'>
                <Presentation/>
            </section>
            <section id='contact' style={{height : "1000px", width : '100%'}}></section>
        </div>
       </div>
    )
}

export default Home