export default {
  loadInstances: async (systemID) => {
    // simulate fetch
    const { instances } = await new Promise((resolve) => {
      const response = {
        instances: [
          { systemID: 1, id: 1, name: 'My First Cool Instance' },
          { systemID: 1, id: 2, name: 'My Second Cool Instance' },
          { systemID: 2, id: 3, name: 'My First Shitty Instance' },
          { systemID: 2, id: 4, name: 'My Second Shitty Instance' },
        ].filter(instance => instance.systemID === systemID),
      };

      setTimeout(() => resolve(response), 1000);
    });

    return instances;
  },

  loadSystems: async () => {
    // simulate fetch
    const { systems } = await new Promise((resolve) => {
      const response = {
        systems: [
          { id: 1, name: 'My Cool System' },
          { id: 2, name: 'My Shitty System' },
        ],
      };

      setTimeout(() => resolve(response), 1000);
    });

    return systems;
  },
};
