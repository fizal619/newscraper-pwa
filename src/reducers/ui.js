const initialState = {
  loading: false,

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

    case 'SCROLLY':
      return Object.assign({},state,{
        scroll: action.scroll
      })

    default:
      return state
  }
}
