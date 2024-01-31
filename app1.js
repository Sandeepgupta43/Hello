let btn = document.querySelector("button");
let url = "https://dog.ceo/api/breeds/image/random";
let img = document.getElementById("result");

btn.addEventListener("click", async () => {
    console.log("button was clicked");
    await getImg();
});

async function getImg() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        img.src = data.message;
    } catch (e) {
        console.log("Image not found");
    }
}