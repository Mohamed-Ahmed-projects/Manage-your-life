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
window.onresize = function () {
    hideNav();
};
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
// ##############################3
let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// make the year dynamic that mean it can be changed to past or future
function changeYear () {
    let yearSpan = document.querySelector(".sideBar .year span");
    let leftArrow = document.querySelector(".sideBar .year i.left");
    let rightArrow = document.querySelector(".sideBar .year i.right");
    yearSpan.textContent = new Date().getFullYear()
    leftArrow.onclick = function () {
        yearSpan.textContent = Number.parseInt( yearSpan.textContent) - 1;
        getTheFirstDay();
    } 
    rightArrow.onclick = function () {
        yearSpan.textContent = Number.parseInt( yearSpan.textContent) + 1;
        getTheFirstDay();
    } 
}
changeYear();
// set the current month dynamically according to the current date 
window.onload = function () {
    let currentMonth = document.querySelector(".days caption");
    let date = new Date();
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    currentMonth.textContent = monthNames[date.getMonth()].toUpperCase();
    getTheFirstDay();
    currentDay();
}
// make the month dynamic that mean you can choose the month 
function changeMonth () {
    let monthsArray = document.querySelectorAll(".sideBar .months li");
    let currentMonth = document.querySelector(".days caption");
    monthsArray.forEach(element => {
        element.classList.remove("active-month")
        element.onclick = function () {
            let clickedMonth = element.textContent;
            element.classList.add("active-month");
            currentMonth.textContent = clickedMonth.toUpperCase();
            if (window.innerWidth < 991) {
                document.querySelector(".sideBar").style.display = "none";
                document.querySelector(".sideBar").classList.remove("clicked");
            }
            getTheFirstDay();
        }
    });
}
changeMonth();
// determine the first and last days of selected month in selected year to determine how much days to create in the calendar
function getTheFirstDay () {
    let monthName = document.querySelector(".days caption").textContent;
    for (let i = 0; i < month.length; i++) {
        if (monthName.toLowerCase() === month[i].toLowerCase()) {
            let theDayOne = new Date(Date.UTC(document.querySelector(".sideBar .year span").textContent,i,1)).getDay();
            let theDayOneOfFollwingMonth = new Date(Date.UTC(document.querySelector(".sideBar .year span").textContent,i+1,1));
            theDayOneOfFollwingMonth.setUTCDate(0);
            let tdElements = document.querySelectorAll(".days table td");
            for (let j = 0; j < tdElements.length; j++) {
                tdElements[j].classList.remove("empty");
                tdElements[j].classList.remove("active");
                tdElements[j].textContent = "";
                if (j > theDayOne && j - theDayOne <= theDayOneOfFollwingMonth.getDate()) {
                    tdElements[j].textContent = j - theDayOne;
                    tdElements[j].className = "active";
                }else {
                    tdElements[j].className = "empty";
                }
            }
        }
    }
}
getTheFirstDay();
if (window.innerWidth < 601 && window.innerWidth > 441) {
    let tableOfDays = document.querySelector("table");
    tableOfDays.cellSpacing = "15";
} else if (window.innerWidth < 441){
    let tableOfDays = document.querySelector("table");
    tableOfDays.cellSpacing = "10";
}
// default value for current Date and function to determine the changed value for it
function currentDay () {
    let tdElements = document.querySelectorAll("td.active");
    let currentYear = document.querySelector(".sideBar .year span").textContent;
    let currentMonth = document.querySelector("table > caption").textContent;
    let currentDate = document.querySelector(".current > .date");
    currentDate.textContent = `${(currentMonth.slice(0,1) + currentMonth.slice(1,currentMonth.length).toLowerCase())} ${new Date().getDate()}, ${currentYear}`;
    tdElements.forEach(element => {
        element.onclick = function () {
            let day = element.textContent;
            let currentYear = document.querySelector(".sideBar .year span").textContent;
            let currentMonth = document.querySelector("table > caption").textContent;
            let currentDate = document.querySelector(".current > .date");
            currentDate.textContent = `${(currentMonth.slice(0,1) + currentMonth.slice(1,currentMonth.length).toLowerCase())} ${day}, ${currentYear}`;
            let hr = document.createElement("hr");
            currentDate.appendChild(hr)
            loadingEventsFromStorage();
            loadingDeadlinesAndTasks();
            achievements();
        }
    });
    let hr = document.createElement("hr");
    currentDate.appendChild(hr)
    loadingEventsFromStorage();
    loadingDeadlinesAndTasks();
    achievements();
}
currentDay();
// adding and removing events to current day
function events() {
    let eventsul = document.querySelector(".current .events ul");
    let defaultP = document.querySelector(".current .events ul p");
    let addingEventButton = document.querySelector(".event .add button");
    let removingEventButton = document.querySelector(".event .remove button");
    addingEventButton.onclick = function () {
        let formContainer = document.querySelector(".formContainer");
        if (formContainer.children.length > 0) {
            formContainer.textContent = "";
            formContainer.style.display = "none";
            return
        }
        let createForm = document.createElement("form");
        let createInput = document.createElement("input");
        let createInputAdd = document.createElement("input");
        createInputAdd.type = "submit";
        createInputAdd.value = "Add";
        formContainer.style.display = "flex";
        createInputAdd.addEventListener("click", function (element) {
            element.preventDefault();
            if (createInput.value !== "") {
                if (eventsul.children[0].tagName === "P") {
                    eventsul.textContent = "";
                }
                let newLi = document.createElement("li");
                newLi.className = "eventItem"
                newLi.textContent = `- ${createInput.value.slice(0,1).toUpperCase()}${createInput.value.slice(1,createInput.value.length)}` ;
                eventsul.appendChild(newLi);
                formContainer.style.display = "none";
                // to prevent appearing multiple form
                createForm.remove();
                let currentEvents = JSON.parse(localStorage.getItem("users")) || [];
                for (let i = 0; i < currentEvents.length; i++) {
                    if (currentEvents[i].userAvaliabilty) {
                        currentEvents[i].events = currentEvents[i].events || [];
                        let newEvent = {
                            date: Date.parse(document.querySelector(".date").textContent),
                            name: newLi.textContent,
                        }
                        currentEvents[i].events.push(newEvent);
                        localStorage.setItem("users",JSON.stringify(currentEvents));
                    }
                }
            }
        })
        createForm.appendChild(createInput);
        createForm.appendChild(createInputAdd);
        formContainer.appendChild(createForm);
    }
    removingEventButton.onclick = function () {
        if (eventsul.children[0].tagName !== "P") {
            Array.from(eventsul.children).forEach(element => {
                element.remove();
            })
            let defaultP = document.createElement("p");
            defaultP.textContent = "Today there is no events.";
            eventsul.appendChild(defaultP);
            function removeEventsFromStorage() {
                let users = JSON.parse(localStorage.getItem("users"));
                for (let j = 0; j < users.length; j++) {
                    if (users[j].userAvaliabilty) {
                        users[j].events.forEach((element, index) => {
                            if (element.date === Date.parse(document.querySelector(".date").textContent)) {
                                users[j].events.splice(index, 1);
                            }
                        });
                    }
                }
                localStorage.setItem("users", JSON.stringify(users));
            }      
            removeEventsFromStorage();
        }
    }
}
events()
// loading events from the memory and divid it in its days
function loadingEventsFromStorage() {
    let users = JSON.parse(localStorage.getItem("users"));
    for (let i= 0; i < users.length; i++) {
        if (users[i].userAvaliabilty) {
            let ul = document.querySelector(".events ul");
            ul.textContent = "";
            for (let j = 0; j < users[i].events.length; j++) {
                if (document.querySelector(".events ul p")) {document.querySelector(".events ul p").remove();}
                if (users[i].events[j].date === Date.parse(document.querySelector(".date").textContent)) {
                    let ulOfEvents = document.querySelector(".events ul");
                    let newLi = document.createElement("li");
                    newLi.textContent = users[i].events[j].name;
                    newLi.className = "eventItem";
                    ulOfEvents.appendChild(newLi)
                }
            }
            if (ul.children.length === 0) {
                let pElement = document.createElement("p");
                pElement.textContent = "Today there is no event";
                ul.appendChild(pElement)
            }
        }
    }
}
// loading tasks and deadLines from storage 
function loadingDeadlinesAndTasks () {
    let goalsAndTasksUl = document.querySelector(".toDo ul");
    let users = JSON.parse(localStorage.getItem("users"));
    function goalsDeadLine () {
        for (let i = 0; i < users.length; i++) {
            if (users[i].userAvaliabilty) {
                goalsAndTasksUl.textContent = "";
                let goalList = document.createElement("p");
                goalList.textContent = "Goals: -"
                goalList.className = "goalHeader"
                goalsAndTasksUl.appendChild(goalList);
                users[i].goals.forEach(element => {
                    if (!element.checked) {
                        if ((Date.parse(document.querySelector(".date").textContent) - Date.parse(element.deadLine)) === -10800000 || (Date.parse(document.querySelector(".date").textContent) - Date.parse(element.deadLine)) === -7200000) {
                            let newLi = document.createElement("li");
                            newLi.textContent = `- ${element.name.slice(0,1).toUpperCase()}${element.name.slice(1,element.name.length)}`;
                            newLi.className = "goal";
                            goalsAndTasksUl.appendChild(newLi);
                        }
                    }
                })
                if (document.querySelectorAll(".toDo .goal").length === 0) {
                    goalList.remove();
                    let pElement = document.createElement("p");
                    pElement.textContent = "Today there is no Deadlines or tasks.";
                    goalsAndTasksUl.appendChild(pElement);
                }
            }
        }
    }
    goalsDeadLine();
    
    function tasks () {
        let x = new Date();
        x.setHours(0,0,0,0)
        if (Date.parse(document.querySelector(".date").textContent) === x.getTime()) {
            for (let i = 0; i < users.length; i++) {
                if (users[i].userAvaliabilty) {
                    if (goalsAndTasksUl.children[0].tagName === "P") {
                        goalsAndTasksUl.textContent = "";
                    }
                    let taskList = document.createElement("p");
                    taskList.textContent = "Tasks: -"
                    taskList.className = "taskHeader"
                    goalsAndTasksUl.appendChild(taskList);
                    users[i].tasks.forEach(element => {
                        if (!element.checked) {
                            let newLi = document.createElement("li");
                            newLi.textContent = `- ${element.name.slice(0,1).toUpperCase()}${element.name.slice(1,element.name.length)}`;
                            newLi.className = "task";
                            goalsAndTasksUl.appendChild(newLi);
                        }
                    })
                    if (document.querySelectorAll(".toDo .task").length === 0) {
                        taskList.remove();
                        let pElement = document.createElement("p");
                        pElement.textContent = "Today there is no Deadlines or tasks.";
                        goalsAndTasksUl.appendChild(pElement);
                    }
                }
            }
        }
    }
    tasks();
}

