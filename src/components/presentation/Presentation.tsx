import './presentation.css'
import { useState, useRef, useEffect } from 'react'


const Presentation = () => {

    const [isIntersecting, setIsIntersecting] = useState(false)
    const [isInViewPort, setIsInViewPort] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting)
            }
        )
        observer.observe(ref.current)
        return () => observer.disconnect
    }, [isIntersecting])

    useEffect(() => {
        if (isIntersecting) {
          setIsInViewPort(true)
        } else {
          setIsInViewPort(false)
        }
      }, [isIntersecting]);

    return (
        <div className="presentationContainer">
            <div className="presentationContent">
                <h2>Mes services</h2>
                <div className="services" ref={ref}>
                    <article className={`service ${isInViewPort ? "animate left" : "leaving"}`}>
                        <h3>Une solution sur-mesure</h3>
                        <p>Développement de votre projet sans CMS, permettant une personalisation absolue!</p>
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
                    <article className={`service ${isInViewPort ? "animate right" : "leaving"}`}>
                        <h3>Devis gratuit</h3>
                        <p>Prenez contact avec moi pour un devis gratuit de votre projet.</p>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default Presentation