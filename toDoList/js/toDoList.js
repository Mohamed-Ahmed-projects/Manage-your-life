// default design for each page 
function defaultDesign() {
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
}
defaultDesign();
// end of the nav and footer (default design);

// form the dropDown menu from getting the goals of the current account from the memory
function dropDownMenu () {
    let selectGoalList = document.querySelector("form .select");
    let dropMenuElement = document.createElement("div");
    dropMenuElement.className = "dropMenu";
    selectGoalList.appendChild(dropMenuElement);
    goalArray();
    let options = document.querySelectorAll("form .select .dropMenu div");
    options.forEach(option => {
        option.addEventListener("click", function () {
            document.querySelector(".select > span").textContent = option.dataset.name;
        if (document.querySelector(".select > span").textContent !== "select the goal") {
            let spanText = document.querySelector(".select > .textContent");
            spanText.classList.add("active");
            spanText.classList.remove("inactive");                         
        } else {
            let spanText = document.querySelector(".select > .textContent");
            spanText.classList.remove("active");
            spanText.classList.add("inactive"); 
        }
        })
    })
    selectGoalList.onclick = function () {
        if (dropMenuElement.style.display === "none" || !dropMenuElement.style.display) {
            dropMenuElement.style.display = "block";
        } else if(dropMenuElement.style.display === "block") {
            dropMenuElement.style.display = "none";
        }
    }
}
// goal Array function
function goalArray() {
    // make condation to know if data stored in local or session storage
    if(document.querySelector(".userLetter")) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        for (let i = 0; i < users.length; i++) {
            if (users[i].userAvaliabilty) {
                for (let j = 0; j < users[i].goals.length; j ++) {
                    if (users[i].goals[j].checked) {
                        continue;
                    }
                    let optionElement = document.createElement("div");
                    let br = document.createElement("br");
                    let br2 = document.createElement("br");
                    let progressElement = document.createElement("span");
                    progressElement.style.cssText = "display: inline-block; height: 5px; background-color: green; margin-right: 5px; border-radius: 2.5px";
                    let progWidth = (users[i].goals[j].timeDone / users[i].goals[j].neededTime)*100;
                    progressElement.style.width = `${progWidth}%`
                    optionElement.className = "option";
                    optionElement.dataset.name = users[i].goals[j].name;
                    optionElement.textContent = `${optionElement.dataset.name.slice(0,1).toUpperCase()}${optionElement.dataset.name.slice(1,optionElement.dataset.name.length)}`;
                    // appending the new elements
                    optionElement.appendChild(br);
                    optionElement.appendChild(br2);
                    optionElement.appendChild(progressElement);
                    let dropMenuElement = document.querySelector("form .select .dropMenu");
                    dropMenuElement.appendChild(optionElement);
                }
                otherOption();
            }
        }
    } else {
        let users = JSON.parse(sessionStorage.getItem("users")) || [];
        for (let j = 0; j < users[i].goals.length; j ++) {
            if (users.goals[j].checked) {
                continue;
            }
            let optionElement = document.createElement("div");
            let br = document.createElement("br");
            let br2 = document.createElement("br");
            let progressElement = document.createElement("span");
            progressElement.style.cssText = "display: inline-block; height: 5px; background-color: green; margin-right: 5px; border-radius: 2.5px";
            let progWidth = (users.goals[j].timeDone / users.goals[j].neededTime)*100;
            progressElement.style.width = `${progWidth}%`
            optionElement.className = "option";
            optionElement.dataset.name = users.goals[j].name;
            optionElement.textContent = `${optionElement.dataset.name.slice(0,1).toUpperCase()}${optionElement.dataset.name.slice(1,optionElement.dataset.name.length)}`;
            // appending the new elements
            optionElement.appendChild(br);
            optionElement.appendChild(br2);
            optionElement.appendChild(progressElement);
            let dropMenuElement = document.querySelector("form .select .dropMenu");
            dropMenuElement.appendChild(optionElement);
        }
        otherOption();
    }
}
// the option that contain no goal (other)
function otherOption (){
    let optionElement = document.createElement("div");
    let br = document.createElement("br");
    let br2 = document.createElement("br");
    optionElement.className = "option";
    optionElement.dataset.name = "Other";
    optionElement.textContent = `${optionElement.dataset.name.slice(0,1).toUpperCase()}${optionElement.dataset.name.slice(1,optionElement.dataset.name.length)}`;
    // appending the new elements
    optionElement.appendChild(br);
    optionElement.appendChild(br2);
    let dropMenuElement = document.querySelector("form .select .dropMenu");
    dropMenuElement.appendChild(optionElement);
}
// end of loading goals
dropDownMenu();
// finish the dropDown menu 

