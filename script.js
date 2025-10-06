// 初始加载计数
fetch("/.netlify/functions/count")
    .then(res => res.json())
    .then(data => document.getElementById("like-count").innerText = data.count);

document.getElementById("like-btn").onclick = () => {
    fetch("/.netlify/functions/count", { method: 'POST' })
        .then(res => res.json())
        .then(data => document.getElementById("like-count").innerText = data.count);
};