import './Main.css';
import fotoMykoll from '../assets/foto-mykoll.webp';
import imgHtml from '../assets/html.svg';
import imgCss from '../assets/css.svg';
import imgJS from '../assets/js.svg';
import imgReact from '../assets/react.svg';
import imgVite from '../assets/vite.svg';
import imgBootstrap from '../assets/bootstrap.svg';
import imgNode from '../assets/Node.svg';
import imgPhp from '../assets/php.svg';
import imgGit from '../assets/git.svg';
import imgMysql from '../assets/mysql.svg';
import imgVScode from '../assets/vscode.svg';
import imgGithub from '../assets/github.svg';
import Banner1 from '../assets/Champs.png';
import imgLink from '../assets/link.svg';
import { FaGithub } from 'react-icons/fa';



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

            <div id='align-icons'>
                <img src={imgHtml} alt="Icone Html" />
                <img src={imgCss} alt="Icone Css" />
                <img src={imgJS} alt="Icone Js" />
                <img src={imgReact} alt="Icone React" />
                <img src={imgVite} alt="Icone Vite" />
                <img src={imgBootstrap} alt="Icone Bootstrap" />
                <img src={imgNode} alt="Icone Node.js" />
                <img src={imgPhp} alt="Icone PHP" />
                <img src={imgGit} alt="Icone Git" />
                <img src={imgMysql} alt="Icone Mysql" />
                <img src={imgVScode} alt="Icone Vscode" />
                <img src={imgGithub} alt="Icone Github" />
            </div>

            {/* Terceiro Tópico */}
            <h2>Projetos</h2>

            <div className='align-text'>
                <p>Alguns dos que já fiz até aqui</p>
            </div>

            <div className='card'>
                <img src={Banner1} alt="" />
                <p className='titulo-card'>Guia dos Campeões - LoL</p>
                <p className='desc-card'>Este é um projeto desenvolvido em React + TypeScript + Vite que consome a API do League of Legends (DDragon) para exibir uma lista completa de personagens, com busca, visualização de detalhes e sistema de favoritos.</p>
                <p className='desc-tecno'><b className='tecnologias'>Tecnologias Utilizadas :</b><span className='tec-html'> HTML </span>,
                    <span className='tec-css'> CSS </span>,
                    <span className='tec-react'> React </span>,
                    <span className='tec-ts'> TypeScript </span>,
                    <span className='tec-js'> JavaScript </span>,
                    <span className='tec-vite'> Vite </span></p>

                <div className='align-links'>
                    <div className='align-link'>
                        <img src={imgLink} alt="Icone do Link" />
                        <a href='https://lista-react-typescript.vercel.app/' target="_blank" rel="noreferrer">Ver Site</a>
                    </div>
                    <div className='align-link'>
                        <FaGithub />
                        <a href='https://github.com/mykoll007/PI-React-Typescript' target="_blank" rel="noreferrer">
                            Ver Código
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;
