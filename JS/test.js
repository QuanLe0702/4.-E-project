var date = new Date();

console.log(date.getMinutes());

var show = document.getElementById('bt');
show = function()
{
    alert(date.getMinutes());
}

document.getElementById("myButton").onclick = function () {
    location.href = "www.yoursite.com";
};
