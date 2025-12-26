document.getElementById("button").onclick = function () {
    date = new date()
    document.getElementById("p").innertext = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
}