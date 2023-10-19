import './description.css'
import { useEffect, useState } from 'react'
import Smoke from '../../assets/pngwing.com (1).png'

const Description = () => {
    const [animate, setIsAnimate] = useState(false)

    useEffect(() => {
        setInterval(() => {
            setIsAnimate(!animate)
        }, 4000)
    }, [animate])

    return(
        <div className="descriptionContainer">
            <div className="descriptionContent">
                <div className="descriptionText">
                    <h2>Création d'applications web</h2>
                    <p>Vous cherchez à créer votre emprunte sur internet?</p>
                    <p>Trouvez une solution web adaptée à vos besoins.</p>
                    <p>Obtez pour une plateforme à la hauteur de votre entreprise!</p>
                    <p>Élaborons ensemble votre projet.</p>
                </div>
                <div className="secondText">
                    <h2>Développement sans CMS</h2>
                    <p>Un outil fait sur-mesure pour vous.</p>
                    <p>Une réponse personnalisée à vos besoins.</p>
                    <p>Maîtrisez votre image sur le web!</p>
                </div>
                <img src={Smoke} alt='Fumée rose et bleu' className='smoke'></img>
            </div>
        </div>
    )
}

export default Description