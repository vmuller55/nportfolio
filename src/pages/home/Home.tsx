/* eslint-disable react-hooks/exhaustive-deps */
import './home.css'
import { useEffect, useState } from 'react'

import Forest from '../../assets/forestThree 1.svg'

import Description from '../../components/description/Description'
import Presentation from '../../components/presentation/Presentation'
import Work from '../../components/work/Work'
import Contact from '../../components/contact/Contact'

const Home = () => {

    const [scrollDirection, setScrollDirection] = useState("up")
    const [navMenuIsOpen, setNavMenuIsOpen] = useState(false)

    useEffect(() => {
        const closeMenuOnClickOnPage = document.querySelector(".homeContent")
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


    const handleScrollTo = (scrollToElement:string) => {
        const element = document.getElementById(scrollToElement)
        element?.scrollIntoView({behavior : 'smooth', block : 'start'})
    }

    return(
       <div className={`homeContainer`} id='homeContainer'>
        <nav className={`nav ${scrollDirection === "up" ?  '' : navMenuIsOpen ? '' : 'IsNotVisible'}`}>
            <h1>DeVincentWeb</h1>
            <button className={`navButton`} onClick={() => handleOpenNavMenu()}>
                <div className={`barreHaut ${navMenuIsOpen ? 'active' : ''}`}></div>
                <div className={`barreBas ${navMenuIsOpen ? 'active' : ''}`}></div> 
            </button> 
                
        </nav>
        <div className={`navMenu ${navMenuIsOpen ? 'active' : ''}`}>
                    <ul className='navMenuList'>
                        <li className="navMenuElement" onClick={() => handleScrollTo("acceuil")}>Accueil</li>
                        <li className="navMenuElement" onClick={() => handleScrollTo("presentation")}>Mes services</li>
                        <li className="navMenuElement" onClick={() => handleScrollTo("work")}>Mon travail</li>
                        <li className="navMenuElement" onClick={() => handleScrollTo("contact")}>Contact</li>
                    </ul>
                </div>
        <div className={`homeContent ${navMenuIsOpen ? 'blur' : ""}`}>
            <section id='acceuil'>
                <Description/>
            </section>
            <section id='presentation'>
                <Presentation/>
            </section>
            <section id='work'>
                <Work/>
            </section>
            <section id='contact'>
                <Contact/>
            </section>
        </div>
        <div className="footer">
            <img src={Forest} alt="forêt" className='forestFooter'/>
        </div>
       </div>
    )
}

export default Home