const initialState = {
  loading: false,
  scroll: 0
}

export default (state = initialState, action) => {
  // console.log(action)
  // console.log(state)

  switch (action.type) {
    case 'LOADING':
      return Object.assign({}, state, {
        loading: true
      })

    case 'NOT_LOADING':
      return Object.assign({},state,{
        loading: false
      })

    case 'SAVESCROLL':
      return Object.assign({},state,{
        scroll: action.scroll
      })

    default:
      return state
  }
}
