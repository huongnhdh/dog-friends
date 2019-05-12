import axios from 'axios'
import Notification from 'buefy/src/components/notification';

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API , // url = base url + request url
  //   withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // inject cookies or header option
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(

  response => {
    const res = response.data

    if (res.code !== 200 || res.status !== 'success') {
      Notification({
        message: res.message || 'error',
        type: "is-danger",
        role: "alert",
        duration: 5 * 1000
      })

      return Promise.reject(res.message || 'error')
    } else {
      return res
    }
  },
  error => {
    // console.log('err' + error)
    Notification({
      message: error.message,
      type: "is-danger",
      role: "alert",
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service