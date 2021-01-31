function login(event){
    event.preventDefault();
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");  
    const remember_me = document.querySelector("#remember-me");  
    
    const email_error = document.querySelector("#email-error");
    const password_error = document.querySelector("#password-error");

    email_error.innerText = "";
    password_error.innerText = "";

    if(email.value == ""){
        email_error.innerText = "Enter Email!";
    }else{
        if(password.value == ""){
            password_error.innerText = "Enter Password!";
        }else{
            var user_info = JSON.parse(localStorage.getItem("users"));
            if(email.value != user_info[0].email){
                email_error.innerText = "Email is invalid!";
            }else{
                if(password.value != user_info[0].password){
                    password_error.innerText = "Password is invalid!";
                }else{
                    if(remember_me.checked){
                        document.cookie = `users=${email.value}; expires=Mon, 1 Feb 2021 12:00:00 UTC`;
                    }else{
                        sessionStorage.setItem("users", email.value);
                    }
                    location.href = "index.html";
                }
            }
        }
    }
}

var login_form = document.querySelector("#login-form");
login_form.addEventListener("submit", login);

function showPassword(){
    const password = document.querySelector("#password");
    (password.type === "password") ? password.type = "text" : password.type = "password";
}

var show_password = document.querySelector("#show-password");
show_password.addEventListener("click", showPassword);
