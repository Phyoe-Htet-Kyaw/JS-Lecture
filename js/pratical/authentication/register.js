function register(event){
    event.preventDefault();
    const username = document.querySelector("#username");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const con_password = document.querySelector("#con_password");

    const username_error = document.querySelector("#username-error");
    const email_error = document.querySelector("#email-error");
    const password_error = document.querySelector("#password-error");
    const confirm_password_error = document.querySelector("#confirm-password-error");

    username_error.innerText = "";
    email_error.innerText = "";
    password_error.innerText = "";
    confirm_password_error.innerText = "";

    if(username.value == ""){
        username_error.innerText = "Enter Username!";
    }else{
        if(email.value == ""){
            email_error.innerText = "Enter Email!";
        }else{
            if(password.value == ""){
                password_error.innerText = "Enter Password!";
            }else{
                if(con_password.value == ""){
                    confirm_password_error.innerText = "Enter Confirm Password!";
                }else{
                    if(password.value.length < 8){
                        password_error.innerText = "Enter Password Length More Than 8!";
                    }else{
                        if(password.value != con_password.value){
                            confirm_password_error.innerText = "Password And Confirm Password didn't match!";
                        }else{
                            var users = [
                                {
                                    "username": username.value,
                                    "email": email.value,
                                    "password": password.value
                                }
                            ];
                            
                            localStorage.setItem("users", JSON.stringify(users)); // store user data to local storage
                            sessionStorage.setItem("users", email.value);
                            location.href = "index.html"; // link to index like 'a' tag
                        }
                    }
                }
            }
        }
    }
}

var register_form = document.querySelector("#register-form");
register_form.addEventListener("submit", register);