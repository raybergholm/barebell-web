import restApiInterface from "./restApiInterface"

import { BAREBELL_REST_API } from "../config/configs.js"

const dataApi = () => {
  const API_KEY = process.env.REACT_APP_API_KEY
  if (!API_KEY) {
    console.error("API key missing!")
  }

  const restApi = restApiInterface(BAREBELL_REST_API, API_KEY)
  return {
    getPrograms: async () => {
      const restPath = "rest/programs"
      return await restApi.get({ restPath })
        .then(({ body }) => body)
    },
    getLastSession: async () => {
      const restPath = "stats/latest"
      return await restApi.get({ restPath })
        .then(({ body }) => body)
    }
  }
}

export default dataApi