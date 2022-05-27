// functions/webhooks.js
var { BASE_URL, SECRET_KEY } = process.env;
exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  };
};
//# sourceMappingURL=webhooks.js.map