// create the new task and storing it in the storage
function createTasks () {
    let addButton = document.querySelector("form .add");
    let taskName = document.querySelector(".form form .taskName");
    let spanText = document.querySelector(".select > .textContent");
    let workedTime = document.querySelector(".form form .workedTime");
    addButton.addEventListener("click", function (event) {
        event.preventDefault();
        if (taskName.value === "") {
            return;
        }
        if (spanText.classList.contains("inactive")) {
            return;
        }
        if (workedTime.value === "") {
            return;
        }
        createsingleTasks()
    })
}
function createsingleTasks () {
    // create the box of the task and give it a uniqe id 
    let taskDiv = document.createElement("div");
    taskDiv.className = "task";
    let users = JSON.parse(localStorage.getItem("users"))
    for (let i = 0; i < users.length; i++) {
        if (users[i].userAvaliabilty){
            let k = users[i].tasks.length || 0;
            let randomChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","O","p","q","r","s","t","u","v","w","x","y","z"];
            let randomNumber = Math.floor(Math. random() * 26) + 1;
            taskDiv.id = `id-${k+=2}${randomChar[randomNumber]}`;
        }
    }
    // checked hovered line
    let decorationLine = document.createElement("span");
    decorationLine.className = "hoveredLine";
    // adding radio button 
    let radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.className = "radio";
    // appending the button and the span to find them in the taskChecked function
    taskDiv.appendChild(radioButton);
    taskDiv.appendChild(decorationLine);
    // the action for check the task
    radioButton.onclick = function () {
        taskDiv.classList.add("checked");
        decorationLine.style.display = "inline-block";
        taskChecked(this.parentElement);
    }
    //  adding text (name of the task)
    let taskBoxName = document.createElement("h2");
    let taskName = document.querySelector(".form form .taskName");
    taskBoxName.textContent = taskName.value.slice(0,1).toUpperCase() + taskName.value.slice(1,taskName.value.length);
    taskDiv.appendChild(taskBoxName);
    // delete button
    let deletButton = document.createElement("button");
    deletButton.className = "deletButton";
    deletButton.textContent = "Delete";
    taskDiv.appendChild(deletButton);
    deletButton.onclick = function () {
        delteteButton(this)
    }
    let tasksContainer = document.querySelector(".tasks");
    tasksContainer.appendChild(taskDiv);
    storingTask(taskDiv);
    // clear the form values
    function deletInputValues () {
        let taskName = document.querySelector(".form form .taskName");
        let spanText = document.querySelector(".select > .textContent");
        let workedTime = document.querySelector(".form form .workedTime");
        taskName.value = "";
        workedTime.value = "";
        spanText.classList.replace("active", "inactive");
        spanText.textContent = "Select the goal";
    }
    deletInputValues();
}
// taskChecked function
function taskChecked(parentElement) {
    let users = JSON.parse(localStorage.getItem("users"));
    for (let i = 0; i < users.length; i++) {
        if (users[i].userAvaliabilty) {
            for (let j = 0; j < users[i].tasks.length; j++) {
                if (users[i].tasks[j].id === parentElement.id && !users[i].tasks[j].checked) {
                    function addingTimeDoneToGoal () {
                        for (let k =0; k < users[i].goals.length; k++) {
                            if (users[i].tasks[j].goalName === users[i].goals[k].name) {
                                users[i].goals[k].timeDone = Number.parseInt(users[i].goals[k].timeDone) + Number.parseInt(users[i].tasks[j].time);
                                let x = new Date();
                                x.setHours(0,0,0,0);
                                users[i].tasks[j].dateFinishedAt = x.getTime();
                                users[i].tasks[j].checked = true;
                                localStorage.setItem("users", JSON.stringify(users));
                                if (Number.parseInt(users[i].goals[k].timeDone) >= Number.parseInt(users[i].goals[k].neededTime)) {
                                    let x = new Date();
                                    x.setHours(0,0,0,0);
                                    users[i].goals[k].dateFinishedAt = x.getTime();
                                    users[i].goals[k].checked = true;
                                    localStorage.setItem("users", JSON.stringify(users));
                                }
                            } else if (users[i].tasks[j].goalName === "Other") {
                                let x = new Date();
                                x.setHours(0,0,0,0);
                                users[i].tasks[j].dateFinishedAt = x.getTime();
                                users[i].tasks[j].checked = true;
                                localStorage.setItem("users", JSON.stringify(users));
                            }
                        }
                    }
                    addingTimeDoneToGoal();
                    document.querySelector(".dropMenu").remove();
                    dropDownMenu();
                }
            }
        }
    }
    setTimeout(() => {
        transferToDoneContainer(parentElement);
    }, 750);}
