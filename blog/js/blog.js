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
// +++++++++++++++++++++++++++++++++++++++++++++++++++++
const hideBar = document.querySelector("body .menuBar");
const sideBar = document.querySelector("body .sideBar");

function hideSideBar(event) {
    event.stopPropagation();
    if (!sideBar.classList.contains("active")) {
        sideBar.classList.add("active");
        sideBar.style.width = "30%";
        if (window.innerWidth < 1200 && window.innerWidth > 991) {
            sideBar.style.width = "30%";
        }else if (window.innerWidth < 992 && window.innerWidth > 767){
            sideBar.style.width = "35%";
        } else if (window.innerWidth < 768 && window.innerWidth > 500) {
            sideBar.style.width = "40%";
        } else if (window.innerWidth < 501 && window.innerWidth > 300) {
            sideBar.style.width = "50%";
        } else if (window.innerWidth < 301) {
            sideBar.style.width = "60%";
        }
        document.body.classList.add("hide");
        renderSideBar();
    } else {
        sideBar.classList.remove("active");
        sideBar.style.width = "0px";
        document.body.classList.remove("hide");
    }
}

function handleBodyClick(event) {
    if (!sideBar.contains(event.target)) {
        sideBar.classList.remove("active");
        sideBar.style.width = "0px";
        document.body.classList.remove("hide");
    }
}

hideBar.addEventListener("click", hideSideBar);
document.body.addEventListener("click", handleBodyClick);
sideBar.addEventListener("click", (event) => event.stopPropagation());

// add comments
const commentsSection = document.querySelector("section.comments");
const commentText = document.querySelector("section.comments form .text");
const commentButton = document.querySelector("section.comments form .submit");

