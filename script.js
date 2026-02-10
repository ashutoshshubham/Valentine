const btnYes = document.getElementById("btn_yes");
const btnNo = document.getElementById("btn_no");
const valText = document.getElementById("val_text");
const buttonBox = document.getElementById("button_id");
const heartsBox = document.querySelector(".hearts");

btnNo.style.transition = "transform 0.2s ease";

let yesSize = 100;
let yesFont = 16;
let index = 0;
let animationStarted = false;

/* 🔥 PERFORMANCE LIMITS */
let activeItems = 0;
const MAX_ITEMS = 20;
const isLowEndMobile = window.innerWidth < 480;

const messages = [
    // "Roses are red, violets are blue, I think I have a crush, do you too?",
    "ना बनबो?😕",
    "Tere Dil Pe Haq Mera Hai,Tu Sanam Beshaq Mera Hai😍",
    // "Would you grab my arm? I want to tell my friends I’ve been touched by an angel.",
    "Teri Nazron Ka Dil Pe Hua Hai Asar,Tu Mera Mehboob Hai Jaana🤗",
    "बन जा तू मेरी रानी तेनु चाय पीला दूंगा☕ (Dolly की चाय😂)",
    "Modi G की चाय?😂",
    `coffee??? \n कुछ देसी/अंग्रेजी wala?🥂🍻`,
    // "Once you go cupid, the rest are just stupid!",
    "Please!! 😭",
    "Le Chale Tumko Taaron Ke Shehar Mein🌟⭐",
    "और वही से नीचे फेक दे😤",
    "Ha bol😠",
];

/* 🔥 LIGHT EMOJIS (mobile friendly) */
const heartEmojis = ["❤️", "💖", "💘"];
const confetti = ["✨", "🎉",];


/* ---------- NO BUTTON ---------- */
btnNo.addEventListener("click", () => {
    if (index < messages.length) {
        if (index != 0) {
            btnYes.innerText = "YES 😍";
            btnNo.innerText = "NO 🙃";
        }
        valText.innerText = messages[index++];
        yesSize += 20;
        yesFont += 4;

        btnYes.style.width = yesSize + "px";
        btnYes.style.fontSize = yesFont + "px";

        moveNoButton();
    } else {
        valText.innerText = "Ab bol.....Ab bolna 🤣😂🤣";
        valText.style.color = "red";
        valText.style.fontSize = "clamp(28px,5vw,60px)";
        btnNo.style.display = "none";
        btnYes.style.display = "inline-block";
        btnYes.innerText = `Acha thik hai🤦😂...\nYESSS💝`;
        btnYes.style.width = 250 + "px";
        btnYes.style.fontSize = 30 + "px";
    }
});

/* ---------- YES BUTTON ---------- */
btnYes.addEventListener("click", () => {
    valText.innerHTML = `
    My heart choose you, again and again ❤️🥰<br><br>
    You make my heart do happy things 💓✨<br><br>
    With you, everything feels right 💞✨<br><br>
    HAPPY VALENTINE'S DAY 🥰💘😘
`;
    valText.style.color = "green";
    valText.style.fontSize = "clamp(28px,5vw,55px)";
    valText.style.textAlign = "center";
    valText.style.width = "100%";

    buttonBox.style.display = "none";
    vibratePhone();

    if (!animationStarted) {
        setInterval(createFloatingItem, isLowEndMobile ? 600 : 400);
        animationStarted = true;
    }
});

/* ---------- NO BUTTON MOVE ---------- */
function moveNoButton() {
    const x = Math.random() * 160 - 80;
    const y = Math.random() * 100 - 50;
    btnNo.style.transform = `translate(${x}px, ${y}px)`;
}

/* ---------- MOBILE VIBRATION ---------- */
function vibratePhone() {
    if (navigator.vibrate) {
        navigator.vibrate([500, 300, 500, 300, 500]);
    }
}

/* ---------- HEART + CONFETTI ---------- */
function createFloatingItem() {
    if (activeItems >= MAX_ITEMS) return;
    activeItems++;

    const span = document.createElement("span");
    const all = [...heartEmojis, ...confetti];
    span.innerText = all[Math.floor(Math.random() * all.length)];

    span.style.left = Math.random() * 100 + "vw";
    span.style.fontSize = 14 + Math.random() * 18 + "px";
    span.style.animationDuration = 3 + Math.random() * 2 + "s";
    span.style.willChange = "transform, opacity";

    heartsBox.appendChild(span);

    setTimeout(() => {
        span.remove();
        // activeItems--;
    }, 3000);
}
