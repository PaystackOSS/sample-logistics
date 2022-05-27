import fetch from "node-fetch"
const { BASE_URL, SECRET_KEY } = process.env

exports.handler = async function(event, context) {
  let {email} = JSON.parse(event.body)
  let url = `${BASE_URL}/customer`
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${SECRET_KEY}`
  }

  return fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      email: email
    })
  })
    .then((response) => response.json())
    .then((data) => ({
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Netlify serveless setting to allow CORS
        'Access-Control-Allow-Headers': 'Content-Type' // Netlify serveless setting to allow CORS
      },
      body: JSON.stringify(data),
    }))
    .catch((error) => ({ statusCode: 422, body: String(error) }));
}