// transfer the task to done tasks after checked
function transferToDoneContainer (parentElement) {
    let doneTasks = document.querySelector(".done");
    doneTasks.appendChild(parentElement);
    // control the number of the done tasks to 10 tasks
    function doneChildren() {
        while (doneTasks.children.length > 11) {
            doneTasks.removeChild(doneTasks.children[1]);
        }
    }
    doneChildren();
    // removing task from the container of tasks not done yet
    if (parentElement.parentElement === document.querySelector(".tasks")) {
        parentElement.remove();
    }
    // show and hide the done tasks
    function appearanceOfDoneTasks () {
        if (doneTasks.children.length === 1) {
            doneTasks.style.cssText = "display: none;";
        }
        if (doneTasks.children.length !== 1) {
            doneTasks.style.cssText = "display: block;";
        }
    }
    appearanceOfDoneTasks();
}
// delet button function 
function delteteButton (button) {
    if (button.checked) {
        button.parentElement.remove();
    } else {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        for (let i = 0; i < users.length; i++) {
            if(users[i].userAvaliabilty) {
                users[i].tasks = users[i].tasks.filter(task => task.id !== button.parentElement.id );
                localStorage.setItem("users", JSON.stringify(users));
            } else {
                let users = JSON.parse(sessionStorage.getItem("users")) || [];
                users.tasks = users.tasks.filter(task => task.id !== button.parentElement.id );
                sessionStorage.setItem("users", JSON.stringify(users));
            }
        }
        button.parentElement.remove();
    }
    function appearanceOfDoneTasks () {
        doneTasks = document.querySelector(".done")
        if (doneTasks.children.length === 1) {
            doneTasks.style.cssText = "display: none;";
        }
        if (doneTasks.children.length !== 1) {
            doneTasks.style.cssText = "display: block;";
        }
    }
    appearanceOfDoneTasks()
}
// storing task 
function storingTask (taskDiv) {
    let taskName = document.querySelector(".form form .taskName");
    let spanText = document.querySelector(".select > .textContent");
    let workedTime = document.querySelector(".form form .workedTime");
    if (document.querySelector(".userLetter")) {
        let users = JSON.parse(localStorage.getItem("users"));
        for (let i = 0; i < users.length; i++) {
            if (users[i].userAvaliabilty) {
                // taskDiv = document.querySelectorAll(".task")[document.querySelectorAll(".task").length - 1]
                let newTask = {
                    name: taskName.value.toLowerCase(),
                    goalName: spanText.textContent,
                    time: workedTime.value,
                    id: taskDiv.id,
                    checked: false,
                    dateFinishedAt: "",
                }
                users[i].tasks.push(newTask);
                localStorage.setItem("users", JSON.stringify(users));
            }
        }
    } else {
        users = JSON.parse(sessionStorage.getItem("users")) || [];
        let newTask = {
            name: taskName.value.toLowerCase(),
            goalName: spanText.textContent,
            time: workedTime.value,
            id: taskDiv.id,
            checked: false,
            dateFinishedAt: "",
        }
        users.tasks.push(newTask);
        sessionStorage.setItem("users", JSON.stringify(users));
    }
}
createTasks();
// end of creating the task element

