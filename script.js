async function download(type) {
  const url = document.getElementById("url").value;
  const result = document.getElementById("result");

  result.innerHTML = "⏳ Processing...";

  try {
    // Example free API (replace if needed)
    const api = `https://api.vevioz.com/api/button/${type}?url=${encodeURIComponent(url)}`;

    result.innerHTML = `
      ✅ Click below to download:<br>
      <a href="${api}" target="_blank">Download ${type.toUpperCase()}</a>
    `;

  } catch (err) {
    result.innerHTML = "❌ Failed!";
  }
}