let count = 0;
document.getElementById("like-btn").onclick = () => {
    count++;
    document.getElementById("like-count").innerText = count;
};