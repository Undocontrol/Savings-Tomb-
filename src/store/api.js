/* 
File Overview 
* Provides an easy API utility to be used throughout the app.
*/
import axios from 'axios'

export default {
  get(url) {
    return axios.get(url, {
      //hardcoding access tokens for now
        headers: {
          'Authorization': 'Bearer 12Gsq1doiT6TM34zpvXpDk66ET2mVq7wo8ztN6SUeEX9ANylnNML592RySzYLLJ0',
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
      //hardcoding access tokens for now
      headers: {
        'Authorization': 'Bearer 12Gsq1doiT6TM34zpvXpDk66ET2mVq7wo8ztN6SUeEX9ANylnNML592RySzYLLJ0',
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
