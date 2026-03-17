import imagem from "../../assets/hero.jpg";

function Home() {
    return (

        <section className="Container-Maste">
            <div className="left-section">
                <div className="Title">
                    <h2>Desenvolvedor Web FullStack </h2>
                    <p>Projete e programe projetos simples e belos sem se sobrecarregar com complexidade. Desfrute da sua paixão por criar com facilidade e prazer.
                    </p>

                    <div className="buttons">
                        <button className="doc">Contrate-Me <i className="ri-arrow-right-line"></i></button>
                        <button className="git"><i className="ri-github-fill"></i> Meu Github</button>
                    </div>
                </div>
                <div className="bottom">
                    <p> Outras redes sociais:</p>
                    <div className="icons">
                        <i className="ri-youtube-line"></i>
                        <i className="ri-twitter-x-line"></i>
                        <i className="ri-linkedin-box-line"></i>
                        <i className="ri-instagram-line"></i>
                    </div>
                </div>
            </div>

            <img
                src={imagem}
                alt="Foto ilustrativa de desenvolvimento web"
            />


        </section>

    )
}

export default Home