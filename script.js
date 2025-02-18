document.querySelector(".btn").onclick = function () {
    let Name;
    Name = prompt("Whats Your Name?");
    do {
        if (Name.trim() !== "") {
            break;
        }
        Name = prompt("To start game please enter your name!");
    } while (Name.trim() == null || Name.trim() == "");
    document.querySelector(".name").innerHTML = Name;
    document.querySelector(".button-container").remove();
};
///////////////
let blocksContainer = document.querySelector(".blocks-container");
let blocks = Array.from(blocksContainer.children);
let orderRange = [...Array(blocks.length).keys()];
let time = 1000;
// console.log(blocks);
////////////////
////////////////
function shuffle(Array) {
    let current = Array.length,
        temp,
        random;
    while (current > 0) {
        random = Math.floor(Math.random() * current);
        current--;
        temp = Array[current];
        Array[current] = Array[random];
        Array[random] = temp;
    }
    return Array;
}
////////////////
////////////////
shuffle(orderRange);
console.log(orderRange);
blocks.forEach((e, index) => {
    e.style.order = orderRange[index];
});

///////////////
///////////////
blocks.forEach((block) => {
    block.addEventListener("click", function () {
        flipped(block);
        matched(block);
    });
});
////////////////
function checkblocks(first, second) {
    if (first.dataset.tech === second.dataset.tech) {
        console.log(first.dataset.tech === second.dataset.tech);
        first.classList.add("matched");
        second.classList.add("matched");
        first.classList.remove("flipped");
        second.classList.remove("flipped");
    } else {
        setTimeout(() => {
            first.classList.remove("flipped");
            second.classList.remove("flipped");
        }, 1000);
    }
}
////////////////
function flipped(selectedblock) {
    selectedblock.classList.add("flipped");

    let flippedblocks = blocks.filter((flippedblock) => flippedblock.classList.contains("flipped"));
    if (flippedblocks.length === 2) {
        stopclicking();
        checkblocks(flippedblocks[0], flippedblocks[1]);
        console.log(flippedblocks[0], flippedblocks[1]);
        console.log(flippedblocks[0].dataset.tech, flippedblocks[1].dataset.tech);
    }
}
////////////
////////////

function stopclicking() {
    blocksContainer.classList.add("stopClicking");
    setTimeout(() => {
        blocksContainer.classList.remove("stopClicking");
    }, 1000);
}
/////////////
/////////////

//////////////
//////////////
function f() {
    setTimeout(() => {
        let a = document.querySelectorAll(".block .face");
        a.forEach((e) => {
            e.style = "backface-visibility:visible";
            // e.style = "transform:rotateY(0deg);";
        });
    }, 1000);
}
///////////////////////////
function v() {
    let a = document.querySelectorAll(".block .face");
    a.forEach((e) => {
        e.style = "backface-visibility:hidden";
        // e.style = "transform:rotateY(180deg);";
    });
}
function matched(selectedblock) {
    let flippedblocks = blocks.filter((flippedblock) => flippedblock.classList.contains("matched"));
    if (flippedblocks.length === 20) {
        stopclicking();
        document.querySelector(".end-game").style = "display:block";
    }
}
document.querySelector(".end").onclick = function () {
    window.close();
};
