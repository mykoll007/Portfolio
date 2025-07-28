import './Main.css';
import fotoMykoll from '../assets/foto-mykoll.webp';

function Main() {

    return (
        <main>
            <div id='align'>
                <h1 >
                    Olá 👋,<br />
                    Meu nome é <br />
                    <span>Mykoll Daniel</span><br />
                    e eu sou <br />
                    <span>Desenvolvedor</span><br></br> <span>FullStack</span>
                </h1>

                <div id='circle'>
                    <img src={fotoMykoll} alt="Mykoll Daniel" width={300} loading="lazy" />
                </div>
            </div>

            {/* Primeiro Tópico */}
            <h2>Sobre Mim</h2>

            <div className='align-text'> 
            <p>Transformo necessidades em aplicações reais, evolventes e funcionais. Desenvolvo sistemas através da minha paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.</p>
            </div>

            {/* Segundo Tópico */}
            <h2>Tecnologias Utilizadas</h2>

            <div className='align-text'> 
            <p>Tecnologias com as quais tenho trabalhado recentemente</p>
            </div>




        </main>
    );
}

export default Main;
