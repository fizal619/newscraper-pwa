const initialState = {
  articles: [{
    title: 'Hit Refresh for the latest headlines from TechCrunch',
    content: 'Woah! Go back and hit refresh you doof.'
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