export async function handler(event, context) {
  const query = event.queryStringParameters.q || "news";
  const limit = event.queryStringParameters.limit || 10;
  const after = event.queryStringParameters.after || "";

  const redditUrl = `https://www.reddit.com/search.json?q=${encodeURIComponent(query)}&limit=${limit}&after=${after}`;

  try {
    const response = await fetch(redditUrl);
    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Enable CORS
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Reddit fetch failed", details: err.message }),
    };
  }
}