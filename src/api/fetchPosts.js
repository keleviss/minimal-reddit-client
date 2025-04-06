export async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      return jsonResponse;
    }
  } catch (error) {
    throw new Error(error.message || "Failed to fetch data.");
  }
}
