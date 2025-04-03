export async function fetchPosts(url) {
  const response = await fetch(url);
  if (response.ok) {
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return jsonResponse;
  }
}
