import './work.css'
import WorkImage from '../../assets/deerAlyx.png'
import WorkImageTwo from '../../assets/SamMobile.png'
import WorkImageThree from '../../assets/Mobile Cloud.png'
import WorkImageFour from '../../assets/Desktop - 1.png'
import { useState, useRef, useEffect } from 'react'

const Work = () => {
    const [isIntersecting, setIsIntersecting] = useState(false)
    const [animateOne, setIsAnimateOne] = useState(false)
    const refTwo = useRef(null)

    useEffect(() => { 
        const asyncUseEffect = async () => {
            if(refTwo.current) {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        setIsIntersecting(entry.isIntersecting)
                    }
                )
                observer.observe(refTwo.current)
                return () => observer.disconnect
            } 
        }
        asyncUseEffect()
    }, [isIntersecting])

    useEffect(() => {
        if (isIntersecting) {
          setIsAnimateOne(true)
        } 
        else{
            setIsAnimateOne(false)
        }
      }, [isIntersecting]);

    return(
        <div className="workContainer" ref={refTwo}>
            <div className="workContent">
                <div className="workTitle">
                    <h2>Mon travail</h2>
                </div>
                <div className="workCards">
                    <div className={`card deerAlyx ${animateOne ? 'animate' : ''}`}>
                        <div className="cardBanner">
                            <h3>DeerAlyx Formation</h3>
                            <p>Projet en cours - Plateforme récapitulant les activités, le travail et les contacts d'une prothésiste ongulaire.</p>
                            <i className="fa-solid fa-globe"></i>
                        </div>
                        <img src={WorkImage} alt="Présentation site formation onglerie" className='cardImg'/>
                    </div>
                    <div className={`card coiff ${animateOne ? 'animate' : ''}`}>
                        <div className="cardBanner">
                            <h3>Coiff Sam</h3>
                            <p>Projet en cours - Plateforme récapitulant les prestations et les horraires d'un salon de coiffure.</p>
                            <i className="fa-solid fa-globe"></i>
                        </div>
                        <img src={WorkImageTwo} alt="Présentation site salon de coiffure" className='cardImg'/>
                    </div>
                    <div className={`card barbie ${animateOne ? 'animate' : ''}`}>
                        <div className="cardBanner">
                            <h3>Template</h3>
                            <p>Maquette type pour une plateforme web.</p>
                            <i className="fa-solid fa-globe"></i>
                        </div>
                        <img src={WorkImageThree} alt="Template site rose et bleu" className='cardImg'/>
                    </div>
                    <div className={`card astro ${animateOne ? 'animate' : ''}`}>
                        <div className="cardBanner">
                            <h3>Template</h3>
                            <p>Maquette type pour une plateforme web.</p>
                            <i className="fa-solid fa-globe"></i>
                        </div>
                        <img src={WorkImageFour} alt="Template site thème astro" className='cardImg'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work