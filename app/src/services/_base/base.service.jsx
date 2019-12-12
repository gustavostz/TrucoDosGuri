import axios from 'axios'

const httpClient = baseURL => axios.create({
  timeout: 10000,
  headers: {
    'Content-type': 'application/json'
  },
  baseURL
})

const mountAuthHeader = (headers) => ({
  ...headers,
  'Authorization' : localStorage.getItem('token')
})

export class BaseService {
  constructor(baseURL) {
    this.client = httpClient(baseURL)
  }

  async get(url,  { authorized = true, ...config }) {
    if(authorized) {
      config.headers = mountAuthHeader(config.headers)
    }
    const result = await this.client.get(url, config)

    return result.data
  }

  async post(url, body, { authorized = true, ...config }) {
    if(authorized) {
      config.headers = mountAuthHeader(config.headers)
    }
    const result = await this.client.post(url, body, config)

    return result.data
  }

  async put(url, body,  { authorized = true, ...config }) {
    if(authorized) {
      config.headers = mountAuthHeader(config.headers)
    }

    const result = await this.client.put(url, body, config)

    return result.data
  }

  async delete(url,  { authorized = true, ...config }) {
    if(authorized) {
      config.headers = mountAuthHeader(config.headers)
    }
    const result = await this.client.delete(url, config)

    return result.data
  }

}
