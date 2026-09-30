function clicked() {
    document.title = document.getElementById("alex").value;
}

function increaseLocal() {
    let innerText = JSON.parse(localStorage.getItem('local'));
    innerText+=1;
    let newt = JSON.stringify(innerText);
    localStorage.setItem('local', newt);
    document.getElementById('local').innerText = localStorage.getItem('local');
}

function increaseSession() {
    let innerText = JSON.parse(sessionStorage.getItem('session'));
    innerText+=1;
    let newt = JSON.stringify(innerText);
    sessionStorage.setItem('session', newt);
    document.getElementById('session').innerText = sessionStorage.getItem('session');
}
function loading() {
    if (localStorage.getItem('local')) {
        document.getElementById('local').innerText = localStorage.getItem('local');
    }
    if (sessionStorage.getItem('session')) {
        document.getElementById('session').innerText = sessionStorage.getItem('session');
    }
    else {
        localStorage.setItem("local", document.getElementById("local").innerText);
        sessionStorage.setItem("session", document.getElementById("session").innerText);
    }
}