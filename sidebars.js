module.exports = {
  sidebar: {
    "Visión general": ['overview/overview', 'overview/plataforma-didi',],
    "Identidad Digital Auto-Soberana": ['ssi/ssi-concepts'],
    "ai·di": ['aidi/aidi-descripcion', 'aidi/aidi-creacionCuenta', 'aidi/aidi-validacionIdentidad', 'aidi/aidi-solicitarCredenciales', 'aidi/aidi-beneficios', 'aidi/aidi-shareCredentials',],
    "Emisores": ['emisores/producto-emisores',],
    "Contribuciones": ['contribuciones', 'code-fo-conduct'],
    Developers: [
      {
        "Solución": [
          "arquitectura-overview",
          {
            "Descripción técnica": [
              "arquitectura-mouro",
              "arquitectura-issuer",
              "arquitectura-server",
              "arquitectura-ronda",
              "delegation",
            ]
          },
          "uport",
        ]
      },

      { "Troubleshooting": ["troubleshooting", "troubleshooting-rsk", 'revokation'] },
      { "Multiblockchain": ['multiblockchain', 'multiblockchain-scripts'] }
    ],
  },
};
