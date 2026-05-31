const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const buttons = document.getElementById("buttons");

sounds.forEach(sound => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = sound;

    btn.addEventListener("click", () => {
        document.querySelectorAll("audio").forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });

        document.getElementById(sound).play();
    });

    buttons.appendChild(btn);
});

const stopBtn = document.createElement("button");
stopBtn.className = "stop";
stopBtn.innerText = "stop";

stopBtn.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
});

buttons.appendChild(stopBtn);