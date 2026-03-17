import imagem1 from "../../assets/item-1.jpg";
import imagem2 from "../../assets/item-2.jpg";
import imagem3 from "../../assets/item-3.jpg";


function Projects() {
    return (
        <>
            <section className="About">

                <p>Sobre desenvolvimento web</p>
                <h2>Eu crio sites e aplicativos bonitos e fáceis de usar.</h2>

                <div className="items">
                    <article className="item">
                        <div className="inner">
                            <img src={imagem1} alt="Ilustração de desenvolvimento front-end" />
                            <a href="#">Desenvolvimento Front-End</a>
                            <p>Criação de interfaces visualmente atraentes e responsivas usando HTML, CSS e frameworks JavaScript como React e Vue.</p>
                        </div>
                    </article>
                    <article className="item">
                        <div className="inner">
                            <img src={imagem2} />
                            <a href="#">Desenvolvimento Back-End</a>
                            <p>Desenvolvimento de aplicações robustas e escaláveis ​​para o lado do servidor com Node.js, Express e bancos de dados como MongoDB e SQL.</p>
                        </div>
                    </article>
                    <article className="item">
                        <div className="inner">
                            <img src={imagem3} />
                            <a href="#">Integração Full Stack</a>
                            <p>Integração perfeita de tecnologias de front-end e back-end para fornecer soluções web abrangentes.</p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="projects">

                <div className="inner2">

                    <p className="debug"><i className="ri-command-line"></i> Solução de problemas e depuração</p>

                    <h2>Portfólio de Projetos</h2>

                    <p className="info">Confira alguns dos meus projetos mais notáveis,
                        que demonstram minha capacidade de projetar e desenvolver soluções web eficazes.</p>

                    <button >Explore meus projetos <i className="ri-arrow-right-line"></i></button>

                    <div className="items">

                        <article className="item">

                            <i className="ri-shopping-bag-4-line"></i>
                            <a href="#">Comércio eletrônico</a>

                            <p>Desenvolvemos uma plataforma de comércio eletrônico completa com pagamentos seguros.</p>
                        </article>

                        <article className="item">

                            <i className="ri-id-card-line"></i>
                            <a href="#">Site do Portfólio</a>

                            <p>Desenvolvi e construí um site de portfólio pessoal para apresentar meus projetos e habilidades.</p>

                        </article>
                        <article className="item">

                            <i className="ri-apps-line"></i>
                            <a href="#">Aplicativo de mídia social</a>

                            <p>Criei um aplicativo de mídia social com atualizações em tempo real e interações com o usuário.</p>

                        </article>
                        <article className="item">

                            <i className="ri-news-line"></i>
                            <a href="#">Plataforma de blog</a>

                            <p>Desenvolvi uma plataforma de blog dinâmica com recursos de gerenciamento de conteúdo.</p>

                        </article>
                    </div>
                </div>

                <section className="Container">

                    <h1>Tem interesse em trabalhar conosco?</h1>

                    <div className="Container-Card">

                        <article className="Card-1">

                            <h2>Agende uma chamada</h2>
                            <p>Vamos conversar sobre suas ideias de projeto e como eu posso te ajudar.</p>

                            <button>Agende uma chamada <i className="ri-phone-line"></i></button>
                        </article>

                        <article className="Card-2">

                            <h2>Explore Meu Trabalho</h2>
                            <p>Veja meu portfólio para conferir o tipo de trabalho que realizo para você.</p>

                            <button>Ver Meu Trabalho</button>
                        </article>

                    </div>

                </section>

            </section>

        </>
    )
}
export default Projects