function addComment() {
    const newComment = document.createElement("div");
    newComment.className = "comment";
    const userLetter = document.createElement("div");
    userLetter.className = "letter";
    userLetter.textContent = document.querySelector(".userLetter").textContent;
    const commentContent = document.createElement("p");
    commentContent.textContent = commentText.value;
    const date = document.createElement("span");
    let currentDate = new Date();
    date.textContent = `${currentDate.getMonth() + 1}-${currentDate.getDate()}-${currentDate.getFullYear()} A.D.`
    newComment.appendChild(userLetter);
    newComment.appendChild(commentContent);
    newComment.appendChild(date);
    commentsSection.appendChild(newComment);

    // adding Comment to the storage
    let articles = JSON.parse(localStorage.getItem("articles"));
    
    newCommentObject = {
        letter: userLetter.textContent,
        commentBody: commentContent.textContent,
        date: date.textContent,
    }

    for (let i = 0; i < articles.length; i ++) {
        if (articles[i].state) {
            articles[i].comments.push(newCommentObject);
            localStorage.setItem("articles", JSON.stringify(articles))
        }
    }
}
commentButton.addEventListener("click", (element) => {
    element.preventDefault();
    if (commentText.value !== "") {
    addComment();
    }
});
// advice 
function firstLoad() {
    let articles = JSON.parse(localStorage.getItem("articles")) || [];
    if (articles.length === 0) {
        let pAnnouncement = document.createElement("p");
        pAnnouncement.className = "firstLoad";
        pAnnouncement.textContent = "* Because this is only frontEnd and no dataBase use so there is no articles stored in storage So firstly sign with 'admin@gmail.com' and then add articles from button that will appear in the bottom of this page this articles will be stored in the local storage at your pc. And then try the page.";
        document.querySelector("body > .container").prepend(pAnnouncement)
    } else {
        if (document.querySelector(".firstLoad")) {
            document.querySelector(".firstLoad").remove();
        }
    }
}
firstLoad();
// adding new article
function addPanel() {
    let users = JSON.parse(localStorage.getItem("users"));
    for (let i = 0; i < users.length; i++) {
        if (users[i].userAvaliabilty && users[i].userEmail === "admin@gmail.com") {
            document.querySelector(".addPanel").style.display = "flex";
        };
    };
};
addPanel();
// form of adding new Article
function showPanel() {
    if (document.querySelector(".panel").style.display === "flex") {
        document.querySelector(".panel").style.display = "none";
    } else {
        document.querySelector(".panel").style.display = "flex";
    }
}
document.querySelector(".addPanel .add").addEventListener("click",showPanel);
// added new section fields in adding Panel
function addNewSection() {
    document.querySelector("form > div + p.warningOfSection").style.display = "none";
    let sectionHeaders = document.querySelectorAll("form > div .header");
    let sectioncontentss = document.querySelectorAll("form > div .sectionContent");
    for (let i = 0; i < sectionHeaders.length; i++) {
        if (sectionHeaders[i].value === "" || sectioncontentss[i].value === "") {
            document.querySelector("form > div + p.warningOfSection").style.display = "block";
            return
        }
    }
    let newHeader = document.createElement("input");
    newHeader.className = "header";
    newHeader.placeholder="Section Header";
    newHeader.type = "text";
    let newContent = document.createElement("input");
    newContent.className = "sectionContent";
    newContent.placeholder="Section Content"
    newContent.type = "text";
    let addedSectionsParent = document.querySelector("form > div.addedSections");
    addedSectionsParent.appendChild(newHeader);
    addedSectionsParent.appendChild(newContent)
}
document.querySelector(".addSection").addEventListener("click",function (current) {
    current.preventDefault();
    addNewSection();
});
// adding new keyWord fields in adding Panel
function addNewKeyWord() {
    document.querySelector("form > div + p.warningOfKeyWords").style.display = "none";
    let keyWords = document.querySelectorAll("form > div .keyWord");
    for (let i = 0; i < keyWords.length; i++) {
        if (keyWords[i].value === "") {
            document.querySelector("form > div + p.warningOfKeyWords").style.display = "block";
            return
        }
    }
    let newkeyWord = document.createElement("input");
    newkeyWord.className = "keyWord";
    newkeyWord.placeholder="KeyWord";
    newkeyWord.type = "text";
    const keyWordsParent = document.querySelector("form > div.keywords");
    keyWordsParent.appendChild(newkeyWord);
}
document.querySelector(".addKeyWord").addEventListener("click",function (current) {
    current.preventDefault();
    addNewKeyWord();
});
// the last click to add an article on the submit button
function submitArticleForm () {
    const titleInput = document.querySelector("input.title");
    const authorInput = document.querySelector("input.author");
    const introductionInput = document.querySelector("div.introduction input");
    const summaryInput = document.querySelector("div.summary input");
    const sectionHeaders = document.querySelectorAll("form > div .header");
    const sectionContents = document.querySelectorAll("form > div .sectionContent");
    const aboutAuthor = document.querySelector("div.authorIdentity input");
    const authorLinkedIn = document.querySelector("div.socialMedia .linkedIn");
    const authorTwitter = document.querySelector("div.socialMedia .twitter");
    const keyWords = document.querySelectorAll("form > div .keyWord");
    let headers = [];
    let contents = [];
    let keyWordsArray = [];
    // check for input values
    if (titleInput.value === "" || authorInput.value === "") {
        document.querySelector("P.titleAndAuthor").style.display = "block";
        return
    } else {
        document.querySelector("P.titleAndAuthor").style.display = "none";
    }
    if (introductionInput.value === "") {
        document.querySelector("P.warningIntro").style.display = "block";
        return
    } else {
        document.querySelector("P.warningIntro").style.display = "none";
    }
    for (let i = 0; i < sectionHeaders.length; i++) {
        if (sectionHeaders[i].value === "" || sectionContents[i].value === "") {
            document.querySelector("p.warningOfSection").style.display = "block";
            return
        }else {
            document.querySelector("p.warningOfSection").style.display = "none";
            headers.push(sectionHeaders[i].value);
            contents.push(sectionContents[i].value);
        }
    }
    if (summaryInput.value === "") {
        document.querySelector("P.warningSummary").style.display = "block";
        return
    } else {
        document.querySelector("P.warningSummary").style.display = "none";
    }
    if (aboutAuthor.value === "") {
        document.querySelector("P.aboutAuthorWarning").style.display = "block";
        return
    } else {
        document.querySelector("P.aboutAuthorWarning").style.display = "none";
    }
    if (authorLinkedIn.value === "" || authorTwitter.value === "") {
        document.querySelector("P.authorSocialMedia").style.display = "block";
        return
    } else {
        document.querySelector("P.authorSocialMedia").style.display = "none";
    }
    for (let i = 0; i < keyWords.length; i++) {
        if (keyWords[i].value === "") {
            document.querySelector("p.warningOfKeyWords").style.display = "block";
            return
        }else {
            document.querySelector("p.warningOfKeyWords").style.display = "none";
            keyWordsArray.push(keyWords[i].value);
        }
    }
    // store the article in server
    let articles = JSON.parse(localStorage.getItem("articles")) || [];
    let newArticle = {
        title: titleInput.value,
        author: authorInput.value,
        introduction: introductionInput.value,
        headers: headers,
        content: contents,
        summary: summaryInput.value,
        authorIdentity: aboutAuthor.value,
        linkedIn: authorLinkedIn.value,
        twitter: authorTwitter.value,
        keyWords: keyWordsArray,
        comments: [],
        state: false,
    }
    articles.push(newArticle);
    localStorage.setItem("articles", JSON.stringify(articles));
    // clear the input fields
    document.querySelectorAll("form input[type='text']").forEach((ele) => {
        ele.value = "";
    });
    document.querySelectorAll("form input[type='email']").forEach((ele) => {
        ele.value = "";
    });
    firstLoad();
}
document.querySelector("form .addArticle").addEventListener("click",function (ele) {
    ele.preventDefault();
    submitArticleForm();
});
// render the sideBar from the titles of articles in storage
function renderSideBar () {
    let sideBar  = document.querySelector(".sideBar ul");
    let articles = JSON.parse(localStorage.getItem("articles"))|| [];
    sideBar.textContent = "";
    let title = document.createElement("h3");
    title.textContent = "Our Articles Title";
    title.style.textAlign = "center"
    sideBar.appendChild(title)
    for (let i = 0; i < articles.length; i++) {
        let articleTitle = document.createElement("li");
        articleTitle.textContent = articles[i].title;
        sideBar.appendChild(articleTitle);
    }

    let sideBarItems = document.querySelectorAll(".sideBar ul li");
    sideBarItems.forEach((element) => {
        element.onclick = function () {
            sideBar.parentElement.classList.remove("active");
            sideBar.parentElement.style.width = "0px";
            document.body.classList.remove("hide");
            for (let b = 0; b < articles.length; b++) {
                if (element.textContent === articles[b].title) {
                    renderArticleFromStorage(b);
                }
            }
        }
    })
}
renderSideBar()
// function render Article from storage
function renderArticleFromStorage (x) {
    let articleContainer = document.querySelector(".article");
    articleContainer.textContent = "";
    let articles = JSON.parse(localStorage.getItem("articles")) || [];
    let neededArticle = document.createElement("article");
    // put the state to false for all articles and let article x true
    for (let n = 0; n < articles.length; n++) {
        if (n !== x) {
            articles[n].state = false;
            localStorage.setItem("articles", JSON.stringify(articles));
        } else {
            articles[n].state = true;
            localStorage.setItem("articles", JSON.stringify(articles));
        }
    }
    // header part title and author
    let header = document.createElement("header");
    let title = document.createElement("h1");
    let author = document.querySelector("p");
    title.textContent = articles[x].title;
    author.textContent = articles[x].author;
    header.appendChild(title);
    header.appendChild(author);

    // introduction
    let introduction = document.createElement("section");
    introduction.className = "introduction";
    let introductionContent = document.createElement("p");
    introductionContent.textContent = articles[x].introduction;
    introduction.appendChild(introductionContent);

    // sections main content
    let main = document.createElement("main");
    for (let i = 0; i < articles[x].headers.length; i++) {
        let newSection = document.createElement("section");
        let sectionHeader = document.createElement("h2");
        sectionHeader.textContent = articles[x].headers[i];
        let sectionContent = document.createElement("p");
        sectionContent.textContent = articles[x].content[i];
        newSection.appendChild(sectionHeader);
        newSection.appendChild(sectionContent);
        main.appendChild(newSection);
    };

    // summary
    let summary = document.createElement("section");
    summary.className = "summary";
    let conclusion = document.createElement("h2");
    conclusion.textContent = "Conclusion";
    let summaryContent = document.createElement("p");
    summaryContent.textContent = articles[x].summary;
    summary.appendChild(conclusion);
    summary.appendChild(summaryContent);

    // footer
    let footer = document.createElement("footer");
    // author identity
    let authorData = document.createElement("section");
    authorData.className = "author-bio";

    let aboutAuthorH = document.createElement("h3");
    aboutAuthorH.textContent = "About the Author";

    let authorIdentity = document.createElement("p");
    authorIdentity.textContent = articles[x].authorIdentity;
    let authorsocials = document.createElement("p");
    authorsocials.innerHTML = `Connect With Author in <a href="${articles[x].linkedIn}">LinkedIn</a> and <a href="${articles[x].twitter}">Twitter</a>`;

    authorData.appendChild(aboutAuthorH);
    authorData.appendChild(authorIdentity);
    authorData.appendChild(authorsocials);
    footer.appendChild(authorData);

    // related articles
    let relatedLinks = document.createElement("section");
    relatedLinks.className = "related-posts";

    let relatedHeader = document.createElement("h3");
    relatedHeader.textContent = "Recommended Articles";

    let relatedList = document.createElement("ul");
    function compareKeyWords () {
        let keyWordsOfRenderdArticle = articles[x].keyWords;
        for (let k = 0; k < articles.length; k++) {
            if (k !== x) {
                let keyWordsOfCurrentArticle = articles[k].keyWords;
                function findCommonKeyWords(arr1, arr2) {
                    const set1 = new Set(arr1);
                    const set2 = new Set(arr2);
                    const intersection = new Set([...set1].filter(b => set2.has(b)));;
                    return Array.from(intersection);
                }
                if (findCommonKeyWords(keyWordsOfRenderdArticle,keyWordsOfCurrentArticle).length > 0) {
                    relatedList.textContent = "";
                    let relatedLi = document.createElement("li");
                    let link = document.createElement("a");
                    link.href = "";
                    link.textContent = articles[k].title;
                    relatedLi.appendChild(link);
                    relatedList.appendChild(relatedLi);
                }
            } else {
                continue
            }
        }
    }
    compareKeyWords()
    if (relatedList.children.length === 0) {

        for (let j = 0; j < articles.length; j++) {
            let relatedLi = document.createElement("li");
            let link = document.createElement("a");
            link.href = "";
            link.textContent = articles[j].title;
            relatedLi.appendChild(link);
            relatedList.appendChild(relatedLi);
            if (j > 1) {
                break
            }
        }
    }
    relatedLinks.appendChild(relatedHeader);
    relatedLinks.appendChild(relatedList);
    footer.appendChild(relatedLinks);

    // comments
    let commentSection = document.createElement("section");
    commentSection.className = "comments";

    let commetnsHeader = document.createElement("h3");
    commetnsHeader.textContent = "Comments";

    let advisorP = document.createElement("p");
    advisorP.innerHTML = `<a href="#comment-form">Leave a comment</a> <span>or</span> join the discussion below.`
    
    let commentForm = document.createElement("form");
    commentForm.id = "comment-form";
    commentForm.action = "";
    let commentContent = document.createElement("input");
    commentContent.className = "text";
    commentContent.type = "text";
    commentContent.placeholder = "Write a comment";
    commentForm.appendChild(commentContent);
    let submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.className = "submit";
    submitButton.value = "Comment";
    submitButton.addEventListener("click", (element) => {
        element.preventDefault();
        if (commentContent.value !== "") {
            const newComment = document.createElement("div");
            newComment.className = "comment";
            const userLetter = document.createElement("div");
            userLetter.className = "letter";
            userLetter.textContent = document.querySelector(".userLetter").textContent;
            const commentp = document.createElement("p");
            commentp.textContent = commentContent.value;
            const date = document.createElement("span");
            let currentDate = new Date();
            date.textContent = `${currentDate.getMonth() + 1}-${currentDate.getDate()}-${currentDate.getFullYear()} A.D.`
            newComment.appendChild(userLetter);
            newComment.appendChild(commentp);
            newComment.appendChild(date);
            commentSection.appendChild(newComment);
        
            // adding Comment to the storage
            let articles = JSON.parse(localStorage.getItem("articles"));
            
            newCommentObject = {
                letter: userLetter.textContent,
                commentBody: commentContent.value,
                date: date.textContent,
            }
            

            
            articles[x].comments.push(newCommentObject);
            localStorage.setItem("articles", JSON.stringify(articles))
                
            commentContent.value = "";
        }
        
    });
    commentForm.appendChild(submitButton);

    commentSection.appendChild(commetnsHeader);
    commentSection.appendChild(advisorP);
    commentSection.appendChild(commentForm);

    // render previous comments
    for (let z = 0; z < articles[x].comments.length; z++) {
        let commentContainer = document.createElement("div");
        commentContainer.className = "comment";

        let userLetter = document.createElement("div");
        userLetter.className = "letter";
        userLetter.textContent = articles[x].comments[z].letter;
        commentContainer.appendChild(userLetter);

        let commentBody = document.createElement("p");
        commentBody.textContent = articles[x].comments[z].commentBody;
        commentContainer.appendChild(commentBody);

        let date = document.createElement("span");
        date.textContent = `${articles[x].comments[z].date} A.D.`;
        commentContainer.appendChild(date);

        commentSection.appendChild(commentContainer);
    }

    
    footer.appendChild(commentSection);

    // appending article parts
    neededArticle.appendChild(header);
    neededArticle.appendChild(introduction);
    neededArticle.appendChild(main);
    neededArticle.appendChild(summary);
    neededArticle.appendChild(footer);
    articleContainer.appendChild(neededArticle)
}
// render the true article when load the dom
function renderTrueWhenRefresh() {
    let articles = JSON.parse(localStorage.getItem("articles")) || [];
    for (let i = 0; i < articles.length; i++) {
        if (articles[i].state) {
            renderArticleFromStorage(i);
        }
    }
}
renderTrueWhenRefresh();
// render the recommended article when click it

