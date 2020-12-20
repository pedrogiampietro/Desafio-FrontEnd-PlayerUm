import {
  PLACE_CREATE,
  PLACE_LIST,
  PLACE_LIST_IN_ACCOUNT,
  PLACE_GET,
  LIKE_UPDATE,
  PLACE_TO_REMOVE,
  PLACE_REMOVE,
} from '../actions/PlaceActions'

const initialState = {
  place: null,
  places: [],
}

export default function foo(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case PLACE_CREATE:
    case PLACE_GET:
    case LIKE_UPDATE: {
      const response = payload ? payload.data : null
      const place = response ? response.data : null
      return { ...state, place }
    }

    case (PLACE_LIST, PLACE_LIST_IN_ACCOUNT): {
      const response = payload ? payload.data : null
      const places = response ? response.data : null
      return { ...state, places }
    }

    case PLACE_TO_REMOVE: {
      return { ...state, placeToRemove: payload }
    }

    case PLACE_REMOVE: {
      const places = state.places.filter(
        (place) => place.id !== state.placeToRemove.id
      )
      return { ...state, placeToRemove: null, places }
    }

    default:
      return state
  }
}
