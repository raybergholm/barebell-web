import localCacheInterface from "./localCacheInterface"

const dataApi = () => {
  const API_KEY = process.env.REACT_APP_API_KEY
  if (!API_KEY) {
    console.error("API key missing!")
  }

  const localCache = localCacheInterface(Date.now())
  return {
    
    getPrograms: async () => localCache.getPrograms(),
    getLastSession: async () => localCache.getLatest()
  }
}

export default dataApi