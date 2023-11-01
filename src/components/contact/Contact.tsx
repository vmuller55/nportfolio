import './contact.css'

const Contact = () => {
    return(
        <div className="contactContainer">
            <div className="contactContent">
                <div className="contactTitle">
                    <h2>Me contacter</h2>
                </div>
                <div className="contactInfo">
                    <h3>Contactez-moi pour votre projet par mail :</h3>
                    <h3><a href="mailto:devincentweb@gmail.com">DEVINCENTWEB@GMAIL.COM</a></h3>
                    <h3>Voici mon Github pour mes projets en cours :</h3>
                    <a href='https://github.com/vmuller55'><i className="fa-brands fa-github iconGit"></i></a>
                    <h3>Les technologies que j'utilise :</h3>
                    <div className="techTab">
                        <i className="fa-brands fa-html5"></i>
                        <i className="fa-brands fa-css3-alt"></i>
                        <i className="fa-brands fa-square-js"></i>
                        <i className="fa-brands fa-react"></i>
                        <i className="fa-brands fa-node-js"></i>
                        <i className="fa-brands fa-npm"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact