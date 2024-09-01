
let registerLog = JSON.parse(localStorage.getItem("registerData")) || []



function login_des(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;


    registerLog.forEach((item) => {
        if (username == item.username && password == item.password) {
            localStorage.setItem("loginname", username)
            window.location.href = "home.html";


        }
        else {
            document.getElementById("login-info").innerText = "Username or Password Mismatched"
        }

    });





}





function register_des(event) {
    event.preventDefault();
    let username = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    if (username !== '' && password !== '') {
        registerLog.push({
            'username': `${username}`,
            'password': `${password}`,
        })
        localStorage.setItem("registerData", JSON.stringify(registerLog))
        alert("Successfully Registered")
        window.location.href = "index.html";


    }




}





function logout() {
    window.location.href = "index.html";
}