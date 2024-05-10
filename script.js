let atCursor = document.querySelector(".at-cursor-element");
let atCursorReact = document.querySelectorAll("a");
let cursorScale = document.querySelectorAll(".cursor-scale");

let atMouseX = 0;
let atMouseY = 0;

let atCursorX = 0;
let atCursorY = 0;

let atSpeed = 0.2;

function animate() {
  let atDistX = atMouseX - atCursorX;
  let atDistY = atMouseY - atCursorY;

  atCursorX = atCursorX + atDistX * atSpeed;
  atCursorY = atCursorY + atDistY * atSpeed;

  atCursor.style.left = atCursorX + "px";
  atCursor.style.top = atCursorY + "px";

  requestAnimationFrame(animate);
}
animate();

window.addEventListener("mousemove", (e) => {
  atMouseX = e.clientX;
  atMouseY = e.clientY;
});

atCursorReact.forEach((link) => {
  link.addEventListener("mousemove", () => {
    atCursor.classList.add("at-cursor-element-pointer");
    // if (link.classList.contains("small")) {
    //   atCursor.classList.remove("at-cursor-element-pointer");
    //   atCursor.classList.add("at-cursor-element-other");
    // }
  });

  link.addEventListener("mouseleave", () => {
    atCursor.classList.remove("at-cursor-element-pointer");
    // atCursor.classList.remove("at-cursor-element-other");
  });
});

cursorScale.forEach((link) => {
  link.addEventListener("mousemove", () => {
    atCursor.classList.add("grow");
    if (link.classList.contains("small")) {
      atCursor.classList.remove("grow");
      atCursor.classList.add("grow-small");
    }
  });

  link.addEventListener("mouseleave", () => {
    atCursor.classList.remove("grow");
    atCursor.classList.remove("grow-small");
  });
});


var loader = $(".loader"),
  l_text = loader.find(".loader-text");

var width = 100,
  perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
  EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
  time = parseInt((EstimatedTime / 100) % 60) * 60;

// Percentage Increment Animation
var PercentageID = l_text,
  start = 0,
  end = 100,
  durataion = time;
animateValue(PercentageID, start, end, durataion);

function animateValue(id, start, end, duration) {
  var range = end - start,
    current = start,
    increment = end > start ? 1 : -1,
    stepTime = Math.abs(Math.floor(duration / range)),
    obj = $(id);

  var timer = setInterval(function () {
    current += increment;
    $(obj).text(current + "%");
    // obj.innerHTML = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

// Fading Out Loadbar on Finised
setTimeout(function () {
  loader.fadeOut(300);
}, time);

