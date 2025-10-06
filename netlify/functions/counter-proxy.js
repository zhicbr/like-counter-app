export async function handler(event) {
  const url = event.path.replace("/.netlify/functions/counter-proxy", ""); // 剩下的路径
  const target = `https://t.counter.dev${url}`; // 转发目标

  const method = event.httpMethod;
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };
  const body = event.body;

  try {
    const response = await fetch(target, { method, headers, body });
    const text = await response.text();
    return {
      statusCode: response.status,
      body: text,
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
