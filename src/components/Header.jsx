import './Header.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="logo">
                <span className="gradient">M.D.</span>
            </div>
            {/* Botão Hambúrguer (visível apenas <735px) */}
            <button
                className={`hamburger ${menuOpen ? 'is-active' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                <a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a>
                <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre Mim</a>
                <a href="#habilidades" onClick={() => setMenuOpen(false)}>Habilidades</a>
                <a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a>
                <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>

                <div className='icons-header'>
                    <a href="https://github.com" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com" id="linkedin" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>
                </div>

            </nav>

        </header>
    );
}

export default Header;
