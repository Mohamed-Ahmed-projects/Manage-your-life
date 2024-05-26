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
                    logOutWindow.style.cssText = "position:absolute; top: 110%;max-width: 300px; right: 0; font-size : 25px;border: 3px solid royalblue; text-align: center; background-color: hsl(0, 0%, 41%);color: white; height: 150px;display: flex;flex-direction: column; justify-content: space-evenly; border-radius: 20px; z-index: 500;"
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
// +++++++++++++++++++++++++++++++++++++++++++++++++++++====
// bring the event of today 
function notifications () {
    let x = new Date();
    const currentTime = new Date().getTime();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].userAvaliabilty) {
            // today events
            for (let j = 0; j < users[i].events.length; j++) {
                if (currentTime - users[i].events[j].date < 86400000 && currentTime - users[i].events[j].date > 0) {
                    let notification = document.createElement("div");
                    notification.className = "notification";
                    let notificationContent = document.createElement("p");
                    notificationContent.className = "notificationText";
                    notificationContent.textContent = `Remeber the today event of ${users[i].events[j].name.slice(2,1500)} `
                    let timeSpan = document.createElement("span");
                    timeSpan.className = "time";
                    timeSpan.textContent = `${x.getHours()}:${x.getMinutes()}`
                    let closeIcon = document.createElement("i");
                    closeIcon.classList.add("fa-xmark", "fa-solid", "close");
                    notification.appendChild(closeIcon);
                    notification.appendChild(notificationContent);
                    notification.appendChild(timeSpan);
                    document.querySelector("body > .container").appendChild(notification);
                }
            }
            // tasks not checked at 5 pm
            if (x.getHours() > 17) {
                for (let k = 0; k < users[i].tasks.length; k++) {
                    if (!users[i].tasks[k].checked) {
                        let notification = document.createElement("div");
                        notification.className = "notification";
                        let notificationContent = document.createElement("p");
                        notificationContent.className = "notificationText";
                        notificationContent.textContent = `Remeber to finish your today task of ${users[i].tasks[k].name} `
                        let timeSpan = document.createElement("span");
                        timeSpan.className = "time";
                        timeSpan.textContent = `${x.getHours()}:${x.getMinutes()}`
                        let closeIcon = document.createElement("i");
                        closeIcon.classList.add("fa-xmark", "fa-solid", "close");
                        notification.appendChild(closeIcon);
                        notification.appendChild(notificationContent);
                        notification.appendChild(timeSpan);
                        document.querySelector("body > .container").appendChild(notification);
                    }
                }
            }
            // notification of goals that the needed time is about to be not available because of the closing of the deadline
            for (let z = 0; z < users[i].goals.length; z++) {
                if (!users[i].goals[z].checked) {
                    let deadLineDate = new Date(users[i].goals[z].deadLine);
                    deadLineDate.setHours(0,0,0,0);
                    let deadLineTime = deadLineDate.getTime()
                    let y = deadLineTime - x;
                    y/=60000;
                    if (y < users[i].goals[z].neededTime * 1.5) {
                        let notification = document.createElement("div");
                        notification.className = "notification";
                        let notificationContent = document.createElement("p");
                        notificationContent.className = "notificationText";
                        notificationContent.textContent = `Remeber to finish your goal of ${users[i].goals[z].name} before the deadline.`
                        let timeSpan = document.createElement("span");
                        timeSpan.className = "time";
                        timeSpan.textContent = `${x.getHours()}:${x.getMinutes()}`
                        let closeIcon = document.createElement("i");
                        closeIcon.classList.add("fa-xmark", "fa-solid", "close");
                        notification.appendChild(closeIcon);
                        notification.appendChild(notificationContent);
                        notification.appendChild(timeSpan);
                        document.querySelector("body > .container").appendChild(notification);
                    }
                }
            }
            // response of the tickets send to admin of the website
            function ticketsNotification () {
                let tickets = users[i].tickets;
                for (let j = 0; j < tickets.length; j++) {
                    if (tickets[j].status !== "not responded" && tickets[j].seenState === "notSeen") {
                        let notification = document.createElement("div");
                        notification.className = "notification";
                        let notificationContent = document.createElement("p");
                        notificationContent.className = "notificationText";
                        notificationContent.textContent = `${tickets[j].status}`
                        let timeSpan = document.createElement("span");
                        timeSpan.className = "time";
                        timeSpan.textContent = `${x.getHours()}:${x.getMinutes()}`
                        let closeIcon = document.createElement("i");
                        closeIcon.classList.add("fa-xmark", "fa-solid", "close");
                        closeIcon.onclick = function () {
                            users[i].tikets[j].seenState = "seen";
                        }
                        notification.appendChild(closeIcon);
                        notification.appendChild(notificationContent);
                        notification.appendChild(timeSpan);
                        document.querySelector("body > .container").appendChild(notification);
                    }
                }
            }
            ticketsNotification()
        }
    }
}
notifications();
document.querySelectorAll(".container .notification i").forEach((icon) => {
    icon.onclick = function () {
        icon.parentElement.remove();
    }
})