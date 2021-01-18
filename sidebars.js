module.exports = {
  someSidebar: {
    "Visión general": ["overview"],
    "Conceptos importantes": ['conceptos'],
    Producto: ['aidi-definiciones', 'producto-emisores', ],
    "Contribuciones": ['contribuciones', 'code-fo-conduct'],
    Developers: [
      { "Solución": [
        "arquitectura-overview", 
        "uport",
        { "Descripación técnica": [
          "arquitectura-mouro", 
          "arquitectura-issuer", 
          "arquitectura-server", 
        ]},
      ] },

      { "Troubleshooting": ["troubleshooting", "troubleshooting-rsk", 'revokation'] },
      { "Multiblockchain": ['multiblockchain', 'multiblockchain-scripts'] }
    ],
  },
};
