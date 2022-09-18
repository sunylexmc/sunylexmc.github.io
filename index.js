const options = JSON.parse(localStorage.getItem("session"));
var serverIp;
var serverPort;
var title;
var favicon;
var maxPageWidth;
var pageFont;
var pageBackgroundColor;
document.title = (options.title);
function initServerData(serverIp,serverPort){
    fetch('https://mcapi.us/server/status?ip='+serverIp+'&port='+serverPort)
    .then(response => response.json())
    .then(data => handleServerStatus(data));

function handleServerStatus(data){
    if(data.status=='error'){
        console.log(data.error);
        return false;
    }
    const playerCounter = document.getElementById("player-count");
    playerCounter.innerHTML += data.players.now;
    const status = document.getElementById("status");
    status.innerHTML = data.players.max;
    } 
}
initServerData(serverIp, serverPort);
let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = (favicon);
    document.getElementsByTagName('head')[0].appendChild(link);
let styleOptions = document.querySelector(':root');
    styleOptions.style.setProperty('--MaxPageWidth', maxPageWidth)
    styleOptions.style.setProperty('--PageFont', pageFont)
    styleOptions.style.setProperty('--PageBackgroundColor', pageBackgroundColor)
    styleOptions.style.setProperty('--ff-bgcolor', 'transparent')
function testValueSubmit() {
    let testValue2 = document.getElementById("testValue").value;
    let test = localStorage.setItem("test2", testValue2);
    let test3 = localStorage.getItem("test2");
    let username = test3;
    if (username !== "") {
        document.getElementById('demo').innerHTML = "<img src='https://mc-heads.net/combo/"+username+"'>";
        document.getElementById('profile').innerHTML = "<img onclick='notInPoint()' src='https://mc-heads.net/avatar/"+username+"' id='profile' alt='Sunylex Logo' width='70px' style='float: right;margin-top: 15px;margin-right: 10px;border: black solid;border-radius: 100%;'>";
        document.getElementById('eui').innerHTML = "<p>Succesfully logged-in as:<span style='font-weight: bold;'> "+username+"</span>  <img style='margin-bottom: -5px;' width='25px' src='https://mc-heads.net/avatar/"+username+"'></p>";
    } else {
        document.getElementById('eui').innerHTML = "<p style='color: red;'>"+loginErrorMessage+"</p>";
    }
}
document.addEventListener('keydown', (event) => {
    var key = event.key;
    if (key === "Enter") {
      testValueSubmit()
    }
  }, false);
function modifyState() {
    let stateObj = { id: "100" };
    window.history.replaceState(stateObj,"Page 3", "/page3.html");
}
function notInPoint() {
    alert("This feature is still not in point!");
}
document.getElementById("navbar1").innerHTML = `
<li><a onclick="modifyState()">Home</a></li>
<li><a href="`+applyLink+`">Apply</a></li>
<li><a href="`+storeLink+`">Store</a></li>
`;
document.getElementById("newsLast1").innerHTML = `
<p style="font-weight: bold;">`+newsTitle+`</p>
<p style="margin-bottom: 0;">`+newsText+`</p>
<img src="./file/Fight.png" alt="Fight Image" width="100px"></img>
`;
