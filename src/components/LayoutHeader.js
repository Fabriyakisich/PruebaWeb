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

const LayoutHeader = () => {
  return (
    <header className="bg-black/90 backdrop-blur-md text-white py-4 px-6 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <GloboSondaLogo />
          <h1 className="text-xl font-bold tracking-tighter">
            L<span className="text-red-500">M</span>E
          </h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#research" className="text-gray-400 hover:text-white transition font-medium text-sm tracking-widest">
            INVESTIGACIÓN
          </a>
          <a href="#data" className="text-gray-400 hover:text-white transition font-medium text-sm tracking-widest">
            GRAFANA
          </a>
          <a href="#team" className="text-gray-400 hover:text-white transition font-medium text-sm tracking-widest">
            EQUIPO
          </a>
        </nav>
        <button className="md:hidden text-gray-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default LayoutHeader;
// Este componente es el encabezado de la página, que incluye el logo y el menú de navegación.