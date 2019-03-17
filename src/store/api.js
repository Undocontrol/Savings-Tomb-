import axios from 'axios'

export default {
  get(url) {
    return axios.get(url, {
        headers: {
          'Authorization': 'Bearer bdgoKkCKCV4nvCZNBTWBlq6noRfSaVxKGLW6bD4ldVLcGU5t7ElWz78SNMcRSAEV',
          'Accept': 'application/json'
        },
        timeout: 5000
      })
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error));
  },

  put(url, request) {

    const options = {
      method: 'PUT',
      headers: {
        'Authorization': 'Bearer bdgoKkCKCV4nvCZNBTWBlq6noRfSaVxKGLW6bD4ldVLcGU5t7ElWz78SNMcRSAEV',
        'Accept': 'application/json'
      },
      data: request,
      timeout: 5000,
      url: url,
    };
    return axios(options)
      .then((response) => Promise.resolve(response))
      .catch((error) => {
        Promise.reject(error);
      });
  }
}
