
export function favoritesReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_FAVORITE': {
      const exists = state.some(
        (photo) => photo.id === action.photo.id,
      )

      if (exists) {
        return state.filter(
          (photo) => photo.id !== action.photo.id,
        )
      }

      return [...state, action.photo]
    }

    case 'LOAD_FAVORITES':
      return action.photos

    default:
      return state
  }
}
