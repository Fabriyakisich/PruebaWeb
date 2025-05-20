import React, { useState } from 'react';

const ResearchSection = () => {
  const projects = [
    {
      title: "Measurement of Forbush Decrease events at the Center of the South Atlantic Magnetic Anomaly with Muon detectors",
      description: "Análisis detallado de eventos de disminución de Forbush en el centro de la Anomalía Magnética del Atlántico Sur, utilizando detectores de muones para estudiar las variaciones temporales en el flujo de partículas cósmicas.",
      authors: ["Jorge Molina", "Diego Stalder", "Giovanni Secchia", "Oscar Baez", "Matias Bertoli", "Alan Cuevas", "Caleb Trepowski", "Lucas Cho", "Jesus Nuñez", "Esteban Cristaldo"],
      link: "https://d197for5662m48.cloudfront.net/documents/publicationstatus/251482/preprint_pdf/0920cd6d84b0dde72705571e18d51f46.pdf"
    },
    {
      title: "Intelligent System for the Tracking of Muon Traces in the CONNIE Experiment",
      description: "Sistema inteligente basado en aprendizaje automático para detección y seguimiento de trazas de muones en el experimento CONNIE.",
      authors: ["Jorge Molina", "Diego Stalder", "Santiago Ferreyra"],
      link: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10700437&isnumber=10700060"
    },
    {
      title: "Automatic Solar Radio Burst Detection Using Deep Learning",
      description: "Implementación de un sistema basado en deep learning para la identificación y clasificación automática de estallidos solares en señales de radio, mejorando la precisión y velocidad en la monitorización solar.",
      authors: ["Jorge Molina", "Diego Stalder", "Luis Salgueiro", "Ivan González Orué"],
      link: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10418691&isnumber=10418599"
    },
    {
      title: "Unveiling Trajectories: Breakthroughs in Muon Tracking for CONNIE Experiment",
      description: "Presentación de nuevas técnicas y descubrimientos en el rastreo preciso de trayectorias de muones para el experimento CONNIE, mejorando la detección y análisis de eventos de partículas.",
      authors: ["Jorge Molina", "Diego Stalder", "Santiago Ferreyra", "Oscar Baez"],
      link: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10418688&isnumber=10418599"
    }
  ];

  const [visibleCount, setVisibleCount] = useState(3);

  const showMore = () => {
    setVisibleCount(projects.length);
  };

  const showLess = () => {
    setVisibleCount(3);
  };

  return (
    <section id="research" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center mb-12">
          <div className="h-px bg-red-500 w-12 mr-4"></div>
          <h2 className="text-3xl font-bold tracking-tight">TRABAJOS DE INVESTIGACIÓN</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.slice(0, visibleCount).map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-red-500 transition group no-underline"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.authors.map((author, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full"
                  >
                    {author}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {visibleCount < projects.length ? (
          <div className="text-center mt-8">
            <button
              onClick={showMore}
              className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
            >
              Ver más
            </button>
          </div>
        ) : (
          <div className="text-center mt-8">
            <button
              onClick={showLess}
              className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-600 transition"
            >
              Ver menos
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResearchSection;
