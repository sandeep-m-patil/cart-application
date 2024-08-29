
let registerLog = JSON.parse(localStorage.getItem("registerData")) || []


function login_des(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    registerLog.forEach((item) => {
       
        if (username == item.username && password == item.password) {
            window.location.href = "home.html";
        }
        else {
            document.getElementById("login-info").innerText = "Username or Password Mismatched"
        }

    });


  
}

function register_des(event){
    event.preventDefault();
    let username = document.getElementById("name").value;
    let password = document.getElementById("password").value;
console.log(username)
    if(username!=='' && password!==''){
        registerLog.push({
            'username':`${username}`,
            'password':`${password}`,
        
        })
    
        localStorage.setItem("registerData",JSON.stringify(registerLog))
    alert("Successfully Registered")
    window.location.href = "index.html";
    }
      console.log(username,password);

}

console.log(registerLog)