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

import { useState } from "react";


function Main() {
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5000/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, telefone, mensagem }),
        });

        if (response.ok) {
            alert("Mensagem enviada com sucesso!");
            setEmail("");
            setTelefone("");
            setMensagem("");
        } else {
            alert("Erro ao enviar mensagem. Tente novamente.");
        }
    };

    return (
        <main id='inicio'>
            <div id='align'>
                <h1 >
                    Olá 👋,<br />
                    Meu nome é <br />
                    <span>Mykoll Daniel</span><br />
                    e eu sou <br />
                    <span id='sobre'>Desenvolvedor</span><br></br> <span>FullStack</span>
                </h1>

                <div id='circle'>
                    <img src={fotoMykoll} alt="Mykoll Daniel" width={300} loading="lazy" />
                </div>
            </div>

            {/* Primeiro Tópico */}
            <h2>Sobre Mim</h2>

            <div className='align-text'>
                <p id="habilidades">Transformo necessidades em aplicações reais, evolventes e funcionais. Desenvolvo sistemas através da minha paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.</p>
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
                <img src={imgVScode} alt="Icone Vscode" id='projetos' />
                <img src={imgGithub} alt="Icone Github" />
            </div>

            {/* Terceiro Tópico */}
            <h2>Projetos</h2>

            <div className='align-text' id='terceiro-tpc'>
                <p>Alguns dos que já fiz até aqui</p>
            </div>

            <section className='cards'>
                {/* Card 1 */}
                <div className='card'>
                    <img src={Banner1} alt="" />
                    <p className='titulo-card'>Lyra Inteligência Artificial</p>
                    <p className='desc-card'>Lyra é uma assistente de IA criada e personalizada por mim, com memória, respostas em tempo real e frontend responsivo, feita em Node.js e JavaScript, usando a Groq API para alta velocidade e qualidade.</p>
                    <p className='desc-tecno'><b className='tecnologias'>Tecnologias Utilizadas :</b><span className='tec-html'> HTML </span>,
                        <span className='tec-css'> CSS </span>,
                        <span className='tec-js'> Javascript </span>,
                        <span className='tec-node'> Node.js </span>
                    </p>

                    <div className='align-links'>
                        <div className='align-link'>
                            <img src={imgLink} alt="Icone do Link" />
                            <a href='https://lyra-ia.vercel.app/' target="_blank" rel="noreferrer">Ver Site</a>
                        </div>
                        <div className='align-link'>
                            <FaGithub />
                            <a href='https://github.com/mykoll007/Lyra-IA' target="_blank" rel="noreferrer">
                                Ver Código
                            </a>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
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

                {/* Card 3 */}
                <div className='card'>
                    <img src={Banner1} alt="" />
                    <p className='titulo-card'>Plataforma de Mentoria</p>
                    <p className='desc-card'>Sistema focado em serviços de elojob e mentoria, com gestão de pedidos, integração de pagamentos e acompanhamento de progresso. Segurança, eficiência e experiência do usuário são prioridades.</p>
                    <p className='desc-tecno'><b className='tecnologias'>Tecnologias Utilizadas :</b><span className='tec-html'> HTML </span>,
                        <span className='tec-css'> CSS </span>,
                        <span className='tec-js'> JavaScript </span>
                    </p>


                    <div className='align-links'>
                        <div className='align-link'>
                            <img src={imgLink} alt="Icone do Link" />
                            <a href='https://elojobxcronos.com.br/' target="_blank" rel="noreferrer">Ver Site</a>
                        </div>
                        <div className='align-link'>
                            <FaGithub />
                            <a href='https://github.com/mykoll007/Projeto-Elojob' target="_blank" rel="noreferrer">
                                Ver Código
                            </a>
                        </div>
                    </div>
                </div>

                {/* Card 4 */}
                <div className='card'>
                    <img src={Banner1} alt="" />
                    <p className='titulo-card'>Sistema de Autenticação</p>
                    <p className='desc-card'>Experimente um sistema real de autenticação! Cadastre-se, faça login, recupere sua senha e veja como front-end, back-end em Node.js (JS), API REST e o banco de dados se conectam em um fluxo completo e profissional.</p>
                    <p className='desc-tecno'><b className='tecnologias'>Tecnologias Utilizadas :</b><span className='tec-html'> HTML </span>,
                        <span className='tec-css'> CSS </span>,
                        <span className='tec-js'> JavaScript </span>,
                        <span className='tec-node'> Node.js</span>,
                        <span className='tec-mysql'> MySQL</span></p>

                    <div className='align-links'>
                        <div className='align-link'>
                            <img src={imgLink} alt="Icone do Link" />
                            <a href='https://projeto-x-cronos--green.vercel.app/' target="_blank" rel="noreferrer">Ver Site</a>
                        </div>
                        <div className='align-link'>
                            <FaGithub />
                            <a href='https://github.com/mykoll007/Projeto-XCronos' target="_blank" rel="noreferrer">
                                Ver Código
                            </a>
                        </div>
                    </div>
                </div>

                {/* Card 5 */}
                <div className='card'>
                    <img src={Banner1} alt="" />
                    <p className='titulo-card'>Portfólio Fotográfico</p>
                    <p className='desc-card'>Este projeto é um portfólio de fotografia criado para exibir o trabalho de um fotógrafo profissional. Inclui galerias de imagens, descrições de projetos, informações de contato e muito mais.</p>
                    <p className='desc-tecno'><b className='tecnologias'>Tecnologias Utilizadas :</b><span className='tec-html'> HTML </span>,
                        <span className='tec-css'> CSS </span>,
                        <span className='tec-scss'> SCSS </span>,
                        <span className='tec-js'> JavaScript </span>
                    </p>

                    <div className='align-links'>
                        <div className='align-link'>
                            <img src={imgLink} alt="Icone do Link" />
                            <a href='https://portfolio-paolla.netlify.app/pages/portfolio' target="_blank" rel="noreferrer">Ver Site</a>
                        </div>
                        <div className='align-link'>
                            <FaGithub />
                            <a href='https://github.com/mykoll007/Projeto-Fotografia' target="_blank" rel="noreferrer">
                                Ver Código
                            </a>
                        </div>
                    </div>
                </div>

                {/* Card 6 */}
                <div className='card'>
                    <img src={Banner1} alt="" />
                    <p className='titulo-card' id='title-projeto'>Sistema de Formulário e Notificação por E-mail</p>
                    <p className='desc-card'>Este projeto template básico mas cria formulários que guardam as informações em um banco de dados e também enviam esses dados por e-mail automaticamente.</p>
                    <p className='desc-tecno'><b className='tecnologias'>Tecnologias Utilizadas :</b><span className='tec-php'> PHP </span>,
                        <span className='tec-css'> CSS </span>,
                        <span className='tec-js'> JavaScript </span>,
                        <span className='tec-mysql'> MySQL </span>,
                        <span className='tec-dockerfile'> Dockerfile </span></p>

                    <div className='align-links'>
                        <div className='align-link'>
                            <img src={imgLink} alt="Icone do Link" />
                            <a href='https://mova-se.onrender.com/index.html' target="_blank" rel="noreferrer">Ver Site</a>
                        </div>
                        <div className='align-link'>
                            <FaGithub />
                            <a href='https://github.com/mykoll007/Mova-se-' target="_blank" rel="noreferrer">
                                Ver Código
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <h2 id="contato">Contato</h2>

            <div id='align-contato'>
                <div id='conteudo-contato'>
                    <p>Fique à vontade para me enviar uma mensagem!</p>

                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                            required />

                        <label htmlFor="telefone">Whatsapp:</label>
                        <input type="number" value={telefone} onChange={(e) => setTelefone(e.target.value)} />

                        <label htmlFor="mensagem">Mensagem:</label>
                        <textarea id="mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)} required></textarea>
                        <div id='align-btn'>
                            <button type="submit" id='btn-enviar'>Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Main;
