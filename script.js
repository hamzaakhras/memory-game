document.querySelector(".controls-buttons span").onclick = function () {
  let Name;
  Name = prompt("Whats Your Name?");

  do {
    if (Name.trim() !== "") {
      break;
    }
    Name = prompt("To Start Game ==> Please Enter Your Name");
  } while (Name == null || Name.trim() == "");

  document.querySelector(".name span").innerHTML = Name;
  document.querySelector(".controls-buttons").remove();
  //   console.log(Name);
};
//
///////////////////////////
let duration = 1000;
let blocksContainer = document.querySelector(".memory-blocks");
let blocks = Array.from(blocksContainer.children);
let orderRange = [...Array(blocks.length).keys()];
// console.log(orderRange);
shuffle(orderRange);
// console.log(orderRange);
// let orderRange = Array.from(Array(blocks.length).keys());  //NOTE - the second method
///////////////////////////
/// add random index for block order
//
blocks.forEach((e, index) => {
  e.style.order = orderRange[index];
});
/// add click event for all blocks
//
blocks.forEach((block) => {
  block.addEventListener("click", function () {
    flipped(block);
  });
});
///////////////////////////
///  add class "flipped"
/// filter blocks with flipped class
function flipped(selectedblock) {
  //
  selectedblock.classList.add("flipped");
  //
  let flippedblocks = blocks.filter((flippedblock) =>
    flippedblock.classList.contains("flipped")
  );
  // console.log(flippedblocks);
  //
  if (flippedblocks.length === 2) {
    // To stop click function
    stopclicking();
    checkblocks(flippedblocks[0], flippedblocks[1]);
  }
}
///////////////////////////
function stopclicking() {
  blocksContainer.classList.add("stopClicking");
  setTimeout(() => {
    blocksContainer.classList.remove("stopClicking");
  }, duration);
}
// check blocks
function checkblocks(firstblock, secondblock) {
  let tries = document.querySelector(".tries span");
  if (firstblock.dataset.tech === secondblock.dataset.tech) {
    firstblock.classList.remove("flipped");
    secondblock.classList.remove("flipped");
    firstblock.classList.add("matched");
    secondblock.classList.add("matched");
    document.getElementById("success").play;
  } else {
    tries.innerHTML = parseInt(tries.innerHTML) + 1;
    setTimeout(() => {
      firstblock.classList.remove("flipped");
      secondblock.classList.remove("flipped");
    }, duration);
    document.getElementById("fail").play;
  }
}
///////////////////////////
///////  orderRange ==> random orderRange
// random function
function shuffle(Array) {
  let current = Array.length,
    random,
    temp;

  while (current > 0) {
    random = Math.floor(Math.random() * current);
    current--;
    temp = Array[current];
    Array[current] = Array[random];
    Array[random] = temp;
  }
  return Array;
}
function f() {
  setTimeout(() => {
    let a = document.querySelectorAll(".game-block .face");
    a.forEach((e) => {
      e.style = "backface-visibility:visible";
      // e.style = "transform:rotateY(0deg);";
    });
  }, duration);
}
///////////////////////////
function v() {
  let a = document.querySelectorAll(".game-block .face");
  a.forEach((e) => {
    e.style = "backface-visibility:hidden";
    // e.style = "transform:rotateY(180deg);";
  });
}
