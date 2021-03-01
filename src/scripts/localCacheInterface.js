const isLocalStorageSupported = () => {
  try {
    return "localStorage" in window && window.localStorage !== null
  } catch (err) {
      return false
  }
}

const upload = JSON.stringify({
  programs: [ new Date(), [
    {
      _id: 0,
      name: "5x5 Stronglifts"
    },
    {
      _id: 1,
      name: "5-3-1 Classic"
    }
  ] ],
  lastSession: [ new Date(), null ]
})

localStorage.setItem("barebellCache", upload)

const localCacheInterface = (ignoreCacheRefresh=false) => {
  if (!isLocalStorageSupported()) {
    console.error("localStorage not supported on this browser!")
  }

  const LOCAL_STORAGE_CACHE_KEY = "barebellCache"

  const DEFAULT_CUTOFF_PERIOD = 7 // days

  let cutoffDate = new Date()
  cutoffDate = cutoffDate.setDate(cutoffDate.getDate() - DEFAULT_CUTOFF_PERIOD)

  let localCache = null
  return {
    loadCache: () => {
      localCache = localStorage.getItem(LOCAL_STORAGE_CACHE_KEY)
      
      console.log("localCache after load", localCache)

      if (localCache === null) {
        // cache miss, build it frrom scratch then
        const currentDate = new Date()
        localCache = {
          programs: [ currentDate, [] ],
          lastSession: [ currentDate, null ]
        }
      } else {
        localCache = JSON.parse(localCache)
      }

      console.log("localCache after null check", localCache)
    
      if (!ignoreCacheRefresh) {
        const currentDate = new Date()
        for (const [key, [lastUpdated, data]] of Object.entries(localCache)) {
          if (lastUpdated < cutoffDate) {
            if (Array.isArray(data)) {
              localCache[key] = [currentDate, []]
            } else if (typeof data === "object") {
              localCache[key] = [currentDate, {}]
            } else {
              localCache[key] = [currentDate, null]
            }
          }
        }
      }

      console.log("localCache after cache timestamps check", localCache)

      return localCache
    },
    getPrograms: () => localCache.programs,
    getLastSession: () => localCache.lastSession,
    updateCache: () => {
      localStorage.setItem(LOCAL_STORAGE_CACHE_KEY, localCache)
    }
  }
}

export default localCacheInterface