// Loading achievements from storage 
function achievements () {
    let ulAchievement = document.querySelector(".achievement ul");
    let users = JSON.parse(localStorage.getItem("users")) || [];
    ulAchievement.textContent = "";
    for (let i = 0; i < users.length; i++) {
        if (users[i].userAvaliabilty) {
            function doneGoals () {
                let goalList = document.createElement("p");
                goalList.textContent = "Goals: -"
                goalList.className = "goalHeader"
                ulAchievement.appendChild(goalList);
                for (let j = 0; j < users[i].goals.length; j++) {
                    if (users[i].goals[j].checked) {
                        if (Date.parse(document.querySelector(".date").textContent) === users[i].goals[j].dateFinishedAt) {
                            let donegoal = document.createElement("li");
                            donegoal.style.cssText = "padding: 5px;"
                            donegoal.className = "goal";
                            donegoal.textContent = `- ${users[i].goals[j].name.slice(0,1).toUpperCase()}${users[i].goals[j].name.slice(1,users[i].goals[j].name.length)}`;
                            ulAchievement.appendChild(donegoal);
                        }
                    }
                }
                if (document.querySelectorAll(".achievement .goal").length === 0 ) {
                    goalList.remove();
                }
            }
            doneGoals();
            function doneTasks () {
                let taskList = document.createElement("p");
                taskList.textContent = "Tasks: -"
                taskList.className = "taskHeader"
                ulAchievement.appendChild(taskList);
                for (let j = 0; j < users[i].tasks.length; j++) {
                    if (users[i].tasks[j].checked) {
                        if (Date.parse(document.querySelector(".date").textContent) === users[i].tasks[j].dateFinishedAt) {
                            let donetask = document.createElement("li");
                            donetask.className = "task";
                            donetask.style.cssText = "padding: 5px;";
                            donetask.textContent = `- ${users[i].tasks[j].name.slice(0,1).toUpperCase()}${users[i].tasks[j].name.slice(1,users[i].tasks[j].name.length)}`;
                            ulAchievement.appendChild(donetask);
                        }
                    }
                }
                if (document.querySelectorAll(".achievement .task").length === 0 ) {
                    taskList.remove();
                }
            };
            doneTasks();
            if (ulAchievement.children.length === 0) {
                let defaultP = document.createElement("p");
                defaultP.textContent = "Today there is no achievements";
                ulAchievement.appendChild(defaultP)
            }
        }
    }
}

