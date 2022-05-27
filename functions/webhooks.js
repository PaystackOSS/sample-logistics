import fetch from "node-fetch"
const { BASE_URL, SECRET_KEY } = process.env

exports.handler = async function(event, context) {

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Netlify serveless setting to allow CORS
      'Access-Control-Allow-Headers': 'Content-Type' // Netlify serveless setting to allow CORS
    }
  }
}
