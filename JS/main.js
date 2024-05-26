// comany and features lists
let ulFeatures = document.querySelector(".nav .links .features ul.f1eatures");
let arrowFeaturesdown = document.querySelector(".nav .links .features i");
let features = document.querySelector(".features");

features.onclick = function () {
    if (arrowFeaturesdown.classList.contains("fa-angle-down")) {
        arrowFeaturesdown.classList.replace("fa-angle-down","fa-angle-up");
        ulFeatures.style.display= "block";
    } else {
        arrowFeaturesdown.classList.replace("fa-angle-up","fa-angle-down");
        ulFeatures.style.display= "none";
    }
}
// ######################################
let planning = document.querySelector("nav .nav .features .planning");
planning.onclick = () => location.href = "../planning/planning.html";
//#############################################################################
let myToggle = document.querySelector(".toggle");
let myNav = document.querySelector("nav .nav")
//#########################
function hideNav() {
    if (window.innerWidth > 991) {
        myToggle.style.display = "none";
        myNav.style.display = "flex";
    } else {
        
        myToggle.style.display = "inline-block";
        myNav.style.display = "none";
    }
};
hideNav();
window.onresize = hideNav;
let myContainer = document.querySelector("body > .container")
myToggle.onclick = () => {
    myNav.style.display = "inline-block";
}
let myClose = document.querySelector("nav .nav .close svg")
myClose.onclick = () => {
    myNav.style.display = "none";
}

//#################################3
let registerBtn = document.querySelector("nav .nav .register button");
let loginLink = document.querySelector("nav .nav .register a.log");
let accountsList = JSON.parse(window.localStorage.getItem('users'));
if (localStorage.getItem("users")) {
    let accountsList = JSON.parse(window.localStorage.getItem('users'));
    function getUserIndex() {
        for (let i = 0; i < accountsList.length; i++) {
            if (accountsList[i].userAvaliabilty === true) {
                let index = i;
                return index ;
            }
        }
    }
    let userId = getUserIndex();
    function createAvatar () {
        if (userId >= 0) {
            document.querySelector("nav .nav .register").style.display = "none";
            let avatar = document.querySelector("div.userLetter");
            avatar.textContent = accountsList[userId].name.slice(0,1).toUpperCase();
            avatar.style.cssText = "width: 40px; height: 40px; border-radius: 50%; background-color: hsl(0, 0%, 41%); border-width: 3px; border-style: solid; text-align: center;padding-top:8px;line-height: 20px;font-size: 25px;cursor: pointer;display: inline-block;position: absolute; top: 0; right: 0%;transition: right 1s linear;color: white;z-index: 100000;"
        }
    }
    createAvatar()
    let userSchortcut = document.querySelector("div.userLetter");
    userSchortcut.onclick = function () {
        if (document.querySelector("nav .userInformation") && document.querySelector("nav .userInformation").style.display === "flex") {
            document.querySelector("nav .userInformation").style.display = "none";
            return;
        } else {
            if (document.querySelector("nav .userInformation")) {
                document.querySelector("nav .userInformation").style.display = "flex";
            } else {
                function createLogOutWindow() {
                    let logOutWindow = document.createElement("div");
                    logOutWindow.className = "userInformation"
                    let hr = document.createElement("hr")
                    let hr1 = document.createElement("hr")
                    let hiUser = document.createElement("p");
                    let yourEmail = document.createElement("p");
                    let logOutButton = document.createElement("button");
                    hiUser.textContent = `hi, ${accountsList[userId].name}`;
                    yourEmail.textContent = `${accountsList[userId].userEmail}`;
                    logOutButton.textContent = "Log Out";
                    logOutWindow.appendChild(hiUser);
                    logOutWindow.appendChild(hr);
                    logOutWindow.appendChild(yourEmail);
                    logOutWindow.appendChild(hr1);
                    logOutWindow.appendChild(logOutButton);
                    logOutWindow.style.cssText = "position:absolute; top: 110%;min-width: fit-content; max-width: 400px; right: 0; font-size : 25px;border: 3px solid royalblue; text-align: center; background-color: hsl(0, 0%, 41%);color: white; height: 150px;display: flex;flex-direction: column; justify-content: space-evenly; border-radius: 20px; z-index: 500; padding: 10px"
                    yourEmail.style.cssText = "text-align: center;font-size: 15px;";
                    logOutButton.style.cssText = " width: 60%;margin-left: auto; margin-right: auto;border-radius: 16px;out-line: none;border:none;cursor: pointer; background-color: royalblue; color: white;";
                    logOutButton.onclick = function () {
                    logOutButton.style.cssText = " width: 60%;margin-left: auto; margin-right: auto;border-radius: 16px;out-line: none;border:none;cursor: pointer; background-color: white; color: black";
                    }
                    document.querySelector("nav").appendChild(logOutWindow);
                    logOutButton.onclick = function () {
                        for (let i = 0; i< accountsList.length; i++) {
                            accountsList[i].userAvaliabilty = false;
                            
                        }
                        window.localStorage.setItem("users", JSON.stringify(accountsList));
                        document.querySelector("nav .nav .register").style.display = "flex";
                        document.querySelector("div.userLetter").style.display = "none";
                        logOutWindow.style.display="none";
                        location.reload()
                    }
                }
                createLogOutWindow()
            }
        }
    }
}
let currentYear = new Date().getFullYear();
let rightsYear = document.querySelector("footer span.year");
rightsYear.textContent = currentYear;
// ###########################################
// document.querySelector(".landing .remoteWork .text button").onclick = function () {
//     href
// }