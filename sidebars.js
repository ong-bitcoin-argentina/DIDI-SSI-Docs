module.exports = {
  sidebar: {
    "Visión general": ['overview/overview', 'overview/plataforma-didi',],

    "Identidad digital auto-soberana": ['ssi/ssi-concepts',],

    "ai·di": ['aidi/aidi-descripcion', 'aidi/aidi-creacionCuenta', 'aidi/aidi-validacionIdentidad', 'aidi/aidi-solicitarCredenciales', 'aidi/aidi-beneficios', 'aidi/aidi-shareCredentials',],

    "Emisores": ['emisores/emisores', 'emisores/emisores-plataforma', 'emisores/emisores-implementacion', 'emisores/emisores-plataforma-de-referencia'],

    "ronda": ['ronda/ronda-descripcion', 'ronda/ronda-aidi'],

    "Contribuciones": ['contribuciones/contribuciones', 'contribuciones/code-fo-conduct'],

    Developers: [
      {
        "Solución": [
          'developers/solucion/arquitectura-overview',
          {
            "Descripción técnica": [
              'developers/solucion/descripcion-tecnica/arquitectura-mouro',
              "developers/solucion/descripcion-tecnica/arquitectura-issuer",
              "developers/solucion/descripcion-tecnica/arquitectura-server",
              "developers/solucion/descripcion-tecnica/arquitectura-ronda",
              "developers/solucion/descripcion-tecnica/delegation",
            ]
          },
          "developers/solucion/uport",
        ]
      },

      { "Deployment": ['developers/deployment/post-deployment'] },
      { "Troubleshooting": ['developers/troubleshooting/troubleshooting', 'developers/troubleshooting/troubleshooting-rsk', 'developers/troubleshooting/revocation',] },
      { "Multiblockchain": ['developers/multiblockchain/multiblockchain', 'developers/multiblockchain/multiblockchain-scripts',] }
    ],

    "Changelog": ['v0.5.x',],
  },
};
