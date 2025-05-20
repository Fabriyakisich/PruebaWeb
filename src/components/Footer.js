import React from 'react';

const GloboSondaLogo = () => {
  return (
    <svg
      className="w-8 h-8 text-red-500 animate-float"
      viewBox="0 0 60 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ animationDuration: '4s', animationTimingFunction: 'ease-in-out', animationIterationCount: 'infinite' }}
    >
      {/* Globo: círculo */}
      <circle cx="30" cy="30" r="25" stroke="currentColor" strokeWidth="4" fill="#F87171" />
      {/* Cuerda: línea */}
      <line x1="30" y1="55" x2="30" y2="75" stroke="currentColor" strokeWidth="3" />
      {/* Nudo: triángulo */}
      <polygon points="25,55 35,55 30,65" fill="currentColor" />
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-float {
          animation-name: float;
          animation-duration: 4s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>
    </svg>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <GloboSondaLogo />
            <h2 className="text-xl font-bold tracking-tighter">
              L<span className="text-red-500">M</span>E
            </h2>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white transition">GitHub</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Contacto</a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Laboratorio de Mecanica y Energia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
