document.getElementById("button").onclick = function() {
    date = new Date()
    console.log(
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    )
    document.getElementById("button").innerText = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
};


