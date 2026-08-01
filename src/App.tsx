'use client';
import React, { useState } from 'react';
import DotGrid from './components/DotGrid';
import SpecularButton from './components/SpecularButton';
import CircularGallery from './components/CircularGallery';

export default function KarmaStudiosWeb() {
  const [activeSection, setActiveSection] = useState('home');

  // Configuración de la galería para "La Estrella Que No Buscaba"
  const galleryItems = [
    { image: '/YEAR1.png', text: '1. Year 1', link: 'https://docs.google.com/document/d/13YgOBEQVWJIoCv_Jbr1TC8HDBFn-AL6N7TQcA0s4oyI/edit?usp=sharing' },
    { image: '/YEAR2.png', text: '2. Year 2', link: 'https://docs.google.com/document/d/1qmi49hiTH0RYKvthmIxif1rI5pbYCuLTXY2YMF_DQZI/edit?usp=sharing' },
    { image: '/TOKYO.png', text: '3. Tokyo', link: 'https://docs.google.com/document/d/1deFiqJK3iqt9dZrgG2vAVUKYishelQQllcFtQGbpyAE/edit?usp=sharing' },
    { image: '/SPAIN.png', text: '4. Spain', link: 'https://docs.google.com/document/d/1HXC546ZI4mFK_MWzGCKPOXUl0uElpeW3VXZ9cHWI57g/edit?usp=sharing' },
    { image: '/YEAR3.png', text: '5. Year 3', link: 'https://docs.google.com/document/d/1IvgAjfoxpI3yKK0DsXOHwcC5GgPnT92HoF58mHJLCgM/edit?usp=sharing' },
    { image: '/OKI.png', text: '6. Oki', link: 'https://docs.google.com/document/d/1wyZBxhMsHU3UaKsXL0hbQ0JrMeh7I5pqWmey5yvyKEo/edit?usp=sharing' },
    { image: '/YEAR4.png', text: '7. Year 4', link: 'https://docs.google.com/document/d/1dF8JN3KTNZLNhV7sFv6qO3Otewstoe8SAoFlKxKfdFI/edit?usp=sharing' }
  ];

  return (
    <div className="min-h-screen bg-[#0A0514] text-gray-200 font-sans selection:bg-[#5227FF] selection:text-white relative overflow-x-hidden">
      
      {/* Fondo Interactivo */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <DotGrid baseColor="#2A1659" activeColor="#5227FF" />
      </div>

      {/* Navegación Global */}
      <header className="relative z-50 p-6 border-b border-[#5227FF]/30 bg-[#0A0514]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex justify-center">
          <button onClick={() => setActiveSection('home')} className="text-4xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#5227FF] to-purple-400 hover:scale-105 transition-transform">
            KARMA STUDIOS
          </button>
        </div>
      </header>

      {/* Contenedor Principal */}
      <main className="relative z-10 flex-grow p-8 max-w-6xl mx-auto w-full min-h-[80vh]">
        
        {/* --- SECCIÓN 1: HOME --- */}
        {activeSection === 'home' && (
          <div className="space-y-16 py-12 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-light text-white">Tres ramas. Un <span className="text-[#5227FF] font-bold">Universo.</span></h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Explora nuestras divisiones dedicadas a traer las mejores historias a la realidad a través de novelas ligeras, mangas y animación de alta calidad.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* FDONK Novels */}
              <div className="flex flex-col items-center bg-black/40 p-8 rounded-2xl border border-[#5227FF]/20 hover:border-[#5227FF]/50 transition-all backdrop-blur-sm">
                <img src="/FDONKNOVELS.jpg" alt="FDONK Novels Logo" className="w-48 h-48 object-cover rounded-xl mb-8 shadow-[0_0_30px_rgba(82,39,255,0.2)]" />
                <SpecularButton onClick={() => setActiveSection('novels')} baseColor="#1A0D33">
                  Ir a FDONK NOVELS
                </SpecularButton>
              </div>

              {/* Karma Studios */}
              <div className="flex flex-col items-center bg-black/40 p-8 rounded-2xl border border-[#5227FF]/20 hover:border-[#5227FF]/50 transition-all backdrop-blur-sm">
                <img src="/LOGOKARMA.jpg" alt="Karma Studios Logo" className="w-48 h-48 object-cover rounded-xl mb-8 shadow-[0_0_30px_rgba(82,39,255,0.2)]" />
                <SpecularButton onClick={() => setActiveSection('studios')} baseColor="#1A0D33">
                  Ir a KARMA STUDIOS
                </SpecularButton>
              </div>

              {/* FDONK Manga */}
              <div className="flex flex-col items-center bg-black/40 p-8 rounded-2xl border border-[#5227FF]/20 hover:border-[#5227FF]/50 transition-all backdrop-blur-sm">
                <video src="/FDONKMANGA.mp4" autoPlay loop muted playsInline className="w-48 h-48 object-cover rounded-xl mb-8 shadow-[0_0_30px_rgba(82,39,255,0.2)]" />
                <SpecularButton onClick={() => setActiveSection('manga')} baseColor="#1A0D33">
                  Ir a FDONK MANGA
                </SpecularButton>
              </div>
            </div>
          </div>
        )}

        {/* --- SECCIÓN 2: FDONK NOVELS --- */}
        {activeSection === 'novels' && (
          <div className="space-y-16 animate-fade-in">
            <h2 className="text-4xl font-bold border-b border-[#5227FF]/30 pb-4 text-[#5227FF]">FDONK NOVELS</h2>
            
            {/* Novela 1 */}
            <div className="flex flex-col md:flex-row gap-8 bg-black/30 p-6 rounded-2xl border border-white/5">
              <img src="/BAJOESTRELLA1.0.png" alt="Bajo el Brillo de la Estrella" className="w-full md:w-64 rounded-xl shadow-lg" />
              <div className="space-y-4 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white">Bajo el Brillo de la Estrella</h3>
                <p className="text-gray-300">Dos actores. Un muro. Y una verdad que no admite guiones.<br/>En el deslumbrante mundo de las idols, Ai y Alex descubren que el amor más real no sucede ante las cámaras, sino en el silencio de una habitación bañada en luces LED. Un lenguaje secreto de golpes en la pared y un refugio de color azul eléctrico son los únicos testigos de un incendio a fuego lento. Esta es la historia de cómo dos personas aprendieron a apagar los focos para empezar a brillar de verdad. Porque cuando las luces se apagan, comienza la vida.</p>
                <div className="pt-4">
                  <a href="https://docs.google.com/document/d/18w4fUxBkpWMD0-SMnUu6fgYf1Jbvu7_oTJUuJpibt5o/edit?usp=sharing" target="_blank" rel="noreferrer">
                    <SpecularButton baseColor="#2A1659">Leer novela</SpecularButton>
                  </a>
                </div>
              </div>
            </div>

            {/* Novela 2 */}
            <div className="flex flex-col md:flex-row gap-8 bg-black/30 p-6 rounded-2xl border border-white/5">
              <img src="/GRIS.png" alt="El gris perfecto" className="w-full md:w-64 rounded-xl shadow-lg" />
              <div className="space-y-4 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white">El gris perfecto</h3>
                <p className="text-gray-300">Alex vive para el fútbol de barrio y los recreos con sus amigos. Ai huye de las luces de Japón buscando una vida normal. En los pasillos del María Inmaculada, lo que empieza como un encuentro improbable se convierte en un refugio contra el mundo.</p>
                <div className="pt-4">
                  <a href="https://docs.google.com/document/d/1dKusQWJqmr1eUvl4VVovofdcjN87MmOgHzf1e0pdgC4/edit?usp=sharing" target="_blank" rel="noreferrer">
                    <SpecularButton baseColor="#2A1659">Leer novela</SpecularButton>
                  </a>
                </div>
              </div>
            </div>

            {/* Novela 3 */}
            <div className="flex flex-col md:flex-row gap-8 bg-black/30 p-6 rounded-2xl border border-white/5">
              <img src="/SOMBRAS.png" alt="Donde Mueren las Sombras" className="w-full md:w-64 rounded-xl shadow-lg" />
              <div className="space-y-4 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white">Donde Mueren las Sombras</h3>
                <p className="text-gray-300">Un rugido en el campo. Una estrella en el alma. Un pacto que desafió al mundo. Alex, el "León de Antequera", lucha por su carrera en el fútbol mientras Ai, una misteriosa estudiante japonesa, huye de una fama que la asfixia. Entre goles históricos en La Rosaleda y las luces de neón de Tokio, ambos descubrirán que la verdadera gloria no está en los estadios ni en las pantallas, sino en el refugio que han construido juntos.</p>
                <div className="pt-4">
                  <a href="https://docs.google.com/document/d/1IZ3dpzpSiKjifGpPkkjGdXQCkdYMaQ_x8czz-FJiqzA/edit?usp=sharing" target="_blank" rel="noreferrer">
                    <SpecularButton baseColor="#2A1659">Leer novela</SpecularButton>
                  </a>
                </div>
              </div>
            </div>

            {/* Novela 4 */}
            <div className="flex flex-col md:flex-row gap-8 bg-black/30 p-6 rounded-2xl border border-white/5">
              <img src="/EMYC.png" alt="Entre Mundos y Corazones" className="w-full md:w-64 rounded-xl shadow-lg" />
              <div className="space-y-4 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white">Entre Mundos y Corazones</h3>
                <p className="text-gray-300">En Córdoba, Nacho, Rafa y Alex conocen a Ai, Asuka y Sumi, chicas de anime que aparecen sin explicación. Viven juntos, surgen romances y malentendidos. Que destino les esperara al nuevo grupo de amigos.... o, algo mas?</p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <a href="https://docs.google.com/document/d/1REe5j29od4oJ8a6ipfdlf0O7O9aXvC-Y6Q38e-bYf2A/edit?usp=sharing" target="_blank" rel="noreferrer">
                    <SpecularButton baseColor="#2A1659">Leer novela</SpecularButton>
                  </a>
                  <a href="https://printes.24bookprint.com/site/?r=userwebsite/index&id=Alexgaeerr" target="_blank" rel="noreferrer">
                    <SpecularButton baseColor="#5227FF" lineColor="#a855f7">Comprar el Libro Aquí</SpecularButton>
                  </a>
                </div>
              </div>
            </div>

            {/* Novela Principal (Especial) */}
            <div className="mt-20 border-t-2 border-[#5227FF] pt-12">
              <div className="inline-block px-4 py-1 rounded-full bg-[#5227FF]/20 text-[#5227FF] font-bold text-sm tracking-widest mb-6">NOVELA PRINCIPAL</div>
              <div className="flex flex-col md:flex-row gap-8 bg-gradient-to-br from-[#1A0D33] to-black/60 p-8 rounded-3xl border border-[#5227FF]/40 shadow-[0_0_40px_rgba(82,39,255,0.15)]">
                <img src="/YEAR2.png" alt="La Estrella Que No Buscaba" className="w-full md:w-72 rounded-xl shadow-2xl" />
                <div className="space-y-4 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-white">La Estrella Que No Buscaba</h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">Alex aterriza en Tokio junto a su caótico grupo de amigos, «Los Toritos», con un plan claro: exprimir al máximo sus años en la universidad. Lo que no entraba en sus cálculos era que su carisma lo llevaría directo a Ichigo Productions, lanzándolo sin frenos al deslumbrante y exigente mundo del espectáculo japonés. En un principio, su atención es cautivada por un misterio inalcanzable: la idol perfecta, Ai Hoshino. Sin embargo, sobrevivir en la industria requiere sudor, talento y saber lidiar con el ego de sus compañeros. Entre la locura de la convivencia en la mansión, los extenuantes ensayos teatrales y los constantes choques de orgullo con cierta "niña prodigio" de la actuación que no soporta su actitud desenfadada, las líneas entre el guion y la realidad comenzarán a difuminarse. A medida que el telón de la obra más importante de su vida se cierra, Alex descubrirá que las estrellas del cielo son hermosas de admirar, pero el fuego que de verdad te roba el aliento suele esconderse bajo el sarcasmo, las discusiones diarias y la mirada de quien menos te lo esperas.</p>
                  <div className="pt-4">
                    <SpecularButton onClick={() => setActiveSection('novela-principal')} baseColor="#5227FF" intensity={1.5}>
                      Explorar novela
                    </SpecularButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- SECCIÓN 3: NOVELA PRINCIPAL (GALERÍA) --- */}
        {activeSection === 'novela-principal' && (
          <div className="space-y-8 animate-fade-in flex flex-col items-center">
            <button onClick={() => setActiveSection('novels')} className="self-start text-[#5227FF] hover:text-white mb-4">← Volver a FDONK NOVELS</button>
            <h2 className="text-4xl font-bold text-white text-center">La Estrella Que No Buscaba</h2>
            
            <p className="text-center text-gray-300 max-w-2xl bg-black/40 p-4 rounded-xl border border-white/5">
              Esta novela está dividida en varias secciones, aqui puedes elegir a cual quieres ir, tambien, puedes ir directamente a la VC en el boton de abajo del selector.
            </p>

            {/* Selector 3D */}
            <div className="w-full h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden border border-[#5227FF]/20 shadow-[0_0_50px_rgba(82,39,255,0.1)] relative">
              <CircularGallery items={galleryItems} bend={3} textColor="#ffffff" />
            </div>

            {/* Enlaces de las secciones para la galería */}
            <div className="flex flex-wrap justify-center gap-3 w-full py-4">
              {galleryItems.map((item, idx) => (
                <a key={idx} href={item.link} target="_blank" rel="noreferrer">
                  <SpecularButton size="sm" baseColor="#1A0D33">{item.text}</SpecularButton>
                </a>
              ))}
            </div>

            <div className="pt-10 border-t border-[#5227FF]/20 w-full flex justify-center">
              <a href="https://docs.google.com/document/d/1gJw7rDfkeOhZAwGvbGVPCevVs31cGSUnNdUNBd11ddE/edit?usp=sharing" target="_blank" rel="noreferrer">
                <SpecularButton size="lg" baseColor="#5227FF" lineColor="#ffffff" intensity={1.5}>
                  Novela completa
                </SpecularButton>
              </a>
            </div>
          </div>
        )}

        {/* --- SECCIÓN 4: KARMA STUDIOS --- */}
        {activeSection === 'studios' && (
          <div className="space-y-16 animate-fade-in">
            <h2 className="text-4xl font-bold border-b border-[#5227FF]/30 pb-4 text-[#5227FF]">KARMA STUDIOS</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-4 bg-black/40 p-6 rounded-2xl border border-white/5">
                <h3 className="text-2xl font-bold text-white">Videoclip Oficial FDONK NOVELS</h3>
                <div className="w-full aspect-video rounded-xl overflow-hidden border border-[#5227FF]/30 shadow-lg">
                  <video src="/VIDEOCLIPOF.mp4" controls className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="space-y-4 bg-black/40 p-6 rounded-2xl border border-white/5">
                <h3 className="text-2xl font-bold text-white">Anuncio: Entre Mundos y Corazones</h3>
                <div className="w-full aspect-video rounded-xl overflow-hidden border border-[#5227FF]/30 shadow-lg">
                  <video src="/ANUNCIOEMYC.mp4" controls className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- SECCIÓN 5: FDONK MANGA --- */}
        {activeSection === 'manga' && (
          <div className="flex flex-col items-center justify-center min-h-[50vh] animate-fade-in">
            <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#5227FF] to-black tracking-widest text-center shadow-purple-900/50 drop-shadow-2xl">
              COMING SOON
            </h2>
            <p className="text-gray-400 mt-6 text-lg">Próximamente se subirán nuevos mangas a la plataforma.</p>
          </div>
        )}

      </main>

      {/* --- FOOTER GLOBAL --- */}
      <footer className="relative z-20 border-t border-[#5227FF]/20 mt-20 bg-black/60 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left text-sm text-gray-400">
          
          {/* Bloque 1 */}
          <div className="space-y-4">
            <p className="font-semibold text-gray-200 text-base">
              Alex — CEO & Community Manager
            </p>
            <p>KARMA STUDIOS | FDONK NOVELS | FDONK MANGA</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="https://agent-6983f04bcacb4c7baf3b6edf--fdonk.netlify.app/" target="_blank" rel="noreferrer" className="text-[#5227FF] hover:text-white transition-colors">Web Oficial FDONK</a>
              <span>|</span>
              <a href="https://x.com/FDONK166" target="_blank" rel="noreferrer" className="text-[#5227FF] hover:text-white transition-colors">X (Twitter)</a>
              <span>|</span>
              <a href="https://www.instagram.com/fdo_nk?igsh=c3FpdzFybzVndGNr" target="_blank" rel="noreferrer" className="text-[#5227FF] hover:text-white transition-colors">Instagram</a>
            </div>
          </div>

          {/* Bloque 2 */}
          <div className="md:border-l border-[#5227FF]/20 md:pl-8 space-y-4 flex flex-col justify-center">
            <p className="font-semibold text-gray-200">Redes Personales</p>
            <div>
              <a href="https://www.tiktok.com/@alexx._10__?_r=1&_t=ZN-94QMusNCQ9m" target="_blank" rel="noreferrer" className="text-[#5227FF] hover:text-white transition-colors">
                Sígueme en TikTok
              </a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
