import './home.css'
import Montain from '../../assets/montainFour.webp'
import { useState, useEffect } from 'react'
import Typewriter from "typewriter-effect";
import Resume from '../../components/resume/Resume';


const Home = () => {

    const [animationTitle, setAnimationTitle] = useState(false)
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setAnimationTitle(true)
        }, 3000)
        setTimeout(() => {
            setLoader(false)
        }, 3000)
    }, [])

    return(
        <div className="homeContainer">
            <div className="homeLoader">
                <div className={`homeImageTop ${animationTitle ? 'animate' : ''}`}>
                    <img src={Montain} alt="Montagnes"/>
                </div>
                <div className="homeTitle">
                    <h1>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                .pauseFor(3000)
                                .typeString("DevincentWeb")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Développeur Web")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("DevincentWeb")
                                .start()
                            }}
                        />
                    </h1>
                </div>
                <div className={`loader ${loader ? 'animate' : 'off'}`}>
                    <div className="textLoader">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                .typeString("Chargement...")
                                .start()
                            }}
                        />
                    </div>
                    <div className="barre">
                        <div className="recharge"></div>
                    </div>
                    <div className="loaderBack"></div>
                </div>
                <div className={`homeImageBottom ${animationTitle ? 'animate' : ''}`}>
                    <img src={Montain} alt="Montagnes"/>
                </div>
            </div>
            <div className="homeContent">
            </div>
            <section className="resume">
                <Resume/>
            </section>
            <div className="attendant" style={{width: "100vw", height: '100vh'}}>

            </div>
        </div>
    )
}

export default Home