// hide bars of selecting (year, month) and the bar of the clicked day
function hideButtons() {
    let contentContainer = document.querySelector(".content");
    let yearBar = document.querySelector(".content .sideBar");
    let todayBar = document.querySelector(".content .current");
    let mainBar = document.querySelector(".content .days")
    let hideYear = document.querySelector(".content .hideYear");
    let hideToday = document.querySelector(".content .hideCurrent");
    let months = document.querySelectorAll(".sideBar .months li")

    if (window.innerWidth > 991) {
        hideYear.onclick = function () {
            let yearBarDisplay = window.getComputedStyle(yearBar).display;
            let todayBarDisplay = window.getComputedStyle(todayBar).display;
            if (yearBarDisplay === "flex" && todayBarDisplay === "flex") {
                yearBar.style.display = "none";
                contentContainer.style.cssText = "grid-template-columns: 75% 25%";
            } else if(yearBarDisplay === "flex" && todayBarDisplay === "none"){
                yearBar.style.display = "none";
                contentContainer.style.cssText = "grid-template-columns:  100% ";
            } else if(yearBarDisplay === "none" && todayBarDisplay === "flex"){
                yearBar.style.display = "flex";
                contentContainer.style.cssText = "grid-template-columns: 20% 55% 25%";
            } else if(yearBarDisplay === "none" && todayBarDisplay === "none"){
                yearBar.style.display = "flex";
                contentContainer.style.cssText = "grid-template-columns: 20% 80% ";
            }
        }

        hideToday.onclick = function () {
            let yearBarDisplay = window.getComputedStyle(yearBar).display;
            let todayBarDisplay = window.getComputedStyle(todayBar).display;
            if (yearBarDisplay === "flex" && todayBarDisplay === "flex") {
                todayBar.style.display = "none";
                contentContainer.style.cssText = "grid-template-columns: 20% 80%";
            } else if(yearBarDisplay === "none" && todayBarDisplay === "flex"){
                todayBar.style.display = "none";
                contentContainer.style.cssText = "grid-template-columns: 100%";
            } else if(yearBarDisplay === "flex" && todayBarDisplay === "none"){
                todayBar.style.display = "flex";
                contentContainer.style.cssText = "grid-template-columns: 20% 55% 25%";
            } else if(yearBarDisplay === "none" && todayBarDisplay === "none"){
                todayBar.style.display = "flex";
                contentContainer.style.cssText = "grid-template-columns: 75% 25%";
            }
        }
    } else {
        hideYear.onclick = function () {
            let yearBarDisplay = window.getComputedStyle(yearBar).display;
            if (yearBarDisplay === "none") {
                todayBar.classList.remove("clicked");
                todayBar.style.display = "none";
                yearBar.classList.add("clicked");
                yearBar.style.display = "flex";
                
                updateContentHeight()
            } else {
                yearBar.classList.remove("clicked");
                setTimeout( () => {
                    yearBar.style.display = "none";
                    updateContentHeight();
                }, 500)
            }
        };
        hideToday.onclick = function () {
            let todayBarDisplay = window.getComputedStyle(todayBar).display;
            if (todayBarDisplay === "none") {
                yearBar.classList.remove("clicked");
                yearBar.style.display = "none";
                todayBar.classList.add("clicked");
                todayBar.style.display = "flex";
                // updateContentHeight();
            } else {
                todayBar.classList.remove("clicked");
                setTimeout( () => {
                    todayBar.style.display = "none";
                    // updateContentHeight();
                }, 500)
            }
        };
        function updateContentHeight() {
            let maxHeight = 0;
            // Check each child element and find the maximum height
            [yearBar, todayBar, mainBar].forEach(bar => {
                if (bar.style.display !== 'none') {
                    maxHeight = Math.max(maxHeight, bar.offsetHeight);
                }
            });
            // Set the height of the content to the tallest child's height
            contentContainer.style.height = maxHeight + 'px';
        }
        function clickDays () {
            todayBar.classList.remove("clicked");
            todayBar.style.display = "none";
            yearBar.classList.remove("clicked");
            yearBar.style.display = "none"
        }
        mainBar.onclick = clickDays;
    }
}
hideButtons();
