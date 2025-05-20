import React from 'react';

const ChartsSection = () => {
  return (
    <section id="data" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center mb-12">
          <div className="h-px bg-red-500 w-12 mr-4"></div>
          <h2 className="text-3xl font-bold tracking-tight">GRAFANA</h2>
        </div>
        
        <div className="grid lg:grid-cols-1 gap-8">  {/* Cambio aquí: solo 1 columna */}
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold mb-4">GRAFANA MUONES</h3>
            <div className="h-80 bg-gray-800 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">GRÁFICA INTERACTIVA</p>
              {/* Aquí podés incrustar el iframe de Grafana */}
            </div>
            <p className="text-gray-400 mt-4 text-sm">
              Distribución porcentual de minerales encontrados en muestras de 6 regiones diferentes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartsSection;
