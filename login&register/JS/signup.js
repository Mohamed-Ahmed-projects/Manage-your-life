
let username = document.querySelector(".outerFrame form #name");
let email = document.querySelector(".outerFrame form #email");
let password = document.querySelector(".outerFrame form #password");
let gender = document.querySelector(".outerFrame form #gender");
let country = document.querySelector(".outerFrame form #country");
let birthDay = document.querySelector(".outerFrame form #birth");
let submitButton = document.querySelector(".outerFrame form #submit");
let form = document.querySelector(".outerFrame form");

function login(index) {
    let users = JSON.parse(window.localStorage.getItem("users"));
    for (let i = 0; i< users.length; i++) {
        users[i].userAvaliabilty = false;
    }
    users[index].userAvaliabilty = true;
    localStorage.setItem("users",JSON.stringify(users))
    setTimeout(function () {
        location.href = "../index.html"
    },2000);
    submitButton.value = "";
    submitButton.onmouseover = function () {
        submitButton.style.backgroundColor = "#eee"
    }
    submitButton.style.opacity="0.5"
    let loadingBorder = document.querySelector(".outerFrame form .loading");
    loadingBorder.style.cssText = "display: inline-block; top: 100px;";
}
    username.onblur = function () {
        let regExpuser = /^[a-z A-Z]/ig;
        if (!regExpuser.test(username.value)) {
            let warningP = document.querySelector("p.username");
            document.querySelector("p.username").textContent ="";
            let pTextNode = document.createTextNode("Username Must Start By at least one alphbatic character");
            warningP.appendChild(pTextNode);
            warningP.style.color = "red"
        } else {
            document.querySelector("p.username").textContent ="";
        }
    }
    email.onblur = function () {
        let regExpemail = /^[a-z A-Z 0-9._%]+(.[a-z A-Z 0-9])*@[a-z]{3,}(.[a-z]{2,})+/ig;
        if (!regExpemail.test(email.value)) {
            let warningEmail = document.querySelector("p.email");
            document.querySelector("p.email").textContent ="";
            let emailTextNode = document.createTextNode("Write your email in form (example@gmail.com)");
            warningEmail.appendChild(emailTextNode);
            warningEmail.style.color = "red"
        } else {
            document.querySelector("p.email").textContent ="";
        }
    }
    password.onblur = function () {
        let regExpPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/gm;
        if (!regExpPassword.test(password.value)) {
            let warningPassword = document.querySelector("p.password");
            document.querySelector("p.password").textContent ="";
            let passwordTextNode = document.createTextNode("password must be at least 8 character. Consist of one Cap and lower alphapatic character, one number and one spechial character ");
            warningPassword.appendChild(passwordTextNode);
            warningPassword.style.color = "red";    
        } else {
            document.querySelector("p.password").textContent ="";
        }
    }
    birthDay.onblur = function () {
        if (birthDay.value!== "") {
            let current = new Date();
            let birth = new Date(birthDay.value);
            if (birth.getYear() > current.getYear() || birth.getYear() < (current.getYear() - 90)) {
                document.querySelector("p.birth").textContent = "";
                document.querySelector("p.birth").textContent = "Please write your correct birthday";
                document.querySelector("p.birth").style.color="red"
            }else {
                document.querySelector("p.birth").textContent = "";
            }
        } 
    }

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    let regExpuser = /^[a-zA-Z]/ig;
    let regExpEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let regExpPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

    if (!regExpuser.test(username.value)) {
        return;
    }else {
        if (!regExpEmail.test(email.value)) {
            return;
        }else {
            let accounts = JSON.parse(window.localStorage.getItem("users")) || [];
            let emailExists = accounts.some(account => account.userEmail === email.value);
            if (emailExists) {
                document.querySelector("p.email").textContent = "You can not create two accounts with the same email";
                document.querySelector("p.email").style.color = "red";
                return;
            } else {
                if (!regExpPassword.test(password.value)) {
                    return;
                } else {
                    let current = new Date();
                    let birth = new Date(birthDay.value);
                    if (birth == "Invalid Date" || birth.getFullYear() >= current.getFullYear() || birth.getFullYear() <= (current.getFullYear() - 90)) {
                        return;
                    }else {
                        let newUser = {
                            name: username.value,
                            userEmail: email.value,
                            userPassword: password.value,
                            userGender: gender.value,
                            userCountry: country.value,
                            userBirthDay: birthDay.value,
                            userAvaliabilty: true,
                            goals: [],
                            tasks: [],
                            events: [],
                            tickets: [],
                            notifications: []
                        };
                        accounts.push(newUser);
                        window.localStorage.setItem("users",JSON.stringify(accounts))
                        function getIndex() {
                            for (let i = 0; i < accounts.length; i++) {
                                if (accounts[i].userEmail === email.value) {
                                    let index = i;
                                    login(index);
                                    return index;
                                }
                            }
                        }
                        getIndex()
                    }
                }
            }
        }
    }
});