// importing exist tasks from storage 
function loadingTasks () {
    if (document.querySelector(".userLetter").textContent !== "") {
        let users = JSON.parse(localStorage.getItem("users"));
        // create the box of the task and give it its id from storage
        for (let i = 0; i < users.length; i++) {
            if (users[i].userAvaliabilty) {
                for (let j = 0; j < users[i].tasks.length; j++) {
                    let taskDiv = document.createElement("div");
                    taskDiv.className = "task";
                    taskDiv.id = users[i].tasks[j].id;
                    // checked hovered line
                    let decorationLine = document.createElement("span");
                    decorationLine.className = "hoveredLine";
                    // adding radio button 
                    let radioButton = document.createElement("input");
                    radioButton.type = "radio";
                    radioButton.className = "radio";
                    // appending the button and the span to find them in the taskChecked function
                    taskDiv.appendChild(radioButton);
                    taskDiv.appendChild(decorationLine);
                    // the action for check the task
                    radioButton.onclick = function () {
                        taskDiv.classList.add("checked");
                        decorationLine.style.display = "inline-block";
                        // 
                        let users = JSON.parse(localStorage.getItem("users"));
                        for (let i = 0; i < users.length; i++) {
                            if (users[i].userAvaliabilty) {
                                for (let j = 0; j < users[i].tasks.length; j++) {
                                    if (users[i].tasks[j].id === this.parentElement.id && !users[i].tasks[j].checked) {
                                        function addingTimeDoneToGoal () {
                                            for (let k =0; k < users[i].goals.length; k++) {
                                                if (users[i].tasks[j].goalName === users[i].goals[k].name) {
                                                    users[i].goals[k].timeDone = Number.parseInt(users[i].goals[k].timeDone) + Number.parseInt(users[i].tasks[j].time);
                                                    let x = new Date();
                                                    x.setHours(0,0,0,0);
                                                    users[i].tasks[j].dateFinishedAt = x.getTime();
                                                    users[i].tasks[j].checked = true;
                                                    localStorage.setItem("users", JSON.stringify(users));
                                                    if (Number.parseInt(users[i].goals[k].timeDone) >= Number.parseInt(users[i].goals[k].neededTime)) {
                                                        let x = new Date();
                                                        x.setHours(0,0,0,0);
                                                        users[i].goals[k].dateFinishedAt = x.getTime();
                                                        users[i].goals[k].checked = true;
                                                        localStorage.setItem("users", JSON.stringify(users));
                                                    }
                                                } else if (users[i].tasks[j].goalName === "Other") {
                                                    let x = new Date();
                                                        x.setHours(0,0,0,0);
                                                        users[i].tasks[j].dateFinishedAt = x.getTime();
                                                    users[i].tasks[j].checked = true;
                                                    localStorage.setItem("users", JSON.stringify(users));
                                                }
                                            }
                                        }
                                        addingTimeDoneToGoal();
                                        document.querySelector(".dropMenu").remove();
                                        dropDownMenu();
                                    }
                                }
                            }
                        }
                        setTimeout(() => {
                            let doneTasks = document.querySelector(".done");
                            doneTasks.appendChild(this.parentElement);
                            // control the number of the done tasks to 10 tasks
                            function doneChildren() {
                                while (doneTasks.children.length > 11) {
                                    doneTasks.removeChild(doneTasks.children[1]);
                                }
                            }
                            doneChildren();
                            // removing task from the container of tasks not done yet
                            if (this.parentElement.parentElement === document.querySelector(".tasks")) {
                                this.parentElement.remove();
                            }
                            // show and hide the done tasks
                            function appearanceOfDoneTasks () {
                                if (doneTasks.children.length === 1) {
                                    doneTasks.style.cssText = "display: none;";
                                }
                                if (doneTasks.children.length !== 1) {
                                    doneTasks.style.cssText = "display: block;";
                                }
                            }
                            appearanceOfDoneTasks();
                        }, 750);
                    }
                    // adding the name of the task
                    let taskBoxName = document.createElement("h2");
                    taskBoxName.textContent = users[i].tasks[j].name.slice(0,1).toUpperCase() + users[i].tasks[j].name.slice(1, users[i].tasks[j].name.length);
                    taskDiv.appendChild(taskBoxName);
                    // adding delete button
                    let deletButton = document.createElement("button");
                    deletButton.className = "deletButton";
                    deletButton.textContent = "Delete";
                    deletButton.onclick = function () {
                        if (this.parentElement.classList.contains("checked")) {
                            this.parentElement.remove();
                        } else {
                            let users = JSON.parse(localStorage.getItem("users")) || [];
                            for (let i = 0; i < users.length; i++) {
                                if(users[i].userAvaliabilty) {
                                    users[i].tasks = users[i].tasks.filter(task => task.id !== this.parentElement.id );
                                    localStorage.setItem("users", JSON.stringify(users));
                                }
                            }
                            this.parentElement.remove();
                        }
                        function appearanceOfDoneTasks () {
                            let doneTasks = document.querySelector(".done");
                            if (doneTasks.children.length === 1) {
                                doneTasks.style.cssText = "display: none;";
                            }
                            if (doneTasks.children.length !== 1) {
                                doneTasks.style.cssText = "display: block;";
                            }
                        }
                        appearanceOfDoneTasks();
                    }
                    taskDiv.appendChild(deletButton);
                    if (!users[i].tasks[j].checked) {
                        let tasksContainer = document.querySelector(".tasks");
                        tasksContainer.appendChild(taskDiv)
                    } else {
                        let doneTasks = document.querySelector(".done");
                        taskDiv.classList.add("checked")
                        radioButton.checked = true;
                        decorationLine.style.display = "inline-block";
                        doneChildren();
                        doneTasks.appendChild(taskDiv);
                        function appearanceOfDoneTasks () {
                            if (doneTasks.children.length === 1) {
                                doneTasks.style.cssText = "display: none;";
                            }
                            if (doneTasks.children.length !== 1) {
                                doneTasks.style.cssText = "display: block;";
                            }
                        }
                        appearanceOfDoneTasks();
                        function doneChildren() {
                            let done = document.querySelector(".done");
                            // Check if the number of children exceeds 11
                            while (done.children.length > 6) {
                                // Remove the first done task
                                done.removeChild(done.children[1]);
                            }
                        }
                        doneChildren();
                    }
                }
            }
        }
    }else {
        let users = JSON.parse(sessionStorage.getItem("users")) || [];
        let signInP = document.createElement("p");
        signInP.textContent = "Sign In to make it easy for loading your goals in the select goal list";
        signInP.style.cssText = "text-align: center; font-size: 25px; font-weight: bold; color: royalblue"
        document.querySelector(".tasks").appendChild(signInP)
    }
}
loadingTasks();
