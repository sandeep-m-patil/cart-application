
let registerLog = JSON.parse(localStorage.getItem("registerData")) || []
let login_name = localStorage.getItem("loginname")

document.getElementById('name').innerHTML = `<h1>Welcome ${login_name}<h1>`

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
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let mobileno = document.getElementById("mobileno").value;
    let address = document.getElementById("address").value;


    if (username !== '' && password !== '') {
        registerLog.push({
            'username': `${username}`,
            'dob': `${dob}`,
            'gender': `${gender}`,
            'email': `${email}`,
            'password': `${password}`,
            'mobileno': `${mobileno}`,
            'address': `${address}`

        })

        localStorage.setItem("registerData", JSON.stringify(registerLog))
        alert("Successfully Registered")
        window.location.href = "index.html";


    }




}



let ppname = document.getElementById("accname");
let gender = document.getElementById("gender");
let dob = document.getElementById("dob");
let email = document.getElementById("email");
let mbno = document.getElementById("mbno");
let address = document.getElementById("address");

function display_detials() {

    registerLog.forEach((item) => {
        if (login_name == item.username) {
            ppname.innerText = login_name;
            gender.innerText = item.gender
            dob.innerText = item.dob
            email.innerText = item.email
            mbno.innerText = item.mobileno
            address.innerText = item.address

        }
    }
    )


}


display_detials()

function logout() {
    window.location.href = "index.html";
}

console.table(registerLog)


