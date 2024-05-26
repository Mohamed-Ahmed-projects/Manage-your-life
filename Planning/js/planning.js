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
// #############################################
let accounts = JSON.parse(localStorage.getItem("users")) || [];
for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].userAvaliabilty) {
        for (let j = 0; j < accounts[i].goals.length; j++) {
            let goalBox = document.createElement("div");
            let checkBox= document.createElement("input");
            let text = document.createElement("div");
            let buttons = document.createElement("div");
            // ##################
            goalBox.className = "container";
            goalBox.id = accounts[i].goals[j].id;
            // ############################################
            checkBox.type = "checkbox";
            checkBox.onclick = function () {
                if (checkBox.checked) {
                    let users = JSON.parse(localStorage.getItem("users"));
                    for (let i = 0; i < users.length; i++) {
                        if (users[i].userAvaliabilty) {
                            for (let j = 0; j < users[i].goals.length; j++) {
                                if (users[i].goals[j].id === this.parentElement.id) {
                                    let x = new Date();
                                    x.setHours(0,0,0,0);
                                    users[i].goals[j].dateFinishedAt = x.getTime();
                                    users[i].goals[j].checked = true;
                                    localStorage.setItem("users", JSON.stringify(users));
                                    trueChecked();
                                }
                            }
                        }
                    }
                    goalBox.style.borderColor = "royalblue";
                }
            }
            // ################################
            text.className = "text";
            let goalTitle = document.createElement("h2");
            goalTitle.textContent = accounts[i].goals[j].name;
            let goalReasons = document.createElement("p");
            goalReasons.textContent = accounts[i].goals[j].why;
            text.appendChild(goalTitle);
            text.appendChild(goalReasons);
            // ##################################
            buttons.className = "buttons";
            let modifyButton = document.createElement("button");
            modifyButton.textContent = "Modify";
            modifyButton.className = "modify";
            modifyButton.onclick = function () {
                let users = JSON.parse(localStorage.getItem('users')) || [];
                for (let i = 0; i < users.length;i++) {
                    if(users[i].userAvaliabilty) {
                        currentGoal = users[i].goals.filter(goalBox => goalBox.id === this.parentElement.parentElement.id );
                        goalName.value = currentGoal[0].name;
                        whyGoal.value = currentGoal[0].why;
                        howToDo.value = currentGoal[0].how;
                        neededTime.value = Number.parseInt(currentGoal[0].neededTime);
                        deadLine.value = currentGoal[0].deadLine;
                        users[i].goals = users[i].goals.filter(goalBox => goalBox.id !== this.parentElement.parentElement.id );
                        localStorage.setItem('users', JSON.stringify(users));
                    }
                    this.parentElement.parentElement.remove();
                }
            }
            let deletButton = document.createElement("button");
            deletButton.textContent = "Delete";
            deletButton.className = "deleteButton";
            deletButton.onclick = function () {
                let users = JSON.parse(localStorage.getItem('users')) || [];
                for (let i = 0; i < users.length;i++) {
                    if(users[i].userAvaliabilty) {
                        users[i].goals = users[i].goals.filter(goalBox => goalBox.id !== this.parentElement.parentElement.id );
                        localStorage.setItem('users', JSON.stringify(users));
                    }
                }
                this.parentElement.parentElement.remove();
            }
            buttons.appendChild(modifyButton);
            buttons.appendChild(deletButton);
            // Append children
            goalBox.appendChild(checkBox);
            goalBox.appendChild(text);
            goalBox.appendChild(buttons);
            document.querySelector(".myGoals").appendChild(goalBox);
            trueChecked();
        }
    }
}
// ########################################################################################
let goalsSession = JSON.parse(sessionStorage.getItem("users")) || [];
for (let i = 0; i < goalsSession.length; i++) {
    let goalBox = document.createElement("div");
    let checkBox= document.createElement("input");
    let text = document.createElement("div");
    let buttons = document.createElement("div");
    // ##################
    goalBox.className = "container";
    goalBox.id = goalsSession[i].id;
    // ############################################
    checkBox.type = "checkbox";
    checkBox.onclick = function () {
        if (checkBox.checked) {
            users = JSON.parse(sessionStorage.getItem("users"))
            for (let j = 0; j < users.length; j++) {
                if (users[j].id === this.parentElement.id) {
                    let x = new Date();
                    x.setHours(0,0,0,0);
                    users[i].dateFinishedAt = x.getTime();
                    users[j].checked = true;
                    sessionStorage.setItem("users", JSON.stringify(users));
                    trueChecked();
                }
            }
        }
        goalBox.style.borderColor = "royalblue";
    }
    
    // ################################
    text.className = "text";
    let goalTitle = document.createElement("h2");
    goalTitle.textContent = goalsSession[i].name;
    let goalReasons = document.createElement("p");
    goalReasons.textContent = goalsSession[i].why;
    text.appendChild(goalTitle);
    text.appendChild(goalReasons);
    // ##################################
    buttons.className = "buttons";
    let modifyButton = document.createElement("button");
    modifyButton.textContent = "Modify";
    modifyButton.className = "modify";
    modifyButton.onclick = function () {
        let users = JSON.parse(sessionStorage.getItem("users")) ||[];
        currentGoal = users.filter(goalBox => goalBox.id === this.parentElement.parentElement.id );
        goalName.value = currentGoal[0].name;
        whyGoal.value = currentGoal[0].why;
        howToDo.value = currentGoal[0].how;
        neededTime.value = Number.parseInt(currentGoal[0].neededTime);
        deadLine.value = currentGoal[0].deadLine;
        users = users.filter(goalBox => goalBox.id !== this.parentElement.parentElement.id);
        // ########################3
        sessionStorage.setItem('users', JSON.stringify(users));
        this.parentElement.parentElement.remove();
    }
    let deletButton = document.createElement("button");
    deletButton.textContent = "Delete";
    deletButton.className = "deleteButton";
    deletButton.onclick = function () {
        users = JSON.parse(sessionStorage.getItem("users")) ||[];
        users = users.filter(goalBox => goalBox.id !== this.parentElement.parentElement.id);
        sessionStorage.setItem('users', JSON.stringify(users));
        this.parentElement.parentElement.remove();
    }
    buttons.appendChild(modifyButton);
    buttons.appendChild(deletButton);
    // Append children
    goalBox.appendChild(checkBox);
    goalBox.appendChild(text);
    goalBox.appendChild(buttons);
    document.querySelector(".myGoals").appendChild(goalBox);
}

