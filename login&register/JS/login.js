let userIndex = null;
if (document.querySelector(".outerFrame form .submit")) {
let users = JSON.parse(window.localStorage.getItem("users"));
let emailinput = document.querySelector(".outerFrame form #email");
let passwordInput = document.querySelector(".outerFrame form #password");
let submitButton = document.querySelector(".outerFrame form .submit");

function login(userName) {
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
    loadingBorder.style.cssText = "display: inline-block";
}
let index = null;
submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    if (emailinput.value === "") {
        document.querySelector(".outerFrame form p.email").textContent = "please enter your email";
        document.querySelector(".outerFrame form p.email").style.color = "red"
    }

    let auserEmail = emailinput.value;

    function indexOfEmail(auserEmail) {
        for (let i = 0; i< users.length; i++) {
            if (auserEmail === users[i].userEmail) {
                document.querySelector(".outerFrame form p.email").textContent = "";
                index = i;
                return index;
            }
        }
        document.querySelector(".outerFrame form p.email").textContent = "This email is not exist in the website data";
        index = null;
        return index;
    }

    indexOfEmail(auserEmail);

    if (index !== null) {
        if (passwordInput.value !== users[index].userPassword) {
            document.querySelector(".outerFrame form p.password").textContent = "Please enter a correct password or use forgot password option";
            document.querySelector(".outerFrame form p.password").style.color = "red";
            return;
        } else {
            let userName = users[index].name;
            login(userName)
            return index;
        }
    } else {
        return;
    }
});
}
