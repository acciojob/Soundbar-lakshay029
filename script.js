//your JS code here. If required.
const sounds = [
    "applause",
    "boo",
    "gasp",
    "tada",
    "victory",
    "wrong"
];

const buttonsContainer = document.getElementById("buttons");

let currentAudio = null;

sounds.forEach(sound => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound;

    btn.addEventListener("click", () => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        currentAudio = new Audio(`sounds/${sound}.mp3`);
        currentAudio.play();
    });

    buttonsContainer.appendChild(btn);
});

const stopBtn = document.createElement("button");
stopBtn.classList.add("stop");
stopBtn.innerText = "Stop";

stopBtn.addEventListener("click", () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
});

buttonsContainer.appendChild(stopBtn);