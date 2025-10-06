document.getElementById("like-btn").onclick = () => {
    fetch("/.netlify/functions/count") // Netlify 函数路径
        .then(res => res.json())
        .then(data => {
            document.getElementById("like-count").innerText = data.count;
        })
        .catch(error => console.error("Error:", error));
};