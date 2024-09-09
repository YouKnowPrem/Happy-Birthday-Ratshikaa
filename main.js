let body = document.querySelector('body');
let page1 = document.getElementById('page-1');
let page2 = document.getElementById('page-2');
let cakeBuddiesImg = document.getElementById('cake-buddies-img');
let nextPageButton = document.getElementById('next-page-button');
let previousPageButton = document.getElementById('previous-page-button');
let happyBirthdayHeading = document.getElementById('happy-birthday-heading');
let cakeBuddiesState = "off"

cakeBuddiesImg.addEventListener('click', function () {
    if (cakeBuddiesState == "off") {
        cakeBuddiesState = "playing";
        cakeBuddiesImg.src = "cake-buddies-lit-1.png";
        cakeBuddiesImg.style.filter = "none";
        happyBirthdayHeading.style.filter = "none";
        cakeBuddiesImg.style.cursor = "default";
        body.style.backgroundColor = "#B1D9CD";
        page1.style.backgroundColor = "#F9ECD9";
        let switchSound = new Audio('switch.mp3');
        switchSound.play();
        setTimeout(function () { cakeBuddiesImg.src = "cake-buddies-lit.png"; }, 3000);
        setTimeout(function () { nextPageButton.style.display = "inline"; }, 20000);
        setTimeout(function () {
            happyBirthdayHeading.style.textShadow = "1px 1px 0 #D49C3D, 2px 2px 0 #D14B3D, 3px 3px 0 #CF52EB, 4px 4px 0 #44A3F7, 5px 5px 0 #5ACB3C, 6px 6px 0 #DEBF40";
        }, 73700);
        let birthdaySong = new Audio('happy-birthday-lofi.mp3');
        birthdaySong.play();
    }
})

nextPageButton.addEventListener('click', function () {
    page1.style.animation = "next-page 1.3s ease-in forwards";
    page1.style.position = "absolute";
    page2.style.display = "block";
    let pageFlipSound = new Audio('page-flip.mp3');
    pageFlipSound.play();
})

previousPageButton.addEventListener('click', function () {
    page1.style.animation = "previous-page 1.3s ease-out forwards";
    page1.style.position = "block";
    page2.style.display = "absolute";
    let pageFlipSound = new Audio('page-flip.mp3');
    pageFlipSound.play();
    setTimeout(function () {
        page2.style.display = "none";
    }, 1300);
})