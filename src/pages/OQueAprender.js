import React from 'react';

function OQueAprender() {
  const conceitos = [
    {
      titulo: 'Mecânica Clássica',
      descricao:
        'Aprenda sobre movimento, forças, energia e as leis fundamentais que regem o universo.',
      topicos: [
        'Leis de Newton',
        'Movimento Retilíneo',
        'Movimento Circular',
        'Energia Mecânica',
        'Colisões',
      ],
    },
    {
      titulo: 'Termodinâmica',
      descricao:
        'Explore o calor, temperatura e as transformações de energia em sistemas físicos.',
      topicos: [
        'Temperatura e Calor',
        'Leis da Termodinâmica',
        'Transformações Gasosas',
        'Ciclos Termodinâmicos',
        'Máquinas Térmicas',
      ],
    },
    {
      titulo: 'Eletromagnetismo',
      descricao:
        'Descubra a relação entre eletricidade e magnetismo, e suas aplicações no dia a dia.',
      topicos: [
        'Carga Elétrica',
        'Campo Elétrico',
        'Corrente Elétrica',
        'Campo Magnético',
        'Indução Eletromagnética',
      ],
    },
    {
      titulo: 'Óptica',
      descricao:
        'Entenda a natureza da luz e seus fenômenos, desde reflexão até interferência.',
      topicos: [
        'Reflexão e Refração',
        'Lentes e Espelhos',
        'Dispersão da Luz',
        'Interferência',
        'Difração',
      ],
    },
    {
      titulo: 'Física Moderna',
      descricao:
        'Conheça os avanços da física no século XX e suas implicações na tecnologia atual.',
      topicos: [
        'Relatividade',
        'Mecânica Quântica',
        'Física Nuclear',
        'Física de Partículas',
        'Aplicações Tecnológicas',
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          O Que Você Vai Aprender
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore os principais conceitos de física através de uma abordagem
          interativa e divertida.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {conceitos.map((conceito, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                {conceito.titulo}
              </h2>
              <p className="text-gray-600 mb-6">{conceito.descricao}</p>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  Tópicos Principais:
                </h3>
                <ul className="space-y-2">
                  {conceito.topicos.map((topico, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-600"
                    >
                      <svg
                        className="h-5 w-5 text-blue-500 mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {topico}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Pronto para começar sua jornada?
        </h2>
        <p className="text-gray-600 mb-8">
          Explore nossos conteúdos e descubra como a física pode ser divertida e
          fascinante!
        </p>
        <a
          href="/conteudo"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700"
        >
          Explorar Conteúdos
        </a>
      </div>
    </div>
  );
}

export default OQueAprender; 