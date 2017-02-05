const initialState = {
  articles: [{
    title: 'oh wow',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  }]
}

export default (state = initialState, action) => {
  // console.log(action)
  // console.log(state)

  switch (action.type) {
    case 'LOADED':
      console.log('LOADED NEWS')
      return Object.assign({}, state,{
        articles: action.articles
      })

    case 'CLEAR':
      return {
        articles: []
      }
      
    default:
      console.log('DEFAULT NEWS');
      return state
  }
}