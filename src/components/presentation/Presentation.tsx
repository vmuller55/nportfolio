import './presentation.css'
import { useState, useRef, useEffect } from 'react'
import Planet from '../../assets/planet 1.svg'

const Presentation = () => {

    const [isIntersecting, setIsIntersecting] = useState(false)
    const [isInViewPort, setIsInViewPort] = useState(false)
    const ref = useRef(null)

    useEffect(() => { 
        const asyncUseEffect = async () => {
            if(ref.current) {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        setIsIntersecting(entry.isIntersecting)
                    }
                )
                observer.observe(ref.current)
                return () => observer.disconnect
            } 
        }
        asyncUseEffect()
    }, [isIntersecting])

    useEffect(() => {
        if (isIntersecting) {
          setIsInViewPort(true)
        } 
      }, [isIntersecting]);

    return (
        <div className="presentationContainer">
            <div className="presentationContent">
                <div className="presentationTitle">
                    <h2>Mes services</h2>
                </div>
                <div className="services" ref={ref}>
                    <article className={`service ${isInViewPort ? "animate left long" : "leaving"}`}>
                        <h3>Une solution sur mesure</h3>
                        <p>Développement de votre projet sans CMS, permettant une personnalisation absolue!</p>
                    </article>
                    <article className={`service ${isInViewPort ? "animate up" : "leaving"}`}>
                        <h3>Accessibilité</h3>
                        <p>Un site web accessible, conforme pour les lecteurs d'écran.</p>
                    </article>
                    <article className={`service ${isInViewPort ? "animate right" : "leaving"}`}>
                        <h3>Performances</h3>
                        <p>Une interface rapide et performante.</p>
                    </article>
                    <article className={`service ${isInViewPort ? "animate left" : "leaving"}`}>
                        <h3>Référencement</h3>
                        <p>Référencement naturel, SEO. Investissez de façon durable.</p>
                    </article>
                    <article className={`service ${isInViewPort ? "animate down" : "leaving"}`}>
                        <h3>Responsive</h3>
                        <p>Une application qui s'adapte à tout support.</p>
                    </article>
                    <article className={`service ${isInViewPort ? "animate right long" : "leaving"}`}>
                        <h3>Devis gratuit</h3>
                        <p>Prenez contact avec moi pour un devis gratuit de votre projet.</p>
                    </article>
                </div>
                <div className="planetContainer">
                    <img src={Planet} alt='nuage' className='planet'></img>
                </div>
            </div>
        </div>
    )
}

export default Presentation