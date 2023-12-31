const baseURL = "https://muddy-longing-mulberry.glitch.me/calculator";
const Services = {
  getApi: () => {
    const response = fetch(`${baseURL}?_sort=id&_order=desc`)
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return error;
      });
    return response;
  },

  postApi: (payload) => {
    const payloadData = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = fetch(`${baseURL}`, payloadData)
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return error;
      });
    return response;
  },

  deleteApi: (payload) => {
    const response = fetch(`${baseURL}/${payload}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return error;
      });
    return response;
  },
};
export default Services;
