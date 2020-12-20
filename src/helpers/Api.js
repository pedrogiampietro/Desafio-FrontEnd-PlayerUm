import axios from 'axios'
import { getToken, getRefreshToken, getAccount } from './account'

export const getApiUrl = (path) => {
  return `http://localhost:3001${path}`
}

export const getImageURL = (path) => {
  return `http://localhost:3001/${path}`
}

export const getHeaders = () => {
  const token = getToken()
  if (!token) return {}

  return {
    Authorization: `Bearer ${token}`,
  }
}

export const apiGetRankings = async (path, params = {}) => {
  const url = getApiUrl(path)
  const options = {
    params: params,
  }

  return await axios.get(url, options)
}

export const apiRefreshToken = () => {
  const url = getApiUrl('/auth/refresh')
  const refreshToken = getRefreshToken()
  const options = {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  }

  return axios.post(url, {}, options)
}

export const apiPost = (path, data = {}) => {
  const url = getApiUrl(path)
  const options = {
    headers: getHeaders(),
    'content-type': 'multipart/form-data',
  }

  return axios.post(url, data, options)
}

export const apiPut = (path, data = {}) => {
  const url = getApiUrl(path)
  const options = {
    headers: getHeaders(),
  }

  return axios.put(url, data, options)
}

export const apiDelete = (path, data = {}) => {
  const url = getApiUrl(path)
  const options = {
    headers: getHeaders(),
  }

  return axios.delete(url, options)
}

export const apiGet = (path, params = {}) => {
  const url = getApiUrl(path)
  const options = {
    headers: getHeaders(),
  }

  return axios.get(url, options)
}

export const apiLike = (path, params = {}) => {
  const url = getApiUrl(path)
  const token = getToken()
  const options = {
    headers: {
      accountId: getAccount().id,
      Authorization: `Bearer ${token}`,
    },
  }

  return axios.post(url, null, options)
}
