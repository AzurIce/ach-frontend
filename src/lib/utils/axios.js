import axios from 'axios'

/**
 * 以 Json 方式发送 POST 请求
 * @param {String} url 请求的 Url
 * @param {Object} data 请求时携带的数据
 */

const headerJSON = { "Content-Type": "application/json" }

export function postByJson(url, data) {
  if (import.meta.env.DEV) {
    url = "http://localhost:8888" + url
  }
  return new Promise((resolve, reject) => {
    axios.post(url, JSON.stringify(data), { headers: headerJSON })
      .then((res) => { resolve(res) })
      .catch((err) => { reject(err) })
  })
}

export function get(url) {
  if (import.meta.env.DEV) {
    url = "http://localhost:8888" + url
  }
  return new Promise((resolve, reject) => {
    axios.get(url, { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('azurcraftToken') } })
      .then((res) => { resolve(res) })
      .catch((err) => { reject(err) })
  })
}