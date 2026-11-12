
const cover = document.getElementById("cover");
const letterPage = document.getElementById("letterPage");

const messageButton = document.getElementById("messageButton");
const messageCard = document.getElementById("messageCard");

const noteButton = document.getElementById("noteButton");
const noteCard = document.getElementById("noteCard");

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

const finalMessage = document.getElementById("finalMessage");
const yesSound = document.getElementById("yesSound");


// DATE

const today = new Date();

document.getElementById("letterDate").innerText =
    "Date: " + today.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });


// OPEN RIBBON LETTER

document.getElementById("openLetter").addEventListener("click", () => {

    cover.classList.add("hide");

    setTimeout(() => {

        cover.style.display = "none";

        letterPage.classList.add("show");

    }, 700);

});


// FIRST MESSAGE

messageButton.addEventListener("click", () => {

    messageCard.hidden = false;

    messageButton.style.display = "none";

    messageCard.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


// SECRET NOTE

noteButton.addEventListener("click", () => {

    noteCard.hidden = false;

    noteButton.style.display = "none";

    noteCard.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


// NO BUTTON

noButton.addEventListener("click", () => {

    document.getElementById("noReply").innerText =
        "Awww! Please think one more time! 🥺❤️";

});


// YES BUTTON

yesButton.addEventListener("click", async () => {

    document.getElementById("answerButtons").style.display = "none";

    finalMessage.hidden = false;

    finalMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });


    // PLAY YOUR SOUND

    try {

        yesSound.currentTime = 0;

        await yesSound.play();

    } catch (error) {

        console.log("Please add yeaaaaaaaa.mp3");

    }


    // HEART ANIMATION

    for (let i = 0; i < 32; i++) {

        const heart = document.createElement("span");

        heart.innerText = "❤️";

        heart.style.position = "fixed";
        heart.style.top = "-30px";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = "25px";
        heart.style.zIndex = "9999";
        heart.style.pointerEvents = "none";
        heart.style.transition = "transform 3s, opacity 3s";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.style.transform =
                `translateY(${window.innerHeight + 50}px) rotate(360deg)`;

            heart.style.opacity = "0";

        }, 100);

        setTimeout(() => {
            heart.remove();
        }, 3200);

    }

});
