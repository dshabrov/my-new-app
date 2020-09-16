export const fetchUtils = {
  get: async (url, params) => {
    try {
      const response = await fetch(url, params);
      if (response.status === 200) {
        return response.json();
      }
      throw Error("Could not retreive the data");
    } catch (err) {
      return {};
    }
  },
};
