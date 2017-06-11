const initialState = {
  articles: [],
  sources: [],
  remoteSources: []
}

export default (state = initialState, action) => {
  // console.log(action)
  // console.log(state)
  let sources

  switch (action.type) {
    case 'LOADED':
      let newArticles = action.articles.sort((a,b)=>{
        if (new Date(a.publishedAt) < new Date(b.publishedAt)) return 1
        if (new Date(a.publishedAt) > new Date(b.publishedAt)) return -1
        return 0
      })
      console.log('LOADED NEWS')
      return Object.assign({}, state,{
        articles: newArticles
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
