const devStage = {
  awsRegion: "eu-west-1",
  restApiId: "y8pd43tlf8",
  restApiStage: "dev"
}

export const BAREBELL_REST_API = `https://${devStage.restApiId}.execute-api.${devStage.awsRegion}.amazonaws.com/${devStage.restApiStage}`