const animatedName = document.getElementById("animated-name");
const themeChanger = document.getElementById("theme-changer");

const tags = ["Zakaria", "C0D3RW0LF", "K4RM4W0LF", "Zacker010011"];
let tagIdx = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typerAnimation(text) {
    animatedName.textContent = "Hi, I am "
    for (let i = 0; i < text.length; i++) {
        animatedName.textContent += text.charAt(i);
        await sleep(100);
    }
    await sleep(3000);
    for (let i = 0; i < text.length; i++) {
        animatedName.textContent = animatedName.textContent.slice(0, -1);
        await sleep(50);
    }
    tagIdx += 1;
    typerAnimation(tags[tagIdx % tags.length]);
}

typerAnimation(tags[tagIdx % tags.length]);
