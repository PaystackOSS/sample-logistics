import fetch from "node-fetch"
import QRCode from "qrcode"
const { BASE_URL, SECRET_KEY } = process.env

exports.handler = async function(event, context) {
  let { customer, amount } = JSON.parse(event.body)
  const url = `${BASE_URL}/paymentrequest`
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${SECRET_KEY}`
  }

  let response = {}
  try {
      response = await fetch(url, {
      method: 'POST', 
      headers: headers,
      body: JSON.stringify({
        customer: customer,
        amount: amount
      })
    })
  } catch(error) { 
    console.log(String(error))
  };

  const { data } = await response.json()
  const offline_reference = data.offline_reference
  const imageUrl = await generateQR(offline_reference)
  const body = {
    offline_reference,
    qr: imageUrl
  }

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type'
    },
    body: JSON.stringify(body),
  }
}

const generateQR = async(offline_reference) => {
  try {
    return await QRCode.toDataURL(offline_reference)
  } catch (err) {
    return ""
  }
}