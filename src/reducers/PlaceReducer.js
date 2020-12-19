import {
  PLACE_CREATE,
  PLACE_LIST,
  PLACE_LIST_IN_ACCOUNT,
  PLACE_GET,
} from '../actions/PlaceActions'

const initialState = {
  place: null,
  places: [],
}

export default function foo(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case PLACE_CREATE: {
      const response = payload ? payload.data : null
      const place = response ? response.data : null
      return { ...state, place }
    }

    case PLACE_GET: {
      const response = payload ? payload.data : null
      const place = response ? response.data : null
      return { ...state, place }
    }

    case (PLACE_LIST, PLACE_LIST_IN_ACCOUNT): {
      const response = payload ? payload.data : null
      const places = response ? response.data : null
      return { ...state, places }
    }

    default:
      return state
  }
}