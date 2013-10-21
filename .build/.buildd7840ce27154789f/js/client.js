/**
 * User: maelle
 * Date: 23/07/13
 * Time: 23:06
 */

function login() {
	console.log("login()");
    var email = document.getElementById('loginEmail');
    var password = document.getElementById('loginPassword');
    var url = 'http://localhost:3000/connection?email=' + email.value + '&password=' + password.value;
    $.ajax({
        type: "GET",
        dataType: "json",
        url: url,
        success: function (data) {
            localStorage.user = JSON.stringify({'email': data.email, 'name': data.name, 'idUser': data.idUser});
            window.location.href = 'dashboard.html';
        },
        error: function (error) {
            document.getElementById('error').innerHTML = 'There is a problem - ' + error.responseText;
            document.getElementById('error').style.visibility = 'visible';
            console.log('Status: ' + error.status + 'Message: '+ error.responseText);
        } ,
        cache: false
    });
    return false;
}

function register() {
    var email = document.getElementById('registerEmail');
    var password = document.getElementById('registerPassword');
    var name = document.getElementById('registerName');
    var url = 'http://192.168.1.10:3000/register?email=' + email.value + '&password=' + password.value + '&name=' + name.value;

    $.ajax({
        type: "GET",
        dataType: "json",
        url: url,
        success: function (data) {
            console.log(data);
            window.location.href = 'index.html#login'
        },
        cache: false
    });
}

document.getElementById('connect').addEventListener('click', login, false);
document.getElementById('register').addEventListener('click', register, false);
