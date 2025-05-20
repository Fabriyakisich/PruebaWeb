import React, { useState } from "react";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "DR. JORGE MOLINA",
      expertise: "especialidad 1",
      email: "jorge.molina@example.com",
      phone: "+595 981 000 001",
      image: "",
    },
    {
      id: 2,
      name: "DR. DIEGO STALDER",
      expertise: "especialidad 2",
      email: "diego.stalder@example.com",
      phone: "+595 981 000 002",
      image: "",
    },
    {
      id: 3,
      name: "ING ALAN CUEVAS",
      expertise: "especialidad 3",
      email: "alan.cuevas@example.com",
      phone: "+595 981 000 003",
      image: "",
    },
    {
      id: 4,
      name: "ING. SANTIAGO FERREYRA",
      expertise: "especialidad 4",
      email: "nicolas.grommeck@example.com",
      phone: "+595 981 000 004",
      image: "",
    },
    {
      id: 5,
      name: "ING. CALEB TREPOWSKI",
      expertise: "especialidad 5",
      email: "maria.perez@example.com",
      phone: "+595 981 000 005",
      image: "",
    },
    {
      id: 6,
      name: "LUCAS CHO",
      expertise: "especialidad 6",
      email: "juan.lopez@example.com",
      phone: "+595 981 000 006",
      image: "",
    },
    {
      id: 7,
      name: "JESUS NUÑEZ",
      expertise: "especialidad 6",
      email: "juan.lopez@example.com",
      phone: "+595 981 000 006",
      image: "",
    },
    {
      id: 8,
      name: "GIOVANNI SECCHIA",
      expertise: "especialidad 6",
      email: "juan.lopez@example.com",
      phone: "+595 981 000 006",
      image: "",
    },
    {
      id: 9,
      name: "NICOLAS GROMMECK",
      expertise: "especialidad 6",
      email: "juan.lopez@example.com",
      phone: "+595 981 000 006",
      image: "",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(4);
  const [selectedId, setSelectedId] = useState(null);

  const toggleSelect = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  const showMore = () => setVisibleCount(teamMembers.length);

  const showLess = () => {
    setVisibleCount(4);
    setSelectedId(null);
  };

  return (
    <section id="team" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center mb-12">
          <div className="h-px bg-red-500 w-12 mr-4"></div>
          <h2 className="text-3xl font-bold tracking-tight">EQUIPO DE INVESTIGACIÓN</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.slice(0, visibleCount).map((member) => (
            <div
              key={member.id}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center cursor-pointer transition-all duration-300"
              onClick={() => toggleSelect(member.id)}
            >
              <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-500">FOTO</span>
                )}
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-red-500 text-sm mb-2">{member.expertise}</p>
            </div>
          ))}
        </div>

        {visibleCount < teamMembers.length ? (
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

        {selectedId && (
          <div className="mt-8 bg-gray-800 p-6 rounded-lg border border-gray-700 max-w-7xl mx-auto text-gray-300">
            {(() => {
              const member = teamMembers.find((m) => m.id === selectedId);
              if (!member) return null;
              return (
                <>
                  <h3 className="text-2xl font-bold mb-4">{member.name}</h3>
                  <p className="mb-2">
                    <strong>Especialidad:</strong> {member.expertise}
                  </p>
                  <p className="mb-2">
                    <strong>Email:</strong> {member.email}
                  </p>
                  <p className="mb-2">
                    <strong>Teléfono:</strong> {member.phone}
                  </p>
                </>
              );
            })()}
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
