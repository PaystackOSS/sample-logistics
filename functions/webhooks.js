import fetch from "node-fetch"
const { BASE_URL, SECRET_KEY } = process.env

exports.handler = async function(event, context) {

  // basic webhook implementation specifically for this tutorial 
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Netlify serverless setting to allow CORS
      "Access-Control-Allow-Headers": "Content-Type" // Netlify serverless setting to allow CORS
    }
  }
}
