import { apiPost, apiGet, apiLike } from '../helpers/Api'

export const PLACE_CREATE = 'PLACE_CREATE'
export const PLACE_LIST_IN_ACCOUNT = 'PLACE_LIST_IN_ACCOUNT'
export const PLACE_LIST = 'PLACE_LIST'
export const PLACE_GET = 'PLACE_GET'
export const LIKE_UPDATE = 'LIKE_UPDATE'

export const placeCreate = (data) => {
  const payload = apiPost('/place', data)
  return { type: PLACE_CREATE, payload }
}

export const placeListInAccount = (data) => {
  const payload = apiGet('/place')
  return { type: PLACE_LIST_IN_ACCOUNT, payload }
}

export const placeList = (data) => {
  const payload = apiGet('/place/listAll', data)
  return { type: PLACE_LIST, payload }
}

export const placeGet = (id) => {
  const payload = apiGet(`/place/${id}`)
  return { type: PLACE_GET, payload }
}

export const upLike = (id) => {
  const payload = apiLike(`/place/upLike/${id}`)
  return { type: LIKE_UPDATE, payload }
}

export const unLike = (id) => {
  const payload = apiLike(`/place/disLike/${id}`)
  return { type: LIKE_UPDATE, payload }
}
