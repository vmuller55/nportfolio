import './resume.css'

const Resume = () => {
    return(
        <div className="resumeContainer">
            <div className="resumeImage">
            </div>
            <div className="resumeContent">
                <div className="resumeInfos">
                    <div className="resumeTitle">
                        <h2>Qui je suis ?</h2>
                    </div>
                    <div className="resumeText">
                        <p>Je suis Muller Vincent, développeur Web.</p>
                        <p>Réellement passionné par le développement, je saurais traduire votre volonté sur le web</p>
                        <p>Si vous souhaitez créer un site à la hauteur de votre travail, n'attendez plus et contactez moi.</p>
                    </div>
                </div>
                <div className="resumeSkillTab">
                    <div className="skill">
                        <h3>Style</h3>
                        <div className="style"></div>
                    </div>
                    <div className="skill">
                        <h3>Responsive</h3>
                        <div className="responsive"></div>     
                    </div>
                    <div className="skill">
                        <h3 className='ref'><span>Référencement</span></h3>
                        <div className="seo"></div>      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume