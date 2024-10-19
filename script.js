function accept() {
    const response = document.getElementById("response");
    response.innerText = "Te quiero muxo. 💖";
    response.classList.add("show");
}

function moveButton(button) {
    const container = document.querySelector(".container");
    const containerRect = container.getBoundingClientRect();
    
    const buttonRect = button.getBoundingClientRect();
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}