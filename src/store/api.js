import axios from 'axios'

export default {
  get(url, headers) {
    return axios.get(url, {
        headers: headers,
        timeout: 5000
      })
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error));
  },

  put(url, request) {

    const options = {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      data: request,
      timeout: 5000,
      url,
    };
    return axios(options)
      .then((response) => Promise.resolve(response))
      .catch((error) => {
        Promise.reject(error);
      });
  }
}
