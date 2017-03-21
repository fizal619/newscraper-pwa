const initialState = {
  articles: [{
    title: 'Hit Refresh for the latest headlines from TechCrunch',
    content: 'Woah! Go back and hit refresh you doof.'
  }], 
  sources: [],
  remoteSources: []
}

export default (state = initialState, action) => {
  // console.log(action)
  // console.log(state)
  let sources

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
    
    case 'ADD SOURCE':
      sources = state.sources.concat([action.source])
      console.log('added source', sources)
      return Object.assign({}, state, {
        sources
      })

    case 'REMOVE SOURCE':
      sources = state.sources.filter(source=>source!==action.source)
      console.log('removed source', sources)
      return Object.assign({}, state, {
        sources
      })

    case 'LOAD REMOTE SOURCES':
      return Object.assign({}, state, {
        remoteSources: action.remoteSources
      })

    default:
      console.log('DEFAULT NEWS');
      return state
  }
}