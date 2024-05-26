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
// =====================================================================================

// show and hide the container of the faqs by clicking the arrow in the faq div
function showOrHideTheFAQs() {
    const faqIcon = document.querySelector(".faq > i");
    const faqContainer = document.querySelector(".faqContainer");
    const faq = document.querySelector(".faq");

    if (faqIcon.classList.contains("fa-circle-arrow-down")) {
        // Get the actual height of the content
        const contentHeight = faqContainer.scrollHeight + 60 +'px';
        
        faqContainer.style.height = contentHeight;
        faqContainer.style.border = "1px solid hsl(0, 0%, 41%)";
        faqContainer.style.borderTop = "none";
        faqContainer.style.borderTopLeftRadius = "0";
        faqContainer.style.borderTopRightRadius = "0";
        faqContainer.style.padding = "30px";

        faq.style.borderBottomLeftRadius = "0";
        faq.style.borderBottomRightRadius = "0";
        
        faqIcon.classList.replace("fa-circle-arrow-down", "fa-circle-arrow-up");
    } else {
        faqContainer.style.height = "0";
        faqContainer.style.border = "none";
        faqContainer.style.padding = "0";
        
        faq.style.borderBottomLeftRadius = "15px";
        faq.style.borderBottomRightRadius = "15px";
        
        faqIcon.classList.replace("fa-circle-arrow-up", "fa-circle-arrow-down");
    }
}

let arrow = document.querySelector(".faq > i");
arrow.onclick = showOrHideTheFAQs;

// show and hide the container of the questions by clicking the arrow in the tiltle of the section

document.querySelectorAll(".section div i").forEach((icon, index, icons) => {
    icon.addEventListener("click", () => {
        let isCurrentlyActive = icon.classList.contains("current");
        icons.forEach((icon, idx) => {
            icon.classList.remove("current");
            icon.classList.replace("fa-circle-arrow-up", "fa-circle-arrow-down");
            document.querySelectorAll(".section .questions")[idx].style.height = "0";
            document.querySelector(".faqContainer").style.height = "auto";
        });

        if (!isCurrentlyActive) {
            // Get the actual height of the content
            const questions = document.querySelectorAll(".section .questions")[index];
            questions.style.height = questions.scrollHeight + "px";
            document.querySelector(".faqContainer").style.height = 877 +  questions.scrollHeight + "px";
            
            icon.classList.add("current");
            icon.classList.replace("fa-circle-arrow-down", "fa-circle-arrow-up");
        }
    });
});
// 
// set the link of whatsapp to open the application if it in the phone or it will open the web.whatsapp by default
function whatsappMessage () {
    function isMobile() {
        const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
        return regex.test(navigator.userAgent);
    }
    if (isMobile()) {
        document.querySelector(".whatsapp a").href = "https://wa.me/201015884356"
    }
}
whatsappMessage();
// validation the message that send to avoid hacking
function tickets () {
    let nameInput = document.querySelector(".messageForm form .name");
    let emailInput = document.querySelector(".messageForm form .userEmail");
    let subjectInput = document.querySelector(".messageForm form .subject");
    let messageInput = document.querySelector(".messageForm form .message");

    let regExpName = /[a-zA-Z\s0-9]+$/;
    let regExpEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let regExLink = /((https?:\/\/)?[^\s.]+\.[\w][^\s]+)/gm;
    
    if (!regExpName.test(nameInput.value)) {
        let nameP = document.querySelector(".nameP");
        nameP.textContent = "Your Name Can At Least Contains 3 Alphabatic Characters And No Spechial Characters.";
        return
    } else {
        document.querySelector(".nameP").textContent = "";
    }
    if (!regExpEmail.test(emailInput.value)) {
        let emailP = document.querySelector(".emailP");
        emailP.textContent = "Write your email in form (example@gmail.com)";
        return
    } else {
        document.querySelector(".emailP").textContent = "";
    }
    if (!regExpName.test(subjectInput.value)) {
        let subjectP = document.querySelector(".subjectP");
        subjectP.textContent = "Please Enter The Subject Of Your Message";
        return
    } else {
        document.querySelector(".subjectP").textContent = "";
    }
    if (regExLink.test(messageInput.value)) {
        let messageP = document.querySelector(".messageP");
        messageP.textContent = "Please Enter Your Message.It can't Contains Links";
        return
    } else {
        document.querySelector(".messageP").textContent = "";
    }
    // create the ticket
    let newTicket = {
        userName: nameInput.value,
        userEmail: emailInput.value,
        ticketSubject: subjectInput.value,
        ticketContent: messageInput.value,
        status: "not responded",
        seenState: "notSeen"
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].userAvaliabilty) {
            users[i].tickets.push(newTicket);
            localStorage.setItem("users", JSON.stringify(users))
        }
    }
    // adding the text to the storage
    let tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    tickets.push(newTicket);
    localStorage.setItem("tickets",JSON.stringify(tickets));
    function clearTheForm () {
        nameInput.value = "";
        emailInput.value = "";
        subjectInput.value = "";
        messageInput.value = "";
    }
    clearTheForm()
}
let submitButton = document.querySelector(".messageForm form .submit");
submitButton.addEventListener("click", function (current) {
    current.preventDefault();
    tickets();
});
// render the tickets if and only if the admain assigned in