// ###########################################
let setButton = document.querySelector(".container form input.setGoal");
let goalName = document.querySelector('.container form .name');
let whyGoal = document.querySelector(".container form input.why");
let howToDo = document.querySelector(".container form input.how");
let neededTime = document.querySelector(".container form input.requiredtime");
let deadLine = document.querySelector(".container form input.deadLine");
setButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (goalName.value === "") {
        return;
    }
    if (whyGoal.value === "") {
        return;
    }
    if (howToDo.value === "") {
        return;
    }
    if (neededTime.value === "") {
        return;
    }
    if (deadLine.value === "") {
        return;
    } else {
        settingGoal();
        
        let users = JSON.parse(window.localStorage.getItem("users"));
        let userAvailable = false;
        for (let i = 0; i < users.length; i++) {
            if (users[i].userAvaliabilty) {
                storingGoal();
                // we put the reset of this inputs here to prevent the memory to save the empty values in name reasons and so on
                goalName.value = "";
                whyGoal.value = "";
                howToDo.value = "";
                neededTime.value = "";
                deadLine.value = "";
                userAvailable = true; 
            }
        }
        if (!userAvailable) {
            session();
            goalName.value = "";
                whyGoal.value = "";
                howToDo.value = "";
                neededTime.value = "";
                deadLine.value = "";
        }
    }
});
// #############################s
function settingGoal() {
    let goalBox = document.createElement("div");
    let checkBox= document.createElement("input");
    let text = document.createElement("div");
    let buttons = document.createElement("div");
    // ##################
    goalBox.className = "container";
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userAvailable = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].userAvaliabilty) {
            userAvailable = true; 
            for (let i = 0; i < users.length; i++) {
                if (users[i].userAvaliabilty){
                    let k = users[i].goals.length || 0;
                    let randomChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","O","p","q","r","s","t","u","v","w","x","y","z"];
                    const randomNumber = Math.floor(Math. random() * 26) + 1;
                    goalBox.id = `id-${k+=2}${randomChar[randomNumber]}`;
                }
            }
        }
        if(!userAvailable) {
            let users = JSON.parse(sessionStorage.getItem("users")) || [];
            let k = users.length || 0;
            let randomChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","O","p","q","r","s","t","u","v","w","x","y","z"];
            const randomNumber = Math.floor(Math. random() * 26) + 1;
            goalBox.id = `id-${k+=2}${randomChar[randomNumber]}`;
        }
    }
    // ############################################
    checkBox.type = "checkbox";
    checkBox.onclick = function () {
        if (checkBox.checked) {
            let users = JSON.parse(localStorage.getItem("users"));
            for (let i = 0; i < users.length; i++) {
                if (users[i].userAvaliabilty) {
                    for (let j = 0; j < users[i].goals.length; j++) {
                        if (users[i].goals[j].id === this.parentElement.id) {
                            let x = new Date();
                            x.setHours(0,0,0,0);
                            users[i].goals[j].dateFinishedAt = x.getTime();
                            users[i].goals[j].checked = true;
                            localStorage.setItem("users", JSON.stringify(users));
                            trueChecked();
                        }
                    }
                } else {
                    if (!document.querySelector("div.userLetter")) {
                        users = JSON.parse(sessionStorage.getItem("users"))
                        for (let j = 0; j < users.length; j++) {
                            if (users[j].id === this.parentElement.id) {
                                let x = new Date();
                                x.setHours(0,0,0,0);
                                users[i].dateFinishedAt = x.getTime();
                                users[j].checked = true;
                                sessionStorage.setItem("users", JSON.stringify(users));
                                trueChecked();
                            }
                        }
                    }

                }
            }
        goalBox.style.borderColor = "royalblue";
        }
    }
    // ################################
    text.className = "text";
    let goalTitle = document.createElement("h2");
    goalTitle.textContent = goalName.value;
    let goalReasons = document.createElement("p");
    goalReasons.textContent = whyGoal.value;
    text.appendChild(goalTitle);
    text.appendChild(goalReasons);
    // ##################################
    buttons.className = "buttons";
    let modifyButton = document.createElement("button");
    modifyButton.textContent = "Modify";
    modifyButton.className = "modify";
    modifyButton.onclick = function () {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        for (let i = 0; i < users.length;i++) {
            if(users[i].userAvaliabilty) {
                currentGoal = users[i].goals.filter(goalBox => goalBox.id === this.parentElement.parentElement.id );
                console.log(currentGoal)
                goalName.value = currentGoal[0].name;
                whyGoal.value = currentGoal[0].why;
                howToDo.value = currentGoal[0].how;
                neededTime.value = Number.parseInt(currentGoal[0].neededTime);
                deadLine.value = currentGoal[0].deadLine;
                users[i].goals = users[i].goals.filter(goalBox => goalBox.id !== this.parentElement.parentElement.id );
                // ##################
                localStorage.setItem('users', JSON.stringify(users));
            } else {
                users = JSON.parse(sessionStorage.getItem("users")) ||[];
                currentGoal = users.filter(goalBox => goalBox.id === this.parentElement.parentElement.id );
                goalName.value = currentGoal[0].name;
                whyGoal.value = currentGoal[0].why;
                howToDo.value = currentGoal[0].how;
                neededTime.value = Number.parseInt(currentGoal[0].neededTime);
                deadLine.value = currentGoal[0].deadLine;
                users = users.filter(goalBox => goalBox.id !== this.parentElement.parentElement.id);
                // ########################3
                sessionStorage.setItem('users', JSON.stringify(users));
            }
            this.parentElement.parentElement.remove();
        }
    }
    let deletButton = document.createElement("button");
    deletButton.textContent = "Delete";
    deletButton.className = "deleteButton";
    deletButton.onclick = function () {
            let users = JSON.parse(localStorage.getItem('users')) || [];
            for (let i = 0; i < users.length;i++) {
                if(users[i].userAvaliabilty) {
                    users[i].goals = users[i].goals.filter(goalBox => goalBox.id !== this.parentElement.parentElement.id );
                    localStorage.setItem('users', JSON.stringify(users));
                } else {
                    users = JSON.parse(sessionStorage.getItem("users")) ||[];
                    users = users.filter(goalBox => goalBox.id !== this.parentElement.parentElement.id);
                    sessionStorage.setItem('users', JSON.stringify(users));
                }
                }
            this.parentElement.parentElement.remove();
        }
    buttons.appendChild(modifyButton);
    buttons.appendChild(deletButton);
    // Append children
    goalBox.appendChild(checkBox);
    goalBox.appendChild(text);
    goalBox.appendChild(buttons);
    document.querySelector(".myGoals").appendChild(goalBox);
}
// Storing goals in the memory (local or session) according to the status of the user registered or not
function storingGoal() {
    let users = JSON.parse(window.localStorage.getItem("users"));
    for (i = 0; i < users.length; i++) {
        if (users[i].userAvaliabilty) {
            let goalBoxes = document.querySelectorAll(".myGoals .container");
            let goalBox = goalBoxes[goalBoxes.length -1]
            let newGoal = {
                name: goalName.value,
                why: whyGoal.value,
                how: howToDo.value,
                deadLine: deadLine.value,
                neededTime: neededTime.value,
                checked: false,
                id: goalBox.id,
                timeDone: 0,
                dateFinishedAt: "",
            };
            users[i].goals.push(newGoal);
            localStorage.setItem("users",JSON.stringify(users))
        }
    }
}
function session() {
    let users = JSON.parse(window.sessionStorage.getItem("users")) || [];
    let goalBoxes = document.querySelectorAll(".myGoals .container");
    let goalBox = goalBoxes[goalBoxes.length -1];
    let newGoal = {
        name: goalName.value,
        why: whyGoal.value,
        how: howToDo.value,
        deadLine: deadLine.value,
        neededTime: neededTime.value,
        checked: false,
        id: goalBox.id,
        timeDone: 0,
        dateFinishedAt: "",
    };
    users.push(newGoal);
    window.sessionStorage.setItem("users", JSON.stringify(users));
}
function trueChecked() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.forEach(user => {
        if (user.userAvaliabilty) {
            user.goals.forEach(goal => {
                if (goal.checked) {
                    let element = document.getElementById(goal.id);
                    if (element) {
                        element.remove();
                    }
                }
            });
        }
    });

    if (!document.querySelector("div.userLetter")) {
        let sessionUsers = JSON.parse(sessionStorage.getItem("users")) || [];
        sessionUsers.forEach(user => {
            if (user.checked) {
                let element = document.getElementById(user.id);
                if (element) {
                    element.remove();
                }
            }
        });
    }
}
trueChecked();
// localStorage.clear()