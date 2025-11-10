import './Main.css';
import fotoMykoll from '../assets/foto-mykoll.webp';
import imgHtml from '../assets/html.svg';
import imgCss from '../assets/css.svg';
import imgJS from '../assets/js.svg';
import imgReact from '../assets/react.svg';
import imgVite from '../assets/vite.svg';
import imgBootstrap from '../assets/bootstrap.svg';
import imgNode from '../assets/node.svg';
import imgPhp from '../assets/php.svg';
import imgGit from '../assets/git.svg';
import imgMysql from '../assets/mysql.svg';
import imgVScode from '../assets/vscode.svg';
import imgGithub from '../assets/github.svg';
import Banner1 from '../assets/Lyra.png';
import Banner2 from '../assets/Champs.png';
import Banner3 from '../assets/Elojob.png';
import Banner4 from '../assets/Autenticacao.png';
import Banner5 from '../assets/Fotografia.png';
import Banner6 from '../assets/Mova-se.png';
import imgLink from '../assets/link.svg';
import { FaGithub } from 'react-icons/fa';

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import { useState } from "react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);


function Main() {

    //useEffect , useRef do H1
    const tituloRef = useRef(null);
    const medidaRef = useRef(null);

    useEffect(() => {
        // mede a altura final do texto
        if (medidaRef.current && tituloRef.current) {
            tituloRef.current.style.minHeight = medidaRef.current.offsetHeight + "px";
        }

        // anima o texto
        gsap.to(tituloRef.current, {
            duration: 4,
            text: "Olá 👋,<br/>Meu nome é <br/><span class='gradient'>Mykoll Daniel</span><br/>e eu sou <br/><span class='gradient'>Desenvolvedor</span><br/><span class='gradient'>FullStack</span>",
            ease: "power1.inOut"
        });
    }, []);

    //useEffect , useRef da foto
    const circleRef = useRef(null);

    useEffect(() => {
        if (circleRef.current) {
            gsap.to(circleRef.current, {
                y: -12,                // sobe só um pouquinho
                duration: 1.8,         // velocidade suave
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,            // infinito
                scrollTrigger: {
                    trigger: "#circle",
                    start: "top 80%",
                    once: true
                }
            });
        }
    }, []);

    //useEffect , useRef dos Cards
    const cardsRef = useRef([]);
    cardsRef.current = []; // zera para evitar duplicação

    useEffect(() => {
        if (cardsRef.current.length > 0) {
            ScrollTrigger.batch(cardsRef.current, {
                start: "top 85%",
                once: true,         // só anima uma vez
                onEnter: batch => {
                    gsap.fromTo(
                        batch,
                        { y: 50, opacity: 0, scale: 0.9 },
                        {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            ease: "power3.out",
                            stagger: 0.2
                        }
                    );
                }
            });
        }
    }, []);

    //useEffect, useRef dos Icones
    const iconsRef = useRef([]);

    useEffect(() => {
        if (iconsRef.current.length > 0) {
            // estado inicial explosão
            gsap.set(iconsRef.current, {
                opacity: 0,
                scale: 0,
                x: () => gsap.utils.random(-200, 200),
                y: () => gsap.utils.random(-200, 200)
            });

            gsap.to(iconsRef.current, {
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                duration: 1,
                ease: "back.out(1.7)",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: "#align-icons",
                    start: "top 85%",
                    once: true
                }
            });

            // animação no hover
            iconsRef.current.forEach(icon => {
                icon.addEventListener("mouseenter", () => {
                    gsap.to(icon, {
                        scale: 1.3,
                        rotation: gsap.utils.random(-10, 10), // gira aleatoriamente
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });
                icon.addEventListener("mouseleave", () => {
                    gsap.to(icon, {
                        scale: 1,
                        rotation: 0,
                        duration: 0.3,
                        ease: "power2.inOut"
                    });
                });
            });
        }
    }, []);


    //useEffect, useRef do Contato
    const contatoRef = useRef(null);

    useEffect(() => {
        if (contatoRef.current) {
            gsap.fromTo(
                contatoRef.current,
                { y: 100, opacity: 0 },   // estado inicial (já bate com CSS)
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: contatoRef.current,
                        start: "top 85%",
                        once: true
                    }
                }
            );
        }
    }, []);


    //useState do Contato para mandar e-mail
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // inicia o loading

        try {
            // Caso queira usar local só colocar o http do seu localhost
            const response = await fetch("https://backend-ashy-psi-99.vercel.app/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, telefone, mensagem }),
            });

            if (response.ok) {
                setModalMessage("Mensagem enviada com sucesso! ✅");
                setEmail("");
                setTelefone("");
                setMensagem("");
            } else {
                setModalMessage("Erro ao enviar mensagem. ❌");
            }
        } catch {
            setModalMessage("Não foi possível enviar agora. ⚠️");
        } finally {
            setLoading(false); // para o loading
            setShowModal(true);
        }
    };


    return (
        <>
            <main id='inicio'>
                <div id='align'>

                    <h1 ref={tituloRef}>
                    </h1>

                    {/* título fantasma só para medir altura */}
                    <h1 ref={medidaRef} style={{
                        position: "absolute",
                        visibility: "hidden",
                        pointerEvents: "none",
                        whiteSpace: "pre-line"
                    }}>
                        Olá 👋,<br />Meu nome é <br /><span className='gradient'>Mykoll Daniel</span><br />e eu sou <br /><span className='gradient'>Desenvolvedor</span><br /><span className='gradient' id='sobre'>FullStack</span>
                    </h1>

                    <div id='circle' ref={circleRef}>
                        <img src={fotoMykoll} alt="Mykoll Daniel" width={300} loading="lazy" />
                    </div>
                </div>

                {/* Primeiro Tópico */}
                <h2 id='sobre-mim'>Sobre Mim</h2>

                <div className='align-text'>
                    <p id="habilidades">Transformo necessidades em aplicações reais, evolventes e funcionais. Desenvolvo sistemas através da minha paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.</p>
                </div>

                {/* Segundo Tópico */}
                <h2>Tecnologias Utilizadas</h2>

                <div className='align-text'>
                    <p>Tecnologias com as quais tenho trabalhado recentemente</p>
                </div>

                <div id='align-icons'>
                    <img ref={el => el && (iconsRef.current[0] = el)} src={imgHtml} alt="Icone Html" />
                    <img ref={el => el && (iconsRef.current[1] = el)} src={imgCss} alt="Icone Css" />
                    <img ref={el => el && (iconsRef.current[2] = el)} src={imgJS} alt="Icone Js" />
                    <img ref={el => el && (iconsRef.current[3] = el)} src={imgReact} alt="Icone React" />
                    <img ref={el => el && (iconsRef.current[4] = el)} src={imgVite} alt="Icone Vite" />
                    <img ref={el => el && (iconsRef.current[5] = el)} src={imgBootstrap} alt="Icone Bootstrap" />
                    <img ref={el => el && (iconsRef.current[6] = el)} src={imgNode} alt="Icone Node.js" />
                    <img ref={el => el && (iconsRef.current[7] = el)} src={imgPhp} alt="Icone PHP" />
                    <img ref={el => el && (iconsRef.current[8] = el)} src={imgGit} alt="Icone Git" />
                    <img ref={el => el && (iconsRef.current[9] = el)} src={imgMysql} alt="Icone Mysql" />
                    <img ref={el => el && (iconsRef.current[10] = el)} src={imgVScode} alt="Icone Vscode" />
                    <img ref={el => el && (iconsRef.current[11] = el)} src={imgGithub} alt="Icone Github" id='projetos' />
                </div>

                {/* Terceiro Tópico */}
                <h2>Projetos</h2>

                <div className='align-text' id='terceiro-tpc'>
                    <p>Alguns dos que já fiz até aqui</p>
                </div>

                <section className='cards'>
                    {/* Card 1 */}
                    <div className='card' ref={el => cardsRef.current[0] = el}>
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
                    <div className='card' ref={el => cardsRef.current[1] = el}>
                        <img src={Banner2} alt="" />
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
                    <div className='card' ref={el => cardsRef.current[2] = el}>
                        <img src={Banner3} alt="" />
                        <p className='titulo-card'>Plataforma de Mentoria</p>
                        <p className='desc-card'>Sistema focado em serviços de elojob e mentoria, com gestão de pedidos, integração de pagamentos e acompanhamento de progresso. Segurança, eficiência e experiência do usuário são prioridades.</p>
                        <p className='desc-tecno'><b className='tecnologias'>Tecnologias Utilizadas :</b><span className='tec-html'> HTML </span>,
                            <span className='tec-css'> CSS </span>,
                            <span className='tec-js'> JavaScript </span>
                        </p>


                        <div className='align-links'>
                            <div className='align-link'>
                                <img src={imgLink} alt="Icone do Link" />
                                <a href='https://elojobxcronos.vercel.app/' target="_blank" rel="noreferrer">Ver Site</a>
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
                    <div className='card' ref={el => cardsRef.current[3] = el}>
                        <img src={Banner4} alt="" />
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
                    <div className='card' ref={el => cardsRef.current[4] = el}>
                        <img src={Banner5} alt="" />
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
                    <div className='card' ref={el => cardsRef.current[5] = el}>
                        <img src={Banner6} alt="" />
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
                    <div id='conteudo-contato' ref={contatoRef}>
                        <p>Fique à vontade para me enviar uma mensagem!</p>

                        <form onSubmit={handleSubmit}>
                            <label htmlFor="email">Email:</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                required />

                            <label htmlFor="telefone">Whatsapp:</label>
                            <input type="number" value={telefone} onChange={(e) => {
                                // mantém só números
                                let valor = e.target.value.replace(/\D/g, "");
                                // limita no máximo 11 dígitos
                                if (valor.length > 11) valor = valor.slice(0, 11);
                                setTelefone(valor);
                            }}
                                maxLength={11}
                                required
                            />

                            <label htmlFor="mensagem">Mensagem:</label>
                            <textarea id="mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)} required></textarea>
                            <div id='align-btn'>
                                <button type="submit" id='btn-enviar' disabled={loading}>
                                    {loading ? <span className="loader"></span> : "Enviar"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <p>{modalMessage}</p>
                        <button onClick={() => setShowModal(false)}>Fechar</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Main;
