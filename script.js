const btnYes = document.getElementById("btn_yes");
const btnNo = document.getElementById("btn_no");
const valText = document.getElementById("val_text");
const buttonBox = document.getElementById("button_id");
const heartsBox = document.querySelector(".hearts");

let yesSize = 100;
let yesFont = 16;
let index = 0;

const messages = [
    "Roses are red, violets are blue, I think I have a crush, do you too?",
    "V-Day? Try U + Me Day!",
    "Would you grab my arm? I want to tell my friends I’ve been touched by an angel.",
    "Tonight’s menu: Chocolate, candy hearts, and you.",
    "Once you go cupid, the rest are just stupid!",
    "I LOST MY TEDDY BEAR, CAN I CUDDLE WITH YOU?",
    "Are you a charger? Because I'm dying without you.",
    "Please!! 😭",
];

// NO button logic
btnNo.addEventListener("click", () => {
    if (index < messages.length) {
        valText.innerText = messages[index++];
        yesSize += 20;
        yesFont += 4;

        btnYes.style.width = yesSize + "px";
        btnYes.style.fontSize = yesFont + "px";

        moveNoButton();
    } else {
        valText.innerText = "Ab bol… Ab bolna 🤣😂🤣";
        valText.style.color = "red";
        valText.style.fontSize = "clamp(28px,5vw,60px)";
        btnNo.style.display='none';
       btnYes.style.display = "inline-block";
        // btnYes.fontSize = `80px`
    }
});

// YES button logic
btnYes.addEventListener("click", () => {
    valText.innerText = "HAPPY VALENTINE'S DAY 🥰💘😘";
    valText.style.color = "green";
    valText.style.fontSize = "clamp(28px,5vw,55px)";
    valText.style.textAlign = "center";   // ✅ ensure center
    valText.style.margin = "0 auto";      // ✅ perfect center feel

    buttonBox.style.display = "none";
    createHearts();
});
// No button dodge 😈
function moveNoButton() {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 120 - 60;
    btnNo.style.transform = `translate(${x}px, ${y}px)`;
}

// Hearts effect 💖
function createHearts() {
    for (let i = 0; i < 20; i++) {
        const span = document.createElement("span");
        span.innerText = "💖";
        span.style.left = Math.random() * 100 + "vw";
        span.style.animationDuration = 3 + Math.random() * 3 + "s";
        heartsBox.appendChild(span);

        setTimeout(() => span.remove(), 6000);
    }
}