function renderTickets () {
    let users = JSON.parse(localStorage.getItem("users"));
    let tickets = JSON.parse(localStorage.getItem("tickets"));
    for (let i = 0; i < users.length; i++) {
        if (users[i].userAvaliabilty && users[i].userEmail === "admin@gmail.com") {
            
            const ticketsContainer = document.querySelector(".tickets");
            for (let j = 0; j < tickets.length; j++) {
                if (tickets[j].status === "not responded") {
                    let ticket = document.createElement("div");
                    ticket.classList.add("container","ticket")
                    let userName = document.createElement("h4");
                    let userEmail = document.createElement("h4");
                    let subject = document.createElement("h5");
                    let message = document.createElement("p");
                    let respondButton = document.createElement("button");
                    userName.textContent = "Name: - " + tickets[j].userName;
                    userName.className = "nameOfUser";

                    userEmail.textContent = "Email : - "+ tickets[j].userEmail;
                    userEmail.className = "emailOfUser";
                    
                    subject.textContent = "Subject:- " + tickets[j].ticketSubject;
                    subject.className = "messageSubject";

                    message.textContent = tickets[j].ticketContent;
                    message.className = "messageContent";

                    respondButton.textContent = "Respond";
                    respondButton.onclick = function () {
                        let textarea = document.createElement("textarea");
                        let sendButton = document.createElement("button");
                        sendButton.textContent = "Send"
                        ticket.appendChild(textarea);
                        ticket.appendChild(sendButton);
                        respondButton.remove();
                        sendButton.onclick = function () {
                            if (textarea.value !== "") {
                                tickets[j].status = textarea.value;
                                localStorage.setItem("tickets", JSON.stringify(tickets));
                                ticket.style.cssText = "height: 0; border: none; transition: all 0.4s linear; display: none;"
                            }else {
                                return
                            }
                            for (let k = 0; k < users.length; k++) {
                                if (users[k].userEmail === tickets[j].userEmail) {
                                    for (let z = 0; z < users[k].tickets; z++) {
                                        if (users[k].tickets[z].ticketContent === tickets[j].ticketContent) {
                                            users[k].tickets[z].status = textarea.value;
                                            localStorage.setItem("users", JSON.stringify(users));
                                        }
                                    }
                                }
                            }
                        }
                    }

                    ticket.appendChild(userName);
                    ticket.appendChild(userEmail);
                    ticket.appendChild(subject);
                    ticket.appendChild(message);
                    ticket.appendChild(respondButton)
                    ticketsContainer.appendChild(ticket);
                }
            }
            if (document.querySelector(".tickets").children.length > 0) {
                document.querySelector("body > .container").remove();
            }
        }
    }
}
renderTickets()