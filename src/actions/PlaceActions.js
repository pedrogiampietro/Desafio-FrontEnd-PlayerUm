import {
  apiPost,
  apiGet,
  apiLike,
  apiPut,
  apiDelete,
  apiGetRankings,
} from '../helpers/Api'

export const PLACE_CREATE = 'PLACE_CREATE'
export const PLACE_LIST_IN_ACCOUNT = 'PLACE_LIST_IN_ACCOUNT'
export const PLACE_LIST = 'PLACE_LIST'
export const PLACE_GET = 'PLACE_GET'
export const LIKE_UPDATE = 'LIKE_UPDATE'
export const PLACE_UPDATE = 'PLACE_UPDATE'
export const PLACE_TO_REMOVE = 'PLACE_TO_REMOVE'
export const PLACE_REMOVE = 'PLACE_REMOVE'
export const RANKING_LIST = 'RANKING_LIST'

export const placeCreate = (data) => {
  const payload = apiPost('/place', data)
  return { type: PLACE_CREATE, payload }
}

export const placeUpdate = (id, data) => {
  const payload = apiPut(`/place/${id}`, { ...data })
  return { type: PLACE_UPDATE, payload }
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

export const setPlaceToRemove = (place) => {
  return { type: PLACE_TO_REMOVE, payload: place }
}

export const placeRemove = (place) => {
  const payload = apiDelete(`/place/${place.id}`)
  return { type: PLACE_REMOVE, payload }
}

export const rankingList = (data) => {
  const payload = apiGetRankings('/place/ranking', data)
  return { type: RANKING_LIST, payload }
}
