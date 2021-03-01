import actionTypes from "../actionTypes/general"

const actionCreators = {
  initialize: () => ({
    type: actionTypes.InitializeStart
  }),

  initializationComplete: () => ({
    type: actionTypes.InitializeEnd
  }),

  changeView: (newView) => ({
    type: actionTypes.ChangeView,
    payload: {
      newView
    }
  }),

  loadedCache: (data) => ({
    type: actionTypes.loadedCache,
    payload: {
      data
    }
  }),

  savedCache: () => ({
    type: actionTypes.SavedCache
  }),

  loadedMetadata: ({ quickLinks, archiveLinks, tags, config }) => {
    // Post-processing: on the client side tags are also paired with a selected boolean to determine if they're being filtered 
    let tagsWithState = []
    if (tags) {
      tagsWithState = tags.map((tagName) => ({
        tagName,
        selected: false
      }))
    }
    
    return {
      type: actionTypes.LoadedMetadata,
      payload: {
        quickLinks,
        archiveLinks,
        tags: tagsWithState,
        config
      }
    }
  }
}

export default actionCreators