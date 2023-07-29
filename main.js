let lis = document.querySelectorAll(".numbers li");
let parent = document.querySelector(".parent");
let div = document.createElement("div");

lis.forEach((val) => {
    val.addEventListener("click", (ev) => {
        localStorage.setItem("value",ev.currentTarget.value);
        // removing the div after the click
        div.remove();
    });
});

window.onload = () => localStorage.clear();

document.forms[0].onsubmit = function (ev) {
    if(localStorage.getItem("value") !== null) {
        // removing card and creating new elements
        let card = document.querySelector(".card");
        card.remove();
        let newParent = document.createElement("div");
        let newImg = document.createElement("img");
        let newMsg = document.createElement("span");
        let newHthree = document.createElement("h3");
        let newParagraph = document.createElement("p");
        // adding the new parent to the DOM
        parent.appendChild(newParent);
        newParent.style.cssText = "height: 240px;width: 290px;background-color: var(--Dark-Blue);\
        border-radius: 15px;padding: 15px;display: flex;align-items: center;\
        flex-direction: column;";
        // adding img
        newParent.appendChild(newImg);
        newImg.src = "images/illustration-thank-you.svg";
        newImg.style.cssText = "width: 90px;";
        // adding the msg
        newParent.appendChild(newMsg);
        newMsg.innerHTML = `You selected ${localStorage.getItem("value")} out of ${lis.length}`;
        newMsg.style.cssText = "color:#fb7413;text-align: center;\
        height: 20px;display: flex;justify-content: center;\
        align-items: center;border-radius: 40px;margin-top: 20px;";
        // adding h3
        newHthree.textContent = "Thank you!";
        newParent.appendChild(newHthree);
        newHthree.style.cssText = "color: white;margin-top: 20px;";
        // adding paragraph
        newParagraph.textContent = "We appreciate you taking the time to give a rating.\
        If you ever need more support, don’t hesitate to get in touch!";
        newParent.appendChild(newParagraph);
        newParagraph.style.cssText = "color: var(--Light-Grey);font-size: 11px;text-align: center;margin-top: 10px;line-height: 1.5;width: 96%;"
    }else {
        // in case the user didn't click on the rating number
        div.innerHTML = "please try again clicking a number!";
        div.style.cssText = "color:red;color: red;position: absolute;top: 180px;";
        parent.appendChild(div);
        ev.preventDefault();
    }
}