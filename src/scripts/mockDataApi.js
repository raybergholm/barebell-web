const programs = [
  {
    _id: 0,
    name: "5x5 Stronglifts"
  },
  {
    _id: 1,
    name: "5-3-1 Classic"
  }
]

const lastWorkoutSession = {
  startDate: "2020-04-01T18:00:00Z",
  endDate: "2020-04-01T19:30:00Z",
  program: [0, 1],
  activities: [
    { 
      name: "Bench Press",
      sets: [
        ["100kg", "5"],
        ["100kg", "5"],
        ["100kg", "5"],
        ["100kg", "5"],
        ["100kg", "5"]
      ]
    }
  ]
}

// const upload = JSON.stringify({
//   programs: [ new Date(), [
//     {
//       _id: 0,
//       name: "5x5 Stronglifts"
//     },
//     {
//       _id: 1,
//       name: "5-3-1 Classic"
//     }
//   ] ],
//   lastSession: [ new Date(), null ]
// })

// localStorage.setItem("barebellCache", upload)

const mockDataApi = () => {
  console.log("Initializing mockDataApi")

  const mockData = {
    programs,
    latest: lastWorkoutSession
  }

  console.log(mockData)

  return {
    getPrograms: async () => {
      console.log("called mockDataApi.getPrograms()")
      const output = mockData.programs
      console.log(output)
      return output
    },
    getLastSession: async () => {
      console.log("called mockDataApi.getLastSession()")
      const output = mockData.latest
      console.log(output)
      return output
    }
  }
}

export default mockDataApi