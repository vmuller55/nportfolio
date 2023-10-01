import './home.css'
import { useState, useEffect } from 'react'
import Typewriter from "typewriter-effect";
import Resume from '../../components/resume/Resume';


const Home = () => {

    const [animationTitle, setAnimationTitle] = useState(false)
    const [loader, setLoader] = useState(true)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        window.scrollTo({top:0, left:0, behavior:'smooth'})
        setTimeout(() => {
            setAnimationTitle(true)
        }, 4000)
        setTimeout(() => {
            setLoader(false)
        }, 4000)
        setTimeout(() => {
            setIsLoading(false)
        }, 6000)
    }, [])



    return(
        <div className={`homeContainer ${isLoading ? 'loading' : ''}`}>
            <div className="homeLoader">
                <div className={`homeImageTop ${animationTitle ? 'animate' : ''}`}>
                </div>
                <div className="homeTitle">
                    <h1>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                .pauseFor(4000)
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