document.querySelector(".related-posts ul").addEventListener("click", function(event) {
    if (event.target && event.target.nodeName === "A" ) {
        let title = event.target.textContent;
        let articles = JSON.parse(localStorage.getItem("articles"));
        for (let i = 0; i < articles.length; i++) {
            if (articles[i].title === title) {
                renderArticleFromStorage(i);
                break;
            }
        }
    }
});

// search input for finding the most recommended article
let searchIcon = document.querySelector(".searchBar i");
let searchText = document.querySelector(".searchBar input");

searchIcon.addEventListener("click", function () {
    if (document.querySelector(".container .firstLoad")) {
        document.querySelector(".container .firstLoad").remove();   
    }
    let resultP = document.createElement("p");
    resultP.textContent = "Results: - ";
    document.querySelector(".container > .related-Posts").prepend(resultP)
    document.querySelector(".container > .related-Posts ul").textContent = "";
    if (searchText.value === "") {
        return
    };
    function getWhitespaceIndices(text) {
        let indices = [-1];
        for (let i = 0; i < text.length; i++) {
            if (text[i] === ' ') {
                indices.push(i);
            }
        }
        return indices;
    }
    let indicesArray = getWhitespaceIndices(searchText.value);
    let articles = JSON.parse(localStorage.getItem("articles"));
    // check if the text that user enter consist of single or multiple words
    if (indicesArray.length > 1) {
        for (let i = 0; i < articles.length; i++) {
            for (let z = 0; z < indicesArray.length; z++) {
                // take each word and compare it by the key words of each article and then go to the next article
                let text = searchText.value.slice(indicesArray[z] + 1,indicesArray[z + 1]);
                for (let k = 0; k < articles[i].keyWords.length; k++) {
                    if (articles[i].keyWords[k] === text) {
                        let newLi = document.createElement("li");
                        let newH3 = document.createElement("h3");
                        let introduction = document.createElement("p");
                        newH3.textContent = articles[i].title;
                        introduction.textContent = articles[i].introduction;
                        newLi.appendChild(newH3);
                        newLi.appendChild(introduction);
                        document.querySelector(".container > .related-Posts ul").appendChild(newLi);
                        break;
                    }
                }
            }
        }
    } else {
        for (let j = 0; j < articles.length; j++) {
            for (let k = 0; k < articles[j].keyWords.length; k++) {
                if (articles[j].keyWords[k] === searchText.value) {
                    let newLi = document.createElement("li");
                    let newH3 = document.createElement("h3");
                    let introduction = document.createElement("p");
                    newH3.textContent = articles[j].title;
                    introduction.textContent = articles[j].introduction;
                    newLi.appendChild(newH3);
                    newLi.appendChild(introduction);
                    document.querySelector(".container > .related-Posts ul").appendChild(newLi);
                    break;
                }
            }
        }
    }
    if (document.querySelector(".container > .related-Posts ul").children.length !== 0) {
        document.querySelector("article").textContent = ""; // condition if relate-Posts ul cildren are one or more
    } else {
        let noResult = document.createElement("p");
        noResult.className = "firstLoad";
        noResult.textContent = "No matched articles with your search.";
        document.querySelector(".container").prepend(noResult);
    }
});
// render the clicked article in clicking over the results of research
document.querySelector(".related-Posts ul").addEventListener("click", function(event) {
    if (event.target && event.target.nodeName === "H3" ) {
        let title = event.target.textContent;
        let articles = JSON.parse(localStorage.getItem("articles"));
        for (let i = 0; i < articles.length; i++) {
            if (articles[i].title === title) {
                document.querySelector(".related-Posts > p").textContent = "";
                document.querySelector(".related-Posts > ul").textContent = ""; 
                renderArticleFromStorage(i);
                break;
            }
        }
    }
});
// end